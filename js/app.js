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

let userInput2=prompt('AM I JORDANIAN?').toLowerCase();
while (true) {
  if(userInput2===yea){
    alert('You are CORRECT  ');
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (userInput2===yep){
    console.log('CORRECT');
    alert('You are CORRECT  ');
    cnt=cnt+1;
    break;

  }
  else if (userInput2===noa){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else if (userInput2===nop){
    alert('WRONG');
    console.log('WRONG');
    break;
  }
  else {
    break;
  }
}

let Age=prompt('AM I OVER 30 ?').toLowerCase();
while (true) {
  if(Age===yea){
    alert('WRONG  ');
    console.log('WRONG');
    break;
  }
  else if (Age===yep){
    alert('WRONG ');
    console.log('WRONG');
    break;

  }
  else if (Age===noa){
    alert('You are CORRECT');
    console.log('CORRECT');
    cnt=cnt+1;
    break;

  }
  else if (Age===nop){
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
while (true) {
  if(major===yea){
    alert('You are CORRECT  '+userInput1);
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (major===yep){
    alert('You are CORRECT ');
    console.log('CORRECT');
    cnt=cnt+1;
    break;

  }
  else if (major===noa){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else if (major===nop){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else {
    break;
  }
}

let uni=prompt('DID GRADUATED FROM ALZAYTOONAH UNIVERSITY ? ').toLowerCase();
while (true) {
  if(uni===yea){
    alert('You are CORRECT  '+userInput1);
    console.log('CORRECT');
    cnt=cnt+1;
    break;
  }
  else if (uni===yep){
    alert('You are CORRECT ');
    console.log('CORRECT');
    cnt=cnt+1;
    break;

  }
  else if (uni===noa){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else if (uni===nop){
    alert('WRONG');
    console.log('WRONG');
    break;

  }
  else {
    break;
  }
}

let ltuc=prompt('Am I studying at alzayoonah university at the moment ?').toLowerCase();
while (true) {
  if(ltuc===yea){
    alert('WRONG  '+userInput1);
    console.log('WRONG');
    break;
  }
  else if (ltuc===yep){
    alert('WRONG ');
    console.log('WRONG');
    break;

  }

  else if (ltuc===noa){
    alert('You are CORRECT');
    console.log('CORRECT');
    cnt=cnt+1;
    break;

  }
  else if (ltuc===nop){
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





