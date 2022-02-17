import { isGenerator } from './is-generator';
import { performTests } from './test-objects.spec';


describe('isGenerator', () => {
	performTests(isGenerator, [
		'generator',
		'async generator',
	]);
});
