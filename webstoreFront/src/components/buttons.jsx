import React from 'react';
import ReactDOM from 'react-dom';

class Buttons extends React.Component {
constructor(props){
	super(props);
}
	render(){
		return(
			<div>

				<button onClick={this.start} type="submit">Edit</button>
				<button onClick={this.props.terminar} type="submit">Delete</button>

			</div>
		);
	}
}


export default Buttons;
