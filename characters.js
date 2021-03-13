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
    updatehotbar()
}
function newcharacter(num) {
    document.body.style.background="linear-gradient(45deg, rgb(2, 0, 22) 0%, rgb(0, 2, 37) 100%)"
    document.getElementById("characterdiv").style.display="none"
document.getElementById("createcharacter").style.display="block"
document.getElementById("createcharbtn").setAttribute("onclick", "finishcharacter("+num+")")
loadcharacter({},document.getElementById("previewchar0"))
}

function loadcharacter(data={}, element, version=0) {
        var newelement = document.createElement(("div"))
    newelement.className = "player"
    var newelement2 = document.createElement(("div"))
    newelement2.className = "leg rightleg"
    newelement2.style.animationPlayState="paused"
    newelement.appendChild(newelement2)
    var newelement2 = document.createElement(("div"))
    newelement2.className = "leg leftleg"
    newelement2.style.animationPlayState="paused"
    newelement.appendChild(newelement2)
    var newelement2 = document.createElement(("div"))
    newelement2.className = "hand righthand"
    newelement.appendChild(newelement2)
    var newelement2 = document.createElement(("div"))
    newelement2.className = "hand lefthand"
    newelement.appendChild(newelement2)
    var newelement2 = document.createElement(("div"))
    newelement2.className = "head"
    //Apply the custom data
    if (data.hasOwnProperty("head")) {
        if (data.head.hasOwnProperty("color")) {
            newelement2.style.backgroundColor=data.head.color
        }
        if (data.head.hasOwnProperty("round")) {
            newelement2.style.borderRadius=data.head.round
        }
    }
    if (data.hasOwnProperty("hat")) {
        var newelement3=document.createElement("div")
        newelement3.style.width="100%"
        newelement3.style.height="20px"
        newelement3.style.borderTopLeftRadius="5px"
        newelement3.style.borderTopRightRadius="5px"
        newelement3.style.position="absolute"
        newelement3.style.top="0px"
        newelement3.style.left="0px"
        newelement3.style.backgroundColor=data.hat.color
        newelement2.appendChild(newelement3)
    }
    newelement.appendChild(newelement2)
    var newelement2 = document.createElement(("div"))
    newelement2.className = "body"
    newelement.appendChild(newelement2)
    
    //Attach the character to element
    element.appendChild(newelement)
    return newelement
    
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
    document.getElementById("previewchar0").getElementsByClassName("head") [0].style.backgroundColor=skin
}

function showprofile(name) {
    document.getElementById("profilediv").style.display="block"
    document.getElementById("profilename1").innerHTML=name
    requestFromNetwork("user:" + name, deviceId, showprofile2)
}

function showprofile2(data) {

}

function textbox(header, text, readtext=0, button1="Close", onclick1="document.getElementById('textbox').style.display='none';",button2="", onclick2="") {
    playing=false
    document.exitPointerLock()
    document.getElementById("textbox").style.display="block"
    document.getElementById("textheader").innerHTML=header
    document.getElementById("textbtn1").innerHTML=button1
    document.getElementById("textbtn1").setAttribute("onclick", "document.getElementById('textbox').style.display='none';"+onclick1)
    if (button2 != "") {
        document.getElementById("textbtn2").innerHTML=button2
    document.getElementById("textbtn2").setAttribute("onclick", "document.getElementById('textbox').style.display='none';"+onclick2)
    }
    if (readtext > 0) {
    typewriter(document.getElementById("textboxtext"), text, 0, readtext)
    }else{
        document.getElementById("textboxtext").innerHTML=text
    }
}

function typewriter(element, text, i, speed) {
    element.innerHTML=text.substring(0,i)
    if (i < text.length) {
        setTimeout(typewriter,speed,element,text,i+1,speed)
    }
}





//--------------------------------Character data--------------------------------
var soldierdata1={
    head: {
        round: "50%",
        color: "#996600"
    },
    hat: {
        color: "#339933"
    }
}
var soldierdata2={...soldierdata1, head: {color:"#ffcc80", round: "20px"}}
