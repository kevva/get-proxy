'use strict';
const conf = require('rc')('npm');

module.exports = () => {
	return process.env.HTTPS_PROXY ||
		process.env.https_proxy ||
		process.env.HTTP_PROXY ||
		process.env.http_proxy ||
		conf['https-proxy'] ||
		conf['http-proxy'] ||
		conf.proxy ||
		null;
};
