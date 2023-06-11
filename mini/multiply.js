console.clear();

function multiply(a, b) {
    if (typeof a !== 'number'|| !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.'; 
        
    }
    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = a * b; 
    return rez;

}

console.log(multiply('labas', 2), '->', 'ERROR');
console.log(multiply('5', 2), '->', 'ERROR');
console.log(multiply([], 2), '->', 'ERROR');
console.log(multiply(true, 2), '->', 'ERROR');
console.log(multiply(false, 2), '->', 'ERROR');
console.log(multiply(multiply, 2), '->', 'ERROR');
console.log(multiply(undefined, 2), '->', 'ERROR');
console.log(multiply(7, 'labas'), '->', 'ERROR');
console.log(multiply(7, '5'), '->', 'ERROR');
console.log(multiply(7, []), '->', 'ERROR');
console.log(multiply(7, true), '->', 'ERROR');
console.log(multiply(7, false), '->', 'ERROR');
console.log(multiply(7, multiply), '->', 'ERROR');
console.log(multiply(7, undefined), '->', 'ERROR');
console.log(multiply(NaN, 2), '->', 'ERROR');
console.log(multiply(Infinity, 2), '->', 'ERROR');
console.log(multiply(-Infinity, 2), '->', 'ERROR');
console.log(multiply(7, NaN), '->', 'ERROR');
console.log(multiply(7, Infinity), '->', 'ERROR');
console.log(multiply(7, -Infinity), '->', 'ERROR');

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
