import { lstatSync, readdirSync } from 'fs';
import Lib from './index';

import { FunctionUtils as NamedLib } from './function-utils';
import { join } from 'path';

const sourceFilesFilter = /^.+?(?<!\.spec)\.(?:js|ts)$/;

async function findMethods(path: string, url: string, _members: string[] = []): Promise<string[]> {
	const entities = readdirSync(path);

	for (const entity of entities) {
		const entityPath = join(path, entity);
		const stat = lstatSync(entityPath);

		if (stat.isFile() && sourceFilesFilter.test(entity)) {
			Object.keys(
				await import(`${url}${entity}`),
			).forEach((key) => {
				_members.push(key);
			});
		}
		else if (stat.isDirectory()) {
			findMethods(entityPath, `${url}${entity}/`, _members);
		}
	}

	return _members;
}
describe('Module', () => {
	it('exports all existing methods', async () => {
		const exportedMethods = Object.keys(NamedLib);
		const foundMethods = await findMethods('./src/utils/', './utils/');

		expect(exportedMethods).to.be.eql(foundMethods);
	});

	it('exports as default', () => {
		expect(Lib).to.be.eql(NamedLib);
	});
});
