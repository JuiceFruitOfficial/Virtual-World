function actions(name) {
    document.getElementById("actions").innerHTML=""
    var mouse=document.getElementById("mouse")
    if (name=="") {
        mouse.className="default"
    }else{
    //console.log(name)
    
    var list=iteminfo(name) [5]
    var selected=false
    for (var i=0;i<list.length; i++) {
        
        var newelement=document.createElement("div")
        newelement.innerHTML=list[i]
        newelement.style.top=(10+i*60)+"px"
        if (list[i]==currentaction) {
            newelement.className="selected"
            selected=true
        }
        newelement.setAttribute("onclick","currentaction=this.innerHTML; actions(currentitem)")
        document.getElementById("actions").appendChild(newelement)
    }
    if (selected==false) {
        document.getElementById("actions").getElementsByTagName("div") [0].className="selected"
        currentaction=document.getElementById("actions").getElementsByTagName("div") [0].innerHTML
    }
    
    
    if (currentaction=="place") {
        mouse.className=iteminfo(name) [1]
    }else if (currentaction.includes("make a")) {
        var item=currentaction.split("make a") [1].substring(currentaction.split("make a") [1].indexOf(" ")+1, currentaction.split("make a") [1].length)
        mouse.className=iteminfo(item) [1]
    }else{
        mouse.className="default"
    }

    }
}

function openinventory(data, place=0,source) {
    var verified=false
    var verifiedsource=""
    if (source=="inventory") {
        if (data==localStorage.getItem("inventory"+selectedchar)) {
            verified=true
            verifiedsource="inventory;"+data
        }
    }

    if (verified==true) {
        if (source=="inventory") {
            if (verifiedsource=="inventory;"+data) {
                inventory = localStorage.getItem("inventory"+selectedchar).split(";")
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

var currentitem=""
function selectbaritem(num) {
    selectedhotbarslot=num
    updatehotbar()
    var hotbars=document.getElementById("hotbar").getElementsByTagName("div") 

    hotbars[0].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars[1].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars[2].style.backgroundColor="rgba(255, 225, 159, 0.75)"
    hotbars [num].style.backgroundColor="rgba(255, 225, 255, 0.75)"
    var item=localStorage.getItem("inventory"+selectedchar).split(";") [num+1].split(":") [0]
    currentitem=item
    actions(item)
}
function iteminfo(name) {
    //[space, className, damage, durability, range (px),actions]
    if (items.hasOwnProperty(name)) {
        if (items[name].hasOwnProperty("space")) {
            items[name][0]=items[name].space
        }
        if (items[name].hasOwnProperty("class")) {
            items[name][1]=items[name].class
        }
        if (items[name].hasOwnProperty("damage")) {
            items[name][2]=items[name].damage
        }
        if (items[name].hasOwnProperty("durability")) {
            items[name][3]=items[name].durability
        }
        if (items[name].hasOwnProperty("range")) {
            items[name][4]=items[name].range
        }
        if (items[name].hasOwnProperty("actions")) {
            items[name][5]=items[name].actions
        }
        return items[name]
    }else if (name=="iron_pickaxe") {
        return [5,"ironpickaxe", 10, 500, 200,"break,slice"]
    }else if (name=="wood") {
        return [5,"wood", 2, 500,20,"break,place"]
    }else if (name=="stone") {
        return [1,"stone", 5, 5, 5,"break,place,throw, make a campfire"]
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

