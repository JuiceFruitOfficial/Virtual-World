function showwebsite(html,url) {
    document.getElementById("window").innerHTML = ""
    document.getElementById("jfos").style.display="block"
    document.getElementById("address").value=url
    var ifrm = document.createElement("iframe")
    ifrm.setAttribute("id","iframe1")
    ifrm.src="about:blank"
    document.getElementById("window").appendChild(ifrm)
    ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
    ifrm.document.open();
    ifrm.document.write(html);
    ifrm.document.close();
    var elements=ifrm.document.body.getElementsByTagName("*")
    for (var i=0; i<elements.length; i++) {
        //Redirects urls
        var element = elements[i]
        if (element.hasAttribute("href")) {
            element.setAttribute("href",redirect(element.getAttribute("href"),url.substring(0,url.lastIndexOf("/"))))
        }
        if (element.hasAttribute("action")) {
            element.setAttribute("action",redirect(element.getAttribute("action"),url.substring(0,url.lastIndexOf("/"))))
        }
        if (element.hasAttribute("src")) {
            if (element.src.includes(window.location.href.substring(0,window.location.href.lastIndexOf("/")))) {
                src=element.src.substring(window.location.href.lastIndexOf("/"), element.src.length)
                if (src.includes(":")) {
                    requestFromNetwork(src, deviceId,10,function (data,element){element.src=data})
                }else{
                requestFromNetwork(url.substring(0,url.lastIndexOf("/")) + "/" + src, deviceId,10,function (data,element){element.src=data})
            }
        }
        }
    }
    var newelement = document.createElement("script")
    newelement.innerHTML="var rvar=undefined; function fwrite(data,path) {top.postMessage('fwrite:'+data+','+path, '*');}\nfunction fread(path) {top.postMessage('fread:'+path, '*');rvar=undefined;for (var i; rvar != undefined; i=undefined) {}return rvar;}"
    ifrm.document.body.appendChild(newelement)
}

function redirect(url, baseurl="") {
    if (url.includes("://")) {
        return url
    }else if (url.includes(":")) {
        return 'data:text/html,' + encodeURIComponent("<script>window.postMessage('redr:"+ url +"','*')</script>")
    }else{
        return 'data:text/html,' + encodeURIComponent("<script>window.postMessage('redr:"+ baseurl + "/" + url +"','*')</script>")
    }
}