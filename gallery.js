const grid = document.querySelector(".photo-grid");
const smallImage = grid.querySelectorAll(".grid-item");
const showImage = grid.querySelectorAll(".show-img");
const imageContent = grid.querySelectorAll(".img-content");

function gridImage() {
    for(i=0; i < smallImage.length; i++) {
        smallImage[i].style.backgroundImage = `url(imgs/${i+1}.JPG`;
    }
};

function viewImages() {
    for(i=0; i < imageContent.length; i++) {
        imageContent[i].style.backgroundImage = `url(imgs/${i+1}.JPG`;
    }
}

function clickPhoto() {
    smallImage.forEach(item => {
        item.addEventListener("click", function() {
            let image = item.querySelector(".show-img");
            let gettingStyle = getComputedStyle(image);
            if(gettingStyle.visibility === "hidden") {
                image.style.visibility = "visible";
                image.style.opacity = 1;
            } else {
                image.style.visibility = "hidden";
                image.style.opacity = 0;
            }
        })
    })
}; 

function init(){
    gridImage();
    clickPhoto();
    viewImages();
};

init();