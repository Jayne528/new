<header>
	<div class="header_wrap">
		<div class="header_logo">
			<a href="./">
				<img src="img/logo.svg" alt="">
			</a>
		</div>
		<div class="burger_menu">
			<img src="img/mb/burger_menu.svg" alt="">
		</div>
		<ul class="menu">
			<li>
				<a href="#">消息</a>
			</li>
			<li>
				<a href="#section2">案例</a>	
			</li>
			<li>
				<a href="#section3">關於</a>								
			</li>
			<li>
				<a href="#section4">產品</a>
			</li>
			<li>
				<a href="#section5">問答</a>
			</li>
			<li>
				<a href="#section6">聯絡</a>
			</li>
		</ul>
	</div>
</header>
<aside>
	<div class="aside_top">
		<div class="aside_logo">
			<img src="img/logo.svg" alt="">
		</div>
		<button class="close_btn"><a href="#">✕</a></button>
	</div>
	<ul>
		<li class="menu_section1">
			<a href="#">消息</a>
		</li>
		<li class="menu_section2">
			<a href="#section2">案例</a>	
		</li>
		<li class="menu_section3">
			<a href="#section3">關於</a>								
		</li>
		<li class="menu_section4">
			<a href="#section4">產品</a>
		</li>
		<li class="menu_section5">
			<a href="#section5">問答</a>
		</li>
		<li class="menu_section6">
			<a href="#section6">聯絡</a>
		</li>
	</ul>
</aside>


<script type="text/javascript">
$(document).ready(function () {
	// 漢堡選單
	$('.burger_menu').click(function (e) { 
		e.preventDefault();
		$('aside').addClass('active');
		// $('body').addClass('fixed');
	});
	$('.close_btn').click(function (e) { 
		e.preventDefault();
		$('aside').removeClass('active');
		$('body').removeClass('fixed');
	});
	$('.menu_section1,.menu_section2,.menu_section3,.menu_section4,.menu_section5,.menu_section6').click(function (e) { 
        $('aside').removeClass('active');
        $('body').removeClass('fixed');
    });
});
</script>
