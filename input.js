var projectorloop;
function scan3dspace() {
    document.getElementById("lefthand").style.display="none"
    document.getElementById("righthand").style.display="none"
    document.getElementById("target1").style.display="none"
    document.getElementById("target2").style.display="none"
    document.getElementById("videoElement").style.visibility="hidden"
    var test1=makebeep(500)
    setTimeout(stopbeep, 3000, test1)
    setTimeout(loadplace, 6000, "beach")
    projectorloop=setInterval(projector, 100)
}