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
    const bgColor = 0x020410; 
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.02);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1, 19); // کمی بالاتر برای دید بهتر به ربات
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    // نورپردازی استودیویی برای ربات
    const ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(5, 5, 10);
    scene.add(keyLight);

    const rimLight = new THREE.SpotLight(0xa855f7, 5); // نور پشت بنفش
    rimLight.position.set(-5, 5, -5);
    rimLight.lookAt(0, 0, 0);
    scene.add(rimLight);

    // --- 3. Materials ---
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.1,
        transmission: 0.4,
        transparent: true,
        thickness: 0.5,
        clearcoat: 1.0,
    });

    // متریال بدنه ربات (فلز تیره و صیقلی)
    const robotBodyMat = new THREE.MeshPhysicalMaterial({
        color: 0x1e293b,
        metalness: 0.8,
        roughness: 0.2,
        clearcoat: 1.0,
    });

    // متریال صورت ربات (شیشه سیاه)
    const visorMat = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        metalness: 0.9,
        roughness: 0.1,
    });

    // چشم‌های درخشان
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ffff }); // چشم فیروزه‌ای
    
    const dashLineMat = new THREE.LineDashedMaterial({
        color: 0x3b82f6,
        dashSize: 0.2,
        gapSize: 0.2,
        transparent: true,
        opacity: 0.3,
    });

    // --- 4. Central Hub (The Corporate Robot) ---
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // A. Head
    const headGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const head = new THREE.Mesh(headGeo, robotBodyMat);
    head.position.y = 1.5;
    robotGroup.add(head);

    // B. Visor (صورت شیشه‌ای)
    // ایجاد یک تکه از کره برای صورت
    const visorGeo = new THREE.SphereGeometry(1.21, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.x = -Math.PI / 2;
    visor.position.y = 1.5;
    visor.position.z = 0.05; // کمی جلوتر از سر
    robotGroup.add(visor);

    // C. Eyes (Digital Look)
    const eyeGeo = new THREE.PlaneGeometry(0.8, 0.15);
    const eyeMesh = new THREE.Mesh(eyeGeo, glowMat);
    eyeMesh.position.set(0, 1.5, 1.15); // روی وایزور
    // کمی خمیدگی به چشم نمی‌دهیم اما با تکسچر یا شکل ساده نگه می‌داریم
    robotGroup.add(eyeMesh);

    // D. Torso/Body
    const torsoGeo = new RoundedBoxGeometry(1.8, 2.2, 1.2, 4, 0.2);
    const torso = new THREE.Mesh(torsoGeo, robotBodyMat);
    torso.position.y = -0.5;
    robotGroup.add(torso);

    // E. Glowing Chest Core (Heart of AI)
    const coreGeo = new THREE.CircleGeometry(0.4, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 }); // بنفش
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, -0.2, 0.61);
    robotGroup.add(core);

    // F. Shoulders (Simple spheres)
    const shoulderGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const leftShoulder = new THREE.Mesh(shoulderGeo, robotBodyMat);
    leftShoulder.position.set(-1.2, 0.2, 0);
    const rightShoulder = new THREE.Mesh(shoulderGeo, robotBodyMat);
    rightShoulder.position.set(1.2, 0.2, 0);
    robotGroup.add(leftShoulder, rightShoulder);

    // G. Levitation Rings (Base)
    const ringGeo = new THREE.TorusGeometry(1.5, 0.05, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -2;
    robotGroup.add(ring);

    // --- 5. Background Grid ---
    const gridHelper = new THREE.GridHelper(60, 40, 0x1e293b, 0x0f172a);
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.position.z = -5;
    scene.add(gridHelper);

    // --- 6. Orbiting System ---
    const createOrbitRing = (radius: number) => {
        const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
        const points = curve.getPoints(64);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, dashLineMat);
        line.computeLineDistances();
        return line;
    };
    scene.add(createOrbitRing(4.5));
    scene.add(createOrbitRing(7));

    // Satellites
    const createSatelliteNode = (radius: number, angle: number, iconType: string, color: number) => {
        const group = new THREE.Group();
        group.userData = { radius, angle, speed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1) };
        group.position.x = Math.cos(angle) * radius;
        group.position.y = Math.sin(angle) * radius;

        const geo = new RoundedBoxGeometry(1.2, 1.2, 0.2, 4, 0.2);
        const mat = glassMat.clone();
        // @ts-ignore
        mat.color.setHex(0x0f172a);
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        const borderGeo = new THREE.EdgesGeometry(geo);
        const borderMat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.8 });
        const border = new THREE.LineSegments(borderGeo, borderMat);
        group.add(border);

        const iconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let iconGeo;
        if(iconType === 'db') iconGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 16);
        else if(iconType === 'mail') iconGeo = new THREE.BoxGeometry(0.4, 0.3, 0.1);
        else if(iconType === 'lightning') iconGeo = new THREE.ConeGeometry(0.2, 0.4, 3);
        else iconGeo = new THREE.SphereGeometry(0.2, 16, 16);

        const icon = new THREE.Mesh(iconGeo, iconMat);
        icon.position.z = 0.15;
        if(iconType === 'db') icon.rotation.x = Math.PI/2;
        group.add(icon);

        scene.add(group);
        return group;
    };

    const satellites: THREE.Group[] = [];
    satellites.push(createSatelliteNode(4.5, 0, 'db', 0x00ffff));
    satellites.push(createSatelliteNode(4.5, Math.PI, 'lightning', 0xeab308));
    satellites.push(createSatelliteNode(7, Math.PI/2, 'mail', 0xa855f7));
    satellites.push(createSatelliteNode(7, -Math.PI/2, 'google', 0x3b82f6));

    // --- 7. Main Flow Lines ---
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-12, 0, 0), new THREE.Vector3(-2.5, 0, 0)]);
    const lineGeo2 = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(2.5, 0, 0), new THREE.Vector3(12, 0, 0)]);
    const mainLineMat = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.5 });
    scene.add(new THREE.Line(lineGeo, mainLineMat));
    scene.add(new THREE.Line(lineGeo2, mainLineMat));

    // --- 8. Data Packets ---
    const packetGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const packets: { mesh: THREE.Mesh, path: 'orbit' | 'main', progress: number, speed: number, radius?: number }[] = [];

    // Main flow packets
    for(let i=0; i<5; i++) {
        const mesh = new THREE.Mesh(packetGeo, new THREE.MeshBasicMaterial({ color: 0xa855f7 }));
        scene.add(mesh);
        packets.push({ mesh, path: 'main', progress: -12 + i * 5, speed: 0.08 });
    }
    // Orbit packets
    for(let i=0; i<6; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        scene.add(mesh);
        packets.push({ mesh, path: 'orbit', progress: Math.random() * Math.PI * 2, speed: 0.02, radius: i%2===0 ? 4.5 : 7 });
    }

    // --- 9. Post Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.1;
    bloomPass.strength = 1.2;
    bloomPass.radius = 0.5;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 10. Animation ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // Robot Animation
        robotGroup.position.y = Math.sin(time) * 0.2; // Hover
        // سر ربات کمی به چپ و راست می‌چرخد (نظارت)
        head.rotation.y = Math.sin(time * 0.5) * 0.3;
        visor.rotation.y = Math.sin(time * 0.5) * 0.3;
        eyeMesh.rotation.y = Math.sin(time * 0.5) * 0.3;
        // بدنه کمی خلاف جهت سر می‌چرخد برای تعادل
        torso.rotation.y = Math.sin(time * 0.5) * -0.05;

        // حلقه زیر پای ربات
        ring.scale.setScalar(1 + Math.sin(time * 3) * 0.05);

        // Satellites
        satellites.forEach(sat => {
            const d = sat.userData;
            d.angle += d.speed;
            sat.position.x = Math.cos(d.angle) * d.radius;
            sat.position.y = Math.sin(d.angle) * d.radius;
            sat.rotation.z = 0; // ثابت نگه داشتن زاویه خود نود
        });

        // Packets
        packets.forEach(p => {
            if (p.path === 'main') {
                p.progress += p.speed;
                if(p.progress > 12) p.progress = -12;
                if(p.progress > -2.5 && p.progress < 2.5) p.mesh.visible = false; // مخفی شدن پشت ربات
                else {
                    p.mesh.visible = true;
                    p.mesh.position.set(p.progress, 0, 0);
                }
            } else {
                p.progress += p.speed;
                p.mesh.position.x = Math.cos(p.progress) * p.radius!;
                p.mesh.position.y = Math.sin(p.progress) * p.radius!;
            }
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

  return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
};

export default N8nComplexFlowchart;