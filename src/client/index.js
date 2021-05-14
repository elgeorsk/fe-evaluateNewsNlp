import { checkEnterValue } from './js/checkEnterValue';
import { handleSubmit } from './js/handleSubmit';

import './styles/media.scss';
import './styles/style.scss';

import nlpLogo from './img/nlpLogo.png';

let myLogo = document.getElementById('nlpLogo'); // get logo element from the page
myLogo.src = nlpLogo; // set logo image

console.log(checkEnterValue);
console.log(handleSubmit);

//alert('I EXIST');
//console.log('CHANGE!!');

export {
 checkEnterValue,
 handleSubmit
};
