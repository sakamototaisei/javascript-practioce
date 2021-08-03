$(function() {
	// 変数の初期化
	var $target = $("#output");
	var template = '<a href="%s" class="btn btn-primary btn-block" '
		+ 'target="_blank">%s. %s</a>';
	var url = "http://b.hatena.ne.jp/entrylist/json?callback=?";
	var opt = {sort: "hot"};

	// JSONの読み込み
	$.getJSON(url, opt, function(data) {
		$target.empty();
		for (var i = 0; i < data.length; i ++) {
			var html = template;
			var obj = data[i];
			html = html
				.replace("%s", obj.link)
				.replace("%s", i)
				.replace("%s", obj.title);
			$target.append(html);
		}
	});
});
