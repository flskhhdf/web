$('.login-btn').on('click',function(){
    $('.black-bg').toggleClass('show-modal');
    $('.white-bg').toggleClass('show-whitebg');
})

$('#close').on('click', function(){
    $('.black-bg').toggleClass('show-modal');
    $('.white-bg').toggleClass('show-whitebg');
})


$('form').on('submit', function(e){
    if(document.getElementById('send').value == ''){
        alert('아이디 입력 안했티비');
        e.preventDefault();
    }
    else if (document.getElementById('pass').value == ''){
        alert('비밀번호 입력 안했티비');
        e.preventDefault();
    }

    else if(document.getElementById('pass').value.length < 6){
        alert('비밀번호는 6자 이상티비');
        e.preventDefault();
    }

    var input = document.getElementById('send').value; 
    if(!(/\S+@\S+.\S+/.test(input))){
        alert('이메일 형식이 아님티비');
        e.preventDefault();
    }
    var inputPw = document.getElementById('pass').value;
    if((/[A-Z]/.test(inputPw))){
        alert('비밀번호에 대문자있티비');
        e.preventDefault();
    }
})

// input은 변경 될 때 마다
// change는 포커스가 바뀔 때 마다
$('#pass').on('input', function(){
    if(document.getElementById('pass').value.length >= 6){
        document.getElementsByClassName('pass-er')[0].innerHTML="6자 이상임 ~";
        document.getElementsByClassName('pass-er')[0].style.color='blue';
    }
})
// var은 재선은o 재할당o 범위 function
// let은 재선언x 재할당o 범위{}-> 버그 방지
// const는 재선언x 재할당x 범위{}->변하지 않는 상수
let cnt = 0;
document.getElementsByClassName('badge')[0].addEventListener('click',function(){
    if(cnt%2==0){
        // document.getElementsByClassName('login-btn')[0].style.background='black';
        // document.getElementsByClassName('login-btn')[0].style.color='white';
        $('.login-btn').css('color','white');
        $('.login-btn').css('background','black'); 
    }
    else {
        document.getElementsByClassName('login-btn')[0].style.background='white';
        document.getElementsByClassName('login-btn')[0].style.color='black';
    }
    cnt++;
})

//setTimeout과 setInterval
var sec = 5;
var timer 
= setInterval(function(){
    $('.sec').html(sec);
    sec--;
    if(sec==0){
        $('.alert').css('display', 'none');
        clearTimeout(timer);
    }
    console.log(sec);
}, 1000);

// 정규식
// /~이 부분에 작성~/ ex[a-zA-z] < 영어 전부 [ㄱ-ㅎ가-힣] < 모음 제외 한글
// ^a a로 시작하는가 a$ a로 끝나는가 a|b 둘 중하나라도, & 둘 다 \S 아무 글자 한 글자

// \S+ +는 왼쪽 문자 반복검색 regex test 가능 




$('.black-bg').on('click', function(e){
    if(e.target == document.querySelector('.black-bg')){
        $('.black-bg').removeClass('show-modal');
        $('.white-bg').removeClass('show-whitebg');
    }
})

// 이벤트 버블링
// white-bg 클릭해도 black-bg 까지 클릭했다고 가정됨
// 이벤트가 상위 html 로 퍼지는 현상이 이벤트 버블링