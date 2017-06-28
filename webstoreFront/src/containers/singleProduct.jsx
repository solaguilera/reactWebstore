import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../components/product.jsx';
import Form from '../components/form.jsx';
import Button from '../components/button.jsx';
import Comments from '../components/comments.jsx';

class SingleProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: null
		}
	}
	componentWillMount(){
		this.getProduct()
	}
	getProduct() {
		let url = 'http:localhost:3000/products/'+this.props.params.id
		fetch(url).then((response)=>{
			response.json().then((data)=>{
				this.setState({
					product: data,
				})
			})
		})
	}

	render() {
		if (this.state.product===null) {
			return <div>El producto se esta "cargando"...</div>
		}
		return (
			<div>
				<Product product={this.state.product}/>
				<Form />
				<Button />
				<Comments />
			</div>
		);
	}
}

export default SingleProduct;
