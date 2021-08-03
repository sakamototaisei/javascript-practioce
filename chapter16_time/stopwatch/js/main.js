$(function() {
	// 変数の初期化
	var d = null;
	var id = null;
	var wait = 10;

	// 経過時間文字列の取得
	var getElapsedTime = function() {
		var dNow = new Date();
		var dElapsed = dNow - d;
		var h = Math.floor(dElapsed / 1000 / 60 / 60);	// 時
		var m = Math.floor(dElapsed / 1000 / 60) % 60;	// 分
		var s = Math.floor(dElapsed / 1000) % 60;	// 秒
		var ms = dElapsed % 1000;	// ミリ秒

// 1  2   01  02
// 12 34  012 034

		var mTxt  = ("0" + m).substr(-2);
		var sTxt  = ("0" + s).substr(-2);
		var msTxt = ("00" + ms).substr(-3);

		return h + ":" + mTxt + ":" + sTxt + ":" + msTxt;
	};

	// ボタン
	$("#btn").click(function() {
		// 開始と停止の分岐
		if (id == null) {
			// 開始
			d = new Date();

			// 定期実行
			id = setInterval(function() {
				$("#output").text(getElapsedTime());
			}, wait);

			// ボタンの表示を変更
			$("#btn").text("停止");
		} else {
			// 停止

			// 定期実行の解除
			clearInterval(id);
			id = null;
			$("#output").text(getElapsedTime());

			// ボタンの表示を変更
			$("#btn").text("開始");
		}
	});
});
