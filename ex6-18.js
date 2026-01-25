function changeImageAndRevert() {// 画像を新しいソースに切り替える
 document.getElementById('logon').src = './image/boo.jpg'; // 3000ミリ秒（3秒）後に元の画像に戻す処理をスケジュール
 setTimeout(function() {document.getElementById('logon').src = './image/boff.jpg';}, 3000);}
