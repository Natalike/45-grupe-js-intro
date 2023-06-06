console.clear();

/* 
FOR - ciklas kuris kartoja procesa N-kartu 
for (1; 2; 3) {}
1)inicijuojame kintamaji pasikartojimu kiekiui skaiciuoti  (aka, tai kelintas dabar kartas);
2)ar kartoti? jei tenkina - kartojam, jei ne - baigiam darba;
3)tai kaip keisti 1) dalies kintamaji?
*/

const tekstas = 'Su gimimo diena';
for (let i=0; i<5; i=i+1) {
    console.log(tekstas);
}

const tekstas1 = 'Su gimimo diena';
for (let i=0; i<5; i=i+1) {
    console.log(i, tekstas1);
}

const tekstas2 = 'Su gimimo diena';
for (let i=10; i<17; i=i+1) {
    console.log(tekstas2);
}

for (let i=10; i<17; i=i+2) {
    console.log(`${i} va ir tiek....`);
}

for (let x=0; x<=5; x++) {
    console.log(x + `....` );
}

//visus teigiamus lyginius vienazenklius skaicius

for (let i=0; i<=8; i +=2) {
    console.log(i);
}

//isspausdinti teigiamus lyginius vienazenklius skaicius atbuline tvarka


console.clear();

for (let n=8; n>=0; n-=2) {
    console.log(n);
}

//kokie yra skaiciu suma nurodyta intervale (imtinai)?
const start1 = 0;
const end1 = 10;
const step1 = 2
for (let i=0; i<end1; i+=step1) {
    console.log(i);
}

console.clear();

const start = 0;
const end = 10;
const step = 1;

let sum = 0;

for (let i = start; i <=end; i +=step) {
    sum += i;
    console.log('>>>',i, sum);

}

console.log(sum);

console.clear();

//const pazymiai1 = [10, 2, 8, 4, 6];
//console.log(pazymiai1[0]);
//console.log('>>>', pazymiai1.length); //kiek is vis pazymiu

//kaip apskaiciuoti pazymiu vidurki?


const pazymiai = [10, 2, 8, 4, 6, 10];
let pazymiuSuma = 0;

for (let i=0; i<pazymiai.length; i++) {
    const pazymys = pazymiai [i];
    pazymiuSuma += pazymys;
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);

//kiek skaiciu yra ne neigiamu?

const number = [10, -7, 5, 77, 13, -9, 0, 14];
let kiek = 0;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; 
    if (number >= 0) {
        kiek++;
    }
}

console.log('KIEK:', kiek);

//const list = [];
//for (let i = 0; i < list.length; i++) {
//    const item = list[i];
//}

console.clear();

//kiek yra zodziu kurie yra trumpesni nei 'Labas'?
//kiek yra zodziu kurie yra ilgesni nei 'Labas'?
//kiek yra zodziu kurie yra tokio pat ilgio kaip 'Labas'?
//pavyzdinis zodis gali buti kintamas..

const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'ka', 'tu', 'Ka', 'vakare'];

const trumpi = 0;
const ilgu = 0;
const toksPat = 0;
const zodis = 'Labas';
const ilgis = zodis.length;

for (let i=0; i < dictionary.length; i++) {
    const word = dictionary[i];
    if (word.length === ilgis) {
        toksPat++;
    } else if (word.length < ilgis) {
        trumpi++
    } else {
        ilgu++
    }
}

console.log('Trumpesniu zodziu:', trumpi);
console.log('Tokio pat ilgio zodziu:',toksPat);
console.log('Ilgesniu zodziu:', ilgu);


const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

//kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
//m1:1 -> 3
//m1:2 -> 0
//m1:3 -> 0
//m2:1 -> 1
//m2:3 -> 0
//m2:3 -> 0
//kiek masyvas1 turi vienetu?
//kiek masyvas2 turi vienetu?
//kiek masyvas3 turi vienetu?
//kiek masyvas4 turi vienetu?



