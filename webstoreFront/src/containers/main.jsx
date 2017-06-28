import React from 'react';
import ReactDOM from 'react-dom';
import Watch from '../components/watch.jsx';
import Buttons from '../components/buttons.jsx';
import Input from '../components/input.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navbar/>
					{this.props.children}

			</div>
		);
	}
}

export default Main;
