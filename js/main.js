
$(function(){
	//全屏翻页
	var runPage = new FullPage({
	
		id : 'pageContain',                            // id of contain
		slideTime : 800,                               // time of slide
		continuous : true,                             // create an infinite feel with no endpoints
		effect : {                                     // slide effect
				transform : {
					translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
					scale : [.1, 1],				   // [scalefrom, scaleto]
					rotate : [0, 0]				   // [rotatefrom, rotateto]
				},
				opacity : [0, 1]                       // [opacityfrom, opacityto]
			},                           
		mode : 'wheel,touch,nav:navBar',               // mode of fullpage
		easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
		//  ,beforeChange : function(index, thisPage) {   // callback before pageChange
		//    return 'stop';
		//  }
		//  ,callback : function(index, thisPage) {       // callback when pageChange
		//    alert(index);
		//  };
	});
	$(window).resize();
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	// $("#block-nav").navFixed();

	//平滑滚动导航
	// $('#fstPage-down a, nav a, #logo').bind('click',function(event){
	// 	var $anchor = $(this);
	// 	$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
	// 	event.preventDefault();
	// });
	
});

$(window).resize(function(){ 

	//首页满屏
	$("#block-firstPage").css("height", $(window).height());
	//首页文字效果
	$('.blockTitle').stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	},500); 

	$("#block-wantMore").css("height", $(window).height() + "px");
	$('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px"); 
});
