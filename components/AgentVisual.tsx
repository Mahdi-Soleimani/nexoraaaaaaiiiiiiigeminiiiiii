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

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00020a, 0.03); // پس‌زمینه بسیار تیره و عمیق

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); 
    renderer.toneMapping = THREE.ReinhardToneMapping;
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffff, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- 3. Creating n8n Style Nodes (Helpers) ---
    
    // متریال نودها (شیشه‌ای و تکنولوژیک)
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x001f5c, // سرمه‌ای تیره
        emissive: 0x0033aa,
        emissiveIntensity: 0.2,
        metalness: 0.8,
        roughness: 0.1,
        transparent: true,
        opacity: 0.9,
    });

    const borderMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });

    // تابع ساخت نود (شبیه کارت‌های n8n)
    const createNode = (x: number, y: number, z: number, type: 'trigger' | 'action') => {
        const group = new THREE.Group();
        group.position.set(x, y, z);

        // بدنه اصلی نود
        const geometry = type === 'trigger' 
            ? new THREE.CylinderGeometry(0.8, 0.8, 0.3, 32) // تریگر دایره‌ای است
            : new THREE.BoxGeometry(1.5, 0.8, 0.3); // اکشن مستطیلی است

        if (type === 'trigger') geometry.rotateX(Math.PI / 2); // چرخش سیلندر

        const mesh = new THREE.Mesh(geometry, nodeMaterial);
        group.add(mesh);

        // قاب دور نود (Border)
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, borderMaterial);
        group.add(line);

        // آیکون وسط (ساده‌سازی شده با یک شکل هندسی کوچک)
        const iconGeo = type === 'trigger' 
            ? new THREE.ConeGeometry(0.2, 0.4, 3) // مثلث برای تریگر
            : new THREE.BoxGeometry(0.3, 0.3, 0.3); // مربع برای اکشن
        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.2;
        if (type === 'trigger') icon.rotation.z = -Math.PI / 2;
        group.add(icon);

        scene.add(group);
        return group;
    };

    // --- 4. Building the Workflow Graph ---
    const nodes: THREE.Group[] = [];
    
    // Trigger Node (Start)
    const startNode = createNode(-5, 0, 0, 'trigger');
    nodes.push(startNode);

    // Layer 1
    const action1 = createNode(-2, 1.5, 0, 'action');
    const action2 = createNode(-2, -1.5, 0, 'action');
    nodes.push(action1, action2);

    // Layer 2
    const action3 = createNode(2, 2.5, 0, 'action');
    const action4 = createNode(2, 0, 0, 'action');
    const action5 = createNode(2, -2.5, 0, 'action');
    nodes.push(action3, action4, action5);

    // Layer 3 (Final)
    const endNode = createNode(5.5, 0, 0, 'action');
    nodes.push(endNode);


    // --- 5. Curved Connections (Bezier Curves) ---
    // تابع ساخت منحنی بین دو نقطه
    const curves: THREE.CubicBezierCurve3[] = [];
    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.3 });

    const connectNodes = (n1: THREE.Group, n2: THREE.Group) => {
        const start = n1.position.clone();
        const end = n2.position.clone();
        
        // نقاط کنترل برای ایجاد انحنای نرم (مثل n8n)
        const dist = start.distanceTo(end);
        const control1 = start.clone().add(new THREE.Vector3(dist * 0.5, 0, 0));
        const control2 = end.clone().add(new THREE.Vector3(-dist * 0.5, 0, 0));

        const curve = new THREE.CubicBezierCurve3(start, control1, control2, end);
        curves.push(curve);

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, connectionMaterial);
        scene.add(line);
    };

    // تعریف اتصالات ورک‌فلو
    connectNodes(startNode, action1);
    connectNodes(startNode, action2);
    connectNodes(action1, action3);
    connectNodes(action1, action4);
    connectNodes(action2, action5);
    connectNodes(action3, endNode);
    connectNodes(action4, endNode);
    connectNodes(action5, endNode);

    // --- 6. Data Packets Animation ---
    // بسته‌های نوری که روی منحنی‌ها حرکت می‌کنند
    const packets: { mesh: THREE.Mesh, curveIdx: number, progress: number, speed: number }[] = [];
    const packetGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff }); // فیروزه‌ای روشن

    // ایجاد ۲۰ بسته داده
    for (let i = 0; i < 20; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        scene.add(mesh);
        packets.push({
            mesh,
            curveIdx: Math.floor(Math.random() * curves.length),
            progress: Math.random(),
            speed: 0.005 + Math.random() * 0.01
        });
    }

    // --- 7. Background Grid (Future Floor) ---
    const gridHelper = new THREE.GridHelper(60, 60, 0x001f5c, 0x000a1f);
    gridHelper.position.y = -4;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);

    // --- 8. Post Processing (Glow) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.2;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 9. Animation Loop ---
    let time = 0;
    // گروه کل گراف برای چرخش ملایم
    const graphGroup = new THREE.Group();
    // اضافه کردن همه نودها به یک گروه والد (برای چرخش راحت‌تر در آینده اگر نیاز شد)
    // فعلاً همه چیز در صحنه اصلی است، اما نودها را کمی شناور می‌کنیم

    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // انیمیشن شناور بودن نودها (Floating Effect)
        nodes.forEach((node, idx) => {
            node.position.y += Math.sin(time * 2 + idx) * 0.002;
        });

        // حرکت بسته‌های داده روی منحنی‌ها
        packets.forEach(packet => {
            packet.progress += packet.speed;
            if (packet.progress >= 1) {
                packet.progress = 0;
                // تعویض مسیر تصادفی
                packet.curveIdx = Math.floor(Math.random() * curves.length);
            }
            
            const curve = curves[packet.curveIdx];
            const point = curve.getPoint(packet.progress);
            packet.mesh.position.copy(point);
        });

        // حرکت گرید کف
        gridHelper.position.z = (time) % 1; 
        gridHelper.rotation.y = Math.sin(time * 0.1) * 0.05; // چرخش بسیار ملایم کف

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
        // Clean up basic geometries
        packetGeo.dispose();
        packetMat.dispose();
        nodeMaterial.dispose();
        borderMaterial.dispose();
        gridHelper.geometry.dispose();
        gridHelper.material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default AgentVisual;