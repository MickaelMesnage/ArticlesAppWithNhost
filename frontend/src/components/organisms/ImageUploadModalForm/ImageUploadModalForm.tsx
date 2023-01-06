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
import { useFileUpload } from '@nhost/react';
import { useState } from 'react';
import useToast from '../../../hooks/useToast';

import ImageForm from '../ImageForm/ImageForm';

const ImageUploadModalForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState<boolean>(false);
	const { toastSuccess, toastError } = useToast();
	const { upload } = useFileUpload();

	const onSubmit = async (file: File) => {
		try {
			await setLoading(true);
			const { isError } = await upload({ file, name: file.name });
			if (isError) throw Error('Error');
			onClose();
			toastSuccess('Fichier upload avec succès');
		} catch (error) {
			toastError("Erreur lors de l'upload du fichier");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Button onClick={onOpen}>Upload une image</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Heading>Upload une image</Heading>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ImageForm onSubmit={onSubmit} isValidButtonDisabled={loading} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ImageUploadModalForm;
