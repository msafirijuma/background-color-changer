const btnChange = document.querySelector("#btnChange");

btnChange.addEventListener("click", () => {
    let characters = "0123456789abcdef".split("");
    let hash = "#";

    for (let i = 0; i < 6;  i++) {
        hash += characters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = hash;
})

/*

btnChange.addEventListener("click", () => {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "#456efe";
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

*/