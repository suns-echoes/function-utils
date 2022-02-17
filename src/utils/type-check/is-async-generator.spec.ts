import { isAsyncGenerator } from './is-async-generator';
import { performTests } from './test-objects.spec';


describe('isAsyncGenerator', () => {
	performTests(isAsyncGenerator, ['async generator']);
});
