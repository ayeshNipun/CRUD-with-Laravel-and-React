import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Blog extends Component {
	constructor() {
		super();
		this.state = {
			blogs: []
		}
	}

	componentWillMount() {
		axios.get('/blogs').then(response => {
			this.setState({
				blogs: response.data
			});
		});
	}

	render() {
		return (
			<div id="blog" className="container">
				{this.state.blogs.map(blog =>
					<li key={blog.id}>
						<Link to={"/posts/" + blog.id}>{blog.name}</Link>
					</li>
				)}
			</div>
		)
	}
}

if (document.getElementById('blog')) {
	ReactDOM.render(<Blog />, document.getElementById('blog'));
}