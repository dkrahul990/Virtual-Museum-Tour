import {useRef,useEffect} from "react"
import { OrbitControls } from "three-stdlib"
import * as THREE from "three"

const Item1 = () => {
  const textureUrl = "https://l13.alamy.com/360/PN3TT7/basilica-of-st-john-PN3TT7.jpg"
  const mountRef = useRef(null)
  useEffect(()=>{
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.z=5
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({canvas:mountRef.current})
    renderer.setSize(window.innerWidth,window.innerHeight)

    const geometry = new THREE.SphereGeometry(5,32,32)
    geometry.scale(-1,1,1)
    const texture = new THREE.TextureLoader().load(textureUrl)
    const material = new THREE.MeshBasicMaterial({map:texture})
    const sphare = new THREE.Mesh(geometry, material)

    scene.add(sphare)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false;
    controls.enablePan = false;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    return () => {
  renderer.dispose();
  controls.dispose();
  geometry.dispose();
  material.dispose();
  texture.dispose();
};
  })
  return (
    <div>
      <canvas className="Scene" ref={mountRef}></canvas>
    </div>
  )
}

export default Item1
