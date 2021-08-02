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

	// 角丸矩形パスの作成
	var genPathRRct = function(ctx, x, y, w, h, r) {
		// 変数の初期化
		var x2 = x + w;
		var y2 = y + h;

		// パスの作成
		ctx.beginPath();
		ctx.moveTo(x + r, y);	// 左上
		ctx.arcTo(x2, y,  x2, y2, r);	// 右上
		ctx.arcTo(x2, y2, x,  y2, r);	// 右下
		ctx.arcTo(x,  y2, x,  y,  r);	// 左下
		ctx.arcTo(x,  y,  x2, y,  r);	// 左上
	};

	// 実行
	var exec = function() {
		// 変数の初期化
		var imgW = $("#imgW").val() * 1;	// 画像横幅
		var imgH = $("#imgH").val() * 1;	// 画像高さ
		var rctW = $("#rctW").val() * 1;	// 矩形横幅
		var rctH = $("#rctH").val() * 1;	// 矩形高さ
		var rctR = $("#rctR").val() * 1;	// 角丸サイズ
		var lnSz = $("#lnSz").val() * 1;	// 線幅
		var rctCol = $("#rctCol").val();	// 矩形色
		var lnCol = $("#lnCol").val();		// 線色
		var txtTxt = $("#txtTxt").val();	// 文字列
		var txtCol = $("#txtCol").val();	// 文字色

		var x = (imgW - rctW) / 2;
		var y = (imgH - rctH) / 2;

		var fntSz = Math.floor((Math.min(rctW, rctH) - lnSz * 2));
		var cntrX = x + rctW / 2;
		var cntrY = y + rctH / 2;
		var maxW = rctW - lnSz * 4;

		// Canvasの作成
		var c = genCanvas(imgW, imgH);
		if (c == null) {
			alert("対応していないブラウザです。");
			return;
		}

		// 角丸矩形パスの作成
		genPathRRct(c.ctx, x, y, rctW, rctH, rctR);

		// 塗りつぶし
		c.ctx.fillStyle = rctCol;
		c.ctx.fill();

		// 線の描画
		c.ctx.lineWidth = lnSz;
		c.ctx.strokeStyle = lnCol;
		c.ctx.stroke();

		// 文字の描画
		c.ctx.fillStyle = txtCol;
		c.ctx.textAlign = "center";
		c.ctx.textBaseline = "middle";
		c.ctx.font = "bold " + fntSz + "px sans-serif";
		c.ctx.fillText(txtTxt, cntrX, cntrY, maxW);

		// Data URI スキームを取得
		var dtUrl = c.cnvs.toDataURL("image/png");

		// 画像を表示
		var img = new Image();
		img.src = dtUrl;
		$("#outImg").empty().append(img);
	};

	// ［実行］ボタンのイベントを登録
	$("#btnExec").click(exec);
	exec();	// 初回実行
});
