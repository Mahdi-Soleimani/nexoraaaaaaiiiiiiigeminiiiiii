import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeLogo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ذخیره کانتینر در متغیر برای استفاده در cleanup (جلوگیری از خطای null در React 18)
    const container = mountRef.current;
    
    // --- تنظیمات اولیه ---
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // محدود کردن پیکسل ریت برای پرفورمنس
    renderer.setClearColor(0x000000, 0); // شفافیت کامل پس‌زمینه (Alpha = 0)
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.5;
    
    container.appendChild(renderer.domElement);

    // --- کنترل‌ها ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;
    controls.enableZoom = false;
    controls.enablePan = false; // غیرفعال کردن پن برای جلوگیری از بهم ریختن موقعیت

    // --- نورپردازی ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x0055ff, 2, 20);
    blueLight.position.set(-5, 5, 5);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00ffff, 2, 20);
    cyanLight.position.set(5, -5, 5);
    scene.add(cyanLight);

    // --- ساخت لوگو ---
    const logoGroup = new THREE.Group();
    const materialParams = {
      metalness: 0.8,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 1.0
    };

    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.1,
      bevelSegments: 3
    };

    // پارت ۱
    const shape1 = new THREE.Shape();
    shape1.moveTo(-4, -4);
    shape1.lineTo(-4, 2); 
    shape1.lineTo(-1, -1);
    shape1.lineTo(-1, -4);
    shape1.lineTo(-4, -4);
    const mat1 = new THREE.MeshPhysicalMaterial({ color: 0x001f5c, emissive: 0x001f5c, emissiveIntensity: 0.3, ...materialParams });
    const mesh1 = new THREE.Mesh(new THREE.ExtrudeGeometry(shape1, extrudeSettings), mat1);
    logoGroup.add(mesh1);

    // پارت ۲
    const shape2 = new THREE.Shape();
    shape2.moveTo(-4, 2);
    shape2.lineTo(-4, 5);
    shape2.lineTo(1, 0);
    shape2.lineTo(1, -3); 
    shape2.lineTo(-1, -1);
    shape2.lineTo(-4, 2);
    const mat2 = new THREE.MeshPhysicalMaterial({ color: 0x0099ff, emissive: 0x0099ff, emissiveIntensity: 0.6, ...materialParams });
    const mesh2 = new THREE.Mesh(new THREE.ExtrudeGeometry(shape2, extrudeSettings), mat2);
    logoGroup.add(mesh2);

    // پارت ۳
    const shape3 = new THREE.Shape();
    shape3.moveTo(1, -3);
    shape3.lineTo(1, 5);
    shape3.lineTo(3.5, 5);
    shape3.lineTo(3.5, -0.5);
    shape3.lineTo(1, -3);
    const mat3 = new THREE.MeshPhysicalMaterial({ color: 0x0056b3, emissive: 0x0056b3, emissiveIntensity: 0.4, ...materialParams });
    const mesh3 = new THREE.Mesh(new THREE.ExtrudeGeometry(shape3, extrudeSettings), mat3);
    logoGroup.add(mesh3);

    // مرکز کردن
    new THREE.Box3().setFromObject(logoGroup).getCenter(logoGroup.position).multiplyScalar(-1);
    scene.add(logoGroup);

    // --- پارتیکل‌ها (کاهش تعداد برای نوبار) ---
    const particleCount = 60; // کاهش به ۶۰ برای سبک‌تر شدن در نوبار
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
        particleVelocities.push(new THREE.Vector3(
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05,
            (Math.random() - 0.5) * 0.05
        ));
    }
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.15, transparent: true, opacity: 0.8, blending: THREE.NormalBlending });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // --- افکت Bloom ---
    const renderScene = new RenderPass(scene, camera);
    renderScene.clearColor = new THREE.Color(0, 0, 0); // رنگ پاکسازی
    renderScene.clearAlpha = 0; // شفافیت کامل برای RenderPass (Alpha = 0)
    
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.0, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 0.6;
    bloomPass.radius = 0.5;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- مدیریت تغییر سایز (Responsive) ---
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      composer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // --- انیمیشن ---
    let animationId: number;
    let time = 0;

    const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.01;

        const pulse = Math.sin(time * 2) * 0.2 + 0.8;
        mat1.emissiveIntensity = 0.3 * pulse;
        mat2.emissiveIntensity = 0.6 * pulse;
        mat3.emissiveIntensity = 0.4 * pulse;

        const positions = particles.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += particleVelocities[i].x;
            positions[i * 3 + 1] += particleVelocities[i].y;
            positions[i * 3 + 2] += particleVelocities[i].z;
            
            if (Math.abs(positions[i * 3]) > 7) particleVelocities[i].x *= -1;
            if (Math.abs(positions[i * 3 + 1]) > 7) particleVelocities[i].y *= -1;
            if (Math.abs(positions[i * 3 + 2]) > 7) particleVelocities[i].z *= -1;
        }
        particles.attributes.position.needsUpdate = true;

        controls.update();
        composer.render();
    };

    animate();

    // --- پاکسازی ---
    return () => {
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        composer.dispose(); // پاکسازی کامپوزر
        scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
                object.geometry.dispose();
                if (object.material instanceof THREE.Material) {
                    // بررسی برای متریال‌های تکی یا آرایه‌ای
                    if (Array.isArray(object.material)) {
                        object.material.forEach(m => m.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            }
        });
    };
  }, []);

  // کلاس‌های Tailwind برای سایز دیفالت. می‌توانید اینجا تغییر دهید.
  return <div ref={mountRef} className="w-14 h-14 relative" />;
};

export default ThreeLogo;