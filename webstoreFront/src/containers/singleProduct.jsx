import React from 'react';
import ReactDOM from 'react-dom';
// import Watch from '../components/watch.jsx';
// import Buttons from '../components/buttons.jsx';
// import Input from '../components/input.jsx';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>single product</h1>
				<Input />
				<Button />
			</div>
		);
	}
}

export default SingleProduct;
