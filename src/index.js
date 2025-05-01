function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A huge ego breaks off love’s embrace",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
