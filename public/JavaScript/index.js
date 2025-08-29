document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".load-page");
    const contentArea = document.getElementById("content-area");
    const hideContent = document.getElementById("hideContent");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = this.getAttribute("href");

            fetch(url)
                .then(res => res.text())
                .then(data => {
                    hideContent.style.display = "none";
contentArea.style.display = "block"
                    contentArea.innerHTML = data;
                })
                .catch(err => {
                    contentArea.innerHTML = "<p class='text-danger'>Error loading page!</p>";
                });
        });
    });
});


