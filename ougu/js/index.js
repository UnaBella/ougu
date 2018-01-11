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