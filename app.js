const form = document.getElementById('form');
const input = document.getElementById('newItem');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addItem(text);
  input.value = '';
});

function addItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => toggleDone(li));
  list.appendChild(li);
}

// Função alvo de CONFLITO na Aula 2:
function toggleDone(li) {
  li.classList.toggle('done');
  if (li.classList.contains('done')) {
    li.dataset.originalText = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
    li.textContent = `✅ ${li.dataset.originalText}`;
  } else {
    li.textContent = li.dataset.originalText || li.textContent.replace(/^✅\s*/, '');
  }
  doneCount += li.classList.contains('done') ? 1 : -1;
  updateTitle();
}
