$(function() {
	// get の利用
	$.get("js/sub.txt", function(data) {
		console.log("js/sub.txt を読み込みました。");
		console.log(data);
	});
});
