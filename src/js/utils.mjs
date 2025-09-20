// js/utils.mjs
export function loadHeaderFooter() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header) header.innerHTML = `<p>Header will be dynamically replaced</p>`;
  if (footer) footer.innerHTML = `<p>Footer will be dynamically replaced</p>`;
}
ho--individual2
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
=======

export function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
 main
  return urlParams.get(param);
}
