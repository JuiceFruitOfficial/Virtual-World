var projectorloop;
var userrotate=0
var userx=0
var usery=0
var userz=0
var mouseClickSetting=0 //0= default, 1=like Minecraft
var hotbarslot1=hotbarslot2=hotbarslot3="undefined1"
var previousx=previousy=previousz=0
var selectedhotbarslot=0
var currentaction="break"

function inputsettings() {
    try {
        document.body.requestFullscreen()
    }
    catch (e) {
        
    }
    
    document.getElementById("allowmedia").style.display="none"
    document.getElementById("inputsettings").style.display="block"
}

function keysettings() {
    document.getElementById("keysettings").style.display="block"
}
function keyup(e) {
            
    var key=e.keyCode
    if (key==87) {
        //W
        document.getElementById("rightleg").style.animationIterationCount="0"
        document.getElementById("leftleg").style.animationIterationCount="0"
        
    }
    if (key==68) {
        //D
        document.getElementById("rightleg").style.animationIterationCount="0"
        document.getElementById("leftleg").style.animationIterationCount="0"
    }

    if (key==83) {
        //S
        document.getElementById("rightleg").style.animationIterationCount="0"
        document.getElementById("leftleg").style.animationIterationCount="0"
    0
    }
    if (key==65) {
        //A
        document.getElementById("rightleg").style.animationIterationCount="0"
        document.getElementById("leftleg").style.animationIterationCount="0"
        
    }
    
}

function keyInput(e) {
            
    var key=e.keyCode
    if (key==87) {
        //W
        if (riding=="false") {
            document.getElementById("rightleg").style.animationIterationCount="infinite"
            document.getElementById("leftleg").style.animationIterationCount="infinite"
            document.getElementById("player").className=""
        }else{
            movegameobject(riding[0],0,0,-30,false)
        }
        
        playerrotate=0
        movegame(0,0,30)
    }
    if (key==68) {
        //D
        playerrotate=1
        movegame(-30,0,0)
        if (riding=="false") {
            document.getElementById("rightleg").style.animationIterationCount="infinite"
            document.getElementById("leftleg").style.animationIterationCount="infinite"
            document.getElementById("player").className="turned"
        }else{
            movegameobject(riding[0],30,0,0,false)
        }
        
    }

    if (key==83) {
        //S
        document.getElementById("rightleg").style.animationIterationCount="infinite"
        document.getElementById("leftleg").style.animationIterationCount="infinite"
        playerrotate=2
        movegame(0,0,-30)
        
    if (riding=="false") {
        document.getElementById("player").className=""
    }else{
        movegameobject(riding[0],0,0,30,false)
    }
    }
    if (key==65) {
        //A
        if (riding=="false") {
            document.getElementById("rightleg").style.animationIterationCount="infinite"
            document.getElementById("leftleg").style.animationIterationCount="infinite"
            document.getElementById("player").className="turned"
        }else{
            movegameobject(riding[0],-30,0,0,false)
        }
        
        playerrotate=3
        movegame(30,0,0)
    }
    if (key==81) {
        //Q
        shoot()
    }
    if (key==69) {
        //E
        if (document.getElementById("inventory").style.display=="grid") {
            openinventory(localStorage.getItem("inventory"+selectedchar), 0, "inventory")
            document.getElementById("inventory").style.display="none"
            document.getElementById("tabs").style.display="none"
        }else{
            openinventory(localStorage.getItem("inventory"+selectedchar), 0, "inventory")
            document.getElementById("tabs").style.display="block"
            document.getElementById("inventory").style.display="grid"
        }
    }
    if (key==84) {
        //T
        if (enterplace == "false") {
            if (riding !="false") {
                document.getElementById("player").style.display="block"
                document.getElementById("fakeplayer").parentElement.removeChild(document.getElementById("fakeplayer"))
                riding="false"
            }
        }else{
            document.getElementById("enterplace").style.display="none"
            eval(enterplace.getAttribute("onplayerin"))
            enterplace="false"
        }
    }

    if (key==49) {
        //1
            selectbaritem(0)
    }
    if (key==50) {
        //2
            selectbaritem(1)
    }
    if (key==51) {
        //3
            selectbaritem(2)
        
    }
    
    
}

