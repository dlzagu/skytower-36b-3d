// H안: 우드 + 레이어드 조명 + 미드센추리 컬러 팝 최적 소파 라운지 배치 (2026-11-06)
// 기존 A~G안의 고정 배치(북서 사각 식탁 + 서쪽 175.5cm 키큰장 + 바닥 좌탁)를 벗어나,
// 1) 서쪽 벽 북측(상부 2구 콘센트 z=454, h=95 바로 아래): 더레인 아레초930 오크 '전원 직결 홈카페 바' + HAY PC 아쥬르 블루 램프
// 2) 북서 다이닝 존: 모서리 없는 Ø96cm 오크 원형 카페 식탁 + 3색 미드센추리 체어(세이지 그린·테라코타·머스터드) + 멀티 레이어 펜던트
// 3) 동쪽 벽 라운지 존: 바닥이 보이는 오크 프레임 + 크림 부클레 2.5인 로우 소파(152×74×73cm) + 컬러 쿠션 4종 + 타원형 원목 소파테이블 + 부클레 스툴 2개 + 노미아 모스 스트라이프 러그
// 4) 서쪽 벽 뮤직·갤러리 존(로우 호라이즌 88.5~90.3cm): 코헨 유닛2 NO.2 LP 콘솔(턴테이블·스피커·스노우맨 버터 램프) + 더레인 핀 화이트오크 3단 낮은 선반장(바이닐·헬멧·OV 웨이비 블루 램프) + 미드센추리 컬러 아트 액자 3점
// 5) 남서 창가 & 침실: 한샘 리옹우드 플로어 스탠드 + 창가 오렌지 플라워팟 펜던트 + 침실 킹 침대 오크 간접조명 헤드보드 & 컬러 베딩 포인트

import { buildUnit2Cabinet } from './unit2-cabinet.js?v=20261031';

