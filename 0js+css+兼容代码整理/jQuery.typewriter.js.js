/*
 *  cord全局样式
 *  创意源于生活，代码如诗从你我开始
 *  OOjs虽好，需培养，需规范，需慢慢品尝
 *  打字机效果
 ********************************************************************************************
 */

/*打字机效果----插件*/
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);
			