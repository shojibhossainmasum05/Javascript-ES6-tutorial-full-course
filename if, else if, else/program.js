var fullName = prompt ("Enter Your Full NAME : [Registration Name]")
var roll = prompt ("Enter Your ROLL No : [School Roll No]")
var TestLocation = prompt ("Enter Your Test location : [Test location]")
var RegistrationNumber = prompt ("Enter Your Registration Number : [2020 Registration Number]")
var marksBangla = prompt ("Enter Your BANGLA Marks Result Number : [ Out of 100 ]");
var marksBengaliGrammar = prompt ("Enter Your BANGLA GRAMMAR Marks Result Number : [ Out of 100 ] ");
var marksEnglish = prompt ("Enter Your ENGLISSH Marks Result Number : [ Out of 100 ]");
var marksEnglishGrammar = prompt ("Enter Your ENGLISSH GRAMMAR Marks Result Number : [ Out of 100 ]");
var marksMathematics = prompt ("Enter Your MATHEMATICH Marks Result Number : [ Out of 100 ]");
var marksScience = prompt ("Enter Your SCIENCE Marks Result Number : [ Out of 150 ]");
var marksReligion = prompt ("Enter Your RELIGION Result Number : [ Out of 100 ]");
var marksHandwring = prompt ("Enter Your HANDWRING Result Number : [ Out of 50 ]");
var marksSocety = prompt ("Enter Your SOCETY Result Number : [ Out of 80 ]");






marksEnglish = parseInt(marksEnglish, 10);
marksEnglishGrammar = parseInt(marksEnglishGrammar, 10);
marksBangla = parseInt(marksBangla, 10);
marksBengaliGrammar = parseInt(marksBengaliGrammar, 10);
marksMathematics = parseInt(marksMathematics, 10);
marksScience = parseInt(marksScience, 10);
marksSocety = parseInt(marksSocety, 10);
marksHandwring = parseInt(marksHandwring, 10);
marksReligion = parseInt(marksReligion, 10);


var TotalResult;


TotalResult = marksBangla + marksEnglish + marksMathematics + marksScience + marksEnglishGrammar 
+ marksSocety + marksHandwring + marksReligion + marksBengaliGrammar ;


if ( 850 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>'+ "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" +'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + " <b style=color:LIME;> Congratulations you got : {A+} </b>");
}

else if ( 800 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:NAVY;> Congratulations you got : {A} </b>");   
}

else if ( 749 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:YELLOW;> Congratulations you got : {B+} </b>");
}

else if ( 599 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:GREEN;> Congratulations you got : {B} </b>");
}

else if ( 477 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:MAROON;> Congratulations you got : {C+} </b>");
}

else if ( 450 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:BLUE;> Congratulations you got : {C} </b>");
}

else if ( 420 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult +  ' (Out Of 900)' + '<br>' + "<b style=color:TEAL;> Congratulations you got : {D+} </b>");
}

else if ( 400 <= TotalResult)
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' +TotalResult + ' (Out Of 900)' + '<br>' + "<b style=color:AQUA;> Congratulations you got : {D} </b>");
}

else
{
    document.write('Name : ' + fullName + '<br>' + "Roll No : " + roll + "</br>" + 'Test Location : ' + TestLocation + "</br>" + 'Registration Number : ' + RegistrationNumber + '</br>' + 'Total Test Marks = ' + TotalResult + ' (Out Of 900)' + '<br>' + " Congratulations you got : <b style = color:red;>Failed</b>");
}