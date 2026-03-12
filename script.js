const quizData = [
    {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyper Tool Machine Language",
    d: "None",
    correct: "a"
    },
    
    {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
    },
    
    {
    question: "Which language is used for web apps?",
    a: "JavaScript",
    b: "Python",
    c: "Java",
    d: "All",
    correct: "d"
    },
    
    {
    question: "Which company developed JavaScript?",
    a: "Microsoft",
    b: "Netscape",
    c: "Google",
    d: "IBM",
    correct: "b"
    }
    ];
    
    const question = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    
    const submit = document.getElementById("submit");
    
    let currentQuiz = 0;
    let score = 0;
    
    loadQuiz();
    
    function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    }
    
    submit.addEventListener("click", () => {
    
    const answer = document.querySelector('input[name="answer"]:checked');
    
    if(answer){
    if(answer.value === quizData[currentQuiz].correct){
    score++;
    }
    
    currentQuiz++;
    
    if(currentQuiz < quizData.length){
    loadQuiz();
    document.querySelectorAll('input[name="answer"]').forEach(el => el.checked=false);
    }else{
    document.querySelector(".quiz-container").innerHTML =
    `<h2>Your Score: ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Restart Quiz</button>`;
    }
    }
    
    });