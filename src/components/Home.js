// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div id="mainUI" onContextMenu={() => false}>
      <div id="regionUI">
        <div id="buttonUI">
          <img src="assets/images/joystick-base-black.png" alt="joystick-base" />
          <div id="joystick">
            <img src="assets/images/joystick-white.png" alt="joystick-white-ball" />		
          </div>
        </div>
      </div> 
    </div>

    <div dangerouslySetInnerHTML={{__html: `
      <a-scene 
        screen-controls-character
        loading-screen="enabled: false"
        device-orientation-permission-ui="enabled: false"
        vr-mode-ui="enabled: false"
        reflection="directionalLight:a-entity#dirLight;"
      >
      <a-assets>
        <a-asset-item id="main-character" src="assets/models/little-trex/scene.gltf"></a-asset-item>
        <!-- <a-asset-item id="side-character-01" src="assets/models/mall-cop/scene.gltf"></a-asset-item> -->
        <img id='floor' src='https://imagedelivery.net/d1yqQAIaphrLYkMc6qUfkA/42b27767-3fb6-4335-d033-546f3ef94200/public' crossorigin='anonymous'>

        <a-mixin 
        id="little-trex"
        scale="0.9 0.9 0.9" 
        rotation="0 180 0" 
        shadow="cast: true;"
        ></a-mixin>

      </a-assets>
      <!-- <a-entity light="type: directional; intensity: 2; castShadow: true; shadowMapHeight:2048; shadowMapWidth:2048; target: #character; shadowRadius: 5" position="1 4.3 2.5" shadow></a-entity>
      <a-entity light="type: ambient; intensity: 2.0;"></a-entity> -->

      <a-entity 
        id="camera" 
        camera 
        look-controls
        extended-wasd-controls="flyEnabled: true; inputType: joystick;"
        screen-controls></a-entity>

      <a-sky color="#330066"></a-sky>

      <a-plane
        position="0 0 0"
        src="#floor"
        rotation="-90 0 0"
        repeat="2000 2000"
        scale="1000 1000 1"
        shadow="receive: true"
        roughness="0"
      ></a-plane>

      <a-entity 
        light="type: ambient; intensity: 0.75;"
      ></a-entity>

      <a-entity 
        id="dirLight"
        light="type: directional;
        castShadow: true;
        intensity: 0.75;
        shadowCameraVisible: false;
        shadowMapHeight: 2048;
        shadowMapWidth: 2048;
        shadowRadius: 5;
        target: #character;"
        shadow
      ></a-entity>

      <a-entity position="0 0.5 -15" particle-system="preset: dust; particleCount: 7000; color: #deeb34; size:1"></a-entity>

      <a-entity
        id="character"
        gltf-model="#main-character"
        animation-mixer="clip: idle; loop: repeat; crossFadeDuration: 0.4;"
        position="0 0 0"
        rotation="0 170 0"
        scale="0.9 0.9 0.9"
        shadow="cast: true;"
      >
      </a-entity> 

      <a-entity
        gltf-model="#main-character"  
        mixin="little-trex"
        random-move
      ></a-entity>

      <a-entity
        gltf-model="#main-character"  
        mixin="little-trex"
        random-move
      ></a-entity>

      <a-entity
        gltf-model="#main-character"  
        mixin="little-trex"
        random-move
      ></a-entity>

      <a-entity
        gltf-model="#main-character"  
        mixin="little-trex"
        random-move
      ></a-entity>

      </a-scene>
    `}}>
    </div>
  </div>
  );
};

export default Home;