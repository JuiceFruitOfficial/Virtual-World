var projectorloop;
var userrotate=0
var userx=0
var usery=0
var userz=0
function scan3dspace() {
    document.getElementById("target1").style.display="none"
    document.getElementById("target2").style.display="none"
    document.getElementById("videoElement").style.visibility="hidden"
    try {
        var test1=makebeep(500)
        setTimeout(stopbeep, 3000, test1)
    }
    finally {
         trackhands()
    
    setTimeout(loadplace, 6000, "ship1")
    projectorloop=setInterval(projector, 100)
    //setTimeout(playaudio, 6000, "welcomeroom.m4a")
    }
    
   
}

function trackhands(range=50) {
    var rightcanvas=document.getElementById("righthand")
    var leftcanvas=document.getElementById("lefthand")
    var lctx=leftcanvas.getContext("2d")
    var rctx=rightcanvas.getContext("2d")

    var bcanvas=document.getElementById("bgcanvas")
    var bctx=bcanvas.getContext("2d")

    //hand tracking
    leftcanvas.style.display="block"
    rightcanvas.style.display="block"
    //Remove background
    var imgdatal=lctx.getImageData(0,0,150,150)
    var imgdatar=rctx.getImageData(0,0,150,150)
    var imgdatab1=bctx.getImageData(document.getElementById("bgcanvas").offsetWidth / 4-150,document.getElementById("bgcanvas").offsetHeight / 2 - 160,150,150)
    var imgdatab2=bctx.getImageData(document.getElementById("bgcanvas").offsetWidth / 4 * 3, document.getElementById("bgcanvas").offsetHeight / 2 - 160, 150, 150)
    for (var i=0; i < imgdatab2.data.length; i+=4) {
        var removepixell=0
        var removepixelr=0
        var num=i
        if (imgdatab1.data[num] - imgdatal.data[num] <= range) {
            if (imgdatab1.data[num] - imgdatal.data[num] >= range*-1) {
                removepixell++
            }
        }
        var num=i+1
        if (imgdatab1.data[num] - imgdatal.data[num] <= range) {
            if (imgdatab1.data[num] - imgdatal.data[num] >= range*-1) {
                removepixell++
            }
        }
        var num=i+2
        if (imgdatab1.data[num] - imgdatal.data[num] <= range) {
            if (imgdatab1.data[num] - imgdatal.data[num] >= range*-1) {
                removepixell++
            }
        }
        var num=i
        if (imgdatab2.data[num] - imgdatar.data[num] <= range) {
            if (imgdatab2.data[num] - imgdatar.data[num] >= range*-1) {
                removepixelr++
            }
        }
        var num=i+1
        if (imgdatab2.data[num] - imgdatar.data[num] <= range) {
            if (imgdatab2.data[num] - imgdatar.data[num] >= range*-1) {
                removepixelr++
            }
        }
        var num=i+2
        if (imgdatab2.data[num] - imgdatar.data[num] <= range) {
            if (imgdatab2.data[num] - imgdatar.data[num] >= range*-1) {
                removepixelr++
            }
        }

        if (removepixell > 0) {
            //remove pixel from the lefthand canvas
            imgdatal.data[i]=255
            imgdatal.data[i+1]=0
            imgdatal.data[i+2]=0
            imgdatal.data[i+3]=255
            lctx.putImageData(imgdatal,0,0)
        }
        if (removepixelr > 0) {
            //remove pixel from the righthand canvas
            imgdatar.data[i]=255
            imgdatar.data[i+1]=0
            imgdatar.data[i+2]=0
            imgdatar.data[i+3]=255
            rctx.putImageData(imgdatar,0,0)
        }
    }
    //get hand color
    //test if moves
    //Get direction and speed
    //set hand coordinates to that point
}