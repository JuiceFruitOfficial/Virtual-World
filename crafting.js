function placeCraftingItem(x,y,z,name,health,loot,materials) {
    creategameobject(name,x,z,health,loot,y)
    var materials2=materials.split(":").join(":0/")
    gameobjects[gameobjects.length-1].setAttribute("crafting",materials2)
    gameobjects[gameobjects.length-1].className+=" crafting"
    return [gameobjects.length-1, gameobjects[gameobjects.length-1]]
}

function addToCraftingItem(name, num) {
    var items=gameobjects[num].getAttribute("crafting").split(",")
    var done=0
        for (var i=0; i<items.length;i++) {
            var name1=items[i].split(":") [0]
            if (name1==name) {
                //Add item to crafting
                items[i]=name1+":"+(Number(items[i].split(":") [1].split("/") [0])+1)+"/"+items[i].split(":") [1].split("/") [1]
            }
            if (items[i].split(":") [1].split("/") [0]==items[i].split(":") [1].split("/") [1]) {
                done++
            }
        }
    gameobjects[num].setAttribute("crafting",items.join(","))
    if (done==items.length) {
        gameobjects[num].removeAttribute("crafting")
        gameobjects[num].className=gameobjects[num].className.replace("crafting","")
        document.getElementById("crafting").style.display="none"
    }else{
        opencraftingmenu(num)
    }
    
}

function opencraftingmenu(num) {
    if (gameobjects[num].hasAttribute("crafting")) {
        document.getElementById("crafting").style.display="grid"
        document.getElementById("crafting").innerHTML=""
        document.getElementById("crafting").style.left=(gameobjects[num].offsetLeft+gameobjects[num].offsetWidth/2-375/2) + "px"
        document.getElementById("crafting").style.top=(gameobjects[num].offsetTop-60) + "px"
        var items=gameobjects[num].getAttribute("crafting").split(",")
        for (var i=0; i<items.length;i++) {
            var newelement=document.createElement("div")
            var newelement3=document.createElement("div")
            newelement3.className=iteminfo(items[i].split(":") [0]).class
            newelement3.style.position="relative"
            newelement.appendChild(newelement3)
            var newelement2=document.createElement("p")
            newelement2.innerHTML=items[i].split(":") [1]
            newelement.appendChild(newelement2)
            
            var newelement4=document.createElement("button")
            newelement4.innerHTML="Add"
            newelement4.setAttribute("onclick","addToCraftingItem('"+items[i].split(":") [0]+"',"+num+")")
            newelement.appendChild(newelement4)
            document.getElementById("crafting").appendChild(newelement)
        }
    }else{
        console.log(gameobjects[num])
        throw("gameobjects["+num+"] is not craftable")
        
    }
    
    
}