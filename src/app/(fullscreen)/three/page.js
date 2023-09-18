'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GUI from 'lil-gui';

export default function Three() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [fullscreen, setFullscreen] = useState(false)

    const fulscreenRef = useRef(null);
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

    function openFullscreen() {
        setFullscreen(true)
        let elem = fulscreenRef.current;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        if (width < height){
            let tempWidth = width;
            elem.style.rotate = '90deg';
            elem.style.width = height;
            elem.style.height = tempWidth;
            // setWidth(height);
            // setHeight(tempWidth);
        }
    }

    function closeFullscreen() {
        setFullscreen(false)
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozExitFullscreen) { /* Firefox */
            document.mozExitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }

    useEffect(() => {
        setWidth(canvasRef.current.offsetWidth)
        setHeight(canvasRef.current.offsetHeight)
        canvasRef.current && threeInitial();
    }, [width, height])

    return (
        <>
            <div ref={fulscreenRef} className='w-full h-full'>
                <canvas ref={canvasRef} className='w-full h-full block' />
                {fullscreen && <button className='fixed bottom-0 right-0 text-primary w-5 h-5 m-3 hover:opacity-70' onClick={closeFullscreen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16">
                        <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
                    </svg>
                </button>}
            </div>
            {!fullscreen && <button className='fixed bottom-0 right-0 text-primary w-5 h-5 m-3 hover:opacity-70' onClick={openFullscreen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                </svg>
            </button>}
        </>
    )
}