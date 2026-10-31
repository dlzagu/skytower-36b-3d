// Product-sized D/E replacement, 2026-10-31. Shapes are visual approximations.
export function buildDrawerVanity({THREE,cm,B,CY,M,mat,place,wood}) {
  const timber=wood('#ccaa79','#a38354');
  const vanity=place(753,632,1,0);vanity.name='LIV console 01 natural 90x39x76';
  vanity.userData.dimensionsCm=[90,39,76];
  vanity.userData.kneeClearanceCm={width:59,height:59.7};
  B(vanity,90,1.8,39,timber,0,74.2,19.5,.3);
  B(vanity,90,1.8,39,timber,0,59.7,19.5,.3);
  for(const x of [-44.1,44.1])B(vanity,1.8,12.7,39,timber,x,61.5,19.5,.25);
  B(vanity,86.4,12.7,1.5,timber,0,61.5,.75);
  B(vanity,1.2,12.7,36,timber,0,61.5,19);
  const drawers=[];
  for(const x of [-21.9,21.9]){
    const d=new THREE.Group();vanity.add(d);d.position.x=cm(x);d.name='LIV closed drawer';
    B(d,42.7,13.4,1.6,timber,0,60.2,38.2,.25);
    B(d,39.8,.8,31,timber,0,61.2,21.7,.15);
    const shadow=M('#8e704c',{roughness:1});B(d,9.5,1.1,.2,shadow,0,66.1,39.05,.2);
    B(d,10,1.5,1.1,timber,0,66.5,39.5,.45);drawers.push(d);
  }
  for(const x of [-31.2,31.2])for(const z of [5,34])B(vanity,3.4,59.7,3.4,timber,x,0,z,.25);
  B(vanity,59,3,2.6,timber,0,28,5,.2);
  for(const x of [-31.2,31.2])B(vanity,2.5,2.5,29,timber,x,18,19.5,.2);
  const mirror=new THREE.Group();vanity.add(mirror);mirror.name='LIV tabletop mirror natural 29x16x42.5';mirror.position.set(0,cm(76),cm(15));
  mirror.userData.dimensionsCm=[29,16,42.5];
  for(const x of [-13.3,13.3]){B(mirror,2.4,1.6,16,timber,x,0,0,.35);B(mirror,1.6,36,1.5,timber,x,1.6,0,.2);}
  B(mirror,24.2,1.4,1.8,timber,0,6.8,0,.2);
  const frame=new THREE.Group();mirror.add(frame);frame.position.set(0,cm(24.8),0);frame.rotation.x=-.055;
  B(frame,25.5,35.2,1.2,timber,0,-17.6,0,.35);
  const glass=new THREE.Mesh(new THREE.PlaneGeometry(cm(23),cm(32.7)),mat.mirror);glass.position.z=cm(.65);frame.add(glass);
  for(const x of [-13.5,13.5]){const pivot=CY(mirror,.7,.7,.8,M('#88765c',{metalness:.65,roughness:.35}),x,24,0,16);pivot.rotation.z=Math.PI/2;}
  B(vanity,19,.8,12,mat.ceramic2,-28,76,22,.8);CY(vanity,2,2,8,mat.ceramic,-31,76.8,22,16);CY(vanity,1.6,1.6,6,M('#b4a27e'),-24,76.8,22,16);
  const stool=place(775,632,1,0);stool.name='Haje stool retained 41x24x45';
  B(stool,41,3,24,timber,0,42,0,1);for(const x of [-17,17])for(const z of [-9,9])B(stool,3,42,3,timber,x,0,z,.3);
  return {vanity,mirror,stool,drawers,setDrawersOpen(on){for(const d of drawers)d.position.z=cm(on?25:0);},revision:'liv-drawers-tabletop-mirror-20261031'};
}

