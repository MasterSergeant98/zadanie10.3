$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 5000); 
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	
    
	moveFirstSlide = function(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
});

