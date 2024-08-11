// var cursor = document.querySelector("#cursor");
const lerp = (x, y, a) => x * (1 - a) + y * a;


window.addEventListener("mousemove",(det)=>{
    
gsap.to("#cursor",{
    top : det.y,
    left : det.x,
   ease: "elastic.out(1,0.3)",
})

// another way of doing the same thing 

// cursor.style.transform='translate(${det.clientX}px,${det.clientY}px)';

})


var frames = document.querySelectorAll(".frame");
frames.forEach(frame => {
    
    (function(){
    
        frame.addEventListener("mousemove",(det)=>{
            // will return frame x and y axis 
            var dims = frame.getBoundingClientRect();
            console.log(dims);
            var xstart = dims.x;
            var xend = dims.x + dims.width;
    
           var zerone =  gsap.utils.mapRange(xstart,xend,0,1,det.x);
        
         
            gsap.to("#cursor",{
                scale:6,
                duration:.2
            }) 
          
            gsap.to(frame.children,{
                color:"white",
                duration:.2,
                y: '-5vw'
            })
            gsap.to(frame.children,{
                x:lerp(-50,50,zerone),
                duration:.1
            })
        })
        
        
        frame.addEventListener("mouseleave",()=>{
            gsap.to("#cursor",{
                scale:1,
                duration:.2
            }) 
            gsap.to(".frame span",{
                color:"black",
                duration:.2,
                y:0
            })
            gsap.to(".frame span",{
                x:0,
                duration:.1
            })
        })})();

});







