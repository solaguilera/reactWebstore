import React from 'react';
import ReactDOM from 'react-dom';
// import Watch from './components/watch.jsx';
import Navbar from './navbar.jsx'
import Buttons from './buttons.jsx';
// import Input from './input.jsx';

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
