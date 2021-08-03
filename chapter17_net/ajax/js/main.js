$(function() {
	// getJSON の利用
	var url = "http://b.hatena.ne.jp/entrylist/json?callback=?";
	$.ajax({
		url: url,
		type: "GET",
		data: {sort: "hot"},
		dataType: "jsonp",
		success: function(data) {
			console.log(url + " を読み込みました。");
			console.log(data);
			for (var i = 0; i < data.length; i ++) {
				var obj = data[i];
				console.log(i, obj.count, obj.title, obj.link);
			}
		}
	});
});
