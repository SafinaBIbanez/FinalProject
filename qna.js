//questions and answeers
awesumqna = 
[
    {   question: "Which country emits the most greenhouse gases?",
        options: ["United States", "India", "China", "Russia"],
        answer: "China"
    },
    {   question: "What are the three main goals of GLO-PAL WARMING?",
        options: ["Awareness, Action, Secure", "Reduce Waste, Save Energy, Plant Trees", "Protect Nature, Clean Water, Stop Pollution", "Recycle, Reduce, Reuse"],
        answer: "Awareness, Action, Secure"
    },
    {   question: "Which of these is an effect of climate change?",
        options: ["More trees growing", "Cooler summers", "Loss of glaciers", "Less extreme weather"],
        answer: "Loss of glaciers"
    },
    {   question: "Which human activity causes the MOST carbon emissions?",
        options: ["Burning fossil fuels", "Using solar panels", "Recycling plastic", "Riding a bicycle"],
        answer: "Burning fossil fuels"
    },
    {   question: "Which country is NOT in the top 3 for greenhouse gas emissions?",
        options: ["India", "United States", "Germany", "China"],
        answer: "Germany"
    }
];

//current question and score
questionNOW = 0;
score = 0;

// quesiton loooad
function summoningthyquestion() 
{
    questionElement = document.getElementById("question");
    optionsElement = document.getElementById("options");
    
    questionElement.innerText = awesumqna[questionNOW].question;
    optionsElement.innerHTML = "";
    
    //create buttons for each option
    awesumqna[questionNOW].options.forEach(option => {
        button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => isthisright(option));
        optionsElement.appendChild(button);
    });
}

//check fi the answer correct
function isthisright(PICKWISELY) 
{
    correctAnswer = awesumqna[questionNOW].answer;
    optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    
    if (PICKWISELY === correctAnswer) {
        score++;
        optionsElement.innerHTML = "<p>Correct!</p>";
    } else {
        optionsElement.innerHTML = "<p>Uh Oh, WRONG! The correct answer is " + correctAnswer + "</p>";
    }
    
    // Create NEXT QUESTION button
    nextButton = document.createElement("button");
    nextButton.innerText = "Next Question";
    nextButton.classList.add("option-btn");
    nextButton.addEventListener("click", alrightNEXT);
    optionsElement.appendChild(nextButton);
}

//next guys
function alrightNEXT() {
    questionNOW++;
    if (questionNOW < awesumqna.length) 
    {
        summoningthyquestion();
    } else {
        theRESULT();
    }
}

//how did u do buddy
function theRESULT() 
{
    quizContainer = document.getElementById("mysuperawesomequiz");
    quizContainer.innerHTML = "<h2>Quiz Completed!</h2>" + "<p>Your score: " + score + " / " + awesumqna.length + "</p>";
}

//start quiz when page loads
document.addEventListener("DOMContentLoaded", summoningthyquestion);
