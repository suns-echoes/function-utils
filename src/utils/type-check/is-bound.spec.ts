import { isBound } from './is-bound';
import { performTests } from './test-objects.spec';


describe('isBound', () => {
	performTests(isBound, [
		'bound anonymous function',
		'bound named function',
		'arrow function',
		'async bound anonymous function',
		'async bound named function',
		'async arrow function',
	]);
});
