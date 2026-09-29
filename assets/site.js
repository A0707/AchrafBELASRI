// Disclosures and page content also work when JavaScript is unavailable.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const disclosures = [...document.querySelectorAll('.mobile-menu, .language-picker')];
for (const disclosure of disclosures) {
  disclosure.addEventListener('toggle', () => {
    if (disclosure.open) {
      for (const other of disclosures) if (other !== disclosure) other.open = false;
    }
  });
  disclosure.addEventListener('click', event => {
    if (event.target.closest('a')) disclosure.open = false;
  });
}
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  for (const disclosure of disclosures) {
    if (disclosure.open) {
      disclosure.open = false;
      disclosure.querySelector('summary').focus();
    }
  }
});
document.addEventListener('click', event => {
  for (const disclosure of disclosures) {
    if (!disclosure.contains(event.target)) disclosure.open = false;
  }
});
matchMedia('(max-width: 800px)').addEventListener('change', () => {
  for (const disclosure of disclosures) disclosure.open = false;
});
