const songList = [  {
  name: "Kahani Suno 2.O",
  path: "IP/Kahani Suno 2.0 - Kaifi Khalil 128 Kbps.mp3",
  image: "images/01.jpeg"
},
{
  name: "Mi amor",
  path: "IP/Mi-Amor-Sharn(PaglaSongs).mp3",
  image: "images/02.jpeg",
},
{
  name: "MockingBird",
  path: "IP/Mockingbird - Eminem_128-(DJMaza).mp3",
  image: "images/03.jpeg"
},
{
  name: "Traitor",
  path: "IP/Olivia_Rodrigo_-_traitor.mp3",
  image: "images/04.jpeg"
},
{
  name: "As It was",
  path: "IP/As-It-Was(PagalWorld).mp3",
  image: "images/05.jpeg"
},
{
  name: "Out of time",
  path: "IP/The_Weeknd_-_Out_of_Time.mp3",
  image: "images/06.jpeg"
},
{
  name: "We fell in love in october",
  path: "IP/girl_in_red_-_we_fell_in_love_in_october.mp3",
  image: "images/07.jpg"
},
{
  name: "Before you go",
  path: "IP/Lewis_Capaldi_-_Before_You_Go_CeeNaija.com_.mp3",
  image: "images/08.jpg"
},

{
  name: "Ja Tujhko",
  path: "IP/Ja Tujhko.mp3",
  image: "images/09.jpg"
},
{
  name: "Jogi",
  path: "IP/Jogi - Various.mp3",
  image: "images/10.jpg"
}
];

var songEvent;
var audio_controls=document.getElementById('audio_controls');
var song_id=0;

var slider = document.querySelector("#myProgressBar");
 slider.addEventListener("input", function() {  
    audio_controls.currentTime = (slider.value / 100) * audio_controls.duration;
    
		});

    audio_controls.addEventListener("timeupdate", function() {
			slider.value = (audio_controls.currentTime / audio_controls.duration) * 100;
     
		});

function colorchng(icon){
  if(icon.style.color=="white"){
  icon.style="color:cyan;";
  }
  else{
    icon.style.color='white';
  }
}

let changeIcon = function (icon) {
  icon.classList.toggle('fa-circle-play');
  icon.classList.toggle('fa-circle-pause');
  document.getElementById("iconplaypause").classList.toggle("fa-circle-play");
  document.getElementById("iconplaypause").classList.toggle("fa-circle-pause");
 
  if(!audio_controls.paused){
    audio_controls.pause();
  }
  else{
    audio_controls.play();
  }
}

let changevolume = function (icon) {
  icon.classList.toggle('fa-volume-xmark');
  if(!audio_controls.muted){
  audio_controls.muted=true;
  }
  else {
    audio_controls.muted=false;
  }
}

var popup = document.querySelector('#popup');
var modal = document.querySelector('.containerpopup');
// const audioControls = document.getElementById("audio-controls");

popup.addEventListener('click', showModal);
modal.addEventListener('blur',hidemodal);

function showModal() {
  modal.style = "display:block;";

}

function hidemodal() {
  modal.style = "display:none;";
}
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onClick = function () {
  if (mysong.paused) {
    mysong.play()
    icon.src = "pause.png";

  } else {
    mysong.pause();
    icon.src = "icon.png";
  }
}

  // import song_list from "./songs.json" assert { type : "json" }; 

  function play_song(event) {
 
  songEvent=event;
  let img_src = event.target.src;
  let song_path_root = img_src.split(".")[3];
 song_id = parseInt(song_path_root.slice(song_path_root.length-2,song_path_root.length));
  
  //let song_obj = song_list[song_id - 1];
  playAudio(song_id);
  
}

function playAudio(song_id){
  let song_name = songList[song_id-1].path;
  
  console.log(song_name); 
  
  audio_controls.pause();
  audio_controls.currentTime=0;
 
  audio_controls.src = song_name;
  console.log(audio_controls);
  audio_controls.play();
 
  var  modalImg = document.querySelector('.containerpopup #playingsong');
  modalImg.src=event.target.src;
  document.querySelector('#music').innerText = songList[song_id-1].name;
  document.querySelector('#popup').innerText = songList[song_id-1].name;

  
  console.log("icone code");
  document.getElementById('play').classList='fa-regular fa-3x fa-circle-pause';
  document.getElementById('iconplaypause').classList='fa-regular fa-3x fa-circle-pause';
}

function playNext(){
  console.log(song_id);
  if(song_id==10){
    song_id=1;
  }
  else{
  song_id+=1;
  }
  playAudio(song_id);
}

function playPrev(){
  if(song_id==0){
    song_id=10;
  }
  else{
    song_id-=1;
  }
  playAudio(song_id);
}
	



    
   

