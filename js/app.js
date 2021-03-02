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


let CORRECT=3;
for(let i=0;i<4;i++)
{
  let userInput3=prompt('Guess the secret Number ? You have 4 chances !! ?');
  let userInput4=parseInt(userInput3);
 
  if (userInput4===CORRECT){
    alert('You are Right!!');
    console.log('CORRECT');
    cnt+=1;
    break;
  }
  else {
    if (i===3){
      alert('OPPS! YOU OUT OF CHANCES!! The Secret Number is ' + CORRECT);

    }else if (userInput4>CORRECT){
      alert('Number is lower than that');
  
    }
    else if (userInput4<CORRECT){
      alert('number is higher than that!!');
    }
    else if(userInput3!==Number) {
      alert('Plz enter Number');
    }
  }
}




let car=['bmw','audi','nissan','golf'];

for(let i=0;i<6;i++)
{
  let userInput5=prompt('Guess One Of My Fav car ? You have 6 chances !! ?');
  if (userInput5===car[0]||userInput5===car[1]||userInput5===car[2]||userInput5===car[3]){
    alert('You are Right!!');
    console.log('CORRECT');
    cnt+=1;
    break;
  }else{
    if(i===5){
      alert('OPPS! YOU OUT OF CHANCES These My Fav Cars (bmw,audi,nissan,golf) ');
    }
    else if (userInput5!==car[0]||userInput5!==car[1]||userInput5!==car[2]||userInput5!==car[3]){
      alert('NO!! That not one of them');
    }
  }

}







document.write('<h1>Your Score Is  ' + cnt +'  From  7 </h1>');



