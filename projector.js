var projectormode=1;
var ploopcount=2
var projectorcount2=0
var projectorbackground="black"
function makebeep(f) {
        var playnote=true
    if (playnote==true) { 
    context1 = new AudioContext()
    o = context1.createOscillator()
 frequency = f	
o.frequency.value = frequency
o.type = "sine"
g = context1.createGain()
o.connect(g)
g.connect(context1.destination)
o.start(0)
}

        return o
    
    
}

function stopbeep(o) {
        o.frequency.value=0.1
    o.volume="0"
    setTimeout(function () {o.stop()}, 50)
    
    
}
var shadows=[]
var wall1color="red"
var bordersize;
var wall2color="blue"

function setborder(pixels) {
    bordersize=pixels
    var wcolor1=getRGB(wall1color)
    var wcolor2=getRGB(wall2color)
    var pdiv=document.getElementById("projectordiv")

    pdiv.style.borderLeft=pixels + "px solid rgb(" + Math.floor(wcolor1[0] / 2) + "," + Math.floor(wcolor1[1] / 2) + "," + Math.floor(wcolor1[2] / 2) + ")"
    pdiv.style.borderTop=pixels + "px solid rgb(" + Math.floor(wcolor2[0] / 2) + "," + Math.floor(wcolor2[1] / 2) + "," + Math.floor(wcolor2[2] / 2) + ")"
    pdiv.style.width=(window.innerWidth - pixels) + "px"
    pdiv.style.height=(window.innerHeight - pixels) + "px"

    document.getElementById("projectorborder").style.borderLeft=pixels + "px solid rgb(" + Math.floor(wcolor1[0] / 2) + "," + Math.floor(wcolor1[1] / 2) + "," + Math.floor(wcolor1[2] / 2) + ")"
    document.getElementById("projectorborder").style.borderTop=pixels + "px solid rgb(" + Math.floor(wcolor2[0] / 2) + "," + Math.floor(wcolor2[1] / 2) + "," + Math.floor(wcolor2[2] / 2) + ")"
    document.getElementById("projectorborder").style.width=(window.innerWidth - pixels) + "px"
    document.getElementById("projectorborder").style.height=(window.innerHeight - pixels) + "px"
    document.getElementById("projectorborder").style.zIndex="2"
}
function projecttext(text, only=false) {
    document.getElementById("textonly").innerHTML=text
    if (only==true) {
        document.getElementById("maindiv").style.display="none"
        document.body.style.backgroundColor="black"
    }
    setTimeout(blink, 250)
    document.getElementById("textonly").parentElement.style.display="block"
    
}

function blink() {
    document.getElementById("textonly").style.color="blue"
    setTimeout(blink2, 250)
}

function blink2() {
    document.getElementById("textonly").style.color="red"
    setTimeout(blink3, 250)
}