// The legacy export name is retained so the caller's existing import remains valid.
// Product envelope is IKEA 994.244.63; the woven back and curved supports are
// visual approximations, not an engineering model or a desk-clearance guarantee.
export function buildHattefjallChair({THREE,cm,B,CY,M,rod,parent}) {
  const chair=new THREE.Group();parent.add(chair);
  chair.position.set(cm(25),0,cm(88));chair.name='FLINTAN beige with armrests 994.244.63';
  chair.userData.productId='994.244.63';
  chair.userData.productName='IKEA FLINTAN 플린탄 사무용 팔걸이의자 · 베이지';
  chair.userData.productDimensionsCm={width:71,depth:71,heightRange:[103,114],seatWidth:46,seatDepth:49,seatHeightRange:[45,58],armrestHeightRange:[69,81]};
  chair.userData.poseCm={seatTop:45,backTop:103,armrestTop:69};
  chair.userData.poseNote='공식 조절범위 중 낮은 자세를 개략 재현: 좌판45, 등판상단103, 팔걸이69cm. 팔걸이는 고정식이며 좌판 높이와 함께 올라갑니다. 책상 상판 아래 모델값69.2cm와 명목상2mm 차이뿐이므로 완전 수납을 보장하지 않고 의자를 조금 빼두었습니다.';
  const beige=M('#c9c4b8',{roughness:.8}),fabric=M('#d0c8bb',{roughness:1});
  const meshBeige=M('#bfb7a8',{roughness:1}),hub=M('#c5c1b5',{roughness:.75});
  const rubber=M('#363b40',{roughness:.9}),piston=M('#333536',{roughness:.4,metalness:.5});
  // Lowest seat pose: fabric seat top45cm. The five-star base remains beige;
  // only the piston and wheel tread are dark in the verified product photo.
  CY(chair,2,2,30,piston,0,8,0,24);CY(chair,3,3,17,beige,0,7,0,24);
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5,px=Math.sin(a)*32.5,pz=Math.cos(a)*32.5;
    const leg=B(chair,4.5,4,31,beige,Math.sin(a)*16,5,Math.cos(a)*16,.7);leg.rotation.y=a;
    const caster=new THREE.Group();chair.add(caster);caster.position.set(cm(px),0,cm(pz));caster.rotation.y=a;
    CY(caster,.8,.8,3,beige,0,5,0,12);
    for(const x of [-1.35,1.35]){
      const tire=new THREE.Mesh(new THREE.CylinderGeometry(cm(2.7),cm(2.7),cm(1.5),20),rubber);
      tire.rotation.z=Math.PI/2;tire.position.set(cm(x),cm(2.7),0);tire.castShadow=true;caster.add(tire);
      const cap=new THREE.Mesh(new THREE.CylinderGeometry(cm(2.05),cm(2.05),cm(.25),20),hub);
      cap.rotation.z=Math.PI/2;cap.position.set(cm(x+(x<0?-.82:.82)),cm(2.7),0);caster.add(cap);
    }
  }
  B(chair,43,2.5,43,beige,0,38.5,0,1.2);
  B(chair,46,5,49,fabric,0,40,0,2.5);
  B(chair,10,3.5,22,piston,0,35,3,.8);
  // Open, rounded mesh back. ShapeGeometry keeps the same rounded outline as
  // the frame; a repeating alpha grid allows the room to show through it.
  const outline=(half,bottom,top)=>{
    const s=new THREE.Shape();s.moveTo(cm(-half+7),cm(bottom));
    s.quadraticCurveTo(cm(-half),cm(bottom),cm(-half),cm(bottom+8));
    s.lineTo(cm(-half),cm(top-10));
    s.quadraticCurveTo(cm(-half),cm(top),cm(-half+11),cm(top));
    s.lineTo(cm(half-11),cm(top));
    s.quadraticCurveTo(cm(half),cm(top),cm(half),cm(top-10));
    s.lineTo(cm(half),cm(bottom+8));s.quadraticCurveTo(cm(half),cm(bottom),cm(half-7),cm(bottom));s.closePath();return s;
  };
  const back=new THREE.Group();chair.add(back);back.position.set(0,cm(47),cm(24));
  const outer=outline(23.5,0,56),inner=outline(20.6,3,53.2);
  outer.holes.push(new THREE.Path(inner.getPoints(48).reverse()));
  const frame=new THREE.Mesh(new THREE.ExtrudeGeometry(outer,{depth:cm(1.7),bevelEnabled:false,curveSegments:24,steps:1}),beige);
  frame.castShadow=true;back.add(frame);
  const canvas=document.createElement('canvas');canvas.width=32;canvas.height=32;
  const ctx=canvas.getContext('2d');ctx.fillStyle='#000';ctx.fillRect(0,0,32,32);
  ctx.fillStyle='#fff';ctx.fillRect(0,0,4,32);ctx.fillRect(0,0,32,4);
  const weave=new THREE.CanvasTexture(canvas);weave.wrapS=weave.wrapT=THREE.RepeatWrapping;weave.repeat.set(90,110);
  const net=meshBeige.clone();net.alphaMap=weave;net.alphaTest=.35;net.side=THREE.DoubleSide;
  const meshGeometry=new THREE.ShapeGeometry(inner,32);
  // ShapeGeometry uses raw positions for UVs. Normalize to the opening so the
  // weave density is independent of the global cm-to-scene-unit scale.
  const uv=meshGeometry.attributes.uv,pos=meshGeometry.attributes.position;
  for(let i=0;i<uv.count;i++)uv.setXY(i,(pos.getX(i)/cm(1)+20.6)/41.2,(pos.getY(i)/cm(1)-3)/50.2);
  uv.needsUpdate=true;
  const mesh=new THREE.Mesh(meshGeometry,net);mesh.position.z=cm(.7);back.add(mesh);
  // Narrow lumbar support remains behind the mesh, rather than filling it.
  for(const x of [-19,19])rod(chair,[x,39,18],[x,57,26],.8,beige);
  for(const y of [22,29]){
    rod(back,[-19,y,2.2],[0,y+1.4,3.1],1.15,hub);
    rod(back,[0,y+1.4,3.1],[19,y,2.2],1.15,hub);
  }
  // Fixed beige armrests at69cm in this low-seat pose; no independent height
  // adjustment is implied. They stop short of the desk rather than clipping it.
  for(const x of [-27,27]){
    rod(chair,[x*.76,39,9],[x,46,11],1,beige);
    rod(chair,[x,46,11],[x,66.5,11],1,beige);
    B(chair,7,2.5,25,beige,x,66.5,-.5,1.2);
  }
  rod(chair,[13,37,-2],[25,36,-7],.45,piston);B(chair,6,1.2,3,beige,26,35.4,-7,.5);
  return chair;
}
