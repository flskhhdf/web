import { useParams } from "react-router-dom";

function Detail(props) {

	let {id} = useParams();

	let dataID = props.data.find(function(el){
		return el.id == id;
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
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