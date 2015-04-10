'use strict';

var test = require('ava');
var getProxy = require('./');

test('get configured proxy', function (t) {
	var proxy = process.env.HTTP_PROXY;
	process.env.HTTP_PROXY = 'http://192.168.0.1:8080';
	t.assert(getProxy() === 'http://192.168.0.1:8080');
	process.env.HTTP_PROXY = proxy;
	t.end();
});
