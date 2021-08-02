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

	// 描画設定
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#f00";

	// パスを作成
	var x = w * 0.5;	// 中心のX座標
	var y = h * 0.5;	// 中心のY座標
	var radius = h * 0.45;	// 半径
	var startAngle = 0;		// 開始の角度
	var endAngle   = Math.PI * 1.25;	// 終了の角度
	var anticlockwise = false;	// 反時計回りか否か

	// 円弧
	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
	ctx.closePath()
	ctx.stroke();		// 線でパスを描画

	ctx.beginPath();	// 現在のパスをリセットして新たに開始
	ctx.arc(x, y, radius * 0.5, startAngle, endAngle, ! anticlockwise);
	ctx.stroke();		// 線でパスを描画
});