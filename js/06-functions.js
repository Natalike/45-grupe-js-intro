/* 
FUNCTIONS - perpanaudojamos logikos blokas
*/
console.clear();

const a1 = 10;
const a2 = 2;
const a3 = 8;
const a4 = 4;
const a6 = 6;

const aVidurkis = (a1 + a2 + a3 + a4 + a6) /5;
console.log('a:', aVidurkis);

function inicialai (vardas,pavarde){
    return `${vardas[0]}.${pavarde[0]}.`;
}

const ini1 = inicialai('Chuck', 'Noris');
const ini2 = inicialai('Pamela', 'Anderson');

console.log('Inicialas 1:', ini1);
console.log('Inicialas 2:', ini2);


//Sveiki, mano vardas Jonas ir man 99!
//Sveiki, mano vardas Maryte ir man 88!
//Sveiki, mano vardas Petras ir man 50!
//Sveiki, mano vardas Ona ir man 25!



function intro(name, age) {
    return `Sveiki, mano vardas ${name} ir man ${age} metai`;
}

const intro1 = intro('Jonas', 99);
const intro2 = intro('Maryte', 88);
const intro3 = intro('Petras', 50);
const intro4 = intro('Ona', 25);

console.log(intro1);
console.log(intro2);
console.log(intro3);
console.log(intro4);