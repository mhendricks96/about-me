'use strict'
console.log('hello world')

var banana = 42;

if(banana){
  console.log(banana);
}
//get user name and offer greeting
var username = prompt('whats your name?');
alert('hello ' + username + ' nice to meet you');
// write 5 questions. they must accept y or n OR yes or no in  ANY CASE

var questionOne = prompt('Do i live in Portland?').toLowerCase();
//or
//var normalizedQuestionOne = questionOne.toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('you are correct');
  alert('you are correct');
} else {
  alert('no way');
}