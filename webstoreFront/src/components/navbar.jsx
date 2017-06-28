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
				<IndexLink to='/' activeClassName='active'><button type='submit'>Home</button></IndexLink>
				<Link to='/allProducts' activeClassName='active'><button type='submit'>All Products</button></Link>
				<Link to='/singleProduct' activeClassName='active'><button type='submit'>Single Products</button></Link>
				{/* <Link to='/CreateProduct' activeClassName='active'>Create Product</Link> */}
			</div>
		 );
	}
}

export default Navbar;
