var familly = prompt(' Enter {SH MASUM} Name of family member : ');

familly = familly.toLowerCase();

switch (familly) {
    case'mr. shojib':
    document.write('Name : Mr. Sojib' + '</br>' + 'Age : 33 Years Old' + '</br>' + 'Education : PHD in English' + '</br>' + 'Total property : $ 200 Billion dollars')
        break;
    case'mr. himu':
    document.write('Name : Mr. Himu ' + '</br>' + 'Age : 18 Years Old' + '</br>' + 'Education : Honors Complete' + '</br>' + 'Total property : $ 50 Billion dollars')
        break;
    case'mr. masum':
    document.write('Name : Mr. Masum ' + '</br>' + 'Age : 25 Years Old' + '</br>' + 'Education : Masters complete' + '</br>' + 'Total property : $ 120 Billion dollars')
        break;
    default:
        document.write('<h1> Type the correct name </h1>')
        break;
}