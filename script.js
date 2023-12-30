
const A=['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const fruit = document.querySelector('#fruit')
const suggestions = document.querySelector('.suggestions')

fruit.addEventListener('keyup',search)//in fruit, call search() at every key stroke 
suggestions.addEventListener('mouseup',useSuggestion)//in suggestions, calls useSuggestion() when user clicks mouse
  
function search(event){//if fruit.value appears in any A[i],add that A[i] to results[],then call showSuggestions()
	let results=A.filter(fr=>fr.toLowerCase().includes(fruit.value.toLowerCase()))
	showSuggestions(results)
}
function showSuggestions(results){//handle which suggestions will display
	const listed=results.map(res=>`<li>${res}</li>`)//generate list items ['<li>Grape</li>','<li>Grapefruit</li>',...]
  suggestions.innerHTML=`<ul>${listed.join('')}</ul>`//construct HTML list <ul><li>Grape</li><li>Grapefruit</li>...</ul>
}
function useSuggestion(event) {
	fruit.value = event.target.innerText//user input is replaced with the element that user clicks
	suggestions.innerHTML = ''//then clear <div> suggestions
}