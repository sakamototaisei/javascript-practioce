$(function() {
	// Cnavas の生成
	var genCanvas = function(w, h) {
		// 変数の初期化
		var c = {cnvs: null, ctx: null};

		// Cnavas の作成、DOM要素の取得
		c.cnvs = $("<canvas>").attr("width", w).attr("height", h).get(0);

		// 対応していなければ null を戻す
		if (! c.cnvs || ! c.cnvs.getContext) return null;

		// 2Dコンテクストの取得
		c.ctx = c.cnvs.getContext("2d");

		// 戻り値を戻して終了
		return c;
	};

	// 変数の初期化
	var w = 640;	// 横のサイズ
	var h = 480;	// 縦のサイズ

	// Cnavas の生成
	var c = genCanvas(w, h);
	if (c == null) {
		alert("対応していないブラウザです。");
		return;
	}

	// 背景を塗りつぶし
	c.ctx.fillStyle = "#ffc";
	c.ctx.fillRect(0, 0, w, h);

	// 塗りで矩形を描画
	c.ctx.fillStyle = "#00f";
	c.ctx.fillRect(50, 50, w - 100, h - 100);

	// 表示
	$("body").append(c.cnvs);
});
