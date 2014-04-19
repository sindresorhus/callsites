'use strict';
var assert = require('assert');
var path = require('path');
var callsites = require('./index');

it('should get the callsites', function () {
	assert.strictEqual(path.basename(callsites()[0].getFileName()), 'test.js');
});
