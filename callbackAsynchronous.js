// Asynchronous callback
console.log('start');

function getGreeting(name, cb) {
   setTimeout(() => {
     cb(`Hello I'm ${name}!`);
     console.log('And I comes last.')
   }, 0);
}


getGreeting('Edward', (greeting) => {
  console.log(greeting);
});

console.log('end');

