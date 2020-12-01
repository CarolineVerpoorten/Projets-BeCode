import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faAt, faUnlock} from "@fortawesome/free-solid-svg-icons";
import '../Home.css';


class SignPage extends Component {
	
	constructor(props) {
		super(props);
		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {
			username : '',
		    email : '',
		    password : ''		  
		}
	}
	
	  
	onChangeUserName(event){
		this.setState({
		  username: event.target.value
		});
	}
	
	onChangeEmail(event) {
		this.setState({
		  email: event.target.value
		});
	  }
	  
	onChangePassword(event) {
		this.setState({
			password: event.target.value
		});
	}
		  
	onSubmit(event) {
	  event.preventDefault()
	  
	  const userData = {
		  username : this.state.username,
		  email : this.state.email,
		  password : this.state.password
	  };
	  
	console.log(userData);
	
	
	axios.post('http://localhost:8000/user/signup', userData)
		.then((res) => {
		console.log(res.data)
	}).catch((error) => {
		console.log(error)
	});

	  this.setState({
		  username: '',
		  email : '',
		  password : ''	})
	// window.location = '/';
	}		
	
	render() {
		return (
			<Form className="home-right" onSubmit={this.onSubmit}>
				<h1 className="home-signup-title">Sign Up</h1>
				<div className="home-signup-text-input-container">
					<FontAwesomeIcon
						icon={faUser}
						className="home-signup-icon-username"
					/>
					<Input
						className="home-signup-text-input" value={this.state.username} onChange={this.onChangeUserName} 
						type="text"
						name="username"
						placeholder="Username"
					/>
				</div>
				<div className="home-signup-text-input-container">
					<FontAwesomeIcon
						icon={faAt}
						className="home-signup-icon-email"
					/>
					<Input
						className="home-signup-email-input"
						type="text"
						name="username"
						placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} 
					/>
				</div>
			
				<div className="home-signup-text-password-container">
					<FontAwesomeIcon
						icon={faUnlock}
						className="home-signup-icon-password"
					/>
					<Input
						className="home-signup-password-input" value={this.state.password} onChange={this.onChangePassword} 
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<div className="home-signup-checkbox-container">
					<Input type="color" name="" />
					<span className="home-signup-span-checkbox">
						Choose your color
					</span>
				</div>
				<button
					onSubmit={this.onSubmit}
					className="home-signup-submit-button"
					type="submit">
					Sign Up
				</button>
			</Form>
		);
	}
}

export default SignPage;