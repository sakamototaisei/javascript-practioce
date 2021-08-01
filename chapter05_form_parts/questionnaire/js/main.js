$(function() {
	// テキストをコピー
	var copyText = function() {
		// テキストを取得
		var name = $("#name").val();

		// テキストを設定
		$("#name2").val(name);

		// コンソールに出力
		console.log("text", name);
	};

	// チェックボックスをコピー
	var copyCheckbox = function() {
		// チェックされているかを取得
		var chck = $("#chck").prop("checked");

		// チェックを設定
		$("#chck2").prop("checked", chck);

		// on/off 関係なく値を得る
		var chckVal = $("#chck").val();

		// コンソールに出力
		console.log("checkbox", chck, chckVal);
	};

	// チェック済みチェックボックスの値を出力
	var dumpCheckbox = function() {
		$("input[type=checkbox]:checked").each(function() {
			// idを得る
			var id = $(this).attr("id");

			// on/off 関係なく値を得る
			var chckVal = $(this).val();

			// コンソールに出力
			console.log("dump checkbox", id, chckVal);
		});
	};

	// ラジオボタンをコピー
	var copyRadio = function() {
		// チェックされている値を取得
		var sex = $("input[name=sex]:checked").val();

		// チェックを反映
		$("input[name=sex2]").val([sex]);

		// コンソールに出力
		console.log("radio", sex);
	};

	// セレクトをコピー
	var copySelect = function() {
		// 選択されている値を取得
		var lsts = $("#lst").val();

		// 選択を反映
		$("#lst2").val(lsts);

		// コンソールに出力
		console.log("select", lsts);
	};

	// テキスト エリアをコピー
	var copyTextArea = function() {
		// テキストを取得
		var free = $("#free").val();

		// テキストを設定
		$("#free2").val(free);

		// コンソールに出力
		console.log("textarea", free);
	};

	// 全てをコピー
	var copyAll = function() {
		console.log("--------------------");
		copyText();		// テキストをコピー
		dumpCheckbox();	// チェック済みチェックボックスの値を出力
		copyCheckbox();	// チェックボックスをコピー
		copyRadio();	// ラジオボタンをコピー
		copySelect();	// セレクトをコピー
		copyTextArea();	// テキスト エリアをコピー
	};

	// ［Copy］ボタンにイベントを登録
	$("#btnCopy").click(copyAll);



	// 入力が空か確認
	var checkBlank = function() {
		// 入力欄が空か確認
		if ($("#name").val() == "") {
			alert("［名前］が空です。");
			return true;
		}
		if ($("#free").val() == "") {
			alert("［自由記入］が空です。");
			return true;
		}

		// ラジオボタンが選択されていないか確認
		if ($("input[name=sex]:checked").val() === undefined) {
			alert("［性別］が選択されていません。");
			return true;
		}

		// セレクトが選択されていないか確認
		if ($("#lst").val() === null) {
			alert("［リスト］が選択されていません。");
			return true;
		}

		// 問題なし
		return false;
	};

	// ［Submit］ボタンにイベントを登録
	$("#f").submit(function() {
		var isBlank = checkBlank();
		if (isBlank) {
			console.log("stop");
			return false;
		}
	});
});

