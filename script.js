const excludedWords = ["a", "an", "the"];

// Function to remove excluded words from band names
function removeExcludedWords(bandName) {
  return bandName.split(" ").filter((word) => !excludedWords.includes(word.toLowerCase())).join(" ");
}

// Sort band names in lexicographic order (excluding excluded words)
const sortedBandNames = bandNames.map((name) => removeExcludedWords(name)).sort();

// Add sorted band names to list
const bandList = document.getElementById("band");
sortedBandNames.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  bandList.appendChild(li);
});

