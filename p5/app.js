



// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector("#main").addEventListener("mousemove",
    throttleFunction((dets) => {
       //code to be executed written here

      

       //this creates an div
       var div = document.createElement("div");
       var img = document.createElement("img");

       img.setAttribute("src","https://images.unsplash.com/photo-1723764430241-3d20a78d9d77?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
       img.classList.add("img");
       div.appendChild(img);
       div.classList.add('imageDiv');
       div.style.left = dets.clientX + "px";
       div.style.top = dets.clientY + "px";
       document.body.appendChild(div);

       gsap.to(".img" , {
        y:"0%",
        // rotate:"-20deg",
        duration:0.8,
        ease: "power2.in",
       })

       gsap.to(".img" , {
        y:"100%",
        // rotate:"-20deg",
        delay:1,
ease: "power1.in",
       })
     

    //    this removes the div 
    setTimeout(function () {
    //   
        div.remove();
    },2000)
    }, 1000));

