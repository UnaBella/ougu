window.onscroll = function () {
			var _header = document.querySelector('.header');
			if(getScrollTop() > 0){
				_header.className = 'header bg-blank';
			}else {
				_header.className = 'header';
			}
		};
		function getScrollTop()
		{
			var scrollTop=0;
			if(document.documentElement&&document.documentElement.scrollTop)
			{
				scrollTop=document.documentElement.scrollTop;
			}
			else if(document.body)
			{
				scrollTop=document.body.scrollTop;
			}
			return scrollTop;
		}
		function getE(id) {
			return document.getElementById(id);
		}
		var clic = getE("clic");
		var clip = getE("clip");
		var chh = getE("chh");
		var phh = getE("phh");
		clic.onmouseover = function  () {
			chh.style.display = "block";
		}
		clic.onmouseout = function() {
			chh.style.display = "none";
		}
		chh.onmouseover = function() {
			this.style.display = "block";
		}
		chh.onmouseout = function() {
			this.style.display = "none";
		}
		clip.onmouseover = function  () {
			phh.style.display = "block";
		}
		clip.onmouseout = function() {
			phh.style.display = "none";
		}
		phh.onmouseover = function() {
			this.style.display = "block";
		}
		phh.onmouseout = function() {
			this.style.display = "none";
		}