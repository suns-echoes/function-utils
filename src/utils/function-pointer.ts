const FunctionPointerTarget = Symbol('FunctionPointerTarget');

export interface FunctionPointer extends AnyFunction {
	[FunctionPointerTarget]: AnyFunction | null,
}

export function FunctionPointer<T extends AnyFunction>(target?: T): T & FunctionPointer {
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const __fn_ptr = <T & FunctionPointer> function FunctionPointer(...args: any[]): ReturnType<T> {
		return __fn_ptr[FunctionPointerTarget]!(...args);
	};

	if (typeof target === 'function') {
		Object.defineProperty(__fn_ptr, 'name', { value: target.name });
		__fn_ptr[FunctionPointerTarget] = target;
	}
	else {
		__fn_ptr[FunctionPointerTarget] = null;
	}

	return __fn_ptr;
}

FunctionPointer.set = function (pointer: FunctionPointer, newTarget: AnyFunction): void {
	Object.defineProperty(pointer, 'name', { value: newTarget.name });
	pointer[FunctionPointerTarget] = newTarget;
};
