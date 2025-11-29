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
    // رنگ پس‌زمینه دقیقا طبق عکس (سرمه‌ای بسیار تیره)
    const bgColor = 0x020410; 
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, 0.02);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- 2. Background Grid (Engineering Look) ---
    // گرید محو در پس‌زمینه شبیه عکس دوم
    const gridHelper = new THREE.GridHelper(60, 40, 0x1e293b, 0x0f172a);
    gridHelper.rotation.x = Math.PI / 2; // عمودی کردن گرید
    gridHelper.position.z = -5;
    scene.add(gridHelper);

    // --- 3. Materials (Glass & Neon) ---
    
    // متریال شیشه‌ای تیره برای نودها
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.1,
        transmission: 0.4, // شیشه‌ای بودن
        transparent: true,
        thickness: 0.5,
        clearcoat: 1.0,
    });

    // متریال هسته مرکزی (بنفش درخشان - شبیه عکس اول)
    const coreMat = new THREE.MeshPhysicalMaterial({
        color: 0x2e1065, // بنفش تیره
        emissive: 0x7e22ce, // بنفش روشن
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
    });

    // متریال خط‌چین مدارها
    const dashLineMat = new THREE.LineDashedMaterial({
        color: 0x3b82f6, // آبی کلاسیک n8n
        dashSize: 0.2,
        gapSize: 0.2,
        transparent: true,
        opacity: 0.3,
    });

    // --- 4. Central Hub (The AI Agent - Scanner Style) ---
    const centerGroup = new THREE.Group();
    scene.add(centerGroup);

    // کپسول مرکزی (شبیه عکس اول)
    const capsuleGeo = new RoundedBoxGeometry(2.5, 3.5, 0.5, 8, 0.5);
    const capsule = new THREE.Mesh(capsuleGeo, coreMat);
    centerGroup.add(capsule);

    // حلقه اسکنر داخل کپسول (چشم)
    const eyeGeo = new THREE.TorusGeometry(0.6, 0.05, 16, 32);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.z = 0.3;
    centerGroup.add(eye);

    // مردمک چشم
    const pupilGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const pupil = new THREE.Mesh(pupilGeo, new THREE.MeshBasicMaterial({ color: 0xa855f7 })); // بنفش نئونی
    pupil.position.z = 0.3;
    centerGroup.add(pupil);

    // افکت اسکن (خط افقی متحرک)
    const scanLineGeo = new THREE.PlaneGeometry(2.2, 0.05);
    const scanLineMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.8 });
    const scanLine = new THREE.Mesh(scanLineGeo, scanLineMat);
    scanLine.position.z = 0.35;
    centerGroup.add(scanLine);

    // --- 5. Orbiting System (Tools & Memory) ---
    // ساخت مدارهای دایره‌ای شبیه عکس دوم
    
    const createOrbitRing = (radius: number) => {
        const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
        const points = curve.getPoints(64);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, dashLineMat);
        line.computeLineDistances(); // برای فعال شدن خط‌چین
        return line;
    };

    const orbit1 = createOrbitRing(4);
    const orbit2 = createOrbitRing(6.5);
    scene.add(orbit1);
    scene.add(orbit2);

    // تابع ساخت نودهای کوچک (آیکون‌دار)
    const createSatelliteNode = (radius: number, angle: number, iconType: string, color: number) => {
        const group = new THREE.Group();
        group.userData = { radius, angle, speed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1) };
        
        // محاسبه پوزیشن اولیه
        group.position.x = Math.cos(angle) * radius;
        group.position.y = Math.sin(angle) * radius;

        // بدنه نود (مربع گرد شیشه‌ای - شبیه آیکون‌های عکس دوم)
        const geo = new RoundedBoxGeometry(1.2, 1.2, 0.2, 4, 0.2);
        const mat = glassMat.clone();
        // @ts-ignore
        mat.color.setHex(0x0f172a);
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        // حاشیه رنگی نود
        const borderGeo = new THREE.EdgesGeometry(geo);
        const borderMat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.8 });
        const border = new THREE.LineSegments(borderGeo, borderMat);
        group.add(border);

        // آیکون
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
    // مدار داخلی
    satellites.push(createSatelliteNode(4, 0, 'db', 0x00ffff)); // دیتابیس (فیروزه‌ای)
    satellites.push(createSatelliteNode(4, Math.PI, 'lightning', 0xeab308)); // رعد (زرد)
    
    // مدار خارجی
    satellites.push(createSatelliteNode(6.5, Math.PI/2, 'mail', 0xa855f7)); // ایمیل (بنفش)
    satellites.push(createSatelliteNode(6.5, -Math.PI/2, 'google', 0x3b82f6)); // گوگل (آبی)

    // --- 6. Main Flow (Horizontal Line) ---
    // خط افقی که از وسط رد می‌شود (ورودی/خروجی)
    const mainFlowGroup = new THREE.Group();
    scene.add(mainFlowGroup);
    
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-3, 0, 0) // وصل به چپ کپسول مرکزی
    ]);
    const lineGeo2 = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(3, 0, 0), // وصل به راست کپسول مرکزی
        new THREE.Vector3(10, 0, 0)
    ]);
    
    const mainLineMat = new THREE.LineBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.5 });
    mainFlowGroup.add(new THREE.Line(lineGeo, mainLineMat));
    mainFlowGroup.add(new THREE.Line(lineGeo2, mainLineMat));

    // نود شروع و پایان (ساده)
    const startNode = createSatelliteNode(10, Math.PI, 'edit', 0xffffff); // این فقط برای شکل است، پوزیشنش دستی ست می‌شود
    startNode.position.set(-10, 0, 0);
    startNode.userData.isStatic = true; // این نود نمی‌چرخد
    
    const endNode = createSatelliteNode(10, 0, 'code', 0xffffff);
    endNode.position.set(10, 0, 0);
    endNode.userData.isStatic = true;

    // --- 7. Data Packets (Glowing Particles) ---
    const packetGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const packets: { mesh: THREE.Mesh, path: 'orbit1' | 'orbit2' | 'main', progress: number, speed: number, offset?: number }[] = [];

    // پکت‌های مداری
    for(let i=0; i<6; i++) {
        const mesh = new THREE.Mesh(packetGeo, packetMat);
        scene.add(mesh);
        packets.push({
            mesh,
            path: i % 2 === 0 ? 'orbit1' : 'orbit2',
            progress: Math.random() * Math.PI * 2, // زاویه برای مدار
            speed: 0.02,
            offset: i % 2 === 0 ? 4 : 6.5 // شعاع
        });
    }

    // پکت‌های جریان اصلی (افقی)
    for(let i=0; i<4; i++) {
        const mesh = new THREE.Mesh(packetGeo, new THREE.MeshBasicMaterial({ color: 0xa855f7 })); // بنفش
        scene.add(mesh);
        packets.push({
            mesh,
            path: 'main',
            progress: -10 + (Math.random() * 20), // موقعیت X
            speed: 0.1
        });
    }


    // --- 8. Post Processing (Neon Bloom) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 1.3; // درخشش نئونی قوی
    bloomPass.radius = 0.6;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- 9. Animation Loop ---
    let time = 0;
    const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;

        // انیمیشن اسکنر (چشم مرکزی)
        scanLine.position.y = Math.sin(time * 2) * 1.5; // حرکت بالا پایین
        pupil.scale.setScalar(0.8 + Math.sin(time * 5) * 0.2); // تپش مردمک

        // چرخش نودهای ماهواره‌ای (Satellites)
        satellites.forEach(sat => {
            if (sat.userData.isStatic) return;

            const data = sat.userData;
            data.angle += data.speed;
            sat.position.x = Math.cos(data.angle) * data.radius;
            sat.position.y = Math.sin(data.angle) * data.radius;
            
            // نود همیشه صاف بماند (نچرخد همراه مدار)
            sat.rotation.z = 0; 
        });

        // حرکت پکت‌ها
        packets.forEach(p => {
            if (p.path === 'main') {
                p.progress += p.speed;
                if (p.progress > 10) p.progress = -10; // ریست
                // پرش از روی مرکز (چون کپسول آنجاست)
                if (p.progress > -2.5 && p.progress < 2.5) {
                    p.mesh.visible = false;
                } else {
                    p.mesh.visible = true;
                    p.mesh.position.set(p.progress, 0, 0);
                }
            } else {
                // حرکت روی مدار
                p.progress += p.speed;
                p.mesh.position.x = Math.cos(p.progress) * p.offset!;
                p.mesh.position.y = Math.sin(p.progress) * p.offset!;
            }
        });

        // چرخش ملایم کل صحنه (برای افکت سه بعدی جذاب)
        scene.rotation.y = Math.sin(time * 0.2) * 0.05;
        scene.rotation.x = Math.sin(time * 0.1) * 0.05;

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