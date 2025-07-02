
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function toggleForm() {
  const form = document.getElementById('formPedido');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
