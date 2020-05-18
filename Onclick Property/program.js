var mySmsYou = document.querySelector("#idName");

var myImage = document.querySelector("#image");

function youAreNews() {

    alert ('তোমার ছবিটা দেখতে খারাপ লাগছে না | তুমি অনেক পরিবর্তন হয়ে গেছো , তবে লক্ষ করেছি তোমার চুলগুলো অনেক বড় হয়ে গেছে | তুমি চুলগুলো কেটে ফেলবো এবং সেভ করবা.');

    mySmsYou.innerHTML = 'It does not look bad to see your picture. You be changed a lot, but I be noticed that your hair has grown too big. You will cut and save your hair..';

    myImage.src = "images/SH_Masum_solit_now_Photo-removebg-preview.png";
}

function youAreNews2() {

    alert ('তোমাকে দেখতে অনেক সুন্দর লাগছে | তোমার পুরো মুখ ফ্রেশ লাগছে | তুমি অনেক সুন্দর চুল গুলো সুন্দর লাগছে | তবে তুমি আর একটু মোটা হলে ভালো লাগতো.');

    mySmsYou.innerHTML = 'You look so beautiful, your whole face looks fresh, you have so many beautiful hairs, but it would be nice if you got a little thicker.';

    myImage.src = "images/SH_Masum_1Year_Old_Photo-removebg-preview (1).png";
}