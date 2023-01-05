import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	HStack,
	IconButton,
	Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useToast from '../../../hooks/useToast';
import useUserData from '../../../hooks/useUserData';
import {
	ArticleItemFragment,
	useDeleteArticleMutation,
	useFollowArticleMutation,
} from './ArticleItem.generated';

type ArticleItemProps = {
	fragment: ArticleItemFragment;
};

const ArticleItem = ({ fragment }: ArticleItemProps) => {
	const { toastSuccess, toastError } = useToast();
	const [nbFollowers, setNbFollowers] = useState<number>(0);
	const [followArticle, { loading }] = useFollowArticleMutation();
	const [deleteArticle, { loading: loadingDeletion }] =
		useDeleteArticleMutation();
	const { userId } = useUserData();

	useEffect(() => {
		setNbFollowers(fragment.article_followers.length);
	}, [setNbFollowers, fragment.article_followers.length]);

	const canRemove = userId === fragment.user.id;

	const onClick = async () => {
		try {
			// Optimistic handle with a useState
			setNbFollowers((oldValue) => oldValue + 1);
			const { errors } = await followArticle({
				variables: {
					article_follower: {
						articleId: fragment.id,
					},
				},
			});
			if (errors?.length) throw new Error();
		} catch (error) {
			setNbFollowers(fragment.article_followers.length);
		}
	};

	const onRemove = async () => {
		try {
			const { errors } = await deleteArticle({
				variables: {
					id: fragment.id,
				},
			});
			if (errors?.length) throw new Error();
			toastSuccess('Article supprimée avec succès');
		} catch (error) {
			toastError("Erreur lors de la suppression de l'article");
		}
	};

	return (
		<Card w="20rem">
			<CardHeader>{fragment.title}</CardHeader>
			<CardBody>
				<Text overflowY="auto" height="10rem">
					{fragment.description}
				</Text>
			</CardBody>
			<CardFooter display="flex" justify="space-between">
				<IconButton
					aria-label="garbage"
					onClick={onRemove}
					disabled={loadingDeletion || !canRemove}
				>
					<DeleteIcon />
				</IconButton>
				<HStack>
					<IconButton aria-label="star" onClick={onClick} disabled={loading}>
						<StarIcon />
					</IconButton>
					<Text>{nbFollowers}</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default ArticleItem;
