// js/utils.mjs
export function loadHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header) header.innerHTML = `<p>Header will be dynamically replaced</p>`;
  if (footer) footer.innerHTML = `<p>Footer will be dynamically replaced</p>`;
}

export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
