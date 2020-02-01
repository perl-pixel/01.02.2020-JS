//ask user age

let age = prompt('Your age');

//show if user old enought to pass

console.log(age);

if(typeof age !== 'string'){
if (age < 16){
    console.log('Rejected! You are too yang!  Grow up!')
} 
else{
    console.log('Welcome')
  }
}else {

    console.log(`Wrong tyle of data. Entered age is ${typeof age} `);
}

//check if user enought to poss







