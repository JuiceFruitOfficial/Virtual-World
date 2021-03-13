//World Generating seed
var seed="98568743288504956029185542034005723043729545182752809014029663721875775500753957761047337606958620170488581681745148548125225"
var allowbuild=true
var lastsector=""
var chunkLoading=true
function loadplace(name) {
    lastsector=localStorage.playersector
    localStorage.playersector=name
    placeonchunck=[0,0,0]
    previousx=playerx
    previousy=playery
    previousz=playerz
    localStorage.playerx=0
    localStorage.playery=0
    localStorage.playerz=0
    playerx=playery=playerz=0
    projectorElements=[]
    gameobjects=[]
    unloaded=[]
    document.getElementById("gamearea").innerHTML=""
    if (name=="magicPortal") {
        document.getElementById("gamearea").style.backgroundColor="#000099"
        var f=function (f) {
            if (playermove > 700) {
                creategameobject("boat1",-400,Math.floor(window.innerHeight /3),400,"wood",0,false)
                movegameobject(gameobjects.length-1,500,0,0,true,3)
            }else{
                setTimeout(f,100,f)
            }
           
        }
        setTimeout(f,100,f)
        creategameobject("pier1",-2000,500,9999,"wood",0,true)
        creategameobject("basefloor",-3000,500,9999,"wood",0,true)
        creategameobject("basefloor",-4000,500,9999,"wood",0,true)
        creategameobject("basefloor",-4000,-400,9999,"wood",0,true)
        creategameobject("basefloor",-3000,-400,9999,"wood",0,true)
        creategameobject("brickwall",-2400,100,9999,"brick",0,true)
        creategameobject("brickwall",-2800,100,9999,"brick",0,true)
        creategameobject("brickwall",-2400,550,9999,"brick",0,true)
        creategameobject("brickwall",-2800,550,9999,"brick",0,true)
        creategameobject("brickwall2",-2050,600,9999,"brick",0,true)
        creategameobject("brickwall2",-2800,-700,9999,"brick",0,true)
        creategameobject("brickwall",-3200,-700,9999,"brick",0,true)
        creategameobject("brickwall",-3600,-700,9999,"brick",0,true)
        creategameobject("brickwall",-4000,-700,9999,"brick",0,true)
        creategameobject("brickwall2",-4000,-650,9999,"brick",0,true)
        creategameobject("brickwall2",-4000,-250,9999,"brick",0,true)
        creategameobject("brickwall2",-4000,150,9999,"brick",0,true)
        creategameobject("brickwall2",-4000,550,9999,"brick",0,true)
        creategameobject("brickwall",-3950,550,9999,"brick",0,true)
        creategameobject("soldier",-3700,-500,9999,"brick",0,true)
        creategameobject("soldier",-3200,-500,9999,"brick",0,true)
        creategameobject("portal active",-3550,-600,9999,"stone",0,true)
        gameobjects[gameobjects.length-1].setAttribute("onplayerin" , "textbox('Portal','This portal takes you to the main island. Do you want to enter it?', 100, 'Enter','loadplace(\\\'startIsland\\\');document.getElementById(\\\'textbox\\\').style.display=\\\'none\\\'','Cancel','')")
    }else if (name=="spawn") {
        rwg(0,0,0, 100)
        textbox("Security", "Hello! We couldn't find your JuiceFruit passport information... Are you a new user?", 0, "Yes",function() {loadWebsite("site:juicefruit.jf/login.html[newuser=1]")},"No",function () {loadWebsite("site:juicefruit.jf/login.html[newuser=0]")})
        
    }else if (name=="ownroom") {
        chunkLoading=false
        playaudio("welcomeroom.m4a")
        
    }else if (name=="SkyCityShop") {
        chunkLoading=false
        
    }else if (name=="startIsland") {
        allowbulding=false
        movegame(0,0,0)
        
        
        document.getElementById("gamearea").style.backgroundColor="#1dd117"
        creategameobject("portal active",-150,-300,9999,"stone",0,true)
        gameobjects[gameobjects.length-1].setAttribute("onplayerin" , "loadplace('magicPortal')")
        creategameobject("sandroad floor", -90, 0,9,"",0,false )
        creategameobject("sandroad floor", -90, 180,9,"",0,false )
        creategameobject("sandroad floor", -90, 360,9,"",0,false )
        creategameobject("sandroad floor", -90, 540,9,"",0,false )
        creategameobject("sandroad floor", -90, 720,9,"",0,false )

        creategameobject("brickwall",-510,540,9999,"brick",0,true)
        creategameobject("brickwall",110,540,9999,"brick",0,true)
        creategameobject("brickwall2",-510,590,9999,"brick",0,true)
        creategameobject("brickwall2",460,590,9999,"brick",0,true)

        creategameobject("sand floor", -90, 900,9,"",0,false )
        creategameobject("sand floor", -270, 900,9,"",0,false )
        creategameobject("sand floor", 90, 900,9,"",0,false )
        creategameobject("sand floor", -450, 900,9,"",0,false )
        creategameobject("sand floor", 270, 900,9,"",0,false )

        creategameobject("sand floor", -90, 1080,9,"",0,false )
        creategameobject("sand floor", -270, 1080,9,"",0,false )
        creategameobject("sand floor", 90, 1080,9,"",0,false )
        creategameobject("sand floor", -450, 1080,9,"",0,false )
        creategameobject("sand floor", 270, 1080,9,"",0,false )

        creategameobject("sand floor", -90, 1260,9,"",0,false )
        creategameobject("sand floor", -270, 1260,9,"",0,false )
        creategameobject("sand floor", 90, 1260,9,"",0,false )
        creategameobject("sand floor", -450, 1260,9,"",0,false )
        creategameobject("sand floor", 270, 1260,9,"",0,false )

        creategameobject("sand floor", -90, 1440,9,"",0,false )
        creategameobject("sand floor", -270, 1440,9,"",0,false )
        creategameobject("sand floor", 90, 1440,9,"",0,false )
        creategameobject("sand floor", -450, 1440,9,"",0,false )
        creategameobject("sand floor", 270, 1440,9,"",0,false )

        creategameobject("brickwall2",-510,990,9999,"brick",0,true)
        creategameobject("brickwall2",460,990,9999,"brick",0,true)

        creategameobject("road1 floor", -200, 1620,9,"",0,false)

        creategameobject("taxi", 90, 1080,9,"",0,false )
        gameobjects[gameobjects.length-1].setAttribute("onplayerin" , "taximode()")

    }else if (name=="taxi") {
        buildings=false
        document.getElementById("gamearea").style.backgroundColor="gray"
        creategameobject("basefloor",-500,-500,9999,"wood",0,true)
        creategameobject("brickwall",-500,-800,9999,"brick",0,true)
        creategameobject("brickwall",-100,-800,9999,"brick",0,true)
        creategameobject("brickwall",300,-800,9999,"brick",0,true)
        gameobjects[gameobjects.length-1].style.width="200px"

        creategameobject("wallscreen",-150,-650,9999,"brick",0,true)

        creategameobject("brickwall2",-500,-750,9999,"brick",0,true)
        creategameobject("brickwall2",-500,-350,9999,"brick",0,true)
        creategameobject("brickwall2",450,-750,9999,"brick",0,true)
        creategameobject("brickwall2",450,-350,9999,"brick",0,true)
        
        creategameobject("brickwall",-500, 50,9999,"brick",0,true)
        creategameobject("brickwall",100, 50,9999,"brick",0,true)
    }else if (name=="tutorialisland") {
        document.getElementById("gamearea").style.backgroundColor="blue"
        creategameobject("grass1 floor",-1000,-1000,9999,"stone",0,true)
        creategameobject("grass1 floor",-1000,0,9999,"stone",0,true)
        creategameobject("grass1 floor",0,-1000,9999,"stone",0,true)
        creategameobject("grass1 floor",0,0,9999,"stone",0,true)
        creategameobject("tree",290,-300,50,"wood,wood,wood,wood,wood",0,true)
        creategameobject("tree",-300,-300,50,"wood,wood,wood,wood,wood",0,true)
        creategameobject("grass",50,0,50,"wood,wood,wood,wood,wood",0,true)
        creategameobject("rock",50,0,-50,"stone,stone,stone,stone",0,true)
    }
    movegame(0,0,0)
}
function removegameobject(num, loot) {
            
    unloaded.splice(num, 1)
    if (gameobjects[num].hasAttribute("loot")) {
        var lootdata=gameobjects[num].getAttribute("loot")
    if (loot==true) {
        var lootdata=lootdata.split(",")
        for (var i2=0; i2 < lootdata.length; i2++) {
            creategameobject("loot " + lootdata[i2],gameobjects[num].offsetLeft-window.innerWidth/2 + i2 * 30,gameobjects[num].offsetTop-window.innerHeight /2 + i2 * 30,0,lootdata[i2])
            //unloaded.push([playerx + gameobjects[num].offsetTop + i2 * 30, playerz + gameobjects[num].offsetLeft + i2 * 30])
            document.getElementById("gamearea").getElementsByClassName("loot") [document.getElementById("gamearea").getElementsByClassName("loot").length-1].style.animationDelay=i2 * 0.5 + "s"
}
    }
    }
    
    document.getElementById("gamearea").removeChild(gameobjects[num])
    gameobjects.splice(num, 1)
    i=i-1
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


var scene2=lightSource2=playworld=editor2=""
function enterworld() {
    document.getElementById("rightleg").style.animationIterationCount="0"
    document.getElementById("leftleg").style.animationIterationCount="0"
    document.getElementById("usernameinfo").innerHTML=username
    document.getElementById("gamearea").style.display="block"
    //document.getElementById("testdiv").style.display="block"
    //playaudio("Calibration.m4a")
    //document.getElementById("projectorborder").style.display="block"
    //projectorloop=setInterval(projector, 50)
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
        localStorage.playersector="magicPortal"
        
    }

    //Check player last position

    loadplace(localStorage.playersector)
    
}
var playing=false
//Load world system
function startplaying() {
    var hotbars=document.getElementById("hotbar").getElementsByTagName("div") 
hotbars [0].style.backgroundColor="rgba(255, 225, 255, 0.75)"
    document.getElementById("world").style.display="block"
    //document.getElementById("worlddiv").requestPointerLock()
    playing=true
    updatehotbar()
    enterworld()
}

