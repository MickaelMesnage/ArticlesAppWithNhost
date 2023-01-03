import {
	Button,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import useToast from '../../../hooks/useToast';
import { useArticleCreationMutation } from './ArticleCreationModalForm.generated';

const ArticleCreationModalForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const { toastSuccess, toastError } = useToast();
	const [createArticle, { loading }] = useArticleCreationMutation();

	const areTitleAndDescriptionNotEmpty = (): boolean =>
		Boolean(title) && Boolean(description);

	const resetFields = () => {
		setTitle('');
		setDescription('');
	};

	const onSubmit = async () => {
		if (areTitleAndDescriptionNotEmpty()) {
			const { errors } = await createArticle({
				variables: {
					article: {
						title,
						description,
					},
				},
			});

			if (!errors) {
				resetFields();
				onClose();
				toastSuccess('Article créé avec succès');
			} else {
				toastError("Erreur lors de la création de l'article");
			}
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
						<VStack align="start">
							<FormLabel>Titre</FormLabel>
							<Input value={title} onChange={(e) => setTitle(e.target.value)} />
							<FormLabel>Description</FormLabel>
							<Textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onSubmit} disabled={loading}>
							Créer
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ArticleCreationModalForm;
