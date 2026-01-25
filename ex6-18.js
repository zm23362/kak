 function changeImage() {
    const imgElement = document.getElementById('logo');
    const originalSrc = './image/boff.jpg';
    const newSrc = './image/boo.jpg'; // 切り替え後の画像パス

    // 画像を切り替える
    imgElement.src = newSrc;

    // 3秒後に元の画像に戻す
    setTimeout(() => {
      imgElement.src = originalSrc;
    }, 3000); // 3000ミリ秒 = 3秒
  }
