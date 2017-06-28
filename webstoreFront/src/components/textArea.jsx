import React from 'react';

class TextArea extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<textarea>Enter text here...</textarea>
			</div>
		)
	}
}

export default TextArea;
