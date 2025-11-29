import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// @ts-ignore
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// @ts-ignore
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
// @ts-ignore
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const N8nFlowchart: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00020a, 0.02); // زمینه تیره

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 15); // نمای روبرو
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    // --- 2. Materials ---
    const nodeBodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a, // رنگ بدنه تیره
        metalness: 0.5,
        roughness: 0.2,
        emissive: 0x1e293b,
        emissiveIntensity: 0.2,
    });

    const nodeBorderMat = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });
    const connectionMat = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.3 });
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff }); // پکت‌های فیروزه‌ای
    
    // --- 3. Helper Function to Create Nodes ---
    const createNode = (x: number, y: number, label: string, color: number) => {
        const group = new THREE.Group();
        group.position.set(x, y, 0);

        // بدنه نود (مستطیل گرد)
        const geo = new RoundedBoxGeometry(2, 1, 0.2, 4, 0.1);
        const mesh = new THREE.Mesh(geo, nodeBodyMat);
        group.add(mesh);

        // حاشیه نود
        const edges = new THREE.EdgesGeometry(geo);
        const border = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: color, opacity: 0.8, transparent: true }));
        group.add(border);

        // آیکون وسط نود (ساده شده)
        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let iconGeo;
        if (label === 'Start') iconGeo = new THREE.ConeGeometry(0.2, 0.4, 3);
        else if (label === 'AI') iconGeo = new THREE.TorusGeometry(0.2, 0.05, 8, 16); // حلقه برای AI
        else iconGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        
        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.15;
        if(label === 'Start') icon.rotation.z = -Math.PI/2;
        group.add(icon);

        // برچسب متنی (شبیه‌سازی با نور رنگی زیر نود)
        const glowGeo = new THREE.PlaneGeometry(2.2, 1.2);
        const glowMat = new THREE.MeshBasicMaterial({ 
            color: color, 
            transparent: true, 
            opacity: 0.1, 
            side: THREE.DoubleSide 
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.position.z = -0.1;
        group.add(glow);

        scene.add(group);
        return group;
    };

    // --- 4. Create Nodes ---
    // A. Left Node (Trigger)
    const startNode = createNode(-5, 0, 'Start', 0x22c55e); // سبز برای شروع

    // B. Middle Node (AI Agent)
    const aiNode = createNode(0, 0, 'AI', 0xa855f7); // بنفش برای هوش مصنوعی

    // C. Right Nodes (Outputs)
    const outNode1 = createNode(5, 1.5, 'Out1', 0x3b82f6); // آبی
    const outNode2 = createNode(5, -1.5, 'Out2', 0x3b82f6); // آبی

    const nodes = [startNode, aiNode, outNode1, outNode2];

    // --- 5. Create Connections (Curves) ---
    const curves: THREE.CubicBezierCurve3[] = [];

    const connect = (n1: THREE.Group, n2: THREE.Group) => {
        const start = n1.position.clone();
        const end = n2.position.clone();
        // نقاط کنترل برای ایجاد منحنی S شکل (Bezier)
        const dist = start.distanceTo(end);
        const control1 = start.clone().add(new THREE.Vector3(dist * 0.5, 0, 0));
        const control2 = end.clone().add(new THREE.Vector3(-dist * 0.5, 0, 0));

        const curve = new THREE.CubicBezierCurve3(start, control1, control2, end);
        curves.push(curve);

        const points = curve.getPoints(50);
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, connectionMat);
        scene.add(line);
    };

    // اتصال ۱: شروع به AI
    connect(startNode, aiNode);
    // اتصال ۲: AI به خروجی بالا
    connect(aiNode, outNode1);
    // اتصال ۳: AI به خروجی پایین
    connect(aiNode, outNode2);

    // --- 6. Data Packets ---
    const packets: { mesh: THREE.Mesh, curveIdx: number, progress: number, speed: number, delay: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.12, 16, 16);

    // ایجاد پکت‌ها
    for(let i=0; i<12; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        mesh.visible = false; // ابتدا مخفی
        scene.add(mesh);
        packets.push({
            mesh,
            curveIdx: 0, // همه از مسیر اول شروع می‌کنند
            progress: 0,
            speed: 0.008, // سرعت حرکت
            delay: i * 0.5 // تاخیر برای پشت سر هم آمدن
        });
    }

    // --- 7. Post Processing (Glow) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.2;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 8. Animation ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // انیمیشن شناور بودن نودها
        nodes.forEach((n, i) => {
            n.position.y += Math.sin(time * 2 + i) * 0.002;
        });

        // انیمیشن پکت‌ها
        packets.forEach(p => {
            if (p.delay > 0) {
                p.delay -= 0.01;
                return;
            }
            
            p.mesh.visible = true;
            p.progress += p.speed;

            if (p.progress >= 1) {
                // وقتی به انتهای مسیر رسید
                if (p.curveIdx === 0) {
                    // اگر در مسیر اول بود (شروع به AI)، حالا باید برود به یکی از خروجی‌ها
                    p.progress = 0;
                    // انتخاب تصادفی بین خروجی ۱ (ایندکس ۱) و خروجی ۲ (ایندکس ۲)
                    p.curveIdx = Math.random() > 0.5 ? 1 : 2;
                } else {
                    // اگر به انتهای خروجی رسید، ریست شود به شروع
                    p.progress = 0;
                    p.curveIdx = 0;
                    p.mesh.visible = false;
                    p.delay = 1.0; // کمی مکث قبل از شروع مجدد
                }
            }

            const curve = curves[p.curveIdx];
            const point = curve.getPoint(p.progress);
            p.mesh.position.copy(point);
        });

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
        if (container && renderer.domElement) container.removeChild(renderer.domElement);
        renderer.dispose();
        composer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default N8nFlowchart;