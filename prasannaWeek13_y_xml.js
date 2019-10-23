// created by Prasanna
var xhr;
function YXmlJs(){
	try{
		xhr= new XMLHttpRequest()
		url=" " ,
		xhr.addEventListener("readystatechange",function(){
			if(xhr.readyState==4 && xhr.status==200 && xhr.responseXML){
				var weather=xhr.responseXML.getElementByTagName("item");
				var location="weather.item(0).getElementByTagName("title").item(0).firstChild.nodeValue;
				var output="<h3> Yahoo Weather </h3>";
				output+="<p> + weather.item(0).getElementByTahName("description").item(0).firstChild.nodeValue+ "</p>" ;
				document.getElementById("xmlJsOut").innerHTML="<h1>"+ location+ "</h1>+ output;
			}
		}, false);
		xhr.open("GET", url,true);
		xhr.send();
	}catch(exception){
		alert("XHR failed")
	}
}
window.addEventListener("load",function(){
	document.getElementById("xmlJs").addEventListener("click", YXmlJs,false);
	document.getElementById("jsonJs").addEventListener("click", YJsonJs,false);
}, false);
