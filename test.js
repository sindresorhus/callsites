import test from 'ava';
import path from 'path';
import m from './';

test('callsites', t => {
	t.is(path.basename(m()[0].getFileName()), 'test.js');
});
