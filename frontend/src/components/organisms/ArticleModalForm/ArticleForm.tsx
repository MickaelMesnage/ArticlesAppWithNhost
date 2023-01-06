import { Button, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export type ArticleFormSubmitProps = {
	title: string;
	description: string;
};

interface ArticleFormProps {
	onSubmit: (data: ArticleFormSubmitProps) => Promise<void>;
	isValidButtonDisabled: boolean;
	validButtonLabel: string;
	defaultValues?: ArticleFormSubmitProps;
}

const ArticleForm = ({
	onSubmit,
	validButtonLabel,
	isValidButtonDisabled,
	defaultValues,
}: ArticleFormProps) => {
	const [title, setTitle] = useState<string>(defaultValues?.title || '');
	const [description, setDescription] = useState<string>(
		defaultValues?.description || '',
	);

	const areTitleAndDescriptionNotEmpty = (): boolean =>
		Boolean(title) && Boolean(description);

	// Todo check this
	// const resetFields = () => {
	// 	setTitle('');
	// 	setDescription('');
	// };

	const onFormSubmit = async () => {
		if (areTitleAndDescriptionNotEmpty()) {
			await onSubmit({ title, description });
		}
	};

	return (
		<VStack align="start">
			<FormLabel>Titre</FormLabel>
			<Input value={title} onChange={(e) => setTitle(e.target.value)} />
			<FormLabel>Description</FormLabel>
			<Textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Button onClick={onFormSubmit} disabled={isValidButtonDisabled}>
				{validButtonLabel}
			</Button>
		</VStack>
	);
};

export default ArticleForm;
