import { useState } from 'react';
import './App.css'; // css 파일 경로

function App() {
	// 자료 잠깐 저장할 변수는 var let const state
	// let post = 'Input Header';
	// a는 데이터, b는 state 변경 도와주는 함수
<<<<<<< HEAD
	let [title,titlef] = useState(['astateTitle1','cstateTitle2','bstateTitle3']);
	let [likeCnt, cntPlus] = useState(0);
=======
	let [title,titlef] = useState(['stateTitle1','stateTitle2','stateTitle3']);
	let [likeCnt, cntPlus] = useState([0, 0, 0]);
	let [modal, setModal] = useState(false);
>>>>>>> 959721180f934a50f87e4448a8b77658d8063555
	// state를 써야하는 이유
	// 일반 변수는 갑자기 변경되면 html에 자동으로 반영이 되지 않지만 state는 변경되면 html이 자동 재랜더링된다
	// 자주 변경되는 것을 state를 사용하는게 좋다. 
	
	function click(){
		cntPlus(++likeCnt);		
	}
	return (
		// html이 아닌 jsx
		<div className="App"> 
			{/* 1. class 는 classname으로 생성 */}
			<div className='black-nav'>
				<h4>Test Nav</h4>
			</div>
			<button onClick={()=>{
				let copy = [...title];
				copy[0] = 'changeTitle';
				titlef(copy);
			}}>changeTitle</button>
<<<<<<< HEAD
			<button onClick={()=>{
				let sortT = [...title];
				sortT.sort();
				titlef(sortT);
			}}>Sort Title</button>
			<div className='list'>
=======
			{/* <div className='list'>
>>>>>>> 959721180f934a50f87e4448a8b77658d8063555
				<h4>
					{title[0]} <span onClick={click}> 👍 </span> {likeCnt} 
				</h4>
				<p>Lorem</p>	
			</div>

			<div className='list'>
				<h4>{ title[1] }</h4>
				<p>Lorem</p>	
			</div>

			<div className='list'>
				<h4>{ title[2] }</h4>
				<p>Lorem</p>	
			</div> */}
			
			{
				title.map(function(a, i){
					return (
						<div className='list'>
						<h4>{ title[i] } <span onClick={()=>{
							let copy = [...likeCnt];
							copy[i]+=1;
							cntPlus(copy);
						}}> 👍 </span> {likeCnt[i]} </h4>
						<p>Lorem</p>	
						</div>
					)
				})
			}
			{/* 반복적인 html 생성은 map으로 */}

			<button onClick={ () => {
				setModal(!modal)
			}}>modal open</button>
			{
				modal == true ? <Modal></Modal> : null
			}

			{/* 동적 UI만드는 방법
				1. html, css로 미리 디자인 완성
				2. UI의 현자 상태를 state로 저장
				3. state에 따라 UI가 어떻게 보일지 작성
			*/}

			{/* 2. 변수 넣을 때는 {중괄호} */}
			{/* style은 {{오브젝트 형식}}  */}
		</div>
	);
}

// 모달 컴포넌트
function Modal(){
	return (
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;
