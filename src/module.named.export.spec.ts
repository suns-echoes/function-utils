import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import { FunctionUtils as NamedLib } from './function-utils';

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

describe('Module named export', () => {
	it('exports all existing methods', async () => {
		const exportedMethods = Object.keys(NamedLib);
		const foundMethods = await findMethods('./src/utils/', './utils/');

		expect(exportedMethods).to.be.eql(foundMethods);
	});
});
