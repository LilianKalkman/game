// function test() {
//   const variable = console.log('global scope or not..?');
//   const n = 10;
//   return variable;
// }
// test();
//
//

// function constructor
var Person = function(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
}
// function constructor
var Animal = function(name, type, gewicht){
  this.name = name;
  this.type = type;
  this.weight = gewicht;
}

// pass functions/methods to the instances of the Animal object
Animal.prototype.summarize = function(){
  console.log(this.name + this.type + this.weight);
}

var lucky = new Animal('lucky', 'dog', 85);
var knabbel = new Animal('knabbel', 'konijn', 35);

console.log(Animal);
console.log(lucky);

knabbel.summarize();
lucky.summarize();

console.log(this);

// Person.prototype.calculateAge = function () {
//   console.log(2016 + this.age);
// };
//
// console.log(Person);
//
// var lilian = new Person('lilian', 27, 'developer');
// var nicole = new Person('nicole', 24, 'social');
//
// lilian.calculateAge();
// nicole.calculateAge();
//
// console.log(lilian);
// console.log(nicole);
// new = {}
// maakt nieuw object
// nu wijst this niet naar de global object, maar naar het nieuw gecreerde object.

function global(){
  console.log('global');
  var x = 10;
  var number = local();
  console.log(number);
  function local(){
    console.log( x + 'local');
    var n = 2 + 2;
    return n;
  }
}
// zo werkt de return dus! meestal return je een function die je dan wilt gebruiken, maar het kan ook met variables,
// alleen dan moet je die wel storen in een nieuw assigned variable zoals hierboven number.
// als ik return niet had gebruikt dan is number undefined.
global();


// CLOSURES

function retirement(retirementAge){
  var a = 'years left until retirement';
  return function(yearOfBirth){
    var age = 2016 - retirementAge;
    console.log((retirementAge - age) + a);
  }
}
// hier return je een function zodat je die in een variable kan storen en als function kan gebruiken.

retirement(65)(1990);

function interviewQuestion(job){
  return function(name){
    console.log('hi' + name + 'How is your job as' + job + '?');
  };
};

var designerQuestion = interviewQuestion('designer');
designerQuestion('lilian');

const krien = {
  name: 'Carine',
  age: 60,
  job: 'mom',
  testfunction: function(){
    console.log('test function to call and bind' + this.name + this.age);
  }
}

const lilian = {
  name: 'lilian',
  age: 27,
  job: 'developer'
};

krien.testfunction();

krien.testfunction.call(lilian);
const bindFunction = krien.testfunction.bind(lilian);
bindFunction();
