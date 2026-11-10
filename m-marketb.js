// M안: 마켓비 CHAKOC 선반 850 넓은 5단 중심 인테리어 홈스타일링 (2026-11-10)
// 1) 서쪽 벽 메인(x=474, z=685): 마켓비 CHAKOC 선반 850 넓은 5단 (85×40×155cm · 실버 스틸 프레임 + 오크 우드 선반 5단 + 후면 X자 지지대)
//    - 1단(최상단): 세라믹 아치 오브제 + 미니 토분 화분(몬스테라) + 우드 미니 액자
//    - 2단(눈높이 골든존): 마켓비 LINDER 단스탠드 E26 (버터옐로우 돔 쉐이드 + 실제 은은한 포인트 라이트) + 패브릭 양장본 북스택 5권
//    - 3단(홈카페 존): 원목 트레이 + 유리 V60 드립서버 + 세라믹 드리퍼 + 블랙 구스넥 드립포트 + 핸드그라인더 + 머그 2개 + 원두 캐니스터
//    - 4단(수납 바스켓 존): 마켓비 콘티노 폴딩바스켓 2개 병렬 수납 (35×35×28cm)
//    - 5단(최하단 안정감 존): 마켓비 리루아 슬라이딩 1문 락커 수납함 2개 병렬 수납 (35×35×32cm)
//    - 측면: S자 메탈 고리 + 캔버스 에코백 & 오버이어 헤드폰
// 2) 선반 남측 코너(x=474, z=765): 마켓비 RUSTA 장스탠드 E14/E26 (H153cm 관절형 플로어스탠드)
// 3) 북서 다이닝 존(x=570, z=490): 마켓비 아나타 원형테이블(Ø80cm) + 아나타 체어 2인 세트
// 4) 동쪽 벽 휴식 존(x=750, z=700): 마켓비 니스코 라운지체어 (1인 안락의자) + 마켓비 이지보 툴프리 3단 트롤리 카트(x=755, z=625)
// 5) 거실 바닥: 노미아(NOMIA) t4 - 시폰 러그 M (150×200cm)

