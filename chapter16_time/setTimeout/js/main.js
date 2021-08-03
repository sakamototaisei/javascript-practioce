$(function() {
	// 変数の初期化
	var id = null;
	var wait = 2000;	// 2000msec = 2秒

	// 開始ボタン
	$("#start").click(function() {
		if (id != null) return;

		// 遅延実行
		id = setTimeout(function() {
			$("#output").text(wait + "msec経過。");
			id = null;
		}, wait);
	});

	// 停止ボタン
	$("#stop").click(function() {
		if (id == null) return;

		// 遅延実行の解除
		clearTimeout(id);
		id = null;
		$("#output").text("解除しました。");
	});
});
