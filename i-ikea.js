// I안: E안 기준(서쪽 선반·아레초 LP장·침실 모아벨 화장대·미니건조기 유지) + 이케아 매장 픽(Google Drive) 풀세트 대체안 (2026-11-08)
// - 서쪽 벽 선반(무인양품 SUS 떡갈나무 와이드 L + 2단 서랍) 및 아레초930 오크 LP장은 E안 그대로 유지하되, 원형 식탁 적용으로 여유가 생긴 북쪽(턴테이블 옆쪽)으로 34cm씩 이동 배치
// - 식탁·의자 대체: STOCKHOLM 2025 스톡홀름 2025 참나무무늬목 원형 테이블(Ø115×75cm · 649,000원 · s79606586 / 505.964.65) + HÖGVED 회그베드 의자 그린 2개(40×51×86cm · 129,000원×2 = 258,000원 · 406.070.11) [톤스타드 150×80 사각식탁 전환 지원]
// - 의자·쇼파·커피테이블·러그 대체: POÄNG 포엥 호두나무/다크옐로 코듀로이 암체어(149,900원) + LÅNESPELARE 컵홀더(11,900원) + POÄNG 자작나무/보슬뢰브 레드 로우백암체어(104,900원) + HOLMERUD 홀메루드 커피테이블(90×55×45cm · 64,900원) + STOENSE 스토엔세 페일그린 단모러그(133×195cm · 79,900원)
// - 조명 대체:
//   1) 무지 선반 바로 옆: ÖKENSAND 외켄산드 플로어스탠드 · 너도밤나무/화이트(154cm · 99,900원 · 405.415.34)
//   2) 동쪽 포엥 의자 2개 사이: IKEA PS 2026 상향식플로어스탠드 · 다크레드(182cm · 149,000원 · 106.085.16)
//   3) 커피테이블 선반: MARKFROST 마르크프로스트 대리석 탁상등(35,000원 · 205.415.25)
// - 남서 창가 식물·트리 대체: VINTERFINT 빈테르핀트 인조 크리스마스트리(150cm · 35,000원) + STRÅLA 스트롤라 160구 LED 체인조명(29,900원) + RISATORP 리사토르프 레드 바구니(7,900원) + FEJKA 페이카 스트렐리치아 극락조화 인조식물(23cm 화분 / H165cm · 89,900원)
// - 욕실 거울수납장 밑 세트 부착: HUMLESJÖN 훔레셴 흡착식거울 오렌지(9,900원 · 006.289.73) + HUMLESJÖN 훔레셴 흡착식후크 2개입 오렌지/터콰이즈(4,900원 · 306.009.63) 세트로 화장실 장 밑 타일벽(h=121cm)에 부착

