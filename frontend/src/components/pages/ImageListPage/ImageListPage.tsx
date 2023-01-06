import { Flex, Heading, Image, Spinner, VStack } from '@chakra-ui/react';
import nhost from '../../../nhost';
import Error from '../../atoms/Error';
import ImageUploadModalForm from '../../organisms/ImageUploadModalForm/ImageUploadModalForm';
import { useImageListPageSubscription } from './ImageListPage.generated';

const ImageListPage = () => {
	const { data, loading, error } = useImageListPageSubscription();

	if (loading) return <Spinner />;

	if (error || !data?.files) return <Error />;

	return (
		<VStack w="full" align="start">
			<Heading>Liste des images</Heading>
			<ImageUploadModalForm />
			<Flex gap={6} wrap="wrap">
				{data.files.map((file) => {
					const url = nhost.storage.getPublicUrl({ fileId: file.id });

					return <Image key={file.id} src={`${url}?w=250`} />;
				})}
			</Flex>
		</VStack>
	);
};

export default ImageListPage;
