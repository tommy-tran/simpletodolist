// Check tasks
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

// Delete tasks
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

// Add element

$('.fa-plus').click(function(event){
	var item = $("input[type='text']").val();
	$("input[type='text']").val("");
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + item +"</li>");
	
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var item = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + item +"</li>");
	}
})


	