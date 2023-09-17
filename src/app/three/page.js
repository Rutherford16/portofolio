'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GUI from 'lil-gui';

export default function Three() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const canvasRef = useRef(null);

    function threeInitial() {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        const fov = 40;
        const aspect = width / height;  // the canvas default
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        // camera.position.z = 28
        camera.position.set(0, 80, 60);
        camera.up.set(0, 0, 1);
        camera.lookAt(0, 0, 0);

        const scene = new THREE.Scene();

        // an array of objects whose rotation to update
        const objects = [];

        const solarSystem = new THREE.Object3D();
        scene.add(solarSystem);
        objects.push(solarSystem);

        // use just one sphere for everything
        const radius = 1;
        const widthSegments = 50;
        const heightSegments = widthSegments;
        const sphereGeometry = new THREE.SphereGeometry(
            radius, widthSegments, heightSegments);

        // function makeInstance(geometry, color, x) {
        //     const material = new THREE.MeshPhongMaterial({ color });
        //     const cube = new THREE.Mesh(geometry, material);
        //     scene.add(cube);
        //     cube.position.x = x;
        //     return cube;
        // }

        const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });
        const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        sunMesh.scale.set(5, 5, 5);  // make the sun large
        solarSystem.add(sunMesh);
        objects.push(sunMesh);

        const mercuryOrbit = new THREE.Object3D();
        mercuryOrbit.position.x = 10;
        solarSystem.add(mercuryOrbit);
        objects.push(mercuryOrbit);

        const mercuryMaterial = new THREE.MeshPhongMaterial({ color: 0x999999, emissive: 0x666666 });
        const mercuryMesh = new THREE.Mesh(sphereGeometry, mercuryMaterial);
        mercuryOrbit.add(mercuryMesh);
        objects.push(mercuryMesh);

        const venusOrbit = new THREE.Object3D();
        venusOrbit.position.x = 20;
        solarSystem.add(venusOrbit);
        objects.push(venusOrbit);

        const venusMaterial = new THREE.MeshPhongMaterial({ color: 0x744700, emissive: 0x513200 });
        const venusMesh = new THREE.Mesh(sphereGeometry, venusMaterial);
        venusOrbit.add(venusMesh);
        objects.push(venusMesh);

        const earthOrbit = new THREE.Object3D();
        earthOrbit.position.x = 30;
        solarSystem.add(earthOrbit);
        objects.push(earthOrbit);

        const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233FF, emissive: 0x112244 });
        const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
        earthOrbit.add(earthMesh);
        objects.push(earthMesh);

        const moonOrbit = new THREE.Object3D();
        moonOrbit.position.x = 2;
        earthOrbit.add(moonOrbit);

        const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 });
        const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
        moonMesh.scale.set(.5, .5, .5);
        moonOrbit.add(moonMesh);
        objects.push(moonMesh);

        {
            const color = 0xFFFFFF;
            const intensity = 1800;
            const light = new THREE.PointLight(color, intensity);
            scene.add(light);
        }

        function resizeRendererToDisplaySize(renderer) {

            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {

                renderer.setSize(width, height, false);

            }

            return needResize;

        }

        function render(time) {
            time *= 0.001;  // convert time to seconds

            if (resizeRendererToDisplaySize(renderer)) {

                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();

            }

            objects.forEach((obj) => {
                obj.rotation.y = time;
            });

            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
    }


    useEffect(() => {
        setWidth(canvasRef.current.offsetWidth)
        setHeight(canvasRef.current.offsetHeight)
        canvasRef.current && threeInitial();
    }, [width, height])

    return (
        <canvas ref={canvasRef} className='w-full h-full block' />
    )
}