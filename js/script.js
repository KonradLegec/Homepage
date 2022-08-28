let button = document.querySelector(".button");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("body--blue")
    if (button.innerText === "Włącz zielone tło") {
        button.innerText = "Włącz niebieskie tło"
        button.classList.toggle("button--blue")
    } else {
        button.innerText = "Włącz zielone tło"
        button.classList.toggle("button--blue")
    }

});
