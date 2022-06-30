//user
let i;
function function1()

{
    const img1=document.querySelector('#null1');
    img1.src="stone.jpg";
}
function function2()
{
     const img1=document.querySelector('#null1');
    img1.src="paper.jpg";
  
}
function function3()
{
 const img1=document.querySelector('#null1');
    img1.src="scissor.jpg";
   
}
// cpu random

const computer=['stone','paper', 'scissor'];
var random=Math.floor(Math.random() * 3);
console.log(random);
function function5()
{
    const img2=document.querySelector("#null");
    if(random==1)
    {
        img2.src="stone.jpg";
    }

}
function5();
    //  const img2=document.querySelector('#null');
    //  img2.src="stone.jpg";
    

// if(random==1)
// {
//      const img2=document.querySelector('#null');
//      img2.src="paper.jpg";
    
// }
// if(random==2)
// {
//      const img2=document.querySelector('#null');
//      img2.src="scissor.jpg";
    
// }

//music
const music = new Audio('drank water.mp3');
music.loop =false;
music.playbackRate = 1;

a=addEventListener('click' ,function()
{
 console.log("access");
 music.play();
})


