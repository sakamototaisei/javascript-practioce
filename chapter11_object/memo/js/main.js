$(function() {
	// テンプレートのHTML文字列
	var template = $("#template").html();

	// クッキーの名前
	var cookie_name = "memo-app";

	// 新規メモを末尾に追加
	var appendNewMemo = function(ttl, bdy) {
		// 「%s」を、ttl と bdy の文字列に置換
		var html = template.replace("%s", ttl).replace("%s", bdy);

		// 末尾に追加
		$("#memoArea").append(html);
	};


	// 追加処理
	var add = function() {
		// タイトルと本文を取り出し
		var ttl = $("#title").val();
		var bdy = $("#body").val();

		// 新規メモを末尾に追加
		appendNewMemo(ttl, bdy);

		// メモをクッキーに保存
		saveMemo();
	};

	// リセット処理
	var reset = function() {
		// 空にする
		$("#memoArea").empty();

		// クッキーを空に
		Cookies.remove(cookie_name);
	};


	// メモをクッキーに保存
	var saveMemo = function() {
		var memoArr = [];
		$("#memoArea .memo-group").each(function() {
			// タイトルと本文を取得
			var $this = $(this);
			var ttl = $this.find(".memo-title").val();
			var bdy = $this.find(".memo-body").val();

			// エンコード
			ttl = encodeURI(ttl);
			bdy = encodeURI(bdy);

			// オブジェクトを作成して配列に格納
			var obj = {ttl: ttl, bdy: bdy};
			memoArr.push(obj);
		});

		// 保存用の名前と値
		var cookie_value = JSON.stringify(memoArr);

		// クッキーに保存
		Cookies.set(cookie_name, cookie_value);
	};

	// メモの復帰
	var restoreMemo = function() {
		// クッキーの読み込み、空なら終了
		var cookie_value = Cookies.get(cookie_name);
		if (cookie_value === undefined) return;

		// クッキーの値をオブジェクトに変換、失敗時は終了
		try {
			var memoArr = JSON.parse(cookie_value);
		} catch(e) {
			console.log("[cookie read error] " + e);
			return;
		}

		// メモの構築
		for (var i = 0; i < memoArr.length; i ++) {
			// メモのタイトルと本文を取得、デコード
			var memo = memoArr[i];
			var ttl = memo.ttl;
			var bdy = memo.bdy;

			// デコード
			ttl = decodeURI(ttl);
			bdy = decodeURI(bdy);

			// 新規メモを末尾に追加
			appendNewMemo(ttl, bdy);
		}
	};


	// ［追加］ボタンのイベントを登録
	$("#btnAdd").click(add);

	// ［リセット］ボタンのイベントを登録
	$("#btnReset").click(reset);

	// メモの復帰
	restoreMemo();
});
