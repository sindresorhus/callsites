import path from 'node:path';
import test from 'ava';
import callsites from './index.js';

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

	const filename = import.meta.url.toString();

	t.deepEqual(sites, [
		{fileName: filename, functionName: 'g'},
		{fileName: filename, functionName: 'f'},
		{fileName: filename, functionName: null},
	]);
});
