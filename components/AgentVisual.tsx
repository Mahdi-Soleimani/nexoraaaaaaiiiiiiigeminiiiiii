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

const N8nComplexFlowchart: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00020a, 0.015);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // دوربین را عقب‌تر می‌بریم تا کل گراف دیده شود
    camera.position.set(0, 0, 22); 
    camera.lookAt(0, -2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    // --- 2. Materials ---
    const mainNodeMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        metalness: 0.6,
        roughness: 0.2,
        emissive: 0x1e293b,
        emissiveIntensity: 0.3,
    });

    const aiNodeMat = new THREE.MeshPhysicalMaterial({
        color: 0x1e1b4b, // رنگ متمایز برای AI
        metalness: 0.8,
        roughness: 0.1,
        emissive: 0x4338ca,
        emissiveIntensity: 0.5,
    });

    const toolNodeMat = new THREE.MeshPhysicalMaterial({
        color: 0x064e3b, // سبز تیره برای ابزارها
        metalness: 0.4,
        roughness: 0.3,
        emissive: 0x065f46,
        emissiveIntensity: 0.2,
    });

    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    
    // --- 3. Node Creation Helper ---
    const createNode = (
        x: number, 
        y: number, 
        type: 'main' | 'ai' | 'tool', 
        iconType: 'edit' | 'ai' | 'code' | 'db' | 'google' | 'clock',
        sizeScale: number = 1
    ) => {
        const group = new THREE.Group();
        group.position.set(x, y, 0);

        // انتخاب متریال بر اساس نوع نود
        let mat = mainNodeMat;
        if (type === 'ai') mat = aiNodeMat;
        if (type === 'tool') mat = toolNodeMat;

        // بدنه نود
        const width = 2.2 * sizeScale;
        const height = 1.2 * sizeScale;
        const geo = new RoundedBoxGeometry(width, height, 0.2, 4, 0.1);
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        // حاشیه نود
        const edges = new THREE.EdgesGeometry(geo);
        const borderColor = type === 'ai' ? 0xa855f7 : (type === 'tool' ? 0x34d399 : 0x3b82f6);
        const border = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: borderColor, transparent: true, opacity: 0.6 }));
        group.add(border);

        // آیکون سه بعدی
        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let iconGeo;
        switch(iconType) {
            case 'edit': // مداد
                iconGeo = new THREE.ConeGeometry(0.15, 0.4, 4);
                break;
            case 'ai': // ربات/مغز
                iconGeo = new THREE.IcosahedronGeometry(0.3, 0);
                break;
            case 'code': // براکت
                iconGeo = new THREE.BoxGeometry(0.3, 0.2, 0.1);
                break;
            case 'db': // دیتابیس
                iconGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16);
                break;
            case 'google': // کره
                iconGeo = new THREE.SphereGeometry(0.2, 16, 16);
                break;
            case 'clock': // ساعت
                iconGeo = new THREE.TorusGeometry(0.2, 0.05, 16, 32);
                break;
            default:
                iconGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        }
        
        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.15;
        if (iconType === 'edit') icon.rotation.z = -Math.PI / 4;
        if (iconType === 'db') icon.rotation.x = Math.PI / 2;
        group.add(icon);

        scene.add(group);
        return { group, type };
    };

    // --- 4. Building the Graph Structure ---
    const nodes: { group: THREE.Group, type: string }[] = [];

    // A. Main Flow (Top Row)
    const edit1 = createNode(-10, 3, 'main', 'edit');
    const edit2 = createNode(-6, 3, 'main', 'edit');
    const aiAgent = createNode(0, 3, 'ai', 'ai', 1.3); // بزرگتر
    const codeJs = createNode(6, 3, 'main', 'code');
    const insertDb = createNode(10, 3, 'main', 'db');

    nodes.push(edit1, edit2, aiAgent, codeJs, insertDb);

    // B. Tools & Memory (Bottom Arc)
    // چیدن نودها به صورت کمانی در زیر نود هوش مصنوعی
    const tools = [
        { type: 'google', x: -8 },
        { type: 'db', x: -5.5 }, // Memory
        { type: 'db', x: -3 },   // Team
        { type: 'db', x: -0.5 }, // Company
        { type: 'db', x: 2 },    // Tasks
        { type: 'db', x: 4.5 },  // Security
        { type: 'db', x: 7 },    // Meetings
        { type: 'clock', x: 9.5 } // Time
    ];

    const toolNodes: THREE.Group[] = [];
    tools.forEach(t => {
        // قرارگیری در ارتفاع پایین‌تر
        const node = createNode(t.x, -3, 'tool', t.type as any, 0.9);
        toolNodes.push(node.group);
        nodes.push(node);
    });

    // --- 5. Connections ---
    const curves: { curve: THREE.Curve<THREE.Vector3>, type: 'solid' | 'dashed' }[] = [];
    const solidLineMat = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.4 });
    const dashedLineMat = new THREE.LineDashedMaterial({ color: 0x34d399, dashSize: 0.5, gapSize: 0.3, transparent: true, opacity: 0.3 });

    const connect = (n1: THREE.Group, n2: THREE.Group, style: 'solid' | 'dashed') => {
        const start = n1.position.clone();
        const end = n2.position.clone();
        
        // تنظیم نقاط اتصال (از راست نود اول به چپ نود دوم برای خط اصلی)
        if (style === 'solid') {
            start.x += 1;
            end.x -= 1;
        } else {
            // اتصال از بالا به پایین برای ابزارها
            start.y += 0.5; // از بالای ابزار
            end.y -= 0.6;   // به پایین هوش مصنوعی
            // کمی تصحیح موقعیت برای نودهای چپ و راست AI
            if (start.x < end.x) end.x -= 0.5;
            if (start.x > end.x) end.x += 0.5;
        }

        const dist = start.distanceTo(end);
        const control1 = start.clone();
        const control2 = end.clone();

        if (style === 'solid') {
            control1.x += dist * 0.4;
            control2.x -= dist * 0.4;
        } else {
            // منحنی‌های عمودی برای ابزارها
            control1.y += 2;
            control2.y -= 2;
        }

        const curve = new THREE.CubicBezierCurve3(start, control1, control2, end);
        curves.push({ curve, type: style });

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, style === 'solid' ? solidLineMat : dashedLineMat);
        if (style === 'dashed') line.computeLineDistances(); // ضروری برای خط چین
        scene.add(line);
    };

    // اتصالات اصلی
    connect(edit1.group, edit2.group, 'solid');
    connect(edit2.group, aiAgent.group, 'solid');
    connect(aiAgent.group, codeJs.group, 'solid');
    connect(codeJs.group, insertDb.group, 'solid');

    // اتصالات ابزارها به هوش مصنوعی
    toolNodes.forEach(tool => {
        connect(tool, aiAgent.group, 'dashed');
    });

    // --- 6. Data Packets ---
    const packets: { mesh: THREE.Mesh, curveIdx: number, progress: number, speed: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.12, 8, 8);

    // ایجاد پکت‌ها برای خطوط اصلی
    const solidCurvesIndices = curves.map((c, i) => c.type === 'solid' ? i : -1).filter(i => i !== -1);
    const dashedCurvesIndices = curves.map((c, i) => c.type === 'dashed' ? i : -1).filter(i => i !== -1);

    // پکت‌های جریان اصلی (آبی/فیروزه‌ای)
    for(let i=0; i<8; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        scene.add(mesh);
        packets.push({
            mesh,
            curveIdx: solidCurvesIndices[0], // شروع از اول خط
            progress: Math.random(), // موقعیت تصادفی
            speed: 0.01
        });
    }

    // پکت‌های ابزارها (سبز/داده) - حرکت به سمت بالا
    const dataMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    for(let i=0; i<10; i++) {
        const mesh = new THREE.Mesh(packetGeo, dataMat);
        scene.add(mesh);
        packets.push({
            mesh,
            curveIdx: dashedCurvesIndices[Math.floor(Math.random() * dashedCurvesIndices.length)],
            progress: Math.random(),
            speed: 0.005 + Math.random() * 0.005
        });
    }

    // --- 7. Post Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.0;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 8. Animation Loop ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // انیمیشن نودها (شناوری ملایم)
        nodes.forEach((n, i) => {
            n.group.position.y += Math.sin(time * 2 + i * 0.5) * 0.0015;
        });

        // انیمیشن پکت‌ها
        packets.forEach(p => {
            p.progress += p.speed;
            if (p.progress >= 1) {
                p.progress = 0;
                
                // منطق ساده مسیردهی
                const currentCurveType = curves[p.curveIdx].type;
                if (currentCurveType === 'solid') {
                    // اگر در خط اصلی است، برو به خط بعدی اصلی (اگر هست)
                    const currentSolidIndex = solidCurvesIndices.indexOf(p.curveIdx);
                    if (currentSolidIndex < solidCurvesIndices.length - 1) {
                        p.curveIdx = solidCurvesIndices[currentSolidIndex + 1];
                    } else {
                        p.curveIdx = solidCurvesIndices[0]; // لوپ به اول
                    }
                } else {
                    // پکت‌های ابزار فقط در مسیر خود لوپ می‌زنند
                    // یا می‌توانیم بگوییم وقتی رسیدند بالا، برگردند پایین؟ نه، لوپ ساده
                    p.progress = 0;
                }
            }

            const curveObj = curves[p.curveIdx];
            const point = curveObj.curve.getPoint(p.progress);
            p.mesh.position.copy(point);
        });

        // افکت تپش قلب برای هوش مصنوعی
        const pulse = 1 + Math.sin(time * 4) * 0.05;
        aiAgent.group.scale.set(1 * pulse, 1 * pulse, 1);

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

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default N8nComplexFlowchart;