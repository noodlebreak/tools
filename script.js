function generateQR() {
    const data = document.getElementById('data').value;
    const qrCodeContainer = document.getElementById('qrcode');

    // Clear previous QR Code
    qrCodeContainer.innerHTML = '';

    if (new TextEncoder().encode(data).length > 2048) {
        alert("Data exceeds 2048 bytes limit.");
        return;
    }

    QRCode.toCanvas(document.getElementById('qrcode'), data, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
}
