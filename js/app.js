'use strict';

let userInput1=prompt('What`s Your Name ?');
alert('You are Welcome  '+userInput1);
document.getElementById('well').innerHTML = 'Heloo '+ userInput1 +' Wellcome To My Webpage (^-^)';


alert('Answer be(yes/y-no/n)');

let yea='yes';
let yep='y';
let noa='no';
let nop='n';
let cnt=0;
let enter=true;





function q1(userInput2){while (enter) {
  if(userInput2===yea || userInput2===yep){
    alert('You are CORRECT  ');
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
}}
q1(prompt('AM I JORDANIAN?').toLowerCase());



function q2(Age){while (enter) {
  if(Age===yea ||Age===yep){
    alert('WRONG  ');
    break;
  }
  else if (Age===noa || Age===nop){
    alert('You are CORRECT');
    cnt=cnt+1;
    break;
  }
  else {
    break;
  }
}
}
q2(prompt('AM I OVER 30 ?').toLowerCase());


function q3(major){while (enter) {
  if(major===yea || major===yep){
    alert('You are CORRECT  '+userInput1);
    cnt=cnt+1;
    break;
  }
  else if (major===noa || major===nop){
    alert('WRONG');
    break;
  }
  else {
    break;
  }
}
}
q3(prompt('Did I study engineering?').toLowerCase());

function q4(uni){while (enter) {
  if(uni===yea || uni===yep){
    alert('You are CORRECT  '+userInput1);
    cnt=cnt+1;
    break;
  }
  else if (uni===noa || uni===nop){
    alert('WRONG');
    break;
  }
  else {
    break;
  }
}
}
q4(prompt('DID GRADUATED FROM ALZAYTOONAH UNIVERSITY ?').toLowerCase());
 



function q5(ltuc){
  while (enter) {
    if(ltuc===yea || ltuc===yep){
      alert('WRONG  '+userInput1);
      break;
    }
    else if (ltuc===noa || ltuc===nop){
      alert('You are CORRECT');
      cnt=cnt+1;
      break;
    }
    else {
      break;
    }
  }

}
q5(prompt('Am I studying at alzayoonah university at the moment ?').toLowerCase());



let CORRECT=3;
function q6 (userInput3){
  for(let i=0;i<4;i++)
  {
    userInput3=prompt('Guess the secret Number ? You have 4 chances !! ?');
    let userInput4=parseInt(userInput3);

    if (userInput4===CORRECT){
      alert('You are Right!!');
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
}

q6();



let car=['bmw','audi','nissan','golf'];
function q7(userInput5){
  for(let i=0;i<6;i++)
  {
    userInput5=prompt('Guess One Of My Fav car ? You have 6 chances !! ?');
    if (userInput5===car[0]||userInput5===car[1]||userInput5===car[2]||userInput5===car[3]){
      alert('You are Right!!');
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
}
q7(prompt());

document.getElementById('well2').innerHTML = 'Your Score is '+ cnt +' Out Of 7';








