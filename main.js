let canvas = document.createElement('canvas')
canvas.id = "canvas"








let img = new Image(300,300);
img.crossOrigin = "anonymous"
img.src = "300x400.jpg"
img.onload = function() {
    console.log("s")
    let width = img.naturalWidth;
    let height = img.naturalHeight;

    // console.log()
    
    init({width,height});
}



let init = (data) =>{
    let w = calculateAspectRatioFit(data.width,data.height,300,300).width
    let h = calculateAspectRatioFit(data.width,data.height,300,300).height
    

    canvas.setAttribute('width',300)
    canvas.setAttribute('height',300)
    // let c = document.querySelector('#c')

    document.body.appendChild(canvas)
    
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img,0,0,300,300)

    // console.log(w,h)
    // console.log(ctx.getImageData(0,0,300,300))
}


function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }