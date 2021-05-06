import { checkForName } from './js/getNlpData';
import { handleSubmit } from './js/app';

import './styles/media.scss';
import './styles/style.scss';

import nlpLogo from './img/nlpLogo.png';

let myLogo = document.getElementById('nlpLogo'); // get logo element from the page
myLogo.src = nlpLogo; // set logo image

console.log(checkForName);

alert('I EXIST');
console.log('CHANGE!!');

export {
 checkForName,
 handleSubmit
};
