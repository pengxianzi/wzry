var imgList = document.querySelectorAll(".main-top-pic-box>img");
var btnRight = document.querySelector(".btn-right");
var box = document.querySelector(".main-top-pic-box");
var liList = document.querySelectorAll(".main-top-pic-banner li");
var picIndex = 0;
for (var i = 0; i < liList.length; i++) {
	liList[i].onmouseover = function() {
		picIndex = this.getAttribute("data-index");
		box.style.transform = "translateX(" + (-604) * picIndex + "px)";
		for (var i = 0; i < liList.length; i++) {
			liList[i].id = "";
		}
		this.id = "active";
	}
}


var timer = setInterval(function() {
	if (picIndex == imgList.length - 1) {
		box.id = "notransition";
		picIndex = 0;
		box.style.transform = "translateX(" + (-604) * picIndex + "px)";
		console.log(box.offsetHeight);
	}
	box.id = "";
	picIndex++;
	box.style.transform = "translateX(" + (-604) * picIndex + "px)";

	for (var i = 0; i < liList.length; i++) {
		liList[i].id = "";
		liList[picIndex == imgList.length - 1 ? 0 : picIndex].id = "active";
	}
	liList[picIndex].id = "active";
}, 2000);

box.onmouseenter = function() {
	clearInterval(timer);
}
box.onmouseleave = function() {
	timer = setInterval(function() {

	}, 1000);
}

var newsBox = document.querySelector(".main-top-news-box");
var newsliList = document.querySelectorAll(".main-top-news-box-tatle li");
var newsIndex = 0;
for (var j = 0; j < newsliList.length; j++) {
	newsliList[j].onmouseover = function() {
		newsIndex = this.getAttribute("data-index");
		newsBox.style.transform = "translateX(" + (-325) * newsIndex + "px)";
		for (var j = 0; j < newsliList.length; j++) {
			newsliList[j].id = "";
		}
		this.id = "new-active";
	}
}
