function loadplace(name) {
    projectorElements=[]
    if (name=="beach") {
        //document.getElementById("sky").style.display="block"
        //devminal("createElement{width: 100%;height: 100%; bg-color: lightblue; text-color: white; id: sky;}")
    }
    if (name=="ship1") {
        projectorbackground="white"
        var newelement=document.createElement("div")
        newelement.style.backgroundColor="rgb(0,0,255)"
        newelement.style.width="400px"
        newelement.style.height="400px"
        newelement.style.position="absolute"
        newelement.style.top="100px"
        newelement.style.left="50px"
        newelement.style.borderRadius="50%"
        projectorElements.push(newelement)
        setTimeout(enterisland, 10000, "main")
    }
    if (name=="ownroom") {
        projectorbackground="linear-gradient(180deg, rgba(250,116,116,1) 0%, rgba(255,173,0,1) 100%)"
        var newelement=document.createElement("div")
        newelement.style.background="brown"
        newelement.style.width="200px"
        newelement.style.height="300px"
        newelement.style.position="absolute"
        newelement.style.top="0px"
        newelement.style.left="500px"
        projectorElements.push(newelement)
    }
    if (name=="projectortest") {
        devminal("createElement{width: 10%; height: 100%; bg-color: blue; text-color: white; id: sky; top: 0; left: 0;}")
        devminal("createElement{width: 10%; height: 100%; bg-color: red; text-color: white; id: sky; top: 0; right: 0;}")
        devminal("createElement{width: 50%; height: 50%; bg-color: green; text-color: white; id: sky; top: 25%; left: 25%;}")
    }
}

function enterisland(name) {
    var newelement=document.createElement("div")
    newelement.style.width="100vw"
    newelement.style.height="100vh"
    newelement.style.top="-"+bordersize+"px"
    newelement.style.left="-"+bordersize+"px"
    newelement.style.position="absolute"
    newelement.style.backgroundColor="lightblue"
    projectorElements.push(newelement)
    animate(newelement, "fadeIn", 3000)
    if (name=="main") {
        setTimeout(function (){
            loadplace("terminal")
        var newelement=document.createElement("div")
    newelement.style.width="100vw"
    newelement.style.height="100vh"
    newelement.style.top="-"+bordersize+"px"
    newelement.style.left="-"+bordersize+"px"
    newelement.style.position="absolute"
    newelement.style.backgroundColor="lightblue"
    projectorElements.push(newelement)
    animate(newelement, "fadeOut", 3000)
    setTimeout(loadterminal, 4000)
        }, 3000);
        
    }
}

function loadterminal() {
    projectorbackground="black"
    projectorElements=[]
    var newelement=document.createElement("div")
    newelement.style.width="150px"
    newelement.style.height=bordersize+"px"
    newelement.style.top="-"+bordersize+"px"
    newelement.style.left="75px"
    newelement.style.position="absolute"
    newelement.style.backgroundColor="blue"
    projectorElements.push(newelement)
    var newelement=document.createElement("div")
    newelement.style.width="150px"
    newelement.style.height=bordersize+"px"
    newelement.style.top="-"+bordersize+"px"
    newelement.style.right="75px"
    newelement.style.position="absolute"
    newelement.style.backgroundColor="blue"
    projectorElements.push(newelement)
    var newelement=document.createElement("div")
    newelement.style.width=(window.innerWidth-bordersize - 225 - 225) + "px"
    newelement.style.height="30px"
    newelement.style.top="-"+(bordersize/2-15)+"px"
    newelement.style.left="225px"
    newelement.style.position="absolute"
    newelement.style.backgroundColor="#7FFF00"
    newelement.style.animation="1s scan1 infinite"
    projectorElements.push(newelement)
    playaudio("terminal.m4a")
    setTimeout(playaudio, 15000, "freestuff.m4a")
}

function enterworld() {
    
    //document.getElementById("testdiv").style.display="block"
    //playaudio("Calibration.m4a")
    document.getElementById("projectorborder").style.display="block"
    projectorloop=setInterval(projector, 50)
    document.getElementById("videoElement").play()
    document.getElementById("allowmedia").style.display="none"
    if (localStorage.playerx) {

    }else{
        localStorage.playerx=0
    }
    if (localStorage.playery) {

    }else{
        localStorage.playery=1
    }
    if (localStorage.playerz) {

    }else{
        localStorage.playerz=0
    }
    if (localStorage.playerrotatex) {

    }else{
        localStorage.playerrotatex=0
    }
    if (localStorage.playerrotatey) {

    }else{
        localStorage.playerrotatey=0
    }
    if (localStorage.playersector) {

    }else{
        localStorage.playersector="ship1"
        
    }

    //Check player last position

    loadplace(localStorage.playersector)
    
}