// var num1 = prompt('Enter Your Codes (One) Number : ');
// var num2 = prompt('Enter Your Codes  (Two) Number : ');
// var num2 = prompt('Enter Your Codes (Three) Number : ');


// if (num1 > num2 && num1 > num3) 
// {
//     console.log('large = ' + num1);  
// }
// else if (num2 > num1 && num2 > num3) 
// {
//     console.log('large = ' + num2);
// }
// else
// {
//     console.log('large = ' + num3);
// }

var Pawseed = prompt('Enter Your Pro Codes : ');

Pawseed = Pawseed.toLowerCase();

if (Pawseed === "2580" || Pawseed == "sojib" || Pawseed == "01407892308") {
    document.write("<h1> Your password is OK so you can enter </h1> ")
}
else{
    document.write("<h1 style=color:red;> Your password is incorrect </h1>")
}