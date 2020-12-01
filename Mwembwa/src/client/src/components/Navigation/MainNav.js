import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
		render() {
			return (
				<header>
					<div className="title_nav">
					<h1> Bar de navigation</h1>
					</div>
					<nav className="items_nav_bar">
						<ul>
							<li><NavLink to="/signup">Sign In</NavLink></li>
							<li><NavLink to="/map">Map</NavLink></li>
						</ul>
					</nav>
				</header>
			);
		}
	}
	