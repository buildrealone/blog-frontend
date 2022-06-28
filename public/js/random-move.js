function getRandomInt(min, max) { // *a random integer between minimum and maximum
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
};

function getRandomDirection() { // *a random float number between -1 and 1
    randomX = Math.random() * 2 - 1;
    randomZ = Math.random() * 2 - 1;
};

setInterval(getRandomDirection, 4000);

let randomX = Math.random() * 2 - 1;
let randomZ = Math.random() * 2 - 1;

AFRAME.registerComponent('random-move', {

    init: function () 
        {
            this.el.setAttribute('position', { x: getRandomInt(-10, 10), y: 0, z: getRandomInt(-10, 10) });
        },

        tick: function(time, deltaTime) {       

            if (randomX === 0 && randomZ === 0) {
            this.el.setAttribute('animation-mixer', {
                clip: 'idle',
                loop: 'repeat',
                crossFadeDuration: 0.4
            })
            }
            else {
            this.el.setAttribute('animation-mixer', {
                clip: 'run',
                loop: 'repeat',
                crossFadeDuration: 0.4
            });

            this.el.setAttribute('rotation', {
                x: 0, y: (Math.atan2(randomZ * -1, randomX) * 180 / Math.PI) - 90, z: 0
            });

            this.el.object3D.position.x -= (randomX * 0.05);
            this.el.object3D.position.z -= (randomZ * 0.05);
            } 
        },
    }
);