export function buildIIkeaLayout({
  THREE,
  scene,
  cm,
  B,
  CY,
  M,
  dWood,
  dRod,
  dPlace,
  canvasTex,
  rnd,
  mat,
  addAccent
}) {
  const grpI = new THREE.Group();
  grpI.name = 'I IKEA Drive Store Picks on E Baseline (Shelf Retained)';
  grpI.visible = false;
  scene.add(grpI);

  // Materials matching the photographed IKEA products
  const tonstadOak = dWood('#c9a270', '#9a7344');
  const stockholmOak = dWood('#cfb083', '#a28052');
  const voxlovBamboo = dWood('#dec08f', '#b5925d');
  const hogvedGreen = dWood('#1f7a4c', '#155936');
  const poangWalnut = dWood('#8a5a36', '#5c381d');
  const poangBirch = dWood('#e2c79c', '#ba9a6b');
  const beechWood = dWood('#d8b485', '#aa8455');
  const holmerudOak = dWood('#c79e6b', '#956d3f');

  const yellowCorduroy = M('#d49b27', { roughness: 0.88 });
  const redCushion = M('#b84632', { roughness: 0.86 });
  const blackMetal = M('#222426', { metalness: 0.55, roughness: 0.38 });
  const chromeMetal = M('#d8dddf', { metalness: 0.88, roughness: 0.16 });
  const psDarkRedMat = M('#7d201e', { roughness: 0.28, metalness: 0.24 });
  const risatorpRed = M('#c43428', { metalness: 0.25, roughness: 0.45 });
  const humlesjonOrange = M('#d96528', { roughness: 0.32, metalness: 0.05 });
  const humlesjonMint = M('#6bb8b4', { roughness: 0.34, metalness: 0.05 });
  const glassClear = new THREE.MeshPhysicalMaterial({
    color: '#e8f1f0',
    roughness: 0.08,
    metalness: 0,
    transparent: true,
    opacity: 0.38,
    side: THREE.DoubleSide,
    depthWrite: false
  });

  function placeI(x, z, rotY = 0) {
    const g = new THREE.Group();
    g.__planPlaced = true;
    g.position.set(cm(x), 0, cm(z));
    g.rotation.y = rotY;
    grpI.add(g);
    return g;
  }

  // ============================================================================
  // 1. 북서 다이닝 존 (기본: STOCKHOLM 2025 원형 식탁 Ø115×75cm · s79606586 / 505.964.65 · 649,000원)
  //    + HÖGVED 회그베드 의자 그린 2개 (40×51×86cm · 시트높이 45cm · 406.070.11 · 129,000원×2)
  //    + (전환 옵션) TONSTAD 톤스타드 참나무무늬목 식탁 (150×80×75cm · 805.940.64 · 399,000원)
  // ============================================================================
  const diningTonstad = placeI(529, 492, 0);
  diningTonstad.name = 'I IKEA TONSTAD Oak Table 150x80x75 + 2 HOGVED Green Chairs';
  diningTonstad.visible = false;
  diningTonstad.userData = {
    dimensions: [150, 80, 75],
    bounds: [454, 604, 452, 532],
    productId: '805.940.64',
    price: 399000
  };

  // TONSTAD tabletop (150×80cm, y=72.2..75cm) & recessed apron rails & 4 corner square legs
  B(diningTonstad, 150, 2.8, 80, tonstadOak, 0, 72.2, 0, 0.35);
  B(diningTonstad, 136, 4.8, 2.2, tonstadOak, 0, 67.6, -35.5, 0.15);
  B(diningTonstad, 136, 4.8, 2.2, tonstadOak, 0, 67.6, 35.5, 0.15);
  B(diningTonstad, 2.2, 4.8, 66, tonstadOak, -70.5, 67.6, 0, 0.15);
  B(diningTonstad, 2.2, 4.8, 66, tonstadOak, 70.5, 67.6, 0, 0.15);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      B(diningTonstad, 6.4, 72.4, 6.4, tonstadOak, sx * 71.2, 0, sz * 36.2, 0.4);
    }
  }

  // Helper: HÖGVED 회그베드 의자, 그린 (폭 40 × 깊이 51 × 높이 86cm, 시트폭 40 × 시트깊이 36 × 시트높이 45cm · 406.070.11)
  // 1970년대 클래식 자작나무 스핀들(살 7개) 등받이 + 그린 스테인/래커 마감 + H자 하부 스트레처 다리
  function addHogvedChair(parent, lx, lz, rotY, name) {
    const c = new THREE.Group();
    c.name = name;
    c.position.set(cm(lx), 0, cm(lz));
    c.rotation.y = rotY;
    c.userData = {
      productId: '406.070.11',
      productName: 'IKEA HÖGVED 회그베드 의자 · 그린',
      dimensions: [40, 51, 86],
      seatHeight: 45,
      price: 129000
    };
    parent.add(c);

    // 4 splayed tapered round birch legs in green lacquer + H-stretcher rails
    for (const sx of [-1, 1]) {
      dRod(c, [sx * 18.5, 0, 16.5], [sx * 15.5, 43.2, 13.5], 1.35, hogvedGreen); // front legs
      dRod(c, [sx * 19.0, 0, -19.5], [sx * 15.5, 43.2, -14.5], 1.4, hogvedGreen); // rear legs
      // Side stretcher bar (front to back leg at y=16.5cm)
      dRod(c, [sx * 17.3, 16.5, 15.2], [sx * 17.6, 16.5, -17.5], 0.9, hogvedGreen);
      // Under-seat apron rails
      dRod(c, [sx * 15.2, 41.2, 13.0], [sx * 15.2, 41.2, -14.0], 1.0, hogvedGreen);
    }
    // Center cross stretcher bar connecting left & right side stretchers
    dRod(c, [-17.4, 16.5, -1.0], [17.4, 16.5, -1.0], 0.9, hogvedGreen);
    dRod(c, [-15.2, 41.2, 13.0], [15.2, 41.2, 13.0], 1.0, hogvedGreen);

    // Sculpted D-shaped birch veneer seat in green (W40 × D36cm at y=43.0..45.2cm)
    B(c, 40, 2.2, 36, hogvedGreen, 0, 43.0, 0, 1.0);

    // 7 classic vertical/fanned spindle rods rising from rear seat curve (y=45cm) to curved top rail (y=84cm)
    const spindleCount = 7;
    for (let i = 0; i < spindleCount; i++) {
      const t = (i / (spindleCount - 1)) * 2 - 1; // -1 .. +1
      const ang = t * 0.62;
      const bx = Math.sin(ang) * 16.5;
      const bz = -15.0 + (1 - Math.cos(ang)) * 7.5;
      const tx = Math.sin(ang) * 19.2;
      const tz = -21.5 + (1 - Math.cos(ang)) * 8.5;
      dRod(c, [bx, 44.8, bz], [tx, 83.8, tz], 0.62, hogvedGreen);
    }

    // Curved wrap-around top backrest rail at y=83.0..86.0cm matching rear spindle curve (-z)
    const railPts = [];
    for (let k = 0; k <= 16; k++) {
      const u = (k / 16) * 2 - 1; // -1 .. +1
      const ang = u * 0.68;
      const rx = Math.sin(ang) * 19.2;
      const rz = -21.5 + (1 - Math.cos(ang)) * 8.5;
      railPts.push(new THREE.Vector3(cm(rx), cm(84.4), cm(rz)));
    }
    const railCurve = new THREE.CatmullRomCurve3(railPts);
    const topRail = new THREE.Mesh(
      new THREE.TubeGeometry(railCurve, 28, cm(1.55), 12, false),
      hogvedGreen
    );
    topRail.castShadow = true;
    c.add(topRail);
    for (const endPt of [railPts[0], railPts[railPts.length - 1]]) {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(cm(1.55), 10, 10), hogvedGreen);
      cap.position.copy(endPt);
      c.add(cap);
    }
    return c;
  }

  addHogvedChair(diningTonstad, 12, -52, 0, 'I HOGVED Green Chair 1 (North)');
  addHogvedChair(diningTonstad, 12, 52, Math.PI, 'I HOGVED Green Chair 2 (South)');

  // Table accessories from Drive folder:
  // - FRUKTSKAL 프룩트스칼 대나무 서빙트레이 (35×23cm · 405.879.04)
  // - UPPHETTA 우프헤타 프렌치프레스 (1L · 802.413.88)
  // - KORKEN 코르켄 유리병 (1L · 102.135.46)
  // - OSTBIT 오스트비트 대나무 접시꽂이 (903.223.60)
  // - VINTERSAGA 빈테르사가 미니 진저브레드 하우스 (606.038.61)
  function addTableDecor(parent, yTop) {
    // FRUKTSKAL bamboo tray (35×23cm) with black wire handles
    B(parent, 35, 1.6, 23, voxlovBamboo, -18, yTop, -4, 0.5);
    dRod(parent, [-34.5, yTop + 1.6, -9], [-34.5, yTop + 4.2, 1], 0.35, blackMetal);
    dRod(parent, [-1.5, yTop + 1.6, -9], [-1.5, yTop + 4.2, 1], 0.35, blackMetal);
    // UPPHETTA French Press on tray
    CY(parent, 5.2, 5.2, 16, glassClear, -24, yTop + 1.6, -5, 24);
    CY(parent, 5.4, 5.4, 2.5, blackMetal, -24, yTop + 1.6, -5, 24);
    CY(parent, 5.5, 5.3, 1.8, chromeMetal, -24, yTop + 17.6, -5, 24);
    CY(parent, 0.8, 0.8, 2.2, chromeMetal, -24, yTop + 19.4, -5, 16);
    // KORKEN 1L glass bottle
    CY(parent, 4.4, 4.4, 15, glassClear, -10, yTop + 1.6, -4, 24);
    CY(parent, 4.4, 1.8, 6.5, glassClear, -10, yTop + 16.6, -4, 24);
    CY(parent, 1.9, 1.9, 1.2, mat.ceramic, -10, yTop + 23.1, -4, 16);
    // OSTBIT bamboo plate rack (27×12×8.5cm)
    B(parent, 24, 1.2, 1.4, voxlovBamboo, 18, yTop, -14, 0.2);
    B(parent, 24, 1.2, 1.4, voxlovBamboo, 18, yTop, -4, 0.2);
    for (let i = 0; i < 6; i++) {
      const px = 8 + i * 4;
      dRod(parent, [px, yTop + 1, -14], [px, yTop + 8.5, -14], 0.3, voxlovBamboo);
      dRod(parent, [px, yTop + 1, -4], [px, yTop + 8.5, -4], 0.3, voxlovBamboo);
    }
    // VINTERSAGA mini gingerbread house display on a small plate
    CY(parent, 8, 8, 0.6, mat.ceramic, 20, yTop, 14, 28);
    B(parent, 7.5, 6.5, 6.5, M('#8c4f2b', { roughness: 0.85 }), 20, yTop + 0.6, 14, 0.3);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(cm(6.2), cm(5.2), 4), M('#7a4222', { roughness: 0.8 }));
    roof.rotation.y = Math.PI / 4;
    roof.position.set(cm(20), cm(yTop + 9.5), cm(14));
    parent.add(roof);
  }
  addTableDecor(diningTonstad, 75);

  // Primary Dining Table (User selected): STOCKHOLM 2025 Round Dining Table (Ø115×75cm · s79606586 / 505.964.65 · 649,000원)
  // Placed at (568, 492) so West wall north of turntable cabinet is open, allowing LP cabinet & MUJI shelf to shift 34cm North!
  const diningStockholm = placeI(568, 492, 0);
  diningStockholm.name = 'I IKEA STOCKHOLM 2025 Round Oak Table 115x115x75 s79606586';
  diningStockholm.visible = true;
  diningStockholm.userData = {
    dimensions: [115, 115, 75],
    bounds: [510.5, 625.5, 434.5, 549.5],
    productId: 's79606586',
    articleId: '505.964.65',
    price: 649000
  };
  // Sculpted Stockholm 2025 oak veneer circular top (Ø115cm, y=72.2..75cm) + recessed under-frame + 4 architectural cylindrical oak legs
  CY(diningStockholm, 57.5, 57.2, 2.8, stockholmOak, 0, 72.2, 0, 64);
  CY(diningStockholm, 44.0, 44.0, 3.2, stockholmOak, 0, 69.0, 0, 48);
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2 + Math.PI / 4;
    const lx = Math.cos(a) * 34, lz = Math.sin(a) * 34;
    CY(diningStockholm, 3.8, 3.4, 72.2, stockholmOak, lx, 0, lz, 24);
  }
  addHogvedChair(diningStockholm, 0, -64, 0, 'I STOCKHOLM HOGVED Green Chair 1 (North)');
  addHogvedChair(diningStockholm, 0, 64, Math.PI, 'I STOCKHOLM HOGVED Green Chair 2 (South)');
  addTableDecor(diningStockholm, 75);

  // ============================================================================
  // 2. 동쪽 벽 & 거실 라운지:
  //    - POÄNG 포엥 암체어 (호두나무무늬 / 셸링에 다크옐로 코듀로이 · 68×82×100cm · s89625283)
  //      + LÅNESPELARE 로네스펠라레 원목 컵홀더 (105.715.27)
  //    - POÄNG 포엥 로우백암체어 (자작나무무늬 / 보슬뢰브 레드 · 68×83×71cm · s49551590)
  //    - 의자 사이 조명: IKEA PS 2026 상향식플로어스탠드 · 다크레드 (182cm · 149,000원 · 106.085.16)
  //    - HOLMERUD 홀메루드 커피테이블 (90×55×45cm · 참나무무늬 · 205.300.94)
  //    - STOENSE 스토엔세 단모러그 페일그린 (133×195cm · 806.291.48)
  // ============================================================================
  const loungeGroup = new THREE.Group();
  loungeGroup.name = 'I POANG Armchairs + HOLMERUD Coffee Table';
  grpI.add(loungeGroup);

  function buildPoangChair({ x, z, rotY, frameMat, cushionMat, highBack, withCupHolder, name }) {
    const ch = placeI(x, z, rotY);
    ch.name = name;
    loungeGroup.add(ch);
    // Bentwood cantilever side frames (width 68cm => sx = -31, +31)
    for (const sx of [-31, 31]) {
      // Base runner on floor (z = -34..30)
      B(ch, 3.6, 2.2, 64, frameMat, sx, 0, -2, 0.4);
      // Front angled cantilever leg rising to armrest
      dRod(ch, [sx, 2, 28], [sx, 53, -12], 1.7, frameMat);
      // Armrest top bar (y = 53, z = -26..22)
      B(ch, 4.2, 2.2, 48, frameMat, sx, 52.5, -2, 0.5);
      // Front armrest curve down to runner
      dRod(ch, [sx, 53, 21], [sx, 26, 28], 1.6, frameMat);
    }
    // Cross rails under seat & back
    B(ch, 58, 2.2, 3.5, frameMat, 0, 29, 18, 0.3);
    B(ch, 58, 2.2, 3.5, frameMat, 0, 23, -16, 0.3);
    // Seat cushion (56×54×11cm, tilted slightly back)
    const seat = new THREE.Group();
    seat.position.set(0, cm(27), cm(2));
    seat.rotation.x = -0.16;
    ch.add(seat);
    B(seat, 56, 10.5, 52, cushionMat, 0, 0, 0, 2.4);
    // Corduroy / quilted tuft lines on seat
    B(seat, 48, 0.6, 1.2, frameMat, 0, 10.3, -6, 0.2);
    B(seat, 48, 0.6, 1.2, frameMat, 0, 10.3, 10, 0.2);

    // Backrest frame & cushion (High-back H100cm vs Low-back H71cm)
    const backH = highBack ? 68 : 42;
    const back = new THREE.Group();
    back.position.set(0, cm(30), cm(-20));
    back.rotation.x = -0.34;
    ch.add(back);
    for (const sx of [-28, 28]) {
      B(back, 3.2, backH, 2.4, frameMat, sx, 0, 0, 0.4);
    }
    B(back, 56, 2.8, 2.4, frameMat, 0, backH - 2, 0, 0.4);
    B(back, 55, backH - 4, 10.5, cushionMat, 0, 2, 4.5, 2.6);
    if (highBack) {
      // Headrest bolster pillow on high-back POÄNG
      B(back, 52, 16, 12.5, cushionMat, 0, backH - 17, 5.8, 3.0);
    }

    // LÅNESPELARE wooden mug/cup holder clamped to right armrest (105.715.27)
    if (withCupHolder) {
      const holder = new THREE.Group();
      holder.name = 'I LANESPELARE Cup Holder 105.715.27';
      holder.position.set(cm(-36.5), cm(51), cm(14));
      ch.add(holder);
      CY(holder, 5.2, 5.2, 9.5, beechWood, 0, 0, 0, 28);
      CY(holder, 4.3, 4.3, 8.8, M('#3d2c1e', { roughness: 0.8 }), 0, 1.0, 0, 24);
      B(holder, 4.5, 3.5, 3.2, blackMetal, 5.2, 2.0, 0, 0.3);
      // Stainless/ceramic mug sitting inside the cup holder
      CY(holder, 3.8, 3.6, 9.0, mat.ceramic, 0, 3.5, 0, 20);
    }
    return ch;
  }

  // North POÄNG: High-back Walnut + Dark Yellow Corduroy + LÅNESPELARE Cup Holder
  const poangYellow = buildPoangChair({
    x: 742,
    z: 638,
    rotY: (-75 * Math.PI) / 180,
    frameMat: poangWalnut,
    cushionMat: yellowCorduroy,
    highBack: true,
    withCupHolder: true,
    name: 'I POANG Armchair Walnut + Dark Yellow Corduroy s89625283'
  });

  // South POÄNG: Low-back Birch + Red Cushion (under wallpad h=104cm)
  const poangRed = buildPoangChair({
    x: 742,
    z: 748,
    rotY: (-105 * Math.PI) / 180,
    frameMat: poangBirch,
    cushionMat: redCushion,
    highBack: false,
    withCupHolder: false,
    name: 'I POANG Low-Back Armchair Birch + Red s49551590'
  });

  // 동쪽 포엥 의자 2개 사이 조명 (사용자 지정: "이거가 의자사이에 들어가야돼 그리고 이색이야"):
  // IKEA PS 2026 상향식플로어스탠드 · 다크레드 (높이 182cm · 받침 Ø28cm · 갓 Ø16cm · 149,000원 · 106.085.16)
  const psDarkRedInnerMat = new THREE.MeshStandardMaterial({
    color: '#fff1d0',
    emissive: '#ffc966',
    emissiveIntensity: 0.38,
    roughness: 0.25,
    side: THREE.DoubleSide
  });
  const sambordLamp = placeI(756, 693, 0);
  sambordLamp.name = 'I IKEA PS 2026 Floor Uplighter Dark Red 182cm 106.085.16';
  sambordLamp.userData = {
    productId: '106.085.16',
    productName: 'IKEA PS 2026 이케아 피에스 2026 상향식플로어스탠드 · 다크레드 (182cm)',
    dimensions: [28, 28, 182],
    price: 149000
  };
  // Flat circular Dark Red steel base (Ø28cm => R=14cm) + central collar
  CY(sambordLamp, 14.0, 14.0, 1.4, psDarkRedMat, 0, 0, 0, 40);
  CY(sambordLamp, 2.4, 2.8, 3.5, psDarkRedMat, 0, 1.4, 0, 24);
  // Tall tubular Dark Red steel pole rising to adjustable knuckle joint at y=156.5cm
  CY(sambordLamp, 1.25, 1.25, 152, psDarkRedMat, 0, 4.5, 0, 24);
  // Articulated tilt joint at y=156.5..162cm
  CY(sambordLamp, 1.6, 1.6, 5.5, blackMetal, 0, 156.5, 0, 20);
  // Sculpted IKEA PS 2026 conical/bell Dark Red steel uplighter head (Ø16cm => R=8cm, y=162..182cm, tilted slightly toward living room)
  const psRedHead = new THREE.Group();
  psRedHead.position.set(0, cm(161.5), 0);
  psRedHead.rotation.z = 0.18;
  psRedHead.rotation.x = 0.06;
  sambordLamp.add(psRedHead);
  CY(psRedHead, 3.2, 1.8, 6.5, psDarkRedMat, 0, 0, 0, 28);
  const psRedCone = new THREE.Mesh(
    new THREE.CylinderGeometry(cm(8.2), cm(3.2), cm(14.5), 36, 1, true),
    psDarkRedMat
  );
  psRedCone.position.set(0, cm(13.5), 0);
  psRedCone.castShadow = true;
  psRedHead.add(psRedCone);
  const psRedReflector = new THREE.Mesh(
    new THREE.CircleGeometry(cm(7.6), 32),
    psDarkRedInnerMat
  );
  psRedReflector.rotation.x = -Math.PI / 2;
  psRedReflector.position.set(0, cm(19.2), 0);
  psRedHead.add(psRedReflector);
  const sambordLight = new THREE.PointLight('#ffd284', 0, 4.6, 1.6);
  sambordLight.position.set(cm(-3), cm(180), 0);
  sambordLamp.add(sambordLight);
  if (addAccent) addAccent(sambordLight, psDarkRedInnerMat, 1.65, 1.6);

  // HOLMERUD 홀메루드 커피테이블 (90×55×45cm · 참나무무늬 · 205.300.94)
  const holmerud = placeI(636, 694, Math.PI / 2);
  holmerud.name = 'I IKEA HOLMERUD Oak Coffee Table 90x55x45 205.300.94';
  holmerud.userData = {
    dimensions: [90, 55, 45],
    bounds: [608.5, 663.5, 649, 739],
    productId: '205.300.94',
    price: 64900
  };
  loungeGroup.add(holmerud);
  // Stepped architectural oak slabs of HOLMERUD (90×55×45cm)
  B(holmerud, 90, 2.4, 55, holmerudOak, 0, 42.6, 0, 0.25); // top board
  B(holmerud, 62, 2.4, 55, holmerudOak, -14, 16.0, 0, 0.25); // lower shelf board
  B(holmerud, 2.4, 42.6, 55, holmerudOak, -43.8, 0, 0, 0.25); // left full side panel
  B(holmerud, 2.4, 26.6, 55, holmerudOak, 16, 16.0, 0, 0.25); // inner vertical divider
  B(holmerud, 2.4, 16.0, 55, holmerudOak, 43.8, 0, 0, 0.25); // right lower leg panel
  B(holmerud, 28, 2.4, 55, holmerudOak, 31, 16.0, 0, 0.25); // right step horizontal
  // Books & tray on HOLMERUD
  B(holmerud, 24, 2.4, 18, M('#d8cfc0', { roughness: 0.8 }), -20, 18.4, 0, 0.2);
  B(holmerud, 28, 1.5, 19, voxlovBamboo, -8, 45.0, 0, 0.4);
  CY(holmerud, 3.4, 3.0, 7.5, humlesjonOrange, -14, 46.5, -2, 20);
  CY(holmerud, 3.4, 3.0, 7.5, humlesjonMint, -2, 46.5, 3, 20);

  // STOENSE 스토엔세 단모러그 (133×195cm · 페일그린 · 806.291.48) texture
  const stoenseWeave = canvasTex(512, 768, (g, w, h) => {
    g.fillStyle = '#b8c7b4';
    g.fillRect(0, 0, w, h);
    // Subtle pile border & mottled low-pile texture
    g.strokeStyle = '#9fb29a';
    g.lineWidth = 10;
    g.strokeRect(8, 8, w - 16, h - 16);
    const r = rnd(308);
    for (let i = 0; i < 65000; i++) {
      g.fillStyle = i % 3 === 0
        ? 'rgba(235, 242, 232, 0.16)'
        : i % 3 === 1
          ? 'rgba(132, 154, 128, 0.14)'
          : 'rgba(168, 188, 162, 0.12)';
      g.fillRect(r() * w, r() * h, 1.5, 2.0);
    }
  });

  // ============================================================================
  // 3. 무지 선반 바로 옆 길쭉한 플로어스탠드 (사용자 지정: "이거가 선반 옆으로 가고" + "무지선반 옆에 길쭉한 조명 배치"):
  //    - IKEA ÖKENSAND 외켄산드 플로어스탠드 · 너도밤나무/화이트 (높이 154cm · Ø35cm · 99,900원 · 405.415.34)
  //    - 위치: 북쪽으로 34cm 이동한 무지 와이드L 선반(z=613.5..699.5) 바로 남쪽 옆 (476, 728)
  //    - MARKFROST 마르크프로스트 대리석 탁상스탠드 (35,000원 · 205.415.25)
  // ============================================================================
  const okensandPleatTex = canvasTex(512, 512, (g, w, h) => {
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0.0, '#fcf8ee');
    grad.addColorStop(0.25, '#fff9e6');
    grad.addColorStop(0.55, '#fff6dc');
    grad.addColorStop(0.82, '#fff9e6');
    grad.addColorStop(1.0, '#f7f1e1');
    g.fillStyle = grad;
    g.fillRect(0, 0, w, h);
    const pleats = 36;
    for (let i = 0; i < pleats; i++) {
      const x0 = (i / pleats) * w;
      const pw = w / pleats;
      const pGrad = g.createLinearGradient(x0, 0, x0 + pw, 0);
      pGrad.addColorStop(0.0, 'rgba(185, 168, 138, 0.24)');
      pGrad.addColorStop(0.48, 'rgba(255, 253, 245, 0.14)');
      pGrad.addColorStop(0.52, 'rgba(165, 148, 118, 0.30)');
      pGrad.addColorStop(1.0, 'rgba(255, 252, 242, 0.10)');
      g.fillStyle = pGrad;
      g.fillRect(x0, 0, pw, h);
    }
  });
  const okensandShadeMat = new THREE.MeshStandardMaterial({
    color: '#fdfaf0',
    map: okensandPleatTex,
    emissive: '#ffcf7c',
    emissiveMap: okensandPleatTex,
    emissiveIntensity: 0.38,
    roughness: 0.52,
    side: THREE.DoubleSide
  });
  const okensand = placeI(476, 728, 0);
  okensand.name = 'I IKEA OKENSAND Floor Lamp Beech White 154cm 405.415.34';
  okensand.userData = {
    productId: '405.415.34',
    productName: 'IKEA ÖKENSAND 외켄산드 플로어스탠드 · 너도밤나무/화이트 (154cm)',
    dimensions: [35, 35, 154],
    price: 99900
  };
  // 3 solid beechwood tripod legs: only the bottom 25cm (y=0..25cm) is exposed below the long pleated shade!
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3 + Math.PI / 6;
    const fx = Math.cos(a) * 16.5, fz = Math.sin(a) * 16.5;
    const mx = Math.cos(a) * 13.5, mz = Math.sin(a) * 13.5;
    const tx = Math.cos(a) * 8.0, tz = Math.sin(a) * 8.0;
    // Exposed lower leg segment (y=0..26cm, slightly thicker tapered beechwood)
    dRod(okensand, [fx, 0, fz], [mx, 26, mz], 1.25, beechWood);
    // Internal frame leg continuing up inside the tall shade (y=26..151cm)
    dRod(okensand, [mx, 26, mz], [tx, 151, tz], 0.85, beechWood);
  }
  // Internal 3-socket vertical light tree & rings at y=26cm, 85cm, 151cm
  CY(okensand, 13.6, 13.6, 0.8, mat.ceramic, 0, 26, 0, 32);
  CY(okensand, 11.0, 11.0, 0.6, mat.ceramic, 0, 88, 0, 32);
  CY(okensand, 8.2, 8.2, 0.8, mat.ceramic, 0, 151, 0, 32);
  // Signature long accordion-pleated white fabric column shade:
  // Extends from y=25cm (bottom R=14.8cm) all the way to y=154cm (top R=9.2cm), height = 129cm (84% of lamp height!)
  const pleatSegs = 72; // 36 sharp accordion pleats (alternating outer peak & inner valley)
  const okensandShadeGeo = new THREE.CylinderGeometry(cm(9.2), cm(14.8), cm(129), pleatSegs, 1, true);
  const sPos = okensandShadeGeo.attributes.position;
  for (let vi = 0; vi < sPos.count; vi++) {
    const vx = sPos.getX(vi), vz = sPos.getZ(vi);
    const r = Math.hypot(vx, vz);
    if (r > 0) {
      const ang = Math.atan2(vz, vx);
      const wave = Math.cos(ang * 36) * 0.038; // crisp 3D accordion pleat ridges
      sPos.setX(vi, vx * (1 + wave));
      sPos.setZ(vi, vz * (1 + wave));
    }
  }
  sPos.needsUpdate = true;
  okensandShadeGeo.computeVertexNormals();
  const okensandShade = new THREE.Mesh(okensandShadeGeo, okensandShadeMat);
  okensandShade.position.set(0, cm(89.5), 0); // y = 25 .. 154cm
  okensandShade.castShadow = true;
  okensand.add(okensandShade);
  const okensandLight = new THREE.PointLight('#ffd288', 0, 4.6, 1.6);
  okensandLight.position.set(0, cm(92), 0);
  okensand.add(okensandLight);
  if (addAccent) addAccent(okensandLight, okensandShadeMat, 1.55, 1.55);

  // MARKFROST 마르크프로스트 대리석 탁상스탠드 on HOLMERUD Coffee Table stepped shelf (lx=31, y=18.4cm)
  const markfrost = new THREE.Group();
  markfrost.name = 'I IKEA MARKFROST Marble Table Lamp 205.415.25';
  markfrost.position.set(cm(31), cm(18.4), 0);
  holmerud.add(markfrost);
  CY(markfrost, 4.6, 4.6, 9.5, M('#1f2123', { roughness: 0.25, metalness: 0.15 }), 0, 0, 0, 28);
  const markBulbMat = new THREE.MeshStandardMaterial({
    color: '#f5dec0',
    emissive: '#ffbe6b',
    emissiveIntensity: 0.35,
    roughness: 0.18,
    transparent: true,
    opacity: 0.88
  });
  const markBulb = new THREE.Mesh(new THREE.SphereGeometry(cm(6.2), 24, 20), markBulbMat);
  markBulb.position.set(0, cm(15), 0);
  markfrost.add(markBulb);
  const markLight = new THREE.PointLight('#ffc478', 0, 2.2, 1.9);
  markLight.position.set(0, cm(15), 0);
  markfrost.add(markLight);
  if (addAccent) addAccent(markLight, markBulbMat, 0.75, 1.6);

  // ============================================================================
  // 4. 남서 창가 코너 (사용자 스크린샷 1·2·3):
  //    - VINTERFINT 빈테르핀트 인조 크리스마스트리 (150cm 그린 · 35,000원 · 606.363.76)
  //    - STRÅLA 스트롤라 160구 LED 체인조명 (29,900원 · 505.630.83)
  //    - RISATORP 리사토르프 바구니 레드 (7,900원 · 906.181.73)
  //    - FEJKA 페이카 스트렐리치아 극락조화 인조식물 (23cm 화분 / H165cm · 89,900원 · 306.106.03)
  // ============================================================================
  const treeGroup = placeI(476, 796, 0);
  treeGroup.name = 'I VINTERFINT 150cm Christmas Tree + STRALA 160 LED Chain + RISATORP Red Basket';
  treeGroup.userData = {
    dimensions: [58, 58, 150],
    treeProductId: '606.363.76',
    lightProductId: '505.630.83',
    basketProductId: '906.181.73'
  };
  // RISATORP red mesh basket base + birch handle around tree base
  CY(treeGroup, 14.5, 11.5, 18, risatorpRed, 0, 0, 0, 28);
  CY(treeGroup, 14.8, 14.8, 1.2, risatorpRed, 0, 17.5, 0, 28);
  dRod(treeGroup, [-14.5, 18, 0], [14.5, 18, 0], 0.85, poangBirch);
  // Trunk (H 150cm)
  CY(treeGroup, 2.2, 2.8, 132, M('#594433', { roughness: 0.9 }), 0, 12, 0, 14);
  // Lush pine tiers up to 150cm
  const pineMats = [
    M('#2e5233', { roughness: 0.92 }),
    M('#39603d', { roughness: 0.90 }),
    M('#446d46', { roughness: 0.88 })
  ];
  for (let tier = 0; tier < 6; tier++) {
    const y0 = 22 + tier * 20;
    const rad = 29 - tier * 3.8;
    const h = 28 - tier * 1.5;
    CY(treeGroup, 1.2, rad, h, pineMats[tier % 3], 0, y0, 0, 16);
    for (let b = 0; b < 10; b++) {
      const a = (b * Math.PI * 2) / 10 + tier * 0.4;
      const r = rad * 0.92;
      dRod(treeGroup, [0, y0 + h * 0.65, 0], [Math.cos(a) * r, y0 + 2, Math.sin(a) * r], 0.85, pineMats[(tier + b) % 3]);
    }
  }
  // STRÅLA 스트롤라 160구 LED 체인조명 (black cord spiraling up the tree + warm glowing LED bulbs)
  const stralaLedMat = new THREE.MeshStandardMaterial({
    color: '#fff4d2',
    emissive: '#ffca68',
    emissiveIntensity: 1.15,
    roughness: 0.2
  });
  const spiralPts = [];
  for (let i = 0; i <= 54; i++) {
    const t = i / 54;
    const y = 25 + t * 118;
    const r = (28.5 - t * 22.5) * 0.96;
    const a = t * Math.PI * 11;
    const px = Math.cos(a) * r;
    const pz = Math.sin(a) * r;
    spiralPts.push(new THREE.Vector3(cm(px), cm(y), cm(pz)));
    const led = new THREE.Mesh(new THREE.SphereGeometry(cm(0.95), 10, 8), stralaLedMat);
    led.position.set(cm(px), cm(y), cm(pz));
    treeGroup.add(led);
  }
  const stralaCord = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(spiralPts), 140, cm(0.22), 6, false),
    blackMetal
  );
  treeGroup.add(stralaCord);
  // Red ornaments + VINTERFINT Santa ornament at base
  for (const [oh, oa, orad] of [[38, 0.8, 22], [58, 2.4, 19], [78, 4.1, 15], [98, 1.5, 12], [116, 3.3, 8.5]]) {
    const orn = new THREE.Mesh(new THREE.SphereGeometry(cm(2.1), 14, 12), risatorpRed);
    orn.position.set(cm(Math.cos(oa) * orad), cm(oh), cm(Math.sin(oa) * orad));
    treeGroup.add(orn);
  }
  const stralaLight = new THREE.PointLight('#ffcb74', 0.45, 3.2, 1.8);
  stralaLight.position.set(0, cm(88), 0);
  treeGroup.add(stralaLight);
  if (addAccent) addAccent(stralaLight, stralaLedMat, 1.35, 2.2);

  // FEJKA 페이카 인조식물 (23cm 화분 / H165cm 스트렐리치아 극락조화 · 306.106.03)
  const fejkaPlant = placeI(534, 826, 0);
  fejkaPlant.name = 'I IKEA FEJKA Strelitzia Bird of Paradise 23cm Pot H165cm 306.106.03';
  fejkaPlant.userData = {
    dimensions: [65, 65, 165],
    productId: '306.106.03',
    price: 89900
  };
  // 23cm diameter planter pot (H 24cm)
  CY(fejkaPlant, 12.2, 9.8, 24, M('#282a29', { roughness: 0.75 }), 0, 0, 0, 28);
  CY(fejkaPlant, 11.4, 11.4, 1.5, M('#3b2f24', { roughness: 0.95 }), 0, 22.8, 0, 24);
  const leafDark = M('#2d5a34', { roughness: 0.55, side: THREE.DoubleSide });
  const leafMid = M('#3b6e41', { roughness: 0.52, side: THREE.DoubleSide });
  // 8 tall arching Strelitzia stems with broad paddle leaves (up to H=165cm)
  const leafSpecs = [
    [0, 0, 148, 0.12, 0, 38, 15],
    [-2.5, 1.5, 134, -0.24, 0.6, 36, 14],
    [2.5, -1.5, 126, 0.26, -0.5, 35, 14],
    [-1.5, -2.5, 115, -0.22, -0.8, 33, 13.5],
    [2.0, 2.2, 106, 0.28, 0.9, 32, 13],
    [-3.0, 0.5, 94, -0.35, 0.2, 30, 12.5],
    [1.2, -2.8, 86, 0.32, -1.2, 28, 12],
    [0.5, 2.8, 156, 0.16, 1.4, 40, 15.5]
  ];
  for (let i = 0; i < leafSpecs.length; i++) {
    const [sx, sz, topH, tiltX, rotY, lLen, lWid] = leafSpecs[i];
    const stemG = new THREE.Group();
    stemG.position.set(cm(sx), cm(22), cm(sz));
    stemG.rotation.y = rotY;
    fejkaPlant.add(stemG);
    const tipX = Math.sin(tiltX) * (topH - 22) * 0.45;
    const tipY = topH - 22;
    dRod(stemG, [0, 0, 0], [tipX, tipY, 0], 0.65, i % 2 ? leafDark : leafMid);
    // Broad paddle-shaped Strelitzia leaf blade at tip
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, 0);
    bladeShape.bezierCurveTo(cm(lWid * 0.55), cm(lLen * 0.25), cm(lWid * 0.52), cm(lLen * 0.78), 0, cm(lLen));
    bladeShape.bezierCurveTo(cm(-lWid * 0.52), cm(lLen * 0.78), cm(-lWid * 0.55), cm(lLen * 0.25), 0, 0);
    const blade = new THREE.Mesh(new THREE.ShapeGeometry(bladeShape, 18), i % 2 ? leafDark : leafMid);
    blade.position.set(cm(tipX), cm(tipY - lLen * 0.35), 0);
    blade.rotation.z = -tiltX * 1.35;
    blade.rotation.x = 0.35;
    blade.castShadow = true;
    stemG.add(blade);
  }

  // ============================================================================
  // 5. 화장실 거울 수납장 밑 훔레셴(HUMLESJÖN) 거울 + 후크 2개 세트 부착!
  //    (사용자 스크린샷 4·5 + "그리고 거눌이랑 저거는 화장실 장 밑에 붙야줘 세트로")
  //    - 위치: 욕실 남쪽 타일벽(place(984.5, 484, 0, -1)), 거울 수납장(하단 h=140cm) 바로 밑 &
  //            검정 인조석 젠다이 선반(상단 h=103cm) 위 타일 벽면(h=115~134cm)에 세트로 부착!
  //    - 구성:
  //      1) HUMLESJÖN 훔레셴 흡착식거울 · 오렌지 (9,900원 · 006.289.73)
  //      2) HUMLESJÖN 훔레셴 흡착식후크 2개입 · 오렌지 + 라이트터콰이즈 민트 (12×8cm · 4,900원 · 306.009.63)
  // ============================================================================
  const bathSet = dPlace(984.5, 484, 0, -1, grpI);
  bathSet.name = 'I Bathroom Under-Cabinet HUMLESJON Orange Mirror + 2 Suction Hooks Set';
  bathSet.userData = {
    mirrorProductId: '006.289.73',
    mirrorPrice: 9900,
    hooksProductId: '306.009.63',
    hooksPrice: 4900,
    totalSetPrice: 14800,
    mountedHeightCm: [114, 135],
    locationNote: '욕실 거울 수납장(하단 140cm)과 젠다이 인조석 선반(103cm) 사이 타일 벽면에 세트로 흡착 부착'
  };

  // 5-1) HUMLESJÖN 훔레셴 흡착식거울 · 오렌지 (006.289.73)
  //      Mounted at local x = +14cm (between mirror cabinet center & sink), y = 123cm, z = 0..4.5cm
  {
    const hMirror = new THREE.Group();
    hMirror.name = 'I HUMLESJON Suction Mirror Orange 006.289.73';
    hMirror.position.set(cm(14), cm(123), 0);
    bathSet.add(hMirror);

    // Top circular orange suction cup pad against the tile wall (y = +8.5cm)
    const suctionPad = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(3.6), cm(3.8), cm(1.4), 28),
      humlesjonOrange
    );
    suctionPad.rotation.x = Math.PI / 2;
    suctionPad.position.set(0, cm(8.2), cm(0.7));
    suctionPad.castShadow = true;
    hMirror.add(suctionPad);

    // Connector boss
    const boss = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(2.2), cm(2.5), cm(1.8), 24),
      humlesjonOrange
    );
    boss.rotation.x = Math.PI / 2;
    boss.position.set(0, cm(8.2), cm(1.8));
    hMirror.add(boss);

    // Rounded terracotta-orange mirror frame (Ø18cm circular/squircle body)
    const frameBack = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(9.2), cm(9.2), cm(2.0), 40),
      humlesjonOrange
    );
    frameBack.rotation.x = Math.PI / 2;
    frameBack.position.set(0, 0, cm(2.2));
    frameBack.castShadow = true;
    hMirror.add(frameBack);

    // Raised orange bezel rim around mirror
    const bezelRim = new THREE.Mesh(
      new THREE.TorusGeometry(cm(8.6), cm(0.8), 16, 40),
      humlesjonOrange
    );
    bezelRim.position.set(0, 0, cm(3.2));
    bezelRim.castShadow = true;
    hMirror.add(bezelRim);

    // Reflective mirror glass (Ø16.4cm)
    const mirGlass = new THREE.Mesh(
      new THREE.CircleGeometry(cm(8.2), 40),
      mat.mirror
    );
    mirGlass.position.set(0, 0, cm(3.35));
    hMirror.add(mirGlass);

    // Lower curved orange tray/lip at bottom of the mirror frame (for rings/tweezers/razor)
    B(hMirror, 11.5, 1.4, 3.8, humlesjonOrange, 0, -8.2, 3.4, 0.5);
    B(hMirror, 11.5, 2.2, 1.0, humlesjonOrange, 0, -7.6, 5.1, 0.4);
  }

  // 5-2) HUMLESJÖN 훔레셴 흡착식후크 2개입 · 오렌지 & 라이트터콰이즈 민트 (306.009.63)
  //      Mounted side-by-side right next to the mirror under the cabinet (local x = -4cm and -16cm, y = 123cm)
  function addHumlesjonHook(lx, ly, hookMat, hookName) {
    const hk = new THREE.Group();
    hk.name = hookName;
    hk.position.set(cm(lx), cm(ly), 0);
    bathSet.add(hk);
    // Chunky circular suction base (Ø7.2cm) + stepped cap
    const pad = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(3.6), cm(3.8), cm(1.3), 28),
      hookMat
    );
    pad.rotation.x = Math.PI / 2;
    pad.position.set(0, cm(1.5), cm(0.65));
    pad.castShadow = true;
    hk.add(pad);

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(2.5), cm(2.9), cm(1.6), 24),
      hookMat
    );
    cap.rotation.x = Math.PI / 2;
    cap.position.set(0, cm(1.5), cm(1.8));
    cap.castShadow = true;
    hk.add(cap);

    // Thick sculpted J-hook curving down and up (12×8cm profile)
    const hookCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, cm(1.5), cm(2.4)),
      new THREE.Vector3(0, cm(-1.5), cm(3.6)),
      new THREE.Vector3(0, cm(-5.2), cm(4.2)),
      new THREE.Vector3(0, cm(-6.0), cm(5.8)),
      new THREE.Vector3(0, cm(-3.2), cm(6.8))
    ]);
    const hookTube = new THREE.Mesh(
      new THREE.TubeGeometry(hookCurve, 28, cm(1.15), 14, false),
      hookMat
    );
    hookTube.castShadow = true;
    hk.add(hookTube);
    const tipBall = new THREE.Mesh(new THREE.SphereGeometry(cm(1.18), 14, 12), hookMat);
    tipBall.position.set(0, cm(-3.2), cm(6.8));
    hk.add(tipBall);
    return hk;
  }

  addHumlesjonHook(-3, 123.5, humlesjonOrange, 'I HUMLESJON Suction Hook 1 Orange 306.009.63');
  addHumlesjonHook(-14, 123.5, humlesjonMint, 'I HUMLESJON Suction Hook 2 Turquoise Mint 306.009.63');

  // Subtle under-cabinet warm light in bathroom so the Humlesjön set is clearly visible
  const bathUnderLight = new THREE.PointLight('#fff2dd', 0.65, 2.2, 1.6);
  bathUnderLight.position.set(cm(2), cm(136), cm(18));
  bathSet.add(bathUnderLight);

  // ============================================================================
  // 6. 침실 협탁 위 소품: NOLLNING 놀닝 시계/온도계/알람 (19,900원 · 304.991.30)
  //    + SMÅHAGEL 스모하겔 3포트 USB 충전기 (9,900원 · 305.391.88)
  // ============================================================================
  const nightAcc = dPlace(1032, 520, -1, 0, grpI);
  nightAcc.name = 'I Bedroom Nightstand NOLLNING Clock + SMAHAGEL Charger';
  B(nightAcc, 8.5, 8.5, 3.2, M('#2b332e', { roughness: 0.4 }), -9, 50, 8, 0.5);
  B(nightAcc, 7.2, 7.2, 0.3, M('#d9e4dc', { emissive: '#9ec4a9', emissiveIntensity: 0.25 }), -9, 50.6, 9.55, 0.2);

  return {
    group: grpI,
    diningTonstad,
    diningStockholm,
    loungeGroup,
    poangYellow,
    poangRed,
    sambordLamp,
    holmerud,
    stoenseWeave,
    okensand,
    markfrost,
    treeGroup,
    fejkaPlant,
    bathSet,
    nightAcc
  };
}
