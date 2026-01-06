function changeImage() { var image = document.getElementById('myImage');
image.src = 'boo.jpg'; //新しい画像に変更//3秒後に元の画像に戻す \mathbf{setTimeout(function(){
image.src = 'boff.jpg'; //元の画像に変更}, 3000);} //3000ミリ秒＝3秒
