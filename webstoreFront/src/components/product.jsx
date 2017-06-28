import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props)
		this.props.product
	}
	render() {
		const product = this.props.product
		return (
		<div>
			<img id='' src={product.imgUrl}></img>
			<h2 >Artist: {product.artist}</h2>
			<h3>Album: {product.album}</h3>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
		</div>
	);
	}
}

export default Product;
