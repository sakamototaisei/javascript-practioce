$(function() {
	// 実行
	var exec = function() {
		// 入力文字列の取得
		var src = $("#source").val();

		// 変換
		var re = /(https?:\/\/[a-zA-Z0-9\-_\.:@!~*'\(¥);\/?&=\+$,%#]+)/g;
		var res = src.replace(re, '<a href="$1" target="_blank">$1</a>');

		// 変換した文字列を入力欄に表示
		$("#resultTxt").val(res);

		// 変換した文字列のプレビューを表示
		$("#resultPreview").empty().html(res);
	};

	// ［実行］ボタンのイベントを登録
	$("#btnExec").click(exec);
});
