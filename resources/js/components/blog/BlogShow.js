import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

export default class BlogShow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: {}
		};
	}

	// need to implement a laravel controller function for getting data
	componentWillMount() {
		axios.get("/posts/"+ this.props.match.params.id).then(response => {			
			console.log(response.data[0])
			this.setState({
				posts: response.data[0]
			});
		}).catch(error => console.log(error));
	}


	render() {
		return (
			<div>
				<h3>{this.state.posts.name}</h3>
				{/* <p>{this.state.post.body}</p> */}
			</div>
		)
	}
}
