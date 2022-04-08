const Slider = document.getElementById('slider');
let mainImage = document.querySelector(".main-sect");
let mainSide = document.querySelector(".side-sect");
const carousel = [
    {
        image: 'img/01.jpg',
        title: 'Austria',
        subtitle:'lorem ipsum',
    },
    {
        image: 'img/02.jpg',
        title: 'Italia',
        subtitle:'lorem ipsum',
    },
    {
        image: 'img/03.jpg',
        title: 'Svizzera',
        subtitle:'lorem ipsum',
    },
    {
        image: 'img/04.jpg',
        title: 'Congo',
        subtitle:'lorem ipsum',
    },
    {
        image: 'img/05.jpg',
        title: 'Marocco',
        subtitle:'lorem ipsum',
    },

];
let currentIndex = 0;
 for(let i = 0; i < carousel.length; i++){
    mainImage.innerHTML += `
        <div class="main">
            <img src="${carousel[i].image}" alt="${carousel[i].title}">
            <h3>${carousel[i].title}</h3>
            <p>${carousel[i].subtitle}</p>
        </div>  
    `;
 };

 for(let i = 0; i < carousel.length; i++){
    mainSide.innerHTML += `
        <div class="side">
            <img class="img filter" src="${carousel[i].image}" alt="${carousel[i].title}">
        </div>  
    `;

 };
 const showImage = document.getElementsByClassName("main");
 const filterImage = document.getElementsByClassName("img");
 showImage[currentIndex].classList.add("show");
 filterImage[currentIndex].classList.remove("filter");
 filterImage[currentIndex].classList.add("border");

const down = document.getElementById("down");
down.addEventListener("click", giu);

const up = document.getElementById("up");
up.addEventListener("click", su);

currentIndex = 0;
showImage[currentIndex].classList.add("show");

function giu(){
        hide();
        currentIndex++;
        if(currentIndex > 4){
            currentIndex = 0;
        }
        show();
}
function su(){
    hide();
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = 4;
    }
    show();
}

function hide(){
    showImage[currentIndex].classList.remove("show");
    filterImage[currentIndex].classList.add("filter");
    filterImage[currentIndex].classList.remove("border");
}

function show(){
    showImage[currentIndex].classList.add("show");
    filterImage[currentIndex].classList.remove("filter");
    filterImage[currentIndex].classList.add("border"); 
}
 Slider.append(mainImage);