function blink3() {
    document.getElementById("textonly").style.color="green"
    setTimeout(blink, 250)
}
function projector() {
    var pdiv=document.getElementById("projectordiv")
    pdiv.style.display="block"
    
    if (projectormode==0) {
        
        //Show the elements quickly one at a time --> colors don't blend to each other
        if (Math.floor(projectorcount2 / 2) * 2==projectorcount2) {
            //Show background
                pdiv.style.background=projectorbackground
                projectorcount2++
                pdiv.innerHTML=""
            }else{
                //Hide background, show foreground element
                pdiv.style.background="black"
            
        if (projectorcount < projectorElements.length) {
            pdiv.innerHTML=""
            //Add the elements
            for (var i=0; i < ploopcount; i++) {
                var num=projectorcount+i
                if (num < projectorElements.length) {
                    var element=projectorElements[num]
                    pdiv.appendChild(element)
                }
                var num=projectorcount-i
                if (num > -1) {
                    var element=projectorElements[num]
                    pdiv.appendChild(element)
                } 
            }
        projectorcount2++
        projectorcount++
    }else {
        projectorcount=0
        projectorcount2=0
    }}
    }else if (projectormode==1) {
        pdiv.style.background=projectorbackground
        //A SPECIAL MODE: show all the elements to at the same time --> CAUSES THE COLORS TO BLEND TO EACH OTHER
        //Delete shadows
        var allelements=pdiv.getElementsByClassName("shadow")
        for (var i=0; i <allelements.length; i++) {
            pdiv.removeChild(allelements[i])
        }

        var allelements=pdiv.getElementsByTagName("div")
        
        for (var i=0; i < projectorElements.length; i++) {
            var createnew=false
            if (allelements.length==0) {
                createnew=true
            }else if (pdiv.contains(projectorElements[i])==false) {
                createnew=true
            }
            if (createnew==true) {
                //If element doesn't exist yet
            
            projectorElements[i].style.zIndex="5"
            //Make the element visible
            pdiv.appendChild(projectorElements[i])
            
            //Calculate the background brightness
            
            }
           
            var bg=projectorElements[i].style.backgroundColor
            var brightness=getBrightness(bg)
            //Calculate the size depending on the brigthness
            var ogwidth=projectorElements[i].offsetWidth
            var ogheight=projectorElements[i].offsetHeight
            var brightness=765-brightness
            projectorElements[i].style.border="none"
            projectorElements[i].style.width=ogwidth + "px"
            projectorElements[i].style.height=ogheight + "px"
            var section=brightness / 765 
            projectorElements[i].style.width=(projectorElements[i].offsetWidth /2  + projectorElements[i].offsetWidth /4* section) +"px"
            projectorElements[i].style.height=(projectorElements[i].offsetHeight /2+projectorElements[i].offsetHeight /4* section) +"px"
            //Set the actual borders
            projectorElements[i].style.borderLeft=((ogwidth - projectorElements[i].offsetWidth)/ 2) +"px solid black"
            projectorElements[i].style.borderRight=((ogwidth - projectorElements[i].offsetWidth)) +"px solid black"
            projectorElements[i].style.borderTop=((ogheight - projectorElements[i].offsetHeight)/ 2) +"px solid black"
            projectorElements[i].style.borderBottom=((ogheight - projectorElements[i].offsetHeight)) +"px solid black"
            //alert("Original height: " + ogheight + "\nOriginal width: " +ogwidth + "\nNew height: " + projectorElements[i].offsetHeight + "\nNew width: " + projectorElements[i].offsetWidth)

            var rect = projectorElements[i].getBoundingClientRect()
            //Calculate shadow widths
            bordersizex=rect.width  / 4
            bordersizey=rect.height / 4
            //Set the shadows
            var newelement=document.createElement("div")
            newelement.style=projectorElements[i].style
            newelement.style.position="absolute"
            newelement.style.width=(bordersizex * 2 + rect.width) + "px"
            newelement.style.height=(bordersizey * 2 + rect.height) + "px"
            newelement.style.backgroundColor="black"
            newelement.style.top=(rect.top - bordersizey-bordersize) + "px"
            newelement.style.left=(rect.left - bordersizex-bordersize) + "px"
            newelement.className="shadow"
            newelement.style.zIndex="3"
            pdiv.appendChild(newelement)

            
           
        }

        //Delete "deleted" elements
        var allelements=pdiv.getElementsByTagName("div")
        var i2=0
        for (var i=0; i < allelements.length; i++) {
            //If the element is not a shadow
            if (allelements[i].className != "shadow") {
                 //If projector elements does not contain an element in projectordiv
            if (projectorElements.includes(allelements[i])==false) {
                //Delete element
                pdiv.removeChild(allelements[i])

            }
            }
           
        }
    }
    
}

function getBrightness(bg) {
    if (bg.substring(0, "rgb(".length)=="rgb(") {
        var bg=bg.substring("rgb(".length, bg.length - 1).split(",")
        var brightness=Number(bg[0]) + Number(bg[1]) +Number(bg[2])
        
    }else if (bg != undefined) {
        //Get the RGB value of the color
       var rgb=getRGB(bg)
       if (rgb==-1) {
           return -1
       }
        var brightness=rgb[0] + rgb[1] + rgb[2]
    }else{
        brightness=-1
    }

    return brightness
}

function getRGB(bg) {
    if (bg.substring(0, "rgb(".length)=="rgb(") {
        var bg=bg.substring("rgb(".length, bg.length - 1).split(",")
        return [Number(bg[0]), Number(bg[1]),Number(bg[2])]
        
    }else if (bg != undefined) {
        //Put the color in canvas
        var canvas=document.getElementById("colorcanvas")
        var ctx=canvas.getContext("2d")
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 1, 1);
        //Get the color back when canvas has the color rgb
        var imgData = ctx.getImageData(0, 0, 1, 1);
        return [Number(imgData.data[0]),  Number(imgData.data[1]), Number(imgData.data[2]) ]
    }else{
        return -1
    }
}