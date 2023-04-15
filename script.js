const bands = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'The Doors', 'The Rolling Stones', 'Aerosmith', 'The Eagles', 'Anthrax', 'Soundgarden', 'Nirvana', 'Alice in Chains', 'The Black Keys', 'The Strokes', 'The White Stripes', 'Red Hot Chili Peppers', 'Green Day', 'Foo Fighters', 'The Killers', 'Arctic Monkeys'];

function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const ul = document.getElementById('bands');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
