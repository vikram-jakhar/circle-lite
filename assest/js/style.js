let mycircle = document.querySelector(".circle");
let myBtn = document.querySelector("button");
let state = 1;
myBtn.addEventListener("click", function () {
    if (state === 1) {
        mycircle.classList.add("on");
        myBtn.innerHTML = "off";
        state = 0;
    } else {
        mycircle.classList.remove("on");
        myBtn.innerHTML = "on";
        state = 1;
    }
})