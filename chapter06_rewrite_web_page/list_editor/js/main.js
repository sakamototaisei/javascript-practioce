$(function() {
	// テンプレートのHTMLを取得
	var tmplt = $("#template").html();

	// 追加
	var append = function() {
		// 操作対象を変数に格納
		//   input で name が sel の要素で、チェックされているもの。
		//   その親要素の中で、最初の li 要素を取得。
		var $target = $("input[name=sel]:checked").parents("li").eq(0);

		// 入力欄の文字列を取得
		var text = $("#line").val();

		// テンプレートのHTMLから %s を、入力欄の文字列に置換したHTMLを作る
		var html = tmplt.replace("%s", text);

		// 操作対象の次にHTMLを追加
		$target.after(html);

		// 操作対象の次の要素内から input 要素を探してチェックする
		$target.next().find("input").prop("checked", true);
	};

	// ネスト
	var nest = function() {
		// 操作対象を変数に格納
		//   input で name が sel の要素で、チェックされているもの。
		//   その親要素の中で、最初の li 要素を取得。
		var $target = $("input[name=sel]:checked").parents("li").eq(0);

		// 入力欄の文字列を取得
		var text = $("#line").val();

		// テンプレートのHTMLから %s を、入力欄の文字列に置換したHTMLを作る
		// さらに ul 要素で囲む
		var html = "<ul>" + tmplt.replace("%s", text) + "</ul>";

		// 操作対象にHTMLを追加
		$target.append(html);

		// 操作対象内から input 要素を探してチェックする
		$target.find("li input").prop("checked", true);
	};

	// ［Append］ボタンにイベントを登録
	$("#btnAppend").click(append);

	// ［Nest］ボタンにイベントを登録
	$("#btnNest").click(nest);
});
