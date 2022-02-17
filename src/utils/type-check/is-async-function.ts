import { AsyncConstructor } from './constructors.const';


export function isAsyncFunction(fn: AnyFunction): boolean {
	return typeof fn === 'function'
		&& fn.constructor === AsyncConstructor;
}
