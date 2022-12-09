import { Heading, Spinner, VStack } from '@chakra-ui/react';
import Error from '../../atoms/Error';
import ArticleItem from '../../molecules/ArticleItem/ArticleItem';
import { useArticleListPageSubscription } from './ArticleListPage.generated';

const ArticleListPage = () => {
	const { data, loading, error } = useArticleListPageSubscription();

	if (loading) return <Spinner />;

	if (error || !data?.articles) {
		console.log({ error });
		return <Error />;
	}

	return (
		<VStack w="full" align="start">
			<Heading>Liste des articles</Heading>
			{data.articles.map((article) => (
				<ArticleItem key={article.id} fragment={article} />
			))}
		</VStack>
	);
};

export default ArticleListPage;
