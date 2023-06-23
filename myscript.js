
window.addEventListener('resize', function() {
    var image = document.querySelector('img');
    image.style.width = '100%';
});;//창의 크기를 줄이면 이미지들도 같이 창의 크기에 맞게 된다!

window.addEventListener('resize', function() {
    var myDiv = document.getElementById('MyDiv');
    myDiv.style.width = '100%'; // 너비를 항상 100%로 유지
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bgm');
    audio.play();
  });

function moveCam() {
    window.location.href = "cambodia.html";
  }
function moveTai() {
    window.location.href = "taiwan.html";
  }
function moveMyan() {
    window.location.href = "Myanmar.html";
  }
function movelaos() {
    window.location.href = "laos.html";
  }
var bgmcnt=0;
var mybgm=new Audio("mp3/bgm.mp3");
function playbgm(){
  if(bgmcnt==0){
      mybgm.play();
      bgmcnt++;
      
  }
  else{
      
      mybgm.pause();
      mybgm.currentTime=0;
      bgmcnt=0;
  }
}