import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import styled from 'styled-components';
class CommentBox extends Component {
	state = {
		comment: ''
	};

	handleChange = e => {
		this.setState({
			comment: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({
			comment: ''
		});
	};

	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<div className="input-field col s12">
						<textarea
							id="textarea2"
							className="materialize-textarea"
							data-length="120"
							value={this.state.comment}
							onChange={this.handleChange}
						/>
						<label htmlFor="textarea2">Input text</label>
					</div>
					<div>
						<button className="waves-effect waves-light btn">Submit Comments</button>
						<Button className="fetch-comments waves-effect waves-light btn" onClick={this.props.fetchComments}>
							Fetch Comments
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);

const Button = styled.button`
	position: relative;
	left: 2em;
`;
