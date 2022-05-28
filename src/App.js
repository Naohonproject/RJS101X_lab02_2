/** @format */

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div className="container"></div>
					<NavbarBrand href="/">Some code here</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default App;
