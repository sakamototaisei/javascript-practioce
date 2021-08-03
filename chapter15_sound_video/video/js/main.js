// DOMの準備後に実行する内容
$(function() {
	// 変数の初期化
	var video = $("#video").get(0);


	// 再生
	var play = function() {
		video.play();
	};

	// 一時停止
	var pause = function() {
		video.pause();
	};

	// 停止
	var stop = function() {
		video.pause();
		video.currentTime = 0;
	};


	// ボタンのイベントを登録
	$("#btnPlay").click(play);
	$("#btnPause").click(pause);
	$("#btnStop").click(stop);
});
