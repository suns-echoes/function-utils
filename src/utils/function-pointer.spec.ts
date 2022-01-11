import { FunctionPointer } from './function-pointer';

describe('FunctionPointer', () => {
	it('creates empty pointer object', () => {
		const ptr: FunctionPointer = FunctionPointer();

		expect(ptr).to.be.a('function');
	});

	it('creates pointer to target function', () => {
		const target = sinon.spy((arg: any): any => arg >> 1);
		const ptr: FunctionPointer = FunctionPointer(target);

		const ret = ptr(48);

		expect(target).to.be.calledOnceWithExactly(48);
		expect(target).to.be.returned(24);
		expect(ret).to.be.equal(24);
	});

	it('reassigns pointer target', () => {
		const original = sinon.spy((arg: any): any => arg << 1);
		const target = sinon.spy((arg: any): any => arg >> 1);
		const ptr: FunctionPointer = FunctionPointer(original);

		FunctionPointer.set(ptr, target);

		const ret = ptr(48);

		expect(original).not.been.called;
		expect(target).to.be.calledOnceWithExactly(48);
		expect(target).to.be.returned(24);
		expect(ret).to.be.equal(24);
	});
});
