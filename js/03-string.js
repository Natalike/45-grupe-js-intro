console.clear();

/*

STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ('')
- dvigubos kabutes ("")

*/

const vardas = 'Jonas';
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas2);

const firstName = 'Ona';
const lastName = 'Onaityte';

// Ona Onaityte
const fullName = firstName + ' ' + lastName;
console.log(fullName);

//Sveiki, as esu Ona!
const rekiam = 'Sveiki, as esu ' + firstName + '!';

console.log(rekiam);

console.log('-----------------------------');

// Vienguba kabute (').

const kabute1 =  "Vienguba kabute (')";
console.log(kabute1);

//Dviguba kabute (");
const kabute2 = 'Dviguba kabute (")';
console.log(kabute2);

//Vienguba (') ir dviguba (") kabutes;

const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

//Vienguba (') ir dviguba (") kabutes;

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes";
console.log(kabute12_1);
console.log(kabute12_2);

//Komentars (//).
const comment1 = 'Komentaras (//).';
const comment2 = "Komentaras (//).";
console.log(comment1);
console.log(comment2);

// Backlash (\) matysis tik antras ir ketvirtas \
const back1 = 'Backlash (\\).';
const back2 = "Backlash (\\\\).";
console.log(back1);
console.log(back2);


/*
Labas
rytas,
Lietuva!
*/


// \n - New Line simbolis (slenkasi eilute zemyn, bet lieka X asyje, ten pat)
// \r - return (grizta i tos pacios eilutes prieki ir raso is naujo)
// \r\n\ - 
// \t - tab


const labas = 'Labas\n\
rytas,\n\
Lietuva!';
console.log(labas);

const HTML = '<header>\n\
    <img scr="#" alt="Logo" class="logo">\n\
    <nav>\n\
        a href="#>Link</a>\n\
        a href="#>Link</a>\n\
        a href="#>Link</a>\n\
        a href="#>Link</a>\n\
    <nav>\n\
</header>';

console.log(HTML);

const HTML1 = '<header>\r\
    <img scr="#" alt="Logo" class="logo">\r\
    <nav>\r\
        a href="#>Link</a>\r\
        a href="#>Link</a>\r\
        a href="#>Link</a>\r\
        a href="#>Link</a>\r\
    <nav>\r\
</header>';

console.log(HTML1);

const HTML3 = '<header>\r\n\
    <img scr="#" alt="Logo" class="logo">\r\n\
    <nav>\r\n\
        a href="#>Link</a>\r\n\
        a href="#>Link</a>\r\n\
        a href="#>Link</a>\r\n\
        a href="#>Link</a>\r\n\
    <nav>\r\n\
</header>';

console.log(HTML3);


//Sveiki mano vardas [vardas], man yr a[metai] ir man labai patinka [kas patinka], [kas patinka] ir [kas patinka]!

console.clear();

const name = "Martynas";
const age = 99;
const tittle = "masina";
const tittle1 = 'roges';
const tittle2 = 'barskuoles'

/*const martis = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + tittle + " , " + tittle1 + " ir " + tittle + " ! ";
console.log = martis;
console.log = ();*/

const martynas = `Sveiki mano vardas ${name}, man yra ${age} metai ir man labai patinka ${tittle}, ${tittle1} ir ${tittle2}!`
console.log(martynas);

const lentele = ``;
const lentele1 = "";