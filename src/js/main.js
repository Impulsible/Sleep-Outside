import { loadHeaderFooter } from './utils.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');

  // Only load header/footer if placeholders exist
  if (header && footer) {
    loadHeaderFooter();
  }
});
