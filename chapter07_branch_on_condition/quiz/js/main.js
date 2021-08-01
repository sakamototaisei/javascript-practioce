$(function() {
	// 解答の確認
	var check = function() {
		// 問題の答え
		var q1 = $("input[name=q1]:checked").val();
		var q2 = $("input[name=q2]:checked").val();
		var q3 = $("input[name=q3]:checked").val();

		// 答え合わせ
		var right = 0;
		if (q1 == 2) {right += 1;}
		if (q2 == 3) {right += 1;}
		if (q3 == 3) {right += 1;}

		// 正答率を表示
		var percent = Math.floor(right / 3 * 100);
		var text = "正答率は " + percent + " ％でした。";
		$("#res").empty().append(text);

		if (percent == 0) {
			$("#res").css({background: "#666", color: "#fff"});
		} else
		if (percent == 100) {
			$("#res").css({background: "#faa", color: "#000"});
		} else {
			$("#res").css({background: "#fff", color: "#000"});
		}
	};

	// 解答の確認ボタンにイベントを追加
	$("#btnCheck").click(check);
});
