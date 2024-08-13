/*
// Change the background RGB background color by clicking the button.
* Add a button to copy The color code
*/

//Steps

 //step #1 create onload function
   window.onload = () => {
      main();
   }
   function main () {
      const root=document.getElementById('root');
      const output=document.getElementById('output');
      const changebtn=document.getElementById('change-btn');
      const copybtn=document.getElementById('copy-btn');
      
      changebtn.addEventListener('click',function(){
        const bgcolor=generateHexColor();
        root.style.backgroundColor=bgcolor;
        output.value=bgcolor;
      });
      copybtn.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value);
      });
      
   }
  
 // Step #2 Create a random Hax Function generator
 function generateHexColor(){
  //Hex #000000   , #FFFFFF
  // #255,255,255 --> #FFFFFF
  const red= Math.floor(Math.random()*255);
  const green=Math.floor(Math.random()*255);
  const blue=Math.floor(Math.random()*255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  
}


 // Step #3 collect all necessary reference collect


 // step #4 handle the Click Event