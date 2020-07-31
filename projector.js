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
var wall1color="red"
var bordersize;
var wall2color="blue"

function setborder(pixels) {
    bordersize=pixels
    var pdiv=document.getElementById("projectordiv")
    pdiv.style.borderLeft=pixels + "px solid " + wall2color
    pdiv.style.borderTop=pixels + "px solid " + wall1color
    pdiv.style.width=(window.innerWidth - pixels) + "px"
    pdiv.style.height=(window.innerHeight - pixels) + "px"

    document.getElementById("projectorborder").style.borderLeft=pixels + "px solid " + wall2color
    document.getElementById("projectorborder").style.borderTop=pixels + "px solid " + wall1color
    document.getElementById("projectorborder").style.width=(window.innerWidth - pixels) + "px"
    document.getElementById("projectorborder").style.height=(window.innerHeight - pixels) + "px"
    document.getElementById("projectorborder").style.zIndex="4"
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
        pdiv.innerHTML=""
        pdiv.style.background=projectorbackground
        //A SPECIAL MODE: show all the elements to at the same time --> CAUSES THE COLORS TO BLEND TO EACH OTHER
        for (var i=0; i < projectorElements.length; i++) {
            projectorElements[i].style.zIndex="5"
            //Make the element visible
            pdiv.appendChild(projectorElements[i])
            
            //Calculate the background brightness
            var bg=projectorElements[i].style.backgroundColor
            if (bg.substring(0, "rgb(".length)=="rgb(") {
                var bg=bg.substring("rgb(".length, bg.length - 1).split(",")
                var brightness=Number(bg[0]) + Number(bg[1]) +Number(bg[2])
                
            }else{
                //Get the color

                var brightness=255
            }
            //Calculate border widths
            bordersizex=projectorElements[i].offsetWidth  / 2
            bordersizey=projectorElements[i].offsetHeight / 2
            //Set the borders
            var newelement=document.createElement("div")
            newelement.style.position="absolute"
            newelement.style.width=(bordersizex * 2 + projectorElements[i].offsetWidth) + "px"
            newelement.style.height=(bordersizey * 2 + projectorElements[i].offsetHeight) + "px"
            newelement.style.backgroundColor="black"
            newelement.style.top=(projectorElements[i].offsetTop - bordersizey) + "px"
            newelement.style.left=(projectorElements[i].offsetLeft - bordersizex) + "px"
            newelement.style.zIndex="3"
            pdiv.appendChild(newelement)
            

            
           
        }
    }
    
}