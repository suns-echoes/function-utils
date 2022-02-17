import { AsyncConstructor, AsyncGeneratorFunction, GeneratorFunction } from './constructors.const';


export function isSyncFunction(fn: AnyFunction): boolean {
	return typeof fn === 'function'
		&& fn.constructor !== AsyncConstructor
		&& fn.prototype?.constructor !== GeneratorFunction
		&& fn.prototype?.constructor !== AsyncGeneratorFunction
		&& !fn.toString().startsWith('class ');
}
