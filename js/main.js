$(document).ready(function () {

	//更多選項
	$('.section2 .readMore').click(function (e) { 
		e.preventDefault();
		$('.section2_list1,.section2_list2,.section2_list3').addClass('active');
	});
	$('.section3 .readMore').click(function (e) { 
		e.preventDefault();
		$('.section3 .content_2,.section3 .content_3,.section3 .content_4').addClass('active');
	});
	$('.section4 .readMore').click(function (e) { 
		e.preventDefault();
		$('.section4 .content_1,.section4 .content_2,.section4 .content_3,.section4 .content_4').addClass('active');
	});
	$('.section5 .readMore').click(function (e) { 
		e.preventDefault();
		$('.questionList_2').addClass('active');
	});
	$('.section5 .question').click(function (e) { 
		e.preventDefault();
		$(this).toggleClass('active');
	});

	$('.section2 .sample_turn li').click(function (e) { 
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active').siblings('.turn_1').addClass('active');
	});
	$('.section2 .sample_turn .turn_1').click(function (e) { 
		e.preventDefault();
		$(this).removeClass('active');
	});



	$('.section2 .sample_turn .turn_1').click(function (e) { 
		e.preventDefault();
		$(this).parent().siblings().find('.sample_1').removeClass('active');
		$(this).parent().siblings().find('.sample_2').removeClass('active');
		$(this).parent().siblings().find('.sample_3').removeClass('active');
		$(this).parent().siblings().find('.sample_4').removeClass('active');
	});
	$('.section2 .sample_turn .turn_2').click(function (e) { 
		e.preventDefault();
		$(this).parent().siblings().find('.sample_1').addClass('active');
		$(this).parent().siblings().find('.sample_2').addClass('active');
		$(this).parent().siblings().find('.sample_3').removeClass('active');
		$(this).parent().siblings().find('.sample_4').removeClass('active');
	});
	$('.section2 .sample_turn .turn_3').click(function (e) { 
		e.preventDefault();
		$(this).parent().siblings().find('.sample_1').addClass('active');
		$(this).parent().siblings().find('.sample_2').removeClass('active');
		$(this).parent().siblings().find('.sample_3').addClass('active');
		$(this).parent().siblings().find('.sample_4').removeClass('active');
	});
	$('.section2 .sample_turn .turn_4').click(function (e) { 
		e.preventDefault();
		$(this).parent().siblings().find('.sample_1').addClass('active');
		$(this).parent().siblings().find('.sample_2').removeClass('active');
		$(this).parent().siblings().find('.sample_3').removeClass('active');
		$(this).parent().siblings().find('.sample_4').addClass('active');
	});

});


// banner輪播

var banners = document.querySelectorAll('.banner');
var turn = document.querySelectorAll('.turn');
var bannerSlide = document.querySelector('.banner_slide');

// 總秒數
var allsecond = 21000;

function bannerSlider() {
	setTimeout(() => {
		bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
		bannerSlide.classList.add('banner2');
		for(var i = 0 ;i<turn.length; i++){
			turn[i].classList.remove('active');
		}
		turn[1].classList.add('active');
	}, 5000);
	setTimeout(() => {
		bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
		bannerSlide.classList.add('banner3');
		for(var i = 0 ;i<turn.length; i++){
			turn[i].classList.remove('active');
		}
		turn[2].classList.add('active');
	}, 10000);
	setTimeout(() => {
		bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
		bannerSlide.classList.add('banner4');
		for(var i = 0 ;i<turn.length; i++){
			turn[i].classList.remove('active');
		}
		turn[3].classList.add('active');
	}, 15000);
	setTimeout(() => {
		bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
		bannerSlide.classList.add('banner5');
		for(var i = 0 ;i<turn.length; i++){
			turn[i].classList.remove('active');
		}
		turn[0].classList.add('active');
	}, 20000);
	setTimeout(() => {
		bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
		bannerSlide.classList.add('banner1');
	}, allsecond);
};
// banner輪播動作
bannerSlider();
setInterval(function(){bannerSlider();},allsecond);

