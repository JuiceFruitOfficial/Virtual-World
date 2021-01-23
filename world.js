
var chunkLoading=true
function loadplace(name) {
    placeonchunck=[0,0,0]
    localStorage.playerx=0
    localStorage.playery=0
    localStorage.playerz=0
    projectorElements=[]
    if (name=="ship1") {
        chunkLoading=false
        load3dmodel(ship1model, editor2)
        playaudio("terminal.m4a")
        
        setTimeout(loadplace, 10000, "spawn")
    }else if (name=="spawn") {
        chunkLoading=false
        load3dmodel(spawnmodel, editor2)
        textbox("Security", "Hello! We couldn't find your JuiceFruit passport information... Are you a new user?", 0, "Yes",function() {loadWebsite("site:juicefruit.jf/login.html[newuser=1]")},"No",function () {loadWebsite("site:juicefruit.jf/login.html[newuser=0]")})
        
    }else if (name=="ownroom") {
        chunkLoading=false
        playaudio("welcomeroom.m4a")
        
    }else if (name=="SkyCityShop") {
        chunkLoading=false
        load3dmodel(shopmodel, editor2)
    }else if (name=="startIsland") {
        chunkLoading=true
        loadchunk(0,0)
        moveplayer(300,0,200, true,false)
        scene2.setRotation(6.2,0.03,0)
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
var scene2=lightSource2=playworld=editor2=""
function enterworld() {
    document.getElementById("usernameinfo").innerHTML=username
    scene2      = new voxelcss.Scene();
    lightSource2 = new voxelcss.LightSource(300, 300, 300, 750, 0.3, 1);
    playworld       = new voxelcss.World(scene2);
    editor2      = new voxelcss.Editor(playworld);
    scene2.addLightSource(lightSource2);
    scene2.attach(document.getElementById("worlddiv"));
    scene2.setZoom(1)
    scene2.setRotationX(0)
    scene2.setRotationY(-3.8)
    scene2.setPan(-50, 200, 1000)
    editor2.disable()
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
        localStorage.playersector="ship1"
        
    }

    //Check player last position

    loadplace(localStorage.playersector)
    
}
var playing=false
//Load world system
function startplaying() {
    document.getElementById("world").style.display="block"
    document.getElementById("worlddiv").requestPointerLock()
    playing=true
    
    enterworld()
}
//------------Chunks----------
var brickwall1="grass,-200,0,-200,100;grass,-100,0,-200,100;grass,0,0,-200,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,-200,0,-100,100;grass,-200,0,0,100;grass,-200,0,100,100;grass,-100,0,-100,100;grass,-100,0,0,100;grass,-100,0,100,100;grass,0,0,-100,100;grass,0,0,0,100;grass,0,0,100,100;grass,100,0,-100,100;grass,100,0,0,100;grass,200,0,-100,100;grass,200,0,0,100;grass,100,0,100,100;grass,200,0,100,100;grass,-200,0,200,100;grass,-100,0,200,100;grass,0,0,200,100;grass,100,0,200,100;grass,200,0,200,100;bricks,0,100,0,100;bricks,0,200,0,100;bricks,0,300,0,100;bricks,0,100,100,100;bricks,0,200,100,100;bricks,0,300,100,100;bricks,0,100,200,100;bricks,0,200,200,100;bricks,0,300,200,100;bricks,0,100,-100,100;bricks,0,100,-200,100;bricks,0,200,-200,100;bricks,0,200,-100,100;bricks,0,300,-200,100;bricks,0,300,-100,100;lightsource,300,300,300,750+0.5+1;"
function getchunkdata(chunkx, chunkz) {
    //Check if on spawn
    if (chunkz > 4) {
        if (chunkz < 8) {
            if (chunkx > -2) {
                if (chunkx < 2) {
                    return "sand,-100,0,0,100;sand,0,0,0,100;sand,0,0,100,100;sand,-100,0,100,100;sand,0,0,200,100;sand,-100,0,200,100;sand,-200,0,0,100;sand,-200,0,100,100;sand,-200,0,200,100;sand,0,0,300,100;sand,-100,0,300,100;sand,-200,0,300,100;sand,-300,0,0,100;sand,-300,0,100,100;sand,-300,0,200,100;sand,-300,0,300,100;sand,-400,0,0,100;sand,-400,0,100,100;sand,-400,0,200,100;sand,-400,0,300,100;sand,0,0,400,100;sand,-100,0,400,100;sand,-200,0,400,100;sand,-300,0,400,100;sand,-400,0,400,100;lightsource,300,300,300,750+0.5+1;"
                }
            }
        }
    }
    if (chunkx==2){
        if (chunkz < 8) {
            if (chunkz > 4) {
                return brickwall1
            }
        }
    }
    if (chunkx==1){
        
            if (chunkz ==4) {
                return "grass,-200,0,-200,100;grass,-100,0,-200,100;grass,0,0,-200,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,-200,0,-100,100;grass,-200,0,0,100;grass,-200,0,100,100;grass,-100,0,-100,100;grass,-100,0,0,100;grass,-100,0,100,100;grass,0,0,-100,100;grass,0,0,0,100;grass,0,0,100,100;grass,100,0,-100,100;grass,100,0,0,100;grass,200,0,-100,100;grass,200,0,0,100;grass,100,0,100,100;grass,200,0,100,100;grass,-200,0,200,100;grass,-100,0,200,100;grass,0,0,200,100;grass,100,0,200,100;grass,200,0,200,100;bricks,-200,100,0,100;bricks,-100,100,0,100;bricks,0,100,0,100;bricks,100,100,0,100;bricks,200,100,0,100;bricks,-200,200,0,100;bricks,-100,200,0,100;bricks,0,200,0,100;bricks,200,200,0,100;bricks,100,200,0,100;bricks,200,300,0,100;bricks,100,300,0,100;bricks,0,300,0,100;bricks,-200,300,0,100;bricks,-100,300,0,100;lightsource,300,300,300,750+0.5+1;"
            }
        
    }
    if (chunkx==-1){
        
        if (chunkz ==4) {
            return "grass,-200,0,-200,100;grass,-100,0,-200,100;grass,0,0,-200,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,-200,0,-100,100;grass,-200,0,0,100;grass,-200,0,100,100;grass,-100,0,-100,100;grass,-100,0,0,100;grass,-100,0,100,100;grass,0,0,-100,100;grass,0,0,0,100;grass,0,0,100,100;grass,100,0,-100,100;grass,100,0,0,100;grass,200,0,-100,100;grass,200,0,0,100;grass,100,0,100,100;grass,200,0,100,100;grass,-200,0,200,100;grass,-100,0,200,100;grass,0,0,200,100;grass,100,0,200,100;grass,200,0,200,100;bricks,-200,100,0,100;bricks,-100,100,0,100;bricks,0,100,0,100;bricks,100,100,0,100;bricks,200,100,0,100;bricks,-200,200,0,100;bricks,-100,200,0,100;bricks,0,200,0,100;bricks,200,200,0,100;bricks,100,200,0,100;bricks,200,300,0,100;bricks,100,300,0,100;bricks,0,300,0,100;bricks,-200,300,0,100;bricks,-100,300,0,100;lightsource,300,300,300,750+0.5+1;"
        }
    
}
    if (chunkx==-2){
        if (chunkz < 8) {
            if (chunkz > 4) {
                return "grass,-200,0,-200,100;grass,-100,0,-200,100;grass,0,0,-200,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,-200,0,-100,100;grass,-200,0,0,100;grass,-200,0,100,100;grass,-100,0,-100,100;grass,-100,0,0,100;grass,-100,0,100,100;grass,0,0,-100,100;grass,0,0,0,100;grass,0,0,100,100;grass,100,0,-100,100;grass,100,0,0,100;grass,200,0,-100,100;grass,200,0,0,100;grass,100,0,100,100;grass,200,0,100,100;grass,-200,0,200,100;grass,-100,0,200,100;grass,0,0,200,100;grass,100,0,200,100;grass,200,0,200,100;bricks,-200,100,0,100;bricks,-100,100,0,100;bricks,0,100,0,100;bricks,100,100,0,100;bricks,200,100,0,100;bricks,-200,200,0,100;bricks,-100,200,0,100;bricks,0,200,0,100;bricks,200,200,0,100;bricks,100,200,0,100;bricks,200,300,0,100;bricks,100,300,0,100;bricks,0,300,0,100;bricks,-200,300,0,100;bricks,-100,300,0,100;lightsource,300,300,300,750+0.5+1;"
            }
        }
    }
    if (chunkx==0) {
        if (chunkz > 0) {
            if (chunkz < 5) {
                return "grass,0,0,0,100;dirt,-200,0,0,100;dirt,-100,0,0,100;dirt,-300,0,0,100;dirt,-100,0,-100,100;dirt,-100,0,-200,100;dirt,-100,0,-300,100;dirt,-200,0,-100,100;dirt,-200,0,-200,100;dirt,-200,0,-300,100;dirt,-300,0,-100,100;dirt,-300,0,-200,100;dirt,-300,0,-300,100;dirt,-200,0,-400,100;dirt,-100,0,-400,100;dirt,-300,0,-400,100;grass,0,0,-100,100;grass,0,0,-200,100;grass,0,0,-300,100;grass,0,0,-400,100;grass,-400,0,-400,100;grass,-400,0,-300,100;grass,-400,0,-200,100;grass,-400,0,-100,100;grass,-400,0,0,100;lightsource,300,300,300,500+0.5+1;"
            }
        }
    }
    if (chunkx==0) {
        if (chunkz==0) {
            return "color:e29948,-100,0,0,100;color:e29948,-200,0,0,100;color:e29948,-300,0,0,100;color:e29948,-100,0,-100,100;color:e29948,-200,0,-100,100;color:e29948,-300,0,-100,100;color:e29948,-100,0,-200,100;color:e29948,-200,0,-200,100;color:e29948,-300,0,-200,100;color:e29948,-100,0,-300,100;color:e29948,-200,0,-300,100;color:e29948,-300,0,-300,100;color:ffffff,0,100,0,100;color:ffffff,0,200,0,100;color:ffffff,0,300,0,100;color:ffffff,-100,300,0,100;color:ffffff,-200,300,0,100;color:ffffff,-300,300,0,100;color:ffffff,-400,100,0,100;color:ffffff,-400,200,0,100;color:ffffff,-400,300,0,100;color:ffffff,0,100,-100,100;color:ffffff,0,100,-200,100;color:ffffff,0,100,-300,100;color:ffffff,0,200,-100,100;color:ffffff,0,200,-200,100;color:ffffff,0,200,-300,100;color:ffffff,-100,300,-100,100;color:ffffff,-100,300,-200,100;color:ffffff,-100,300,-300,100;color:ffffff,-200,300,-100,100;color:ffffff,-200,300,-200,100;color:ffffff,-200,300,-300,100;color:ffffff,-300,300,-100,100;color:ffffff,-300,300,-200,100;color:ffffff,-300,300,-300,100;color:ffffff,-400,100,-100,100;color:ffffff,-400,100,-200,100;color:ffffff,-400,200,-100,100;color:ffffff,-400,200,-200,100;color:ffffff,-400,100,-300,100;color:ffffff,-400,200,-300,100;color:ffffff,-100,100,-400,100;color:ffffff,-200,100,-400,100;color:ffffff,-100,200,-400,100;color:ffffff,-200,200,-400,100;color:ffffff,-300,100,-400,100;color:ffffff,-300,200,-400,100;lightsource,300,300,300,750+0.5+1;"
        }
    }
    if (Math.floor(chunkx /2) * 2==chunkx) {
        if (Math.floor(chunkz /2) * 2==chunkz) {
            return "grass,0,0,0,100;grass,0,0,-100,100;grass,0,0,-200,100;grass,0,0,-300,100;grass,100,0,0,100;grass,200,0,0,100;grass,300,0,0,100;grass,100,0,-100,100;grass,200,0,-100,100;grass,300,0,-100,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,300,0,-200,100;grass,100,0,-300,100;grass,200,0,-300,100;grass,300,0,-300,100;grass,400,0,0,100;grass,400,0,-100,100;grass,400,0,-200,100;grass,400,0,-300,100;grass,0,0,-400,100;grass,100,0,-400,100;grass,200,0,-400,100;grass,300,0,-400,100;grass,400,0,-400,100;wood,200,100,-200,100;wood,200,200,-200,100;wood,200,300,-200,100;leaves,200,400,-200,100;leaves,200,400,-300,100;leaves,300,400,-200,100;leaves,300,400,-300,100;leaves,200,400,-100,100;leaves,300,400,-100,100;leaves,100,400,-300,100;leaves,100,400,-200,100;leaves,100,400,-100,100;leaves,200,500,-200,100;lightsource,300,300,300,750+0.5+1;"

        }
    }
    
    return "grass,0,0,0,100;grass,0,0,-100,100;grass,0,0,-200,100;grass,0,0,-300,100;grass,100,0,0,100;grass,200,0,0,100;grass,300,0,0,100;grass,100,0,-100,100;grass,200,0,-100,100;grass,300,0,-100,100;grass,100,0,-200,100;grass,200,0,-200,100;grass,300,0,-200,100;grass,100,0,-300,100;grass,200,0,-300,100;grass,300,0,-300,100;grass,400,0,0,100;grass,400,0,-100,100;grass,400,0,-200,100;grass,400,0,-300,100;grass,0,0,-400,100;grass,100,0,-400,100;grass,200,0,-400,100;grass,300,0,-400,100;grass,400,0,-400,100;"
}
function loadchunk(chunkx, chunkz, near=true,clearothers=true, keepPlayerPosition=true) {
    var chunkdata=getchunkdata(chunkx, chunkz) 
    if (near==false) {
        load3dmodel(chunkdata, editor2)
    }else{
        var blocks=playworld.getVoxels()
        var high=[0,0]
        for (var i=0; i < blocks.length; i++) {
            if (blocks[i].getPositionX() > high[0]) {
                high[0]=blocks[i].getPositionX()
            }
            if (blocks[i].getPositionZ() > high[1]) {
                high[1]=blocks[i].getPositionZ()
            }
        }
        var returnstring=""
        var places=[[0,0],[0,1],[0,-1],[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[2,0],[2,1],[2,-1],[-2,0],[-2,1],[-2,-1],[0,2],[1,2],[-1,2],[0,-2],[1,-2],[-1,-2]]
        //var places=[[0,0],[0,1],[0,-1],[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1]]
        //var places=[[0,1],[0,0],[-1,0],[-1,1]]
        //Go trough every block and change their loaction
        
        for (var i2=0; i2 < places.length; i2++) {
            var chunkdata=getchunkdata(chunkx + places[i2] [0], chunkz+ places[i2] [1]).split(";")
            var highx=0
            var highz=0
            for (var i=0; i < chunkdata.length; i++) {
                var blockdata=chunkdata[i].split(",")
                if (Number(blockdata[1]) < highx) {
                    highx=Number(blockdata[1])
                }
                if (Number(blockdata[3]) < highz) {
                    highz=Number(blockdata[3])
                }
            }
            for (var i=0; i < chunkdata.length; i++) {
                var blockdata=chunkdata[i].split(",")
                
                var blockx=(Number(blockdata [1]) + places[i2] [0] * 500- highx) * -1 
                
                var blocky=Number(blockdata [2])
                
                var blockz=(Number(blockdata [3]) + places[i2] [1] * 500- highz) * -1 
                
                
                
                returnstring+=blockdata[0] + "," + blockx + "," + blocky + "," + blockz + "," + blockdata[4] + ";"
                
                
            }
            
        }
        
        
        load3dmodel(returnstring, editor2)
        var blocks=playworld.getVoxels()
        var high2=[0,0]
        for (var i=0; i < blocks.length; i++) {
            if (blocks[i].getPositionX() > high2[0]) {
                high2[0]=blocks[i].getPositionX()
            }
            if (blocks[i].getPositionZ() > high2[1]) {
                high2[1]=blocks[i].getPositionZ()
            }
        }
        
    if (chunkx==0) {
                if (chunkz==4) {
                    //Create taxi if player is on the starting taxi station
                    var taxi=createEnemy("taxi")
                    taxi.addToEditor(editor2)
                    taxi.position(100,100,-500)
                }
            }
    } 
    if (keepPlayerPosition==false) {
        placeonchunck=[0,0,0]
    }
    
    if (keepPlayerPosition==true) {
            
        var movex=high[0]-high2[0] 
        var movez=high[1]-high2[1] 
        if (movex < 0) {
            movex+=500
        }
        if (movex > 500) {
            movex-=500
        }
        if (movez < 0) {
            movez+=500
        }
        if (movez > 500) {
            movez-=500
        }
        //sendNotification("System", high + "<br>" + high2 + "<br>" + movex + "," + movez)
        sendNotification("System", placeonchunck)
       localStorage.playerx=chunkx * 500
        localStorage.playerz=chunkz * 500
        moveplayer(placeonchunck[0], placeonchunck[1], placeonchunck[2], false, false, false)
    }
}