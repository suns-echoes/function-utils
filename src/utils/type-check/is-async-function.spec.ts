import { isAsyncFunction } from './is-async-function';
import { performTests } from './test-objects.spec';


describe('isAsyncFunction', () => {
	performTests(isAsyncFunction, [
		'async anonymous function',
		'async named function',
		'async bound anonymous function',
		'async bound named function',
		'async arrow function',
	]);
});
