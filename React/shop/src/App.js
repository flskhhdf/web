import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import bg from './img/bg.png'

function App() {
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
				<div className='main-item'>
					<img src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
					<h4>상품명</h4>
					<p>상품 설명</p>
				</div>
				<div className='main-item'>
					<img src="https://codingapple1.github.io/shop/shoes2.jpg"></img>
					<h4>상품명</h4>
					<p>상품 설명</p>
				</div>
				<div className='main-item'>
					<img src="https://codingapple1.github.io/shop/shoes3.jpg"></img>
					<h4>상품명</h4>
					<p>상품 설명</p>
				</div>
			</div>
		</div>
	);
}
export default App;