// ----------------------------------------------------------------
// page按鈕
for(var i = 0 ;i< turn.length; i++){
	turn[i].addEventListener('click',function(){
		for(var a = 0; a< turn.length; a++){
			turn[a].classList.remove('active');
		}
		this.classList.add('active');
		if(turn[0].classList.contains('active')) {
			bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
			bannerSlide.classList.add('banner5');
		}if(turn[1].classList.contains('active')){
			bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
			bannerSlide.classList.add('banner2');
		}if(turn[2].classList.contains('active')){
			bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
			bannerSlide.classList.add('banner3');
		}if(turn[3].classList.contains('active')){
			bannerSlide.classList.remove('banner1','banner2','banner3','banner4','banner5')
			bannerSlide.classList.add('banner4');
		};
	},false);
}


// RWD右頁
// ----------------------------------------------------------------
// 第一組
var SPinner1 = document.getElementById('SPinner1');
var SP1_left = document.getElementById('SP1_left');
var SP1_right = document.getElementById('SP1_right');
var n = 0;
var origin = "translateX(-300%)";
var origin2 = "translateX(0%)";
// 點選

//左邊
SP1_left.addEventListener('click',function(){

	if(SPinner1.style.transform == origin) {
		n = -300;
	}else {
		n -= 100;
		SPinner1.style.transform = "translateX("+n+"%)";
	}

},false);


SP1_right.addEventListener('click',function(){
	if(SPinner1.style.transform !== origin) {
		SP1_left.classList.remove('close');
	}
},false);
SP1_left.addEventListener('click',function(){
	if(SPinner1.style.transform == origin) {
		SP1_left.classList.add('close');
	}
},false);

//右邊

SP1_right.addEventListener('click',function(){
	if(SPinner1.style.transform == origin2) {
		n = 0;
	}else {
		n += 100;
		SPinner1.style.transform = "translateX("+n+"%)";
	}

},false);

if(SPinner1.style.transform == origin2) {
	SP1_right.classList.add('close');
}

SP1_left.addEventListener('click',function(){
	if(SPinner1.style.transform !== origin2) {
		SP1_right.classList.remove('close');
	}
},false);
SP1_right.addEventListener('click',function(){
	if(SPinner1.style.transform == origin2) {
		SP1_right.classList.add('close');
	}
},false);

// 第二組
var SPinner2 = document.getElementById('SPinner2');
var SP2_left = document.getElementById('SP2_left');
var SP2_right = document.getElementById('SP2_right');
var n = 0;
var origin = "translateX(-300%)";
var origin2 = "translateX(0%)";
// 點選

//左邊
SP2_left.addEventListener('click',function(){

	if(SPinner2.style.transform == origin) {
		n = -300;
	}else {
		n -= 100;
		SPinner2.style.transform = "translateX("+n+"%)";
	}

},false);


SP2_right.addEventListener('click',function(){
	if(SPinner2.style.transform !== origin) {
		SP2_left.classList.remove('close');
	}
},false);
SP2_left.addEventListener('click',function(){
	if(SPinner2.style.transform == origin) {
		SP2_left.classList.add('close');
	}
},false);

//右邊

SP2_right.addEventListener('click',function(){
	if(SPinner2.style.transform == origin2) {
		n = 0;
	}else {
		n += 100;
		SPinner2.style.transform = "translateX("+n+"%)";
	}

},false);

if(SPinner2.style.transform == origin2) {
	SP2_right.classList.add('close');
}

SP2_left.addEventListener('click',function(){
	if(SPinner2.style.transform !== origin2) {
		SP2_right.classList.remove('close');
	}
},false);
SP2_right.addEventListener('click',function(){
	if(SPinner2.style.transform == origin2) {
		SP2_right.classList.add('close');
	}
},false);

