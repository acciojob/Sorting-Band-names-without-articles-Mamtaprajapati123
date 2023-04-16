function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const ul = document.querySelector('#bands');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});