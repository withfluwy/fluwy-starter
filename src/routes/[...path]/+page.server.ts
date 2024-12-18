import type { PageServerLoad } from './$types';
import { app } from '@fluwy/ui';

export const load: PageServerLoad = async ({ params, cookies }) => {
	return app.render(params.path, { auth_token: cookies.get('auth_token') });
};
