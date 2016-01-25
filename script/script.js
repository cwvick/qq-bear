// 當網頁載入完
$(window).load(function(){
	// 讓廣告區塊變透明且顯示出來
	// 設定距離右及下方邊距及移動的速度
	var $win = $(this), 
		$ad = $('#abgne_float_ad').show(), 
		_width = $ad.width(), 
		_height = $ad.height(), 
		_diffY = 20, _diffX = 20, 
		moveSpeed = 800;
		
	// 先把 #abgne_float_ad 移動到定點
	$ad.css({
		top: $(document).height(),
		left: $win.width() - _width - _diffX
	});

	// 幫網頁加上 scroll 及 resize 事件
	$win.bind('scroll resize', function(){
		var $this = $(this);
			
		// 控制 #abgne_float_ad 的移動
		$ad.stop().animate({
			top: $this.scrollTop() + $this.height() - _height - _diffY,
			left: $this.scrollLeft() + $this.width() - _width - _diffX
		}, moveSpeed);
	}).scroll();	// 觸發一次 scroll()
});

$(function() {
	$('.slider-container').carouFredSel({
    width: '100%',
    height: 418,
    auto: false,
    items: {
      visible: 3
    },
    onCreate: function(data) {
    	$('.slider-container').find('li').addClass('grayscale');
    	$('.slider-container').find('li').eq(1).removeClass('grayscale');
    },
    scroll: {
      items: 1,
      duration: 800,
      timeoutDuration: 5000,
      onAfter : function(data) {
      	$('.slider-container').find('li').addClass('grayscale');
      	$(data.items.visible).eq(1).removeClass('grayscale');
      }
    },
    prev: '.btn-prev',
    next: '.btn-next'
  });
});
