$(function() {
	// getScript の利用
	$.getScript("js/sub.js", function() {
		console.log("js/sub.js を読み込みました。");
	});
});
