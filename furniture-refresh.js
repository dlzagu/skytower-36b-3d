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

export function buildHattefjallChair({THREE,cm,B,CY,M,rod,parent}) {
  const chair=new THREE.Group();parent.add(chair);chair.position.set(cm(25),0,cm(82));chair.name='HATTEFJALL dark grey black';
  chair.userData.productDimensionsCm={width:68,depth:68,maxHeight:114,seatWidth:50,seatDepth:40,seatHeightRange:[46,56]};
  chair.userData.poseNote='시각화용 조절 자세: 좌판46, 등판상단104, 팔걸이64cm. 전체 최소높이와 팔걸이 최저높이는 제조사 미표기이며 이 그림은 책상 수납 보장이 아닙니다.';
  const fabric=M('#73746f',{roughness:1}),black=M('#292c2a',{roughness:.72}),rim=M('#737774',{roughness:.7});
  CY(chair,2.1,2.1,33,black,0,7,0,24);CY(chair,3.7,3.7,5,black,0,34,0,24);
  for(let i=0;i<5;i++){const a=i*Math.PI*2/5,px=Math.sin(a)*31,pz=Math.cos(a)*31;rod(chair,[0,9,0],[px,5,pz],1.5,black);const wheel=CY(chair,3,3,4,black,px,0,pz,18);wheel.rotation.z=Math.PI/2;const w=CY(chair,2.5,2.5,4.15,rim,px,.5,pz,18);w.rotation.z=Math.PI/2;}
  B(chair,50,6,40,fabric,0,40,0,3);
  for(const x of [-23.5,23.5]){const wing=B(chair,3,8,29,fabric,x,42,4,1.5);wing.rotation.z=x<0?-.12:.12;}
  B(chair,5,20,4,black,0,39,20,1);
  const back=new THREE.Group();chair.add(back);back.position.set(0,cm(51),cm(21));back.rotation.x=.08;
  const shape=new THREE.Shape();shape.moveTo(cm(-17),0);shape.bezierCurveTo(cm(-26),cm(2),cm(-27),cm(11),cm(-24),cm(22));shape.lineTo(cm(-21),cm(45));shape.bezierCurveTo(cm(-20),cm(56),cm(20),cm(56),cm(21),cm(45));shape.lineTo(cm(24),cm(22));shape.bezierCurveTo(cm(27),cm(11),cm(26),cm(2),cm(17),0);shape.quadraticCurveTo(0,cm(-2),cm(-17),0);
  const cushion=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:cm(3.5),bevelEnabled:true,bevelThickness:cm(.7),bevelSize:cm(.7),bevelSegments:3,curveSegments:20,steps:1}),fabric);cushion.castShadow=true;back.add(cushion);
  for(const x of [-28,28]){rod(chair,[x*.79,42,10],[x,51,11],1.2,black);rod(chair,[x,51,11],[x,62,6],1.1,black);B(chair,6,2,25,black,x,62,-1,1);}
  rod(chair,[13,39,0],[27,38,-4],.5,black);B(chair,6,1.3,3,black,28,37.5,-4,.5);
  return chair;
}
