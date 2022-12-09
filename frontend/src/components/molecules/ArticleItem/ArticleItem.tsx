import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import { ArticleItemFragment } from './ArticleItem.generated';

type ArticleItemProps = {
	fragment: ArticleItemFragment;
};

const ArticleItem = ({ fragment }: ArticleItemProps) => {
	return (
		<Card>
			<CardHeader>{fragment.title}</CardHeader>
			<CardBody>
				<Text>{fragment.description}</Text>
			</CardBody>
		</Card>
	);
};

export default ArticleItem;
