const { data } = require("./p4-data.js");


function getQuestions() {
    return ['Q1', 'Q2', 'Q3'];
  }


  function getAnswers() {
    return ['A1', 'A2', 'A3'];
  }

  // I can get extra credit in this section if you clone the 2 arrays and make it into one
  function getQuestionsAnswers() {
    const dataArray = [
      { question: 'Q1', answer: 'A1' },
      { question: 'Q2', answer: 'A2' },
      { question: 'Q3', answer: 'A3' }
    ];
    return dataArray.slice();

  }

  function getQuestion(number = "") {
    const dataArray = [
        { question: 'Q1', answer: 'A1' },
        { question: 'Q2', answer: 'A2' },
        { question: 'Q3', answer: 'A3' }
      ];

      const questionNumber = parseInt(number) -1;

      if (isNaN(questionNumber)|| questionNumber < 0 || questionNumber >=dataArray.length) {
        return { question: ' ', number: ' ', error: 'The number you put in is not valid, choose a number from 1-3'};

      }
      const getQuestion = {
        question: dataArray[questionNumber].question,
        number: number,
        error: ' '
      };

      return getQuestion;
  }

  function getAnswer(number ="") {
    const dataArray = [
        { question: 'Q1', answer: 'A1' },
        { question: 'Q2', answer: 'A2' },
        { question: 'Q3', answer: 'A3' }
      ];

      const answerNumber = number -1;

      if (number === " " || typeof number !== "number" || answerNumber < 0 || answerNumber >=dataArray.length) {
        return { answer: ' ', number: ' ', error: 'The answer number you put in is not valid, choose a number from 1-3'};
      }


      const getAnswer2= {
        answer: dataArray[answerNumber].answer,
        number: number,
        error: ' '
      };

      return getAnswer2;
  }

  function getQuestionAnswer(number = "") {
    const questionAnswer = {};

    if (typeof number !== "number" || number < 1 || number > 3) {
        questionAnswer.error = "Chose a valid question number from 1-3";
    } else {
        questionAnswer.question = data[number -1].question;
        questionAnswer.answer = data[number -1].answer;
        questionAnswer.number = number;
    }

    return questionAnswer;

  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  };


  //Testing all functions - code below

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }

   // getAnswers()
 
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
   // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
   // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
   // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


// //More testing code


  function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
 