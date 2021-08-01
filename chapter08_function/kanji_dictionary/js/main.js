$(function() {
	// リサイズ時の処理
	var resize = function() {
		// 操作対象の要素を得る
		var $target = $(".col-xs-3");

		// 横幅を得る
		var w = $target.width();

		$target
		.height(w)	// 高さを横幅と同じに
		.css("font-size", Math.floor(w * 0.66) + "px")
			// フォントサイズを指定
		.css("line-height", w + "px");
			// 行の高さを要素の高さと同じに
	};

	// ウィンドウがリサイズされた際にリサイズを実行
	$(window).resize(resize);

	// 初回リサイズ実行
	resize();


	// 説明を表示
	var showExp = function(target) {
		// 説明を取得
		var exp = $(target).find(".exp").text();

		// 説明を表示
		$("#expArea").val(exp);
	};

	// 各要素にマウスを載せた/離れた際のイベントを追加
	$(".col-xs-3").hover(
		function() {
			$(this).css("background", "#ffc");	// 背景色を変更
			showExp(this);	// 説明を表示
		},
		function() {
			$(this).css("background", "#fff");	// 背景色を変更
		}
	);
});
