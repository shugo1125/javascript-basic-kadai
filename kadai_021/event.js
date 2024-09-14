const Btn = document.getElementById('btn');
const text = document.getElementById('text');


Btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンがクリックされました'; ï
  }, 2000);
});