function downloadAPK() {
    const apkURL = "https://yourdomain.com/app/rental-app.apk"; // Replace with your APK file URL
    const link = document.createElement('a');
    link.href = apkURL;
    link.download = 'RentEasy.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  