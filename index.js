'use strict';

var conf = require('rc')('npm');

/**
 * Get configured proxy
 *
 * @api public
 */

module.exports = function () {
	return conf['https-proxy'] ||
		conf['http-proxy'] ||
		conf.proxy ||
		process.env.HTTPS_PROXY ||
		process.env.https_proxy ||
		process.env.HTTP_PROXY ||
		process.env.http_proxy ||
		null;
};
