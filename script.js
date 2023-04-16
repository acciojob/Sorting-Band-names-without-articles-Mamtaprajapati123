// Array of band names
const bands = ['The Beatles', 'Radiohead', 'Led Zeppelin', 'Aerosmith', 'The Who', 'Pink Floyd'];

// Function to strip articles from band names
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Select the ul element
const ul = document.querySelector('#bands');

// Create and add li elements for each band name
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
