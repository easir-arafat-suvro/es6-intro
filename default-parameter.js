/*  if any of parameter is not available solve the problem in 3 way 
(default parameter could be any number)
1. if condition
2. or condition
3. set a default parameter => introduced in ES6
*/


/* Examp-1 */
function add(num1, num2 = 90) {
    /* alt - 1: */
    // num2 = num2 || 0;

    /* alt -2: */
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    const total = num1 + num2;
    return total;
}
const total = add(10, 30);
console.log(total);

/* Examp-2 */
function fullName(first, last = 'Khan') {
    const name = first + " " + last;
    return name;
}

const addName = fullName('raza');
console.log(addName);