// 第三組
var SPinner3 = document.getElementById('SPinner3');
var SP3_left = document.getElementById('SP3_left');
var SP3_right = document.getElementById('SP3_right');
var n = 0;
var origin = "translateX(-300%)";
var origin2 = "translateX(0%)";
// 點選

//左邊
SP3_left.addEventListener('click',function(){

	if(SPinner3.style.transform == origin) {
		n = -300;
	}else {
		n -= 100;
		SPinner3.style.transform = "translateX("+n+"%)";
	}

},false);


SP3_right.addEventListener('click',function(){
	if(SPinner3.style.transform !== origin) {
		SP3_left.classList.remove('close');
	}
},false);
SP3_left.addEventListener('click',function(){
	if(SPinner3.style.transform == origin) {
		SP3_left.classList.add('close');
	}
},false);

//右邊

SP3_right.addEventListener('click',function(){
	if(SPinner3.style.transform == origin2) {
		n = 0;
	}else {
		n += 100;
		SPinner3.style.transform = "translateX("+n+"%)";
	}

},false);

if(SPinner3.style.transform == origin2) {
	SP3_right.classList.add('close');
}

SP3_left.addEventListener('click',function(){
	if(SPinner3.style.transform !== origin2) {
		SP3_right.classList.remove('close');
	}
},false);
SP3_right.addEventListener('click',function(){
	if(SPinner3.style.transform == origin2) {
		SP3_right.classList.add('close');
	}
},false);




//產品 點選

// 第一組
var PDinner1 = document.getElementById('PDinner1');
var PD1_left = document.getElementById('PD1_left');
var PD1_right = document.getElementById('PD1_right');
var PDn = 0;
var PDorigin = "translateX(-100%)";
var PDorigin2 = "translateX(0%)";
// 點選

//左邊
PD1_left.addEventListener('click',function(){

	if(PDinner1.style.transform == PDorigin) {
		PDn = -100;
	}else {
		PDn -= 100;
		PDinner1.style.transform = "translateX("+PDn+"%)";
	}

},false);


PD1_right.addEventListener('click',function(){
	if(PDinner1.style.transform == PDorigin) {
		PD1_left.classList.remove('close');
	}
},false);
PD1_left.addEventListener('click',function(){
	if(PDinner1.style.transform == PDorigin) {
		PD1_left.classList.add('close');
	}
},false);

//右邊

PD1_right.addEventListener('click',function(){
	if(PDinner1.style.transform == PDorigin2) {
		PDn = 0;
	}else {
		PDn += 100;
		PDinner1.style.transform = "translateX("+PDn+"%)";
	}

},false);

if(PDinner1.style.transform == PDorigin2) {
	PD1_right.classList.add('close');
}

PD1_left.addEventListener('click',function(){
	if(PDinner1.style.transform !== PDorigin2) {
		PD1_right.classList.remove('close');
	}
},false);
PD1_right.addEventListener('click',function(){
	if(PDinner1.style.transform == PDorigin2) {
		PD1_right.classList.add('close');
	}
},false);


// 第二組
var PDinner2 = document.getElementById('PDinner2');
var PD2_left = document.getElementById('PD2_left');
var PD2_right = document.getElementById('PD2_right');
var PDn = 0;
var PDorigin = "translateX(-100%)";
var PDorigin2 = "translateX(0%)";
// 點選

//左邊
PD2_left.addEventListener('click',function(){

	if(PDinner2.style.transform == PDorigin) {
		PDn = -100;
	}else {
		PDn -= 100;
		PDinner2.style.transform = "translateX("+PDn+"%)";
	}

},false);


PD2_right.addEventListener('click',function(){
	if(PDinner2.style.transform == PDorigin) {
		PD2_left.classList.remove('close');
	}
},false);
PD2_left.addEventListener('click',function(){
	if(PDinner2.style.transform == PDorigin) {
		PD2_left.classList.add('close');
	}
},false);

