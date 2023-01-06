import { Button, FormLabel, VStack } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

interface ImageFormProps {
	onSubmit: (file: File) => Promise<void>;
	isValidButtonDisabled: boolean;
}

const ImageForm = ({ onSubmit, isValidButtonDisabled }: ImageFormProps) => {
	const [file, setFile] = useState<File | null>();

	const onFormSubmit = async () => {
		if (file) {
			await onSubmit(file);
		}
	};

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e?.target?.files?.[0]) {
			setFile(e?.target?.files[0]);
		} else {
			setFile(null);
		}
	};

	return (
		<VStack align="start">
			<FormLabel>Fichier</FormLabel>
			<input type="file" accept="image/*" onChange={handleFileChange} />
			<Button onClick={onFormSubmit} disabled={isValidButtonDisabled}>
				Upload
			</Button>
		</VStack>
	);
};

export default ImageForm;
