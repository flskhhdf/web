// var btn = $('.tab-button');

// for(let i = 0; i<3; i++){
//     btn.eq(i).on('click', function(){
//         tab(i);
//     });
// }

function tab(num){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');
}

// 탭 기능 다르게 만들기
// 이벤트 버블링 활용
 
$('.list').on('click', function(e){
    console.log(e.target.dataset.id);
    tab(e.target.dataset.id);
})

// html 태그에 몰래 정보 숨기기 가능
// data-작명 << 위와 같은 방식으로 dataset.작명 으로 찾을 수 있다

// 함수로 축약할 때 파라미터로 바꾸기
// 이벤트 리스너 적절히 활용

// array
var car = ['소나타', 50000, 'white'];
// object
var car2 = {name : '소나타', price : [50000, 30000, 40000]};

console.log(car2['price3']);

$('#name').html(car[0]);
$('#price').html(car2.price[0]);


var shirt = [95, 100, 105];
var pants = [28, 30, 32, 34];

var target = '.form-select'
$(target).eq(0).on('input', function(e){
    if(this.value == '셔츠'){
        $(target).eq(1).removeClass('shirt-detail');
        $(target).eq(1).html(''); 
        shirt.forEach(function(el){
            $(target).eq(1).append(`<option>${el}</option>`);           
        })
    }
    else if($(target).eq(0).val() == '모자'){
        $(target).eq(1).addClass('shirt-detail');
    }

    else if (this.value == '바지'){
        $(target).eq(1).removeClass('shirt-detail'); 
        $(target).eq(1).html(''); 
        pants.forEach(function(el){
            $(target).eq(1).append(`<option>${el}</option>`);
        })
    }
})

// 자바스크립트로 html 생성법 1 < 얘가 좀 더 빠름 하지만 별 차이 없음
var a = document.createElement('p');
a.innerHTML = 'hi';
document.getElementById('test').appendChild(a);

// 생성법 2
var 템플릿 = '<p>안녕</p>';
document.getElementById('test').insertAdjacentHTML('beforeend', 템플릿)

$('#test').html(템플릿);


// ajax 는 새로고침없이 GET POST 요청하는 기능

// ajax로  GET 요청
$.get('https://codingapple1.github.io/price.json').done(function(data){
    console.log(data.price);
}).fail(function(){
    console.log('실패함')
})
// ajax로 POST 요청


// 자바스크립트로 get 요청
fetch('https://codingapple1.github.io/price.json').then(res => res.json()).then(data => {
    console.log(data.price)
}).catch(error => {
    console.log(error)
})

