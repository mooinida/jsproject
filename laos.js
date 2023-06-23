
window.addEventListener('resize', function() {
    var image = document.querySelector('img');
    image.style.width = '100%';
});;//창의 크기를 줄이면 이미지들도 같이 창의 크기에 맞게 된다!

window.addEventListener('resize', function() {
    var myDiv = document.getElementById('MyDiv');
    MyDiv.style.width = '100%'; // 너비를 항상 100%로 유지
});
function moveback(){
    window.location.href="my.html"
}
const h1text = document.querySelector('.tai');
const text = "라오스";
let count = 0;

function typing() {
    h1text.innerText += text[count++];
    if (count > text.length) {
        h1text.innerText = ' ';
        count = 0;
      }    }

setInterval(typing, 1000);

const h2text=document.querySelector('.tai1');

let cnt=0;
function type(){
    if(cnt==0){
        h2text.innerText+="LA"
        cnt++;
    }
    else if(cnt==1){
        h2text.innerText+="O"
        cnt++;
    }
    else{
        h2text.innerText+="S"
        cnt++;
    }
    
    if(cnt>3){
        h2text.innerText='';
        cnt=0;
    }
}
setInterval(type, 1000);   




const h3text=document.querySelector('.taihello');
let tcnt=0;
var taihello= new Audio('mp3/mhowareu.mp3')
var tthank= new Audio('mp3/mhello.mp3')
function taihi(){
    if(tcnt==0){h3text.innerText+="နေကောင်းလား? = 잘지내세요?";
    tcnt++;
    taihello.play()
    setTimeout(taihistop,2000);
    }
    else if(tcnt==1){h3text.innerText+="     မင်္ဂလာပါ = 안녕하세요.";
    tcnt++;
    tthank.play()
    setTimeout(taihistop,2000);
    }
    else{
        tcnt=0;
        h3text.innerText="";
    }
}
function taihistop(){
    h3text.innerText="";
}

var taibgm= new Audio('mp3/ltradition.mp3')
let bgmcnt=0;
function playbgm(){
    if(bgmcnt==0){
        taibgm.play();
        bgmcnt++;
        
    }
    else{
        
        taibgm.pause();
        taibgm.currentTime=0;
        bgmcnt=0;
    }
}

var timg=[
    'img/lact.png',
    'img/lact1.png',
    'img/lact2.png',
    'img/fun.png'
]
var taicnt=0;
function tactivity(){
    const taiact=document.querySelector(".fun")
    taiact.src=timg[taicnt];
    taicnt++;
    if(taicnt>=timg.length){
        taicnt=0;
    }
}

var tplace=[
    'img/lplace.png',
    'img/lplace1.png',
    'img/lplace2.png',
    'img/place.png'
]
var placecount=0;
function taiplace(){
    const taiplace=document.querySelector(".place");
    taiplace.src=tplace[placecount++];
    if(placecount>=tplace.length){
        placecount=0;
    }
}

var tfood=[
    'img/lfood.png',
    'img/lfood1.png',
    'img/lfood2.png',
    'img/food.png'
]
var foodcnt=0;
function taifood(){
    const taifood=document.querySelector(".food");
    taifood.src=tfood[foodcnt++];
    if(foodcnt>=tfood.length){
        foodcnt=0;
    }
}
