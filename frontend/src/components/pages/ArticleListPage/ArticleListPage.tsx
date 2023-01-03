import { Flex, Heading, Spinner, VStack } from '@chakra-ui/react';
import Error from '../../atoms/Error';
import ArticleItem from '../../molecules/ArticleItem/ArticleItem';
import ArticleCreationModalForm from '../../organisms/ArticleCreationModalForm/ArticleCreationModalForm';
import { useArticleListPageSubscription } from './ArticleListPage.generated';

const ArticleListPage = () => {
	const { data, loading, error } = useArticleListPageSubscription();

	if (loading) return <Spinner />;

	if (error || !data?.articles) return <Error />;

	return (
		<VStack w="full" align="start">
			<Heading>Liste des articles</Heading>
			<ArticleCreationModalForm />
			<Flex gap={6} wrap="wrap">
				{data.articles.map((article) => (
					<ArticleItem key={article.id} fragment={article} />
				))}
			</Flex>
		</VStack>
	);
};

export default ArticleListPage;
