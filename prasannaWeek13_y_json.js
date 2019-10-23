// created by Prasanna
var xhr;
function yJsonJs(){
	try{
		xhr=new XMLHttpRequest()
		url=" ",
		xhr.addEventListener("readyStateexchange", function(){
			if(xhr.readyState==4 && xhr.status==200 && xhr.responseText){
			var weather=JSON.parse(xhr.responseText);
	var title="<h3>" + weather.query.results.channel.title+"</h3>";
	var todaysWeather= "<p>" +weather.query.results.channel.item.description+ "<p>";
	document.getElementById("jsonJsOut").innerHTML=title+todaysDate +todaysWeather;
			}
		},false);
		xhr.open("GET", url,true);
		xhr.send();
	}catch(exception){
		alert("XHR failed")
	}
}
window.addEventListener("load", function() {
	document.getElementById("jsonJs").addEventListener("click", yJsonJs, false);
}, false
	
	
	
	
	
	
	
	
	
	
	
}