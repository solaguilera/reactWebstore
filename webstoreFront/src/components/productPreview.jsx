import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link, IndexLink } from 'react-router';

class ProductPreview extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {
		const product = this.props.product
		return (
		<div>
			<Link to={`/singleProduct/${product._id}`}>
				<img src={product.imgUrl}></img>
				<h2 >Artist: {product.artist}</h2>
				<h3 >Album: {product.album}</h3>
				<p >Price: {product.price}</p>
			</Link>
		</div>
	);
	}
}

export default ProductPreview;
