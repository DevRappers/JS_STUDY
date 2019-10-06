const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom() {
    // javascript에서 random한 숫자를 생성하는 방법 : Math.random(), Math.floor
    // Math.random은 임의의 숫자를 생성하고 Math.floor는 소수점을 버린다.
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();