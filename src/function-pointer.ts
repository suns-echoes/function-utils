interface AnyFunction {
    (...args: any[]): any,
}

interface FunctionPointer extends AnyFunction {};


const FunctionPointerTarget = Symbol('FunctionPointerTarget');

export function FunctionPointer<T extends FunctionPointer>(target: T): T {
	const __fn_ptr = function FunctionPointer(...args) {
		return __fn_ptr[FunctionPointerTarget](...args);
	};

	Object.defineProperty(__fn_ptr, 'name', { value: target.name });
	__fn_ptr[FunctionPointerTarget] = target;

	return <T>__fn_ptr;
}

FunctionPointer.Target = FunctionPointerTarget;

FunctionPointer.set = function (pointer: FunctionPointer, newTarget) {
	Object.defineProperty(pointer, 'name', { value: newTarget.name });
	pointer[FunctionPointerTarget] = newTarget;
}
