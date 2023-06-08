console.clear();

function numberLength(number) {
    if (typeof number !== 'number') {
        return 'EROR:duok skaiciu';
    }
    if (isNaN(number)) {
        return "EROR:duok normalu skaiciu, o ne NaN";
    }
    if (number === Infinity || number === -Infinity) {
        return "EROR:duok normalu skaiciu, o ne begalybe";
    }
    if (number < 0) {
        return 1
    }
    const numberAsString = number.toString();
    //const numberAsString = number.toString().replace('.', '');
    //const numberAsString = (')' + number).replace('.', '');
    
    return numberAsString.length;
}

console.log(numberLength(5), '->', 1);
console.log(numberLength(71), '->', 3);
console.log(numberLength(3706012345), '->', 11);
console.log(numberLength(true));
console.log(numberLength(false));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength());
console.log(numberLength([]));
console.log(numberLength(numberLength));
console.log('--------------------------------');
console.log(numberLength(-5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(-85), '->', 1);
console.log(numberLength(-34545558), '->', 1);
console.log('--------------------------------');
console.log(numberLength(3.14), '->', 3);