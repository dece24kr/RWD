jQuery(function($){
	// GNB mobile
	$(document).on("click", ".gnb>button", function(){
		$(this).next().slideToggle(200, function(){
			var $this = $(this);
			if($this.is(":hidden")){
				$this.prev().text("메뉴열기");
			} else {
				$this.prev().text("메뉴닫기");
			}
		});
	});

	// GNB tablet & desktop
	$(document).on("mouseover focus", ".gnb>ul>li>a", function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		loop: true
	});
});