import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { app } from '@fluwy/ui';

export const load: PageServerLoad = async ({ params, cookies }) => {
	app.config = {
		pages: 'app/pages',
		layouts: 'app/layouts',
		themes: 'app/themes',
		error,
		redirect
	};
	return app.render(params.path, { auth_token: cookies.get('auth_token') });
};
