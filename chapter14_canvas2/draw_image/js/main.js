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

	// 画像の読み込み
	var img = new Image();
	img.onload = function() {
		// 画像を描画
		var iW = this.width;
		var iH = this.height;
		ctx.drawImage(this, 0, 240);
		ctx.drawImage(this, 0, 0, 320, 240);
		ctx.drawImage(this,
				iW * 0.2, iH * 0.2, iW * 0.6, iH * 0.6,
				320, 0, 640, 480);
	};
	img.src = "../img_sample.jpg";
});
