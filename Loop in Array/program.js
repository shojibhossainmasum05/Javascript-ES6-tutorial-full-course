var codes = new Array ();

for (var i = 0; i < 14; i++) {
   codes[i] = parseInt(prompt("Enter Your Codes : "));
      
}



var codes = [11,12,13,14,15,16,17,18];
codes.push(19);
codes.push(20);
codes.push(21);
codes.push(22);
codes.push(23);
codes.push(24);
codes.push(25);

var sum = 0;

for (var i = 0; i <14; i++);

{
    console.log(codes[i]);
    sum = sum + codes[i];           
}    

console.log("sum = " + sum);

console.log("Codes Length = " + codes.length);