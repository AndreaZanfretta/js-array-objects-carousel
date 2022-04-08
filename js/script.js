const Slider = document.getElementById('slider');
let mainImage = document.querySelector(".main-sect");
let mainSide = document.querySelector(".side-sect");
const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];
const titles = [
    'Austria',
    'Italia',
    'Svizzera',
    'Congo',
    'Marocco',
]
const subtitles = [
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
]
let currentIndex = 0;
 for(let i = 0; i < imagesArray.length; i++){
    mainImage.innerHTML += `
        <div class="main">
            <img src="${imagesArray[i]}" alt="">
            <h3>${titles[i]}</h3>
            <p>${subtitles[i]}</p>
        </div>  
    `;

 };

 for(let i = 0; i < imagesArray.length; i++){
    mainSide.innerHTML += `
        <div class="side">
            <img class="img filter" src="${imagesArray[i]}" alt="">
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

    currentIndex = 0;
    showImage[currentIndex].classList.add("show");
    down.addEventListener("click", giu);

const up = document.getElementById("up");
up.addEventListener("click", su);

function giu(){
      showImage[currentIndex].classList.remove("show");
      filterImage[currentIndex].classList.add("filter");
      filterImage[currentIndex].classList.remove("border");
        currentIndex++;
        if(currentIndex > 4){
            currentIndex = 0;
        }
        showImage[currentIndex].classList.add("show");
        filterImage[currentIndex].classList.remove("filter");
        filterImage[currentIndex].classList.add("border");  
}
function su(){
    showImage[currentIndex].classList.remove("show");
    filterImage[currentIndex].classList.add("filter");
    filterImage[currentIndex].classList.remove("border");
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = 4;
    }
    showImage[currentIndex].classList.add("show");
    filterImage[currentIndex].classList.remove("filter");
    filterImage[currentIndex].classList.add("border");  
}
 Slider.append(mainImage);
