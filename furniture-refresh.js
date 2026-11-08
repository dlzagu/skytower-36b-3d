// Product-sized D/E/F vanity replacement:
// - D/F안: 리샘 바이엘 와이드거울 수납 화장대 (오크 · 110×41.1×134.3cm) + 리샘 스위트 원형의자 (베이지) — 받는 제품(예산 제외)
// - E안: DF동서가구 모아벨 LPM 전신거울 4단 슬라이딩 서랍 수납 화장대 (오크 · 80×42×180cm) + 리샘 스위트 원형의자 (베이지) — 받는 제품(예산 제외)
export function buildDrawerVanity({THREE,cm,B,CY,M,mat,place,wood}) {
  const timber=wood('#cfa978','#a47e4f'),innerOak=wood('#c39b69','#967144');
  const shadow=M('#7d5f3b',{roughness:.92}),darkSlot=M('#5e462b',{roughness:.95});
  const railSteel=M('#25272a',{metalness:.65,roughness:.35});
  const vanity=place(753,632,1,0);
  vanity.position.set(cm(804),0,cm(702));
  vanity.name='Resam Bayer wide mirror storage vanity oak 110x41.1x134.3';
  vanity.userData.dimensionsCm=[110,41.1,134.3];
  vanity.userData.kneeClearanceCm={width:76,height:61.5};
  vanity.userData.gifted=true;

  // 1. Lower Left: 2 splayed tapered round oak legs (x = -50cm, open knee space x = -48 ~ +25cm)
  B(vanity,5.2,3.2,36,timber,-50,58.3,20.5,.3);
  for(const z of [6.5,34.5]){
    const leg=CY(vanity,2.05,1.35,60,timber,-50,0,z,20);
    leg.rotation.z=-0.045;
  }

  // 2. Lower Right: Tall pull-out 2-tier sliding cabinet (x = +25 ~ +55cm, W30 × D41.1 × H61.5cm)
  B(vanity,30,3.2,40.5,timber,40,0,20.4,.2);
  for(const x of [25.9,54.1])B(vanity,1.8,58.3,40.5,timber,x,3.2,20.4,.2);
  B(vanity,26.4,58.3,1.5,innerOak,40,3.2,.9);
  B(vanity,26.4,1.6,37,innerOak,40,31.5,20);
  const lowerPullout=B(vanity,29.2,57.5,1.8,timber,40,3.4,40.2,.25);
  lowerPullout.name='Bayer lower pull-out cabinet door';
  B(vanity,.55,57.5,.4,shadow,25.25,3.4,40.85);
  B(vanity,29.2,.55,.4,shadow,40,61.1,40.85);

  // 3. Middle Section: Wide desktop & 2 side-by-side handleless drawers (W110 × D41.1cm, y = 61.5 ~ 76cm)
  B(vanity,110,1.8,41.1,timber,0,61.5,20.55,.28);
  B(vanity,110,1.8,41.1,timber,0,74.2,20.55,.28);
  for(const x of [-54.1,0,54.1])B(vanity,1.8,10.9,39.5,innerOak,x,63.3,19.8,.15);
  B(vanity,106.4,10.9,1.5,innerOak,0,63.3,.85);
  const drawers=[];
  for(const x of [-27.2,27.2]){
    const d=new THREE.Group();vanity.add(d);d.position.x=cm(x);d.name='Bayer wide drawer';
    B(d,53.6,11.6,1.8,timber,0,62.1,40.2,.25);
    B(d,50.8,1,34,innerOak,0,62.8,22.5,.15);
    B(d,53.6,.55,.5,darkSlot,0,73.85,40.6);
    if(x<0){
      B(d,.8,7.5,33,innerOak,0,63.8,22.5,.1);
      B(d,50,7.5,.8,innerOak,0,63.8,22.5,.1);
    }
    drawers.push(d);
  }
  B(vanity,.6,11.8,.5,shadow,0,62.0,40.85);

  // 4. Upper Section (y = 76 ~ 134.3cm, H58.3 × D18cm):
  //    Left: Wide mirror (W80cm, x = -55 ~ +25cm) + Right: Hinged door cabinet (W30cm, x = +25 ~ +55cm)
  const mirror=new THREE.Group();vanity.add(mirror);
  mirror.name='Bayer integrated wide mirror and upper cabinet 110x18x58.3';
  mirror.position.set(0,cm(76),0);
  mirror.userData.dimensionsCm=[110,18,58.3];
  // Top continuous crown board (W110 × D18cm)
  B(mirror,110,1.8,18,timber,0,56.5,9,.25);
  // Left wide mirror frame & glass (x = -55 ~ +25cm, W80cm)
  B(mirror,80,1.8,15.5,timber,-15,0,7.75,.2);
  B(mirror,1.8,54.7,15.5,timber,-54.1,1.8,7.75,.2);
  B(mirror,78.2,54.7,1.6,timber,-14.1,1.8,1.2,.15);
  const glass=new THREE.Mesh(new THREE.PlaneGeometry(cm(76.2),cm(53.2)),mat.mirror);
  glass.position.set(cm(-14.2),cm(29.15),cm(2.25));
  mirror.add(glass);
  // Right upper door storage cabinet (x = +25 ~ +55cm, W30 × D18 × H58.3cm)
  B(mirror,30,1.8,18,timber,40,0,9,.2);
  for(const x of [25.9,54.1])B(mirror,1.8,54.7,18,timber,x,1.8,9,.2);
  B(mirror,26.4,54.7,1.5,innerOak,40,1.8,.85);
  for(const y of [18.5,36.5])B(mirror,26.4,1.5,15.5,innerOak,40,y,8.6);
  B(mirror,29.2,55.8,1.8,timber,40,1.25,17.1,.25).name='Bayer upper cabinet door';
  B(mirror,.55,56.2,.4,shadow,25.25,1.05,17.75);

  // Subtle vanity desktop tray & bottles on left front deck (z = 18 ~ 41.1cm is open desktop)
  B(vanity,19,.8,12,mat.ceramic2,-34,76,28,.8);
  CY(vanity,2,2,8,mat.ceramic,-37,76.8,28,16);
  CY(vanity,1.6,1.6,6,M('#b4a27e'),-30,76.8,28,16);

  // ============================================================================
  // E·G·H·I안: DF동서가구 모아벨 LPM 전신거울 4단 슬라이딩 서랍 수납 화장대 (화이트 · 80×42×180cm)
  // - 좌측 수납 타워 (폭40cm, x = -40 ~ 0cm):
  //   · 하부 3단 서랍장 (폭40 × 깊이42 × 높이70cm, y = 0 ~ 70cm)
  //   · 중부 좌우 슬라이딩 서랍 겸 화장대 상판 (폭40 × 깊이30 × 높이14.8cm, y = 70 ~ 84.8cm, z = 12 ~ 42cm)
  //   · 상부 3단 오픈형 선반 (폭40 × 깊이12 × 높이70cm, y = 70 ~ 140cm, z = 0 ~ 12cm)
  // - 우측 아치형 전신거울 (폭40 × 높이180cm, x = 0 ~ +40cm, y = 0 ~ 180cm; 상단 반원 아치 R=20cm)
  // ============================================================================
  const mTimber=M('#f5f3ef',{roughness:.26,metalness:.02});
  const mInner=M('#eae6df',{roughness:.34});
  const mShadow=M('#d6d1c8',{roughness:.56});
  const mDarkSlot=M('#c5bfb5',{roughness:.66});
  const moabelVanity=place(753,632,1,0);
  moabelVanity.position.set(cm(804),0,cm(682));
  moabelVanity.visible=false;
  moabelVanity.name='DF Dongsuh Moabel LPM full-mirror 4-drawer sliding vanity white 80x42x180';
  moabelVanity.userData={
    productId:'3554392',
    shortUrl:'https://ozip.me/kt6GUZ7',
    productName:'DF동서가구 모아벨 LPM 전신거울 4단 슬라이딩 서랍 수납 화장대 (화이트)',
    dimensionsCm:[80,42,180],
    leftTowerWidthCm:40,
    mirrorWidthCm:40,
    mirrorHeightCm:180,
    lowerChestHeightCm:70,
    slidingDrawerCm:[40,30,14.8],
    upperShelfCm:[40,12,70],
    price:149000,
    shipping:20000,
    gifted:false
  };

  // M1. Left Lower 3-Drawer Chest (x = -40 ~ 0cm, W40 × D42 × H70cm)
  B(moabelVanity,40,5.2,40.4,mTimber,-20,0,20.2,.18);
  B(moabelVanity,39.4,.55,.5,mDarkSlot,-20,5.0,40.5);
  for(const x of [-39.1,-.9])B(moabelVanity,1.8,64.8,41.2,mTimber,x,5.2,20.6,.2);
  B(moabelVanity,36.4,64.8,1.4,mInner,-20,5.2,.7);
  B(moabelVanity,40,1.8,42,mTimber,-20,68.2,21,.22);
  for(const y of [6.0,26.8,47.6]){
    B(moabelVanity,36.8,1.2,2.2,mDarkSlot,-20,y+19.3,40.0);
    B(moabelVanity,39.4,19.5,1.8,mTimber,-20,y,41.1,.22);
    B(moabelVanity,39.4,.45,.45,mShadow,-20,y+19.4,41.85);
  }

  // M2. Left Upper 3-Tier Open Shelf (x = -40 ~ 0cm, y = 70 ~ 140cm, z = 0 ~ 12cm, W40 × D12 × H70cm)
  for(const x of [-39.1,-.9])B(moabelVanity,1.8,70,12,mTimber,x,70,6,.2);
  B(moabelVanity,36.4,70,1.4,mInner,-20,70,.7);
  B(moabelVanity,40,1.8,12,mTimber,-20,138.2,6,.22);
  // Top 7cm front valance & 2 open shelf boards (clear heights 23cm / 21cm per official spec sheet)
  B(moabelVanity,36.4,7.0,1.6,mTimber,-20,133.0,11.2,.15);
  B(moabelVanity,36.4,1.6,11.2,mTimber,-20,83.2,5.8,.15);
  B(moabelVanity,36.4,1.6,11.2,mTimber,-20,107.8,5.8,.15);
  // Cosmetics & reed diffuser on open shelves
  CY(moabelVanity,2.1,2.1,9.5,mat.ceramic,-29,84.8,6.2,18);
  CY(moabelVanity,1.7,1.7,7.6,mat.ceramic2,-23,84.8,6.5,18);
  CY(moabelVanity,1.3,1.3,5.8,M('#8b5a2b',{roughness:.3}),-18,84.8,6.4,16);
  CY(moabelVanity,2.2,1.9,7.2,M('#e8dfd1',{roughness:.25}),-27,109.4,6.2,20);
  for(const [dx,ang] of [[-.8,-.14],[0,.04],[.8,.15]]){
    const st=B(moabelVanity,.22,13.5,.22,M('#cdb48c'),-27+dx,114,6.2);
    st.rotation.z=ang;
  }
  B(moabelVanity,3.8,5.4,2.2,M('#d8c39e',{roughness:.3}),-15,109.4,6.2,.3);

  // M3. Middle 4th Drawer: Lateral Ball-Bearing Sliding Drawer/Tabletop (W40 × D30 × H14.8cm, y = 70 ~ 84.8cm, z = 12 ~ 42cm)
  // Black steel ball-bearing slide rail connecting left tower and mirror side
  B(moabelVanity,54,1.5,.8,railSteel,-11,71.2,12.35,.08);
  B(moabelVanity,48,.9,.5,railSteel,-8,82.4,12.35,.06);
  const moabelSlideDrawer=new THREE.Group();
  moabelSlideDrawer.name='Moabel lateral sliding drawer 40x30x14.8';
  // Slid 16cm to the right in front of the full-length mirror for seated use
  moabelSlideDrawer.position.x=cm(16);
  moabelVanity.add(moabelSlideDrawer);
  B(moabelSlideDrawer,39.6,1.4,29.2,mInner,-20,70.2,26.6,.12);
  for(const x of [-39.1,-.9])B(moabelSlideDrawer,1.6,14.2,29.2,mTimber,x,70.2,26.6,.15);
  B(moabelSlideDrawer,36.4,13.8,1.4,mInner,-20,70.4,12.7,.1);
  // Front white drawer face with recessed top finger groove
  B(moabelSlideDrawer,36.8,1.1,2.0,mDarkSlot,-20,83.4,40.1);
  B(moabelSlideDrawer,39.8,14.4,1.8,mTimber,-20,70.2,41.1,.22);
  B(moabelSlideDrawer,39.8,.45,.45,mShadow,-20,84.2,41.85);
  // Right half of sliding drawer has a smooth top deck; left half exposes internal organizer grid
  B(moabelSlideDrawer,21.5,1.5,29.2,mTimber,-10.2,83.3,26.6,.18);
  B(moabelSlideDrawer,.8,10.5,27.6,mInner,-29.5,71.6,26.6,.08);
  B(moabelSlideDrawer,17.2,10.5,.8,mInner,-29.5,71.6,26.6,.08);
  CY(moabelSlideDrawer,2.2,2.2,1.6,mat.ceramic2,-10,84.8,28,20);

  // M4. Right Full-Length Arched Mirror (x = 0 ~ +40cm, y = 0 ~ 180cm, W40 × H180cm, top semicircle R=20cm)
  const archShape=new THREE.Shape();
  archShape.moveTo(cm(0),0);
  archShape.lineTo(cm(40),0);
  archShape.lineTo(cm(40),cm(160));
  archShape.absarc(cm(20),cm(160),cm(20),0,Math.PI,false);
  archShape.lineTo(cm(0),0);
  const archFrame=new THREE.Mesh(
    new THREE.ExtrudeGeometry(archShape,{depth:cm(2.2),bevelEnabled:false,curveSegments:36,steps:1}),
    mTimber
  );
  archFrame.castShadow=true;archFrame.receiveShadow=true;
  archFrame.name='Moabel full-length arched mirror frame 40x180';
  moabelVanity.add(archFrame);

  const glassShape=new THREE.Shape();
  glassShape.moveTo(cm(1.6),cm(1.6));
  glassShape.lineTo(cm(38.4),cm(1.6));
  glassShape.lineTo(cm(38.4),cm(160));
  glassShape.absarc(cm(20),cm(160),cm(18.4),0,Math.PI,false);
  glassShape.lineTo(cm(1.6),cm(1.6));
  const archGlass=new THREE.Mesh(new THREE.ShapeGeometry(glassShape,36),mat.mirror);
  archGlass.position.z=cm(2.35);
  archGlass.name='Moabel full-length arched mirror glass';
  moabelVanity.add(archGlass);

  // ============================================================================
  // E안 전용: 위니아 NEW mini 건조기 3kg 소형 · 화이트 (49 × 41 × 63.1cm)
  // - 침실 서쪽 벽(x=804cm) 모아벨 화장대(z=642~722cm) 바로 남쪽 옆(z=728~777cm, 중심 z=752.5cm) 배치
  // - 쿠팡 링크: https://link.coupang.com/a/iqQEeFQovs (6674097574 · 370,000원 · 무료배송)
  // ============================================================================
  const miniDryer=place(753,632,1,0);
  miniDryer.position.set(cm(804),0,cm(752.5));
  miniDryer.visible=false;
  miniDryer.name='Winia NEW mini dryer 3kg white 49x41x63.1';
  miniDryer.userData={
    productId:'6674097574',
    shortUrl:'https://link.coupang.com/a/iqQEeFQovs',
    productName:'위니아 미니 건조기 3kg 소형 · 화이트 (EWR-03SEW / WWR-03SEW 계열)',
    dimensionsCm:[49,41,63.1],
    price:370000,
    shipping:0
  };
  const dryerWhite=M('#f6f6f3',{roughness:.22,metalness:.04});
  const dryerSoftGray=M('#dcdfe2',{roughness:.35,metalness:.12});
  const dryerSilver=M('#94999d',{roughness:.26,metalness:.68});
  const dryerDarkRing=M('#26292c',{roughness:.24,metalness:.45});
  const dryerDoorGlass=M('#14171a',{roughness:.10,metalness:.22});
  const dryerFootMat=M('#222426',{roughness:.88});
  // 4 rubber leveling feet (H 1.5cm)
  for(const fx of [-18.5,18.5])for(const fz of [6,34]){
    CY(miniDryer,2.1,1.9,1.5,dryerFootMat,fx,0,fz,18);
  }
  // Main rounded white squircle body (W49 × H61.6 × D39.2cm, y = 1.5 ~ 63.1cm)
  B(miniDryer,49,61.6,39.2,dryerWhite,0,1.5,19.6,3.2);
  // Subtle front face contour & side recessed carry handles
  B(miniDryer,45.6,58.4,.8,dryerWhite,0,3.1,39.1,2.6);
  for(const sx of [-24.3,24.3]){
    B(miniDryer,.7,7.6,10.5,dryerSoftGray,sx,45.5,20,.25);
    B(miniDryer,.4,5.8,8.8,dryerFootMat,sx+(sx<0?-.15:.15),46.4,20,.15);
  }
  // Circular front door (centered at x=0, y=36.5cm, z=39.6~41cm, outer Ø37.5cm)
  const doorOuterRing=new THREE.Mesh(new THREE.TorusGeometry(cm(17.6),cm(1.2),18,48),dryerSilver);
  doorOuterRing.position.set(0,cm(36.5),cm(39.7));
  doorOuterRing.castShadow=true;
  miniDryer.add(doorOuterRing);
  const doorInnerRing=new THREE.Mesh(new THREE.TorusGeometry(cm(16.3),cm(.45),14,48),dryerDarkRing);
  doorInnerRing.position.set(0,cm(36.5),cm(40.25));
  miniDryer.add(doorInnerRing);
  const doorWindow=new THREE.Mesh(new THREE.CylinderGeometry(cm(16.6),cm(16.6),cm(.9),48),dryerDoorGlass);
  doorWindow.rotation.x=Math.PI/2;
  doorWindow.position.set(0,cm(36.5),cm(40.0));
  miniDryer.add(doorWindow);
  // Right-side integrated door handle indent on the circular bezel
  B(miniDryer,1.3,9.2,1.1,dryerSilver,17.2,32.0,40.1,.35);
  // Center "mini" badge & lower circular LED touch display ("0:53")
  const dryerUiCanvas=document.createElement('canvas');
  dryerUiCanvas.width=256;dryerUiCanvas.height=256;
  const dctx=dryerUiCanvas.getContext('2d');
  dctx.clearRect(0,0,256,256);
  // Top half of canvas: "mini" logo for center of door glass
  dctx.fillStyle='rgba(255,255,255,0.88)';
  dctx.font='bold 44px system-ui, -apple-system, sans-serif';
  dctx.textAlign='center';dctx.textBaseline='middle';
  dctx.fillText('mini',128,64);
  // Bottom half of canvas: circular black LED timer display ("0:53")
  dctx.fillStyle='#101316';
  dctx.beginPath();dctx.arc(128,192,54,0,Math.PI*2);dctx.fill();
  dctx.strokeStyle='#8f959a';dctx.lineWidth=4;dctx.stroke();
  dctx.fillStyle='#e9f3ff';
  dctx.font='bold 34px monospace';
  dctx.fillText('0:53',128,194);
  const dryerUiTex=new THREE.CanvasTexture(dryerUiCanvas);
  dryerUiTex.colorSpace=THREE.SRGBColorSpace;
  const miniLogoGeo=new THREE.PlaneGeometry(cm(9.5),cm(4.5));
  const uvL=miniLogoGeo.attributes.uv;
  for(let i=0;i<uvL.count;i++)uvL.setY(i,uvL.getY(i)*0.5+0.5);
  const miniLogoMesh=new THREE.Mesh(miniLogoGeo,new THREE.MeshBasicMaterial({map:dryerUiTex,transparent:true}));
  miniLogoMesh.position.set(0,cm(36.5),cm(40.52));
  miniDryer.add(miniLogoMesh);
  const ledGeo=new THREE.PlaneGeometry(cm(6.8),cm(6.8));
  const uvD=ledGeo.attributes.uv;
  for(let i=0;i<uvD.count;i++)uvD.setY(i,uvD.getY(i)*0.5);
  const ledMesh=new THREE.Mesh(ledGeo,new THREE.MeshBasicMaterial({map:dryerUiTex,transparent:true}));
  ledMesh.position.set(0,cm(9.2),cm(39.62));
  miniDryer.add(ledMesh);
  // Touch button icons flanking the circular LED display
  for(const bx of [-5.4,5.4])for(const by of [7.6,10.8]){
    CY(miniDryer,.65,.65,.2,dryerSilver,bx,by,39.5,16).rotation.x=Math.PI/2;
  }

  // 5. Stool: 리샘 스위트 원형의자 · 베이지 (Ø32 × H44cm, cylindrical beige fabric drum + 4 splayed oak legs)
  const stool=place(775,632,1,0);
  stool.position.set(cm(834),0,cm(716));
  stool.name='Resam Sweet round stool beige 32x32x44';
  stool.userData.dimensionsCm=[32,32,44];
  stool.userData.gifted=true;
  const stoolFabric=M('#c8b6ab',{roughness:.92}),stoolPiping=M('#b5a195',{roughness:.88});
  const stoolLegWood=wood('#cc9e69','#9f7342'),feltPad=M('#3a3530',{roughness:.95});
  // Tall cylindrical drum cushion (y = 21.5 ~ 43.5cm) + soft domed top + stitched piping ring
  CY(stool,15.8,15.6,21.5,stoolFabric,0,21.5,0,36);
  CY(stool,14.8,15.8,1.2,stoolFabric,0,43.0,0,36);
  const piping=new THREE.Mesh(new THREE.TorusGeometry(cm(15.65),cm(.32),10,36),stoolPiping);
  piping.rotation.x=Math.PI/2;piping.position.y=cm(41.2);stool.add(piping);
  // 4 slightly splayed solid round oak legs (y = 0 ~ 22cm)
  for(let i=0;i<4;i++){
    const ang=(i/4)*Math.PI*2+Math.PI/4;
    const legGroup=new THREE.Group();stool.add(legGroup);
    legGroup.rotation.y=ang;
    const leg=CY(legGroup,2.05,1.65,22.5,stoolLegWood,0,0,10.2,18);
    leg.rotation.x=-0.11;
    CY(legGroup,1.6,1.6,.4,feltPad,0,0,11.4,16);
  }
  function setVariantMode(v){
    const onlyE=v==='E'||v==='G'||v==='H'||v==='I';
    vanity.visible=!onlyE;
    moabelVanity.visible=onlyE;
    miniDryer.visible=onlyE;
    stool.visible=v!=='I';
    stool.position.set(cm(onlyE?838:834),0,cm(onlyE?666:716));
  }
  return {
    vanity,
    moabelVanity,
    miniDryer,
    mirror,
    stool,
    drawers,
    moabelSlideDrawer,
    setVariantMode,
    setDrawersOpen(on){
      for(const d of drawers)d.position.z=cm(on?25:0);
      moabelSlideDrawer.position.x=cm(on?24:16);
    },
    revision:'moabel-e-winia-dryer-bayer-df-sweet-stool-20261105'
  };
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
