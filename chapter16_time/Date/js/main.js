$(function() {
	// 変数の初期化
	var d = new Date();
	//var d = new Date(1999, 0, 1, 1, 23, 45);

	var dayArr = ["日", "月", "火", "水", "木", "金", "土"];

	// 日時の表示
	var drawDate = function() {
		console.log("toString :", d.toString());
		console.log("d :", "" + d);
		console.log("toLocaleString :", d.toLocaleString());

		console.log("getTime :", d.getTime());
		console.log("+d :", +d);
			// 1970 年 1 月 1 日 00:00:00 からのミリ秒単位の数値

		console.log("年 getFullYear :", d.getFullYear());
		console.log("月 getMonth :",   (d.getMonth() + 1));
		console.log("日 getDate :",     d.getDate());
		console.log("曜日 getDay :",    d.getDay());
		console.log("曜日 getDay :",    dayArr[d.getDay()]);

		console.log("時 getHours :",    d.getHours());
		console.log("分 getMinutes :",  d.getMinutes());
		console.log("秒 getSeconds :",  d.getSeconds());
		console.log("----------");
	};

	// 日時の変更
	var changeDate = function() {
		d.setFullYear(d.getFullYear() + 1);
		d.setDate(d.getDate() + 1);
	};

	// 日時の表示と、変更後の表示
	drawDate();
	changeDate();
	drawDate();
});
