// Alterna entre seções do menu
function showSection(id) {
  // Esconde todas
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });

  // Mostra a selecionada
  const active = document.getElementById(id);
  if (active) active.classList.remove('hidden');

  // Atualiza título no header
  const title = id.charAt(0).toUpperCase() + id.slice(1);
  document.getElementById('section-title').innerText = title;
}

// Alterna formulário de novo pedido
function toggleForm() {
  const form = document.getElementById('pedidoForm');
  if (form) form.classList.toggle('hidden');
}

// (Opcional) Você pode expandir com salvar dados localStorage, alertas, etc.
