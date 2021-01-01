/* global window, document */
if (!window._babelPolyfill) {
	require('@babel/polyfill');
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(<App />, document.getElementById('react-js-in-wp'));
});