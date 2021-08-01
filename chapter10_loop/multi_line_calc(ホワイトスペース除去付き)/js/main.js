// 外部JavaScriptファイルです。
$(function() {
	// 計算
	var calc = function() {
		var srcTxt = $("#source").val();	// 文字列取得
		var srcArr = srcTxt.split("\n");	// 改行で分割

		var resArr = [];	// 結果格納用の配列
		for (var i = 0; i < srcArr.length; i ++) {
			var src = srcArr[i];	// 1行取得
			src = src.replace(/\s/g, "");	// ホワイトスペース除去
			if (src == "") continue;	// 空行は飛ばす

			var res;	// 結果用文字列
			try {
				res = eval(src);	// 1行をプログラムとして実行
			} catch(e) {
				res = e;	// エラー時のメッセージ
			}
			resArr.push(src + " = " + res);	// 結果を配列に格納
		}

		var resTxt = resArr.join("\n");	// 配列を改行で結合
		$("#result").val(resTxt);	// 文字列設定
	};

	// ［計算］ボタンのイベントを登録
	$("#btnCalc").click(calc);	// 2018-04-25 btnClac の誤植を btnCalc に修正
});
