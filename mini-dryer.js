// E option: measured coordinates in cm. Placement preview, power unverified.
export function createMiniDryer({THREE, B, M, cm}) {
  const g = new THREE.Group();
  g.name = 'E CUCKOO CCD-A0310AW 53.5x42x65';
  g.__planPlaced = true;
  g.position.set(cm(884), 0, cm(435));
  g.rotation.y = Math.PI; // front faces the entrance, back faces the hallway end wall
  g.userData = {
    model:'CCD-A0310AW', dimensions:[53.5,42,65], centerCm:[884,435],
    rearWallGapCm:15, cornerGapCm:67.6, bathroomSideGapCm:80.25, powerVerified:false,
    installation:'Hallway preview: check outlet, ventilation, full door swing and turning passage on site',
    revision:'e-hall-dryer-small-basket-20261030'
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

// Generic small basket for layout planning; not a selected retail product.
export function createSmallBasket({THREE,B,M,cm}) {
  const g=new THREE.Group();g.name='E small laundry basket 30x28x45';g.__planPlaced=true;
  g.position.set(cm(815),0,cm(457));
  g.userData={dimensions:[30,28,45],centerCm:[815,457],productSelected:false};
  const body=M('#cdb58d',{roughness:1}),weave=M('#bca27a',{roughness:1}),edge=M('#d5bf9b',{roughness:.85});
  const shell=new THREE.Mesh(new THREE.CylinderGeometry(cm(14.7),cm(12.5),cm(43.5),48),body);
  shell.scale.z=28/30;shell.position.y=cm(21.75);shell.castShadow=true;shell.receiveShadow=true;g.add(shell);
  for(let i=1;i<29;i++){
    const h=i*1.5,r=12.5+(14.7-12.5)*h/43.5;
    const ring=new THREE.Mesh(new THREE.TorusGeometry(cm(r),cm(.16),4,48),weave);
    ring.rotation.x=Math.PI/2;ring.scale.y=28/30;ring.position.y=cm(h);g.add(ring);
  }
  const lid=new THREE.Mesh(new THREE.CylinderGeometry(cm(15),cm(15),cm(1.5),48),edge);
  lid.scale.z=28/30;lid.position.y=cm(44.25);lid.castShadow=true;g.add(lid);
  B(g,5.5,1.4,.35,M('#725b3e'),0,37.5,13.6,.35);
  return g;
}
