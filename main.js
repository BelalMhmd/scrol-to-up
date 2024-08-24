function modes() {
    let content = document.getElementById("modes");
    let nav = document.getElementById("navbar");
    let cards = document.querySelectorAll(".card");

    if (content.innerHTML === "light mode") {
        content.innerHTML = "dark mode";
        nav.setAttribute("data-bs-theme", "dark");
        content.classList.replace("btn-secondary", "btn-light")
        document.body.style.backgroundColor = "#222222";
        cards.forEach(function (card) {
            card.setAttribute("data-bs-theme", "dark");
            card.style.boxShadow = "10px 10px 20px rgba(255, 255, 255, 0.1)";
            });

    } else if (content.innerHTML === "dark mode") {
        content.innerHTML = "light mode";
        nav.removeAttribute("data-bs-theme");
        content.classList.replace("btn-light", "btn-secondary");
        document.body.style.backgroundColor = "white";
        cards.forEach(function (card) {
            card.removeAttribute("data-bs-theme");
            card.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.1)";
        });
    }
}


function content(){
    let products = document.getElementById("products");
    let main = document.getElementById("main-section")

    if(products.innerHTML === "hide content"){
        products.innerHTML = "show content";
        products.classList.replace("btn-success","btn-danger")
        main.style.display = "none";
    }
    else if(products.innerHTML === "show content"){
        products.innerHTML = "hide content";
        products.classList.replace("btn-danger","btn-success");
        main.style.display = "block";

    }
}
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
