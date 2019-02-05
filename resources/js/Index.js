import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Blog from './components/blog/Blog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from './components/Example';
import BlogShow from './components/blog/BlogShow';


export default class Index extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<div>
						<Link to='/'>Home</Link>
						<Link to='/posts'>Blog</Link>

						<Route path='/' exact component={Example}></Route>
						<Route path='/posts' exact component={Blog}></Route>
						<Route path='/posts/:id' exact render={props => <BlogShow{...props}/>}></Route>
					</div>
				</Router>
			</div>
		)
	}
}

if (document.getElementById('index')) {
	ReactDom.render(<Index />, document.getElementById('index'));
}