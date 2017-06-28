import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './src/components/main.jsx';
import SingleProduct from './src/containers/singleProduct.jsx';
import AllProducts from './src/containers/allProducts.jsx';
import Home from './src/components/home.jsx';

class Rutas extends React.Component {
	render() {
	return (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='singleProduct/:id' component={SingleProduct}/>
			<Route path='allProducts' component={AllProducts}/>
		</Route>
	</Router>
)
}
}


ReactDOM.render( <Rutas></Rutas>	, document.getElementById('app'));


{/* <Link to ={'producto${product._id}'}> //comillas simples invertidas! */}