var lastchunk2="0,0"
var maxrotate=Math.PI * 2
function mousemove(e) {
    
    if (playing==true) {
        //Rotate scene
        scene2.rotateY(e.movementX/250);
        scene2.rotateX(0-e.movementY/250);
        
        if (scene2.getRotationY() < 0) {
            scene2.rotateY(maxrotate)
        }
        if (scene2.getRotationX() < 0) {
            scene2.rotateX(maxrotate)
        }
        if (scene2.getRotationY() > maxrotate) {
            scene2.rotateY(0-maxrotate)
        }
        if (scene2.getRotationX() > maxrotate) {
            scene2.rotateX(0-maxrotate)
        }
        
        //Give every element a child number
        var cubes=document.getElementById("worlddiv").getElementsByClassName("cube")
        for (var i=0; i < cubes.length;i++) {
            cubes[i].setAttribute("childnum", i)
        }
        //Check the target block's features (rideable, etc)
        var block=document.elementFromPoint(Math.floor(window.innerWidth /2), Math.floor(window.innerHeight /2)).parentElement.parentElement.parentElement

        if (block != undefined) {
        if (block.hasAttribute("childnum")) {
            var voxel=scene2.getVoxels() [Number(block.getAttribute("childnum"))]
            if (voxel.hasOwnProperty("enemy")) {
            var enemy=voxel.enemy
        if (enemy.rideable==true) {
            guidePanel(ridemessage)
        }
        }}
    }
        
    }
}
var clicked=false
function mouseclicked(e) {
    if (playing==true) {
        if (clicked==false) {
            clicked=true
            document.elementFromPoint(Math.floor(window.innerWidth /2), Math.floor(window.innerHeight /2)).click();
            //Check the target block's features (rideable, etc)
                var block=document.elementFromPoint(Math.floor(window.innerWidth /2), Math.floor(window.innerHeight /2)).parentElement.parentElement.parentElement
                if (block != undefined) {
                    if (block.hasAttribute("childnum")) {
                    var voxel=scene2.getVoxels() [Number(block.getAttribute("childnum"))]
                    if (voxel.hasOwnProperty("enemy")) {
                        var enemy=voxel.enemy
                if (enemy.rideable==true) {
                    ride(enemy)
                }
                    }
                    
                }
                }
                
            clicked=false
        }
        
    }
}

function placeitem(event) {
    num=selectedhotbarslot
    if (currentitem !="") {
    if(currentaction=="place" ) {
        var iv=localStorage.getItem("inventory"+selectedchar).split(";")
        //If you have more than 1 of the item
        var di=false
        if (Number(iv[num+1].split(":") [1]) > 1) {
            iv[num+1]=iv[num+1].split(":") [0]+":"+Number(iv[num+1].split(":") [1]-1)
        }else{
            //Delete item from inventory and hotbar
            iv.splice(num+1,1)
            di=true
        }
        ivstr=iv.join(";")
        if (ivstr[ivstr.length-1]==";") {
           localStorage.setItem("inventory"+selectedchar, ivstr)
        }else{
            localStorage.setItem("inventory"+selectedchar, ivstr+";") 
        }
        
        localStorage.setItem("inventory0"+selectedchar, encrypt(localStorage.getItem("inventory"+selectedchar)))
        creategameobject(iteminfo(currentitem) [1], event.clientX-window.innerWidth/2, event.clientY-window.innerHeight/2, iteminfo(currentitem) [3], iteminfo(currentitem) [1], playery,false)
    if (di==true) {
        //Change current item to "" if item was deleted from inventory
        currentitem=""
    }
    
updatehotbar()
actions(currentitem)
}else if (currentaction=="break") {
    var hp=event.target.getAttribute("health")
    if (Number(hp)-iteminfo(currentitem) [2] <= 0) {
        removegameobject(Number(event.target.getAttribute("num")),true)
    }else{
        event.target.setAttribute("health",Number(hp)-iteminfo(currentitem) [2])
    }
}else if (currentaction.includes("make a")) {
    var item=currentaction.split("make a") [1].substring(currentaction.split("make a") [1].indexOf(" ")+1, currentaction.split("make a") [1].length)
    console.log(item)
    placeCraftingItem(event.clientX-window.innerWidth/2, playery, event.clientY-window.innerHeight/2, item, 1, iteminfo(item).loot,iteminfo(item).loot)
}


}}

function mousemoved(event) {
    document.getElementById("mouse").style.left=event.clientX+"px"
    document.getElementById("mouse").style.top=event.clientY+"px"
    
}