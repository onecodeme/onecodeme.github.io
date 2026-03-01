const toggleBtn = document.querySelector(".toggle-theme");

if (localStorage.getItem("theme") === "fixed") {
    document.documentElement.setAttribute("theme", "fixed");
}

toggleBtn.addEventListener("click", function() {
    if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem("theme"); // удаляем сохранение
    } else {
        document.documentElement.setAttribute("theme", "fixed");
        localStorage.setItem("theme", "fixed"); // сохраняем выбор
    }
});