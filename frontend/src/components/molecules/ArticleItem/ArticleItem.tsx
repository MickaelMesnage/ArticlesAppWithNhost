import { BellIcon } from '@chakra-ui/icons';
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
import {
	ArticleItemFragment,
	useFollowArticleMutation,
} from './ArticleItem.generated';

type ArticleItemProps = {
	fragment: ArticleItemFragment;
};

const ArticleItem = ({ fragment }: ArticleItemProps) => {
	const [nbFollowers, setNbFollowers] = useState<number>(0);
	const [followArticle, { loading }] = useFollowArticleMutation();

	useEffect(() => {
		setNbFollowers(fragment.article_followers.length);
	}, [setNbFollowers, fragment.article_followers.length]);

	const onClick = async () => {
		// Optimistic handle with a useState
		try {
			setNbFollowers((oldValue) => oldValue + 1);
			await followArticle({
				variables: {
					article_follower: {
						articleId: fragment.id,
					},
				},
			});
		} catch (error) {
			setNbFollowers(fragment.article_followers.length);
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
			<CardFooter display="flex" justify="end">
				<HStack>
					<IconButton
						aria-label="sonnette"
						onClick={onClick}
						disabled={loading}
					>
						<BellIcon />
					</IconButton>
					<Text>{nbFollowers}</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default ArticleItem;
