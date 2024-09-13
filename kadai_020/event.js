const Btn = document.getElementById('btn');

 Btn.addEventListener('click', () => {

 const text= document.getElementById('text');
 text.style.display='none'; 

   const text2 = document.createElement('h2');
   text2.textContent = 'ボタンがクリックされました';ï
   .appendChild(text2);Ï
 });