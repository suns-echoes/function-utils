import { GeneratorFunction } from './constructors.const';


export function isSyncGenerator(fn: AnyFunction): boolean {
	return typeof fn === 'function'
		&& fn.prototype?.constructor === GeneratorFunction;
}
