import data from "./data.js"; // Ensure the path and extension are correct
let vis = parseInt(localStorage.getItem("visits"));
localStorage.setItem("visits", vis ? vis++ : 1);
let cor = parseInt(localStorage.getItem("correct"));
let ans = parseInt(localStorage.getItem("ans"));
const totalquests = data.length;
let totalans = 0;
let result = 0;

 
const outputDiv = document.getElementById("ques");

outputDiv.innerHTML = data
  .map(
    (d, index) =>
      `
  <div class="card dark:text-white dark:bg-slate-900 h-fit w-[350px] bg-base-100 shadow-xl p-4 m-4">
    <h2 class="card-title font-bold text-[20px] text-indigo-600+ ">${
      d.quest
    }</h2>
    <div>
     ${Object.keys(d.answer)
       .map(
         (key) => `
      <div class="mt-6">
      <button   
      class="btn hover:bg-blue-950 hover:text-white btn-primary btn-block" 
      data-question-index="${index}" 
          data-answer-key="${key}">
          ${d.answer[key]}
          </button>
    </div>
     
    `
       )
       .join("")}
       </div>
    </div>
`
  )
  .join("");

if (ans - cor >= 3) {
  document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
}
// Attach event listeners to buttons
document.querySelectorAll("button[data-question-index]").forEach((button) => {
  button.addEventListener("click", (e) => {
    const questionIndex = e.target.getAttribute("data-question-index");
    const answerKey = e.target.getAttribute("data-answer-key");
    const selectedQuestion = data[questionIndex];

    if (selectedQuestion.correct == answerKey) {
      result++;
    }
    totalans++;
    if (totalans == totalquests) {
      ans++;
      localStorage.setItem("ans", ans ? ans++ : 1);
      console.log(result)
      if (result >=4) {
        localStorage.setItem("correct", cor ? cor++ : 1);
        console.log(localStorage.getItem("correct"))
       
      } 
       document.querySelector("#alert-res").classList.remove("hidden");
        if(result>=4){
            document.querySelector("#pop-p").innerText= "Wow!! bruhh , Good to know you won ! press okie!! to procced"
            document.querySelector("#pop-btn").innerText= "okie!!"
        }else{
           document.querySelector("#pop-p").innerText= "Who tf are you , you are not supposed to be here..."
            document.querySelector("#pop-btn").innerText= "okay"
        } 
    }

    // Optional: disable all buttons for this question after one click
    e.target
      .closest(".card")
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = true));
  });
});

document.getElementById("pop-btn").addEventListener('click' , ()=>{
  if(result>=4){
    setTimeout(() => {
  window.location.href = "final.html";
}, 1000);
  }else{
    setTimeout(() => {
  window.location.href = "index.html";
}, 2000);
  }
})
