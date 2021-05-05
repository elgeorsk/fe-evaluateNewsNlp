import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

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
