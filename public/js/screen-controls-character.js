AFRAME.registerComponent('screen-controls-character', 
  {
    init: function () 
      {
        cameraExtendedControls = document.getElementById("camera").components["extended-wasd-controls"];
        this.joystick = new Joystick("joystick", 64, 8);
      },

      tick: function(time, deltaTime) {       
        cameraExtendedControls.movePercent.x = this.joystick.value.x * 0.1;
        cameraExtendedControls.movePercent.z = this.joystick.value.y * 0.1;
        camera.setAttribute("position", { x: character.object3D.position.x, y: character.object3D.position.y + 0.6, z: character.object3D.position.z - 2.1 });
        camera.setAttribute("rotation", { x: 0, y: 180, z: 0});
        dirLight.setAttribute("position", { x: character.object3D.position.x - 5, y: character.object3D.position.y + 3, z: character.object3D.position.z + 1.5 });

        if (this.joystick.value.x === 0 && this.joystick.value.y === 0) {
          character.setAttribute('animation-mixer', {
            clip: 'idle',
            loop: 'repeat',
            crossFadeDuration: 0.4
          })
        }
        else {
          character.setAttribute('animation-mixer', {
            clip: 'run',
            loop: 'repeat',
            crossFadeDuration: 0.4
          });

          character.setAttribute('rotation', {
            x: 0, y: (Math.atan2(-this.joystick.value.y, this.joystick.value.x) * 180 / Math.PI) - 90, z: 0
          });

          character.object3D.position.x += (-this.joystick.value.x * 0.07);
          character.object3D.position.z += (-this.joystick.value.y * 0.07);
        } 
      }
  }
);