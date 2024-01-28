const hamburgerMenu = document.querySelector(".hamburgermenu");
const desktopMenu = document.querySelector(".desktopmenu");
const slide = document.querySelector(".slide");

// ウィンドウサイズが変更されたときに実行される関数
function toggleMenu() {
    // ウィンドウの幅が768px以下かどうかで切り替え
    if (window.innerWidth <= 768) {
        hamburgerMenu.style.display = "block";
        desktopMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "none";
        desktopMenu.style.display = "block";
    }
}

// ウィンドウサイズが変更されたときにtoggleMenu関数を実行
window.addEventListener("resize", toggleMenu);

// ページ読み込み時にも一度実行
window.addEventListener("load", toggleMenu);

// ハンバーガーメニュー
const hambact = hamburgerMenu.classList;
const slideact = slide.classList;

hamburgerMenu.addEventListener("click", () => {
    hambact.toggle("active");
    slideact.toggle("active");
});
