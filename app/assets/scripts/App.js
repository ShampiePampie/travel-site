import '../styles/styles.css';
import { isString } from 'lodash';
/*import MobileMenu from './modules/MobileMenu.js';

let mobileMenu = new MobileMenu();*/

console.log("eventdate: " + document.querySelectorAll('.EventTile')[0].dataset.eventdate);

var now = new Date();
var dayNow = now.getDate();
var monthNow = now.getMonth(); /* Januar = 0 */
var yearNow = now.getFullYear();

console.log(now);
console.log(dayNow);
console.log(monthNow);
console.log(yearNow);

/*new Date("{{dayFrom}} {{monthFromENLangString}} {{yearFrom}} {{timeFrom}}");*/

if(module.hot){
    module.hot.accept();
}

