import { isSyncFunction } from './is-sync-function';
import { performTests } from './test-objects.spec';


describe('isSyncFunction', () => {
	performTests(isSyncFunction, [
		'anonymous function',
		'named function',
		'bound anonymous function',
		'bound named function',
		'arrow function',
	]);
});
