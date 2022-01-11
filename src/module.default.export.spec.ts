import Lib from '.';
import { FunctionUtils as NamedLib } from './function-utils';

describe('Module', () => {
	it('exports library as default', () => {
		expect(Lib).to.be.eql(NamedLib);
	});
});
