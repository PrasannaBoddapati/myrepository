//created by Prasanna
$(function(){
	$("#xmlJq").click(function(){
		try{
			$.ajax({
				url:" ",
				cache:false,//defaultnis true and this argument is optional
				success:function(xml){
					console.log(xml);
					var item=$(xml).find("item");
					var title="<h3>"+ $(item).find("title").text()+"</h3>";
					var waether="<p>"+ $(item).find("description").text()+"</p>";
					var todaysDate="<p>"+$(item).find("pubDate").text()+"</p>";
					$("#xmlJqOut").html(title + todaysDate + weather);
				},
				error:function(xhr, textStatus, errorThrown){
					alert("An error occured!" + (errorThrown? errorThrown: xhr.status));
			}// error
		}); //ajax
		} catch(ex){
			alert(ex);
		}//end try catch.
});end click
}); ready