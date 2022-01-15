import qrscanner from 'qr-scanner';
import { TakeScreenshot} from "./screenshot";

console.log("loaded background.js");
let button = document.getElementById("triggerScreenshot");
button.addEventListener("click", () => {
    let image = TakeScreenshot();
    qrscanner.scanImage(image)
        .then(result => console.log(result))
        .catch(error => console.log(error || 'No QR code found'));
});
