import { md5 } from '@utils/md5';
import settings from '@utils/settings';

export function generateInviteToken(key: string) {
	return md5(key + settings.security.invitation_token);
}
