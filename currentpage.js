var currentLink = function(){
	var currentPage = document.URL;
	currentPage = currentPage.split("/").pop();
	if (currentPage == "index.html"){
		document.getElementById('Home').className = "active";
	}
	else if (currentPage == "photos.html"){
		document.getElementById('Photos').className = "active";
	}
	else if (currentPage == "aboutme.html"){
		document.getElementById('About').className = "active";
	}
	else {
		document.getElementById('Login').className = "active";
	}
};
currentLink();