function enterplace(x,y,z) {
    document.getElementById("fade").style.display="block"
    setTimeout(movegame, 1000, x, y, z)
    enterplace="false"
    
    setTimeout(function () {document.getElementById("fade").style.display="none"}, 2000)
}
var playermove=0
function movegame(x, z, y) {
    //Z is really Y cordinate of the player and Y is really the Z cordinate
    var rearrange=[]
    enterplace="false"
    document.getElementById("enterplace").style.display="none"
    
    playerx-=x
    playerz-=y
    playery+=z
    playermove+=Math.abs(x)+Math.abs(y)+Math.abs(z)
    document.getElementById("position1").innerHTML="X:"+playerx+" Y:"+playery+" Z:"+playerz
    document.getElementById("compass1").innerHTML="Chunk:"+((playerx) / window.innerWidth).toFixed(0) + "," + ((playerz) / window.innerHeight).toFixed(0)
    var allowmove=true;
    if (z != 0) {
        //Change background to match player's height in the world
        if (playery==-1) {
            document.getElementById("gamearea").style.backgroundColor="darkgray"
            document.getElementById("dark").style.display="block"
        }
        if (playery==0) {
            document.getElementById("gamearea").style.backgroundColor="lime"
            document.getElementById("dark").style.display="none"
        }
}
    //Scan if you can move in that direction
    if (z==0) {
            if (playery==-1) {
                var allowmove=false
                 //console.log((Math.floor((playerx + window.innerWidth / 2) / 200 ) * 200 )+ ":" + (Math.floor((playerz  + window.innerHeight / 2) / 200) * 200))
                     if (playerrotate==0) {
                         var xadd=0
                         var yadd=(-100)
                     }
                     if (playerrotate==3) {
                         var xadd=0
                         var yadd=(100)
                     }
                     if (playerrotate==1) {
                         var yadd=0
                         var xadd=(-100)
                     }if (playerrotate==2) {
                         var yadd=0
                         var xadd=(100)
                     }
                     for (var i=0; i <unfloored2.length; i++) {
                         if (unfloored2[i].offsetTop + 200> window.innerHeight/2-yadd-200) {
                             
                            if (unfloored2[i].offsetTop  < window.innerHeight/2+yadd+200) {
                                
                                if (unfloored2[i].offsetLeft+ 200> window.innerWidth/2-xadd-200) {
                                    
                            if (unfloored2[i].offsetLeft  < window.innerWidth/2+xadd+200) {
                                
                                var allowmove=true
                                i=unfloored2.length
                            } 
                         }
                            } 
                         }
                     }
                 }
                    
    }       
                
        
    

    //Actually move the game 
    if (allowmove==true) {
    for (i=0; i < gameobjects.length; i++) {
        if (unloaded[i] [0] > playerx + window.innerWidth + gameobjects[i].offsetWidth + 500) {
            gameobjects[i].style.visibility="hidden"
            //console.log(1)
        }else if (unloaded[i] [1] > playerz + window.innerHeight +  gameobjects[i].offsetHeight) {
            //console.log(2)
            gameobjects[i].style.visibility="hidden"
        }else if (unloaded[i] [0] < playerx - gameobjects[i].offsetWidth - window.innerWidth) {
            //console.log(3)
            gameobjects[i].style.visibility="hidden"
        }else if (unloaded[i] [1] < playerz -gameobjects[i].offsetHeight - window.innerHeight) {
            gameobjects[i].style.visibility="hidden"
            //console.log(4)
        }else{
        if (z !=0) {
            gameobjects[i].style.visibility="hidden"
        }
        /*document.getElementById("obx").innerHTML="Object X:"+unloaded [i] [0]
        document.getElementById("oby").innerHTML="Object Y:"+unloaded[i] [1]
        document.getElementById("obleft").innerHTML="Object Left:"+gameobjects[i].offsetLeft
        document.getElementById("obtop").innerHTML="Object Top:"+gameobjects[i].offsetTop
        document.getElementById("display").innerHTML=gameobjects[i].style.display

        */
        
        if (gameobjects[i].style.visibility !="hidden") {
            gameobjects[i].style.top=(gameobjects[i].offsetTop + y )+ "px"
        gameobjects[i].style.left=(gameobjects[i].offsetLeft + x) + "px"
        gameobjects[i].style.visibility="visible"
        //Unload stuff
        var unload=false
            if (gameobjects[i].offsetTop > window.innerHeight *1.5) {
                
           unload=true
        }else if (gameobjects[i].offsetLeft > window.innerWidth *1.5) {
            
            unload=true
        }else if (gameobjects[i].offsetTop + gameobjects[i].offsetHeight <0- window.innerHeight * 1.5) {
            
            unload=true
        }else if (gameobjects[i].offsetLeft + gameobjects[i].offsetWidth < 0-window.innerWidth * 1.5) {
            
            unload=true
        }else if (unloaded[i] [2] != playery) {
            
            gameobjects[i].style.top=(0 - gameobjects[i].offsetHeight - 200) + "px"
            gameobjects[i].style.left=(0 - gameobjects[i].offsetWidth - 200) + "px"
            unload=true
        }
        if (unload==true) {
            
            //unloaded[i]=[playerx + gameobjects[i].offsetLeft, playerz + gameobjects[i].offsetTop ]
            gameobjects[i].style.visibility="hidden"
        }else{
            if (gameobjects[i].className.includes("floor")==false){
                if (gameobjects[i].offsetTop + gameobjects[i].offsetHeight > window.innerHeight /2 + 175) {
                gameobjects[i].style.zIndex="6" 
            }else{
                gameobjects[i].style.zIndex="4"
                
            }
            rearrange.push([gameobjects[i].offsetTop, gameobjects[i]])
            }
            
            //Scan enemies
        if (gameobjects[i].className=="stonespirit") {
            //Stone spirits
            if (gameobjects[i].offsetLeft > window.innerWidth / 5) {
                if (gameobjects[i].offsetLeft < window.innerWidth / 5 * 4) {
                    if (gameobjects[i].offsetTop > window.innerHeight / 5) {
                        if (gameobjects[i].offsetTop < window.innerHeight / 5*4) {
                            //If Stone spirit sees the player
                            if (stonespiritreload==0) {
                                stonespiritreload=3
                                creategameobject("stone",gameobjects[i].offsetLeft,gameobjects[i].offsetTop - 50, 0, "stone")
                                creategameobject("emerald",gameobjects[i].offsetLeft,gameobjects[i].offsetTop - 100, 0, "emerald")
                                creategameobject("stone",gameobjects[i].offsetLeft,gameobjects[i].offsetTop - 150, 0, "stone")
                            
                            if (gameobjects[i].offsetLeft > window.innerWidth / 2) {
                                animationlist.push([document.getElementsByClassName("stone") [1], "toLeft", 20, "offscreen","damage:10"])
                            animationlist.push([document.getElementsByClassName("emerald") [0], "toLeft", 20, "offscreen","damage:10"])
                            animationlist.push([document.getElementsByClassName("stone") [0], "toLeft", 20, "offscreen","damage:10"])
                            }else{
                                animationlist.push([document.getElementsByClassName("stone") [1], "toRight", 20, "offscreen","damage:10"])
                            animationlist.push([document.getElementsByClassName("emerald") [0], "toRight", 20, "offscreen","damage:10"])
                            animationlist.push([document.getElementsByClassName("stone") [0], "toRight", 20, "offscreen","damage:10"])

                            }
                            
                            }
                                                }}}}
        //Scan for loot
        }else if (gameobjects[i].className.includes("loot ")) {
            if (gameobjects[i].offsetTop < (window.innerHeight + 175) /2) {
                    if (gameobjects[i].offsetTop > (window.innerHeight - 175) /2) {
                    if (gameobjects[i].offsetLeft < (window.innerWidth + 125) /2) {
                    if (gameobjects[i].offsetLeft > (window.innerWidth - 125) /2) {
                        //If we can add the item to inventory
                        if(addtoinventory(gameobjects[i].className)==true) {
                            removegameobject(i, false)
                        rearrange.pop()
                        continue
                        }
                        
                        
        }}}}
        }else if (gameobjects[i].className=="cave") {
            
        }else if (gameobjects[i].className==("ladder up")) {
            
        }
        if (gameobjects[i].offsetTop < (window.innerHeight + 175) /2) {
            if (gameobjects[i].offsetTop + gameobjects[i].offsetHeight > (window.innerHeight - 175) /2) {
            if (gameobjects[i].offsetLeft < (window.innerWidth + 125) /2) {
            if (gameobjects[i].offsetLeft + gameobjects[i].offsetWidth> (window.innerWidth - 125) /2) {
                if (gameobjects[i].hasAttribute("onplayerin")) {
                    if (riding=="false") {
                        enterplace=gameobjects[i]
                        
                        document.getElementById("enterplace").style.left=gameobjects[i].offsetLeft + "px"
                        document.getElementById("enterplace").style.top=(gameobjects[i].offsetTop + gameobjects[i].offsetHeight / 2) + "px"
                        document.getElementById("enterplace").style.width=gameobjects[i].offsetWidth + "px"
                        document.getElementById("enterplace").innerHTML='<span class="key">T</span><h1>Enter</h1>'
                        document.getElementById("enterplace").style.display="block"
                    }
                }
                if (gameobjects[i].hasAttribute("ontalk")) {
                        enterplace=gameobjects[i]
                        
                        document.getElementById("enterplace").style.left=gameobjects[i].offsetLeft + "px"
                        document.getElementById("enterplace").style.top=(gameobjects[i].offsetTop + gameobjects[i].offsetHeight / 2) + "px"
                        document.getElementById("enterplace").style.width=gameobjects[i].offsetWidth + "px"
                        document.getElementById("enterplace").innerHTML='<span class="key">T</span><h1>Talk</h1>'
                        document.getElementById("enterplace").style.display="block"
                    }

        }}}}
        
        }
        
        }else{
        //Check if item should be loaded
        
        //console.log(gameobjects[i])
        if (unloaded[i] [0] < playerx + window.innerWidth *1.5 ) {
            //console.log("1")
            if (unloaded[i] [0] + gameobjects[i].offsetWidth > playerx - window.innerWidth) {
                //console.log("2")
                if (unloaded[i] [1] < playerz + window.innerHeight *1.5  ) {
                    //console.log("3")
                    if (unloaded[i][1] + gameobjects[i].offsetHeight > playerz - window.innerHeight) {
                        //console.log("4")
                        if (unloaded[i] [2]==playery) {
                            //console.log("5")
                            if (gameobjects[i].style.visibility=="hidden") {
                            gameobjects[i].style.visibility="visible"
                            gameobjects[i].style.left=(unloaded[i][0]-(playerx) + Math.floor(window.innerWidth /2)) +"px"
                            gameobjects[i].style.top=(unloaded [i] [1]-(playerz) +  Math.floor(window.innerHeight / 2))+"px"
                        //i=i-1
                        //console.log("Loaded")
                        //gameobjects=gameobjects.slice(i)
                        //}else{
                            
                        }
                                
                        }}}}}
                        }
                        
                        }
                    }
                    //Re-arrange gameobjects
                    rearrange.sort(function (a,b) {return b[0]-a[0]})
                    
                    for(var i=1;i<rearrange.length; i++) {
                        document.getElementById("gamearea").insertBefore(rearrange[i] [1], rearrange[i-1] [1])
                        
                    }

                }else{
                            playerx+=x
        playerz+=y
        playery-=z
    }
                        
                        
                    
}

