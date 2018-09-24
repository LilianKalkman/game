
// function constructor
var Question = function(question, answers, correct){
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};
// console.log(Question);

question1 = new Question('Hoe gaat het?', ['goed', 'slecht'], 0);
question2 = new Question('Wat doe je vandaag?', ['zonnen', 'werken'], 1);
question3 = new Question('Nog een koffie nemen?', ['ja', 'nee'], 0);

questionsArray = [];
questionsArray.push(question1, question2, question3);
// console.log(questionsArray);

// log all the questions and answers to the console, based on random number
var randomNum = Math.floor(Math.random() * 3);
console.log(questionsArray[randomNum].question);
console.log('0:' + questionsArray[randomNum].answers[0]);
console.log('1:' + questionsArray[randomNum].answers[1]);

// closure function to keep answer save and make it general to use for every question
// also includes; function in a function, scope chain of functions

function showAnswer(){
  var useranswer = prompt('What answer do you choose? Enter 0 or 1');
   return function logAnswer(answer){
    if(useranswer == answer){
      console.log('Correct Answer!');
    } else {
      console.log('Answer is not correct, refresh page');
    }
  }
}

showAnswer()(questionsArray[randomNum].correct);
