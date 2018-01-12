var H = document.body.scrollHeight;
var k;
var temp;
var sss=90;
window.onscroll = function () {
			var _header = document.querySelector('.header');
			if(getScrollTop() > 0){
				_header.className = 'header bg-blank';
			}else {
				_header.className = 'header';
			}
			
			var t = getScrollTop();
//			var k = t/H;
//			console.log(k);
			
			if (t>temp) {
				console.log("向下（越来越大）")
				var a = t-temp;
				sss--;
				var pos = "50%"+(parseInt(sss)*0.7)+"px";
				$('.content .module .bg').css("background-position",pos)
			} else{
				console.log("向上")
				var a = t-temp;
				sss++;
				var pos = "50%"+(parseInt(sss)*0.7)+"px";
				$('.content .module .bg').css("background-position",pos)
			}
			temp = t;
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