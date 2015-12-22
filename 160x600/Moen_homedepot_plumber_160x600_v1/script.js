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

function adVisibilityHandler() 
{
  startBanner();
}

startBanner();

function startBanner() 
{

var ad = document.getElementById("ad");
var frame1 = document.getElementById("frame1");
var frame2 = document.getElementById("frame2");
var cta = document.getElementById("cta");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var disclaimer = document.getElementById("disclaimer");
var letsdo = document.getElementById("letsdo");
var moenlogo = document.getElementById("moenlogo");
var hand = document.getElementById("hand");
var hand2 = document.getElementById("hand2");

var tl = new TimelineLite();
var looptimes = 1;

//frame1
function frame1ani()
{
  tl.to([hand, hand2], 0.5,{ease: Power4.easingOut, x: '-=5', y: '-=5'})
    .to(text1, 0.5,{ease: Power2.easingOut, alpha: '1'}, '-=0.2')
    .to(frame2, 0.5,{ease: Power2.easingIn, clip: 'rect(0,160px,600px,0)'}, '+=1.2')
    .to(text2, 0.5,{ease: Power2.easingOut, alpha: '1'})
    .to(text3, 0.5,{ease: Power2.easingOut, alpha: '1'})
    .to([text2, text3], 0.5,{ease: Power3.easingOut, alpha: '0'}, '+=1.2')
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 145px, 70px, 0)'})
    .to(moenlogo, 0.5,{ease: Power3.easingOut, alpha: '0'}, '-=0.9')
    .call(logoPosition)
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 0, 70px, 0)'}, '+=1.5')
    .to(img2, 1,{ease: Power4.easingOut, scale: '0.75', y: '-=40'}, '-=0.2')
    .to(moenlogo, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(text4, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(text5, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(cta, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(disclaimer, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
}

function restartdrop()
{
  drop.style.top = '0px';
}

function logoPosition()
{
  moenlogo.style.top = '277px';
  moenlogo.style.left = '14px';
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
