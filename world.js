function loadplace(name) {
    if (name=="beach") {
        //document.getElementById("sky").style.display="block"
        //devminal("createElement{width: 100%;height: 100%; bg-color: lightblue; text-color: white; id: sky;}")
    }
    if (name=="ship1") {
        projectorbackground="white"
        var newelement=document.createElement("div")
        newelement.style.background="blue"
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
    newelement.className="laserdoor"
    newelement.style.animation="1.5s ldopen"
    newelement.style.top="0px"
    newelement.style.left=((window.innerWidth - 350) /2) + "px"
    projectorElements.push(newelement)
    if (name=="main") {
        
    }
}