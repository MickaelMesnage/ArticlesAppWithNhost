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
import { ArticleItemFragment } from './ArticleItem.generated';

type ArticleItemProps = {
	fragment: ArticleItemFragment;
};

const ArticleItem = ({ fragment }: ArticleItemProps) => {
	const onClick = () => {
		console.log(fragment.id);
	};

	return (
		<Card>
			<CardHeader>{fragment.title}</CardHeader>
			<CardBody>
				<Text>{fragment.description}</Text>
			</CardBody>
			<CardFooter display="flex" justify="end">
				<HStack>
					<IconButton aria-label="sonnette" onClick={onClick}>
						<BellIcon />
					</IconButton>
					<Text>0</Text>
				</HStack>
			</CardFooter>
		</Card>
	);
};

export default ArticleItem;
