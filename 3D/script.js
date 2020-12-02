(function () {
    let rotateX = 0,
        rotateY = 0,
        persp = 400

    document.onkeydown = function (e) {
        if (e.keyCode === 37) rotateY -= 4
        else if (e.keyCode === 38) rotateX += 4
        else if (e.keyCode === 39) rotateY += 4
        else if (e.keyCode === 40) rotateX -= 4
        else if (e.keyCode === 219) persp -= 50
        else if (e.keyCode === 221) persp += 50

        document.querySelector('.cube').style.transform = "rotateY(" + rotateY + "deg) " + "rotateX(" + rotateX + "deg)";
        document.querySelector('.container').style.perspective = persp + "px";
    }
})()

