const canvas = document.querySelector("canvas");
const conetxt = canvas.getContext("2d");
const frames = {
    currentIndex: 0,
    maxIndex: 1100
};

let imgLoaded = 1;
let images = [];

function preloadImages() {

    for (var i = 1; i < frames.maxIndex; i++) {
        const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpg`;
        // console.log(imageUrl);
        //wil create an image ;

        const img = new Image();
        img.src = imageUrl;
        // console.log(img);
        //when image is load this function will run
        img.onload = () => {

            imgLoaded++;
            if (imgLoaded === frames.maxIndex) {
                // console.log('all Images loaded');
                loadImage(frames.currentIndex);
                startAnimation();
            }
            images.push(img);
        }

    }
}

preloadImages();
function loadImage (index){
    if(index>=1 && index<=frames.maxIndex){
        const img = images[index];
        // console.log(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;

        const scale = Math.max(scaleX , scaleY);
        const newWidth =img.width * scale ;
        const newHeight =img.height * scale ;
        const offsetX = (
            canvas.width - newWidth 

        )/2;
        const offsetY = (
            canvas.height - newHeight 

        )/2;

        conetxt.clearRect(0,0,canvas.width , canvas.height);
        conetxt.imageSmoothingEnabled= true;
        conetxt.imageSmoothingQuality = "high"
        conetxt.drawImage(img,offsetX,offsetY , newWidth , newHeight);
        frames.currentIndex = index;

    }
}

function startAnimation(){
    var tl = gsap.timeline({
        scrollTrigger :{
            trigger : ".container",
            start : "top top",
            scrub : 2,
            markers : true
        }
    });

    tl.to(frames, {
        currentIndex:frames.maxIndex,
        onUpdate: function(){
            loadImage(Math.floor(frames.currentIndex));
        }
    })
}

