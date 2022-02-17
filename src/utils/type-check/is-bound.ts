/* eslint-disable no-prototype-builtins */
export function isBound(fn: AnyFunction): boolean {
	let src = '';

	return typeof fn === 'function'
		&& !fn.hasOwnProperty('arguments')
		&& !fn.hasOwnProperty('prototype')
		&& (fn.name.startsWith('bound ') || (src = fn.toString(), src.startsWith('(') || src.startsWith('async (')));
}