//右邊

PD2_right.addEventListener('click',function(){
	if(PDinner2.style.transform == PDorigin2) {
		PDn = 0;
	}else {
		PDn += 100;
		PDinner2.style.transform = "translateX("+PDn+"%)";
	}

},false);

if(PDinner2.style.transform == PDorigin2) {
	PD2_right.classList.add('close');
}

PD2_left.addEventListener('click',function(){
	if(PDinner2.style.transform !== PDorigin2) {
		PD2_right.classList.remove('close');
	}
},false);
PD2_right.addEventListener('click',function(){
	if(PDinner2.style.transform == PDorigin2) {
		PD2_right.classList.add('close');
	}
},false);


// 第三組
var PDinner3 = document.getElementById('PDinner3');
var PD3_left = document.getElementById('PD3_left');
var PD3_right = document.getElementById('PD3_right');
var PDn = 0;
var PDorigin = "translateX(-100%)";
var PDorigin2 = "translateX(0%)";
// 點選

//左邊
PD3_left.addEventListener('click',function(){

	if(PDinner3.style.transform == PDorigin) {
		PDn = -100;
	}else {
		PDn -= 100;
		PDinner3.style.transform = "translateX("+PDn+"%)";
	}

},false);


PD3_right.addEventListener('click',function(){
	if(PDinner3.style.transform == PDorigin) {
		PD3_left.classList.remove('close');
	}
},false);
PD3_left.addEventListener('click',function(){
	if(PDinner3.style.transform == PDorigin) {
		PD3_left.classList.add('close');
	}
},false);

//右邊

PD3_right.addEventListener('click',function(){
	if(PDinner3.style.transform == PDorigin2) {
		PDn = 0;
	}else {
		PDn += 100;
		PDinner3.style.transform = "translateX("+PDn+"%)";
	}

},false);

if(PDinner3.style.transform == PDorigin2) {
	PD3_right.classList.add('close');
}

PD3_left.addEventListener('click',function(){
	if(PDinner3.style.transform !== PDorigin2) {
		PD3_right.classList.remove('close');
	}
},false);
PD3_right.addEventListener('click',function(){
	if(PDinner3.style.transform == PDorigin2) {
		PD3_right.classList.add('close');
	}
},false);



// 第四組
var PDinner4 = document.getElementById('PDinner4');
var PD4_left = document.getElementById('PD4_left');
var PD4_right = document.getElementById('PD4_right');
var PDn = 0;
var PDorigin = "translateX(-100%)";
var PDorigin2 = "translateX(0%)";
// 點選

//左邊
PD4_left.addEventListener('click',function(){

	if(PDinner4.style.transform == PDorigin) {
		PDn = -100;
	}else {
		PDn -= 100;
		PDinner4.style.transform = "translateX("+PDn+"%)";
	}

},false);


PD4_right.addEventListener('click',function(){
	if(PDinner4.style.transform == PDorigin) {
		PD4_left.classList.remove('close');
	}
},false);
PD4_left.addEventListener('click',function(){
	if(PDinner4.style.transform == PDorigin) {
		PD4_left.classList.add('close');
	}
},false);

//右邊

PD4_right.addEventListener('click',function(){
	if(PDinner4.style.transform == PDorigin2) {
		PDn = 0;
	}else {
		PDn += 100;
		PDinner4.style.transform = "translateX("+PDn+"%)";
	}

},false);

if(PDinner4.style.transform == PDorigin2) {
	PD4_right.classList.add('close');
}

PD4_left.addEventListener('click',function(){
	if(PDinner4.style.transform !== PDorigin2) {
		PD4_right.classList.remove('close');
	}
},false);
PD4_right.addEventListener('click',function(){
	if(PDinner4.style.transform == PDorigin2) {
		PD4_right.classList.add('close');
	}
},false);