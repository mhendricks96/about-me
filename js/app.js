'use strict'
console.log('hello world')


//get user name and offer greeting
var username = prompt('What is your name?');
alert('hello ' + username + ' nice to meet you');
// write 5 questions. they must accept y or n OR yes or no in  ANY CASE

var questionOne = prompt('Do I live in Washington state?').toLowerCase();
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

