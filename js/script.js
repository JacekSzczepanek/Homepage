{
    let button = document.querySelector(".buttom");
    let body = document.querySelector(".body");
    let thname = document.querySelector(".thname");

    button.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            thname.innerText = "Jasny";
        } else {
            thname.innerText = "Ciemny";
        }
    });
}
