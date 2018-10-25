const img = document.getElementById('image1');

img.addEventListener("mouseover", function(){
	img.setAttribute('src', 'img/image1_2.jpg');		
});
img.addEventListener("mouseout", function(){
	img.setAttribute('src', 'img/image1.jpg');		
});