function loadchunk(x, z) {
    var chunkx=(Number(x / window.innerWidth.toFixed(0)))
    var chunky=Number((z / window.innerHeight).toFixed(0))
    var datax=[0,0,0,1,1,1,-1,-1,-1]
    var datay=[0,1,-1,0,1,-1,0,1,-1]
    for (var i1=0; i1 < 9; i1++) {
        var chunkname=(chunkx + datax[i1]) + "," + (chunky + datay[i1])
        if (sessionStorage[chunkname]) {
        gameobjects + "," + (sessionStorage[chunkname])
    }
    }
    
}

function creategameobject(type, x, z, health, loot, y = playery, hidden = false) {
    if (typeof type === 'object') {
        if (type.hasOwnProperty("tagname")) {
            //If type is DOM element
            var newelement=type
        }else if (type.hasOwnProperty("text")) {
            if (type.hasOwnProperty("type")) {
                if (type.type=="carvedtext") {
                    var newelement=document.createElement("span")
                    newelement.innerHTML=type.text
                    newelement.className=type.type
                }
            }
        }
    }else{
        //If type is a name
    var newelement=document.createElement("div")
    if (type=="cave") {
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.right="-10px"
        rock1.style.bottom="-10px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.left="-30px"
        rock1.style.bottom="-10px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.right="100px"
        rock1.style.top="60px"
        rock1.style.transform="rotate(90deg)"
        newelement.appendChild(rock1)
        newelement.setAttribute("onplayerin","enterplace(0,-1,0)")
        creategameobject("ladder up", x, z, 200, "wood,wood,wood,wood,wood,wood", -1)
    }else if (type=="soldier") {
        loadcharacter(soldierdata1, newelement)
    }else if (type=="boat1") {
        //Put stuff in the boat
        var soldier1=loadcharacter(soldierdata1, newelement)
        soldier1.style.left="50px"
        soldier1.style.bottom="50px"
        var soldier2=loadcharacter(soldierdata2, newelement)
        soldier2.style.right="50px"
        soldier2.style.bottom="50px"
        var side=document.createElement("div")
        side.className="boatside"
        newelement.appendChild(side)
        newelement.setAttribute("onplayerin","ride("+gameobjects.length+",true)")
    }else if (type=="unfloor") {
        newelement.style.boxShadow="60px 0 34px -40px rgba(0,0,0,0.75) inset, -60px 0 34px -40px rgba(0,0,0,0.75) inset, 0 -60px 34px -40px rgba(0,0,0,0.75) inset, 0 60px  34px -40px rgba(0,0,0,0.75) inset"
    }else if (type=="ladder up") {
        newelement.setAttribute("onplayerin","enterplace(0,1,0)")
        if (y==-1) {
            var rx=Math.floor((x - playerx) /200) * 200
            var ry=Math.floor((z - playerz) /200) * 200
            creategameobject("unfloor", rx, ry, 8000, "stone,stone,stone,stone,stone", -1)
            var known=[rx+":"+ry]
            
            var kelements=[document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1]]
            for (var i2=0; i2 < 20; i2++) {
                if (i2==0) {
                    var random=5
                }else{
                    var random=Math.floor(Math.random() * 8) 
                }
                
                if (random==1) {
                    if (known.includes((rx+200)+":"+ry)==false) {
                       
                        //removeshadow("rgba(0, 0, 0, 0.75) -60px 0px 34px -40px inset")
                    creategameobject("unfloor", rx + 200, ry, 8000, "stone,stone,stone,stone,stone", -1)
                    gnum.push(gameobjects.length-1)
                    var rx=rx+200         
                    known.push(rx+":"+ry)                        
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    //removeshadow("rgba(0, 0, 0, 0.75) 60px 0px 34px -40px inset")
                    }
                    
                }else if (random==2) {
                    if (known.includes((rx-200)+":"+ry)==false) {
                    //removeshadow("rgba(0, 0, 0, 0.75) 60px 0px 34px -40px inset")
                                    
                    creategameobject("unfloor", rx - 200, ry, 8000, "stone,stone,stone,stone,stone", -1)
                    var rx=rx-200
                    known.push(rx+":"+ry)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    //removeshadow("rgba(0, 0, 0, 0.75) -60px 0px 34px -40px inset")
                    gnum.push(gameobjects.length-1)
                    }
                }else if (random==3){
                    if (known.includes(rx+":"+(ry+200))==false) {
                    //removeshadow("rgba(0, 0, 0, 0.75) 0px -60px 34px -40px inset")

                    creategameobject("unfloor", rx, ry + 200, 8000, "stone,stone,stone,stone,stone", -1)
                    var ry=ry+200
                    known.push(rx+":"+ry)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    //removeshadow("rgba(0, 0, 0, 0.75) 0px 60px 34px -40px inset")
                    gnum.push(gameobjects.length-1)
                    }
                }else if (random==4) {
                    if (known.includes(rx+":"+(ry-200))==false) {
                    //removeshadow("rgba(0, 0, 0, 0.75) 0px 60px 34px -40px inset")

                    creategameobject("unfloor", rx , ry -200, 8000, "stone,stone,stone,stone,stone", -1)
                    var ry=ry-200
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push(rx+":"+ry)
                    //removeshadow("rgba(0, 0, 0, 0.75) 0px -60px 34px -40px inset")
                    gnum.push(gameobjects.length-1)
                    }
                }else if (random==5) {
                    if (i2==0) {
                        var random2=0
                    }else {
                        var random2=Math.floor(Math.random() * 2)
                    }
                    if (random2==0) {
                    creategameobject("unfloor", rx , ry -200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push(rx+":"+(ry-200))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx , ry, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx)+":"+(ry))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx , ry +200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx)+":"+(ry+200))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx + 200, ry -200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx+200)+":"+(ry-200))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx + 200, ry, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx+200)+":"+(ry))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx + 200, ry +200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx+200)+":"+(ry-200))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx -200, ry -200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx-200)+":"+(ry-200))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx -200, ry, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx-200)+":"+(ry))
                    gnum.push(gameobjects.length-1)
                    creategameobject("unfloor", rx -200, ry +200, 8000, "stone,stone,stone,stone,stone", -1)
                    kelements.push(document.getElementById("gamearea").getElementsByClassName("unfloor") [document.getElementById("gamearea").getElementsByClassName("unfloor").length-1])
                    known.push((rx-200)+":"+(ry+200))
                    gnum.push(gameobjects.length-1)
                    if (i2==0) {
                        var random2=0
                    }else {
                        var random2=Math.floor(Math.random() * 2)
                    }
                    if (random2==1) {
                        //Create golems and a prison
                        
                        creategameobject("stonegolem", rx + 225, ry-25, 300,"stone,stone,stone,emerald", -1)
                        creategameobject("stonegolem", rx - 175, ry-25, 300,"stone,stone,stone,emerald", -1)
                        creategameobject("cell", rx, ry, 500, "stone,stone,stone", -1)
                    }
                    var ry=ry+400
                    var rx=rx
                    }
                }
                }
                unfloored=unfloored.concat(known)
                unfloored2=unfloored2.concat(kelements)

                }
        }else if (type=="stonegolem") {
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.right="30px"
        rock1.style.bottom="-10px"
        rock1.style.width="30px"
        rock1.style.height="60px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.left="30px"
        rock1.style.bottom="-10px"
        rock1.style.width="30px"
        rock1.style.height="60px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.right="-30px"
        rock1.style.bottom="15px"
        rock1.style.width="60px"
        rock1.style.height="120px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="rock"
        rock1.style.left="-30px"
        rock1.style.bottom="15px"
        rock1.style.width="60px"
        rock1.style.height="120px"
        newelement.appendChild(rock1)
    }else if (type=="sandroad floor") {
        var rock1=document.createElement("span")
        rock1.className="stone"
        rock1.style.right="-15px"
        rock1.style.top="0px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone1"
        rock1.style.left="-15px"
        rock1.style.top="0px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone1"
        rock1.style.right="-20px"
        rock1.style.top="30px"
        rock1.style.width="40px"
        rock1.style.height="40px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.left="-10px"
        rock1.style.top="30px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone1"
        rock1.style.right="-20px"
        rock1.style.top="30px"
        rock1.style.width="45px"
        rock1.style.height="45px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.left="-10px"
        rock1.style.top="30px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone1"
        rock1.style.right="-20px"
        rock1.style.top="70px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.left="-15px"
        rock1.style.top="60px"
        rock1.style.width="45px"
        rock1.style.height="45px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.right="-10px"
        rock1.style.top="95px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone"
        rock1.style.left="-10px"
        rock1.style.top="95px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.right="-15px"
        rock1.style.top="120px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone1"
        rock1.style.left="-5px"
        rock1.style.top="120px"
        newelement.appendChild(rock1)

        var rock1=document.createElement("span")
        rock1.className="stone2"
        rock1.style.right="-15px"
        rock1.style.bottom="0px"
        rock1.style.width="45px"
        rock1.style.height="45px"
        newelement.appendChild(rock1)
        var rock1=document.createElement("span")
        rock1.className="stone"
        rock1.style.left="-20px"
        rock1.style.bottom="0px"
        rock1.style.width="45px"
        rock1.style.height="45px"
        newelement.appendChild(rock1)
    }
    newelement.className=type
    }
    
    
    newelement.style.left=(x+ Math.floor(window.innerWidth /2)) + "px"
    newelement.style.top= (z+Math.floor(window.innerHeight /2))+"px"
    newelement.setAttribute("health", health)
    newelement.setAttribute("loot", loot)
    if (hidden==true) {
        newelement.style.visibility="hidden"

    }
    document.getElementById("gamearea").appendChild(newelement)
    
    unloaded.push([playerx  + x, playerz + z , y])
    gameobjects.push(newelement)
    /*
    if (sessionStorage[((playerx + x) / window.innerWidth).toFixed(0) + "," + ((playerz + z) / window.innerHeight).toFixed(0)]) {
        sessionStorage[((playerx + x) / window.innerWidth).toFixed(0) + "," + ((playerz + z) / window.innerHeight).toFixed(0)]=sessionStorage[((playerx + x) / window.innerWidth).toFixed(0) + "," + ((playerz + z) / window.innerHeight).toFixed(0)]+ "," + (gameobjects.length-1)
    }else{
        sessionStorage[((playerx + x) / window.innerWidth).toFixed(0) + "," + ((playerz + z) / window.innerHeight).toFixed(0)]=gameobjects.length -1
    }*/

}

