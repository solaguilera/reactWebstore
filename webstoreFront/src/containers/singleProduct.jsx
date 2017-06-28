import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../components/product.jsx';
import Form from '../components/form.jsx';
import Button from '../components/button.jsx';
import Comments from '../components/comments.jsx';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Product />
				<Form />
				<Button />
				<Comments />
			</div>
		);
	}
}

export default SingleProduct;
