import { isClass } from './is-class';
import { performTests } from './test-objects.spec';


describe('isClass', () => {
	performTests(isClass, ['class']);
});
