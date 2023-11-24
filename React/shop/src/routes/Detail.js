import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

	//useEffect를 쓰는 이유 -> 이 안에 있는 코드는 html 렌더링 후에 동작한다.
	// 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하는 것 등 쓰면 유용
	useEffect(()=>{
		console.log("Check");
	})

	let [count, setCount] = useState(0);

	let {id} = useParams();
	let dataID = props.data.find(function(el){
		return el.id == id;
	});

	return (
		<div className="container">
			{count}
			<button onClick={()=>{
				setCount(count+1)
			}}>버튼</button>
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${dataID.id+1}.jpg`} width="100%" />
				</div>
				<div className="col-md-6">
					<h4 className="pt-5">{dataID.title}</h4>
					<p>{dataID.content}</p>
					<p>{dataID.price}</p>
					<button className="btn btn-danger">주문하기</button>
				</div>
			</div>
		</div>
	)
}

function ErrPage(){
	return(
		<div>길을 잘못 찾으셨네요</div>
	)
}

export {Detail, ErrPage};