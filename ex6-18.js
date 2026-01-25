function changeImage() {var image = document.getElementById('myImage');
image.src = 'boo.jpg'; setTimeout(function() { image.src = 'boff.jpg'; }, 3000); // 3000ミリ秒 = 3秒}
