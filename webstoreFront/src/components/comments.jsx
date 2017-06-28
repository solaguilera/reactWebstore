import React from 'react';
import TextArea from './textArea.jsx';
import Buttons from './buttons.jsx';

class Comments extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<TextArea />
				<Buttons />
			</div>
		)
	}
}

export default Comments;
