import { isAsync } from './is-async';
import { performTests } from './test-objects.spec';


describe('isAsync', () => {
	performTests(isAsync, [
		'async anonymous function',
		'async named function',
		'async bound anonymous function',
		'async bound named function',
		'async arrow function',
		'async generator',
	]);
});
