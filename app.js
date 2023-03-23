const heartRed = document.querySelector('.redHeart');
const heartOrange = document.querySelector('.orangeHeart');
const heartYellow = document.querySelector('.yellowHeart');
const heartGreen = document.querySelector('.greenHeart');
const heartBlue = document.querySelector('.blueHeart');
const heartPurple = document.querySelector('.purpleHeart');

heartRed.addEventListener('click', ()=>{
    if(heartOrange.classList.contains('orangeHeart')){
        heartOrange.classList.add('active');
        heartRed.classList.remove('active');
    }
    document.body.style.backgroundColor = "peachpuff";
});

heartOrange.addEventListener('click', ()=>{
    if(heartYellow.classList.contains('yellowHeart')){
        heartYellow.classList.add('active');
        heartOrange.classList.remove('active');
    }
    document.body.style.backgroundColor = "lightgoldenrodyellow";
});

heartYellow.addEventListener('click', ()=>{
    if(heartGreen.classList.contains('greenHeart')){
        heartGreen.classList.add('active');
        heartYellow.classList.remove('active');
    }
    document.body.style.backgroundColor = "lightgreen";
});

heartGreen.addEventListener('click', ()=>{
    if(heartBlue.classList.contains('blueHeart')){
        heartBlue.classList.add('active');
        heartGreen.classList.remove('active');
    }
    document.body.style.backgroundColor = "lightblue";
});

heartBlue.addEventListener('click', ()=>{
    if(heartPurple.classList.contains('purpleHeart')){
        heartPurple.classList.add('active');
        heartBlue.classList.remove('active');
    }
    document.body.style.backgroundColor = "plum";
});

heartPurple.addEventListener('click', ()=>{
    if(heartRed.classList.contains('redHeart')){
        heartRed.classList.add('active');
        heartPurple.classList.remove('active');
    }
    document.body.style.backgroundColor = "lightcoral";
});