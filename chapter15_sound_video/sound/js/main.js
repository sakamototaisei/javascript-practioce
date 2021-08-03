// DOMの準備後に実行する内容
$(function() {
	// 変数の初期化
	var audio = new Audio("");	// Audio
	var sndPth = "sound/se_maoudamashii_jingle05.";	// 音声パス（拡張子なし）
	var canPlay = false;

	// サウンドの読み込み
	var loadSnd = function() {
		try {
			// 使用可能なファイル形式の判定、拡張子を得る
			var ext = null;
			if      (audio.canPlayType("audio/ogg") == "maybe") {ext = "ogg";}
			else if (audio.canPlayType("audio/mp3") == "maybe") {ext = "mp3";}
			//else if (audio.canPlayType("audio/wav") == "maybe") {ext = "wav";}
			// 昨今のモダンブラウザなら、ogg か mp3 のどちらかに対応している

			// 再生可能になったら実行する関数を登録
			audio.addEventListener("canplaythrough", function() { 
				canPlay = true;
				console.log("Can Play!");
			});

			// ファイルを読み込む
			audio.src = sndPth + ext;
		} catch(e) {
			console.log(e);
		}
	};


	// 再生
	var play = function() {
		if (! canPlay) return;
		audio.currentTime = 0;
		audio.loop = false;
		audio.play();
	};

	// ループ
	var loop = function() {
		if (! canPlay) return;
		audio.currentTime = 0;
		audio.loop = true;
		audio.play();
	};

	// 停止
	var stop = function() {
		if (! canPlay) return;
		audio.pause();
	};


	// ボタンのイベントを登録
	$("#btnPlay").click(play);
	$("#btnLoop").click(loop);
	$("#btnStop").click(stop);

	// サウンドの読み込み
	loadSnd();
});
