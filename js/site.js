$(document).ready(function() {
	
	var $album1= $(".album1")
	var $album2= $(".album2")
	var $album3= $(".album3")
	// var $album1photo1= $(".album1photo1")

	$(".album1Link").click(function(event) {
		event.preventDefault();
		if($album1.hasClass("show")) {
			return;
		} else {
			$album1.siblings().removeClass("show");
			$album1.addClass("show");
		}
	});
	$(".album2Link").click(function(event) {
		event.preventDefault();
		if($album2.hasClass("show")) {
			return;
		} else {
			$album2.siblings().removeClass("show");
			$album2.addClass("show");
		}
	});
	$(".album3Link").click(function(event) {
		event.preventDefault();
		if($album3.hasClass("show")) {
			return;
		} else {
			$album3.siblings().removeClass("show");
			$album3.addClass("show");
		}
	});
	$(".album1photo1Link").click(function() {
		$(this).toggleClass("imgBig");
		$(".album1photo1").addClass("hide");
	

	})
});
