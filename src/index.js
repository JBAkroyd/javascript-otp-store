console.log("loaded index.js");
window.onload = () => {
    let button = document.getElementById("triggerScreenshot");
    button.addEventListener("click", () => {
        console.log("clicked button");
    });
}
