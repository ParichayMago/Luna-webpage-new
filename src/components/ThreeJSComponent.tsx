"use client"; // Ensure this runs on the client

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeJSComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set up renderer
    const w = window.innerWidth;
    const h = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const fov = 80;
    const aspect = w / h;
    const near = 0.1;
    const far = 10000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(0, 1, 0.25).normalize();
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
    scene.add(hemisphereLight);

    let starrySky: THREE.Object3D | undefined;
    let moonScene: THREE.Object3D | undefined;

    const loader = new GLTFLoader();
    loader.load(
      '/ThreeD/stars/scene.gltf', // Correct path from the public folder
      function (gltf) {
        starrySky = gltf.scene;
        starrySky.scale.setScalar(10);
        scene.add(starrySky);
      },
      undefined,
      function (error) {
        console.error('Error loading starry sky model:', error);
      }
    );

    const moonLoader = new GLTFLoader();
    moonLoader.load(
      '/ThreeD/moon/moon.gltf', // Correct path from the public folder
      function (gltf) {
        moonScene = gltf.scene;
        moonScene.scale.setScalar(0.006);
        moonScene.position.set(0, -1, 0);
        scene.add(moonScene);
      },
      undefined,
      function (error) {
        console.error('Error loading moon model:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (starrySky) {
        starrySky.rotation.y += 0.001;
      }

      if (moonScene) {
        moonScene.rotation.y -= 0.002;
      }

      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="threejs-container" />;
};

export default ThreeJSComponent;
