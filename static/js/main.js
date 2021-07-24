
var elem = document.getElementById("opning");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const colors_1 = ['#4070F4','#FF5E0E','#32CD32','#2196F3','#0E304B','#B4BACA','#00778B']; 
const colors_2 = ['#0E2431', '#333','#003100','#105372','#FDD003','#000000','#000000']; 

// Get the modal
var modal = document.getElementById("workModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function reply_click(clicked_id)
  {
  var img = document.getElementById(clicked_id);
  var modalImg = document.getElementById("workImg");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;



}



var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  setTimeout(function(){
   loader.classList.add("disppear"); 
}, 4000);
 
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 



window.onload = function() {
    setInterval(function(){
      var randomNumber = Math.floor(Math.random()*colors_1.length);
      console.log(randomNumber)
      document.documentElement.style.setProperty("--first-color", `${colors_1[randomNumber]}`);
      document.documentElement.style.setProperty("--second-color", `${colors_2[randomNumber]}`);
    }, 2000);
   

}



// Make the DIV element draggable:
dragElement(document.getElementById("profile"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "pic")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "pic").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


let scrollerID;
let paused = true;
let speed = 1; // 1 - Fast | 2 - Medium | 3 - Slow
let interval = speed * 5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{
    if (event.which == 17 || event.keyCode == 17) {
        // It's the 'Enter' key
        if(paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

setTimeout(function(){

  /*SCROLL HOME*/
  sr.reveal('.home__title',{}); 
  sr.reveal('.button',{delay: 200}); 
  sr.reveal('.home__img',{delay: 400}); 
  sr.reveal('.home__social-icon',{ interval: 200}); 

  /*SCROLL ABOUT*/
  sr.reveal('.about__img',{}); 
  sr.reveal('.about__subtitle',{delay: 400}); 
  sr.reveal('.about__text',{delay: 400}); 

  /*SCROLL SKILLS*/
  sr.reveal('.skills__subtitle',{}); 
  sr.reveal('.skills__text',{}); 
  sr.reveal('.skills__data',{interval: 200}); 
  sr.reveal('.skills__img',{delay: 600});

  /*SCROLL WORK*/
  sr.reveal('.Works',{interval: 200}); 

  /*SCROLL CONTACT*/
  sr.reveal('.contact__input',{interval: 200}); 


}, 3500);

