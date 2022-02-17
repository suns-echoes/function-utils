export function isArrowFunction(fn: AnyFunction): boolean {
	let src = '';

	return typeof fn === 'function'
		&& (src = fn.toString(), src.startsWith('(') || src.startsWith('async ('));
}
