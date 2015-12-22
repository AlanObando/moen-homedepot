// If true, start function. If false, listen for INIT.
window.onload = function() 
{
  // if (Enabler.isInitialized()) 
  // {
  //     enablerInitHandler();
  // } 
  // else 
  // {
  //   Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  // }

// function enablerInitHandler() 
// {
//   if (Enabler.isVisible()) 
//   {
//     adVisibilityHandler();
//   } 
//   else 
//   {
//     Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
//   }
// }

// function adVisibilityHandler() 
// {
//   startBanner();
// }

startBanner();

function startBanner() 
{

var ad = document.getElementById("ad");
var frame1 = document.getElementById("frame1");
var frame2 = document.getElementById("frame2");
var cta = document.getElementById("cta");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var water = document.getElementById("water_container");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var disclaimer = document.getElementById("disclaimer");
var letsdo = document.getElementById("letsdo");
var magnetix = document.getElementById("magnetix");
var moenlogo = document.getElementById("moenlogo");
var door = document.getElementById("door");
var paper = document.getElementById("paper");

var tl = new TimelineLite();
var looptimes = 1;

//frame1
function frame1ani()
{
  tl.to(paper, 2,{ease: SlowMo.easingOut, x: '-=10', y: '+=50'})
    .to(door, 3,{ease: Power2.easingOut, x: '-10'}, '-=2')
    .to(text1, 0.5,{ease: Power2.easingOut, alpha: '1'}, '0.5')
    .to(paper, 4,{ease: Power2.easingIn, x: '+=30', y: '+=100'}, '-=1.5')

    .to(frame2, 0.5,{ease: Power2.easingIn, clip: 'rect(0,160px,600px,0)'}, '-=2')
    .to(text2, 0.5,{ease: Power2.easingOut, alpha: '1'}, '-=1')
    .to(magnetix, 1,{ease: Power2.easingOut, alpha: '1', x: '+=15'}, '-=2.1')
    .to(text3, 0.2,{ease: Power2.easingOut, alpha: '1'}, '+=0.3')
    .to(img3, 0.1,{ease: Power4.easingOut, x: '+=10', y: '-=7'})
    .to(img3, 0.1,{ease: Power4.easingOut, y: '+=1'})
    .to(img3, 0.1,{ease: Power4.easingOut, y: '-=1'})

    .to([img2, img3], 0.6,{ease: Power3.easingIn, alpha: '0'}, '+=0.5')
    .to(img4, 0.6,{ease: Power3.easingOut, alpha: '1'}, '-=0.2')
    .to([text2, text3], 0.5,{ease: Power3.easingOut, alpha: '0'}, '+=1.2')
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 145px, 70px, 0)'})
    .to(water, 0.5,{ease: Power2.easingOut, clip: 'rect(0, 286px, 80px, 0)'})
    .to([magnetix, moenlogo], 0.5,{ease: Power3.easingOut, alpha: '0'}, '-=0.9')
    .to(magnetix, 0.1,{scale: '1.16'})
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 0, 70px, 0)'}, '+=1.5')
    .to(water, 0.5,{ease: Power2.easingOut, clip: 'rect(0, 0, 80px, 0)'})
    .to(img4, 0.5,{ease: Power3.easingOut, x: '-=25', clip: 'rect(0, 160px, 190px, 0)', scale: '0.7'})
    .call(logoPosition)
    .to(moenlogo, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(magnetix, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(text4, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(text5, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(cta, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(disclaimer, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
}

function logoPosition()
{
  moenlogo.style.top = '277px';
  moenlogo.style.left = '14px';
  magnetix.style.top = '315px';
  magnetix.style.left = '3px';
}

//init
frame1ani();


//Exit function Main
function bgExitHandler(e)
{
  // Enabler.exit('Main Exit');
}

ad.addEventListener('click', bgExitHandler, false);

}//close startBanner

}//close main function
