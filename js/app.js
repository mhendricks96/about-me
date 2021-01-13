'use strict'
console.log('hello world')


//get user name and offer greeting
var username = prompt('What is your name?');
alert('hello ' + username + ' nice to meet you');
// write 5 questions. they must accept y or n OR yes or no in  ANY CASE

var questionOne = prompt('Do you think I live in Washington state?').toLowerCase();
//or
//var normalizedQuestionOne = questionOne.toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('Nope, one state lower');
  alert('Nope, one state lower');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('Good guess');
} else {
  alert('ummmm...weird answer');
}

var questionTwo = prompt('Do you think I have a dog?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
  //console.log('Yea! Of course I do! I have a wonderful old boy named Eazy-E');
  alert('Yea! Of course I do! I have a wonderful old boy named Eazy-E');
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert('What do you think I am, a monster? Just so you know, I have a dog named Eazy-E');
} else {
  alert('are you paying attention to the questions?');
}