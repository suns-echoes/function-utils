export const testObjects: AnyObject = {
	'anonymous function': function (...args: any[]): any[] {
		return args;
	},
	'named function': function testFunction(...args: any[]): any[] {
		return args;
	},
	'bound anonymous function': (function (...args: any[]): any[] {
		return args;
	}).bind({}),
	'bound named function': (function testFunction(...args: any[]): any[] {
		return args;
	}).bind({}),
	'arrow function': (...args: any[]): any[] => {
		return args;
	},
	'async anonymous function': async function (...args: any[]): Promise<any[]> {
		return args;
	},
	'async named function': async function testFunction(...args: any[]): Promise<any[]> {
		return args;
	},
	'async bound anonymous function': (async function (...args: any[]): Promise<any[]> {
		return args;
	}).bind({}),
	'async bound named function': (async function testFunction(...args: any[]): Promise<any[]> {
		return args;
	}).bind({}),
	'async arrow function': async (...args: any[]): Promise<any[]> => {
		return args;
	},
	'generator': function* generator(...args: any[]): Generator<any> {
		yield args;
	},
	'async generator': async function* generator(...args: any[]): AsyncGenerator<any> {
		yield args;
	},
	'class': class Cls {
		args: any[];

		constructor(...args: any[]) {
			this.args = args;
		}
	},
};


type TestCase = [string, AnyFunction][];

interface TestCases {
	shouldBeTrue: TestCase,
	shouldBeFalse: TestCase,
}

function prepareTestCases(expectToBeTrue: string[]): TestCases {
	const shouldBeFalse: TestCase = [];
	const shouldBeTrue: TestCase = [];

	Object.keys(testObjects).forEach((name) => {
		const testObject = testObjects[name];

		if (expectToBeTrue.includes(name)) {
			shouldBeTrue.push([name, testObject]);
		}
		else {
			shouldBeFalse.push([name, testObject]);
		}
	});

	return {
		shouldBeFalse,
		shouldBeTrue,
	};
}

export function performTests(testFunction: AnyFunction, expectedToBeTrue: string[]): void {
	const testCases = prepareTestCases(expectedToBeTrue);

	testCases.shouldBeTrue.forEach(([name, testObject]) => {
		it(`returns "true" for ${name}`, () => {
			expect(testFunction(testObject), name).to.be.true;
		});
	});

	testCases.shouldBeFalse.forEach(([name, testObject]) => {
		it(`returns "false" for ${name}`, () => {
			expect(testFunction(testObject), name).to.be.false;
		});
	});
}
