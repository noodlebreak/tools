function generateQR() {
    const data = document.getElementById('data').value;
    const qrCodeContainer = document.getElementById('qrcode');

    // Clear previous QR Code
    qrCodeContainer.innerHTML = '';

    // Check if the data exceeds 2048 bytes
    if (new TextEncoder().encode(data).length > 2048) {
        alert("Data exceeds 2048 bytes limit.");
        return;
    }

    // Generate QR Code
    QRCode.toCanvas(data, { errorCorrectionLevel: 'H' }, function (error, canvas) {
        if (error) {
            console.error(error);
            alert("Failed to generate QR code: " + error.message);
        } else {
            console.log('QR code generated!');
            qrCodeContainer.appendChild(canvas);
        }
    });
}