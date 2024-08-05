// console.log("Hello World!")

// declare  a variable and assign it a prompt
// put the mail inside the mailbox
// var prompt = prompt('What is your name?');


// console.log(prompt )

// if (10 > 9){
//   console.log( 'yes 10 is grester than 9')
// }else  {
//   console.log('this is false')
// }


var age = prompt('What is your age?');

if(age < 18 && typeof age === "string"){
  alert('you are a minor');
} else if (age >= 18 && age <= 60){
  alert('your an adult');
} else {
  alert('your a senoir citzen');
}
