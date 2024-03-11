const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [/* Your fruit array */];

function search(str) {
  return fruit.filter(fruitName => 
    fruitName.toLowerCase().includes(str.toLowerCase())
  );
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clear previous suggestions

  if (!inputVal) return; // Exit if input is empty

  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    suggestions.appendChild(li);
  });
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent; // Populate the search bar
    suggestions.innerHTML = ''; // Clear suggestions
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
