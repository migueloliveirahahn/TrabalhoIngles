const quiz=[

{
question:"1. She ____ to school every day.",
answers:["go","goes","going","gone"],
correct:1
},

{
question:"2. They ____ football on Sundays.",
answers:["plays","play","playing","played"],
correct:1
},

{
question:"3. My father ____ coffee every morning.",
answers:["drink","drinks","drinking","drank"],
correct:1
},

{
question:"4. We ____ TV after dinner.",
answers:["watch","watches","watching","watched"],
correct:0
},

{
question:"5. He ____ his homework every night.",
answers:["do","does","doing","did"],
correct:1
},

{
question:"6. I ____ English at school.",
answers:["study","studies","studying","studied"],
correct:0
},

{
question:"7. The cat ____ on the sofa.",
answers:["sleep","sleeps","sleeping","slept"],
correct:1
},

{
question:"8. Anna and Kate ____ in London.",
answers:["live","lives","living","lived"],
correct:0
},

{
question:"9. Tom ____ breakfast at 7 a.m.",
answers:["have","has","having","had"],
correct:1
},

{
question:"10. We ____ our grandparents every weekend.",
answers:["visit","visits","visiting","visited"],
correct:0
}

];

let current=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const feedback=document.getElementById("feedback");
const next=document.getElementById("next");
const result=document.getElementById("result");
const progress=document.getElementById("progressBar");

function loadQuestion(){

feedback.textContent="";
next.style.display="none";

progress.style.width=((current)/quiz.length*100)+"%";

question.textContent=quiz[current].question;

answers.innerHTML="";

quiz[current].answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.textContent=answer;

btn.className="answer";

btn.onclick=()=>check(index,btn);

answers.appendChild(btn);

});

}

function check(index,button){

const buttons=document.querySelectorAll(".answer");

buttons.forEach(b=>b.disabled=true);

if(index===quiz[current].correct){

button.classList.add("correct");

feedback.textContent="✅ Correct!";

score++;

}else{

button.classList.add("wrong");

buttons[quiz[current].correct].classList.add("correct");

feedback.textContent="❌ Wrong!";
}

next.style.display="block";
}

next.onclick=()=>{

current++;

if(current<quiz.length){

loadQuestion();

}else{

finishQuiz();

}

}

function finishQuiz(){

progress.style.width="100%";

question.style.display="none";
answers.style.display="none";
feedback.style.display="none";
next.style.display="none";

result.classList.remove("hidden");

let message="";

if(score==10){

message="🏆 PERFECT!!";

}else if(score>=8){

message="🌟 Excellent!";

}else if(score>=6){

message="👍 Good Job!";

}else{

message="📚 Keep Practicing!";
}

result.innerHTML=`
<h2>${message}</h2>

<p>You scored</p>

<h1>${score} / 10</h1>

<button onclick="location.reload()" style="
padding:15px;
margin-top:20px;
font-size:18px;
border:none;
background:#2575fc;
color:white;
border-radius:12px;
cursor:pointer;">
Play Again
</button>
`;

}

loadQuestion();