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
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var acce1 = document.getElementById("acce1");
var acce2 = document.getElementById("acce2");
var acce3 = document.getElementById("acce3");
var acce4 = document.getElementById("acce4");
var acce5 = document.getElementById("acce5");
var acce6 = document.getElementById("acce6");
var disclaimer = document.getElementById("disclaimer");
var letsdo = document.getElementById("letsdo");
var moenlogo = document.getElementById("moenlogo");

var tl = new TimelineLite();
var looptimes = 1;

//frame1
function frame1ani()
{
  tl.to(acce6, 0.1,{ease: Power2.easingOut, alpha: '1', y: '+=10'}, '+=0.4')
    .to(acce5, 0.1,{ease: Power2.easingOut, alpha: '1', y: '+=10'}, '+=0.2')
    .to(acce4, 0.1,{ease: Power2.easingOut, alpha: '1', y: '+=10'}, '+=0.1')
    .to(acce3, 0.1,{ease: Power2.easingOut, alpha: '1', y: '+=10'}, '+=0.1')
    .to(acce2, 0.1,{ease: Power2.easingOut, alpha: '1', y: '+=10'}, '+=0')
    .to(acce1, 0.1,{ease: Power2.easingOut, alpha: '1'}, '+=0')
    
    .to(text1, 0.5,{ease: Power2.easingOut, alpha: '1'}, '0.3')
    .to(frame2, 0.5,{ease: Power2.easingIn, clip: 'rect(0,160px,600px,0)'}, '+=1')
    .to(text2, 0.5,{ease: Power2.easingOut, alpha: '1'})
    .to(text3, 0.5,{ease: Power2.easingOut, alpha: '1'})
    .to([text2, text3, moenlogo], 0.5,{ease: Power3.easingOut, alpha: '0'}, '+=1.2')
    .call(logoPosition)
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 145px, 70px, 0)'})
    .to(letsdo, 0.2,{ease: Power4.easingOut, clip: 'rect(0, 0, 70px, 0)'}, '+=1.5')
    .to(img1, 0.4,{ease: Power4.easingOut, scale: '0.74',left: '32px', top: '138px'}, '-=0.2')
    .to(img2, 0.4,{ease: Power4.easingOut, scale: '0.76',left: '77px', top: '237px'}, '-=0.4')
    .to(img3, 0.4,{ease: Power4.easingOut, scale: '0.75',left: '14px', top: '206px'}, '-=0.4')
    .to(img4, 0.4,{ease: Power4.easingOut, scale: '0.75',left: '23px', top: '242px'}, '-=0.4')

    .to(moenlogo, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(text4, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(text5, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
    .to(cta, 0.3,{ease: Power2.easingOut, alpha: '1'})
    .to(disclaimer, 0.3,{ease: Power2.easingOut, alpha: '1'}, '-=0.3')
}

function logoPosition()
{
  moenlogo.style.top = '302px';
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
