import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faUnlock} from "@fortawesome/free-solid-svg-icons";

class LoginPage extends Component {
	
	constructor(props) {
		super(props);
		// this.emailElement = React.createRef();
		// this.passwordElement = React.createRef();
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
	
	
	axios.post('http://localhost:8000/user/', userData)
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
			<Form onSubmit={this.onSubmit}>
				<div className="home-right">
					<h1 className="home-login-title">Login</h1>
					<div className="home-login-text-input-container">
						<FontAwesomeIcon
							icon={faAt}
							className="home-login-icon-username"
						/>
						<input
							className="home-login-email-input"
							type="email"
							name="username"
							placeholder="Email"
						/>
					</div>
					<div className="home-login-text-password-container">
						<FontAwesomeIcon
							icon={faUnlock}
							className="home-login-icon-password"
						/>
						<input
							className="home-login-password-input"
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
					<div className="home-login-checkbox-container">
						<input
							className="home-login-checkbox"
							type="checkbox"
							name="remember-me"
						/>
						<span className="home-login-span-checkbox">
							Remember me
						</span>
					</div>
					<button
						onClick={() => props.setHide("none")}
						className="home-login-submit-button"
						type="submit">
						Login
					</button>
				</div>
			</Form>
		);
	}
}

export default LoginPage;