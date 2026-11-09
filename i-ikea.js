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
  wallDecor,
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
  const beigeCorduroy = M('#c8bba6', { roughness: 0.88 });
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
  //    + IKEA PS 2026 접이식의자 2개 (45×51×76cm · 206.179.59 · 79,900원×2 = 159,800원)
  //    + KYRRE 쉬레 스툴 2개 (자작나무 804.200.40 + 그린 706.081.32 · 각 29,900원)
  //    + (전환 옵션) TONSTAD 톤스타드 참나무무늬목 식탁 (150×80×75cm · 805.940.64 · 399,000원)
  // ============================================================================
  const diningTonstad = placeI(529, 492, 0);
  diningTonstad.name = 'I IKEA TONSTAD Oak Table 150x80x75 + 2 PS2026 Chairs + 2 KYRRE Stools';
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

  // Helper: IKEA KYRRE 쉬레 스툴 (폭 42 × 깊이 48 × 높이 45cm, 시트높이 45cm · 자작나무 804.200.40 / 오프화이트 506.081.33 / 그린 706.081.32 · 각 29,900원)
  // 곡선 삼각형 좌판 + 3개의 ㄱ자 벤트우드 자작나무 적층 원목 다리
  const kyrreOffWhite = M('#f2efe8', { roughness: 0.42 });
  const kyrreGreen = dWood('#1f7a4c', '#155936');
  const kyrreBirch = dWood('#dec296', '#b59260');
  function addKyrreStool(parent, lx, lz, rotY, colorMode, name) {
    const isBirch = colorMode === 'birch';
    const isGreen = colorMode === true || colorMode === 'green';
    const sMat = isBirch ? kyrreBirch : isGreen ? kyrreGreen : kyrreOffWhite;
    const c = new THREE.Group();
    c.name = name;
    c.position.set(cm(lx), 0, cm(lz));
    c.rotation.y = rotY;
    c.userData = {
      productId: isBirch ? '804.200.40' : isGreen ? '706.081.32' : '506.081.33',
      productName: isBirch
        ? 'IKEA KYRRE 쉬레 스툴 · 자작나무'
        : isGreen
          ? 'IKEA KYRRE 쉬레 스툴 · 그린'
          : 'IKEA KYRRE 쉬레 스툴 · 오프화이트',
      dimensions: [42, 48, 45],
      seatHeight: 45,
      price: 29900
    };
    parent.add(c);

    // Rounded triangular birch seat (y=43.2..45.0cm, radius ~18cm)
    const seatShape = new THREE.Shape();
    const lobes = 3, rLobe = 7.2, dCenter = 10.5;
    for (let i = 0; i < lobes; i++) {
      const a0 = (i * Math.PI * 2) / 3 - Math.PI / 2;
      const aStart = a0 - Math.PI / 3;
      const aEnd = a0 + Math.PI / 3;
      const cx = Math.cos(a0) * dCenter;
      const cz = Math.sin(a0) * dCenter;
      seatShape.absarc(cm(cx), cm(cz), cm(rLobe), aStart, aEnd, false);
    }
    seatShape.closePath();
    if (!isBirch) {
      // Central elongated finger slot hole (9cm × 2.2cm)
      const slotHole = new THREE.Path();
      slotHole.absellipse(0, 0, cm(4.2), cm(1.1), 0, Math.PI * 2, true, 0);
      seatShape.holes.push(slotHole);
    }

    const seatGeo = new THREE.ExtrudeGeometry(seatShape, {
      depth: cm(1.8),
      bevelEnabled: true,
      bevelThickness: cm(0.25),
      bevelSize: cm(0.25),
      bevelSegments: 2,
      curveSegments: 24
    });
    const seatMesh = new THREE.Mesh(seatGeo, sMat);
    seatMesh.rotation.x = Math.PI / 2;
    seatMesh.position.y = cm(45.0);
    seatMesh.castShadow = true;
    seatMesh.receiveShadow = true;
    c.add(seatMesh);

    // 3 curved L-shaped laminated birch legs attached along the 3 straight sides of the triangle
    for (let i = 0; i < 3; i++) {
      const sideAng = (i * Math.PI * 2) / 3 + Math.PI / 6;
      const legGrp = new THREE.Group();
      legGrp.rotation.y = sideAng;
      c.add(legGrp);
      // Upper horizontal under-seat flange (z = 8.5..15.5cm, y = 41.6..43.2cm)
      B(legGrp, 5.2, 1.6, 7.5, sMat, 0, 41.6, 12.0, 0.35);
      // Curved knee & tapered splayed leg descending from (z=15.5, y=42.2) to floor (z=20.8, y=0)
      const legLeg = B(legGrp, 5.2, 43.2, 1.8, sMat, 0, 0, 18.2, 0.35);
      legLeg.rotation.x = -0.125;
    }
    return c;
  }

  // Helper: IKEA PS 2026 이케아 피에스 2026 접이식의자 · 자작나무 블루/블랙 레드 (폭 45 × 깊이 51 × 높이 76cm · 시트높이 46cm · 206.179.59 · 79,900원)
  const psChairBlue = M('#6ca0cf', { roughness: 0.36 });
  const psChairRed = M('#d9383a', { roughness: 0.36 });
  const psChairBlack = M('#1f2022', { roughness: 0.42, metalness: 0.18 });
  function addPs2026FoldingChair(parent, lx, lz, rotY, name) {
    const c = new THREE.Group();
    c.name = name;
    c.position.set(cm(lx), 0, cm(lz));
    c.rotation.y = rotY;
    c.userData = {
      productId: '206.179.59',
      productName: 'IKEA PS 2026 이케아 피에스 2026 접이식의자 · 자작나무 블루/블랙 레드',
      dimensions: [45, 51, 76],
      seatHeight: 46,
      price: 79900
    };
    parent.add(c);

    // 1. 앞다리 + 등받이 기둥 일체형 자작나무 프레임: 바닥 앞쪽 (y=0, z=+20.0) → 등받이 상단 (y=75.5, z=-16.5)
    //    중점 (y=37.75, z=1.75), 길이 83.8cm, 기울기 rx = -0.45rad
    for (const sx of [-20.4, 20.4]) {
      const birchStile = B(c, 3.6, 83.8, 2.2, poangBirch, sx, -4.15, 1.75, 0.25);
      birchStile.rotation.x = -0.45;
      // 2. 블랙 경첩 브래킷 (y=55cm, z=-6.6) 및 뒷다리 블랙 프레임: 바닥 뒤쪽 (y=0, z=-22.5) → 경첩 (y=55.5, z=-6.6)
      //    중점 (y=27.75, z=-14.55), 길이 57.7cm, 기울기 rx = +0.279rad
      B(c, 4.3, 4.6, 3.8, psChairBlack, sx, 53.0, -6.6, 0.2);
      const blackRearLeg = B(c, 3.4, 57.7, 2.2, psChairBlack, sx, -1.1, -14.55, 0.22);
      blackRearLeg.rotation.x = 0.279;
    }

    // 3. 하단 가로 지지대 (앞다리 자작나무 가로바 + 뒷다리 블랙 가로바 + 시트 뒤쪽 블랙 금속 지지봉)
    const frontStretcher = B(c, 37.6, 2.8, 1.8, poangBirch, 0, 14.0, 12.75, 0.2);
    frontStretcher.rotation.x = -0.45;
    const rearStretcher = B(c, 37.6, 3.2, 1.8, psChairBlack, 0, 16.5, -17.5, 0.2);
    rearStretcher.rotation.x = 0.279;
    dRod(c, [-19.5, 45.2, -11.2], [19.5, 45.2, -11.2], 0.72, psChairBlack);

    // 4. 스카이블루 시트 상판 (시트 폭 38 × 시트 깊이 35 × 두께 2.2cm, 시트 상면 높이 46cm)
    B(c, 38.4, 2.2, 35.0, psChairBlue, 0, 43.8, 4.5, 0.28);

    // 5. 레드 등받이 상단 패널 (폭 37.6 × 높이 8.4 × 두께 1.8cm, 자작나무 기둥 상단 y=67~75cm 지점에 밀착)
    const redBack = B(c, 37.6, 8.4, 1.8, psChairRed, 0, 66.8, -14.3, 0.24);
    redBack.rotation.x = -0.45;

    return c;
  }

  addKyrreStool(diningTonstad, 12, -48, 0, 'birch', 'I KYRRE Birch Stool 1 (North)');
  addKyrreStool(diningTonstad, 12, 48, Math.PI, 'green', 'I KYRRE Green Stool 2 (South)');
  addPs2026FoldingChair(diningTonstad, 82, 0, -Math.PI / 2, 'I TONSTAD PS 2026 Folding Chair 1 (East)');
  addPs2026FoldingChair(diningTonstad, -82, 0, Math.PI / 2, 'I TONSTAD PS 2026 Folding Chair 2 (West)');

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
  addKyrreStool(diningStockholm, 0, -60, 0, 'birch', 'I STOCKHOLM KYRRE Birch Stool 1 804.200.40 (North)');
  addKyrreStool(diningStockholm, 0, 60, Math.PI, 'green', 'I STOCKHOLM KYRRE Green Stool 2 706.081.32 (South)');
  const ps2026Chair = addPs2026FoldingChair(diningStockholm, 62, 0, -Math.PI / 2, 'I STOCKHOLM PS 2026 Folding Chair 1 206.179.59 (East)');
  const ps2026Chair2 = addPs2026FoldingChair(diningStockholm, -62, 0, Math.PI / 2, 'I STOCKHOLM PS 2026 Folding Chair 2 206.179.59 (West)');

  // ============================================================================
  // 2. 동쪽 벽 & 거실 라운지:
  //    - POÄNG 포엥 암체어 (자작나무무늬목 / 셸링에 다크옐로 코듀로이 · 68×82×100cm · s29617714 · 149,900원)
  //    - POÄNG 포엥 로우백암체어 (내추럴컬러/베이지 / 비슬레 레드 · 68×83×71cm · s49551590 · 104,900원)
  //    - LÅNESPELARE 로네스펠라레 원목 컵홀더 × 2개 (105.715.27 · 11,900원×2 = 23,800원)
  //    - 의자 사이 조명: IKEA PS 2026 상향식플로어스탠드 · 다크레드 (182cm · 149,000원 · 106.085.16)
  // ============================================================================
  const loungeGroup = new THREE.Group();
  loungeGroup.name = 'I POANG Armchairs';
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

  // North POÄNG: High-back Birch Veneer + Dark Yellow Corduroy (s29617714 · 149,900원) + LÅNESPELARE Cup Holder #1
  const poangYellow = buildPoangChair({
    x: 742,
    z: 638,
    rotY: (-75 * Math.PI) / 180,
    frameMat: poangBirch,
    cushionMat: yellowCorduroy,
    highBack: true,
    withCupHolder: true,
    name: 'I POANG Armchair Birch + Dark Yellow Corduroy s29617714'
  });

  // South POÄNG: High-back Birch Veneer + Kelinge Beige Corduroy (s49625299 · 149,900원) + LÅNESPELARE Cup Holder #2
  const poangRed = buildPoangChair({
    x: 742,
    z: 748,
    rotY: (-105 * Math.PI) / 180,
    frameMat: poangBirch,
    cushionMat: beigeCorduroy,
    highBack: true,
    withCupHolder: true,
    name: 'I POANG Armchair Birch + Kelinge Beige Corduroy s49625299'
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

  // HOLMERUD 홀메루드 커피테이블 (90×55×45cm · 참나무무늬 · 205.300.94 · 64,900원)
  // I안에서는 숨김(visible=false), K안에서는 서쪽 벽으로 이동한 포엥 암체어 2개 앞(582, 663)에 배치!
  const holmerud = placeI(582, 663, -Math.PI / 2);
  holmerud.name = 'I/K IKEA HOLMERUD Oak Coffee Table 90x55x45 205.300.94';
  holmerud.visible = false;
  holmerud.userData = {
    dimensions: [90, 55, 45],
    bounds: [554.5, 609.5, 618, 708],
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
  const markfrost = new THREE.Group();
  markfrost.visible = false;

  // STOENSE 스토엔세 단모러그 (예비 텍스처 유지, 실제 I안은 G안 노미아 오트밀 러그 사용)
  const stoenseWeave = canvasTex(64, 64, (g, w, h) => {
    g.fillStyle = '#b8c7b4';
    g.fillRect(0, 0, w, h);
  });

  // ============================================================================
  // 3. 무지 선반 바로 옆 길쭉한 플로어스탠드 (사용자 지정: "조명은 저렇게 길어 다리가 저렇게 길지 않아"):
  //    - IKEA ÖKENSAND 외켄산드 플로어스탠드 · 너도밤나무/화이트 (높이 154cm · Ø35cm · 99,900원 · 405.415.34)
  //    - 위치: 북쪽으로 34cm 이동한 무지 와이드L 선반(z=613.5..699.5) 바로 남쪽 옆 (476, 728)
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
  // 3 solid beechwood tripod legs: only the bottom 22cm (y=0..22cm) is exposed below the long pleated shade!
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3 + Math.PI / 6;
    const fx = Math.cos(a) * 16.0, fz = Math.sin(a) * 16.0;
    const mx = Math.cos(a) * 13.5, mz = Math.sin(a) * 13.5;
    const tx = Math.cos(a) * 8.0, tz = Math.sin(a) * 8.0;
    // Exposed lower leg segment (y=0..23cm, tapered beechwood)
    dRod(okensand, [fx, 0, fz], [mx, 23, mz], 1.25, beechWood);
    // Internal frame leg continuing up inside the tall shade (y=23..151cm)
    dRod(okensand, [mx, 23, mz], [tx, 151, tz], 0.85, beechWood);
  }
  // Internal 3-socket vertical light tree & rings at y=23cm, 88cm, 151cm
  CY(okensand, 13.6, 13.6, 0.8, mat.ceramic, 0, 23, 0, 32);
  CY(okensand, 11.0, 11.0, 0.6, mat.ceramic, 0, 88, 0, 32);
  CY(okensand, 8.2, 8.2, 0.8, mat.ceramic, 0, 151, 0, 32);
  // Signature long accordion-pleated white fabric column shade:
  // Extends from y=22cm (bottom R=14.8cm) all the way to y=154cm (top R=9.2cm), height = 132cm (86% of lamp height!)
  const pleatSegs = 72; // 36 sharp accordion pleats (alternating outer peak & inner valley)
  const okensandShadeGeo = new THREE.CylinderGeometry(cm(9.2), cm(14.8), cm(132), pleatSegs, 1, true);
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
  okensandShade.position.set(0, cm(88.0), 0); // y = 22 .. 154cm
  okensandShade.castShadow = true;
  okensand.add(okensandShade);
  const okensandLight = new THREE.PointLight('#ffd288', 0, 4.6, 1.6);
  okensandLight.position.set(0, cm(92), 0);
  okensand.add(okensandLight);
  if (addAccent) addAccent(okensandLight, okensandShadeMat, 1.55, 1.55);

  // ============================================================================
  // 4. 남서 창가 코너 (이케아 위시리스트 반영):
  //    - VINTERFINT 빈테르핀트 인조 크리스마스트리 (150cm 그린 · 35,000원 · 606.363.76, 리사토르프 레드 바구니 제외)
  //    - FEJKA 페이카 인조식물 · 실내외겸용 몬스테라 19cm (높이 약 90cm · 42,900원 · 606.152.46)
  // ============================================================================
  const treeGroup = placeI(476, 796, 0);
  treeGroup.name = 'I VINTERFINT 150cm Christmas Tree 606.363.76';
  treeGroup.userData = {
    dimensions: [58, 58, 150],
    treeProductId: '606.363.76',
    price: 35000
  };
  // VINTERFINT 150cm tree's own dark green/charcoal 3-legged stand (RISATORP red basket removed per user request)
  const treeStandMat = M('#263228', { roughness: 0.7 });
  CY(treeGroup, 3.2, 3.6, 16, treeStandMat, 0, 0, 0, 18);
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3;
    dRod(treeGroup, [0, 10, 0], [Math.cos(a) * 18, 0.8, Math.sin(a) * 18], 1.1, treeStandMat);
  }
  // Trunk (H 150cm)
  CY(treeGroup, 2.2, 2.8, 136, M('#594433', { roughness: 0.9 }), 0, 10, 0, 14);
  // Lush pine tiers up to 150cm
  const pineMats = [
    M('#2e5233', { roughness: 0.92 }),
    M('#39603d', { roughness: 0.90 }),
    M('#446d46', { roughness: 0.88 })
  ];
  for (let tier = 0; tier < 6; tier++) {
    const y0 = 20 + tier * 20.5;
    const rad = 29 - tier * 3.8;
    const h = 28 - tier * 1.5;
    CY(treeGroup, 1.2, rad, h, pineMats[tier % 3], 0, y0, 0, 16);
    for (let b = 0; b < 10; b++) {
      const a = (b * Math.PI * 2) / 10 + tier * 0.4;
      const r = rad * 0.92;
      dRod(treeGroup, [0, y0 + h * 0.65, 0], [Math.cos(a) * r, y0 + 2, Math.sin(a) * r], 0.85, pineMats[(tier + b) % 3]);
    }
  }

  // FEJKA 페이카 인조식물 · 실내외겸용 몬스테라 19cm (화분 Ø19cm / 총높이 90cm · 42,900원 · 606.152.46)
  const fejkaPlant = placeI(534, 826, 0);
  fejkaPlant.name = 'I IKEA FEJKA Monstera 19cm Pot H90cm 606.152.46';
  fejkaPlant.userData = {
    dimensions: [55, 55, 90],
    productId: '606.152.46',
    price: 42900
  };
  // 19cm diameter dark planter pot (H 18cm)
  CY(fejkaPlant, 9.8, 7.8, 18, M('#282a29', { roughness: 0.75 }), 0, 0, 0, 28);
  CY(fejkaPlant, 9.2, 9.2, 1.4, M('#3b2f24', { roughness: 0.95 }), 0, 16.8, 0, 24);
  const leafDark = M('#28572f', { roughness: 0.48, side: THREE.DoubleSide });
  const leafMid = M('#366b3d', { roughness: 0.45, side: THREE.DoubleSide });
  // 9 spreading heart-shaped Monstera stems & leaves (up to H=90cm)
  const monsteraSpecs = [
    [0, 0, 86, 0.22, 0.1, 22, 19],
    [-2.0, 1.2, 80, -0.34, 0.8, 21, 18],
    [2.0, -1.2, 76, 0.36, -0.7, 20, 17.5],
    [-1.4, -2.0, 70, -0.38, -1.4, 19, 16.5],
    [1.8, 1.8, 66, 0.40, 1.5, 18.5, 16],
    [-2.4, 0.4, 60, -0.45, 2.2, 17.5, 15],
    [1.0, -2.2, 54, 0.44, -2.1, 16.5, 14.5],
    [0.4, 2.2, 88, 0.26, 2.8, 23, 20],
    [-0.8, -0.8, 62, 0.32, -2.8, 18, 15.5]
  ];
  for (let i = 0; i < monsteraSpecs.length; i++) {
    const [sx, sz, topH, tiltX, rotY, lLen, lWid] = monsteraSpecs[i];
    const stemG = new THREE.Group();
    stemG.position.set(cm(sx), cm(17), cm(sz));
    stemG.rotation.y = rotY;
    fejkaPlant.add(stemG);
    const tipX = Math.sin(tiltX) * (topH - 17) * 0.55;
    const tipY = topH - 17;
    dRod(stemG, [0, 0, 0], [tipX, tipY, 0], 0.52, i % 2 ? leafDark : leafMid);
    // Heart-shaped Monstera leaf blade
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, cm(2));
    bladeShape.bezierCurveTo(cm(lWid * 0.65), cm(-lLen * 0.12), cm(lWid * 0.62), cm(lLen * 0.65), 0, cm(lLen));
    bladeShape.bezierCurveTo(cm(-lWid * 0.62), cm(lLen * 0.65), cm(-lWid * 0.65), cm(-lLen * 0.12), 0, cm(2));
    const blade = new THREE.Mesh(new THREE.ShapeGeometry(bladeShape, 18), i % 2 ? leafDark : leafMid);
    blade.position.set(cm(tipX), cm(tipY - lLen * 0.3), 0);
    blade.rotation.z = -tiltX * 1.25;
    blade.rotation.x = 0.52;
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
  // 6. 침대 옆 협탁: 바로방가구 포포 400 미니 침대협탁 2단 서랍 · 화이트 (40×34.3×52.3cm · 오늘의집 2596428 · 29,900원 + 착불 12,000원)
  //    & 침실 화이트 화장대 앞 KYRRE 쉬레 스툴 오프화이트 1개 추가 배치
  // ============================================================================
  const nightAcc = dPlace(1032, 520, -1, 0, grpI);
  nightAcc.name = 'I Barobang Popo 400 2-Drawer Mini Nightstand White 40x34.3x52.3cm 2596428';
  nightAcc.userData = {
    productId: '2596428',
    productName: '바로방가구 포포 400 미니 침대협탁 2단 서랍 · 화이트 (40×34.3×52.3cm)',
    url: 'https://store.ohou.se/goods/2596428',
    dimensions: [40, 34.3, 52.3],
    price: 29900,
    shipping: 12000
  };
  const popoWhite = M('#f5f4f0', { roughness: 0.36 });
  const popoRecess = M('#dcdad3', { roughness: 0.55 });
  // 4 splayed tapered round white legs (y = 0..12.2cm) + corner mounting plates
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      B(nightAcc, 6.8, 0.9, 6.8, popoWhite, sx * 13.8, 11.4, sz * 11.6, 0.2);
      dRod(nightAcc, [sx * 15.2, 0, sz * 12.8], [sx * 13.6, 11.8, sz * 11.4], 1.75, popoWhite);
    }
  }
  // Bottom board (40 × 1.6 × 34.3cm at y = 12.2..13.8cm)
  B(nightAcc, 40.0, 1.6, 34.3, popoWhite, 0, 12.2, 0, 0.28);
  // Left & Right side panels (y = 13.8..47.2cm main body + y = 47.2..52.3cm raised side guards with rounded front top corners)
  for (const sx of [-19.2, 19.2]) {
    B(nightAcc, 1.6, 33.4, 34.3, popoWhite, sx, 13.8, 0, 0.22);
    B(nightAcc, 1.6, 5.1, 31.3, popoWhite, sx, 47.2, -1.5, 0.22);
    const frontGuardCyl = new THREE.Mesh(new THREE.CylinderGeometry(cm(3.0), cm(3.0), cm(1.6), 24), popoWhite);
    frontGuardCyl.rotation.z = Math.PI / 2;
    frontGuardCyl.position.set(cm(sx), cm(49.3), cm(14.15));
    frontGuardCyl.castShadow = true;
    nightAcc.add(frontGuardCyl);
  }
  // Back panel extending up to form the rear tray guard (y = 13.8..52.3cm)
  B(nightAcc, 36.8, 38.5, 1.5, popoWhite, 0, 13.8, -16.4, 0.22);
  // Top tray shelf surface (y = 45.6..47.2cm)
  B(nightAcc, 36.8, 1.6, 32.8, popoWhite, 0, 45.6, 0.4, 0.22);
  // Interior shadow carcass & 2 handleless full-width drawers (y = 14.2..28.4cm and y = 30.4..44.6cm)
  B(nightAcc, 36.4, 31.2, 29.5, popoRecess, 0, 14.0, 0.2, 0.1);
  B(nightAcc, 36.4, 14.2, 1.6, popoWhite, 0, 14.2, 15.9, 0.24); // Lower drawer front
  B(nightAcc, 36.4, 14.2, 1.6, popoWhite, 0, 30.4, 15.9, 0.24); // Upper drawer front
  // Tabletop items on top tray (y = 47.2cm): digital clock + wood cube reed diffuser
  B(nightAcc, 8.5, 8.5, 3.2, M('#2b332e', { roughness: 0.4 }), -8, 47.2, 5, 0.5);
  B(nightAcc, 7.2, 7.2, 0.3, M('#d9e4dc', { emissive: '#9ec4a9', emissiveIntensity: 0.25 }), -8, 47.8, 6.55, 0.2);
  B(nightAcc, 5.6, 5.8, 5.6, holmerudOak, 8, 47.2, 2, 0.35);
  dRod(nightAcc, [8, 52.5, 2], [5.2, 63.5, 3.2], 0.16, beechWood);
  dRod(nightAcc, [8, 52.5, 2], [11.0, 64.0, 0.8], 0.16, beechWood);

  // 침실 화이트 모아벨 화장대 앞 의자: 식탁 스툴과 동일한 IKEA KYRRE 쉬레 스툴 · 오프화이트 (506.081.33 · 29,900원) 1개 추가
  const vanityKyrreStool = addKyrreStool(grpI, 838, 666, -Math.PI / 2, false, 'I KYRRE Off-White Vanity Stool 506.081.33');
  vanityKyrreStool.__planPlaced = true;

  // ============================================================================
  // 7. K안 전용: 동쪽 벽(원래 암체어 자리 · x=773, z=712)으로 이동한 무지 SUS 대체 선반장!
  //    - 기본(1순위): 데스커 800폭 5단 철제 수납장 도어형 (DSAC085S · 80×32×174cm · 메이플/화이트 · 306,000원 무료시공)
  //    - 전환 가능(이케아 매장 픽): IKEA IVAR 이바르 5단 원목선반 (89×30×179cm · s99582481 · 123,900원) + BRANÄS 라탄바구니 2개 (49,800원)
  // ============================================================================
  const kShelfGroup = placeI(773, 712, -Math.PI / 2);
  kShelfGroup.name = 'K East Wall MUJI SUS Replacement Shelf Unit';
  kShelfGroup.visible = false;
  kShelfGroup.userData = {
    dimensions: [80, 32, 174],
    bounds: [757, 789, 672, 752],
    productId: 'DSAC085S',
    price: 306000
  };

  const whiteSteelMat = M('#f3f4f2', { metalness: 0.28, roughness: 0.34 });
  const mapleBoardMat = dWood('#d8b584', '#ae8754');
  const pineSolidMat = dWood('#e3c696', '#b89562');

  // Helper to populate upper shelves with LP records + TEAC TN-180BT turntable (yLp), Edifier MR3 speakers + LP display stand (yAudio), and F1 mini helmet + ceramic object (yTop)
  function addShelfDisplayItems(targetGroup, yLp, yAudio, yTop) {
    // 1) LP records & bookend on the left + TEAC TN-180BT turntable right next to the LP records on yLp shelf
    const lpColors = ['#243447', '#b84632', '#d49b27', '#2f5d46', '#e6dfd3', '#3b2e2a', '#7c9487', '#c86a38'];
    for (let i = 0; i < 8; i++) {
      B(targetGroup, 1.1, 31.2, 28.5, M(lpColors[i], { roughness: 0.55 }), -34 + i * 2.0, yLp, 0, 0.12);
    }
    B(targetGroup, 0.5, 18, 22, whiteSteelMat, -18.0, yLp, 0, 0.08);

    // TEAC TN-180BT Black Turntable (42 × 30 × 10.5cm) right next to the LP records (x = +10cm)
    const ttGrp = new THREE.Group();
    ttGrp.name = 'K TEAC TN-180BT Next to LP Records';
    ttGrp.position.set(cm(10), cm(yLp), cm(0.5));
    targetGroup.add(ttGrp);
    for (const fx of [-17, 17]) {
      for (const fz of [-11.5, 11.5]) {
        CY(ttGrp, 1.7, 1.7, 1.4, blackMetal, fx, 0, fz, 14);
      }
    }
    B(ttGrp, 42, 5.0, 29.5, blackMetal, 0, 1.4, 0, 0.6);
    CY(ttGrp, 13.8, 13.8, 1.1, chromeMetal, -3.5, 6.4, 0, 40);
    CY(ttGrp, 13.5, 13.5, 0.35, M('#141618', { roughness: 0.25 }), -3.5, 7.5, 0, 40);
    CY(ttGrp, 4.0, 4.0, 0.4, M('#ba6642', { roughness: 0.4 }), -3.5, 7.8, 0, 28);
    dRod(ttGrp, [14.5, 8.0, -9.5], [10.0, 8.0, 9.5], 0.28, chromeMetal);
    B(ttGrp, 2.0, 1.5, 3.0, blackMetal, 10.0, 7.0, 10.5, 0.3);
    B(ttGrp, 42, 4.1, 29.5, glassClear, 0, 6.4, 0, 0.4);

    // 2) Edifier MR3 Black Studio Monitors (pair) + Studio Transparent LP Stand (DST012) & art books on yAudio shelf (ear level)
    for (const sx of [-26, 26]) {
      B(targetGroup, 14.0, 0.6, 19.0, M('#3a3935', { roughness: 0.7 }), sx, yAudio, 1.0, 0.2);
      B(targetGroup, 12.55, 22.0, 18.0, blackMetal, sx, yAudio + 0.6, 1.0, 0.7);
      for (const [dh, dr] of [[yAudio + 8.0, 4.0], [yAudio + 17.5, 1.5]]) {
        const drv = new THREE.Mesh(new THREE.CircleGeometry(cm(dr), 28), M('#101310', { roughness: 0.35 }));
        drv.position.set(cm(sx), cm(dh), cm(10.1));
        targetGroup.add(drv);
      }
      const copperCap = new THREE.Mesh(new THREE.CircleGeometry(cm(1.1), 20), M('#b87348', { metalness: 0.6, roughness: 0.3 }));
      copperCap.position.set(cm(sx), cm(yAudio + 8.0), cm(10.15));
      targetGroup.add(copperCap);
    }
    // Center of yAudio shelf: art books + Acrylic Now-Playing LP Stand (스튜디오투명 DST012)
    B(targetGroup, 22, 2.4, 18, M('#dfd7c8', { roughness: 0.75 }), 0, yAudio, 0, 0.2);
    B(targetGroup, 20, 2.2, 16.5, M('#536856', { roughness: 0.72 }), 0, yAudio + 2.4, 0, 0.2);
    B(targetGroup, 12, 0.8, 10, glassClear, 0, yAudio + 4.6, 1, 0.15);
    const nowPlayingLp = B(targetGroup, 24, 24, 0.6, M('#284b63', { roughness: 0.45 }), 0, yAudio + 5.2, 0, 0.08);
    nowPlayingLp.rotation.x = -0.18;

    // 3) Hamilton 2025 Ferrari F1 mini helmet in acrylic display case + ceramic vase on yTop shelf
    const helmGrp = new THREE.Group();
    helmGrp.position.set(cm(-16), cm(yTop), cm(1));
    targetGroup.add(helmGrp);
    B(helmGrp, 18, 1.4, 15, blackMetal, 0, 0, 0, 0.2);
    const helmBall = new THREE.Mesh(new THREE.SphereGeometry(cm(5.2), 24, 18), M('#c92424', { roughness: 0.26, metalness: 0.18 }));
    helmBall.position.set(0, cm(6.4), 0);
    helmGrp.add(helmBall);
    B(helmGrp, 6.8, 2.6, 3.0, M('#1b1d20', { roughness: 0.15, metalness: 0.7 }), 0, 5.6, 3.8, 0.4);
    B(helmGrp, 17.6, 13.5, 14.6, glassClear, 0, 1.4, 0, 0.1);
    // Sculptural off-white ceramic object on right side of top shelf
    CY(targetGroup, 4.2, 5.8, 16, mat.ceramic, 16, yTop, 0, 28);
    CY(targetGroup, 2.4, 4.2, 6, mat.ceramic, 16, yTop + 16, 0, 24);
  }

  // Model A (Default): 데스커 800폭 5단 철제 수납장 도어형 (DSAC085S · 80×32×174cm · 306,000원)
  const kShelfDesker = new THREE.Group();
  kShelfDesker.name = 'K DESKER 800 5-Tier Steel & Maple Cabinet Shelf DSAC085S';
  kShelfGroup.add(kShelfDesker);
  // 4 slim white steel vertical posts & side ladder bars (80×32×174cm)
  for (const sx of [-38.8, 38.8]) {
    for (const sz of [-14.8, 14.8]) {
      B(kShelfDesker, 2.2, 174, 2.2, whiteSteelMat, sx, 0, sz, 0.2);
    }
    for (const sy of [7, 42, 77, 125, 172]) {
      B(kShelfDesker, 2.0, 1.8, 28, whiteSteelMat, sx, sy, 0, 0.15);
    }
  }
  // Thin back X cross-brace on upper open section
  dRod(kShelfDesker, [-38, 78, -14.8], [38, 171, -14.8], 0.32, whiteSteelMat);
  dRod(kShelfDesker, [38, 78, -14.8], [-38, 171, -14.8], 0.32, whiteSteelMat);
  // 5 maple shelf boards (y = 7, 42, 77, 125, 172cm)
  for (const sy of [7, 42, 77, 125, 172]) {
    B(kShelfDesker, 76.4, 1.8, 30.8, mapleBoardMat, 0, sy, 0, 0.2);
  }
  // Lower enclosed 2-door white storage cabinet (y = 8.8..77cm, hides clutter cleanly without needing out-of-stock MUJI drawers!)
  B(kShelfDesker, 76.0, 68.2, 1.0, whiteSteelMat, 0, 8.8, -14.6, 0.1); // back panel
  B(kShelfDesker, 1.0, 68.2, 29.8, whiteSteelMat, -37.5, 8.8, 0, 0.1); // left side panel
  B(kShelfDesker, 1.0, 68.2, 29.8, whiteSteelMat, 37.5, 8.8, 0, 0.1); // right side panel
  B(kShelfDesker, 37.2, 67.6, 1.4, whiteSteelMat, -18.8, 9.1, 14.6, 0.2); // left door
  B(kShelfDesker, 37.2, 67.6, 1.4, whiteSteelMat, 18.8, 9.1, 14.6, 0.2); // right door
  B(kShelfDesker, 1.2, 11.0, 1.2, chromeMetal, -2.4, 48, 15.6, 0.2); // left handle
  B(kShelfDesker, 1.2, 11.0, 1.2, chromeMetal, 2.4, 48, 15.6, 0.2); // right handle
  addShelfDisplayItems(kShelfDesker, 78.8, 126.8, 173.8);

  // Model B (Toggleable IKEA Store Pick): IKEA IVAR 이바르 소나무 5단 선반 (89×30×179cm · 123,900원) + BRANÄS 라탄바구니 2개
  const kShelfIvar = new THREE.Group();
  kShelfIvar.name = 'K IKEA IVAR Pine 5-Tier Shelf 89x30x179 + 2 BRANAS Rattan Baskets';
  kShelfIvar.visible = false;
  kShelfGroup.add(kShelfIvar);
  for (const sx of [-42.8, 42.8]) {
    for (const sz of [-13.6, 13.6]) {
      B(kShelfIvar, 3.0, 179, 2.6, pineSolidMat, sx, 0, sz, 0.25);
    }
    for (const rungY of [18, 52, 88, 126, 164]) {
      B(kShelfIvar, 2.4, 2.2, 25, pineSolidMat, sx, rungY, 0, 0.2);
    }
  }
  // OBSERVATÖR metal cross-brace on back
  dRod(kShelfIvar, [-42, 24, -14.2], [42, 158, -14.2], 0.28, chromeMetal);
  dRod(kShelfIvar, [42, 24, -14.2], [-42, 158, -14.2], 0.28, chromeMetal);
  for (const sy of [8, 46, 86, 128, 170]) {
    B(kShelfIvar, 83.0, 1.8, 29.5, pineSolidMat, 0, sy, 0, 0.22);
  }
  // 2 BRANÄS rattan baskets (32×34×32cm · 801.731.53) on bottom shelf (y=9.8cm)
  B(kShelfIvar, 32, 32, 29, mat.rattan, -20, 9.8, 0.5, 0.8);
  B(kShelfIvar, 32, 32, 29, mat.rattan, 20, 9.8, 0.5, 0.8);
  // FJÄDERHARV storage boxes on 2nd shelf (y=47.8cm)
  B(kShelfIvar, 25, 16, 26, M('#282a2c', { roughness: 0.7 }), -20, 47.8, 0, 0.3);
  B(kShelfIvar, 25, 16, 26, M('#e6e2d8', { roughness: 0.7 }), 18, 47.8, 0, 0.3);
  addShelfDisplayItems(kShelfIvar, 87.8, 129.8, 171.8);

  // ============================================================================
  // 8. 복도 벽면 디즈니 모아나 파노라마 퍼즐 액자 (가로 43.5 × 세로 17.5cm)
  //    (사용자 지정: "모아나 사진 바꾸줘 / 모아나 퍼즐 사이즈는 가로 43.5 세로 17.5 래요,,")
  // ============================================================================
  const moanaHallArt = dPlace(854, 439.5, 0, -1, grpI);
  moanaHallArt.name = 'I/K Disney Moana Panorama Puzzle Frame 43.5x17.5cm';
  moanaHallArt.userData = {
    wallMounted: true,
    centerCm: [854, 439.5, 148],
    dimensions: [43.5, 17.5, 2.2]
  };
  if (wallDecor) wallDecor.push(moanaHallArt);
  // Warm oak wood puzzle frame (outer 46.5 × 20.5 × 2.2cm, centered at y=148cm => bottom at y=137.75cm) + crisp white inner mat
  B(moanaHallArt, 46.5, 20.5, 2.2, holmerudOak, 0, 137.75, 1.1, 0.18);
  B(moanaHallArt, 44.5, 18.5, 0.3, popoWhite, 0, 138.75, 2.15, 0.06);
  const moanaTex = new THREE.TextureLoader().load('selection-assets/moana-puzzle-43x17.jpg');
  moanaTex.colorSpace = THREE.SRGBColorSpace;
  const moanaPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(cm(43.5), cm(17.5)),
    new THREE.MeshStandardMaterial({ map: moanaTex, roughness: 0.28 })
  );
  moanaPlane.position.set(0, cm(148), cm(2.35));
  moanaHallArt.add(moanaPlane);

  // ============================================================================
  // 9. 욕실 문 앞 바다 물결 터프팅 발매트 (루시아이 바다 물결 터프팅 러그 워셔블 발매트 · 60×80cm · 21,900원 · 오늘의집 2918881)
  //    (사용자 지정: "하늘색 부분 발수건 나 귀여운거 찾아서 그거 해줘 / https://store.ohou.se/goods/2918881")
  // ============================================================================
  const bathWaveMat = placeI(962, 435.5, 0);
  bathWaveMat.name = 'I/K Luciai Ocean Wave Tufted Bath Mat 60x80cm 2918881';
  bathWaveMat.userData = {
    productId: '2918881',
    productName: '루시아이 바다 물결 터프팅 러그 워셔블 발매트 · 소형 (60×80cm)',
    url: 'https://store.ohou.se/goods/2918881',
    dimensions: [60, 80, 1.4],
    price: 21900,
    shipping: 3000
  };
  const waveMatTex = canvasTex(512, 768, (g, w, h) => {
    // Deep ocean blue base on the right (bathroom door side) transitioning to sky blue & white seafoam waves on the left (hallway side)
    g.fillStyle = '#0d4ca3';
    g.fillRect(0, 0, w, h);
    const bands = [
      { xBase: 0.82, amp1: 0.08, amp2: 0.05, col: '#1c6bc7' },
      { xBase: 0.68, amp1: 0.09, amp2: 0.06, col: '#4e93dc' },
      { xBase: 0.56, amp1: 0.08, amp2: 0.05, col: '#94c3ee' },
      { xBase: 0.44, amp1: 0.09, amp2: 0.05, col: '#f4f1e8' },
      { xBase: 0.33, amp1: 0.07, amp2: 0.04, col: '#2d7bd1' },
      { xBase: 0.22, amp1: 0.07, amp2: 0.04, col: '#8abbe8' },
      { xBase: 0.12, amp1: 0.06, amp2: 0.03, col: '#f6f3eb' }
    ];
    for (const b of bands) {
      g.fillStyle = b.col;
      g.beginPath();
      g.moveTo(0, 0);
      for (let py = 0; py <= h; py += 8) {
        const t = py / h;
        const wx =
          (b.xBase +
            Math.sin(t * Math.PI * 2.4 + 0.5) * b.amp1 +
            Math.cos(t * Math.PI * 5.2) * b.amp2) *
          w;
        g.lineTo(wx, py);
      }
      g.lineTo(0, h);
      g.closePath();
      g.fill();
    }
    // Tufted yarn pile grain
    const r = rnd(291);
    for (let i = 0; i < 42000; i++) {
      g.fillStyle = i % 2 ? 'rgba(255,255,255,0.14)' : 'rgba(12,48,102,0.12)';
      g.fillRect(r() * w, r() * h, 1.8, 2.2);
    }
  });
  // Organic wave-scalloped silhouette: straight East edge (+28cm against bathroom door threshold) and wavy West edge (-18..-30cm facing hallway)
  {
    const sh = new THREE.Shape();
    sh.moveTo(cm(28), cm(-39));
    sh.lineTo(cm(28), cm(39));
    sh.absarc(cm(22), cm(39), cm(6), 0, Math.PI / 2, false);
    sh.lineTo(cm(-18), cm(40));
    sh.bezierCurveTo(cm(-30), cm(36), cm(-32), cm(20), cm(-21), cm(8));
    sh.bezierCurveTo(cm(-12), cm(-2), cm(-31), cm(-16), cm(-29), cm(-28));
    sh.bezierCurveTo(cm(-27), cm(-38), cm(-14), cm(-40), cm(22), cm(-40));
    sh.closePath();
    const waveGeo = new THREE.ExtrudeGeometry(sh, {
      depth: cm(1.2),
      bevelEnabled: true,
      bevelThickness: cm(0.25),
      bevelSize: cm(0.25),
      bevelSegments: 2,
      curveSegments: 28
    });
    const uv = waveGeo.attributes.uv;
    const pos = waveGeo.attributes.position;
    for (let i = 0; i < uv.count; i++) {
      const u = (pos.getX(i) / cm(1) + 32) / 60;
      const v = (pos.getY(i) / cm(1) + 40) / 80;
      uv.setXY(i, Math.max(0, Math.min(1, u)), Math.max(0, Math.min(1, v)));
    }
    uv.needsUpdate = true;
    const waveMesh = new THREE.Mesh(
      waveGeo,
      M('#ffffff', { roughness: 0.92, map: waveMatTex })
    );
    waveMesh.rotation.x = Math.PI / 2;
    waveMesh.position.y = cm(1.3);
    waveMesh.castShadow = true;
    waveMesh.receiveShadow = true;
    bathWaveMat.add(waveMesh);
  }

  function setKShelfIvar(on) {
    const useIvar = !!on;
    kShelfDesker.visible = !useIvar;
    kShelfIvar.visible = useIvar;
    kShelfGroup.userData.isIvar = useIvar;
    kShelfGroup.userData.dimensions = useIvar ? [89, 30, 179] : [80, 32, 174];
    kShelfGroup.userData.bounds = useIvar ? [758, 788, 667.5, 756.5] : [757, 789, 672, 752];
    kShelfGroup.userData.price = useIvar ? 173700 : 306000;
  }

  // Apply I안 vs K안 coordinates cleanly without mutating other plans
  function applyIKLayout(mode) {
    const isK = mode === 'K';
    if (isK) {
      // 1. 다이닝 테이블: 천장 펜던트 등을 없애고 와인색 상향등(PS 2026)이 턴테이블 수납장과 식탁 사이(474, 484)에 들어오도록 (596, 488) 배치
      diningStockholm.position.set(cm(596), 0, cm(488));
      diningTonstad.position.set(cm(545), 0, cm(488));
      // 2. 와인색 조명(IKEA PS 2026 다크레드 상향식플로어스탠드 Ø28×H182cm): 서쪽 벽면(474, 484)에 밀착 배치해 식탁 서쪽 PS 2026 접이식의자와도 간섭 없음
      sambordLamp.position.set(cm(474), 0, cm(484));
      psRedHead.rotation.set(0.08, 0, -0.18);
      // 3. 포엥 암체어 2개: 서쪽 벽(원래 무지 SUS 자리 · x=495, z=632 & 708)으로 배치, 남측 베이지 의자가 외켄산드 스탠드와 겹치지 않도록 각도(90°) 및 간격 조정
      poangYellow.position.set(cm(495), 0, cm(632));
      poangYellow.rotation.y = (82 * Math.PI) / 180;
      poangRed.position.set(cm(495), 0, cm(708));
      poangRed.rotation.y = (90 * Math.PI) / 180;
      // 4. 암체어 앞 홀메루드 커피테이블: 사용자 요청("연두색은 일단 빼 놓을까?")에 따라 제외(숨김)
      holmerud.visible = false;
      // 5. 외켄산드 플로어스탠드(보라색 동그라미): 베이지 포엥 암체어(z=708)와 크리스마스트리(538, 852) 사이 서쪽 벽 콘센트 옆 오픈 코너(474, 780)에 여유 있게 배치
      okensand.position.set(cm(474), 0, cm(780));
      // 6. 트리 & 몬스테라: 외켄산드 스탠드와 겹치지 않도록 남서 사선 창문 중앙 쪽(538, 852 & 578, 882)으로 이동
      treeGroup.position.set(cm(538), 0, cm(852));
      fejkaPlant.position.set(cm(578), 0, cm(882));
      // 7. 무지 SUS 대체 선반장: 원래 암체어 자리였던 동쪽 벽(773, 718 · 월패드 남쪽)에 단독 깔끔하게 배치
      kShelfGroup.visible = true;
      kShelfGroup.position.set(cm(773), 0, cm(718));
    } else {
      // I안 원래 좌표 100% 그대로 복원
      diningStockholm.position.set(cm(568), 0, cm(492));
      diningTonstad.position.set(cm(529), 0, cm(492));
      poangYellow.position.set(cm(742), 0, cm(638));
      poangYellow.rotation.y = (-75 * Math.PI) / 180;
      poangRed.position.set(cm(742), 0, cm(748));
      poangRed.rotation.y = (-105 * Math.PI) / 180;
      holmerud.visible = false;
      okensand.position.set(cm(476), 0, cm(728));
      treeGroup.position.set(cm(476), 0, cm(796));
      fejkaPlant.position.set(cm(534), 0, cm(826));
      kShelfGroup.visible = false;
      sambordLamp.position.set(cm(756), 0, cm(693));
      psRedHead.rotation.set(0.06, 0, 0.18);
    }
  }

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
    nightAcc,
    vanityKyrreStool,
    ps2026Chair,
    ps2026Chair2,
    moanaHallArt,
    bathWaveMat,
    kShelfGroup,
    kShelfDesker,
    kShelfIvar,
    setKShelfIvar,
    applyIKLayout
  };
}

