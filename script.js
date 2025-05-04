const form = document.querySelector("form");
const result = document.getElementById("result");
const playAgain = document.getElementById("playAgain")

const correctAnswers = [
  "Hyper Text Markup Language",
  "CSS",
  "Microsoft",
  "Kotlin",
  "JavaScript"
].map(ans => ans.trim().toLowerCase());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let score = 0;

  correctAnswers.forEach((answer, i) => {
    const userAnswer = formData.get(`ques-${i + 1}`).trim().toLowerCase();
    if (userAnswer === answer) {
        score++;
    }
  });

//   if(score===5){
//     result.classList.add(".p")
//   }

  result.style.display = "block";
  result.innerHTML = `
    <h1>Quiz Completed</h1>
    <p >Your Total Score: ${score}/${correctAnswers.length}</p>`;
    playAgain.parentElement.style.display="flex"



});

playAgain.addEventListener("click",(e)=>{
    e.preventDefault()
    form.reset()
    result.style.display="none"
     playAgain.parentElement.style.display="none"
})








// var form = document.querySelector("form");
// var result= document.getElementById("result")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     const formData  = new FormData(form)
//     const ques1 = formData.get("ques-1").trim().toLowerCase()
//     const ques2 = formData.get("ques-2").trim().toLowerCase()
//     const ques3 = formData.get("ques-3").trim().toLowerCase()
//     const ques4 = formData.get("ques-4").trim().toLowerCase()
//     const ques5 = formData.get("ques-5").trim().toLowerCase()
//     console.log(ques1,ques2,ques3,ques4,ques5)

//     const answers1 = "Hyper Text Markup Language".trim().toLowerCase()
//     const answers2 = "CSS".trim().toLowerCase()
//     const answers3 = "Microsoft".trim().toLowerCase()
//     const answers4 = "Kotlin".trim().toLowerCase()
//     const answers5 = "JavaScript".trim().toLowerCase()

//     let mark=0
//     if(ques1===answers1){
//         mark++
        

//     }
//     if(ques2===answers2)
//     {
//         mark++
//     }
//     if(ques3===answers3){
//         mark++
//     }
//     if(ques4===answers4){
//         mark++
//     }
//     if(ques5===answers5){
//         mark++
//     }
//     console.log(mark)
//     result.style.display="block"
//     result.innerHTML=`
//     <h1>Quiz Completed</h1>
//     <p>Your Total Score: ${mark}</p>`

// })