import '../styles/styles.css';
import { isString } from 'lodash';
import MobileMenu from './modules/MobileMenu.js';

let mobileMenu = new MobileMenu();


if(module.hot){
    module.hot.accept();
}

