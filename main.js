
//Here grab the values summited from the URL.
const words = new URLSearchParams(window.location.search);


//Trim value (remove spaces) and Capitalize firs character.
function cleanAndCap(str){
    if(!str) return null
    let temp = str.trim();
    return temp[0].toUpperCase() + temp.substring(1);
}

//get info from forms and assign it to variables.
const firstAnimal = cleanAndCap(words.get('animal-1'));
const secondAnimal = cleanAndCap(words.get('animal-2'));
const thirdAnimal = cleanAndCap(words.get('animal-3'));

const adj1 = words.get('adj-1');
const verb1 = words.get('verb-1');
const num1 = words.get('num-1');

const speed = words.get('speed');
const quote = words.get('quote');
const message = words.get('message');

