const navBar = document.querySelector("nav");

// ketika menu di klik akan menambahkan class "active"
document.querySelector("#menu").onclick = (e) => {
  navBar.classList.toggle("active");
  e.preventDefault();
};

// ketika di klik di luar elemen maka akan menghilangkan class "active"
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navBar.contains(e.target)) {
        navBar.classList.remove("active");
    }
});
