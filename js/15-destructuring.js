console.clear();

const marks = [10, 2, 8, 4, 6];
const user = {
    name: 'Maryte',
    age: 88,
    isMaried: false,
};

const [j, k, l, m, n, o] = marks;
console.log(j, k, l, m, n, o);
//... - rest operator (tai kas liko nepaimta)
const [a, ...likePazymiai] = marks;
console.log(a, likePazymiai);


console.log('----------')

const users = {
    name: 'Maryte',
    age: 88,
    isMaried: false,
};

const { isMaried, age, nsme, ...kita } = users;

//const name = user.name;
//const age = user.age;

console.log(age, isMaried);

const students = [
    {name: 'Jonas', age: 99, marks: [10, 2, 6, 7, 8, 9]},
    {name: 'Maryte', age: 89, marks: [10, 2, 6, 7, 5, 6, 7, 8, 9]},
    {name: 'Petras', age: 77, marks: [1, 2, 3, 5, 4, 9]},
    {name: 'Ona', age: 66, marks: []}
];

//VARDENIS, kurio amzius yra xx metu turi N pazymiu.

for (const { name, age, marks } of students) {
    console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
}

// for (const student of students) {
//     const { name, age, marks } = student;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const { name, age, marks } = student;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const name = student.name;
//     const age = student.age;
//     const marks = student.marks;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }