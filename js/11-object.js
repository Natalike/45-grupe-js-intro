console.clear();

const users = [
    ['Jonas', 99, true],
    ['Maryte', 88, false],
    ['Petras', 77, false],
    ['Ona', 66, true],
    [55, false, 'Kazys'],
    ['Natalija', true],
];

const userIndex = 4;
const user = users[userIndex];

const userName = user[0];
const userAge = user[1];
const userIsMarried = user[2];

// Sveiki, mano vardas yra VARDAS, man yra XX metu ir as VEDES/NEVEDES.

let vedybinisTekstas = '';
if (!userIsMarried) {
    vedybinisTekstas = 'ne';
}

let hi = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as ${vedybinisTekstas}vedes.`;

console.log(hi);

console.clear();

const students = [
    {
        name: 'Jonas',
        age: 99,
        isMarried: true,
    },
    {
        name: 'Maryte',
        age: 88,
        isMarried: false,
    },
];

const studentIndex = 1;
const student = students[studentIndex];

console.log(students);
console.log(student);
console.log(student['age']);
console.log(student['name']);
console.log(student['isMarried']);


console.clear();

const car = {
    marke: 'Audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
    wheel: 'left',
}

console.log(car);

const noriuSuzinoti = 'color';

const reiksme = car[noriuSuzinoti];
console.log('>>>', reiksme);

console.log('---------------');

const child = {
    name: 'Maryte',
    age: 5,
    parents: {
        father: {
            name: 'Jonas',
            age: 32,
            phones: [1111, 4444, 5555]
        },

        mother: {
            name: 'Ona',
            age: 35,
            phones: [2222, 3333]
        },
    },
};

const info = child.parents.mother;
console.log(info);