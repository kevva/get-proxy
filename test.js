import test from 'ava';
import fn from './';

test('get configured proxy', t => {
	const proxy = process.env.HTTP_PROXY;
	process.env.HTTP_PROXY = 'http://192.168.0.1:8080';
	t.is(fn(), 'http://192.168.0.1:8080');
	process.env.HTTP_PROXY = proxy;
});
