import '../styles/styles.css';
import 'lazysizes';
import { isString } from 'lodash';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';



new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();
let modal;


document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener("click", event => {
        event.preventDefault();
        if(typeof modal == "undefined"){
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(file => {
                modal = new file.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."));
        } else{
            modal.openTheModal();
        }
    })
})

if(module.hot){
    module.hot.accept();
}

