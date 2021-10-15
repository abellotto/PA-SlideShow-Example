let qtdImg = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

document.querySelector(".slider--width").style.width = 
    `calc(100vw * ${qtdImg})`;

document.querySelector(".slider--controls").style.height = 
    `${document.querySelector(".slider--space").clientHeight}px`;



function ctrlPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = qtdImg -1;
    }
    updateMargin();
}

function ctrlNext() {
    currentSlide++;
    if (currentSlide > (qtdImg - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    // let newMargin = (currentSlide * document.body.clientWidth);
    let newMargin = (currentSlide * document.querySelector(".slider--space").clientWidth);

    document.querySelector(".slider--width").style.marginLeft = 
        `-${newMargin}px`

}



setInterval(ctrlNext, 4000);