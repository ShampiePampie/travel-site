import '../styles/styles.css';
import { isString } from 'lodash';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';

let revealOnScroll = new RevealOnScroll();

let mobileMenu = new MobileMenu();


if(module.hot){
    module.hot.accept();
}

