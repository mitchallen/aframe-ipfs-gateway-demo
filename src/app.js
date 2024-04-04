
// document.getElementById('btnMusic').addEventListener('click', function () {
//     let iframe = document.getElementById('musicFrame');
//     iframe.style.display = (iframe.style.display === 'none') ? 'block' : 'none';
// });

document.getElementById('btnForward').addEventListener('click', function (event) {
    moveForward(-1,0);
    event.preventDefault();
});

document.getElementById('btnBack').addEventListener('click', function (event) {
    // move('z', 1);
    moveForward(1.0);
    event.preventDefault();
});

// document.getElementById('btnTurnLeft').addEventListener('click', function (event) {
//     turn(-45);
//     event.preventDefault();
// });

// document.getElementById('btnTurnRight').addEventListener('click', function (event) {
//     turn(45);
//     event.preventDefault();
// });

function moveForward(speed) {
    const direction = new THREE.Vector3;
    let camera = document.getElementById('camera')
    let rig = document.getElementById('rig')
    camera.object3D.getWorldDirection(direction);
    rig.object3D.position.addScaledVector(direction, speed);
  }

function turn(degrees) {
    var rig = document.getElementById('rig');
    var rotation = rig.getAttribute('rotation');
    rotation.y += degrees; // Rotate by degrees on the Y axis.
    rig.setAttribute('rotation', rotation);
}