function changeImage() {
  const img = document.getElementById('myImage');
  const originalSrc = 'original_image.jpg'; // 元の画像のパス
  const newSrc = 'new_image.jpg'; // 切り替え後の画像のパス

  // 画像を切り替え後の画像に変更
  img.src = newSrc;

  // 3秒後に元の画像に戻す
  setTimeout(function() {
    img.src = originalSrc;
  }, 3000);
}
