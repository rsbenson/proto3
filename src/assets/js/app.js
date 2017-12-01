import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/jquery.feedme';


$(document).foundation();

$("[data-menu-underline-from-center] a").addClass("underline-from-center"); 


$("div.reporting").feedMe({
    category : 7923 
});

$("div.news").feedMe({
    category : 7924 
});

$("#news").feedMe({
    category:3,
    quantity:2,
    imgSize:"small",
});