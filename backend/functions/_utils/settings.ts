import * as dotenv from 'dotenv';
dotenv.config();

const isLocal = process.env.NHOST_ADMIN_SECRET === 'nhost-admin-secret';

export default {
	isLocal,
	url: isLocal ? 'http://localhost:3000' : 'url_of_your_website_frontend',
	security: {
		invitation_token: process.env.SECURITY_INVITATION_TOKEN || '',
	},
	baseUrl: process.env.BASE_URL,
};
