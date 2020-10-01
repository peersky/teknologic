
import React from 'react';


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


return (
	<div>
		<header className="App-header">

		</header>



		<Navbar className="color-nav" variant="light" bg="#FFB30F" sticky="top" collapseOnSelect expand="lg" >
		<Navbar.Brand href="#home">TeknoLogic</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
		<Nav className="mr-auto">
		<Nav.Link href="#home">Home</Nav.Link>
		<Nav.Link href="#services">Services</Nav.Link>
		<Nav.Link href="#clients">Clients</Nav.Link>
		<NavDropdown title="About us" id="collasible-nav-dropdown">
		<NavDropdown.Item href="#about">About us</NavDropdown.Item>
		<NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
		</NavDropdown>
		</Nav>
		<Nav>

		<Obfuscate className="nav-link" email="tim@teknologic.lv" aria-label="Contact me">
        Contact
        </Obfuscate>


		</Nav>
		</Navbar.Collapse>
		</Navbar>
		<Main />

		<footer className="footer">
		SIA TeknoLogic &copy; 2020
		</footer>

	</div>
					);
				}

				export default App;
