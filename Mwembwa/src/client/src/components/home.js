import React, {useState, Component} from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faAt, faUnlock} from "@fortawesome/free-solid-svg-icons";
import '../Home.css';
import flatDesign from "../data/flat-design.jpg";
import Login from "../components/Login";
import Signup from "../components/Auth";
import MapOpen from '../components/MapOpen';

function Home() {

	const [hide, setHide] = useState("");

	const [connexionStatus, setConnexionStatus] = useState(true);

	return (
		<>
			<div className={"home-full-screen"} style={{display: hide}}>
				{" "}
			</div>
			<div className={"home-flex-container"} style={{display: hide}}>
				<div className={"home-left"}>
					<img
						src={flatDesign}
						className={"home-flat-design"}
						alt={"flat design"}
					/>
					<a
						
						onClick={() => setConnexionStatus(!connexionStatus)}
						className={"home-create-button"}>
						{connexionStatus
							? "Create an account"
							: "I already have an account"}
					</a>
				</div>
			    <Login connexionStatus={connexionStatus} setHide={setHide} />
				 <Signup connexionStatus={connexionStatus} setHide={setHide} />
			</div>
		</>
	);
	
}

export default Home;