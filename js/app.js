let userInput1=prompt('What`s Your Name ?');
alert('You are Welcome  '+userInput1);
document.write('<h1>welcome  ' +userInput1 +'</h1>');
alert('Answer be(yes/y-no/n)');

let yea='yes';
let yep='y';
let noa='no';
let nop='n';

let userInput2=prompt('IS 5>3').toLowerCase();
while (true) {
  if(userInput2===yea){
    alert('You are CORRECT  ');
    console.log('welcome');
    break;
  }
  else if (userInput2===yep){
    console.log('welcome');
    alert('You are CORRECT  ');
    break;

  }
  else if (userInput2===noa){
    alert('WRONG');
    break;

  }
  else if (userInput2===nop){
    alert('WRONG');
    break;
  }
  else {
    break;
  }
}

let Age=prompt('IS 100<10.1').toLowerCase();
while (true) {
  if(Age===yea){
    alert('WRONG  ');
    console.log('welcome');
    break;
  }
  else if (Age===yep){
    alert('WRONG ');
    console.log('age');
    break;

  }
  else if (Age===noa){
    alert('You are CORRECT');
    break;

  }
  else if (Age===nop){
    alert('You are CORRECT');
    break;

  }
  else {
    break;
  }
}

let major=prompt('Is 4!=24').toLowerCase();
while (true) {
  if(major===yea){
    alert('You are CORRECT  '+userInput1);
    console.log('welcome');
    break;
  }
  else if (major===yep){
    alert('You are CORRECT ');
    console.log('major');
    break;

  }
  else if (major===noa){
    alert('WRONG');
    break;

  }
  else if (major===nop){
    alert('WRONG');
    break;

  }
  else {
    break;
  }
}

let uni=prompt('Is 0!=1').toLowerCase();
while (true) {
  if(uni===yea){
    alert('You are CORRECT  '+userInput1);
    console.log('welcome');
    break;
  }
  else if (uni===yep){
    alert('You are CORRECT ');
    console.log('uni');
    break;

  }
  else if (uni===noa){
    alert('WRONG');
    break;

  }
  else if (uni===nop){
    alert('WRONG');
    break;

  }
  else {
    break;
  }
}

let ltuc=prompt('Is 1!=0').toLowerCase();
while (true) {
  if(ltuc===yea){
    alert('WRONG  '+userInput1);
    console.log('welcome');
    break;
  }
  else if (ltuc===yep){
    alert('WRONG ');
    console.log('ltuc');
    break;

  }

  else if (userInput2===noa){
    alert('You are CORRECT');
    break;

  }
  else if (userInput2===nop){
    alert('You are CORRECT');
    break;

  }
  else {
    break;
  }
}





