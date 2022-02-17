/* eslint-disable no-prototype-builtins */
import { AsyncGeneratorFunction, GeneratorFunction } from './constructors.const';


/* c8 ignore next 2 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
const useFastPath = (function (): void {}).hasOwnProperty('arguments');


export function isClass(entity: any): boolean {
	return typeof entity === 'function'
		&& typeof entity.prototype === 'object'
		&& entity.prototype.constructor !== GeneratorFunction
		&& entity.prototype.constructor !== AsyncGeneratorFunction
		/* c8 ignore next */
		&& useFastPath ? !entity.hasOwnProperty('arguments') : entity.toString().startsWith('class ');
}
