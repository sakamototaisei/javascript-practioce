$(function() {
	$("#lst").change(function() {
		var lst = $(this).val() * 1;

		// if 文で分岐
		if (lst > 3000) {
			$(".panel-body").text("送料無料");
		} else {
			$(".panel-body").text("500円");
		}
	});
});
