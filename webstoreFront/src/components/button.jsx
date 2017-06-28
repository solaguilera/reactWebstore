import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
constructor(props){
	super(props);
}
	render(){
		return(
			<div>

				<button onClick={this.start} type="submit">Save</button>


			</div>
		);
	}
}


export default Button;
