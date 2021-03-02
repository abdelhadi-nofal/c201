'use strict';

let userInput1=prompt('What`s Your Name ?');
alert('You are Welcome  '+userInput1);
document.write('<h1>welcome  ' +userInput1 +'</h1>');
alert('Answer be(yes/y-no/n)');

let yea='yes';
let yep='y';
let noa='no';
let nop='n';
let cnt=0;
let enter=true;

let userInput2=prompt('AM I JORDANIAN?').toLowerCase();

while (enter) {
  if(userInput2===yea || userInput2===yep){
    alert('You are CORRECT  ');
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (userInput2===noa || userInput2===nop){
    alert('WRONG');
    console.log('WRONG');
    break;

  }

  else {
    break;
  }
}

let Age=prompt('AM I OVER 30 ?').toLowerCase();
while (enter) {
  if(Age===yea ||Age===yep){
    alert('WRONG  ');
    console.log('WRONG');
    break;
  }
  else if (Age===noa || Age===nop){
    alert('You are CORRECT');
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else {
    break;
  }
}

let major=prompt('Did I study engineering?').toLowerCase();
while (enter) {
  if(major===yea || major===yep){
    alert('You are CORRECT  '+userInput1);
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (major===noa || major===nop){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else {
    break;
  }
}

let uni=prompt('DID GRADUATED FROM ALZAYTOONAH UNIVERSITY ?').toLowerCase();
while (enter) {
  if(uni===yea || uni===yep){
    alert('You are CORRECT  '+userInput1);
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (uni===noa || uni===nop){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else {
    break;
  }
}

let ltuc=prompt('Am I studying at alzayoonah university at the moment ?').toLowerCase();
while (enter) {
  if(ltuc===yea || ltuc===yep){
    alert('WRONG  '+userInput1);
    console.log('WRONG');
    break;
  }
  else if (ltuc===noa || ltuc===nop){
    alert('You are CORRECT');
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else {
    break;
  }
}


document.write('<h1>Your Score Is  ' + cnt +'  From  5 </h1>');

// let att=5;
// do {
//   alert('less one att');
//   att-=1;
//   console.log(att);
// }while (att>0);


// while(att>0){
//   alert('sdfds')
// }

// let array=['red','blue','green','yellow'];
// console.log('lenth :', array.length);
// console.log(array[2]);
// console.log(array[array.length-1]);









