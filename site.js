document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});
document.getElementById('print-prompts')?.addEventListener('click', () => window.print());
