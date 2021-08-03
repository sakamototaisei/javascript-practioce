$(function() {
	// 変数の初期化
	var id = null;
	var wait = 500;		// 500msec = 0.5秒

	// 開始ボタン
	$("#start").click(function() {
		if (id != null) return;

		// 定期実行
		id = setInterval(function() {
			$("#output").append("<div>定期実行中。</div>");
		}, wait);
	});

	// 停止ボタン
	$("#stop").click(function() {
		if (id == null) return;

		// 定期実行の解除
		clearInterval(id);
		id = null;
		$("#output").append("<div>解除しました。</div>");
	});
});
