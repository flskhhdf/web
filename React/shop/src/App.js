import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import {Detail, ErrPage} from './routes/Detail.js'

function App() {

	let [shoes] = useState(data)
	// 훅 > 유용한것들이 들어있는 함수
	// 이건 페이지 이동 도와주는 함수
	let navigate = useNavigate();
	
	return (
		<div className="App">

			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand onClick={()=> {navigate('/')}}>DDU2 shop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link onClick={()=>{navigate('/')}} >Home</Nav.Link>
						<Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
				
			<Routes>
				{/* 라우트 하나가 페이지 하나 */}
				<Route path="/" element={
					<div>
						<div className='main-bg'></div>
						<div className='main-container'>
							{
								shoes.map(function (a, i) {
									return (
										<Item data={shoes} i={i} />
									)
								})
							}
						</div>
					</div>
				} />
				{/*                   ▽ 이거 url 파라미터 */}
				<Route path="/detail/:id" element = { <Detail data={shoes}/> } />
				
				{/* nested route 접속시 아래가 한번에 다 보임 >> 여러 유사한 페이지 필요할 때 사용*/}
				<Route path="/about" element = { <About/> } >
					<Route path="member" element = { <div>이게 보임?</div> } />
					<Route path="location" element = { <div>이것도 보임??</div> } />
				</Route>
				
				<Route path="/event" element = {<Event/>}>
					<Route path="one" element = { <div>첫 주문 이벤트 </div> }/>
					<Route path="two" element = { <div>생일 기념 쿠폰 받끼 </div> }/>
				</Route>


				<Route path="*" element = { <ErrPage/> } />
			</Routes>
		</div>
	);
}

function Item(props) {
	return (
		<div className='main-item'>
			<img src={`https://codingapple1.github.io/shop/shoes${(props.i) + 1}.jpg`}></img>
			<h4>{props.data[props.i].title}</h4>
			<p>{props.data[props.i].price}</p>
		</div>
	)
}

function About(){
	return(
		<div>회사 정보 유출~!~!
			<Outlet></Outlet>
		</div>
	)
}

function Event(){
	return (
		<div>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	)
}


export default App;
