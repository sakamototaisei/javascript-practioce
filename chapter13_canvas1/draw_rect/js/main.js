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

	// 線で矩形を描画
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#f00";
	ctx.strokeRect(50, 50, w - 100, h - 100);

	// 塗りで矩形を描画
	ctx.fillStyle = "#00f";
	ctx.fillRect(100, 100, w - 200, h - 200);
});
