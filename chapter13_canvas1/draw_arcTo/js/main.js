$(function() {
	// キャンバスを取得
	var cnvs = $("#cnvs").get(0);

	// 対応していなければ終了
	if (! cnvs || ! cnvs.getContext) return;

	// 変数の初期化
	var ctx = cnvs.getContext("2d");	// コンテキストを取得
	var w = cnvs.width;		// 横のサイズを取得
	var h = cnvs.height;	// 縦のサイズを取得

	// 背景を塗りつぶし
	ctx.fillStyle = "#ffc";
	ctx.fillRect(0, 0, w, h);

	// パスを作成
	var x0 = w * 0.1, y0 = h * 0.1;
	var x1 = w * 0.9, y1 = h * 0.1;
	var x2 = w * 0.9, y2 = h * 0.9;
	var radius = w * 0.2;

	// 描画設定

	// 補助線を表示
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#888";

	ctx.strokeRect(x1 - radius, y1, radius, radius);

	ctx.lineWidth = 5;
	ctx.strokeStyle = "#ccc";

	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();		// 線でパスを描画

	// arcToを表示
	ctx.lineWidth = 10;
	ctx.strokeStyle = "#f00";

	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.moveTo(x0, y0);
	ctx.arcTo(x1, y1, x2, y2, radius);
	ctx.stroke();		// 線でパスを描画

	// 補助点を表示
	ctx.fillStyle = "#0f0";
	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.arc(x0, y0, 10, 0, Math.PI * 2, false);
	ctx.fill();			// 塗り

	ctx.fillStyle = "#00f";
	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.arc(x1, y1, 10, 0, Math.PI * 2, false);
	ctx.fill();			// 塗り

	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.arc(x2, y2, 10, 0, Math.PI * 2, false);
	ctx.fill();			// 塗り
});
