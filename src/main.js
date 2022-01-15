import App from './App.svelte';
import moment from 'moment';

const app = new App({
	target: document.body,
	props: {
		
	},
	external: ['moment'] 
});

export default app;