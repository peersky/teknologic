
import React from 'react';

import './Main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Main.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Obfuscate from 'react-obfuscate';

import {
	Link
} from 'react-router-dom';


import {

  LinkedinIcon,
  LinkedinShareButton,

} from "react-share";


class Button extends React.Component {
	constructor(props)
	{
		super(props);
		this.state =
		{
			Num : this.props.ButtonNum,
			// Active: true
		};
	}

	render()
	{
		let Class
		(this.props.value===1) ? Class = "ButtonActive" : Class = "Button";
		return (
			<div>
			<Link to={this.props.ButtonName}
			className = {Class}
			onClick={() => this.props.onClick()} > {this.props.ButtonName}
			</Link>
			</div>
			)
		}
	}

function App() {


	let title = "Design Studio TeknoLogic"
	let shareUrl="www.teknologic.lv"
return (
	<div>
		<header className="App-header">
			shapka
		</header>



		<Navbar className="color-nav" variant="light" bg="#FFB30F" sticky="top" collapseOnSelect expand="lg" >
		<Navbar.Brand href="#home">TEKNOLOGIC</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
		<Nav className="mr-auto">
		<Nav.Link href="#home">HOME</Nav.Link>
		<Nav.Link href="#services">SERVICES</Nav.Link>
		<Nav.Link href="#clients">CLIENTS</Nav.Link>
		<NavDropdown title="ABOUT" id="collasible-nav-dropdown">
		<NavDropdown.Item href="#about">ABOUT</NavDropdown.Item>
		<NavDropdown.Item href="#careers">CAREERS</NavDropdown.Item>

		</NavDropdown>
		</Nav>
		<Nav>
		<LinkedinShareButton url={shareUrl} quote={title}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>

		<Obfuscate className="nav-link" email="tim@teknologic.lv" aria-label="Contact me">
        contact
        </Obfuscate>


		</Nav>
		</Navbar.Collapse>
		</Navbar>
		<Main />

		<footer className="footer">
		SIA TeknoLogic &copy; 2020 <br/>
		</footer>

	</div>
					);
				}

				export default App;
