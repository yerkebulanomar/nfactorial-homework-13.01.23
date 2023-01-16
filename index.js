let user = {
    name: prompt('What is your name?'),
    age: prompt('What is your age?'),
    gender: prompt('What is your gender?')
}

console.log(user.name);
console.log(user.age);
console.log(user.gender);

if (user.age < 18) {
    alert("You can't enter")
}
else {
    alert('You can enter')
}

console.log('part 2')

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

switch(a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

console.log('part 3')

let sum = 0;

for (let i = 0; i < 100; i+=2) {
    sum += i;
}
console.log(sum)


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}