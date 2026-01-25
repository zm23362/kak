function changeImage() {const img = document.getElementById('myImage');
img.src = 'boo.jpg'; // 切り替え後の画像パスに変更
setTimeout(function() {img.src = 'boff.jpg'; // 3秒後に元の画像パスに戻す 
                      }, 3000);}
