function devminal(command) {
    if (command.substring(0,"printImg(".length)=="printImg(") {
        var imgurl=command.substring("printImg".length+1, command.length-1)
        addlog("Loading image: "+ imgurl)
        document.getElementById("loadimg").src=imgurl
        document.getElementById("loadimg").parentElement.style.display="block"
    }else if (command=="help") {
        //Help log
        devminal("clear")
        addlog("This is the JuiceFruit virtual world programming language help")
        addlog("-------Supported commands-------")
        addlog("\nhelp\ndisplays this menu")
        addlog("\nprintImg([image url])\nloads image to 3d projector") 
        addlog("\nclear\nclears the screen")  
        addlog("\ninfo\nprints information about JFVW")
    }else if (command=="clear") {
        document.getElementById("consolelog").value=""
    }else if (command=="info") {
        devminal("clear")
        addlog("----------Info----------")
        addlog("3D-resolution: 2x2")
        addlog("Version: " + version)
    }else if (command.substring(0,"createElement{".length)=="createElement{") {
        var elementData=command.substring("createElement{".length, command.length-1).replace(/\n/g, "").split(";")
        var newelement=document.createElement("div")
        for (var i=0; i+1 < elementData.length; i++) {
            if (elementData[i].split(":").length==2) {
            var attribute=elementData[i].split(":") [0]
            var value=elementData[i].split(":") [1]
            if (value.charAt(0)==" ") {
                value=value.substring(1,value.length)
            }
            if (attribute.charAt(0)==" ") {
                attribute=attribute.substring(1,attribute.length)
            }
            if (attribute=="width") {
                alert(value)
                newelement.style.width=value
            }
            if (attribute=="height") {
                newelement.style.height=value
            }
            if (attribute=="bg-color") {
                newelement.style.backgroundColor=value
            }
            if (attribute=="text-color") {
                newelement.style.color=value
            }
            if (attribute=="top") {
                newelement.style.top=value
            }
            if (attribute=="left") {
                newelement.style.left=value
            }
            if (attribute=="bottom") {
                newelement.style.bottom=value
            }
            if (attribute=="right") {
                newelement.style.right=value
            }
            if (attribute=="id") {
                projectorIds.push([value, projectorElements.length])
            }
        }else{
            console.log("error")
            addlog("Syntax error: no value for \"" + elementData[i].split(":") [0]+"\"")
        }
    }
    newelement.style.position="absolute"
    projectorElements.push(newelement)
    }else{
        //If an unknown command
        addlog("Unknown command: "+ command)
    }
}

function devc(event) {
    if (event.keyCode==13) {
        devminal(document.getElementById("command").value)
        document.getElementById("command").value=""
    }
}
function runpr(num) {
    addlog("Running:" + testpr[num])
    var commands=testpr2[num].split("\n")
    for (var i=0; i < commands.length; i++) {
        devminal(commands[i])
    }
}

function addlog(text) {
    var logel=document.getElementById("consolelog")
    logel.value=logel.value+"\n"+text
    logel.scrollTop=logel.scrollHeight
}

function resolutionTest(x,y) {
    var resdiv=document.getElementById("resdiv")
    resdiv.innerHTML=""
    for (var i=0; i < x*y; i++) {
        var newelement=document.createElement("span")
        newelement.style.display="inline-block"
        newelement.style.width=Math.floor(window.innerWidth / x) + "px"
        newelement.style.height=Math.floor(window.innerHeight / y) + "px"
        if (Math.floor(i/2)==i/2) {
            newelement.style.backgroundColor="green"
        }
        resdiv.appendChild(newelement)
    }
    resdiv.style.display="block"
}

function balltest() {
    document.getElementById('testdiv2').style.display='block'
    document.body.style.backgroundColor="black"
    document.getElementById("devdiv").style.display="none"
}