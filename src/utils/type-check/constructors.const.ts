/* eslint-disable @typescript-eslint/no-empty-function */
/* c8 ignore start */
export const AsyncConstructor = (async function (): Promise<void> {}).constructor;

export const GeneratorFunction = (function* (): any {}).prototype.constructor;
export const AsyncGeneratorFunction = (async function* (): any {}).prototype.constructor;
/* c8 ignore stop */
