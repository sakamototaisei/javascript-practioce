$(function() {
	// ドラッグ＆ドロップの準備
	var initDAndD = function() {
		// 変数の初期化
		var $holder = $("#dropArea");

		// ドラッグ オーバー
		$holder.on("dragover", function () {
			$(this).addClass("drop");	// 背景色追加
			return false;
		});

		// ドラッグ リーブ
		$holder.on("dragleave", function () {
			$(this).removeClass("drop");	// 背景色解除
			return false;
		});

		// ドロップ
		$holder.on("drop", function (e) {
			// 遅延実行
			setTimeout(function() {
				$holder.removeClass("drop");	// 背景色解除
			}, 300);

			// 処理の開始
			actDrp(e.originalEvent);	// ドラッグ＆ドロップの実行
			return false;
		});
	}

	// ドラッグ＆ドロップの実行
	var actDrp = function(e) {
		// 読み込み
		var reader = new FileReader();
		reader.readAsDataURL(e.dataTransfer.files[0]);
		reader.onload = function(){
			// 読み込んだデータ
			var dtURL = reader.result;

			// 画像として読み込む
			var img = new Image();
			img.src = dtURL;
			img.onload = actImgProc;
		};
	};

	// 画像処理
	var actImgProc = function() {
		// 変数の初期化
		var img = this;
		var imgW = img.width;
		var imgH = img.height;

		var cnvsW = 640;
		var cnvsH = 480;

		// 出力用キャンバスを作成
		var c = genCanvas(cnvsW, cnvsH);

		// クリップ付きで描画
		c.ctx.beginPath();
		c.ctx.arc(cnvsW / 2, cnvsH / 2, cnvsH * 0.6, 0, Math.PI * 2, false);

		c.ctx.save();
		c.ctx.clip();
		c.ctx.drawImage(img, 0, 0, imgW, imgH, 0, 0, cnvsW, cnvsH);
		c.ctx.restore();

		// 文字描画用の設定
		var txt = "画像切り抜きアプリ";
		c.ctx.textAlign = "left";
		c.ctx.textBaseline = "top";
		c.ctx.font = "bold 64px sans-serif";

		c.ctx.globalAlpha = 0.5;
		c.ctx.fillStyle = "#fff";
		c.ctx.fillText(txt, 12, 12);
		c.ctx.fillStyle = "#000";
		c.ctx.fillText(txt, 10, 10);

		// Data URI スキームを取得
		var dtUrl = c.cnvs.toDataURL("image/png");

		// 画像を表示
		var img = new Image();
		img.src = dtUrl;
		$(img).addClass("img-responsive");
		$("#outArea").empty().append(img);
	}


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


	// ドラッグ＆ドロップの準備
	initDAndD();
});
