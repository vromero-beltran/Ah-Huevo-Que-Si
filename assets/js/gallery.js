// const track = document.getElementById("image-track");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//     track.dataset.mouseDownAt = "0";  
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//     maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * -100,
//     nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//     nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//     track.dataset.percentage = nextPercentage;

//     track.animate({
//         transform: `translate(${nextPercentage}%, 50%)`
//     }, { duration: 1200, fill: "forwards" });

//     for(const image of track.getElementsByClassName("image")) {
//         image.animate({
//             objectPosition: `${100 + nextPercentage}% center`
//         }, { duration: 1200, fill: "forwards"});
//     }
// }

// window.onmousedown = e => handleOnDown(e);
// window.ontouchstart = e => handleOnDown(e.touches[0]);
// window.onmouseup = e => handleOnUp(e);
// window.ontouchend = e => handleOnUp(e.touches[0]);
// window.onmousemove = e => handleOnMove(e);
// window.onmousemove = e => handleOnMove(e.touches[0]);

const track = document.getElementById("image-track");

let isPointerDown = false;
let startX;
let scrollLeft;

const handlePointerDown = e => {
    isPointerDown = true;
    startX = e.clientX || e.touches[0].clientX;
    scrollLeft = track.scrollLeft;
};

const handlePointerUp = () => {
    isPointerDown = false;
};

const handlePointerMove = e => {
    if (!isPointerDown) return;
    const x = e.clientX;
    const walk = (x - startX) * 3; // Adjust the multiplier to control the scrolling speed
    track.scrollLeft = scrollLeft - walk;
};

const handlePointerStart = e => {
    isMouseDown = true;
    startX = e.touches[0].clientX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
};

const handlePointerEnd = () => {
    isMouseDown = false;
};

const handleTouchMove = e => {
    if (!isMouseDown) return;
    const x = e.touches[0].clientX - track.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier to control the scrolling speed
    track.scrollLeft = scrollLeft - walk;
};

window.addEventListener("mousedown", handlePointerDown);
window.addEventListener("mouseup", handlePointerUp);
window.addEventListener("mousemove", handlePointerMove);

window.addEventListener("touchstart", handlePointerStart);
window.addEventListener("touchend", handlePointerEnd);
window.addEventListener("touchmove", handleTouchMove);
