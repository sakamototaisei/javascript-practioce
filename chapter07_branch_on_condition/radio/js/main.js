$(function() {
	$("input[name=answer]").change(function() {
		var val = $(this).val() * 1;

		// if 文で分岐
		if (val == 2) {
			$(".panel-body").text("正解");
		} else {
			$(".panel-body").text("不正解");
		}
	});
});
