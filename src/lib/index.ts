import { app } from '@fluwy/ui';
import { error, redirect } from '@sveltejs/kit';

import { Welcome } from '$lib/components';

app.config({ error, redirect }).plug({
	name: 'app',

	/**
	 * The components you want to register goes here
	 */
	components: {
		Welcome,
	},

	/**
	 * The operations you want to register goes here
	 */
	// operations: {}
});
