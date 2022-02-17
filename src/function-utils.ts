import { AsyncConstructor, AsyncGeneratorFunction, GeneratorFunction } from './utils/type-check/constructors.const';
import { isArrowFunction } from './utils/type-check/is-arrow-function';
import { isAsyncFunction } from './utils/type-check/is-async-function';
import { isAsyncGenerator } from './utils/type-check/is-async-generator';
import { isAsync } from './utils/type-check/is-async';
import { isBound } from './utils/type-check/is-bound';
import { isClass } from './utils/type-check/is-class';
import { isGenerator } from './utils/type-check/is-generator';
import { isSyncFunction } from './utils/type-check/is-sync-function';
import { isSyncGenerator } from './utils/type-check/is-sync-generator';
import { FunctionPointer } from './utils/function-pointer';


export const FunctionUtils = {
	AsyncConstructor,
	AsyncGeneratorFunction,
	GeneratorFunction,

	isArrowFunction,
	isAsyncFunction,
	isAsyncGenerator,
	isAsync,
	isBound,
	isClass,
	isGenerator,
	isSyncFunction,
	isSyncGenerator,

	FunctionPointer,
};
