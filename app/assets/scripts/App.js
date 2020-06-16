import '../styles/styles.css';
import { isString } from 'lodash';
import { polyfill } from 'es6-promise'; polyfill();
/*import MobileMenu from './modules/MobileMenu.js';

let mobileMenu = new MobileMenu();*/


/* Datum der ersten Kachel */
console.log("eventdate: " + $('.EventTile')[0].dataset.eventdate);

    var now = new Date();
    var dayNow = now.getDate();
    var monthNow = now.getMonth()+1; /* +1, weil Januar = 0 */
    var yearNow = now.getFullYear();
    
    var dayNowString = ('0' + dayNow).slice(-2);
    var monthNowString = ('0' + monthNow).slice(-2);

    var later = new Date(now.getTime() + 15552000000); /* 6 Monate */
    var dayLater = later.getDate();
    var monthLater = later.getMonth()+1;
    var yearLater = later.getFullYear();

    var dayLaterString = ('0' + dayLater).slice(-2);
    var monthLaterString = ('0' + monthLater).slice(-2);

    console.log("setNow: " + now);
    console.log("setLater: " + later);

/*--------------------------------------*/
if(typeof document.getElementsByTagName('html')[0] == 'undefined'){
    /*window.setTimeout(function(){setNow();}, 100);*/
    window.setTimeout(function(){defaultDate();}, 100);
}else{
    /*setNow();*/
    defaultDate();
};
/*--------------------------------------*/


function defaultDate(){
    /*No IE*/
    if (!window.document.documentMode) {
        $('#eventDateFrom')[0].value = yearNow +'-'+ monthNowString +'-'+ dayNowString;
        $('#eventDateTo')[0].value = yearLater +'-'+ monthLaterString +'-'+ dayLaterString;
    /* IE */
    } else{
        $('#eventDateFrom')[0].placeholder = dayNowString +'.'+ monthNowString +'.'+ yearNow;
        $('#eventDateTo')[0].placeholder = dayLaterString +'.'+ monthLaterString +'.'+ yearLater;
        /*$('#eventDateFrom')[0].value = yearNow +'-'+ monthNowString +'-'+ dayNowString;*/
    }
    
    
    console.log("===================");
    var fromDate = $('#eventDateFrom')[0].value;
    console.log(new Date($('#eventDateFrom')[0].value));
    console.log("===================");
} /* setDate END */

$(document).ready(function(){
    window.dateFilter = function dateFilter(){
        console.log("Chaaange");
        var newDateFrom = $('#eventDateFrom')[0].value;
        var newDateTo = $('#eventDateTo')[0].value;

        /*Split at IE*/
        if (window.document.documentMode) {
            newDateFrom = ieDate(newDateFrom);
            newDateTo = ieDate(newDateTo);
            console.log(newDateFrom + " from IE");
        }
        newDateFrom = new Date(newDateFrom).getTime();
        newDateTo = new Date(newDateTo).getTime();
        console.log("New Value: " + new Date(newDateFrom) + " - " + new Date(newDateTo));
        if(isNaN(newDateFrom) || isNaN(newDateTo)){
            /* Hier noch nicht rechnen! */
            console.log("Ein Datum ist invalid!");
        } else {
            $('.EventTile').each(function(tile){
                var thisTime = new Date(parseInt(this.dataset.eventdate)).getTime();
                
                if(thisTime < newDateTo && thisTime > newDateFrom && this.classList.contains('visible-event')){
                    console.log(this);
                }
            });
        }
    }
})
    

function ieDate(date){
    var ieSplit = date.split('.');
    date = ieSplit[2] +"-"+ ieSplit[1] +"-"+ ieSplit[0];
    return date;
}


/*new Date("{{dayFrom}} {{monthFromENLangString}} {{yearFrom}} {{timeFrom}}");*/

if(module.hot){
    module.hot.accept();
}

