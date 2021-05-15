import { checkEnterValue } from './js/checkEnterValue';
import { handleSubmit } from './js/handleSubmit';
import './js/app';

import './styles/media.scss';
import './styles/style.scss';

import nlpLogo from './img/nlpLogo.png';

let myLogo = document.getElementById('nlpLogo'); // get logo element from the page
myLogo.src = nlpLogo; // set logo image

export {
 checkEnterValue,
 handleSubmit
};
