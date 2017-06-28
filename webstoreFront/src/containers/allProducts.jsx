import React from 'react';
import ReactDOM from 'react-dom';
import ProductPreview from '../components/ProductPreview.jsx';
import Form from '../components/form.jsx';
import Button from '../components/button.jsx';
import { Router, Route, hashHistory, IndexRoute, Link, IndexLink } from 'react-router';

class AllProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: null
		}
	}
	componentWillMount(){
		this.getProducts()
	}
	getProducts() {
		let url = 'http:localhost:3000/products'
		fetch(url).then((response)=>{
			response.json().then((data)=>{
				this.setState({
					products: data,
				})
			})
		})
	}
	render() {
		if (this.state.products === null){
			return <div>Los productos se estan cargando</div>
		}
		return (
			<div>
					{this.state.products.map((producto, i) => <ProductPreview product={producto} key={producto._id} /> )}
					<Form />
					<Button />
			</div>
		)
	}
}

export default AllProducts;
