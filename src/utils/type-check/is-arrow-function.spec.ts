import { isArrowFunction } from './is-arrow-function';
import { performTests } from './test-objects.spec';


describe('isArrowFunction', () => {
	performTests(isArrowFunction, [
		'arrow function',
		'async arrow function',
	]);
});
