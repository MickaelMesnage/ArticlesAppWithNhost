import {
	Button,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import useToast from '../../../hooks/useToast';
import ArticleForm, {
	ArticleFormSubmitProps,
} from '../ArticleModalForm/ArticleForm';
import { useArticleCreationMutation } from './ArticleCreationModalForm.generated';

const ArticleCreationModalForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { toastSuccess, toastError } = useToast();
	const [createArticle, { loading }] = useArticleCreationMutation();

	const onSubmit = async ({ title, description }: ArticleFormSubmitProps) => {
		const { errors } = await createArticle({
			variables: {
				article: {
					title,
					description,
				},
			},
		});

		if (!errors) {
			// resetFields();
			onClose();
			toastSuccess('Article créé avec succès');
		} else {
			toastError("Erreur lors de la création de l'article");
		}
	};

	return (
		<>
			<Button onClick={onOpen}>Ajouter un article</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Heading>Ajouter un article</Heading>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ArticleForm
							onSubmit={onSubmit}
							validButtonLabel="Créer"
							isValidButtonDisabled={loading}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ArticleCreationModalForm;
