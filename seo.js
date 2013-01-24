	  
var $=function (id) {
	var prefix=id[0];
	var iid=id.slice(1,id.length);
	switch (prefix){
		case '#':	return document.getElementById(iid);   			break;
		case '.':	return document.getElementsByClassName(iid);  	break;
		default:	return document.getElementsByTagName(id); 
		}	
	}	  
	  

function nazwa(naz){
	naz=naz.capitalize();
	naz=naz.replace(/_/g,'.');
	return naz;
}	

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function koniec(){
	try  {navigator.app.exitApp();}
	catch(err) {
	  window.location.reload();
	  }
}	  


Number.prototype.forma = function(){
//console.log(this);
var n=this;

if (n>999) {var n1=Math.round(n/1000); var n22=n2= n%1000;  if (n2<10) n22='0'+n22; if (n2<100) n22='0'+n22; n= n1+'.'+n22;}
	//var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	//return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	return n;
	
 };