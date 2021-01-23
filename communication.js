var creturn;
if (localStorage.deviceId) {
    
}else{
    localStorage.deviceId=Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10)+ "" + Math.floor(Math.random() * 10)+ "" + Math.floor(Math.random() * 10)+ "" + Math.floor(Math.random() * 10)
}
if (localStorage.networkdata) {

}else{
    localStorage.networkdata=`site:juicefruit.jf/login.html,<html><body style="text-align: center;"><div style="width: 80vw; height: 80vh; border-radius: 25px; border: 3px solid rgb(0, 204, 255); position: absolute; transform: translate(-50%,-50%); top: 50%; left: 50%; display: grid; grid-template-columns: 50% 50%;"><div style="position: relative"><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)"> <span>Username: </span><input type="text" id="username"> <br><span>Password: </span><input type="password" id="password"> <input type="file" id="file" name="img" hidden onchange="previewFile()"><br> <input type="button" onclick="register()" value="Register"> <input type="button" onclick="login()" value="Log in"></div></div><div><h2>Picture</h2> <img src="images/nerdclan.png" style="width: 200px; height: 200px; " id="preview" onclick="document.getElementById('file').click()"> <script>function register(){var username=document.getElementById("username").value;var password=document.getElementById("password").value;fwrite(password,username+".txt");top.postMessage("login:"+username+";"+password,"*");} function previewFile(){var preview=document.getElementById("preview");var file=document.getElementById('file').files[0];var reader=new FileReader();reader.onloadend=function(){preview.src=reader.result;};if(file){reader.readAsDataURL(file);}else{preview.src="";}} function login(){var username=document.getElementById("username").value;var password=document.getElementById("password").value;var f=fread(username+".txt");if(f==password){top.postMessage("login:"+username+";"+password,"*");}}</script> </div></div></body></html>`
}
deviceId=localStorage.deviceId


//List of all of the connected devices
var connectionlist=[]

function requestFromNetwork(address, origin, returndata, creturn1) {
    //Returndata = how many devices to scan before stopping if data not returned
    var networkdata=localStorage.networkdata.split("\\;\\")
    var found=false
    for (var i=0; i < networkdata.length; i++) {
        if (networkdata[i].split(",") [0]==address.split("[") [0]) {
            //If found, send it back
            creturn1(networkdata[i].substring(networkdata[i].search(",")+1, networkdata[i].length),address)
            found=true
        }
    }
    if (found==false) {
        sendToDevice(address, "all", origin, returndata)
        creturn=creturn1
    }
    
}

function onNetworkRequest(data,origin) {
    if (origin=="return") {
        creturn(data)
    }else{
        //Seaching data from saved data
    var address=data
    var networkdata=localStorage.networkdata.split("\\;\\")
    for (var i=0; i < networkdata.length; i++) {
        if (networkdata[i].split(",") [0]==address.split("[") [0]) {
            //If found, send it back to the requester
            sendToDevice(networkdata[i], origin, "return")
        }
    }
}
}

function sendToDevice(data, device, origin, returndata) {
    qrcode.clear()
    qrcode.makeCode("https://juicefruitofficial.github.io/Virtual-World?d=" + device + "&f=" + deviceId + "&d=" + data + "&o=" + origin + "&r=" + returndata);
}

//Notifications
function sendNotification(name, message) {
    var notificationdiv=document.getElementById("notificationdiv")
    var newelement=document.createElement("div")
    newelement.innerHTML="<strong>" + name + "</strong><br>" + message
    notificationdiv.insertBefore(newelement, notificationdiv.childNodes[0])
    setTimeout(function (newelement) {newelement.parentElement.removeChild(newelement);},5000,newelement)
}

function loadWebsite(url) {
    requestFromNetwork(url,deviceId,10, showwebsite)
}
//Handle messages between iframes
function receiveMessage(event) {
    console.log(event)
    var data=event.data.split(":")
    if (data[0]=="login") {
        username=data[1].split(";") [0]
        password=data[1].split(";") [1]
        localStorage.lastuser=data[1].split(";") [0]
        localStorage.lastpass=data[1].split(";") [1]
        document.getElementById("jfos").style.display="none"
        document.getElementById("textbox").style.display="none"
        playing=true
        document.getElementById("iframe1").src="about:blank"
        playaudio("freestuff.m4a")
        setTimeout(loadplace, 10000, "SkyCityShop")
    }else if (data[0]=="fwrite") {
        var file=data[0].split(",") [1]
        var write=data[0].split(",") [0]
        fwrite(write, file)
    }else if (data[0]=="fread") {
        requestFromNetwork(data[1], deviceId,10,function (data) {var el=document.createElement("script");el.innerHTML="rvar=\"" + data + "\"";document.getElementById("window").getElementsByTagName("iframe").contentWindow.document.body.appendChild(el)})
    }
    
}
window.addEventListener("message", receiveMessage, false);
function fwrite(data, file) {
    var networkdata=localStorage.networkdata.split("\\;\\")
    for (var i=0; i < networkdata.length; i++) {
        var found=false
        var ndata=""
        if (networkdata[i].split(",") [0]==data) {
            ndata+="\\;\\"+file+","+data 
            found=true
        }else{
            ndata+="\\;\\"+ networkdata[i] 
        }
    }
    if (found==false) {
        localStorage.networkdata+="\\;\\"+file+","+data
        sendToDevice(file+","+data,"all",deviceId,10)
    }else{
        localStorage.networkdata=ndata
    }
    
}