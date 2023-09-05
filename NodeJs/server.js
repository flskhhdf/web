// 서버를 띄우기 위한 기본 셋팅 (express) 라이브러리
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');

var mydb;

MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.1wg13ga.mongodb.net/?retryWrites=true&w=majority', function(err, client){
    if(err) return console.log('에러임');

    mydb = client.db('todoApp');

    app.listen(8080, function(){
        console.log('첫 노드 서버임');    
    });    
})

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


// 누군가가 /pet 으로 방문을 하면
//app.get('/pet', function(req, res){
//});

// css파일 사용

// html 파일 보내기
// '/' 하나면 홈 화면 보여주기
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req, res)
{
    mydb.collection('post').find().toArray(function(err, result){ // db에서 자료 찾고
        res.render('list.ejs', {posts : result});
    });
});

//post로 받은 데이터를 쉽게 꺼내쓰려면 body-parser라는 라이브러리가 필요하다

app.post('/add', function(req,res){
    res.send('전송댐');
    mydb.collection('counter').findOne({name : 'postCount'}, function(err, result){
        var postCnt = ++result.totalPost;
        mydb.collection('post').insertOne({_id : postCnt, title : req.body.title, detail : req.body.detail}, function(err, result){
            mydb.collection('counter').updateOne({name : 'postCount'}, {$inc:{totalPost : 1}}, function(err,result){
                if(err) { return console.log('코드가 이상해요 멍청아'); }
            });
        });
    });
});

app.delete('/delete', function(req, res){
    req.body._id = parseInt(req.body._id);
    mydb.collection('post').deleteOne(req.body, function(err, result){
        console.log('삭제완료');
    })
})


// REST 원칙 6개
// 1. uniform interface - 간결하게, 일관적이게, 예측이 가능
// - 하나의 자료는 하나의 URL로
// - 요청과 응답은 정보가 충분히 들어있어야 함
// 이름짓기 원칙:
// URL을 명사로 작성 추천
// 하위문서를 나타낼 땐 / 사용
// 파일확장자 (.html) 쓰지말기
// 띄어쓰기는 대시(-) 이용
// 자료 하나당 하나의 URL 사용

// 2. client-sever 역할 구분 - 클라이언트와 서버는 구분 
// - 브라우저는 요청만 할 뿐
// - 서버는 응답만 할 뿐

// 3. stateless - 고객의 요청1과 요정2는 독립적
// - 요청1과 요청2는 의존성이 없어야함 (연관이 없어야함)
// - 요청1의 결과로 요청2를 처리하면 안됨

// 4.cacheable
// - 서버에서 보내주는 정보들은 캐싱 가능해야함
// - 캐싱을 위한 버전 같은 것도 관리 잘 해야함
// - 하지만 크롬이 잘 해줌

// 5. Layered System - 알아서 찾아보셈
// 6. Code on Demand - 알아서 찾아보셈

// DB종류 1.관계형
// - 행과 열
// - 대부분 SQL이라는 언어 써야함
// - 빠르고 효율적

// DB종류 2.NoSQL
// - Object 자료형으로 입출력 가능
// - 데이터 입출력에만 신경 쓸 수 있음