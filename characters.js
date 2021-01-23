var selectedchar=0
//----------------------Character------------------------
function charactersetup() {
    document.getElementById("allowmedia").className="modal done"
    var chardivs1=document.getElementById("characterdiv").getElementsByTagName("div")
    var chardivs=[]
    for (var i=0; i < chardivs1.length; i++) {
        if (chardivs1[i].parentElement==document.getElementById("characterdiv")) {
            chardivs.push(chardivs1[i])
        }
    }
    if (localStorage.character1) {
        chardivs[0].innerHTML=""
        loadcharacter(localStorage.character1, chardivs[0])
        chardivs[0].setAttribute("onclick","selectchar(1)")
    }else{
        var newelement=document.createElement("span")
        newelement.innerHTML="Create new"
        chardivs[0].setAttribute("onclick","newcharacter(1)")
        chardivs[0].appendChild(newelement)
    }
    if (localStorage.character2) {
        chardivs[1].innerHTML=""
        loadcharacter(localStorage.character2, chardivs[1])
        chardivs[1].setAttribute("onclick","selectchar(2)")
    }else{
        var newelement=document.createElement("span")
        newelement.innerHTML="Create new"
        chardivs[1].setAttribute("onclick","newcharacter(2)")
        chardivs[1].appendChild(newelement)
    }
    if (localStorage.character3) {
        chardivs[2].innerHTML=""
        loadcharacter(localStorage.character3, chardivs[2])
        chardivs[2].setAttribute("onclick","selectchar(3)")
    }else{
        var newelement=document.createElement("span")
        chardivs[2].setAttribute("onclick","newcharacter(3)")
        newelement.innerHTML="Create new"
        chardivs[2].appendChild(newelement)
    }
}
function selectchar(num) {
    document.getElementById("charselectbtn").style.opacity="1"
    document.getElementById("charselectbtn").style.pointerEvents="all"
    selectedchar=num
    var chardivs1=document.getElementById("characterdiv").getElementsByTagName("div")
    var characters=[]
    for (var i=0; i < chardivs1.length; i++) {
        if (chardivs1[i].parentElement==document.getElementById("characterdiv")) {
            characters.push(chardivs1[i])
        }
    }
    for (var i=0; i < characters.length; i++) {
        if (i==num-1) {
            characters[i].style.boxShadow="0px 0px 15px 5px rgba(0,189,0,1)"
            characters[i].style.borderColor="rgb(0,189,0)"
        }else{
            characters[i].style.borderColor="gray"
            characters[i].style.boxShadow="none"
        }
    }
}
function newcharacter(num) {
    document.body.style.background="linear-gradient(45deg, rgb(2, 0, 22) 0%, rgb(0, 2, 37) 100%)"
    document.getElementById("characterdiv").style.display="none"
document.getElementById("createcharacter").style.display="block"
document.getElementById("createcharbtn").setAttribute("onclick", "finishcharacter("+num+")")
}

function loadcharacter(data, element, version=0) {
    console.log(element)
    var data=data.split(";")
    var name=data[0]
    var age=data[1]
    var skincolor1=data[2]
    var haircolor1=data[3]
    var eyecolor1=data[4]
    var favcolor1=data[5]
    var scene1       = new voxelcss.Scene();
	var lightSource1 = new voxelcss.LightSource(300, 300, 300, 750, 0.5, 1);
	var world1       = new voxelcss.World(scene1);
    var editor1      = new voxelcss.Editor(world1);
    editor1.disableAutoSave()
    load3dmodel(babychar, editor1)
    scene1.attach(element);
    scene1.setZoom(0.2)
    scene1.setRotationX(0)
    scene1.setRotationY(0.8)
    scene1.addLightSource(lightSource1);
    editor1.disable()
    var charclothing1=[]
    var chareyes1=[]
    var charhair1=[]
    var charskin1=[]
    var voxels=world1.getVoxels()
    for (var i=0; i < voxels.length; i++) {
        var voxel=voxels[i]
        var color=voxel.getMesh().getFront().getHex()
        if (color=="ffa493") {
            //Add block to skin list
            charskin1.push(voxel)
        }else if (color=="000000") {
            //Add block to eye list
            chareyes1.push(voxel)
        }else if (color=="a74c00") {
            //add block to hair list
            charhair1.push(voxel)
        }else if (color=="000dff") {
            //add block to clothing list
            charclothing1.push(voxel)
        }else {
            //alert(color)
        }

    }
    for (var i=0; i < charhair1.length; i++) {
        charhair1[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(haircolor1)))
    }
    for (var i=0; i < chareyes1.length; i++) {
        chareyes1[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(eyecolor1)))
    }
    for (var i=0; i < charskin1.length; i++) {
        charskin1[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(skincolor1)))
    }
    for (var i=0; i < charclothing1.length; i++) {
        charclothing1[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(favcolor1)))
    }
}
function loading() {
    document.getElementById("testdiv2").style.display="block"
    document.body.style.backgroundColor="black"
}
function playaudio(name) {
    document.getElementById("audio1").src=name
    document.getElementById("audio1").play()
    
}
function finishcharacter(num) {
var characterdata=document.getElementById("charname").value + ";" + document.getElementById("charage1").value + ";" + document.getElementById("skincolor").value + ";" + document.getElementById("haircolor").value + ";" + document.getElementById("eyecolor").value + ";" + document.getElementById("favcolor").value
document.getElementById("characterdiv").style.display="block"
document.body.style.background="linear-gradient(45deg, rgba(116,250,130,1) 0%, rgba(0,123,255,1) 100%)"
if (num==1) {
localStorage.character1=characterdata
}

if (num==2) {
localStorage.character2=characterdata
}

if (num==3) {
localStorage.character3=characterdata
}

document.getElementById("createcharacter").style.display="none"
charactersetup()
}

