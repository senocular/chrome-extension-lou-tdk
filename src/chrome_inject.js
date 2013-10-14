// inject page script
(function(){
	
// immediate inject entry
function debug(msg){ if (console) console.log("LoU TDK: " + msg); }
try {
	
	// assumes com_senocular_LoUDefiant_pageScript 
	// to be predefined in another script
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("title", "TDK");
	script.innerHTML = "(" + com_senocular_LoUDefiant_pageScript.toString() + ")();";
	document.getElementsByTagName("head")[0].appendChild(script);
	debug("injected");
	
}catch(e){ debug(e); }
	
})();