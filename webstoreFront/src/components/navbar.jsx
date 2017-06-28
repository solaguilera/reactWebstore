import React from 'react';
import {Link, IndexLink} from 'react-router';

class Navbar extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Navbar</h2>
				<IndexLink to='/' activeClassName='active'>Home</IndexLink>
				<Link to='/AllProducts' activeClassName='active'>All Products</Link>
				{/* <Link to='/CreateProduct' activeClassName='active'>Create Product</Link> */}
			</div>
		 );
	}
}

export default Navbar;
