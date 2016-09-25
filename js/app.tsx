import * as React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Counter } from './mod';

const reducer = (state = 0, action) => {

	switch(action.type) {
		case 'increment':
			return ++state;
		case 'decrement':
			return --state;
		default:
			return state;
	}

};

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

[{ type: 'increment' },{ type: 'increment' }].forEach(action => {
	store.dispatch(action);
});

render(<Counter store={store} />, document.querySelector('main'));