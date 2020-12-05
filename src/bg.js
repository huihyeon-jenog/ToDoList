const bgImg = document.querySelector("body");

const imgArray = 5

function randomeImg(){
    const randomImage = Math.floor(Math.random()*imgArray)+1;
    return randomImage;
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    bgImg.appendChild(image);
}
function init(){
    const randomNumber = randomeImg();
    paintImage(randomNumber);

}

init();