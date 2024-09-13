const Btn = document.getElementById('btn');
const text2=document.getElementById('text2');
text2.style.display = 'none';
 // HTML要素がクリックされたときにイベント処理を実行する
 Btn.addEventListener('click', () => {
 
   // 取得した文字列の文字数を出力する
   const text=document.getElementById('text');
   text.style.display = 'none';

text2.style.display = 'block';

 });
