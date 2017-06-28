import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
constructor(props){
	super(props);
}
	render(){
		return(
			<div>
				<form>
				Artist: <input className= "form-control"type="text" name="artistEdit"></input><br/>
				Album: <input className= "form-control"type="text" name="albumEdit"></input><br/>
				Price: <input className= "form-control"type="number" name="priceEdit"></input><br/>
				Description: <input className= "form-control"type="text" name="descriptionEdit"></input><br/>
				ImgUrl: <input className= "form-control" type="text" name="imgUrlEdit"></input><br/>
				</form>
			</div>
		);
	}
}

export default Input;
