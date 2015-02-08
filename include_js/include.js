/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var includeJS = function(){

};
includeJS._loaded = {};
includeJS._execCallback = function(elm, cb){
	if(!cb){
		return false;
	}
	var tmpOnload = elm.onload;
	elm.onload = function(){
		if(tmpOnload){
			tmpOnload();
		}
		cb();
	};

};
includeJS.load = function(src,cb){
	if( includeJS._loaded[src] ){
		includeJS._execCallback(includeJS._loaded[src], cb);
		return false;
	}

	var elm = document.createElement('script');
	elm.src = src;
	document.body.appendChild(elm);

	includeJS._loaded[src] = elm;
	includeJS._execCallback(elm, cb);

};