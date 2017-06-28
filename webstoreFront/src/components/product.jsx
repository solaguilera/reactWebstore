import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
		<div>
			<img id='' src=''></img>
			<h2 id='productArtist'>Artist</h2>
			<h3 id='productAlbum'>Album</h3>
			<p id='productPrice'>Price</p>
			<p id='productDescription'>Description</p>
		</div>
	);
	}
}

export default Product;
