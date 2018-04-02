var maplink = document.querySelector(".map");
var writeuslink = document.querySelector(".write-us-btn");
var mappopup = document.querySelector(".map-popup");
var writeuspopup = document.querySelector(".write-us");
var mapclose = mappopup.querySelector(".close");
var writeusclose = writeuspopup.querySelector(".close");
var form = writeuspopup.querySelector("form");
var username = writeuspopup.querySelector("[name=name]");
var email = writeuspopup.querySelector("[name=email]");
var sliderDotsList = document.querySelectorAll(".dots a");
var sliderItemList = document.querySelectorAll(".slider-item");
var servicesLinkList = document.querySelectorAll(".services-navigation a");
var servicesItemList = document.querySelectorAll(".services-item");

for (var i = 0; i < sliderDotsList.length; i++) {
	changeSlide(i);
}

function changeSlide(i) {
	sliderDotsList[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		if (!this.classList.contains("active")) {
			document.querySelector(".dots .active").classList.remove("active");
			this.classList.add("active");
			document.querySelector(".slider-item.active").classList.remove("active");
			sliderItemList[i].classList.add("active");
		}
	});
}

for(var i=0; i < servicesLinkList.length; i++) {
	changeServices (i);
}

function changeServices(i) {
	servicesLinkList[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		if (!this.classList.contains("services-selected")){
			document.querySelector(".services-navigation .services-selected").classList.remove("services-selected");
			this.classList.add("services-selected");
			document.querySelector(".services-item.active").classList.remove("active");
			servicesItemList[i].classList.add("active");
		}
	})
}

maplink.addEventListener("click", function (evt) {
	"use strict";
	evt.preventDefault();
	mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
	"use strict";
	evt.preventDefault();
	mappopup.classList.remove("modal-show");
});
		
writeuslink.addEventListener("click", function (evt) {
	"use strict";
	evt.preventDefault();
	writeuspopup.classList.add("modal-show");
	username.focus();
});

writeusclose.addEventListener("click", function (evt) {
	"use strict";
	evt.preventDefault();
	writeuspopup.classList.remove("modal-show");
	username.classList.remove("modal-error");
	email.classList.remove("modal-error");
});
		
form.addEventListener("submit", function (evt) {
	"use strict";
	if (!username.value || !email.value) {
		evt.preventDefault();
		if (!username.value) {
			evt.preventDefault();
			username.classList.remove("modal-error");
			setTimeout(function () {
				username.classList.add("modal-error");
			}, 10);
		}
		if (!email.value) {
			evt.preventDefault();
			email.classList.remove("modal-error");
			setTimeout(function () {
				email.classList.add("modal-error");
			}, 10);
		}
	}
});