document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = String(new Date().getFullYear());
});
document.getElementById('print-prompts')?.addEventListener('click', () => window.print());
document.querySelectorAll('[data-language-switch]').forEach(select => {
  select.addEventListener('change', () => {
    const target = select.selectedOptions[0]?.value;
    if (target?.startsWith('/') && !target.startsWith('//')) window.location.assign(target);
  });
});
