// function on big btn
let bigBtn = document.querySelector(".cont .sph-container .main .back-btn");
let BtnCounter = document.querySelector(".cont .sph-container .main .counter");
let audio = document.querySelector("audio");
let screen = document.querySelector(".cont .sph-container .back-screen .num");
let num = 1;
if (localStorage.getItem("Number")) {
  num = Number(localStorage.getItem("Number")) + 1;
  screen.innerHTML = localStorage.getItem("Number");
}

bigBtn.onmousedown = () => {
  if (num == 1000000000) {
    num = 0;
  }
  screen.innerHTML = num;
  localStorage.setItem("Number", num);
  console.log(num);
  num++;
  audio.play();
  bigBtn.style.width = "125px";
  bigBtn.style.height = "125px";
  BtnCounter.style.width = "100px";
  BtnCounter.style.height = "100px";
};
bigBtn.onmouseup = () => {
  bigBtn.style.width = "135px";
  bigBtn.style.height = "135px";
  BtnCounter.style.width = "110px";
  BtnCounter.style.height = "110px";
};
// click on reset btn
let restBtn = document.querySelector(".main .rest-back-btn .rest-btn");
restBtn.onclick = () => {
  audio.play();
  createPOP();
  let pop = document.querySelector(".pop-up");
  let close = document.querySelector(".pop-up .close");
  let cancelBtn = document.querySelector(".pop-up .box .cancel");
  let yesBtn = document.querySelector(".pop-up .box .yes");
  close.addEventListener("click", () => {
    let pop = document.querySelector(".pop-up");
    pop.remove();
  });
  cancelBtn.addEventListener("click", () => {
    audio.play();
    pop.remove();
  });
  yesBtn.addEventListener("click", () => {
    audio.play();
    localStorage.removeItem("Number");
    num = 1;
    screen.innerHTML = "0";
    pop.remove();
  });
};
function createPOP() {
  let pop = document.createElement("div");
  pop.className = "pop-up";
  let heading = document.createElement("h1");
  heading.appendChild(document.createTextNode("Conunter Will be Reset"));
  let img = document.createElement("img");
  img.className = "close";
  img.src = "image/circle-xmark-solid (1).svg";
  let box = document.createElement("div");
  box.className = "box";
  let prag = document.createElement("p");
  prag.appendChild(
    document.createTextNode("Are You Sure You Want To Reset The Counter?")
  );
  let cancel = document.createElement("button");
  cancel.className = "cancel";
  cancel.classList.add("btn");
  cancel.innerHTML = "Cancel";
  let yes = document.createElement("button");
  yes.className = "yes";
  yes.classList.add("btn");
  yes.innerHTML = "Yes";
  box.appendChild(prag);
  box.appendChild(cancel);
  box.appendChild(yes);
  pop.appendChild(heading);
  pop.appendChild(img);
  pop.appendChild(box);
  document.body.appendChild(pop);
}
