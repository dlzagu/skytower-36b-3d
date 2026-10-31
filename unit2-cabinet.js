// COHEN UNIT2 NO.2 cabinet body only. Local units are cm before cm().
// Origin: floor / width centre / rear edge. Front faces +Z, depth is 0..40.
// Overall size and tube layout follow the seller's size drawing. Panel thickness,
// door overlap, hole position and slat count are visual approximations from photos;
// they must not be used as verified internal LP-storage or load-bearing dimensions.
export function buildUnit2Cabinet({THREE,cm,B,CY,M,eOak,eSteel}) {
  const cabinet=new THREE.Group();
  cabinet.name='COHEN UNIT2 NO.2 white oak and polished stainless 110x40x90.3';
  cabinet.userData={
    productName:'코헨 UNIT2 NO.2',
    dimensions:[110,40,90.3],dimensionsOrder:'width,depth,height cm',
    bounds:{min:[-55,0,0],max:[55,90.3,40],order:'x,height,z cm'},
    bodyBottomCm:40.3,bodyTopCm:90.3,bodyHeightCm:50,
    legDiameterCm:2.54,legCentreSpanCm:[95.5,25.5],braceHeightCm:12,
    material:'화이트 오크 원목·무늬목 / E0 MDF 코어 / 유광 스테인리스',
    doorType:'sliding: left flat panel with finger hole, right horizontal slats',
    visualApproximation:'판재 두께·문 겹침·손구멍 위치·슬랫18개는 사진 기반 개략 형상',
    internalLpClearance:'unverified',loadCapacity:'unverified',
    assemblyAndAntiTip:'follow actual product instructions; not validated by this model'
  };
  const oak=eOak||M('#d4b181',{roughness:.6});
  const steel=eSteel?eSteel.clone():M('#c6c9c7');
  steel.color.set('#d2d5d2');steel.metalness=1;steel.roughness=.14;
  const foot=M('#44443e',{roughness:.9});
  const tube=(a,b,r)=>{
    const p=new THREE.Vector3(...a.map(cm)),q=new THREE.Vector3(...b.map(cm));
    const direction=q.clone().sub(p);
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(cm(r),cm(r),direction.length(),28),steel);
    mesh.position.copy(p.add(q).multiplyScalar(.5));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
    mesh.castShadow=true;mesh.receiveShadow=true;cabinet.add(mesh);return mesh;
  };
  // Four slender round legs; low front/rear/side rails remain visually open.
  for(const x of [-47.75,47.75])for(const z of [7.25,32.75]){
    CY(cabinet,1.27,1.27,40.1,steel,x,.2,z,32);
    CY(cabinet,1.27,1.27,.2,foot,x,0,z,28);
  }
  for(const z of [7.25,32.75])tube([-47.75,12,z],[47.75,12,z],.75);
  for(const x of [-47.75,47.75])tube([x,12,7.25],[x,12,32.75],.75);

  // 50cm-high rectangular case, without scaling the 40.3cm base.
  B(cabinet,110,1.8,40,oak,0,88.5,20,.08).name='UNIT2 top';
  B(cabinet,110,1.8,40,oak,0,40.3,20,.08).name='UNIT2 bottom';
  for(const x of [-54.1,54.1])B(cabinet,1.8,46.4,40,oak,x,42.1,20,.08);
  B(cabinet,106.4,46.4,.8,oak,0,42.1,.4,.02);

  // Make the finger opening a genuine hole, not a black disc on the veneer.
  const door=new THREE.Shape();
  door.moveTo(cm(-53.1),cm(42.4));door.lineTo(cm(1.5),cm(42.4));
  door.lineTo(cm(1.5),cm(88.2));door.lineTo(cm(-53.1),cm(88.2));door.closePath();
  const hole=new THREE.Path();hole.absarc(cm(-49.3),cm(66.8),cm(1.65),0,Math.PI*2,true);door.holes.push(hole);
  const doorGeometry=new THREE.ExtrudeGeometry(door,{depth:cm(1.2),bevelEnabled:false,curveSegments:36,steps:1});
  const uv=doorGeometry.attributes.uv,positions=doorGeometry.attributes.position;
  for(let i=0;i<uv.count;i++)uv.setXY(i,(positions.getX(i)/cm(1)+53.1)/54.6,(positions.getY(i)/cm(1)-42.4)/45.8);
  uv.needsUpdate=true;
  const flatDoor=new THREE.Mesh(doorGeometry,oak);flatDoor.position.z=cm(38.2);
  flatDoor.castShadow=true;flatDoor.receiveShadow=true;flatDoor.name='UNIT2 left sliding panel with through hole';cabinet.add(flatDoor);

  // Recessed right sliding grille: actual gaps, not a black striped texture.
  const slats=new THREE.Group();slats.name='UNIT2 right sliding grille - photo approximation';cabinet.add(slats);
  for(const x of [1.05,52.45])B(slats,1.5,46.4,1.3,oak,x,42.1,36.7,.03);
  const count=18,gap=.85,height=(46.4-(count-1)*gap)/count;
  for(let i=0;i<count;i++)B(slats,52.9,height,1.35,oak,26.75,42.1+i*(height+gap),37.65,.05);
  // No internal shelf, audio equipment or wall-fixed art is invented here.
  return cabinet;
}
