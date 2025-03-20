document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");

    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            alert("You clicked on an artwork!");
        });
    });
});