export function buildHOptimalLayout({
  THREE,
  scene,
  cm,
  B,
  CY,
  M,
  dWood,
  dRod,
  canvasTex,
  rnd,
  mat,
  eAudio,
  eAudioSource,
  miniHelmet,
  addAccent,
  wallDecor
}) {
  const grpH = new THREE.Group();
  grpH.name = 'H optimal wood + layered lighting + color pop sofa lounge';
  grpH.visible = false;
  scene.add(grpH);

  // Palette: Warm White Oak + Mid-Century Color Accents
  const hOak = dWood('#cfa876', '#a17848');
  const hLightOak = dWood('#d8b78a', '#ae895a');
  const hWalnut = dWood('#9e6b40', '#6e4523');
  const hSteel = M('#ccd0cf', { metalness: 0.85, roughness: 0.18 });
  const hChrome = M('#dfe3e2', { metalness: 0.92, roughness: 0.12 });
  const hBrass = M('#d4af63', { metalness: 0.78, roughness: 0.25 });
  const hBlack = M('#232524', { roughness: 0.55 });

  // Colorful Mid-Century Fabrics & Finishes
  const colBoucle = M('#f2ece0', { roughness: 0.92 });
  const colBoucleSeat = M('#efe7d8', { roughness: 0.90 });
  const colTerracotta = M('#c85a38', { roughness: 0.82 });
  const colSage = M('#6c8467', { roughness: 0.84 });
  const colMustard = M('#e0ac44', { roughness: 0.80 });
  const colCobalt = M('#38678f', { roughness: 0.78 });
  const colAzure = M('#7ea3bd', { roughness: 0.32 });
  const colButter = M('#f4dc96', { roughness: 0.22 });

  function placeH(x, z, rotY = 0) {
    const g = new THREE.Group();
    g.__planPlaced = true;
    g.position.set(cm(x), 0, cm(z));
    g.rotation.y = rotY;
    grpH.add(g);
    return g;
  }

  // ============================================================================
  // 1. 서쪽 벽 북측: '전원 직결 오크 홈카페 바' (더레인 아레초930 · 93×40×75cm)
  //    위치: x=454..494, z=445..538 (중심 z=491.5) — 서쪽 벽 상부 2구 콘센트(z=454, h=95cm) 바로 아래!
  // ============================================================================
  const homeCafe = placeH(454, 491.5, Math.PI / 2);
  homeCafe.name = 'H The Lane Arrezzo 930 Oak Home-Cafe Bar 93x40x75';
  homeCafe.userData = {
    dimensions: [93, 40, 75],
    bounds: [454, 494, 445, 538],
    role: '서쪽 상부 콘센트(h=95cm) 직결 홈카페 바 & 다이닝 사이드보드'
  };

  // Arrezzo 930 body (local +z is East into the room, local x is -46.5..46.5 along West wall)
  for (const x of [-44, 44]) for (const z of [2, 38]) B(homeCafe, 3, 18, 3, hOak, x, 0, z, 0.3);
  B(homeCafe, 3, 18, 3, hOak, 0, 0, 2, 0.3);
  B(homeCafe, 87, 2.2, 2.2, hOak, 0, 6, 36, 0.2);
  B(homeCafe, 93, 1.8, 40, hOak, 0, 73.2, 20, 0.18);
  B(homeCafe, 93, 1.8, 40, hOak, 0, 17, 20, 0.15);
  for (const x of [-45.6, 45.6]) B(homeCafe, 1.8, 55.2, 40, hOak, x, 18, 20, 0.12);
  B(homeCafe, 89.4, 54.4, 1, hOak, 0, 18.8, 0.5);
  // Sliding doors: left warm oak, right subtle sage-tinted oak panel accent
  B(homeCafe, 45.2, 53.9, 1.3, hOak, -22.6, 19, 39.3, 0.15);
  B(homeCafe, 45.2, 53.9, 1.3, hLightOak, 22.6, 19, 37.8, 0.15);

  // Espresso & Pour-Over Coffee Station on top (y = 75cm)
  // Dark slate/walnut tamping mat
  B(homeCafe, 48, 0.6, 26, M('#2c2a28', { roughness: 0.75 }), -12, 75, 20, 0.2);
  // Compact Stainless Espresso Machine (x = -24, z = 17)
  B(homeCafe, 18, 24, 21, hSteel, -24, 75.6, 17, 1.2);
  B(homeCafe, 16, 2.2, 19, hChrome, -24, 99.6, 17, 0.4);
  B(homeCafe, 15, 1.2, 6, M('#1d1f1e', { roughness: 0.4 }), -24, 76.2, 26, 0.2); // drip tray
  CY(homeCafe, 2.8, 2.8, 3.2, hChrome, -24, 89, 27.5, 24); // grouphead
  dRod(homeCafe, [-24, 89.5, 29], [-18, 88.5, 34], 0.45, hWalnut); // wood portafilter handle
  // Two colorful espresso cups (Terracotta & Cobalt Blue) on top warmer & tray
  CY(homeCafe, 2.4, 2.0, 4.2, colTerracotta, -26.5, 77.4, 26, 20);
  CY(homeCafe, 2.4, 2.0, 4.2, colCobalt, -21.5, 77.4, 26, 20);
  // Gooseneck Electric Kettle (x = -4, z = 18) + Grinder + Ceramic Canisters
  B(homeCafe, 13, 1.6, 13, hBlack, -4, 75.6, 18, 0.4);
  CY(homeCafe, 5.2, 4.4, 13, M('#f4f0e6', { roughness: 0.3 }), -4, 77.2, 18, 28);
  CY(homeCafe, 4.2, 4.2, 0.8, hWalnut, -4, 90.2, 18, 24);
  dRod(homeCafe, [-4, 80, 22], [-4, 88, 27], 0.32, hSteel);
  // Coffee bean canisters (Mustard & Sage)
  CY(homeCafe, 4.2, 4.2, 11, colMustard, 9, 75.6, 14, 24);
  CY(homeCafe, 4.3, 4.3, 1.4, hOak, 9, 86.6, 14, 24);
  CY(homeCafe, 3.8, 3.8, 9, colSage, 18, 75.6, 16, 24);
  CY(homeCafe, 3.9, 3.9, 1.4, hOak, 18, 84.6, 16, 24);

  // HAY PC Portable Lamp · Azure Blue (Ø14 × H22cm) at North-East corner of Home-Cafe Bar (x = 31, z = 24)
  {
    const hay = new THREE.Group();
    hay.name = 'H HAY PC Portable Lamp Azure Blue';
    hay.position.set(cm(31), cm(75), cm(24));
    homeCafe.add(hay);
    CY(hay, 3.8, 3.8, 13.5, colAzure, 0, 0, 0, 32);
    const domeMat = new THREE.MeshStandardMaterial({
      color: '#f5f7f9',
      emissive: '#ffd599',
      emissiveIntensity: 0,
      roughness: 0.28
    });
    const domePts = [
      [3.6, 12.5], [6.8, 13.0], [7.0, 14.5], [6.2, 17.5],
      [4.5, 20.2], [3.2, 21.4], [0, 21.4]
    ].map(p => new THREE.Vector2(cm(p[0]), cm(p[1])));
    const dome = new THREE.Mesh(new THREE.LatheGeometry(domePts, 36), domeMat);
    dome.castShadow = true;
    hay.add(dome);
    CY(hay, 3.1, 3.1, 0.8, M('#283b4c', { roughness: 0.4 }), 0, 21.2, 0, 28);
    const hayLight = new THREE.PointLight('#ffcf8c', 0, 2.4, 1.8);
    hayLight.position.set(0, cm(15), 0);
    hay.add(hayLight);
    if (addAccent) addAccent(hayLight, domeMat, 0.85, 1.6);
  }

  // ============================================================================
  // 2. 북서~중앙 다이닝 존: 'Ø96cm 오크 원형 카페 테이블 + 미드센추리 3색 포인트 체어'
  //    중심: x=584, z=496 (동쪽 벽까지 158cm 오픈 볼바드 확보!)
  // ============================================================================
  const roundDining = placeH(584, 496, 0);
  roundDining.name = 'H Round Oak Cafe Dining Table 96x96x74';
  roundDining.userData = {
    dimensions: [96, 96, 74],
    bounds: [536, 632, 448, 544]
  };

  // Round oak tabletop (Ø96cm, thickness 2.6cm at y=71.4..74cm) + recessed apron ring
  CY(roundDining, 48, 47.4, 2.6, hOak, 0, 71.4, 0, 64);
  CY(roundDining, 39, 39, 3.2, hOak, 0, 68.2, 0, 48);
  // 4 splayed mid-century round tapered oak legs + cross stretcher
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2 + Math.PI / 4;
    dRod(roundDining, [Math.cos(a) * 28, 70, Math.sin(a) * 28], [Math.cos(a) * 38, 0, Math.sin(a) * 38], 1.85, hOak);
  }
  dRod(roundDining, [-25, 42, -25], [25, 42, 25], 1.2, hOak);
  dRod(roundDining, [-25, 42, 25], [25, 42, -25], 1.2, hOak);

  // Helper to build a Mid-Century Curved-Back Oak & Color-Cushion Dining Chair
  function addHChair(localX, localZ, rotY, seatMat, backAccentMat, chairName) {
    const c = new THREE.Group();
    c.name = chairName;
    c.position.set(cm(localX), 0, cm(localZ));
    c.rotation.y = rotY;
    roundDining.add(c);
    // 4 tapered oak legs
    for (const sx of [-1, 1]) {
      dRod(c, [sx * 19, 0, 18], [sx * 17, 43, 15], 1.5, hOak);
      dRod(c, [sx * 19, 0, -19], [sx * 17, 76, -18], 1.55, hOak);
      dRod(c, [sx * 17.5, 39, 15], [sx * 17.5, 39, -17], 1.2, hOak);
    }
    // Round upholstered seat pad (Ø43cm)
    CY(c, 21.5, 20.5, 2.2, hOak, 0, 41.5, 0, 36);
    CY(c, 21.0, 21.5, 3.6, seatMat, 0, 43.2, 0, 36);
    // Curved wrap-around backrest at y=65..77cm
    const backArc = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(21.5), cm(21.5), cm(12.5), 32, 1, true, Math.PI * 0.68, Math.PI * 0.64),
      backAccentMat || hOak
    );
    backArc.position.set(0, cm(70.5), cm(2));
    backArc.castShadow = true;
    c.add(backArc);
    return c;
  }

  // 3 Colorful Mid-Century Chairs around the Ø96cm Round Table
  addHChair(0, -64, 0, colSage, hOak, 'H Chair 1 (North) Oak + Sage Green');
  addHChair(0, 64, Math.PI, colTerracotta, hOak, 'H Chair 2 (South) Oak + Terracotta');
  addHChair(64, 0, -Math.PI / 2, colMustard, hOak, 'H Chair 3 (East) Oak + Butter Mustard');

  // Centerpiece on Round Dining Table: Sculptural Cobalt/Cream Vase with Billy Buttons + Wood Tray + Plates
  CY(roundDining, 12, 12, 1.2, hLightOak, -4, 74, -2, 36);
  CY(roundDining, 4.2, 3.2, 13, colCobalt, -4, 75.2, -2, 24);
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 + 0.2;
    const bx = -4 + Math.cos(a) * 4.5, bz = -2 + Math.sin(a) * 4.5, bh = 93 + (i % 2) * 3.5;
    dRod(roundDining, [-4, 86, -2], [bx, bh, bz], 0.14, colSage);
    const fl = new THREE.Mesh(new THREE.SphereGeometry(cm(1.45), 14, 12), colMustard);
    fl.position.set(cm(bx), cm(bh), cm(bz));
    roundDining.add(fl);
  }
  for (const [px, pz, cupCol] of [[0, -28, colSage], [0, 28, colTerracotta], [28, 0, colButter]]) {
    CY(roundDining, 9.5, 9.5, 0.7, mat.ceramic, px, 74, pz, 32);
    CY(roundDining, 2.8, 2.4, 5.5, cupCol, px + (px ? -4 : 11), 74.7, pz + (pz ? -4 * Math.sign(pz) : 9), 20);
  }

  // Multi-Tier Coral/Cream/Butter PH5-Style Pendant above Round Dining Table (x=584, z=496)
  {
    const pend = placeH(584, 496, 0);
    pend.name = 'H Multi-Tier Coral & Warm Cream Dining Pendant';
    const shadeCream = new THREE.MeshStandardMaterial({
      color: '#fbf3e4',
      emissive: '#ffcf8b',
      emissiveIntensity: 0,
      roughness: 0.35,
      side: THREE.DoubleSide
    });
    const shadeCoral = new THREE.MeshStandardMaterial({
      color: '#d96b45',
      emissive: '#ff945e',
      emissiveIntensity: 0,
      roughness: 0.32,
      side: THREE.DoubleSide
    });
    // Cord from ceiling (228cm) down to pendant (162cm)
    CY(pend, 5.5, 5.5, 2.2, mat.white, 0, 225.8, 0, 28);
    dRod(pend, [0, 174, 0], [0, 226, 0], 0.28, M('#e5dec9'));
    // Wooden top socket + 3 concentric layered shades
    CY(pend, 2.2, 2.8, 5.5, hOak, 0, 169.5, 0, 24);
    const tier1 = new THREE.Mesh(
      new THREE.LatheGeometry([[2.5, 169.5], [14, 166], [21, 161.5], [21.5, 160.2], [8, 163]].map(p => new THREE.Vector2(cm(p[0]), cm(p[1]))), 48),
      shadeCream
    );
    const tier2 = new THREE.Mesh(
      new THREE.LatheGeometry([[5.5, 162.5], [14.5, 159.0], [15.0, 158.0], [6.0, 159.5]].map(p => new THREE.Vector2(cm(p[0]), cm(p[1]))), 48),
      shadeCoral
    );
    const tier3 = new THREE.Mesh(
      new THREE.LatheGeometry([[0, 156.2], [5.8, 156.5], [8.2, 157.8], [4.5, 158.8]].map(p => new THREE.Vector2(cm(p[0]), cm(p[1]))), 40),
      shadeCream
    );
    tier1.castShadow = tier2.castShadow = true;
    pend.add(tier1, tier2, tier3);
    const pLight = new THREE.PointLight('#ffcb88', 0, 4.2, 1.7);
    pLight.position.set(0, cm(155), 0);
    pend.add(pLight);
    if (addAccent) {
      addAccent(pLight, shadeCream, 1.85, 1.35);
      addAccent(new THREE.PointLight('#ff9e68', 0, 1.5, 2), shadeCoral, 0, 0.95);
    }
  }

  // ============================================================================
  // 3. 동쪽 벽 메인 소파 & 컬러 라운지 존
  //    - 2.5인 오크 프레임 & 웜 부클레 로우 소파 (152×74×73cm, 중심 x=749, z=706, 서쪽 응시)
  //    - 타원형 원목 소파테이블 (90×50×32cm, 중심 x=632, z=704)
  //    - 미드센추리 부클레 원형 스툴 2개 (Ø35×H27cm, x=638,z=638 & x=636,z=768)
  // ============================================================================
  const sofa = placeH(749, 706, -Math.PI / 2);
  sofa.name = 'H East-Wall 2.5-Seat Oak-Frame & Warm Boucle Sofa 152x74x73';
  sofa.userData = {
    dimensions: [152, 74, 73],
    bounds: [712, 786, 630, 782],
    seatHeightCm: 41,
    wallpadClearanceCm: 31,
    role: '동쪽 벽 2.5인 우드프레임 부클레 소파 (월패드 하단 31cm 여유 · 침실문 간섭 0)'
  };

  // In sofa local coords (rotated -90 deg so local +z faces West into the living room, local x is -76..+76 along East wall):
  // Open Oak Frame & Splayed Legs (17cm floor clearance keeps room feeling wide!)
  for (const sx of [-71, 0, 71]) {
    for (const sz of [-31, 31]) {
      const leg = CY(sofa, 2.2, 1.5, 17.5, hOak, sx, 0, sz, 20);
      if (sx !== 0) leg.rotation.x = sz > 0 ? 0.06 : -0.06;
    }
  }
  // Solid Oak Base Plinth & Side Armrest Frames
  B(sofa, 148, 3.8, 68, hOak, 0, 17, 0, 0.6);
  for (const sx of [-72.5, 72.5]) {
    B(sofa, 4.5, 34, 4.2, hOak, sx, 20, 29, 0.5);
    B(sofa, 4.5, 36, 4.2, hOak, sx, 20, -29, 0.5);
    // Wide flat oak armrest top (can hold a coffee cup or book!)
    B(sofa, 7.2, 3.2, 68, hOak, sx, 53.5, 0, 0.9);
    // Inner upholstered bouclé arm bolster
    B(sofa, 8.5, 16, 58, colBoucle, sx + (sx < 0 ? 6.5 : -6.5), 39, 2, 3.5);
  }
  // Oak rear rail (visible from angles)
  B(sofa, 146, 4.2, 3.2, hOak, 0, 38, -33.5, 0.5);
  B(sofa, 146, 3.6, 3.0, hOak, 0, 56, -34.5, 0.5);

  // 2 Wide Plush Bouclé Seat Cushions (y = 20.8 .. 41cm)
  for (const sx of [-33.5, 33.5]) {
    B(sofa, 66.2, 8.5, 65, colBoucle, sx, 20.5, 2, 2.5);
    B(sofa, 66.5, 12.5, 64, colBoucleSeat, sx, 28.5, 3.5, 4.2);
  }
  // 2 Angled Low-Profile Bouclé Back Cushions (top at y = 73cm, well below h=104cm wallpad!)
  const sofaBack = new THREE.Group();
  sofaBack.position.set(0, cm(38), cm(-22));
  sofaBack.rotation.x = -0.18;
  sofa.add(sofaBack);
  for (const sx of [-33.5, 33.5]) {
    B(sofaBack, 65.5, 34.5, 14.5, colBoucle, sx, 0, 0, 4.5);
  }

  // 4 Colorful Mid-Century Accent Pillows on the Sofa!
  // 1) North-left: Terracotta Coral cushion
  const pTerra = B(sofa, 30, 26, 11, colTerracotta, -50, 41, -11, 4.0);
  pTerra.rotation.set(-0.22, 0.28, -0.12);
  // 2) North-inner: Butter Mustard round/square cushion
  const pMustard = B(sofa, 25, 22, 10, colMustard, -32, 40, -7, 4.0);
  pMustard.rotation.set(-0.25, 0.12, -0.05);
  // 3) Center-right: Sage Olive Green lumbar pillow
  const pSage = B(sofa, 38, 17, 10, colSage, 20, 40, -9, 3.8);
  pSage.rotation.set(-0.20, -0.08, 0.02);
  // 4) South-right: Cobalt Blue accent cushion + draped throw blanket
  const pCobalt = B(sofa, 28, 25, 11, colCobalt, 50, 41, -10, 4.0);
  pCobalt.rotation.set(-0.22, -0.26, 0.12);
  B(sofa, 24, 2.2, 42, colCobalt, 62, 40.5, 8, 1.0);
  B(sofa, 24, 18, 2.5, colCobalt, 62, 23.5, 29.2, 1.0);

  // Oval/Pebble Natural Wood Sofa Table (예스24 마전동상회 타원형 내추럴 90×50×32cm · 58,900원)
  const pebbleTable = placeH(632, 704, 0);
  pebbleTable.name = 'H Miroom Oval Wood Sofa Table 90x50x32';
  pebbleTable.userData = {
    dimensions: [50, 90, 32],
    bounds: [607, 657, 659, 749],
    price: 58900
  };
  {
    const topGeo = new THREE.CylinderGeometry(cm(25), cm(25), cm(2.2), 48);
    const topMesh = new THREE.Mesh(topGeo, hLightOak);
    topMesh.scale.set(1, 1, 90 / 50);
    topMesh.position.y = cm(30.9);
    topMesh.castShadow = topMesh.receiveShadow = true;
    pebbleTable.add(topMesh);
    for (const sx of [-15, 15]) for (const sz of [-29, 29]) {
      const leg = CY(pebbleTable, 1.8, 1.2, 30.2, hOak, sx, 0, sz, 18);
      leg.rotation.z = sx > 0 ? -0.08 : 0.08;
      leg.rotation.x = sz > 0 ? 0.08 : -0.08;
    }
    // Art book + Terracotta tray + Cobalt coffee mug on sofa table
    B(pebbleTable, 20, 1.6, 26, colSage, 0, 32.0, -14, 0.3);
    B(pebbleTable, 17, 1.2, 22, M('#f7f3ea', { roughness: 0.8 }), 1, 33.6, -13, 0.2);
    CY(pebbleTable, 10, 9.5, 1.2, colTerracotta, 1, 32.0, 16, 32);
    CY(pebbleTable, 3.0, 2.6, 6.2, colCobalt, -2, 33.2, 14, 24);
    CY(pebbleTable, 2.8, 2.8, 5.0, colButter, 4, 33.2, 19, 20);
  }

  // 2 Mid-Century Bouclé Round Low Stool Chairs (Ø35×H27cm · 개당 30,000원, 2개 60,000원)
  const stools = [];
  for (const [px, pz, rot, colTop, name] of [
    [638, 636, 0.4, colSage, 'H Boucle Round Low Stool 1 (Sage/Cream)'],
    [636, 770, 2.4, colTerracotta, 'H Boucle Round Low Stool 2 (Terracotta/Cream)']
  ]) {
    const st = placeH(px, pz, rot);
    st.name = name;
    stools.push(st);
    CY(st, 16.5, 15.8, 3.0, hOak, 0, 0, 0, 36);
    CY(st, 17.5, 17.0, 16.5, colBoucle, 0, 3.0, 0, 36);
    CY(st, 17.0, 17.5, 2.5, colTop, 0, 19.5, 0, 36);
    // C-shaped low backrest cushion (up to H=27cm)
    const cBack = new THREE.Mesh(
      new THREE.TorusGeometry(cm(14.2), cm(3.4), 14, 32, Math.PI * 0.85),
      colBoucle
    );
    cBack.rotation.x = Math.PI / 2;
    cBack.rotation.z = Math.PI * 0.08;
    cBack.position.y = cm(23.8);
    cBack.castShadow = true;
    st.add(cBack);
  }

  // ============================================================================
  // 4. 서쪽 벽 중앙·남측: '로우 호라이즌(88.5~90.3cm) LP & 컬러 조명 갤러리 월'
  //    - 중앙(z=552..662): 코헨 유닛2 NO.2 (110×40×90.3cm) + 턴테이블·스피커 + 일광전구 스노우맨22 버터 무드등
  //    - 남측(z=668..754): 더레인 핀 화이트 오크 3단 선반장 (86×30×88.5cm) + LP 컬렉션 + 헬멧 + OV 웨이비 블루 유리 무드등
  //    - 상부 벽면(h=125..185cm): 오크 프레임 컬러 아트 포스터 3점 + 갤러리 월 조명
  // ============================================================================
  const lpCab = placeH(454, 607, Math.PI / 2);
  lpCab.name = 'H COHEN UNIT2 NO.2 LP Console 110x40x90.3';
  lpCab.userData = {
    dimensions: [110, 40, 90.3],
    bounds: [454, 494, 552, 662],
    price: 390000,
    shipping: 50000
  };
  const unit2Body = buildUnit2Cabinet({ THREE, cm, B, CY, M, eOak: hOak, eSteel: hSteel });
  lpCab.add(unit2Body);

  // Audio set on top of Cohen Unit2 (y = 90.3cm)
  const srcAudio = eAudioSource || eAudio;
  if (srcAudio) {
    const audioClone = srcAudio.clone(true);
    audioClone.name = 'H TEAC TN-180BT Turntable';
    audioClone.position.set(cm(-4), cm(90.3), cm(20));
    lpCab.add(audioClone);
  }
  for (const sx of [-41, 33]) {
    B(lpCab, 14, 0.6, 20, M('#3a3935'), sx, 90.3, 22, 0.2);
    B(lpCab, 12.55, 22, 18.5, hBlack, sx, 90.9, 22, 0.8);
    for (const [dh, dr] of [[98.3, 4], [107.8, 1.5]]) {
      const drv = new THREE.Mesh(new THREE.CircleGeometry(cm(dr), 28), M('#101310'));
      drv.position.set(cm(sx), cm(dh), cm(31.3));
      lpCab.add(drv);
    }
  }
  // Acrylic Now-Playing LP Stand on Cohen Unit2
  {
    const sleeveTex = canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#c85a38';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#f4dc96';
      g.beginPath();
      g.arc(128, 136, 76, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#38678f';
      g.fillRect(36, 28, 184, 24);
    });
    const lpSleeve = B(lpCab, 31.2, 31.2, 0.6, new THREE.MeshStandardMaterial({ map: sleeveTex, roughness: 0.7 }), -26, 91, 9, 0.1);
    lpSleeve.rotation.x = -0.14;
    lpSleeve.rotation.y = 0.22;
  }

  // ILKW SNOWMAN22 V2 Table · Butter (버터 옐로우 유리 무드등 · 252,000원) on Cohen Unit2 right side (x = 46, y = 90.3, z = 25)
  {
    const sm = new THREE.Group();
    sm.name = 'H ILKW SNOWMAN22 V2 Table Butter Lamp';
    sm.position.set(cm(46), cm(90.3), cm(25));
    lpCab.add(sm);
    const butterGlass = new THREE.MeshStandardMaterial({
      color: '#f5de93',
      emissive: '#ffca6b',
      emissiveIntensity: 0,
      roughness: 0.16
    });
    CY(sm, 6.2, 6.5, 1.0, hChrome, 0, 0, 0, 32);
    CY(sm, 1.1, 1.1, 8.5, hChrome, 0, 1.0, 0, 20);
    // Double snowman glass globes
    const botGlobe = new THREE.Mesh(new THREE.SphereGeometry(cm(7.5), 32, 24), butterGlass);
    botGlobe.scale.set(1, 0.62, 1);
    botGlobe.position.y = cm(11.5);
    const topGlobe = new THREE.Mesh(new THREE.SphereGeometry(cm(6.6), 32, 24), butterGlass);
    topGlobe.scale.set(1, 0.58, 1);
    topGlobe.position.y = cm(17.8);
    botGlobe.castShadow = topGlobe.castShadow = true;
    sm.add(botGlobe, topGlobe);
    const smLight = new THREE.PointLight('#ffd27d', 0, 2.8, 1.8);
    smLight.position.set(0, cm(16), cm(3));
    sm.add(smLight);
    if (addAccent) addAccent(smLight, butterGlass, 1.1, 1.6);
  }

  // 더레인 핀 화이트 오크 3단 책장 선반장 1유닛 (86×30×88.5cm · 263,000원 · 무료배송) at z=668..754 (center z=711)
  const pinShelf = placeH(454, 711, Math.PI / 2);
  pinShelf.name = 'H The Lane Pin White Oak 3-Tier Low Shelf 86x30x88.5';
  pinShelf.userData = {
    dimensions: [86, 30, 88.5],
    bounds: [454, 484, 668, 754],
    price: 263000,
    shipping: 0
  };
  // 4 round white-oak vertical posts + 3 thick beveled white-oak shelves (h = 14, 50, 86.5cm)
  for (const sx of [-41, 41]) {
    for (const sz of [2.5, 27.5]) {
      CY(pinShelf, 1.8, 1.8, 88.5, hLightOak, sx, 0, sz, 24);
    }
    for (const sh of [12.5, 48.5, 84.5]) {
      B(pinShelf, 3.2, 2.2, 26, hLightOak, sx, sh, 15, 0.3);
    }
  }
  for (const sh of [14, 50, 86.5]) {
    B(pinShelf, 84, 2.0, 29, hLightOak, 0, sh, 15, 0.35);
  }
  // Bottom tier (y=16cm): Rattan basket + stacked art magazines
  B(pinShelf, 32, 18, 23, mat.rattan, -18, 16, 15, 1.2);
  for (let i = 0; i < 4; i++) {
    B(pinShelf, 24 - i, 2.6, 19, [colTerracotta, colBoucle, colCobalt, colMustard][i], 18, 16 + i * 2.6, 15, 0.2);
  }
  // Middle tier (y=52cm): Colorful upright Vinyl LP records + bookends + ceramic object
  B(pinShelf, 0.5, 26, 22, hSteel, -32, 52, 15, 0.1);
  const vinylColors = ['#c85a38', '#38678f', '#e0ac44', '#6c8467', '#ebe1cf', '#b5634b', '#4d6f58', '#d9a441', '#2d3a45', '#e6d7be'];
  for (let i = 0; i < 10; i++) {
    B(pinShelf, 0.9, 31.2, 30.5, M(vinylColors[i], { roughness: 0.75 }), -30 + i * 2.2, 52, 15.2, 0.05);
  }
  B(pinShelf, 0.5, 26, 22, hSteel, -7, 52, 15, 0.1);
  // Top tier (y=88.5cm): Owned F1 Hamilton Mini Helmet + OV WAVY S Sky-Blue Glass Lamp (150,000원) + Greenery
  if (miniHelmet) miniHelmet(pinShelf, -20, 88.5, 15);
  {
    const ov = new THREE.Group();
    ov.name = 'H OV WAVY S Sky-Blue Glass Table Lamp';
    ov.position.set(cm(18), cm(88.5), cm(15));
    pinShelf.add(ov);
    const skyGlass = new THREE.MeshStandardMaterial({
      color: '#a9d2e6',
      emissive: '#89c8ff',
      emissiveIntensity: 0,
      roughness: 0.14
    });
    CY(ov, 7.2, 7.2, 0.8, hChrome, 0, 0, 0, 32);
    CY(ov, 0.85, 0.85, 11.5, hChrome, 0, 0.8, 0, 20);
    // 3 wavy glass tiers
    for (const [ty, tr] of [[13.2, 6.8], [16.8, 6.2], [20.0, 5.2]]) {
      const wave = new THREE.Mesh(new THREE.TorusGeometry(cm(tr * 0.62), cm(tr * 0.38), 16, 32), skyGlass);
      wave.rotation.x = Math.PI / 2;
      wave.position.y = cm(ty);
      wave.castShadow = true;
      ov.add(wave);
    }
    CY(ov, 2.2, 2.2, 1.0, hChrome, 0, 22.2, 0, 24);
    const ovLight = new THREE.PointLight('#ffdca8', 0, 2.2, 1.8);
    ovLight.position.set(0, cm(16), cm(2));
    ov.add(ovLight);
    if (addAccent) addAccent(ovLight, skyGlass, 0.75, 1.35);
  }

  // 서쪽 벽 상부: 미드센추리 컬러 갤러리 아트 액자 3점 (h = 132 .. 184cm)
  const gallerySpecs = [
    {
      z: 500, w: 42, h: 52, y: 132,
      draw: (g, w, h) => {
        // Bauhaus Cobalt Blue & Butter Yellow
        g.fillStyle = '#f6f0e2'; g.fillRect(0, 0, w, h);
        g.fillStyle = '#38678f'; g.beginPath(); g.arc(w * 0.5, h * 0.42, w * 0.32, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#e0ac44'; g.fillRect(w * 0.18, h * 0.62, w * 0.64, h * 0.22);
        g.fillStyle = '#232524'; g.fillRect(w * 0.18, h * 0.54, w * 0.64, h * 0.04);
      }
    },
    {
      z: 607, w: 54, h: 68, y: 126,
      draw: (g, w, h) => {
        // Matisse Coral Terracotta & Sage Botanical Cutout
        g.fillStyle = '#f4ece0'; g.fillRect(0, 0, w, h);
        g.fillStyle = '#c85a38'; g.fillRect(28, 28, w - 56, h * 0.52);
        g.fillStyle = '#6c8467'; g.beginPath(); g.arc(w * 0.5, h * 0.65, w * 0.28, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#f4dc96'; g.beginPath(); g.arc(w * 0.38, h * 0.34, w * 0.14, 0, Math.PI * 2); g.fill();
      }
    },
    {
      z: 711, w: 42, h: 52, y: 132,
      draw: (g, w, h) => {
        // Warm Vinyl & Abstract Arch
        g.fillStyle = '#efe7d6'; g.fillRect(0, 0, w, h);
        g.fillStyle = '#6c8467'; g.beginPath(); g.arc(w * 0.5, h * 0.55, w * 0.30, Math.PI, 0); g.lineTo(w * 0.8, h * 0.85); g.lineTo(w * 0.2, h * 0.85); g.fill();
        g.fillStyle = '#c85a38'; g.beginPath(); g.arc(w * 0.5, h * 0.52, w * 0.12, 0, Math.PI * 2); g.fill();
      }
    }
  ];
  for (const sp of gallerySpecs) {
    const frame = placeH(451.2, sp.z, Math.PI / 2);
    frame.name = 'H West-Wall Color Gallery Art Frame';
    frame.userData.wallMounted = true;
    B(frame, sp.w, sp.h, 2.2, hOak, 0, sp.y, 0, 0.2);
    const tex = canvasTex(256, 320, sp.draw);
    const artMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(sp.w - 4.5), cm(sp.h - 4.5)),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75 })
    );
    artMesh.position.set(0, cm(sp.y + sp.h / 2), cm(1.2));
    frame.add(artMesh);
    if (wallDecor) wallDecor.push(frame);
  }

  // ============================================================================
  // 5. 남서쪽 통창 코너: '한샘 리옹우드 플로어 스탠드 (내추럴 · H154cm · 144,900원)'
  //    위치: x=484, z=776
  // ============================================================================
  {
    const lyon = placeH(484, 776, 0);
    lyon.name = 'H Hanssem Lyon Wood Floor Lamp Natural 42x42x154';
    lyon.userData = {
      dimensions: [42, 42, 154],
      price: 144900,
      shipping: 0
    };
    // Round wood base (Ø29cm) + natural wood column + silver top neck + ivory fabric shade (Ø42 × H26.5cm)
    CY(lyon, 14.5, 14.5, 2.6, hOak, 0, 0, 0, 36);
    CY(lyon, 1.9, 2.1, 112, hOak, 0, 2.6, 0, 24);
    CY(lyon, 1.1, 1.1, 16, hSteel, 0, 114.6, 0, 20);
    const lyonShadeMat = new THREE.MeshStandardMaterial({
      color: '#f8f1e3',
      emissive: '#ffcf88',
      emissiveIntensity: 0,
      roughness: 0.55,
      side: THREE.DoubleSide
    });
    const lyonShade = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(16.5), cm(21.0), cm(26.5), 40, 1, true),
      lyonShadeMat
    );
    lyonShade.position.y = cm(140.5);
    lyonShade.castShadow = true;
    lyon.add(lyonShade);
    const lyonLight = new THREE.PointLight('#ffcf8b', 0, 3.8, 1.7);
    lyonLight.position.set(0, cm(136), 0);
    lyon.add(lyonLight);
    if (addAccent) addAccent(lyonLight, lyonShadeMat, 1.65, 1.3);
  }

  // ============================================================================
  // 6. 침실 킹 침대: '오크 원목 간접조명 헤드보드 패널 + 미드센추리 컬러 베딩 포인트'
  //    위치: 동쪽 벽 x=1138, z=690
  // ============================================================================
  {
    const bedHead = placeH(1138.5, 690, -Math.PI / 2);
    bedHead.name = 'H Bedroom Oak Indirect-LED Headboard & Color Bedding Pillows';
    B(bedHead, 164, 72, 2.6, hOak, 0, 0, 0, 0.3);
    B(bedHead, 164, 3.2, 5.5, hLightOak, 0, 70, 1.5, 0.2);
    const stripMat = new THREE.MeshStandardMaterial({
      color: '#fff4dc',
      emissive: '#ffcb7d',
      emissiveIntensity: 0.4
    });
    B(bedHead, 158, 1.2, 1.2, stripMat, 0, 72.5, 0.8, 0.1);
    const bedGlow = new THREE.PointLight('#ffcb82', 0, 3.2, 1.8);
    bedGlow.position.set(0, cm(82), cm(15));
    bedHead.add(bedGlow);
    if (addAccent) addAccent(bedGlow, stripMat, 1.3, 2.2);
    // Colorful accent pillows & runner on King bed
    B(bedHead, 42, 18, 12, colTerracotta, -36, 26, 26, 3.2).rotation.x = -0.25;
    B(bedHead, 42, 18, 12, colSage, 36, 26, 26, 3.2).rotation.x = -0.25;
    B(bedHead, 32, 14, 10, colMustard, 0, 25, 34, 3.0).rotation.x = -0.18;
  }

  // Custom Moss Stripe Rug Texture (노미아 t2 - 모스 러그 · 세이지 그린/테라코타 브라운/스카이 블루 스트라이프)
  const mossWeave = canvasTex(768, 1024, (g, w, h) => {
    g.fillStyle = '#ddd3be';
    g.fillRect(0, 0, w, h);
    const stripeColors = ['#698067', '#b56545', '#7697ad', '#c8bba2', '#526853', '#8c5c42', '#7d9db2'];
    for (let y = 24; y < h - 24; y += 18) {
      const idx = Math.floor(y / 18) % stripeColors.length;
      g.fillStyle = stripeColors[idx];
      g.globalAlpha = idx % 2 === 0 ? 0.55 : 0.38;
      g.fillRect(20, y, w - 40, idx % 3 === 0 ? 7 : 4);
    }
    g.globalAlpha = 1;
    g.strokeStyle = '#bfb198';
    g.lineWidth = 16;
    g.strokeRect(10, 10, w - 20, h - 20);
    const r = rnd(311);
    for (let i = 0; i < 40000; i++) {
      g.fillStyle = i % 2 ? 'rgba(255,250,238,0.12)' : 'rgba(110,95,75,0.08)';
      g.fillRect(r() * w, r() * h, 1.4, 1.4);
    }
  }, [1, 1]);

  return {
    group: grpH,
    homeCafe,
    roundDining,
    sofa,
    pebbleTable,
    coffeeTable: pebbleTable,
    stools,
    lpCab,
    pinShelf,
    mossWeave
  };
}
