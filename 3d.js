function create3delement(name, x,y,z,x2,y2,z2,rotation=0,type="cube") {
    if (x < x2) {
        var width=x2-x
    }else{
        var width=x-x2
    }
    if (y < y2) {
        var height=x2-x
    }else{
        var height=y-y2
    }
    if (z < z2) {
        var depth=z2-z
    }else{
        var depth=z-z2
    }
    if (type=="cube") {
        var newelementx=document.createElement("div")
        var newelementy=document.createElement("div")
        var newelementz=document.createElement("div")
        //Set the sizes of the cube
        newelementx.style.width=depth + "px"
        newelementx.style.height=height + "px"
        newelementy.style.width=width + "px"
        newelementy.style.height=depth + "px"
        newelementz.style.width=width + "px"
        newelementz.style.height=height + "px"
        //Set the position
        if (x > x2) {
            newelementy.style.left=x2+"px"
            newelementz.style.left=x2+"px"
        }else{
            newelementy.style.left=x+"px"
            newelementz.style.left=x+"px"
        }
        if (z > z2) {
            newelementx.style.left=z2+"px"
            newelementy.style.top=z2+"px"
        }else{
            newelementx.style.left=z+"px"
            newelementy.style.top=z+"px"
        }
        if (y > y2) {
            newelementx.style.top=y2+"px"
            newelementz.style.top=y2+"px"
        }else{
            newelementx.style.top=y+"px"
            newelementz.style.top=y+"px"
        }
        //colors
        newelementx.style.backgroundColor="blue"
        newelementy.style.backgroundColor="lightblue"
        newelementz.style.backgroundColor="cyan"
        //Put the position to absolute
        newelementx.style.position="absolute"
        newelementz.style.position="absolute"
        newelementy.style.position="absolute"
        //Put the eements in the 3d
        document.getElementById("front-wall").appendChild(newelementz)
        document.getElementById("ceiling").appendChild(newelementy)
        document.getElementById("left-wall").appendChild(newelementx)
    }
}