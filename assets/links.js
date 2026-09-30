// Only these external destinations open in a new tab; internal navigation stays put.
const newTabHosts = new Set([
  'github.com',
  'gradschool.duke.edu',
  'nlplab.cs.duke.edu',
]);

document.querySelectorAll('a[href]:not([data-same-tab])').forEach((link) => {
  const href = link.getAttribute('href').trim();
  if (!href || href.startsWith('#')) return;

  const destination = new URL(href, document.baseURI);
  if (destination.protocol !== 'http:' && destination.protocol !== 'https:') return;
  if (destination.origin === window.location.origin || !newTabHosts.has(destination.hostname)) return;

  link.target = '_blank';
  link.relList.add('noopener', 'noreferrer');
});
