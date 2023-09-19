import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js'

function App() {

	let [shoes] = useState(data)

	return (
		<div className="App">
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">DDU2 shop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#Cart">Cart</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<div className='main-bg'></div>

			<div className='main-container'>
				{
					shoes.map(function(a, i){
						return(
							<Item data = {shoes} i = {i}/>
						)
					})
				}
			</div>
		</div>
	);
}

function Item(props){
	return(
		<div className='main-item'>
		<img src={`https://codingapple1.github.io/shop/shoes${(props.i)+1}.jpg`}></img>
		<h4>{props.data[props.i].title}</h4>
		<p>{props.data[props.i].price}</p>
		</div>
	)
}

export default App;
