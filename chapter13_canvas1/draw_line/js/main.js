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
	ctx.beginPath();	// 現在のパスをリセットして新たに開始

	ctx.moveTo(w * 0.1, h * 0.1);	// サブパスの開始
	ctx.lineTo(w * 0.4, h * 0.5);	// 点を移動
	ctx.lineTo(w * 0.1, h * 0.9);	// 点を移動
	ctx.closePath();				// パスを閉じる

	ctx.moveTo(w * 0.6, h * 0.1);	// サブパスの開始
	ctx.lineTo(w * 0.9, h * 0.5);	// 点を移動
	ctx.lineTo(w * 0.6, h * 0.9);	// 点を移動

	// 塗りでパスを描画
	ctx.fillStyle = "#00f";
	ctx.fill();

	// 線でパスを描画
	ctx.lineWidth = 20;
	ctx.strokeStyle = "#f00";
	ctx.lineCap  = "round";
	ctx.lineJoin = "round";
	ctx.stroke();
});
