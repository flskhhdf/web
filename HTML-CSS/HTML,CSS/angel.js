var isListOpen = false;

$('.drop-down-content').on('click', function(e){
    let num = e.target.dataset.id;  
    $(`#box${num}`).toggleClass('show-list');
    isListOpen = true;
})

function removeList(e, num){
    let content = $(e.target).text();
    $('.text-box').eq(num).text(content); 
    let el = document.querySelectorAll('.show-list');
    for(let i = 0; i<el.length; i++) el[i].classList.remove('show-list');
}

$('.box1-sub-menu').on('click', function(e){
    removeList(e, 0);
})

$('.box2-sub-menu').on('click', function(e){
    removeList(e, 1)
})

document.addEventListener('click', function(e){
    if(isListOpen == true) {
        if(e.target.classList != 'list-content'){
            let el = document.querySelectorAll('.show-list');
            for(let i = 0; i<el.length; i++) el[i].classList.remove('show-list');
        }
    }
})

