import path from 'path';
import test from 'ava';
import m from './';

test(t => {
	t.is(path.basename(m()[0].getFileName()), 'test.js');
});
