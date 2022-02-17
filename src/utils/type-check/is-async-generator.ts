import { AsyncGeneratorFunction } from './constructors.const';


export function isAsyncGenerator(fn: AnyFunction): boolean {
	return typeof fn === 'function'
		&& fn.prototype?.constructor === AsyncGeneratorFunction;
}
