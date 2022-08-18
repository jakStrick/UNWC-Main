
/* slide show fundtions... */

let slideIndex = 0;

// selects an image based on view port size
function adjustImage(dirty){
  
    if( !dirty )
    return;

    const vpw = $(window).width();
    let dirNum = 0;

    if( vpw >= 900 ){
      dirNum = 4;
    }
    else if ( vpw >= 800 && vpw < 900 ){
      dirNum = 3;
    }
    else if ( vpw > 550 && vpw < 800 ){
      dirNum = 2;
    }
    else{
      dirNum = 1;
    }

    var imgLoc = document.getElementById('main-header-image');
    var tempLoc = imgLoc.src;

    tempLoc = tempLoc.split("/");
    var tl = "";
    
    //get path from images folder which is 3rd array location
    //and add back the slashes to make complete path so images 
    //reload to proper size for view port.
    for (var i = 3; i <= tempLoc.length - 1; i++){
        tl = tl + "/" + tempLoc[i];
    }

    tempLoc = tl.slice(0, 19);
    tl = tl.slice(20);
      
    var newImgLoc = tempLoc + dirNum + tl;
    //console.log("new location = " + newImgLoc);
    imgLoc.src = newImgLoc;
}

window.addEventListener('load', function(event){
  adjustImage('false');
})

window.addEventListener('resize', function(event){
  adjustImage('true');
})










/* function plusSlides(n) {
  showSlides(slideIndex += n);
} */

// Thumbnail image controls
/* function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  */



/* function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); */ // Change image every 2 seconds
//} 
