const ball = document.querySelector(".ball");

// ball.addEventListener("click", () => {
//     ball.classList.toggle("ball-move")

//     document.body.classList.toggle("darkmode")
// });
ball.addEventListener("click", () => {
    if(localStorage.getItem("DARKMODE")) {
        ball.classList.remove("ball-move");
        document.body.classList.remove("darkmode");
        localStorage.removeItem("DARKMODE");
    } else {
        ball.classList.add("ball-move");
        document.body.classList.add("darkmode");
        localStorage.setItem("DARKMODE", true);
    }
})


