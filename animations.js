function animate(element, name, duration) {
    if (name=="fadeIn") {
        element.style.opacity="0"
        var interval1=setTimeout(function(){}, 0)
        var interval=setInterval(function (element, interval) {element.style.opacity=Number(element.style.opacity) + 0.001; if (Number(element.style.opacity)>=1) {clearInterval(interval+1);}}, duration / 1000 -1, element, interval1)
    }
    if (name=="fadeOut") {
        element.style.opacity="1"
        var interval1=setTimeout(function(){}, 0)
        var interval=setInterval(function (element, interval) {element.style.opacity=Number(element.style.opacity) - 0.001; if (Number(element.style.opacity)<=0) {clearInterval(interval+1);}}, duration / 1000-1, element, interval1)
    }
}