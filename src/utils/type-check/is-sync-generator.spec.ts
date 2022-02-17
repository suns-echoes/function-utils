import { isSyncGenerator } from './is-sync-generator';
import { performTests } from './test-objects.spec';


describe('isSyncGenerator', () => {
	performTests(isSyncGenerator, ['generator']);
});
