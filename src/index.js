import html2canvas from "html2canvas";
console.log("loaded index.js");
window.onload = () => {
    let button = document.getElementById("triggerScreenshot");
    button.addEventListener("click", () => {
        console.log("clicked button");
        html2canvas(document.body).then(function(canvas) {
            document.body.appendChild(canvas);
        });
    });
}
