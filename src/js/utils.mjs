export async function loadHeaderFooter() {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');

  if (header) {
    const headerHTML = await fetch('/partials/header.html').then(res => res.text());
    header.innerHTML = headerHTML;
  }

  if (footer) {
    const footerHTML = await fetch('/partials/footer.html').then(res => res.text());
    footer.innerHTML = footerHTML;
  }
}

// Utility to get URL parameters
export function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
