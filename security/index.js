function encrypt(string) {
    var str= "abcdefghijklmnopqrstuvwxyz1234567890!@#€%&/?:-_,*;";
    var nums = [3,10,-10,7,15,8,10,7,4];
    var num=0
    var i2=1
    var result = str.substr(nums[num]) + str.substr(0, nums[num]);
    var string=" "+string+" "
    var strlen= (string.length-1)
    for (var i=0; i <nums.length; i2++) {
        if (i2==strlen-1) {
            if (nums.length > num) {
                 num++
            //alert(num+"\nString: " + string + "\nNums: " +nums)
            i2=1
            
            }
           i++
            if (nums[num] < 0) {
                nums[num]=nums[num]*(-1)
                var result = str.substr(nums[num]) + str.substr(0, nums[num]);
                str=result
                var result = str.substr(nums[num]) + str.substr(0, nums[num]);
            }else{
                var result = str.substr(nums[num]) + str.substr(0, nums[num]);
            }
            
        }
        var char=string.charAt(i2)
        var charnum=str.indexOf(char)
        string=string.substr(0,i2) + result.charAt(charnum)+string.substr(i2+1, string.length-1)
        
        
    }
    return string.substr(1, string.length-2)
}



function strcheck(string) {
    if (string=="") {
        return false
    }
    var string=string.toLowerCase()
    for (var i=0; i <string.length; i++) {
        if ("abcdefghijklmnopqrstuvwxyz1234567890!@#€%&/?:-_,*".includes(string.charAt(i))) {
            //Character is safe
        }else{
            console.log(i + "\n" + string.charAt(i))
            return false
        }
    }
    return true
}

//--------------------------------Performance manager--------------------------------
function performanceManager(x=true,y=true,z=true) {
    var voxels=scene2.getVoxels()
    var cubes=document.getElementById("worlddiv").getElementsByClassName("scene") [0].getElementsByClassName("zoom") [0].getElementsByClassName("camera") [0].getElementsByClassName("cube")
    //console.log(cubes)
    for (var i=0; i < cubes.length; i++) {
        //console.log(voxels[i].getPositionX())
        if (x==true) {
            if (voxels[i].getPositionX() < 0) {
            cubes[i].getElementsByClassName("face left") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face left") [0].style.display="block"
            }
            if (voxels[i].getPositionX() > 0) {
                cubes[i].getElementsByClassName("face right") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face right") [0].style.display="block"
            }
        }
        if (z==true) {
            if (voxels[i].getPositionZ() < 0) {
                cubes[i].getElementsByClassName("face back") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face back") [0].style.display="block"
            }
            if (voxels[i].getPositionZ() > 0) {
                cubes[i].getElementsByClassName("face front") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face front") [0].style.display="block"
            }
        }
        if (y==true) {
            if (voxels[i].getPositionY() < 0) {
                cubes[i].getElementsByClassName("face bottom") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face bottom") [0].style.display="block"
            }
            if (voxels[i].getPositionY() > 300) {
                cubes[i].getElementsByClassName("face top") [0].style.display="none"
            }else{
                cubes[i].getElementsByClassName("face top") [0].style.display="block"
            }
        }
    }
}
