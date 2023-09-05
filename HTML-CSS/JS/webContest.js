
function addTemp(data){
    var temp = `                
        <div draggable = "true" class = "item-list";">        
            <img draggable = "false" src = "img/${data.photo}" data-id="${data.id}">
            <div class = "item-title">${data.title}</div>
            <div class = "item-brand">${data.brand}</div>
            <div>가격 : <span class = "item-price">${data.price}</span></div>
            <button class = "btn" id="btn-add">담기</button>
        </div>`
    $('#item-box').append(temp);
}

let data;

$.get('store.json').done((ajaxdata)=>{
    data = ajaxdata.products;
    ajaxdata.products.forEach(function(el){
        addTemp(el)
    })
})

let searchData = [];

$('#input').on('input',function(){
    let userData = $('#input').val();
    
    if(userData == ''){
        $('#item-box').html('');
        data.forEach(function(el){  
            addTemp(el);
        })
    }

    else {
        data.forEach(function(el){
            if(el.title.includes(userData) || el.brand.includes(userData)){     
                searchData.push(el);
            }
        })

        if(searchData.length != 0 ){
            $('#item-box').html('');
            searchData.forEach(function(el){
                addTemp(el);
            })
            searchData = [];
        }
    }
})

$(document).on('dragstart', '.item-list', function(e) {
    var imageData = $(this).find('img').attr('src');

    var jsonData = {
        id: $(this).find('img').data('id'),
        title: $(this).find('.item-title').text(),
        brand: $(this).find('.item-brand').text(),
        price: $(this).find('.item-price').text(),
        imageSrc: imageData
    }
    var jsonString = JSON.stringify(jsonData);

    e.originalEvent.dataTransfer.setData("application/json", jsonString);
});

$('.cart-bucket').on('dragover', function(e) {
    e.preventDefault();
});

var isDel = false;
var item1 = 0, item2 = 0, item3 = 0, item4 = 0, cnt = 0;
var itemData = [];

function addPost(data){
    var temp = `       
    <div class="item-list bucket-item">
    <img draggable="false" src="${data.imageSrc}">
    <div class="item-brand">${data.brand}</div>
    <div><span class = "item-price">${data.price}</span></div>
    <div class="item-title">${data.title}</div>
    <div class="item-count">개수 : ${data.count}</div>
    </div>`
    $('.cart-bucket').append(temp);
}     

function addCart(data){
    itemData.push(data);
    
    if(data.id == 0){
        item1++;
        data.count = item1;
    }
    else if (data.id == 1){
        item2++;
        data.count = item2;
    }
    else if (data.id == 2){
        item3++;
        data.count = item3;
    }
    else if (data.id == 3){
        item4++;
        data.count = item4;
    }

    var groupedData = {};

    itemData.forEach(function(item) {
        var id = item.id;
        if (!groupedData[id] || item.count > groupedData[id].count) {
            groupedData[id] = item;
        }
    });

    var uniqueData = Object.values(groupedData);
    var sum = 0;
  
    $('.cart-bucket').html('');
    uniqueData.forEach(function(el, i){
        addPost(el);
        sum += (el.price * el.count)
        if(i == uniqueData.length-1) { $('#totalPrice').html(sum); }
    })
}

$('.cart-bucket').on('drop', function(e) {
    if(!isDel) {
        $('.cart-bucket').html('');
        isDel = true;
    }

    e.preventDefault();
    var jsonString = e.originalEvent.dataTransfer.getData('application/json') 
    var jsonData = JSON.parse(jsonString);

    addCart(jsonData);
});


$(document).on('click', '#btn-add', function(){
   
    var id = $(this).siblings('img').data('id');
    var imgSrc = $(this).siblings('img').attr('src');
    var title = $(this).siblings('.item-title').text();
    var brand = $(this).siblings('.item-brand').text();
    var price = $(this).siblings('div').find('.item-price').text();

    var jsonData = {
        id:id,
        title: title,
        brand: brand,
        price: price,
        imageSrc: imgSrc
    };

   addCart(jsonData);
})

$('#btn-buy').on('click', function(){
    $('.modal-bg').css('display', 'block');
    scroll_on();
})

$('.btn-close').on('click', function(){
    $('.modal-bg').css('display', 'none');
    scroll_off();
})

function scroll_on() {
    $('.wrap').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

// 스크롤 제한 OFF
function scroll_off() {
    $('.wrap').off('scroll touchmove mousewheel');
}
