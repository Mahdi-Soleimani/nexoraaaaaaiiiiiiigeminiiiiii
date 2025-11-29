import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// @ts-ignore
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// @ts-ignore
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// @ts-ignore
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// @ts-ignore
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const AgentVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00020a, 0.02);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    // دوربین نزدیک‌تر شده برای پر کردن فضای خالی
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting (Dramatic Hero Lighting) ---
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0x0055ff, 3, 25);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0x00ffff, 3, 25);
    rimLight.position.set(-5, 8, -5);
    scene.add(rimLight);
    
    const bottomLight = new THREE.PointLight(0xff0055, 1, 15);
    bottomLight.position.set(0, -5, 0);
    scene.add(bottomLight);

    // --- 3. The Central Robot Agent ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    const robotMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1a1a1a,
        emissive: 0x001f5c,
        emissiveIntensity: 0.5,
        metalness: 0.9,
        roughness: 0.1,
    });
    const glowingMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    // Head
    const headGeo = new THREE.SphereGeometry(1, 32, 32);
    const head = new THREE.Mesh(headGeo, robotMaterial);
    robotGroup.add(head);

    // Eyes (Glowing)
    const eyeGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const leftEye = new THREE.Mesh(eyeGeo, glowingMaterial);
    leftEye.position.set(-0.3, 0.2, 0.85);
    const rightEye = new THREE.Mesh(eyeGeo, glowingMaterial);
    rightEye.position.set(0.3, 0.2, 0.85);
    robotGroup.add(leftEye, rightEye);

    // Body/Base (Abstract)
    const bodyGeo = new THREE.CylinderGeometry(0.8, 1.2, 1.5, 32);
    const body = new THREE.Mesh(bodyGeo, robotMaterial);
    body.position.y = -1.5;
    robotGroup.add(body);

    // Core (Glowing Center)
    const coreGeo = new THREE.TorusGeometry(0.6, 0.1, 16, 32);
    const core = new THREE.Mesh(coreGeo, glowingMaterial);
    core.position.y = -1.5;
    core.rotation.x = Math.PI / 2;
    robotGroup.add(core);


    // --- 4. n8n Style Nodes ---
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x001f5c,
        emissive: 0x0033aa,
        emissiveIntensity: 0.3,
        metalness: 0.7,
        roughness: 0.2,
        transparent: true,
        opacity: 0.95,
    });
    const borderMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6 });

    const createNode = (x: number, y: number, z: number, iconType: 'trigger'|'action'|'db'|'api') => {
        const group = new THREE.Group();
        group.position.set(x, y, z);

        // Rounded Box for n8n feel
        const geometry = new RoundedBoxGeometry(1.6, 0.9, 0.3, 4, 0.1);
        const mesh = new THREE.Mesh(geometry, nodeMaterial);
        group.add(mesh);

        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, borderMaterial);
        group.add(line);

        // Placeholder Icon
        let iconGeo;
        switch(iconType) {
            case 'trigger': iconGeo = new THREE.ConeGeometry(0.2, 0.4, 3); break;
            case 'action': iconGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3); break;
            case 'db': iconGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16); break;
            case 'api': iconGeo = new THREE.TorusGeometry(0.2, 0.05, 8, 16); break;
        }
        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.2;
        if (iconType === 'trigger') icon.rotation.z = -Math.PI / 2;
        group.add(icon);

        scene.add(group);
        return group;
    };

    // Placing nodes closely around the robot
    const nodes: THREE.Group[] = [];
    nodes.push(createNode(-3, 1.5, -1, 'trigger'));
    nodes.push(createNode(-3, -1.5, -1, 'db'));
    nodes.push(createNode(3, 1.5, -1, 'action'));
    nodes.push(createNode(3, -1.5, -1, 'api'));
    nodes.push(createNode(0, 3, -2, 'action'));
    nodes.push(createNode(0, -3, -2, 'db'));


    // --- 5. Connections & Data Flow (From Robot to Nodes) ---
    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.3 });
    const curves: THREE.CubicBezierCurve3[] = [];

    nodes.forEach(node => {
        const start = robotGroup.position.clone();
        const end = node.position.clone();
        const dist = start.distanceTo(end);
        
        // Control points for curved, flowing connections
        const control1 = start.clone().add(new THREE.Vector3(0, dist * 0.3, 0));
        const control2 = end.clone().add(new THREE.Vector3(0, -dist * 0.3, 0));

        const curve = new THREE.CubicBezierCurve3(start, control1, control2, end);
        curves.push(curve);

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, connectionMaterial);
        scene.add(line);
    });

    // Data Packets
    const packets: { mesh: THREE.Mesh, curveIdx: number, progress: number, speed: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    for (let i = 0; i < 30; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        scene.add(mesh);
        packets.push({
            mesh,
            curveIdx: Math.floor(Math.random() * curves.length),
            progress: Math.random(),
            speed: 0.008 + Math.random() * 0.01
        });
    }

    // --- 6. Hero Background (Complex & Dynamic) ---
    const bgGroup = new THREE.Group();
    scene.add(bgGroup);

    // Large geometric lattice surrounding the scene
    const latticeGeo = new THREE.IcosahedronGeometry(20, 2);
    const latticeMat = new THREE.MeshBasicMaterial({ 
        color: 0x0033aa, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.1 
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    bgGroup.add(lattice);

    // Particle Field
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 1500;
    const posArray = new Float32Array(particleCount * 3);
    for(let i=0; i<particleCount; i++) {
        posArray[i*3] = (Math.random() - 0.5) * 50;
        posArray[i*3+1] = (Math.random() - 0.5) * 50;
        posArray[i*3+2] = (Math.random() - 0.5) * 50;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x00aaff,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    bgGroup.add(particles);


    // --- 7. Post Processing (Glow) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 1.5;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 8. Animation Loop ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // Robot Animation (Hover & Subtle Rotation)
        robotGroup.position.y = Math.sin(time * 1.5) * 0.2;
        robotGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
        core.rotation.z -= 0.05;

        // Nodes Floating Animation
        nodes.forEach((node, i) => {
            node.position.y += Math.sin(time * 2 + i) * 0.001;
        });

        // Data Packets Animation
        packets.forEach(packet => {
            packet.progress += packet.speed;
            if (packet.progress >= 1) {
                packet.progress = 0;
                // Always start from the robot
                packet.curveIdx = Math.floor(Math.random() * curves.length);
            }
            const curve = curves[packet.curveIdx];
            const point = curve.getPoint(packet.progress);
            packet.mesh.position.copy(point);
        });

        // Background Animation
        bgGroup.rotation.y += 0.0005;
        bgGroup.rotation.z += 0.0002;

        composer.render();
    };
    animate();

    // --- Resize & Cleanup ---
    const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
        composer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        if (container && renderer.domElement) container.removeChild(renderer.domElement);
        renderer.dispose();
        composer.dispose();
        // Clean up geometries/materials
        headGeo.dispose(); bodyGeo.dispose(); coreGeo.dispose(); eyeGeo.dispose();
        robotMaterial.dispose(); glowingMaterial.dispose();
        latticeGeo.dispose(); latticeMat.dispose();
        particlesGeo.dispose(); particlesMat.dispose();
        nodeMaterial.dispose(); borderMaterial.dispose();
        packetGeo.dispose(); packetMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default AgentVisual;