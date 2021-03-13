var ridemessage="Left click to ride"
var playerspeed=30

function updatehotbar() {
    var inv=localStorage.getItem("inventory"+selectedchar).split(";")
    if (inv.length > 2) {
        hotbarslot1=inv [1]
    }else{
        hotbarslot1=":"
    }
    
    if (inv.length > 3) {
        hotbarslot2=inv [2]
    }else{
        hotbarslot2=":"
    }if (inv.length > 4) {
        hotbarslot3=inv [3]
    }else{
        hotbarslot3=":"
    }
    console.log(inv)
    var hotbars=document.getElementById("hotbar").getElementsByTagName("div") 
    hotbars[0].innerHTML="<span class=\"" + iteminfo(hotbarslot1.split(":") [0]) [1] + "\"></span>"
    hotbars[1].innerHTML="<span class=\"" + iteminfo(hotbarslot2.split(":") [0]) [1] + "\"></span>"
    hotbars[2].innerHTML="<span class=\"" + iteminfo(hotbarslot3.split(":") [0]) [1] + "\"></span>"


}