import test from 'ava';
import path from 'path';
import fn from './';

test('callsites', t => {
	t.is(path.basename(fn()[0].getFileName()), 'test.js');
	t.end();
});
