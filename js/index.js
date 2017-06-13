(function($) {
	var reportController = {
		__name: 'handson.ReportController',

		__ready: function() {
		},

		'input, textarea focusout': function(context, $el) {
		},

		'input[name="img"] change': function(context, $el) {
	    // 変数の定義
	    var $imgPreview = this.$find('.img-preview');

	    // input要素からファイルを取得
	    var file = $el[0].files[0];

	    // FileReaderインスタンスの作成
	    var reader = new FileReader();

	    // ファイルが読み込まれた時の処理を記述
	    reader.onload = function(e) {
		  // 画像を表示
		  $imgPreview.find('img').attr('src', e.target.result);
		  $imgPreview.show();
	  };
	  // ファイル読み込み開始
  	reader.readAsDataURL(file);
  },

		'.confirm click': function(context, $el) {
		},

	};

	h5.core.expose(reportController);
})(jQuery);
$(function() {
	h5.core.controller(document.body, handson.ReportController);
});
