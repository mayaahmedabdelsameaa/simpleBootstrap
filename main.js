window.addEventListener("load",()=>{
  /*
  // showing the icons
  socialImages = document.querySelectorAll(".soicalImg");
  for(let i =0;i<socialImages.length;i++){
    socialImages[i].addEventListener("mouseover",()=>{
      child = socialImages[i].nextElementSibling.childNodes;
      socialImages[i].style.opacity = "1";
    });
    socialImages[i].addEventListener("mouseleave",()=>{
      socialImages[i].nextElementSibling.style.visibility="hidden";
      socialImages[i].style.opacity = "0.5";
    });
  }
*/
  // showing the p content
  images = document.querySelectorAll(".myimage");
  for(let i =0;i<images.length;i++){
    images[i].addEventListener("mouseover",()=>{
      images[i].nextElementSibling.style.visibility="visible";
      images[i].style.opacity = "1";
    });
    images[i].addEventListener("mouseleave",()=>{
      images[i].nextElementSibling.style.visibility="hidden";
      images[i].style.opacity = "0.5";
    });
  }
});