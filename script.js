//https://www.nayuki.io/page/qr-code-generator-library
document.addEventListener("DOMContentLoaded", function () {
    // Example text for the QR code
    const textForQRCode = "https://www.frontendmentor.io?ref=challenge";
  
    // Generate the QR code
    const qrCode = new QRCode(-1, QRCode.QRErrorCorrectLevel.H);
    qrCode.addData(textForQRCode);
    qrCode.make();
  
    // Add the QR code image to the container
    const qrCodeImage = qrCode.createImgTag(5); // 5 is the pixel size per module
    qrCodeImage.className = "qr-code";
    document.querySelector(".container").appendChild(qrCodeImage);
  });
              