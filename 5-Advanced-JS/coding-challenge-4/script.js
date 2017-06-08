////////////////////////////////////////////////////
// coding challenge 4
////////////////////////////////////////////////////
// fun quiz game in the console

/*
1   Build function constructor called Question to describe question. Include:
    a) question itself
    b) answer options
    c) correct answer (number)
2   Create a couple of questions using constructor
3   Store them all in an array
4   Select one random question and log to console with answer options (hint: write method for question objects)
5   Use prompt function to ask user for correct answer, using numbers
6   Check if answer is correct and log to console if correct or not (hint: another method)
7   Suppose this code would be a plugin for other programmers, so make sure all code is private and doesn't interfere with other programmers code (hint: IIFE)

--EXPERT--
8   After displaying result, display next random question so game never ends (hint: write function for this and call after displaying result of current question)
9   Be careful: after task 8, game literally never ends, so include quit option if user writes 'exit' instead of an answer. Task 8 function then isn't called.
10  Track user's score. Each correct adds 1.
11  Display score in the console. Use another method.
*/

// example IIFE
/*
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

(function() {

  var Question = function(question, answers, correct) {
    this.question = question,
    this.answers = answers,
    this.correct = correct
  }

  var danceQuestion = new Question('What is the best dance?', ['0: The Running Man', '1: The Macarena', '2: The Cabbage Patch', '3: Awkwardly standing off to the side of the room'], 3);
  var foodQuestion = new Question('Are burritos a triumph of food delivery technology?', ['0: Yes', '1: No'], 0);
  var musicQuestion = new Question('What is the best kind of music?', ['0: wailin\' guitar solos', '1: basses getting mad dropped', '2: the kind you\'re to afraid to tell anyone you like'], 2);
  var fingersQuestion = new Question('How many fingers?', ['0: 0', '1: 1', '2: 2', '3: 3', '4: 4', '5: 5, idiot'], 5);
  var yesQuestion = new Question('Yes or no?', ['0: Yes', '1: No', '2: I will not be contained by your binary limits!'], 2);

  var questions = [danceQuestion, foodQuestion, musicQuestion, fingersQuestion, yesQuestion];
  var score = 0;


  Question.prototype.ask = function() {
    console.log(this.question);
    for(var i=0; i<this.answers.length; i++) {
      console.log(this.answers[i]);
    }
    var input = prompt('Submit the number of your answer').toLowerCase();
    var response;
    if (input !== 'exit') {
      response = parseInt(input);
    } else {
      response = input;
    }
    this.check(response, this.correct);
  }

  Question.prototype.check = function(response, correct) {
    if (response === correct) {
      score++;
      console.log('---------------------------------');
      console.log('-- Yoooouuuuuu\'re correct!');
      console.log('-- Current score: ' + score);
      console.log('---------------------------------');
      nextQuestion();
    } else if (response === 'exit') {
      // end game
      console.log('---------------------------------');
      console.log('-- Stop this madness!');
      console.log('-- Your final score: ' + score);
      console.log('---------------------------------');
    } else {
      console.log('---------------------------------');
      console.log('-- I can\'t believe you\'ve done this.');
      console.log('-- Current score: ' + score);
      console.log('---------------------------------');
      nextQuestion();
    }
  }

  function nextQuestion() {
    var nextQuestion = questions[Math.floor(Math.random() * questions.length)];
    nextQuestion.ask();
  }

  nextQuestion();


}());
