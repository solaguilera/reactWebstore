import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from './main.jsx';
import SingleProduct from './singleProduct.jsx';
import AllProducts from './allProducts.jsx';
import Home from './home.jsx';

ReactDOM.render(<Router history={hashHistory}>
	<Route path='/' component={Main}>
		<IndexRoute component={Home}/>
		<Route path='singleProduct' component={SingleProduct}/>
		<Route path='allProducts' component={AllProducts}/>
	</Route>
</Router>, document.getElementById('app'));
