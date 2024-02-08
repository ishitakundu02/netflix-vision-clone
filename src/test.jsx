import React from 'react';
import { useState } from 'react';

const Test = () => {
	const [increment, setIncrement] = useState(5);
	const [decrement, setDecrement] = useState(5);

	function inc() {
		setIncrement(increment + 5);
		console.log(increment);
	}

	function dec() {
		setDecrement(decrement - 5);
		console.log(decrement);
	}

	return (
		<section>
			<div>
				<h1>{increment}</h1>
				<button onClick={() => inc}>+5</button>
				<button onClick={() => dec}>-5</button>
			</div>
		</section>
	);
};

export default Test;
