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

const AgentVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // پاکسازی کامل برای جلوگیری از تکرار
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000510, 0.035); // مه آبی تیره برای عمق

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 2, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    renderer.toneMapping = THREE.ReinhardToneMapping;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0x000000);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x0055ff, 3, 30);
    blueLight.position.set(10, 10, 10);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00ffff, 2, 25);
    cyanLight.position.set(-10, -5, 5);
    scene.add(cyanLight);

    // --- 3. The Future Grid (Moving Floor) ---
    // این گرید حرکت می‌کند تا حس آینده و پیشرفت را بدهد
    const gridSize = 60;
    const gridDivisions = 60;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x0033aa, 0x001133);
    gridHelper.position.y = -6;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);

    // --- 4. The AI Core (Neural Processing) ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // پوسته بیرونی (Geometric Shell)
    const shellGeo = new THREE.IcosahedronGeometry(2, 1);
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0x001f5c,
      emissive: 0x0033aa,
      emissiveIntensity: 0.2,
      roughness: 0,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    coreGroup.add(shell);

    // مغز داخلی (Neural Cloud)
    const brainGeo = new THREE.BufferGeometry();
    const brainParticleCount = 800;
    const brainPositions = new Float32Array(brainParticleCount * 3);
    for(let i=0; i<brainParticleCount; i++) {
        const r = 1.2 * Math.cbrt(Math.random()); // توزیع یکنواخت داخل کره
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        brainPositions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        brainPositions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        brainPositions[i*3+2] = r * Math.cos(phi);
    }
    brainGeo.setAttribute('position', new THREE.BufferAttribute(brainPositions, 3));
    const brainMat = new THREE.PointsMaterial({
        color: 0x00ffff,
        size: 0.05,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const brain = new THREE.Points(brainGeo, brainMat);
    coreGroup.add(brain);

    // --- 5. The Workflow Network (n8n Nodes) ---
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4); // نودهای مکعبی شبیه ماژول
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff }); // رنگ روشن‌تر
    
    const nodes: THREE.Mesh[] = [];
    const nodeCount = 12;
    const radius = 4.5;

    // ایجاد نودها دور کره
    for (let i = 0; i < nodeCount; i++) {
        const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
        
        // الگوریتم Fibonacci Sphere برای توزیع منظم‌تر
        const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        
        mesh.position.setFromSphericalCoords(radius, phi, theta);
        mesh.lookAt(0, 0, 0);
        
        nodes.push(mesh);
        nodesGroup.add(mesh);
    }

    // اتصالات شبکه
    const connections: { start: THREE.Vector3, end: THREE.Vector3 }[] = [];
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0033aa, transparent: true, opacity: 0.2 });
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    nodes.forEach((node, i) => {
        // اتصال به هسته (AI controlled)
        linePositions.push(node.position.x, node.position.y, node.position.z);
        linePositions.push(0, 0, 0);
        connections.push({ start: node.position, end: new THREE.Vector3(0,0,0) });

        // اتصال به نودهای همسایه (Automation Flow)
        nodes.forEach((otherNode, j) => {
            if (i !== j) {
                const dist = node.position.distanceTo(otherNode.position);
                if (dist < 4.0) { // فقط نودهای نزدیک
                    linePositions.push(node.position.x, node.position.y, node.position.z);
                    linePositions.push(otherNode.position.x, otherNode.position.y, otherNode.position.z);
                    connections.push({ start: node.position, end: otherNode.position });
                }
            }
        });
    });
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const networkLines = new THREE.LineSegments(linesGeometry, lineMaterial);
    nodesGroup.add(networkLines);

    // --- 6. Data Packets (Automation Animation) ---
    // شبیه‌سازی بسته‌های داده که بین نودها حرکت می‌کنند
    const packets: THREE.Mesh[] = [];
    const packetGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const packetSpeed = 0.05;
    
    // ایجاد ۱۰ بسته داده
    for(let i=0; i<15; i++) {
        const packet = new THREE.Mesh(packetGeo, packetMat);
        packet.userData = { 
            pathIndex: Math.floor(Math.random() * connections.length), 
            progress: Math.random() 
        };
        packets.push(packet);
        nodesGroup.add(packet);
    }

    // --- 7. Orbital Rings (Futuristic Tech) ---
    const ringGeo = new THREE.TorusGeometry(6, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.15 });
    
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2; // افقی
    scene.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = Math.PI / 6;
    ring2.scale.set(1.1, 1.1, 1.1);
    scene.add(ring2);

    // --- 8. Post Processing (Neon Glow) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.5; // درخشش نئونی قوی
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 9. Animation Loop ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // 1. چرخش هسته و مغز
        shell.rotation.y += 0.002;
        shell.rotation.z -= 0.001;
        brain.rotation.y -= 0.005; // چرخش معکوس مغز برای پویایی

        // 2. چرخش کل شبکه
        nodesGroup.rotation.y += 0.001;

        // 3. انیمیشن گرید (حرکت به سمت آینده)
        gridHelper.position.z = (time * 2) % (gridSize / gridDivisions); 

        // 4. انیمیشن حلقه‌ها
        ring1.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.1;
        ring2.rotation.y += 0.002;

        // 5. حرکت بسته‌های داده (Data Packets)
        packets.forEach(packet => {
            const data = packet.userData;
            data.progress += packetSpeed;
            if (data.progress >= 1) {
                data.progress = 0;
                data.pathIndex = Math.floor(Math.random() * connections.length); // تغییر مسیر تصادفی
            }
            
            const connection = connections[data.pathIndex];
            packet.position.lerpVectors(connection.start, connection.end, data.progress);
        });

        // 6. افکت نبض (Heartbeat of AI)
        const pulse = 1 + Math.sin(time * 3) * 0.05;
        shell.scale.set(pulse, pulse, pulse);

        composer.render();
    };
    animate();

    // --- Resize Handler ---
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
        // پاکسازی کامل
        if (container && renderer.domElement) container.removeChild(renderer.domElement);
        renderer.dispose();
        composer.dispose();
        shellGeo.dispose();
        shellMat.dispose();
        brainGeo.dispose();
        brainMat.dispose();
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        linesGeometry.dispose();
        lineMaterial.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        packetGeo.dispose();
        packetMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default AgentVisual;