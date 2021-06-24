// import functions

// reference needed DOM elements
const catPic = document.getElementById('catpic');
const catSound = document.getElementById('cat-sound');
catPic.addEventListener('click', ()=>{
    catSound.play();
});
const dogPic = document.getElementById('dog-pic');
const dogSound = document.getElementById('dog-sound');
dogPic.addEventListener('click', ()=>{
    dogSound.play();
});
const horsePic = document.getElementById('horse-pic');
const horseSound = document.getElementById('horse-sound');
horsePic.addEventListener('click', ()=>{
    horseSound.play();
});
dogPic.onclick = function() {
catPic.classList.add('animate');
};

document.addEventListener('keydown', event => {
  console.log(event.code);
  if(event.code==="KeyA"){
    catPic.classList.add('animate');
    dogSound.play(); 
  }

})

/*function logKey(e) {
catPic.classList.add('animate');
dogSound.play();
};*/



// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
