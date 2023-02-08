/* console.log('hello dom');
console.log(document.body); */
// option-1 getElementsByTagName  
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for ( const li of liCollection){
    // console.log(li.innerText);
}


const allHeading = document.getElementsByTagName('h1');
for (const h1 of allHeading){
    // console.log(h1.innerText);
};
// option-2 getElementsByClassName  
const places = document.getElementsByClassName('important')

for (const place of places){
    // console.log(place.innerText);
}
// option-3 getElementById
const placeTitle = document.getElementById('places_title')
 placeTitle.innerText = 'Fakrul Hossain';

//option-4 querySelectorALL
//option-5 querySelector

const sections = document.querySelectorAll('section');
    // console.log(sections);
    for (const section of sections){
        // console.log(section);
        section.style.border = '3px solid red'
        section.style.borderRadius = '15px'
        section.style.marginBottom = '10px'
        section.style.padding = '20px'
        section.style.backgroundColor = 'lightBlue'
        section.style.width = '400px'
    }

/*     const tourPlace = document.getElementById('.places_section')
    for (const tour of tourPlace){
        tour.style.backgroundColor = 'red';
    } */