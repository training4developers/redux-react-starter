import * as React from 'react';

interface CounterProps {
	store: any
}

interface CounterState {
	counter: number
}

export class Counter extends React.Component<CounterProps, CounterState> {

	static propTypes = {
		store: React.PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		};
	}

	render() {
		return <h1>Counter: {this.state.counter}</h1>;
	}

}
