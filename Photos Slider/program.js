var image = ["images/image1.png", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];

var imageTag = document.querySelector("img");

var count = 0;

function prev() {
    count++;

    if (count >= image.length) {
        count = 0;
        imageTag.src = image[count];
    }
    else{
       imageTag.src = image[count];
    }
}


function next() {
    count--;

    if (count < 0) {
        count = image.length -1;
        imageTag.src = image[count];
    }
    else{
        imageTag.src = image[count];
    }
}
