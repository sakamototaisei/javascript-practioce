$(function() {
	$("#chck").change(function() {
		var isChck = $(this).prop("checked");

		// if 文で分岐
		if (isChck) {
			$("#pnl1").show();	// 表示
		} else {
			$("#pnl1").hide();	// 非表示
		}
	});
});
