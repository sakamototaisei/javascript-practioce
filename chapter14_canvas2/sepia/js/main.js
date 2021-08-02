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
		c.ctx.drawImage(img, 0, 0, imgW, imgH, 0, 0, cnvsW, cnvsH);
		sepia(c);

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


	// 画素操作
	var sepia = function(c) {
		// 変数の初期化
		var w = c.cnvs.width;
		var h = c.cnvs.height;
		var imgDt = c.ctx.getImageData(0, 0, w, h);
		var data = imgDt.data;

		// 画素の加工
		for (var y = 0; y < h; y ++) {
			for (var x = 0; x < w; x ++) {
				// 画素の位置を計算
				var pos = (x + y * w) * 4;

				// RGBAの値を取り出し
				var r = data[pos + 0];
				var g = data[pos + 1];
				var b = data[pos + 2];
				var a = data[pos + 3];

				// 輝度を計算
				var Y = 0.298912 * r + 0.586611 * g + 0.114478 * b;
				Y = Math.floor(Y);

				// RGBの値を上書き
				data[pos + 0] = Math.floor(Y * 240 / 255);	// R
				data[pos + 1] = Math.floor(Y * 200 / 255);	// G
				data[pos + 2] = Math.floor(Y * 145 / 255);	// B
			}
		}

		// 画素の反映
		c.ctx.putImageData(imgDt, 0, 0);
	};


	// ドラッグ＆ドロップの準備
	initDAndD();
});