export function buildMMarketBLayout({
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
  addAccent,
  wallDecor
}) {
  const grpM = new THREE.Group();
  grpM.name = 'M MarketB CHAKOC 850 5-Tier Shelf & Home Styling';
  grpM.visible = false;
  scene.add(grpM);

  // 재질 팔레트
  const mOak = dWood('#cca775', '#9f7747');
  const mLightOak = dWood('#d6b689', '#ab8657');
  const mSteel = M('#cfd3d6', { metalness: 0.85, roughness: 0.22 });
  const mChrome = M('#e0e4e6', { metalness: 0.92, roughness: 0.12 });
  const mBlack = M('#252728', { roughness: 0.6 });
  const mWhite = M('#f4f5f6', { roughness: 0.35 });
  const mCeramic = M('#f8f6f0', { roughness: 0.25 });
  const mGlass = M('#e8f4f8', { roughness: 0.1, transparent: true, opacity: 0.55 });
  const mFabricIvory = M('#eee8dd', { roughness: 0.88 });
  const mFabricBeige = M('#ded5c4', { roughness: 0.85 });
  const mButterYellow = M('#f5df97', { roughness: 0.3 });
  const mTerracotta = M('#c26143', { roughness: 0.8 });
  const mForestGreen = M('#3b644b', { roughness: 0.75 });
  const mNavy = M('#2b415a', { roughness: 0.75 });

  function placeM(x, z, rotY = 0) {
    const g = new THREE.Group();
    g.__planPlaced = true;
    g.position.set(cm(x), 0, cm(z));
    g.rotation.y = rotY;
    grpM.add(g);
    return g;
  }

  // ============================================================================
  // 1. 메인: 마켓비 CHAKOC 선반 850 넓은 5단 (85 × 40 × 155cm)
  //    위치: 서쪽 벽(x=474, z=685, rotY=Math.PI/2) — 로컬 기준 x: -42.5..42.5, z: 0..40(방 안쪽)
  // ============================================================================
  const chakoc = placeM(474, 685, Math.PI / 2);
  chakoc.name = 'M MarketB CHAKOC Shelf 850 5-Tier 85x40x155';
  chakoc.userData = {
    dimensions: [85, 40, 155],
    bounds: [454, 494, 642.5, 727.5],
    role: '마켓비 CHAKOC 850 넓은 5단 메인 선반 & 홈카페·오브제·수납 스타일링'
  };

  // 1-1. 4개 수직 스틸 기둥 (폭 85cm: x = -41.5, +41.5 / 깊이 40cm: z = 1.5, 38.5)
  const legPositions = [
    [-41.5, 1.5],
    [41.5, 1.5],
    [-41.5, 38.5],
    [41.5, 38.5]
  ];

  for (const [lx, lz] of legPositions) {
    // 하부 다리 조절 글라이드 (검정 러버 + 실버 나사)
    CY(chakoc, 1.6, 1.6, 1.2, mBlack, lx, 0, lz, 20);
    CY(chakoc, 0.7, 0.7, 1.5, mSteel, lx, 1.2, lz, 16);
    // 메인 스틸 수직 파이프 (직경 1.8cm, 높이 153cm)
    CY(chakoc, 0.85, 0.85, 152.3, mSteel, lx, 2.7, lz, 20);
    // 기둥 상단 마감 캡
    CY(chakoc, 0.9, 0.9, 0.6, mSteel, lx, 155, lz, 20);
  }

  // 1-2. 측면 사다리형 수평 가로대 (선반 지지 및 소품 걸이용 레일)
  // 좌측(x = -41.5)과 우측(x = 41.5) 각각 8단 수평 와이어
  const ladderHeights = [14, 31.5, 49, 66.5, 84, 101.5, 119, 136.5, 154];
  for (const hy of ladderHeights) {
    // 좌측 가로대
    dRod(chakoc, [-41.5, hy, 1.5], [-41.5, hy, 38.5], 0.35, mSteel);
    // 우측 가로대
    dRod(chakoc, [41.5, hy, 1.5], [41.5, hy, 38.5], 0.35, mSteel);
  }

  // 1-3. 후면 X자 교차 와이어 지지대 (Cross-brace: CHAKOC의 상징적 디테일)
  // 뒷면 z = 1.5cm 평면 상에서 대각선 교차
  dRod(chakoc, [-41, 18, 1.5], [41, 150, 1.5], 0.28, mChrome);
  dRod(chakoc, [-41, 150, 1.5], [41, 18, 1.5], 0.28, mChrome);
  // X자 중앙 결합 원형 볼트 (y = 84cm)
  CY(chakoc, 1.2, 1.2, 0.8, mSteel, 0, 83.6, 1.5, 16);

  // 1-4. 5단 오크 우드 선반 (두께 1.8cm, 폭 84cm, 깊이 38.4cm)
  // 선반 높이: 14cm(1단), 49cm(2단), 84cm(3단), 119cm(4단), 154cm(5단)
  const shelfHeights = [14, 49, 84, 119, 154];
  for (const sy of shelfHeights) {
    // 우드 선반 보드
    B(chakoc, 84.4, 1.8, 38.2, mOak, 0, sy, 20, 0.2);
    // 선반 네 코너 결합 메탈 브래킷 (실버 클립)
    for (const [kx, kz] of legPositions) {
      B(chakoc, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.2, kz, 0.15);
    }
  }

  // ============================================================================
  // [선반 1단: 최상단 y = 155.8cm] 시선이 닿는 감성 오브제 & 미니 식물
  // ============================================================================
  // 1단 A. 세라믹 화이트 아치 오브제 (x = -24, z = 20 · 수직으로 우뚝 선 아치 링)
  {
    const archMat = mCeramic;
    const archGroup = new THREE.Group();
    archGroup.position.set(cm(-24), cm(155.8 + 7.5), cm(20));
    archGroup.rotation.x = Math.PI / 2;
    chakoc.add(archGroup);
    CY(archGroup, 7.5, 7.5, 2.2, archMat, 0, -1.1, 0, 28);
    // 내부 뚫린 구멍 표현
    CY(archGroup, 4.5, 4.5, 2.4, M('#dcdcd8', { roughness: 0.5 }), 0, -1.2, 0, 24);
  }
  // 1단 B. 미니 토분 화분 + 몬스테라 잎 (x = 3, z = 20)
  {
    CY(chakoc, 5.0, 3.8, 8.5, mTerracotta, 3, 155.8, 20, 24); // 테라코타 토분
    CY(chakoc, 4.7, 4.7, 1.0, M('#3e2b1f', { roughness: 0.9 }), 3, 163.5, 20, 20); // 흙
    // 싱그러운 잎 3장
    for (const [deg, lx, lz, ly] of [[-30, -2, -1, 168], [40, 2, 2, 171], [150, 0, -2, 169]]) {
      const leaf = new THREE.Group();
      leaf.position.set(cm(3 + lx), cm(ly), cm(20 + lz));
      leaf.rotation.y = deg * Math.PI / 180;
      chakoc.add(leaf);
      B(leaf, 7, 0.2, 5.5, mForestGreen, 0, 0, 0, 0.3);
      dRod(leaf, [0, -4, 0], [0, 0, 0], 0.18, mForestGreen);
    }
  }
  // 1단 C. 우드 미니 액자 (x = 24, z = 18, 살짝 비스듬히)
  {
    const artMini = new THREE.Group();
    artMini.position.set(cm(24), cm(155.8), cm(18));
    artMini.rotation.y = -0.15;
    chakoc.add(artMini);
    B(artMini, 18, 14, 1.4, mLightOak, 0, 0, 0, 0.2); // 프레임
    B(artMini, 15, 11, 0.3, M('#fbf8f2', { roughness: 0.3 }), 0, 1.5, 0.6); // 캔버스
    // 추상 컬러 그래픽
    CY(artMini, 3.2, 3.2, 0.1, mButterYellow, -2, 7, 0.8, 20);
    B(artMini, 5, 5, 0.1, mNavy, 3, 5, 0.8);
  }

  // ============================================================================
  // [선반 2단: 눈높이 골든존 y = 120.8cm] 마켓비 LINDER 단스탠드 + 북엔드 & 양장본
  // ============================================================================
  // 2단 A. 마켓비 LINDER 단스탠드 E26 (x = -22, z = 22 · 버터 옐로우 돔 램프)
  {
    const linder = new THREE.Group();
    linder.name = 'MarketB LINDER Table Lamp E26';
    linder.position.set(cm(-22), cm(120.8), cm(22));
    chakoc.add(linder);

    // 원형 베이스 (지름 16cm, 높이 1.6cm)
    CY(linder, 8, 8, 1.6, mButterYellow, 0, 0, 0, 28);
    // 슬림 스탠드 폴 (높이 19cm)
    CY(linder, 0.7, 0.7, 19, mChrome, 0, 1.6, 0, 16);
    // 반구형(돔) 쉐이드 (지름 20cm, 버터 옐로우)
    const domeMat = new THREE.MeshStandardMaterial({
      color: '#f5df97',
      emissive: '#ffd982',
      emissiveIntensity: 0.15,
      roughness: 0.28
    });
    const pts = [
      [1.2, 20.0], [5.0, 20.5], [9.0, 22.0], [10.0, 24.5],
      [8.5, 27.0], [5.5, 28.2], [0, 28.5]
    ].map(p => new THREE.Vector2(cm(p[0]), cm(p[1])));
    const dome = new THREE.Mesh(new THREE.LatheGeometry(pts, 32), domeMat);
    dome.castShadow = true;
    linder.add(dome);
    // 쉐이드 내부 전구 및 실제 포인트 라이트
    CY(linder, 2.0, 2.0, 3.2, M('#ffffff', { emissive: '#ffecba', emissiveIntensity: 0.8 }), 0, 20.5, 0, 16);
    const linderLight = new THREE.PointLight('#ffe4b5', 0.85, 2.6, 1.8);
    linderLight.position.set(0, cm(19.5), 0);
    linder.add(linderLight);
    if (addAccent) addAccent(linderLight, domeMat, 0.9, 1.8);
  }

  // 2단 B. 북엔드 & 패브릭 양장본 북스택 5권 (x = 8..28, z = 20)
  {
    // 스틸 북엔드
    B(chakoc, 0.3, 18, 14, mSteel, 4, 120.8, 20);
    B(chakoc, 7, 0.3, 14, mSteel, 7.5, 120.8, 20);
    // 5권의 책 (다채로운 패브릭 양장 커버)
    const bookColors = [mNavy, mTerracotta, mForestGreen, mFabricIvory, mButterYellow];
    const bookWidths = [3.8, 4.2, 3.5, 4.5, 3.2];
    let curX = 6.5;
    for (let i = 0; i < 5; i++) {
      const bw = bookWidths[i];
      B(chakoc, bw, 20 - (i % 2) * 2, 17, bookColors[i], curX + bw / 2, 120.8, 20, 0.15);
      // 속지 화이트
      B(chakoc, bw - 0.6, 19 - (i % 2) * 2, 16, M('#fdfbf7', { roughness: 0.9 }), curX + bw / 2, 121.2, 20);
      curX += bw + 0.4;
    }
  }

  // ============================================================================
  // [선반 3단: 홈카페 존 y = 85.8cm] 핸드드립 세트 + 머그잔 + 원두 캐니스터
  // ============================================================================
  // 3단 A. 원목 서빙 트레이 (x = -12, z = 20 · 40×26cm)
  B(chakoc, 40, 1.8, 26, mLightOak, -12, 85.8, 20, 0.3);
  // 3단 B. 하리오 유리 V60 드립서버 + 세라믹 드리퍼 (x = -22, z = 20)
  CY(chakoc, 3.8, 5.2, 10.5, mGlass, -22, 87.6, 20, 24); // 투명 유리 서버
  CY(chakoc, 5.5, 3.2, 7.0, mWhite, -22, 98.1, 20, 24); // 화이트 세라믹 드리퍼
  dRod(chakoc, [-22, 91, 25.5], [-22, 96, 25.5], 0.4, mGlass); // 유리 손잡이
  // 3단 C. 블랙 슬림 구스넥 드립포트 (x = -7, z = 18)
  CY(chakoc, 4.5, 5.5, 11, mBlack, -7, 87.6, 18, 24); // 포트 바디
  CY(chakoc, 3.5, 3.5, 1.0, mLightOak, -7, 98.6, 18, 20); // 원목 뚜껑 손잡이
  dRod(chakoc, [-7, 90, 24], [-7, 96, 24], 0.45, mBlack); // 손잡이
  dRod(chakoc, [-7, 89, 12], [-11, 95, 8], 0.35, mBlack); // 얇고 긴 구스넥 주둥이
  // 3단 D. 메탈 핸드 그라인더 (x = 3, z = 22)
  CY(chakoc, 2.6, 2.6, 14, mChrome, 3, 87.6, 22, 20);
  dRod(chakoc, [3, 101.6, 22], [8, 101.6, 24], 0.35, mSteel); // 회전 레버
  CY(chakoc, 1.0, 1.0, 2.5, mOak, 8, 100.5, 24, 16); // 원목 노브
  // 3단 E. 화이트 머그잔 2개 (x = 18, z = 16 & 25)
  CY(chakoc, 3.5, 3.2, 7.5, mWhite, 18, 85.8, 16, 20);
  CY(chakoc, 3.5, 3.2, 7.5, mCeramic, 18, 85.8, 25, 20);
  // 3단 F. 원두 틴 캐니스터 2개 (x = 28, z = 20)
  CY(chakoc, 4.0, 4.0, 11, mNavy, 28, 85.8, 16, 24);
  CY(chakoc, 4.2, 4.2, 1.2, mLightOak, 28, 96.8, 16, 24);
  CY(chakoc, 3.6, 3.6, 9.5, mForestGreen, 28, 85.8, 25, 24);
  CY(chakoc, 3.8, 3.8, 1.2, mLightOak, 28, 95.3, 25, 24);

  // ============================================================================
  // [선반 4단: 수납 바스켓 존 y = 50.8cm] 마켓비 콘티노 폴딩바스켓 2개 병렬
  // ============================================================================
  // 규격: 가로 35 × 세로 35 × 높이 28cm (2개 병렬 x = -20, +20)
  for (const bx of [-20.5, 20.5]) {
    const basket = new THREE.Group();
    basket.position.set(cm(bx), cm(50.8), cm(20));
    chakoc.add(basket);
    // 바스켓 외형 (아이보리 패브릭/무광 플라스틱 질감)
    B(basket, 35, 26, 35, mFabricBeige, 0, 0, 0, 0.8);
    // 내부 빈 공간
    B(basket, 32.6, 25.5, 32.6, M('#cfc6b5', { roughness: 0.9 }), 0, 0.8, 0, 0.4);
    // 전면 손잡이 타원 구멍 (블랙 포인트)
    B(basket, 9, 2.8, 0.6, mBlack, 0, 19, 17.6, 1.2);
  }

  // ============================================================================
  // [선반 5단: 최하단 안정감 존 y = 15.8cm] 마켓비 리루아 슬라이딩 1문 락커 수납함 2개 병렬
  // ============================================================================
  // 규격: 가로 35 × 세로 35 × 높이 32cm (2개 병렬 x = -20.5, +20.5)
  for (const lx of [-20.5, 20.5]) {
    const locker = new THREE.Group();
    locker.position.set(cm(lx), cm(15.8), cm(20));
    chakoc.add(locker);
    // 락커 본체 (화이트 파우더코팅 스틸 박스)
    B(locker, 35, 31.5, 35, mWhite, 0, 0, 0, 0.5);
    // 전면 슬라이딩 도어 프레임 라인
    B(locker, 33.6, 30.2, 0.8, M('#ebece8', { roughness: 0.35 }), 0, 0.6, 17.6, 0.2);
    // 락커 손잡이 & 명찰 포켓 (크롬 실버)
    B(locker, 5.0, 1.8, 1.2, mChrome, 8, 18, 18.2, 0.2);
    B(locker, 6.5, 3.5, 0.2, mChrome, -6, 22, 18.1); // 라벨 홀더
  }

  // 1-5. 측면 프레임 디테일: S자 고리에 걸린 캔버스 에코백 & 헤드폰
  {
    // 좌측 가로대(y = 101.5cm, x = -41.5cm, z = 18cm)
    dRod(chakoc, [-41.5, 102.5, 18], [-42.5, 99.5, 18], 0.25, mChrome); // S고리
    // 캔버스 에코백 (내추럴 아이보리)
    B(chakoc, 2.5, 26, 22, mFabricIvory, -43, 72, 18, 1.5);
    // 우측 가로대(y = 84cm, x = 41.5cm, z = 24cm)
    dRod(chakoc, [41.5, 85, 24], [42.5, 82, 24], 0.25, mChrome);
    // 오버이어 무선 헤드폰 (매트 블랙)
    CY(chakoc, 5.5, 5.5, 2.0, mBlack, 43.5, 74, 21, 20); // 좌 이어컵
    CY(chakoc, 5.5, 5.5, 2.0, mBlack, 43.5, 74, 27, 20); // 우 이어컵
    dRod(chakoc, [43.5, 77, 21], [43.5, 82, 24], 0.45, mBlack); // 헤드밴드
    dRod(chakoc, [43.5, 82, 24], [43.5, 77, 27], 0.45, mBlack);
  }

  // ============================================================================
  // 2. 선반 남측 코너: 마켓비 RUSTA 장스탠드 E14/E26 (153cm 관절형 플로어스탠드)
  //    위치: 서쪽 벽(x = 474, z = 765) — 선반과 창가 사이
  // ============================================================================
  const rustaFloor = placeM(474, 765, 0);
  rustaFloor.name = 'M MarketB RUSTA Floor Lamp E26 H153';
  rustaFloor.userData = {
    dimensions: [32, 32, 153],
    bounds: [458, 490, 749, 781],
    role: '마켓비 RUSTA 관절형 플로어 장스탠드 (H153cm)'
  };
  // 묵직한 원형 베이스 (지름 28cm)
  CY(rustaFloor, 14, 14, 2.6, mBlack, 0, 0, 0, 32);
  // 하부 수직 폴
  CY(rustaFloor, 1.1, 1.1, 95, mBlack, 0, 2.6, 0, 20);
  // 중간 관절 힌지 (실버 크롬)
  CY(rustaFloor, 1.8, 1.8, 2.5, mChrome, 0, 97.6, 0, 20);
  // 상부 기울어진 암 (암 각도 -25도)
  dRod(rustaFloor, [0, 99, 0], [6, 142, 6], 0.95, mBlack);
  // 헤드 소켓 힌지
  CY(rustaFloor, 1.6, 1.6, 2.2, mChrome, 6, 143, 6, 16);
  // 돔형 쉐이드 (지름 18cm, 아래/선반 쪽으로 비스듬히 향함)
  const shadeGroup = new THREE.Group();
  shadeGroup.position.set(cm(6), cm(144), cm(6));
  shadeGroup.rotation.x = 0.4;
  shadeGroup.rotation.z = -0.3;
  rustaFloor.add(shadeGroup);
  CY(shadeGroup, 9, 4.5, 14, mBlack, 0, 0, 0, 24);
  // 은은한 플로어 포인트 라이트
  const rustaLight = new THREE.PointLight('#ffe4b0', 0.9, 3.2, 1.7);
  rustaLight.position.set(0, -cm(4), 0);
  shadeGroup.add(rustaLight);
  if (addAccent) addAccent(rustaLight, mBlack, 0.95, 2.0);

  // ============================================================================
  // 3. 북서 다이닝 존: 마켓비 아나타 원형테이블(Ø80cm) + 아나타 체어 2인 세트
  //    중심: x = 585, z = 490 (원목/화이트 다이닝 2인 홈카페)
  // ============================================================================
  const diningGroup = placeM(585, 490, 0);
  diningGroup.name = 'M MarketB ANATA Round Table D80 & 2 Chairs';
  diningGroup.userData = {
    dimensions: [80, 80, 74],
    bounds: [545, 625, 450, 530],
    role: '마켓비 아나타 원형테이블 Ø80cm + 아나타 체어 2인 세트'
  };
  // 원형 테이블 상판 (지름 80cm, 두께 2.2cm, 화이트/오크 상판)
  CY(diningGroup, 40, 40, 2.2, mWhite, 0, 71.8, 0, 36);
  // 상판 하부 지지 프레임
  CY(diningGroup, 22, 22, 1.8, mOak, 0, 70, 0, 24);
  // 4개 원목 다리 (살짝 바깥으로 벌어진 각도)
  for (const [deg, dx, dz] of [[45, 18, 18], [135, -18, 18], [225, -18, -18], [315, 18, -18]]) {
    dRod(diningGroup, [dx * 0.45, 70, dz * 0.45], [dx, 0, dz], 1.6, mOak);
  }
  // 테이블 위 작은 세라믹 화병 + 꽃 한 송이
  CY(diningGroup, 2.2, 3.2, 9, mCeramic, 0, 74, 0, 20);
  dRod(diningGroup, [0, 83, 0], [1, 91, 1], 0.25, mForestGreen);
  CY(diningGroup, 2.0, 0.5, 1.5, mButterYellow, 1, 91, 1, 16);

  // 아나타 체어 2개 (동·서 마주보기: x = -36, +36)
  for (const [cx, rot] of [[-36, Math.PI / 2], [36, -Math.PI / 2]]) {
    const ch = new THREE.Group();
    ch.position.set(cm(cx), 0, 0);
    ch.rotation.y = rot;
    diningGroup.add(ch);
    // 좌판 (화이트 곡면 시트 44×42×2cm, 좌고 44cm)
    B(ch, 42, 2.2, 40, mWhite, 0, 43.8, 0, 0.8);
    // 패브릭 방석 쿠션 (그레이/베이지)
    B(ch, 38, 2.5, 36, mFabricIvory, 0, 46, 0, 1.2);
    // 등받이 (곡면 패널)
    B(ch, 40, 24, 2.0, mWhite, 0, 56, -18, 0.8);
    // 4개 슬림 원목 다리
    for (const [lx, lz] of [[-17, -15], [17, -15], [-17, 15], [17, 15]]) {
      dRod(ch, [lx * 0.8, 43.8, lz * 0.8], [lx, 0, lz], 1.4, mOak);
    }
  }

  // ============================================================================
  // 4. 동쪽 벽 휴식 존: 마켓비 니스코 라운지체어 (1인 안락의자) + 이지보 3단 트롤리
  //    위치: 침실 문 남쪽(x = 750, z = 705, rotY = -Math.PI/2 서쪽 선반을 마주봄)
  // ============================================================================
  const niskoChair = placeM(750, 705, -Math.PI / 2);
  niskoChair.name = 'M MarketB NISKO Lounge Chair';
  niskoChair.userData = {
    dimensions: [68, 76, 78],
    bounds: [716, 784, 667, 743],
    role: '마켓비 니스코 1인 패브릭 라운지 안락의자'
  };
  // 원목 암레스트 프레임 (좌우 애쉬 오크 다리 & 팔걸이)
  for (const ax of [-31, 31]) {
    // 팔걸이 수평 바
    B(niskoChair, 3.8, 2.4, 62, mOak, ax, 52, 0, 0.4);
    // 앞뒤 다리
    dRod(niskoChair, [ax, 52, -24], [ax, 0, -28], 1.8, mOak);
    dRod(niskoChair, [ax, 52, 24], [ax, 0, 30], 1.8, mOak);
  }
  // 하부 좌판 지지 프레임
  B(niskoChair, 58, 3.2, 54, mOak, 0, 32, 2, 0.3);
  // 두툼하고 포근한 크림/베이지 좌방석 쿠션 (두께 12cm)
  B(niskoChair, 56, 12, 54, mFabricIvory, 0, 35, 2, 2.5);
  // 살짝 뒤로 기울어진 등받이 쿠션 (두께 10cm, 높이 46cm)
  const backCushion = new THREE.Group();
  backCushion.position.set(0, cm(46), -cm(18));
  backCushion.rotation.x = -0.22;
  niskoChair.add(backCushion);
  B(backCushion, 56, 42, 10, mFabricIvory, 0, 0, 0, 2.5);
  // 테라코타 포인트 쿠션 하나
  B(backCushion, 36, 26, 7, mTerracotta, 0, 4, 7, 2.0);

  // 4-2. 마켓비 이지보 툴프리 트롤리 카트 3단 리베라오크 (x = 755, z = 625)
  const trolley = placeM(755, 625, 0);
  trolley.name = 'M MarketB EASYBO Tool-Free 3-Tier Trolley Rivera Oak';
  trolley.userData = {
    dimensions: [45, 32, 75],
    bounds: [732.5, 777.5, 609, 641],
    role: '마켓비 이지보 툴프리 3단 이동식 트롤리 카트'
  };
  // 4개 바퀴 캐스터
  for (const [tx, tz] of [[-18, -12], [18, -12], [-18, 12], [18, 12]]) {
    CY(trolley, 1.8, 1.8, 1.2, mBlack, tx, 0, tz, 16);
    CY(trolley, 0.6, 0.6, 3.0, mSteel, tx, 1.2, tz, 12);
  }
  // 3단 오크 선반 트레이 (1단 4cm, 2단 38cm, 3단 70cm)
  for (const ty of [4, 38, 70]) {
    B(trolley, 42, 4.5, 28, mOak, 0, ty, 0, 0.5);
  }
  // 좌우 수직 핸들 프레임
  for (const tx of [-20, 20]) {
    CY(trolley, 0.9, 0.9, 72, mSteel, tx, 3, 0, 16);
  }
  dRod(trolley, [-20, 75, 0], [20, 75, 0], 0.9, mSteel); // 상단 이동 손잡이
  // 트롤리 상단 컵과 잡지
  CY(trolley, 3.5, 3.2, 7, mWhite, -8, 74.5, 0, 20);
  B(trolley, 16, 0.8, 22, mForestGreen, 8, 74.5, 0, 0.2);

  return {
    group: grpM,
    chakoc,
    rustaFloor,
    diningGroup,
    niskoChair,
    trolley
  };
}