function updatechar1() {
    var hair=document.getElementById("haircolor").value
    var skin=document.getElementById("skincolor").value
    var fav=document.getElementById("favcolor").value
    var eyes=document.getElementById("eyecolor").value
    for (var i=0; i < charhair.length; i++) {
        charhair[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(hair)))
    }
    for (var i=0; i < chareyes.length; i++) {
        chareyes[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(eyes)))
    }
    for (var i=0; i < charskin.length; i++) {
        charskin[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(skin)))
    }
    for (var i=0; i < charclothing.length; i++) {
        charclothing[i].setMesh(new voxelcss.Mesh(new voxelcss.ColorFace(fav)))
    }
}

function showprofile(name) {
    document.getElementById("profilediv").style.display="block"
    document.getElementById("profilename1").innerHTML=name
    requestFromNetwork("user:" + name, deviceId, showprofile2)
}

function showprofile2(data) {

}

function textbox(header, text, readtext=0, button1="Close", onclick1=function(){document.getElementById("textbox").style.display="none";playing=true;document.getElementById("worlddiv").requestPointerLock()},button2="", onclick2=function(){}) {
    playing=false
    document.exitPointerLock()
    document.getElementById("textbox").style.display="block"
    document.getElementById("textheader").innerHTML=header
    document.getElementById("textbtn1").innerHTML=button1
    document.getElementById("textbtn1").onclick=function () {onclick1()}
    if (button2 != "") {
        document.getElementById("textbtn2").innerHTML=button2
    document.getElementById("textbtn2").onclick=function () {onclick2()}
    }
    
    typewriter(document.getElementById("textboxtext"), text, 0, 50)
}

function typewriter(element, text, i, speed) {
    element.innerHTML=text.substring(0,i)
    if (i < text.length) {
        setTimeout(typewriter,speed,element,text,i+1,speed)
    }
}

function createEnemy(name) {
    var enemy={
        hp: 100,
        rideable: false,
        x: 0,
        y: 0,
        z: 0,
        name: name,
        addToEditor: function (editor) {
            var temp1=scene2.getVoxels().length
            load3dmodel(enemy.data,editor,true)
            this.voxels=scene2.getVoxels().slice(temp1)
            this.updateVoxels()
        },
        move: function (nx,ny,nz) {
            this.x+=nx
            this.y+=ny
            this.z+=nz
            for (var i=0; i < this.voxels.length; i++) {
                var voxel=this.voxels[i]
                voxel.setPositionX(voxel.getPositionX() +nx)
                voxel.setPositionY(voxel.getPositionY() +ny)
                voxel.setPositionZ(voxel.getPositionZ() +nz)
            }
            this.updateVoxels()
        },
        position: function (nx,ny,nz) {
            this.move(nx-this.x,ny-this.y,nz-this.z)
        },
        updateVoxels: function () {
            for (var i=0; i < this.voxels.length; i++) {
                var voxel=this.voxels[i]
                voxel.enemy=enemy
            }
        },
        data: "",   
        voxels: [],
        rideable: false
    }
    if (name=="taxi") {
        enemy.data=taximodel
        enemy.rideable=true
        enemy.ride={
            autopilot: 2,
            speed: 1,
            route: "",
            inside: {
                wheel: "t1",
                window: "w1"
            }
        }
    }
    return enemy
}

function ride(enemy) {
    //Check if enemy contains ride property
    if (enemy.hasOwnProperty("ride")) {
        document.getElementById("worlddiv").style.height="70vh"
        document.getElementById("worlddiv").style.width="70vw"
        playing="ride"
    }else{
        Error("Enemy has no 'ride' property")
    }
}