import React from 'react';
import ReactDOM from 'react-dom';
import ProductPreview from '../components/ProductPreview.jsx';
import Form from '../components/form.jsx';
import Button from '../components/button.jsx';

class AllProducts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ProductPreview />
				<Form />
				<Button />
			</div>
		);
	}
}

export default AllProducts;
