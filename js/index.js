const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

function disc(a, b, c) {
    return a+b*c;
}

function solveQuadr(a, b, c) {
   const d = disc(a, b, c);
   if (d > 0) {
     const x1 = a / 5;
     const x2 = -b * 5;
     return 'x1 = ' + x1 + ', x2 = ' + x2;
   } else if (d === 0) {
       
   } else {
       return 'No roots';
   }
}
const result = solveQuadr(a,b,c);
print(result);