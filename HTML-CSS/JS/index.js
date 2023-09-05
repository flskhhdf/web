// 1 ~ 5강 이벤트리스너
// function setAlert(func) {
//     document.getElementById('alert').style.display = func;
// }

// function changeAlert(text) {
//     document.getElementsByClassName('content')[0].innerHTML = text;
//     document.getElementById('alert').style.display = 'block';
// }

// document.getElementsByClassName('close-btn')[0].addEventListener('click',function(){
//     document.getElementById('alert').style.display = 'none';
// });

///////////////////////////////////

// 6강 classList
//querySelecotor은 맨 위에 나오는 한개만 찾아준다
// classList로 만들 경우 애니메이션 등 만들때 용이
$('.navbar-toggler').on('click', function(){
    $('.list-group').toggleClass('show-list');
})

// 7강 jquery
$('.hello').html('바보아님')

$('#test-btn').on('click',function(){
    $('.hello').slideUp();
})

// 캐러지

val = 0;

$('.slide-1').on('click', function(){
    val = 0;
    $('.slide-container').css('transform', `translateX(${val}vw)`)
})

$('.slide-2').on('click', function(){
    val = -100;
    $('.slide-container').css('transform', 'translateX(-100vw)')
})

$('.slide-3').on('click', function(){
    val = -200;
    $('.slide-container').css('transform', 'translateX(-200vw)')
})

$('.slide-next').on('click', function(){
    if(val==-200) return;
    val -= 100;
    $('.slide-container').css('transform', `translateX(${val}vw)`)
})

$('.slide-prev').on('click', function(){
    if(val==0) return;
    val += 100;
    $('.slide-container').css('transform', `translateX(${val}vw)`)
})

$(window).on('scroll', function(){
    if(window.scrollY > 100){
        document.querySelector('.navbar-brand').style.fontSize='15px';
    }
    else {
        document.querySelector('.navbar-brand').style.fontSize='30px';    
    }
})
var check = false;
$('.lorem').on('scroll', function(){
    // div의 스크롤 바 내린 양 + 눈에 보이는 div 높이 == div의 실제 높이
    if($('.lorem').scrollTop() + document.querySelector('.lorem').clientHeight == document.querySelector('.lorem').scrollHeight && check == false){
        alert('약관 다 읽었음');
        check = true;
    }
})

var startX = 0;
var flag = false;
$('.slide-box').eq(0).on('mousedown', function(e){
    startX = e.clientX;
    flag = true;
})

var currentX = 0;
$('.slide-box').eq(0).on('mousemove', function(e){
    if(flag == true){
        currentX = e.clientX - startX;
        $('.slide-container').css('transform', `translateX(${currentX}px)`);
    }
})

$('.slide-box').eq(0).on('mouseup', function(e){
    flag = false;
    if(currentX < -250){
        val = -100;
        $('.slide-container').addClass('animation').css('transform', 'translateX(-100vw)')    
    }
    else {
        val = 0;
        $('.slide-container').addClass('animation').css('transform', `translateX(${val}vw)`)
    
    }

    setTimeout(function(){
        $('.slide-container').removeClass('animation');
    }, 1000)
})

