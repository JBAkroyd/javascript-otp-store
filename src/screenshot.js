import html2canvas from "html2canvas";

export function TakeScreenshot(){
    let screenshotTarget = document.body;
    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        window.location.href = base64image;
        return canvas;
    });
    return null;
}
