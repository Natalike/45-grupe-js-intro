console.clear();

/*
BOOLEAN - logine reiksme
true, falsa

Loginiai operatoriai:
&& (and) - ir
|| (or) - arba

*/

const isOld = true;
console.log(isOld);

const isFunny = false;
console.log(isFunny);

console.log('--------------');

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('--------------');

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log('--------------');

console.log(true && true || false);
console.log(true || false);
console.log(true);

console.log('--------------');

console.log(false || false && true || false && false || true);
console.log(false && true || false && false || true);
console.log(false || false && false || true);
console.log(false && false || true);
console.log(false || true);
console.log(true);