		var maplink = document.querySelector(".map");
		var writeuslink = document.querySelector(".write-us-btn")
		var mappopup = document.querySelector(".map-popup");
		var writeuspopup = document.querySelector(".write-us");
		var mapclose = mappopup.querySelector(".close");
		var writeusclose = writeuspopup.querySelector(".close");
		var form = writeuspopup.querySelector("form");
		var username = writeuspopup.querySelector("[name=name]");
		var email = writeuspopup.querySelector("[name=email]");
		
		maplink.addEventListener("click", function (evt) {
			evt.preventDefault();
			mappopup.classList.add("modal-show");
		});
		mapclose.addEventListener("click", function(evt) {
			evt.preventDefault();
			mappopup.classList.remove("modal-show");
		});
		
		writeuslink.addEventListener("click", function (evt) {
			evt.preventDefault();
			writeuspopup.classList.add("modal-show");
			username.focus();
		});
		writeusclose.addEventListener("click", function(evt) {
			evt.preventDefault();
			writeuspopup.classList.remove("modal-show");
			username.classList.remove("modal-error");
			email.classList.remove("modal-error");
		});
		
		form.addEventListener("submit", function (evt){
			if (!username.value){
				evt.preventDefault();
				username.classList.add("modal-error");
			} else {
				if (!email.value){
					evt.preventDefault();
					email.classList.add("modal-error");
				}
			}
		});