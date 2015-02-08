/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var includeJS = function(){
	this._loaded = {};
	this._stackLen = 0;
	// this._onFinish = onFinish || function(){console.log("finished!");};
};

includeJS.prototype._execCallback = function(elm, cb){
	var tmpOnload = elm.onload;
	var self = this;
	++self._stackLen;
	elm.onload = function(){
		if(tmpOnload){
			tmpOnload();
		}
		cb();
		--self._stackLen;
		if(self._stackLen<=0){
			self._onFinish();
		}
	};

};
includeJS.prototype.load = function(src,cb){
	if(!this._loaded[src]){
		var elm = document.createElement('script');
		elm.src = src;
		this._loaded[src] = elm;
	}
	cb = cb || function(){};

	this._execCallback(this._loaded[src], cb);
	return this;
};

includeJS.prototype.finish = function(cb){
	this._onFinish = cb;
	for(var k in this._loaded){
		document.body.appendChild(this._loaded[k]);
	}

};