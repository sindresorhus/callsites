import path from 'path';
import test from 'ava';
import callsites from '.';

test('main', t => {
	t.is(path.basename(callsites()[0].getFileName()), 'test.js');
});
