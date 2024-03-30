
// document.getElementById('btnMusic').addEventListener('click', function () {
//     let iframe = document.getElementById('musicFrame');
//     iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
// });

document.getElementById('btnForward').addEventListener('click', function () {
    move('z', -1);
});

document.getElementById('btnBack').addEventListener('click', function () {
    move('z', 1);
});

document.getElementById('btnTurnLeft').addEventListener('click', function () {
    turn(-45);
});

document.getElementById('btnTurnRight').addEventListener('click', function () {
    turn(45);
});

function move(axis, direction) {
    var cameraEl = document.getElementById('camera');
    var position = cameraEl.getAttribute('position');
    position[axis] += direction * 0.5; // Move by 0.5 meters.
    cameraEl.setAttribute('position', position);
}

function turn(degrees) {
    var cameraEl = document.getElementById('camera');
    var rotation = cameraEl.getAttribute('rotation');
    rotation.y += degrees; // Rotate by degrees on the Y axis.
    cameraEl.setAttribute('rotation', rotation);
}