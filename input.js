var projectorloop;
var userrotate=0
var userx=0
var usery=0
var userz=0
var mouseClickSetting=0 //0= default, 1=like Minecraft
var hotbarslot1=hotbarslot2=hotbarslot3="undefined1"
var previousx=previousy=previousz=0



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
            openinventory(localStorage.inventory1, 0, "inventory")
            document.getElementById("inventory").style.display="none"
            document.getElementById("tabs").style.display="none"
        }else{
            openinventory(localStorage.inventory1, 0, "inventory")
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
    
    if (key==77) {
        //M
        placeitem()
    }
}

function selectbaritem(num) {
    var hotbars=document.getElementById("hotbar").getElementsByTagName("div") 

    hotbars[0].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars[1].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars[2].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars [num].style.backgroundColor="rgba(255, 225, 255, 0.75)"
}
function iteminfo(name) {
    //[space, className, damage, durability, range (px)]
    if (name=="iron_pickaxe") {
        return [5,"ironpickaxe", 10, 500, 200]
    }else if (name=="wood") {
        return [5,"wood", 2, 500, 200]
    }else if (name=="stone") {
        return [1,"stone", 5, 5, 400]
    }else{
        Error("Unknown item "+name)
        return []
    }
}
var inventory=""
var inventorypoints=0
var maxinvpoints=20

function addtoinventory(name) {
    name=name.replace("loot ","")
    var maxspace=0
    var iv=localStorage.getItem("inventory"+selectedchar).split(";")
    var moved="false"
    for (var i=1; i<iv.length-1; i++) {
        if (moved=="false") {
        if (iv[i].split(":") [0]==name) {
            moved=i

        }
    }
        maxspace+=iteminfo(iv[i].split(":") [0]) [0] * Number(iv[i].split(":") [1])
    }
    if (iteminfo(name) [0]+ maxspace <= maxinvpoints) {
        if (moved=="false") {
    localStorage.setItem("inventory"+selectedchar,localStorage.getItem("inventory"+selectedchar)+name+":1;")
    localStorage.setItem("inventory0"+selectedchar,encrypt(localStorage.getItem("inventory"+selectedchar)))
    }else {
        iv[moved]=iv[moved].split(":") [0]+":"+(Number(iv[moved].split(":") [1])+1)
            
            localStorage.setItem("inventory"+selectedchar,iv.join(";"))
            localStorage.setItem("inventory0"+selectedchar,encrypt(localStorage.getItem("inventory"+selectedchar)))
    }
        
    }else{
        
        guidePanel("Not enough space")
        return false
    }
    updatehotbar()
    return true
}

function openinventory(data, place=0,source) {
    var verified=false
    var verifiedsource=""
    if (source=="inventory") {
        if (data==localStorage.inventory1) {
            verified=true
            verifiedsource="inventory;"+data
        }
    }

    if (verified==true) {
        if (source=="inventory") {
            if (verifiedsource=="inventory;"+data) {
                if (selectedchar==1) {
                    if (encrypt(localStorage.inventory1)==localStorage.inventory01) {
                        inventory=localStorage.inventory1.split(";")
                    }
                }
                if (selectedchar==2) {
                    if (encrypt(localStorage.inventory2)==localStorage.inventory02) {
                        inventory=localStorage.inventory2.split(";")
                    }
                }
                if (selectedchar==3) {
                    if (encrypt(localStorage.inventory3)==localStorage.inventory03) {
                        inventory=localStorage.inventory3.split(";")
                    }
                }
                inventorypoints=0
                if (place==0) {
                    document.getElementById("itemlist").innerHTML=""
                    
                    for (var i=1; i < inventory.length-1; i++) {
                        var idata=inventory[i]
                        var inum=idata.split(":") [1]
                        var iname=idata.split(":") [0]
                        inventorypoints+=iteminfo(iname) [0]*Number(inum)
                        var newelement=document.createElement("div")
                        newelement.setAttribute("onmouseover", "showiteminfo('"+ iname +"')")
                        newelement.setAttribute("onmouseleave", "document.getElementById('iteminfo').style.display='none';document.getElementById('storagepoints').style.display='block'")
                        newelement.innerHTML="<div class=\"" + iteminfo(iname) [1] + "\" style=\"position: relative;margin-bottom: 0px;margin-top: auto;\"></div><span>"+iname.replace(/_/g, " ")+"</span><span>"+inum+"</span>"
                        document.getElementById("itemlist").appendChild(newelement)
                    }
                    document.getElementById("storagepoints").innerHTML="<h1>Inventory</h1><p>" + inventorypoints + "/" + maxinvpoints + " storage points used</p>"
                    //Calculate space used
                    for (var i=0; i < maxinvpoints; i++) {
                        var newelement=document.createElement("span")
                        if (i < inventorypoints) {
                            newelement.style.backgroundColor="lime"
                        }else {
                            newelement.style.backgroundColor="gray"
                        }
                        document.getElementById("storagepoints").appendChild(newelement)
                    }
                }
                
            }
        }
    }
}

function showiteminfo(name) {
    document.getElementById('iteminfo').style.display='block';document.getElementById('storagepoints').style.display='none'
    var idata=iteminfo(name)
    //[space, image, damage, durability, range (px)]
    document.getElementById("itemname").innerHTML=name
    document.getElementById("itemdurability").innerHTML=idata[3]
    document.getElementById("itemdamage").innerHTML=idata[2]
    document.getElementById("itemrange").innerHTML=idata[4]
    document.getElementById("itemspace").innerHTML=idata[0]
    document.getElementById("itemimg").src=idata[1]
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

function placeitem() {

}