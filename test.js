import test from 'ava';
import m from './';

test(t => {
	const proxy = process.env.HTTP_PROXY;
	process.env.HTTP_PROXY = 'http://192.168.0.1:8080';
	t.is(m(), 'http://192.168.0.1:8080');
	process.env.HTTP_PROXY = proxy;
});
