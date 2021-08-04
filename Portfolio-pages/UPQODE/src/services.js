gsap.registerPlugin(MotionPathPlugin);

const offsetFromTop = innerHeight * 0.4;
const pathBB = document.querySelector("#path").getBoundingClientRect();
const startY = pathBB.top - innerHeight + offsetFromTop;
const finishDistance = startY + pathBB.height - offsetFromTop;

var tween = gsap.to("#dot", {
    duration: 5, 
    paused: true,
    ease: "none",
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }    
}).pause(0.001);

document.addEventListener("scroll", function() {
// Prevent the update from happening too often (throttle the scroll event)
if (!requestId) {
    requestId = requestAnimationFrame(update);
}
});

update();

function update() {
// Update our animation
tween.progress((scrollY - startY) / finishDistance);

// Let the scroll event fire again
requestId = null;
}