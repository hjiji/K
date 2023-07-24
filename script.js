const questions = [
    {
      question: "다음 중 어법상 올바른 문장은 무엇인가?",
      correctAnswer: "내가 가진 건 너뿐이다.",
      answers: ["내가 가진 건 너뿐이다.", "내가 가진 건 너 뿐이다."]
    },
    {
      question: "다음 중 '대로'를 띄어 써야 하는 문장은 무엇인가?",
      correctAnswer: "네가 아는대로 다 말한다면 네 가족의 안전은 보장해주지.",
      answers: ["네가 아는대로 다 말한다면 네 가족의 안전은 보장해주지.", "나는 나대로 너는 너대로 이제 서로의 길을 걸어가자."]
    },
    {
      question: "다음 중 띄어쓰기가 잘못된 문장은 무엇인가?",
      correctAnswer: "걔네 집은 너희 집 만큼 크더라!",
      answers: ["이제 할 만큼 하지 않았니? 제발 정신 좀 차려!", "걔네 집은 너희 집 만큼 크더라!"]
    },
    {
      question: "다음 중 어법상 올바른 문장은 무엇인가?",
      correctAnswer: "나는 너같이 나쁜 사람이 아니야. 너보다는 나은 선택을 할 거야.",
      answers: ["나는 너같이 나쁜 사람이 아니야. 너보다는 나은 선택을 할 거야.", "걔는 너와같이 행동하지 않아. 나에게 상처를 줄 리 없어."]
    },
    {
      question: "다음 중 띄어쓰기가 잘못된 문장은 무엇인가?",
      correctAnswer: "그와 헤어진지 벌써 석 달이 넘었다.",
      answers: ["네가 이렇게 행동할 때마다 어떻게 해야 할지 모르겠다.", "그와 헤어진지 벌써 석 달이 넘었다."]
    },
   
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  function startQuiz() {
    const titleElement = document.querySelector(".title");
    const startButton = document.querySelector(".start-button");
    const questionWrapper = document.querySelector(".question-wrapper");
    titleElement.style.display = "none";
    startButton.style.display = "none";
    questionWrapper.style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const questionElement = document.querySelector(".question");
    const answerButtonsContainer = document.querySelector(".answer-buttons");
    const resultWrapper = document.querySelector(".result-wrapper");
    const finalResultWrapper = document.querySelector(".final-result-wrapper");
    const currentQuiz = questions[currentQuestion];
  
    questionElement.textContent = currentQuiz.question;
    resultWrapper.style.display = "none";
    finalResultWrapper.style.display = "none"; 
  
    answerButtonsContainer.innerHTML = "";
  
    currentQuiz.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.value = answer;
      button.onclick = () => checkAnswer(answer);
      answerButtonsContainer.appendChild(button);
      answerButtonsContainer.appendChild(document.createElement("br"));
    });
  }
  
  function checkAnswer(userAnswer) {
    const currentQuiz = questions[currentQuestion];
  
    if (userAnswer === currentQuiz.correctAnswer) {
      correctAnswers++;
      displayResult("맞았습니다!", "green");
    } else {
      incorrectAnswers++;
      displayResult("틀렸습니다. 정답은 '" + currentQuiz.correctAnswer + "'입니다.", "red");
    }

    const nextQuestionButton = document.querySelector(".next-question-button");
    const resultCompleteButton = document.querySelector(".result-complete-button");
    if (currentQuestion === questions.length - 1) {
      nextQuestionButton.style.display = "none";
      resultCompleteButton.style.display = "block";
    } else {
      nextQuestionButton.style.display = "block";
      resultCompleteButton.style.display = "none";
    }
  }
  
  function displayResult(message, color) {
    const resultWrapper = document.querySelector(".result-wrapper");
    const resultElement = document.querySelector(".result");
    const answerButtonsContainer = document.querySelector(".answer-buttons");
  
    resultElement.textContent = message;
    resultElement.style.color = color;
    resultWrapper.style.display = "block"; 
  
    const answerButtons = answerButtonsContainer.querySelectorAll("button");
    answerButtons.forEach(button => (button.disabled = true));
  }
  
  function showNextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const nextQuestionButton = document.querySelector(".next-question-button");
      const resultCompleteButton = document.querySelector(".result-complete-button");
      nextQuestionButton.style.display = "none";
      resultCompleteButton.style.display = "block";
  
      showFinalResult();
    }
  }
  
  function showFinalResult() {
    const finalResultWrapper = document.querySelector(".final-result-wrapper");
    const correctCountElement = document.querySelector(".correct-count");
    const incorrectCountElement = document.querySelector(".incorrect-count");
    const questionWrapper = document.querySelector(".question-wrapper");
    const resultWrapper = document.querySelector(".result-wrapper");
  
    correctCountElement.textContent = correctAnswers;
    incorrectCountElement.textContent = incorrectAnswers;
  
    questionWrapper.style.display = "none";
    resultWrapper.style.display = "none"; 
    finalResultWrapper.style.display = "block";
  }
  
  showQuestion();
  
  
  

  
  
  
  
  
  