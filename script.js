
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("aboutModal");
    var btn = document.getElementById("aboutBtn");
    var span = document.getElementsByClassName("close")[0];

    // Open modal when About is clicked
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Close modal when 'X' is clicked
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close modal when clicking outside it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
