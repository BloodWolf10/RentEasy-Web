function downloadAPK() {
    const apkURL = "https://drive.google.com/uc?export=download&id=1kuoJCaNVunC90itVqoAFXF0WmaS71Y0e"; // Replace with your APK file URL
    const link = document.createElement('a');
    link.href = apkURL;
    link.download = 'RentEasy.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  