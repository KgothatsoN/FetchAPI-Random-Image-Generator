const randomButton = document.getElementById("randomButton")
const clearButton = document.getElementById("clearButton")

randomButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://picsum.photos/200/300")
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(blob);
        document.querySelector(".image").appendChild(img);
    });
})

greyButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://picsum.photos/200/300?grayscale")
    .then(res => res.blob())
    .then(blob => {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(blob);
        document.querySelector(".image").appendChild(img);
    });
})

clearButton.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.reload();
})