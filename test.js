import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import callsites from './index.js';

const __filename = fileURLToPath(import.meta.url);

test('main', t => {
	t.is(path.basename(callsites()[0].getFileName()), 'test.js');
});

test('nested', t => {
	const g = () => callsites();
	const f = () => g();

	const sites = f().slice(0, 3).map(site => ({
		fileName: site.getFileName(),
		functionName: site.getFunctionName(),
	}));

	t.deepEqual(sites, [
		{fileName: __filename, functionName: 'g'},
		{fileName: __filename, functionName: 'f'},
		{fileName: __filename, functionName: null},
	]);
});
