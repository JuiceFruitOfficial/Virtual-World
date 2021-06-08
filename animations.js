var riding="false"
function ride(num, automated=false) {
    riding=[num,automated]
    document.getElementById("player").style.display="none"
    loadcharacter({},gameobjects[num])
    gameobjects[num].getElementsByClassName("player") [gameobjects[num].getElementsByClassName("player").length-1].setAttribute("id","fakeplayer")
}

function guidePanel(text) {
    document.getElementById("guidePanel").style.display="block"
    document.getElementById("guidePanel").innerHTML=text
}
function bulletanimation() {
            
            
    if (playerrotate==2) {
        document.getElementsByClassName("bullet")[0].style.top=Math.floor(document.getElementsByClassName("bullet")[0].offsetTop + 20) + "px"
    if (document.getElementsByClassName("bullet")[0].offsetTop > window.innerHeight + 100) {
        recharching=false
    }
    }
    if (playerrotate==1) {
        document.getElementsByClassName("bullet")[0].style.left=Math.floor(document.getElementsByClassName("bullet")[0].offsetLeft + 20) + "px"
    if (document.getElementsByClassName("bullet")[0].offsetLeft > window.innerWidth + 100) {
        
        recharching=false
    }
    }
    if (playerrotate==0) {
        document.getElementsByClassName("bullet")[0].style.top=Math.floor(document.getElementsByClassName("bullet")[0].offsetTop - 20) + "px"
    if (document.getElementsByClassName("bullet")[0].offsetTop <  - 100) {
        
        recharching=false
    }
    }
    if (playerrotate==3) {
        document.getElementsByClassName("bullet")[0].style.left=Math.floor(document.getElementsByClassName("bullet")[0].offsetLeft - 20) + "px"
    if (document.getElementsByClassName("bullet")[0].offsetLeft < -100) {
        
        recharching=false
    }
    }
    for (var i2=0; gameobjects.length > i2; i2++) {
        if (gameobjects[i2].className.includes("floor") ==false) {
        if (gameobjects[i2].offsetLeft > document.getElementsByClassName("bullet")[0].offsetLeft-gameobjects[i2].offsetWidth - 10) {
            if (gameobjects[i2].offsetLeft < document.getElementsByClassName("bullet")[0].offsetLeft + gameobjects[i2].offsetWidth + 10) {
                if (gameobjects[i2].offsetTop > document.getElementsByClassName("bullet")[0].offsetTop - gameobjects[i2].offsetHeight - 10) {
                    if (gameobjects[i2].offsetTop < document.getElementsByClassName("bullet")[0].offsetTop + gameobjects[i2].offsetHeight + 10) {
                            //recharching=false
                            //alert(Number(gameobjects[i2].getAttribute("health"))-50)
                            if (unloaded[i2] [2]==playery) {
                            if (Number(gameobjects[i2].getAttribute("health"))-50 > 0) {
                                 gameobjects[i2].setAttribute("health", Number(gameobjects[i2].getAttribute("health"))-50)
                            }else{
                                removegameobject(i2, true)
                            }
                           i2=gameobjects.length+1
                            recharching=false
                            }
        }
        }
        }}
        }
    }
    if (recharching==false) {
        clearInterval(interval)
        for (var i2=0; i2 < document.getElementsByClassName("bullet").length;) {
            document.getElementsByClassName("bullet")[i2].parentElement.removeChild(document.getElementsByClassName("bullet")[i2])
        }
        
    }
}

function shoot() {
    if (recharching==false) {
        recharching=true
    var newelement=document.createElement("div")
    newelement.className="bullet"
    
    if (playerrotate==0) {
        newelement.style.bottom="55%"
        newelement.style.left="50%"
        newelement.style.transform="translateX(-50%)"
    }
    if (playerrotate==1) {
        newelement.style.top="55%"
        newelement.style.left="55%"
        newelement.style.transform="translateY(-50%)"
    }
    if (playerrotate==2) {
        newelement.style.top="55%"
        newelement.style.left="50%"
        newelement.style.transform="translateX(-50%)"
    }
    if (playerrotate==3) {
        newelement.style.transform="translateY(-50%)"
        newelement.style.top="55%"
        newelement.style.right="55%"
    }
    document.body.appendChild(newelement)
    //Animation for the bullet 
    clearInterval(interval)
    interval=setInterval(bulletanimation, 25)
    
    }
    
}
var taxi=""
function taximode(e) {
    var x2=playerx
    var y2=playery
    var z2=playerz
    
    if (localStorage.playersector=="startIsland") {
        textbox("TAXI","Do you want to go to the tutorial island or to The InfinityHotel?",20,"To the tutorial island", "taxiTo(0,0,0,'tutorialisland')","To The InfinityHotel", "taxiTo(-4000,0,0,'startIsland')")
    }
    loadplace("taxi")
}

function taxiTo(x, y, z, name) {
    var last=lastsector
    var x2=previousx
    var y2=previousy
    var z2=previousz
    loadplace(lastsector)
    movegame(x2*-1,y2,z2*-1)

    var distance=Math.abs(x2-x)+Math.abs(z2-z)+Math.abs((y2-y)*10)
    var time=Math.floor(distance/50 * 1000)
    alert("The trip will take: " + Math.round(time/1000) + " seconds")
    setTimeout(function (x,y,z,name){
        loadplace(name)
        movegame(x*-1,y,z*-1)
        creategameobject("taxi arrive", 0,0,900,"",0)
    }, time,x,y,z,name)
}

