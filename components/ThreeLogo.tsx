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

const ThreeLogo: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // --- تنظیمات اولیه ---
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // نکته مهم ۱: تنظیم رنگ پاکسازی روی سیاه با شفافیت صفر
    renderer.setClearColor(new THREE.Color(0x000000), 0);
    
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
    controls.enablePan = false;

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

    // شیپ‌ها
    const shape1 = new THREE.Shape();
    shape1.moveTo(-4, -4); shape1.lineTo(-4, 2); shape1.lineTo(-1, -1); shape1.lineTo(-1, -4); shape1.lineTo(-4, -4);
    const mat1 = new THREE.MeshPhysicalMaterial({ color: 0x001f5c, emissive: 0x001f5c, emissiveIntensity: 0.3, ...materialParams });
    logoGroup.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape1, extrudeSettings), mat1));

    const shape2 = new THREE.Shape();
    shape2.moveTo(-4, 2); shape2.lineTo(-4, 5); shape2.lineTo(1, 0); shape2.lineTo(1, -3); shape2.lineTo(-1, -1); shape2.lineTo(-4, 2);
    const mat2 = new THREE.MeshPhysicalMaterial({ color: 0x0099ff, emissive: 0x0099ff, emissiveIntensity: 0.6, ...materialParams });
    logoGroup.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape2, extrudeSettings), mat2));

    const shape3 = new THREE.Shape();
    shape3.moveTo(1, -3); shape3.lineTo(1, 5); shape3.lineTo(3.5, 5); shape3.lineTo(3.5, -0.5); shape3.lineTo(1, -3);
    const mat3 = new THREE.MeshPhysicalMaterial({ color: 0x0056b3, emissive: 0x0056b3, emissiveIntensity: 0.4, ...materialParams });
    logoGroup.add(new THREE.Mesh(new THREE.ExtrudeGeometry(shape3, extrudeSettings), mat3));

    new THREE.Box3().setFromObject(logoGroup).getCenter(logoGroup.position).multiplyScalar(-1);
    scene.add(logoGroup);

    // --- پارتیکل‌ها ---
    const particleCount = 60;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      particleVelocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05));
    }
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleSystem = new THREE.Points(particles, new THREE.PointsMaterial({ color: 0x00ffff, size: 0.15, transparent: true, opacity: 0.8, blending: THREE.NormalBlending }));
    scene.add(particleSystem);

    // --- تنظیمات جدید برای رفع مشکل سیاهی (شروع تغییرات مهم) ---
    const renderScene = new RenderPass(scene, camera);
    renderScene.clearColor = new THREE.Color(0x000000);
    renderScene.clearAlpha = 0; // حتما باید ۰ باشد

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.0, 0.4, 0.85);
    bloomPass.threshold = 0;
    bloomPass.strength = 0.6;
    bloomPass.radius = 0.5;

    // نکته مهم ۲: ساخت یک هدف رندر اختصاصی با فرمت RGBA (برای پشتیبانی از شفافیت)
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat, // <--- این خط حیاتی است!
      stencilBuffer: false
    });

    // پاس دادن renderTarget سفارشی به کامپوزر
    const composer = new EffectComposer(renderer, renderTarget);
    composer.setSize(width, height);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- مدیریت تغییر سایز ---
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
      // استفاده از کامپوزر به جای رندر معمولی
      composer.render();
    };

    animate();

    // --- پاکسازی ---
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      
      renderer.dispose();
      composer.dispose();
      renderTarget.dispose(); // پاک کردن تارگت سفارشی
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) object.material.dispose();
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="w-14 h-14 relative" />;
};

export default ThreeLogo;