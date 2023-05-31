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

const lentele22 = ``;
const lentele23 = "";

console.clear();

/*  8*1=8
    8*2=16
    8*3=24
    8*4=32
    8*5=40
    8*6=48
    8*7=56
    8*8=64
    8*9=72
    8*10=80
    */



const x = 8;
const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5;
const f = 6;
const g = 7;
const h = 8;
const i = 9;

const lygu = x * a;
const lygu1 = x * b;
const lygu2 = x * c;
const lygu3 = x * d;
const lygu4 = x * e;
const lygu5 = x * f;
const lygu6 = x * g;
const lygu7 = x * h;
const lygu8 = x * i;

const daugyboslentele = x + "*" + a + "=" + lygu + "\r\n" + x + "*" + b + "=" + lygu1 + "\r\n" + x + "*" + c + "=" + lygu2 + "\r\n" + x + "*" + d + "=" + lygu3 + "\r\n" + x + "*" + e + "=" + lygu4 + "\r\n" + x + "*" + f + "=" + lygu5 + "\r\n" + x + "*" + g + "=" + lygu6 + "\r\n" + x + "*" + h + "=" + lygu7 + "\r\n" + x + "*" + i + "=" + lygu8 + "\r\n";

console.log(daugyboslentele);

const dlentele = `
${x} * ${a} = ${lygu}
${x} * ${b} = ${lygu1}
${x} * ${c} = ${lygu2}
${x} * ${d} = ${lygu3}
${x} * ${e} = ${lygu4}
${x} * ${f} = ${lygu5}
${x} * ${g} = ${lygu6}
${x} * ${h} = ${lygu7}
${x} * ${i} = ${lygu8}
`

console.log(dlentele);

const lentele22222 = '2';

const daugiklis = 2;
const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;
const n7 = 7;
const n8 = 8;
const n9 = 9;
const n10 = 10;

const lentele1 =  daugiklis + '*' + n1 + '=' + (daugiklis * n1) + '\r\n' + daugiklis + '*' + n2 + '=' + (daugiklis * n2) + '\r\n' + daugiklis + '*' + n3 + '=' + (daugiklis * n3) + '\r\n' + daugiklis + '*' + n4 + '=' + (daugiklis * n4) + '\r\n' + daugiklis + '*' + n5 + '=' + (daugiklis * n5) + '\r\n' + daugiklis + '*' + n6 + '=' + (daugiklis * n6) + '\r\n' + daugiklis + '*' + n7 + '=' + (daugiklis * n7) + '\r\n' + daugiklis + '*' + n8 + '=' + (daugiklis * n8) + '\r\n' + daugiklis + '*' + n9 + '=' + (daugiklis * n9) + '\r\n' + daugiklis + '*' + n10 + '=' + (daugiklis * n10) + '\r\n';

console.log(lentele1);

const multiplier = 3;
let number = 0
//
const lentele3 = `
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
${multiplier} + ${++number} = ${multiplier * number}
`;

console.log(lentele3);


let sum = multiplier;
let index = 0;

const lentele4 = `
${multiplier} + ${++index} = ${sum += multiplier}
`
console.log(lentele4);

console.clear();


//           01234567
const str = 'Pavyzdys';
console.log(str, 8, '>>>', str.length);

const empty = '   kjg   ';
console.log(empty.length);

const raide1 = str[0];
console.log(raide1, 'p');

console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

let strIndex = 0;

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.clear();

const userFirstName = 'chuck';
const userLastName = 'Noris';

const userAbbr = `${userFirstName[0]}.${userLastName[0]}.`;
console.log(userAbbr);