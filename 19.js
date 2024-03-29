
//regular expression

const message = 'Hello world';
const regex = /world/;

console.log(message.match(regex));

const reges = /is/;
// const user = prompt("Enter your name");

// console.log(user.match(reges));

// if (user.match(reges)) {
//   console.log("user name contains is");
// }
// else{
//     console.log("user name does not contain is");
// }

const pattern = /^\d{10}$/;
const phone = prompt("Enter your phone number");

console.log();

if(phone.match(pattern) !== null){
    console.log("successfully...")
}
else{
    alert("not valid number");
}