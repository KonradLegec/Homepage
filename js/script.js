{
  const welcome = () => {
    console.log("Witam wszystkich którzy zechcieli tutaj zajrzec");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("body--blue");
  };

  const toggleButton = () => {
    const button = document.querySelector(".button");
    if (button.innerText === "Włącz zielone tło") {
      button.innerText = "Włącz niebieskie tło";
      button.classList.toggle("button--blue");
    } else {
      button.innerText = "Włącz zielone tło";
      button.classList.toggle("button--blue");
    }
  };

  const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", toggleBackground);
    button.addEventListener("click", toggleButton);

    welcome();
  };

  init();
}
