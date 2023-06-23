
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
const h1text = document.querySelector('.cambo');
const text = "캄보디아";
let count = 0;

function typing() {
    h1text.innerText += text[count++];
    if (count > text.length) {
        h1text.innerText = '';
        count = 0;
      }    }

setInterval(typing, 1000);

const h2text=document.querySelector('.cambo1');
const text2="CAMBODIA";
let cnt=0;
function type(){
    if(cnt==0){
        h2text.innerText+="CAM"
        cnt++;
    }
    else if(cnt==1){
        h2text.innerText+="BO"
        cnt++;
    }
    else if(cnt==2){
        h2text.innerText+="DI"
        cnt++;
    }
    else{
        h2text.innerText+="A"
        cnt++;
    }
    if(cnt>4){
        h2text.innerText='';
        cnt=0;
    }
}
setInterval(type, 1000);



const h3text=document.querySelector('.cambohello');
let ccnt=0;
var camhello= new Audio('mp3/camhello.mp3')
var cthank= new Audio('mp3/cthank.mp3')
function camhi(){
    if(ccnt==0){h3text.innerText+="សួស្តី = 안녕하십니까?";
    ccnt++;
    camhello.play()
    setTimeout(camhistop,2000);
    }
    else if(ccnt==1){h3text.innerText+="អរគុណ = 감사합니다.";
    ccnt++;
    cthank.play()
    setTimeout(camhistop,2000);
    }
    else{
        ccnt=0;
        h3text.innerText="";
    }
}
function camhistop(){
    h3text.innerText="";
}

var cambgm= new Audio('mp3/cambobgm.mp3')
let bgmcnt=0;
function playbgm(){
    if(bgmcnt==0){
        cambgm.play();
        bgmcnt++;
        
    }
    else{
        
        cambgm.pause();
        cambgm.currentTime=0;
        bgmcnt=0;
    }
}

var cimg=[
    'img/cactivity.png',
    'img/cactivity2.png',
    'img/cactivity3.png',
    'img/fun.png'
]
var cactcnt=0;
function cactivity(){
    const camboact=document.querySelector(".fun")
    camboact.src=cimg[cactcnt];
    cactcnt++;
    if(cactcnt>=cimg.length){
        cactcnt=0;
    }
}

var cplace=[
    'img/바이욘사원.png',
    'img/수상가옥.png',
    'img/앙코르와트.png',
    'img/place.png'
]
var placecount=0;
function caplace(){
    const camboplace=document.querySelector(".place");
    camboplace.src=cplace[placecount++];
    if(placecount>=cplace.length){
        placecount=0;
    }
}

var cfood=[
    'img/캄보음식.png',
    'img/캄보음식1.png',
    'img/캄보음식2.png',
    'img/food.png'
]
var foodcnt=0;
function cambodiafood(){
    const camfood=document.querySelector(".food");
    camfood.src=cfood[foodcnt++];
    if(foodcnt>=cfood.length){
        foodcnt=0;
    }
}
