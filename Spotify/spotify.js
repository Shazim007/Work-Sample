console.log('welcome to goa singham');

// varibles declare
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let range = document.getElementById('range');
let songlistRow = Array.from(document.getElementsByClassName('songlist-row'));
let clone = document.getElementsByClassName('clone');
// let gif = document.getElementsByid('gif');

// let btn =   document.getElementsByClassName("icon");
// let pause = btn.children[2];

let songs = [{ songName: "kuch-is-tarha", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
{ songName: "Tere Sang Yaara", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
{ songName: "Dil Diyan Gallan", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
{ songName: "Be Intehaan", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
{ songName: "Pehli Nazar Mein", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
{ songName: "kuch-is-tarha", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
{ songName: "Woh Lamhe", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
{ songName: "Tajdar-E-Haram", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
{ songName: "Tu Jaane Na", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
{ songName: "Aadat", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" },
]

songlistRow.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
});

// harry code 

// songlistRow.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("song-name")[0].innerText = songs[i].songName; 
// })

// end harry code 
// play and Pause
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

// audio element 
audioElement.addEventListener('timeupdate', () => {
    // time update 
    rangeTime = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    range.value = rangeTime;
});

range.addEventListener('change', () => {
    audioElement.currentTime = range.value * audioElement.duration / 100;
})

// Array.from(document.getElementsByClassName('song-play')).forEach((element)=>{
//     // element.addEventListener('click',(e)=>{
//         // console.log(e.target);
//         e.target.classList.remove('clone');
//         e.target.classList.add('song-play');
        
// })

            // start ------ song box play

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('song-play')).forEach((element)=>{
        element.classList.remove('clone');
        element.classList.add('song-play');
})
}
    Array.from(document.getElementsByClassName('song-play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('song-play');
        e.target.classList.add('clone');

        // // element.classList.remove('clone'); dis
        element.classList.add('song-play');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    })
});
        // end
