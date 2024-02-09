const headLine = document.querySelector(".headline");
const hideSeek = document.querySelector(".akodeli");

headLine.addEventListener("click", () => {
    hideSeek.classList.toggle("isopen");
});
