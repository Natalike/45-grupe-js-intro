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