var projectormode=0;
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
    pdiv.innerHTML=""
    if (projectormode==0) {
        //Show the elements quickly one at a time --> colors don't blend to each other
        if (projectorcount < projectorElements.length) {
        pdiv.appendChild(projectorElements[projectorcount])
        projectorcount++
    }else {
        projectorcount=0
    }
    }else{
        //A SPECIAL MODE: show all the elements to at the same time --> CAUSES THE COLORS TO BLEND TO EACH OTHER
        for (var i=0; i < projectorElements.length; i++) {
            pdiv.appendChild(projectorElements[i])
           
        }
    }
    
}