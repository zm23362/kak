const originalImageSrc = "boff.jpg";
const newImageSrc ="boo.jpg";
function chageImageAndRevert() {
const imageElement = document.getElementById("myImage");
imageElement.src = newImageSrc;
setTimeout(function() {imageElement.src = originalImageSrc;},3000);}
