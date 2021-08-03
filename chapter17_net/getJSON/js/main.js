// 2019-10-22
// はてなブックマークから取得するAPIが廃止になったので、代わりに
// Wikipediaからランダムでエントリを取得するコードを示します。
//
// 処理の内容自体は、以前のはてなブックマークからデータを取得する
// ものと同じです。取得元のURLと、出力の値が異なるだけです。
//
$(function() {
	// getJSON の利用
	var url = "http://ja.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=10&callback=?";
	$.getJSON(url, function(data) {
		console.log(url + " を読み込みました。");
		console.log(data);
		for (var i = 0; i < data.query.random.length; i ++) {
			var obj = data.query.random[i];
			var link = 'https://ja.wikipedia.org/wiki/'
				+ encodeURIComponent(obj.title);
			console.log(i, obj.title, obj.id, link);
		}
	});
});

// 2019-10-22
// はてなブックマークは、RSSでなら取得が可能です。その際は、RSS
// から何らかの方法でJSONPに変換する必要があります。その際は、
// 「rss to json」を使うのが1つの手です。
//
// https://rss2json.com/
// 無料のAPIキーを取得して利用すると、取得できる頻度が増えます。
//
// 試す時は、コメントを解除して、実行してください。制限があるので
// コメント状態にしています。
//
/*
$(function() {
	// getJSON の利用
	var url = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fb.hatena.ne.jp%2Fentrylist%3Fsort%3Dhot%26threshold%3D%26mode%3Drss";
	$.getJSON(url, function(data) {
		console.log(url + " を読み込みました。");
		console.log(data);
		for (var i = 0; i < data.items.length; i ++) {
			var obj = data.items[i];
			console.log(i, obj.title, obj.link);
		}
	});
});
*/

// 2019-10-22
// 旧ソースコード
// はてなブックマークから取得するAPIが廃止になったので、廃止に
// しています。
//
/*
$(function() {
	// getJSON の利用
	var url = "http://b.hatena.ne.jp/entrylist/json?callback=?";
	$.getJSON(url, {sort: "eid"}, function(data) {
		console.log(url + " を読み込みました。");
		console.log(data);
		for (var i = 0; i < data.length; i ++) {
			var obj = data[i];
			console.log(i, obj.count, obj.title, obj.link);
		}
	});
});
*/

