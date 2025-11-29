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
    // مه ملایم‌تر برای عمق، اما شفاف‌تر برای دیده شدن جزئیات
    scene.fog = new THREE.FogExp2(0x00020a, 0.015);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // دوربین را کمی عقب‌تر و پایین‌تر بردیم تا پرسپکتیو حماسی (Heroic) داشته باشد
    camera.position.set(0, 0, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    renderer.toneMapping = THREE.ACESFilmicToneMapping; // تون مپینگ سینمایی‌تر
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting (Studio Setup) ---
    const ambientLight = new THREE.AmbientLight(0x000000); // محیط تاریک برای کنتراست نئون
    scene.add(ambientLight);

    // نور اصلی آبی (Key Light)
    const keyLight = new THREE.SpotLight(0x0055ff, 5, 30, Math.PI / 4, 0.5, 1);
    keyLight.position.set(5, 10, 5);
    keyLight.lookAt(0, 0, 0);
    scene.add(keyLight);

    // نور کانتور فیروزه‌ای (Rim Light) برای جدا کردن ربات از پس‌زمینه
    const rimLight = new THREE.SpotLight(0x00ffff, 8, 30, Math.PI / 4, 0.5, 1);
    rimLight.position.set(-5, 5, -10);
    rimLight.lookAt(0, 0, 0);
    scene.add(rimLight);
    
    // نور پرکننده پایین (Fill Light)
    const fillLight = new THREE.PointLight(0xff00aa, 1, 20); // کمی رنگ مجنتا برای جذابیت
    fillLight.position.set(0, -5, 2);
    scene.add(fillLight);

    // --- 3. The Professional AI Agent (Nexora Bot) ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // متریال بدنه: فلز صیقلی تیره
    const bodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x0a1122, // سرمه‌ای خیلی تیره
        metalness: 0.8,
        roughness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });

    // متریال صورت: شیشه دودی
    const faceMat = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        metalness: 0.9,
        roughness: 0.0,
        transmission: 0.2, // کمی شفافیت
        transparent: true
    });

    // متریال نئون چشم‌ها
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    // A. Head (Sphere)
    const headGeo = new THREE.SphereGeometry(1.2, 64, 64);
    const head = new THREE.Mesh(headGeo, bodyMat);
    robotGroup.add(head);

    // B. Face Shield (Cut Sphere or overlapping sphere)
    const faceGeo = new THREE.SphereGeometry(1.05, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.rotation.x = -Math.PI / 2;
    face.position.z = 0.2; // کمی جلوتر
    head.add(face);

    // C. Eyes (Friendly expression)
    const eyeGeo = new THREE.CapsuleGeometry(0.12, 0.3, 4, 8);
    const leftEye = new THREE.Mesh(eyeGeo, glowMat);
    leftEye.rotation.z = Math.PI / 2;
    leftEye.position.set(-0.4, 0.1, 1.15); // روی سطح صورت
    
    const rightEye = new THREE.Mesh(eyeGeo, glowMat);
    rightEye.rotation.z = Math.PI / 2;
    rightEye.position.set(0.4, 0.1, 1.15);
    
    head.add(leftEye, rightEye);

    // D. Levitation Rings (Halo)
    const ringGeo = new THREE.TorusGeometry(1.6, 0.05, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, emissive: 0x002288, metalness: 1, roughness: 0.2 });
    
    const halo1 = new THREE.Mesh(ringGeo, ringMat);
    halo1.rotation.x = Math.PI / 2; // افقی
    robotGroup.add(halo1);

    const halo2 = new THREE.Mesh(ringGeo, ringMat);
    halo2.rotation.x = Math.PI / 1.8;
    halo2.scale.set(1.2, 1.2, 1.2);
    robotGroup.add(halo2);


    // --- 4. n8n Ecosystem (Orbiting Nodes) ---
    // نودها حالا دور ربات می‌چرخند و فضا را پر می‌کنند
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const n8nBlue = 0x0055ff;
    const n8nCyan = 0x00ffff;
    
    const nodeBodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x001f5c,
        metalness: 0.5,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9,
        transmission: 0.1
    });
    
    const nodeBorderMat = new THREE.LineBasicMaterial({ color: n8nCyan, transparent: true, opacity: 0.4 });

    const createOrbitNode = (radius: number, angle: number, heightOffset: number, type: string) => {
        const group = new THREE.Group();
        // محاسبه موقعیت
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        group.position.set(x, heightOffset, z);
        group.lookAt(0, heightOffset * 0.5, 0); // نگاه به سمت مرکز (ربات)

        // بدنه نود
        const geo = new RoundedBoxGeometry(1.2, 0.8, 0.2, 4, 0.1);
        const mesh = new THREE.Mesh(geo, nodeBodyMat);
        group.add(mesh);

        // حاشیه
        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, nodeBorderMat);
        group.add(line);

        // آیکون
        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let iconGeo;
        if(type === 'trigger') iconGeo = new THREE.ConeGeometry(0.15, 0.3, 3);
        else if(type === 'action') iconGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        else iconGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.1, 16);
        
        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.15;
        if(type==='trigger') icon.rotation.z = -Math.PI/2;
        group.add(icon);

        return group;
    };

    const nodes: THREE.Group[] = [];
    // لایه اول نودها
    nodes.push(createOrbitNode(4.5, 0, 1.5, 'action'));
    nodes.push(createOrbitNode(4.5, Math.PI * 2 / 3, 0, 'db'));
    nodes.push(createOrbitNode(4.5, Math.PI * 4 / 3, -1.5, 'trigger'));
    
    // لایه دوم (دورتر)
    nodes.push(createOrbitNode(6.5, Math.PI / 3, -2, 'action'));
    nodes.push(createOrbitNode(6.5, Math.PI, 2, 'api'));
    nodes.push(createOrbitNode(6.5, Math.PI * 5 / 3, 0, 'action'));

    nodes.forEach(n => nodeGroup.add(n));

    // --- 5. Curved Connections (3D Splines) ---
    // اتصالات منحنی سه بعدی بین ربات و نودها
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0088ff, transparent: true, opacity: 0.2 });
    const curves: THREE.CatmullRomCurve3[] = [];

    nodes.forEach(node => {
        // شروع از مرکز ربات
        const start = new THREE.Vector3(0, 0, 0); 
        // پایان در موقعیت نود
        const end = node.position.clone();
        
        // نقطه کنترل میانی برای ایجاد منحنی زیبا
        const mid = start.clone().lerp(end, 0.5);
        mid.y += (Math.random() - 0.5) * 2; // انحنای تصادفی عمودی
        mid.x += (Math.random() - 0.5) * 2;

        const curve = new THREE.CatmullRomCurve3([start, mid, end]);
        curves.push(curve);

        const points = curve.getPoints(40);
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geo, lineMat);
        nodeGroup.add(line);
    });

    // --- 6. Data Packets (Filling the Space) ---
    // تعداد زیادی پکت برای پر کردن فضا
    const packetGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const packets: { mesh: THREE.Mesh, curveIdx: number, progress: number, speed: number }[] = [];

    for(let i=0; i<40; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        nodeGroup.add(mesh); // اضافه کردن به گروه نودها تا با آن‌ها بچرخد
        packets.push({
            mesh,
            curveIdx: Math.floor(Math.random() * curves.length),
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003 // سرعت بسیار ملایم
        });
    }

    // --- 7. Background Atmosphere (Particles) ---
    const bgGeo = new THREE.BufferGeometry();
    const bgCount = 2000;
    const bgPos = new Float32Array(bgCount * 3);
    for(let i=0; i<bgCount; i++) {
        // ذرات در یک کره بزرگ پخش می‌شوند
        const r = 10 + Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        bgPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
        bgPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        bgPos[i*3+2] = r * Math.cos(phi);
    }
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({
        color: 0x0044aa,
        size: 0.05,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const bgStars = new THREE.Points(bgGeo, bgMat);
    scene.add(bgStars);

    // --- 8. Post Processing (Cinematic Glow) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.2; // فقط نقاط روشن‌تر بدرخشند
    bloomPass.strength = 1.0;  // درخشش ملایم و حرفه‌ای
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 9. Smooth Animation Loop ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.003; // سرعت کلی بسیار کم برای آرامش

        // A. Robot Animations
        // شناور بودن نرم (Bobbing)
        robotGroup.position.y = Math.sin(time) * 0.3;
        // چرخش ملایم ربات به چپ و راست (Look around)
        robotGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
        robotGroup.rotation.z = Math.sin(time * 0.3) * 0.05;

        // چرخش حلقه‌های دور ربات
        halo1.rotation.z = time * 0.2;
        halo1.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.1;
        halo2.rotation.z = -time * 0.15;

        // B. Node Ecosystem Animation
        // چرخش کل سیستم نودها دور ربات (Orbiting)
        nodeGroup.rotation.y = -time * 0.1; // چرخش بسیار آرام مدار

        // شناور بودن تکی نودها
        nodes.forEach((n, i) => {
            n.rotation.z = Math.sin(time * 2 + i) * 0.05; // تکان خوردن آرام
        });

        // C. Packets Flow
        packets.forEach(p => {
            p.progress += p.speed;
            if (p.progress >= 1) p.progress = 0;
            
            const curve = curves[p.curveIdx];
            const point = curve.getPoint(p.progress);
            p.mesh.position.copy(point);
        });

        // D. Background Rotation
        bgStars.rotation.y = time * 0.05;

        composer.render();
    };
    animate();

    // --- Resize ---
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
        // Disposing...
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default AgentVisual;