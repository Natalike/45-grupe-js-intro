console.clear();

function multiply(a, b) {
    if (5) {
        return 'ERROR';
    }

    const rez = a * b; 
    return rez;

}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(7, 5), '->', 35);
console.log(multiply(-7, 5), '->', -35);
console.log(multiply(7, -5), '->', 35);
console.log(multiply(-7, -5), '->', 35);
console.log(multiply(0, -5), '->', 0);
console.log(multiply(0, 5), '->', 0);
console.log(multiply(-5, -0), '->', 0);
console.log(multiply(5, 0), '->', 0);
console.log(multiply(0.5, 0.5), '->', 0);

console.log(multiply(7, 'labas', 2), '->', 'ERROR');