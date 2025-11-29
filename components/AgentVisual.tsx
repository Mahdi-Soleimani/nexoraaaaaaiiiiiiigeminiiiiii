import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore - اگر حتی با فایل d.ts مشکل حل نشد، این خط ارور را نادیده می‌گیرد
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

    // پاکسازی محتویات قبلی در صورت وجود (برای جلوگیری از تکرار هنگام Hot Reload)
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Setup Scene ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    renderer.toneMapping = THREE.ReinhardToneMapping;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0x000000);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x0055ff, 2, 20);
    blueLight.position.set(5, 5, 5);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00ffff, 2, 20);
    cyanLight.position.set(-5, -5, 5);
    scene.add(cyanLight);

    // --- 3. The Core ---
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x001f5c,
      emissive: 0x0055ff,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const innerCoreGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const innerCoreMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    scene.add(innerCore);

    // --- 4. The Network ---
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    const nodeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    
    const nodes: THREE.Mesh[] = [];
    const nodeCount = 15;
    const radius = 4;

    for (let i = 0; i < nodeCount; i++) {
        const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        mesh.position.setFromSphericalCoords(radius, phi, theta);
        mesh.lookAt(0, 0, 0);
        nodes.push(mesh);
        nodesGroup.add(mesh);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.3 });
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    nodes.forEach((node, i) => {
        linePositions.push(node.position.x, node.position.y, node.position.z);
        linePositions.push(0, 0, 0);
        nodes.forEach((otherNode, j) => {
            if (i !== j) {
                const dist = node.position.distanceTo(otherNode.position);
                if (dist < 3.5) {
                    linePositions.push(node.position.x, node.position.y, node.position.z);
                    linePositions.push(otherNode.position.x, otherNode.position.y, otherNode.position.z);
                }
            }
        });
    });

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const networkLines = new THREE.LineSegments(linesGeometry, lineMaterial);
    nodesGroup.add(networkLines);

    // --- 5. Rings ---
    const ringGeo = new THREE.TorusGeometry(5, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 2;
    ring2.rotation.y = Math.PI / 4;
    ring2.scale.set(1.2, 1.2, 1.2);
    scene.add(ring2);

    // --- 6. Post Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.2;
    bloomPass.radius = 0.3;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 7. Animation ---
    let animationId: number;
    let time = 0;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.005;

        core.rotation.y += 0.005;
        core.rotation.x += 0.002;

        nodesGroup.rotation.y -= 0.002;
        nodesGroup.rotation.z += 0.001;

        ring1.rotation.x = Math.PI / 2 + Math.sin(time) * 0.2;
        ring1.rotation.y += 0.005;
        ring2.rotation.x = Math.PI / 2 + Math.cos(time) * 0.2;
        ring2.rotation.y -= 0.003;

        const pulse = 1 + Math.sin(time * 3) * 0.1;
        innerCore.scale.set(pulse, pulse, pulse);
        coreMaterial.emissiveIntensity = 0.5 + Math.sin(time * 5) * 0.2;

        composer.render();
    };
    animate();

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
        cancelAnimationFrame(animationId);
        if (container && renderer.domElement) container.removeChild(renderer.domElement);
        renderer.dispose();
        composer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default AgentVisual;