import { generateInviteToken } from '@utils/generateInviteToken';
import { guardAuth } from '@utils/guardAuth';
import { guardBodyParams } from '@utils/guardBodyParams';
import { route } from '@utils/route';
import * as yup from 'yup';

const yupSchema = yup.object().shape({
	key: yup.string().required(),
});

export default route(async (context) => {
	guardAuth(context);

	const { key } = guardBodyParams(context, yupSchema);

	const token = generateInviteToken(key);

	return { token };
});
