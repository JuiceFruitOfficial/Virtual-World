function encrypt(string) {
    var str= "abcdefghijklmnopqrstuvwxyz1234567890!@#€%&/?:-_,*";
    var nums = [3,10,-10,7,15,8,10,7,4];
    var num=0
    var i2=1
    var result = str.substr(nums[num]) + str.substr(0, nums[num]);
    var string=" "+string+" "
    for (var i=0; i < (string.length-1)*nums.length; i++) {
        if (i2==string.length-1) {
            num++
            //alert(num+"\nString: " + string + "\nNums: " +nums)
            i2=1
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
        

        i2++
        
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

