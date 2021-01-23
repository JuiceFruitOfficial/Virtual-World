var projectorloop;
var userrotate=0
var userx=0
var usery=0
var userz=0
var mouseClickSetting=0 //0= default, 1=like Minecraft
var hotbarslot1=hotbarslot2=hotbarslot3="undefined1"




function inputsettings() {
    document.body.requestFullscreen()
    document.getElementById("allowmedia").style.display="none"
    document.getElementById("inputsettings").style.display="block"
}

function keysettings() {
    document.getElementById("keysettings").style.display="block"
}

function keypress(event) {
    
     if (playing) {

    
	var key=event.key
	var code=event.keyCode
    //alert(key)
    var rotation=scene2.getRotationX()
	if (code==32) {
		scene2.setPanY(scene2.getPanY()+100)
	}
	if (key=="d") {
		moveplayer(100,0,0,chunkLoading)
	}
	if (key=="a") {
		moveplayer(-100,0,0,chunkLoading)
	}

	if (key=="s") {
		moveplayer(0,0,100,chunkLoading)
	}
	if (key=="w") {
		moveplayer(0,0,-100,chunkLoading)
    }
    if (key=="e") {
        if (document.getElementById("inventory").style.display != "grid") {
            document.getElementById("inventory").style.display="grid"
            playing=false
            openinventory(localStorage.inventory,0,"inventory")
            document.exitPointerLock()
        }
    }
    if (key=="p") {
        showprofile(username)
    }

} else {
    if (event.key=="e") {
    
        if (document.getElementById("inventory").style.display=="grid") {
            document.getElementById("inventory").style.display="none"
            document.getElementById("worlddiv").requestPointerLock()
            playing=true
        }
    }}
}

function iteminfo(name) {
    //[space, image, damage, durability, range (px)]
    if (name=="iron_pickaxe") {
        return [5,"images/pickaxe.png", 10, 500, 200]
    }
}
var inventory=""
var inventorypoints=0
var maxinvpoints=20
function openinventory(data, place=0,source) {
    var verified=false
    var verifiedsource=""
    if (source=="inventory") {
        if (data==localStorage.inventory) {
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
                        inventorypoints+=iteminfo(iname) [0]
                        var newelement=document.createElement("div")
                        newelement.setAttribute("onmouseover", "showiteminfo('"+ iname +"')")
                        newelement.setAttribute("onmouseleave", "document.getElementById('iteminfo').style.display='none';document.getElementById('storagepoints').style.display='block'")
                        newelement.innerHTML="<img src=\"" + iteminfo(iname) [1] + "\"<span>"+iname.replace(/_/g, " ")+"</span><span>"+inum+"</span>"
                        document.getElementById("itemlist").appendChild(newelement)
                    }
                    document.getElementById("storagepoints").innerHTML="<h1>Inventory</h1><p>" + inventorypoints + "/" + maxinvpoints + " storage points used</p>"
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
        if (block != undefined) {
        var block=document.elementFromPoint(Math.floor(window.innerWidth /2), Math.floor(window.innerHeight /2)).parentElement.parentElement.parentElement
        if (block.hasAttribute("childnum")) {
            var voxel=scene2.getVoxels() [Number(block.getAttribute("childnum"))]
        var enemy=voxel.enemy
        if (enemy.rideable==true) {
            guidePanel(ridemessage)
        }
        }
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
                var enemy=voxel.enemy
                if (enemy.rideable==true) {
                    ride(enemy)
                }
                }
                }
                
            clicked=false
        }
        
    }
}
var placeonchunck=[0,0,0]
var lastchunk="0,0"
function moveplayer(x,y,z, loadChunk=true, userotation=true, moveplaceonchunk=true) {
    
    var rotation=scene2.getRotationY() / maxrotate * 360
    var movex=0
    var movey=0
    var movez=0
    if (moveplaceonchunk==true) {
        placeonchunck[0]+=x
    placeonchunck[1]+=y
    placeonchunck[2]+=z
    }
    
    for (var j=0; j < placeonchunck.length;j++) {
        if (placeonchunck[j] >= 500) {
            placeonchunck[j]-=500
        }
        if (placeonchunck[j] <0) {
            placeonchunck[j]+=500
        }
    }
    //working
    if (userotation==true) {
    document.getElementById("rotation").innerHTML=rotation
    if (rotation < 45) {
        document.getElementById("compass1").innerHTML="Up"
        movez= z *-1
        movex= x * -1
    }else if (rotation < 135) {
        document.getElementById("compass1").innerHTML="Right"
        movex= z 
        movez= x * -1
    }else if (rotation < 225) {
        document.getElementById("compass1").innerHTML="Bottom"
        movez=z 
        movex= x
    }else if (rotation < 315) {
        document.getElementById("compass1").innerHTML="Left"
        movez= x  
        movex= z *-1
    }else{
        document.getElementById("compass1").innerHTML="Up"
        movez= z *-1
        movex= x *-1
    }
    }else{
        movex=x
        movez=z
    }
    //Save new coordinates
   localStorage.playerx=Number(localStorage.playerx) + movex
    localStorage.playery=Number(localStorage.playery) + movey
    localStorage.playerz=Number(localStorage.playerz) + movez
    
    if (loadChunk==true) {
         if (Math.floor(Number(localStorage.playerx)/500) + "," + Math.floor(Number(localStorage.playerz)/500) != lastchunk) {
        loadchunk(Math.floor(Number(localStorage.playerx)/500), Math.floor(Number(localStorage.playerz)/500))
        lastchunk2=lastchunk
        lastchunk=Math.floor(Number(localStorage.playerx)/500) + "," + Math.floor(Number(localStorage.playerz)/500) 
    }
    }
    var placeonchunck2=(Number(localStorage.playerx) - Math.floor(Number(localStorage.playerx) / 500) * 500 )+ "," + (Number(localStorage.playerz) - Math.floor(Number(localStorage.playerz) / 500) * 500)
    document.getElementById("position1").innerHTML="X: " + localStorage.playerx + "<br>Y: " + localStorage.playery + "<br>Z: " + localStorage.playerz + "<br>Last chunk: "+lastchunk2+"<br>Chunk: " + lastchunk + "<br>Place on chunck: " + placeonchunck + "<br>New place on chunck: " + placeonchunck2
    //Update blocks
    var voxels=scene2.getVoxels()
    
    for (var i=0; i < voxels.length; i++) {
        var voxel=voxels[i]
        voxel.setPositionX(voxel.getPositionX() +movex)
        voxel.setPositionY(voxel.getPositionY() +movey)
        voxel.setPositionZ(voxel.getPositionZ() +movez)
    }
    //Update light sources
    var voxels=scene2.getLightSources()
    for (var i=0; i < voxels.length; i++) {
        var voxel=voxels[i]
        voxel.setPositionX(voxel.getPositionX() +movex)
        voxel.setPositionY(voxel.getPositionY() +movey)
        voxel.setPositionZ(voxel.getPositionZ() +movez)
    }
    //Make tha game run smoother
    performanceManager(x!=0, y!=0, z!=0)
}