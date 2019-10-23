$(document).ready(function(){
	// created by prasanna
	//id 700688506
	$("#quoteBtn").on("click" , function(){
		// ajax with jquery
		// start ajax request
		$.ajax({
			url:"QuotesAndNumbers.php",
			type:"GET",
			data:{ sendBack: "quote"};
			success:function(data){
				console.log('successful')
				$("#quoteResult").text(data);
			},
			error:function(xhr, textStatus, errorThrown){
				alert("An error occured!" + (errorThrow? errorThrown: xhr.status + "" + textStatus));
			}
		});
	})
	$("#numberBtn").on("click", function(){
		if(xhr.readyState==4 && xhr.status==200 && xhr.responseText){
			$("#numResult").text(xhr.responseText);
		}
	}, false);
	xhr.open("GET", "QuotesAndNumbers.php", true);
	xhr.send();
})
})// end ready
			