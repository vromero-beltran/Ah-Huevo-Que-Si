const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt= e.clientX;
}

window.onmousedown = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage
}

window.onmousedown = e => {
    if(track.dataset.mouseDownAt = "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta/maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.preventage) + percentage;

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image"))
        image.animate({
            objectPosition: `${100 + nextPercentage} center`
        }, { duration: 1200, fill: "forwards"});
}
