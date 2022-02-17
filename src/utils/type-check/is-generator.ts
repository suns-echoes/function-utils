import { AsyncGeneratorFunction, GeneratorFunction } from './constructors.const';


export function isGenerator(fn: AnyFunction): boolean {
	let constr;

	return typeof fn === 'function'
		&& (constr = fn.prototype?.constructor, constr === GeneratorFunction || constr === AsyncGeneratorFunction);
}
