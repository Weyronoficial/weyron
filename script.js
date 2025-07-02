
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('section-title').innerText = 
    id.charAt(0).toUpperCase() + id.slice(1);
}

function toggleForm() {
  const form = document.getElementById('pedidoForm');
  form.classList.toggle('hidden');
}
