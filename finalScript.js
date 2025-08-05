import { texts } from "./data.js";
let res = 0;
let i = 0;
let data = texts[i];
const text = document.getElementById("content");

function renderCard() {
  const data = texts[i];
  if (!data) return;

  text.innerHTML = `
    <figure>
      <video autoplay loop muted playsinline class="w-full rounded-t-lg">
        <source src="${data.gifs}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </figure>
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p class="dark:text-white text-md font-medium">${data.texts}</p>
      <div class="card-actions justify-end">
       <button  class="btn sle text-white font-medium hover:bg-indigo-800 px-2 btn-primary">${data.response2}</button>
          <button " class="btn sle text-white font-medium hover:bg-indigo-800 px-2 btn-primary">${data.response1}</button>
        </div>
    </div>
  `;

  document.querySelectorAll(".sle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if(e.target.innerText == texts[texts.length-1].response1){
        res++;
      }
      if (i < texts.length - 1) {
        i++;
        renderCard();
      } else {
       document.querySelector("#next").classList.remove("hidden");

        if (res === 1) {
          text.innerHTML = `
            <figure>
              <video autoplay loop muted playsinline class="w-full rounded-t-lg">
                <source src="./imgs/ooho.mp4" type="video/mp4">
              </video>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Card Title</h2>
              <p class="dark:text-white text-md font-medium">Hehe, I knew this would work</p>
            </div>
          `;
        } else {
          text.innerHTML = `
            <figure>
              <video autoplay loop muted playsinline class="w-full rounded-t-lg">
                <source src="./imgs/ret.mp4" type="video/mp4">
              </video>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Card Title</h2>
              <p class="dark:text-white text-md font-medium">TT, mai cry krne ja rhi hu</p>
            </div>
          `;
        }
      }
    });
  });
}
document.getElementById("next").addEventListener("click"  , ()=>{
       document.querySelector("#pop").classList.remove("hidden");
    if(res==1){
      document.getElementById("pip").innerText = "hehe niklo ho gya khekhe!!"
    }else{
      document.getElementById("pip").innerText = "TT abhi tak maaf nhi kiya to idk🥲🥲🥲 "

    }
})
renderCard(); // Start rendering the first question
document.getElementById("btn").addEventListener("click"  , ()=>{
     res==0?   window.location.href = "https://open.spotify.com/track/5ceKyCGIpjceDJhOT9pE7r?si=3LSVM7sBS9GqrVO3p9BTsg%0A": window.location.href = "https://open.spotify.com/track/5fr7VBuNTiXAq4rH1e3v3q?si=j1sw6za4TiWhd0y9iWXTbg";
})