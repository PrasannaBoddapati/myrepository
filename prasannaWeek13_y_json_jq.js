// created by prasanna
$(function(){
	$("#jsonJq").click(function(){
		try{
			$.ajax({
				url:" ",
				success: function(data){
					var title="<h3>" + data.query.results.channel.title+"</h3>";
					var weather="<p>" +data.query.results.channel.item.description+ "<p>";
					vat todaysDate="<p>"+ data.query.results.channel.item.pubDate+ "<p>";
					$("#jsonJqOut").html(title+ todaysDate+ weather):
				},
				error:function(xhr,textStatus, errorThrown){
					alert("An error occured!" +(errorThrown? errorThrown: xhr.status));
				} //error
			}); //ajax
		}catch(ex) {
		} //end try catch
	}); // end click
}); // ready