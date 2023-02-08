// 1. where to add
const placesList = document.getElementById('places_list');
// 2. what to be added
const li = document.createElement('li')
li.innerText = 'Dinajpur';

// 3.add child
placesList.appendChild(li);

// where to add
const mainContainer = document.getElementById('main_content');
// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1)

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'birayani';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3)
section.appendChild(ul)
mainContainer.appendChild(section)


// set innerHTML directly

const sectionDress = document.createElement('section');
section.innerHTML = `
    <h1>My Dress </h1>
      <ul>
        <li>Pant</li>
        <li>Balt</li>
        <li>Shirt</li>
      </ul>
`
mainContainer.appendChild(sectionDress)