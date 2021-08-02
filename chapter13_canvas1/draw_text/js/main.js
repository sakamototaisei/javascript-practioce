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

	// 文字描画用の設定
	var txt = "あいうえおabcdefg0123456789";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "bold 64px sans-serif";

	// 線で文字を描画
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#f00";
	ctx.strokeText(txt, w / 2, h / 3, w);

	// 塗りで文字を描画
	ctx.fillStyle = "#00f";
	ctx.fillText(txt, w / 2, h / 3 * 2, w);
});