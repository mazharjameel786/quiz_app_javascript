const question=[{
    'que':'which one of the following is a markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'correct' : 'a',

},
{
'que':'How many bits in IPv6 address?',
'a' : '32',
'b' : '56',
'c' : '128',
'd' : '16',
'correct' : 'c',

},
{
    'que':'MAC is a ________ layer protocol?',
    'a' : '3',
    'b' : '7',
    'c' : '4',
    'd' : '2',
    'correct' : 'd',
    
    },
    {
        'que':'which protocol is used for Email sending?',
        'a' : 'SNMP',
        'b' : 'SMTP',
        'c' : 'TCP',
        'd' : 'FTP',
        'correct' : 'b',
        
        }
]

let index=0;
let total=question.length;
let right=0;
let  wrong=0;
let queBox=document.getElementById("queBox");

const optionInput=document.querySelectorAll(".option");
//const optionInput=document.getElementsByClassName("xyz");

const loadQuestions= ()=>{
    if(index==total){
        return quizEnd();
    }else{
    reset();
   const data=question[index];
   queBox.innerText= index+1 + ") " +data.que;
//    optionInput[0].innerText=data.a;
//    optionInput[1].innerText=data.b;
//    optionInput[2].innerText=data.c;
//    optionInput[3].innerText=data.d;
   optionInput[0].nextElementSibling.innerText=data.a;
   optionInput[1].nextElementSibling.innerText=data.b;
   optionInput[2].nextElementSibling.innerText=data.c;
   optionInput[3].nextElementSibling.innerText=data.d;
    }
}
let quizEnd=()=>{
    document.getElementById("box").innerHTML=
    `<h3 style="text-align:center">Thanks for Attempt this Quiz</h3>
    <h2 style="text-align:center" >${right}/${total}</h2>`
    ;
}
const reset=()=>{
    optionInput.forEach(input => {
        input.checked=false;
    });

}
const submitQuiz=()=>{
    const data=question[index];
    const ans=getAnswer();
    console.log(optionInput.value);
    if (ans== data.correct) {
        right++;
    }else{
        wrong++;
    }
    console.log(right);
    index++;
   
    loadQuestions();
}
const getAnswer=()=>{
    let answer;
    optionInput.forEach(input => {
        if (input.checked) {
            answer= input.value;
            console.log(answer);

        }
    });
    return answer;
}

loadQuestions();
