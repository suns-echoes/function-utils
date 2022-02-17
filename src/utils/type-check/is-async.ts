import { AsyncConstructor, AsyncGeneratorFunction } from './constructors.const';


export function isAsync(fn: AnyFunction): boolean {
	return typeof fn === 'function'
		&& (fn.constructor === AsyncConstructor || fn.prototype?.constructor === AsyncGeneratorFunction);
}
