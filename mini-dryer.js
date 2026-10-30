// E option: measured coordinates in cm. Placement preview, power unverified.
export function createMiniDryer({THREE, B, M, cm}) {
  const g = new THREE.Group();
  g.name = 'E CUCKOO CCD-A0310AW 53.5x42x65';
  g.__planPlaced = true;
  g.position.set(cm(879), 0, cm(805));
  g.rotation.y = Math.PI; // front faces the bedroom, away from the window
  g.userData = {
    model:'CCD-A0310AW', dimensions:[53.5,42,65], centerCm:[879,805],
    rearWallGapCm:15.5, frontWorkingSpaceCm:60, powerVerified:false,
    installation:'Preview only: check outlet, ventilation, curtain and full door swing on site',
    revision:'e-bedroom-restored-20261030'
  };
  const shell=M('#f3f2ef',{roughness:.48}), trim=M('#dadbd8',{roughness:.38}),
    dark=M('#383d40',{roughness:.26}), glass=M('#5d696e',{roughness:.16,metalness:.2});
  B(g,53.5,63.8,39.5,shell,0,1.2,-1.25,3.8);
  B(g,51.5,61.6,1.2,shell,0,2.2,18.9,3.1);
  for(const x of [-20,20])for(const z of [-15,15])B(g,3,1.2,3,trim,x,0,z,.5);
  const disk=(radius,depth,material,x,y,z)=>{
    const o=new THREE.Mesh(new THREE.CylinderGeometry(cm(radius),cm(radius),cm(depth),64),material);
    o.rotation.x=Math.PI/2;o.position.set(cm(x),cm(y),cm(z));o.castShadow=true;o.receiveShadow=true;g.add(o);return o;
  };
  disk(22.5,1.2,trim,0,37.5,19.9);
  disk(21.4,1.1,shell,0,37.5,20.4);
  disk(18.9,.25,dark,0,37.5,20.8);
  disk(17.6,.2,glass,0,37.5,20.9);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(cm(18.9),cm(.42),10,64),trim);
  rim.position.set(0,cm(37.5),cm(20.5));g.add(rim);
  B(g,1.8,7,.5,trim,20.2,34,20.7,.7);
  disk(3.8,.6,trim,0,7.7,20.6);disk(3.25,.5,shell,0,7.7,20.7);
  B(g,.35,1.6,.12,dark,0,8.8,20.94);
  B(g,6,1.2,.12,dark,11,7.1,20.2,.2);
  // Rear grille is inside the official body depth; no invented exhaust hose or power lead.
  for(let i=0;i<8;i++)B(g,21,.7,.2,trim,0,12+i*1.5,-20.9,.15);
  return g;
}