function removeshadow(name, element=document.getElementById("gamearea").getElementsByClassName("unfloor")[document.getElementById("gamearea").getElementsByClassName("unfloor").length - 1]) {
    var found=false

    var previous=element.style.boxShadow
if (element.style.boxShadow.includes(", "+name)) {
var found=", " + name
element.style.boxShadow=element.style.boxShadow.replace(", " + name,"")
}else if (element.style.boxShadow.includes(name + ", ")) {
element.style.boxShadow=element.style.boxShadow.replace(name+ ", ","")
var found=name+", "
}else if(element.style.boxShadow==name) {
    element.style.boxShadow="none"
    var found=name
}else{
    if (element.style.boxShadow.includes(name)) {
        element.style.boxShadow=element.style.boxShadow.replace(name,"")
        var found=name
    }
    
}

if (found !=false) {
    if (previous==element.style.boxShadow) {
        alert("error:\nOriginal string:" + previous + "\nReplaced: " + found + "\nOutput: " + previous.replace(found, ""))
    }
}
}

function rwg(x,y,z, num) {
    for (var i=0; i < num; i++) {
        var random=Number(seed[Number(seed[i])]) //Number from 0-9
        var placex=x + Math.floor(random*Number(seed[random])/100 * num * 20) - num 
        var placez=z + Math.floor(random*Number(seed[Number(seed[random])])/100 * num * 20) - num
        console.log(Math.floor(random*Number(seed[random])/100 * num * 20)+","+num)
        if (random==5) {
            creategameobject("tree", placex, placez, 250,"wood,wood,wood,wood,seed,leaf",y)
        }else if (random==6) {
            creategameobject("stonespirit", placex, placez, 100, "stone,emerald");
    
    
        }else if(random==7) {
            var rx=Math.floor((placex) /200) * 200
            var ry=Math.floor((placez) /200) * 200
            creategameobject("cave", rx,ry, 300, "stone,stone,stone,stone,stone,stone,stone,stone")
        }else if (random < 5) {
            creategameobject("grass",placex,placez,50,"seed")
        }
    }
    var known=[]
    var kelements=[]
    var gnum2=[]
    for (var i=0; i < gameobjects.length; i++) {
        if (gameobjects[i].className=="unfloor") {
            kelements.push(gameobjects[i])
            known.push(gameobjects[i].offsetLeft + ":" + gameobjects[i].offsetTop)
            gnum2.push(i)
        }
    }
    
    
    var checkedlist=[]
    var addnum=0
    for (var i=0; i <known.length; i++) {
        var x2=Math.floor(Number(known[i].split(":") [0]) / 200) * 200
        var z2=Math.floor(Number(known[i].split(":") [1]) / 200) * 200
        known[i]=x2+":"+z2
    }
    for (var i=0; i < kelements.length; i++) {
        //If there is already a block 
        if (checkedlist.includes(known[i])) {
            removegameobject(gnum2[i]-addnum,false)
        addnum++
        }else {
            checkedlist.push(known[i])
            var x2=Math.floor(Number(known[i].split(":") [0]) / 200) * 200
        var z2=Math.floor(Number(known[i].split(":") [1]) / 200) * 200
        
                        if (known.indexOf((x2+200) + ":" + z2) !=-1) {
                            removeshadow("rgba(0, 0, 0, 0.75) -60px 0px 34px -40px inset",kelements[i])
                            removeshadow("rgba(0, 0, 0, 0.75) 60px 0px 34px -40px inset",kelements[known.indexOf((x2+200) + ":" + z2)])
                        }
                        if (known.indexOf((x2-200) + ":" + z2) !=-1) {
                            removeshadow("rgba(0, 0, 0, 0.75) 60px 0px 34px -40px inset",kelements[i])
                            removeshadow("rgba(0, 0, 0, 0.75) -60px 0px 34px -40px inset",kelements[known.indexOf((x2-200) + ":" + z2)])
                        }
                        if (known.indexOf(x2 + ":" + (z2+200)) !=-1) {
                            removeshadow("rgba(0, 0, 0, 0.75) 0px -60px 34px -40px inset",kelements[i])
                            removeshadow("rgba(0, 0, 0, 0.75) 0px 60px 34px -40px inset",kelements[known.indexOf(x2 + ":" + (z2+200))])
                        }
                        if (known.indexOf(x2 + ":" + (z2-200)) !=-1) {
                            removeshadow("rgba(0, 0, 0, 0.75) 0px 60px 34px -40px inset",kelements[i])
                            removeshadow("rgba(0, 0, 0, 0.75) 0px -60px 34px -40px inset",kelements[known.indexOf(x2 + ":" + (z2-200))])
                        }
                    }}
                    alert("Checkedlist length: " + checkedlist.length + "\nKnown length" + known.length)
}

function movegameobject(num,x,y,z, animate=true, seconds=0) {
    if (animate==true) {
        //Animation
        var f=function (f,num,seconds,x,y,z) {
            movegameobject(num, Math.floor(x/seconds),Math.floor(y/seconds),Math.floor(z/seconds),false)
            if (seconds-1 > 0) {
                setTimeout(f,100,f,num,seconds-1,x-Math.floor(x/seconds),y-Math.floor(y/seconds),z-Math.floor(z/seconds))
            }
        }
        setTimeout(f,100,f,num,seconds*10+1,x,y,z)
    }else{
    if (gameobjects[num].style.visibility=="hidden") {
        //If gameobject not shown, only change the coords in 'unloaded'
        
    }else{
        gameobjects[num].style.top=(gameobjects[num].offsetTop + z ) + "px"
        gameobjects[num].style.left=(gameobjects[num].offsetLeft + x ) + "px"
    }
    unloaded[num] [0]+=x
    unloaded[num] [1]+=z
    unloaded[num] [2]+=y
    
}
}