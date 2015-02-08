/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var testloadFunc = function(message){
var elm = document.createElement('p');
elm.innerHTML = message;
console.log(message);
document.getElementById('view').appendChild(elm);
};
testloadFunc("testload.js is loaded.");