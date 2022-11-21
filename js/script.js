{
    let button = document.querySelector(".buttom");

    const onButtonClick = () => {
        let body = document.querySelector(".body");
        let thname = document.querySelector(".thname");

        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            thname.innerText = "Jasny";
        } else {
            thname.innerText = "Ciemny";
        }
    };

    button.addEventListener("click", onButtonClick);
}
