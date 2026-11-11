// M안: 마켓비 CHAKOC 선반 850 넓은 5단 중심 미드센추리 바이닐·쇼케이스·컬렉터 홈스타일링 (2026-11-11)
// 사용자 레퍼런스 5장 감도 완벽 반영 (차가운 사무용 흰색 락커·폴딩박스 제거 → 원목/라탄/유리 슬라이딩 미니수납장 + 버섯·골드·글로브 무드조명 + LP·턴테이블·위스키바 쇼케이스):
// 1) 서쪽 벽 메인(x=474, z=685): 마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85×40×155cm · 149,000원)
//    - 1단(최상단 y=153.8cm): 블랙 북쉘프 스피커 페어 + 중앙 턴테이블(오픈 아크릴 더스트커버·네이비 바이닐) + PLORN 유리화병 대형 몬스테라 잎 + 달항아리 노란 들꽃 + 우측 끝 마켓비 VALON 골드 플리츠 단스탠드(Ø24×35.5cm)
//    - 2단(눈높이 쇼케이스존 y=118.3cm): 마켓비 폴라보(POLABO) 미니수납장 양면 4문 CAM2260SL 캄포어베니어(60×26.5×22cm · 모루유리 슬라이딩 도어 + 내부 웜 핀조명 + SLATTIS 아날로그 시계·위스키/진 보틀·크리스탈 잔·엽서 콜라주) + 상판 니트 스택·미니 헬멧 + 좌측 아트 매거진 전면 거치 & 마켓비 DONOS 골드/오렌지 글로브 무드등(Ø14×15cm)
//    - 3단(바이닐 LP & 컬러팝 램프존 y=82.8cm): 좌측 12인치 LP 바이닐 26장 세로 수납 + 중앙 파스텔 핑크 시티팝 LP 자켓 전면(Face-out) 디스플레이 + 우측 마켓비 GUBON 미니 단스탠드 옐로우(Ø20×31cm 버섯 돔 램프) + 우드 관절 마네킹 & 그린 레트로 미니 시계 오브제
//    - 4단(우드 2서랍 & 진공관 앰프·트레이존 y=47.3cm): 마켓비 폴라보(POLABO) 미니수납장 2서랍 BSM2266 캄포어베니어(66.7×25×20.5cm) + 상판 마켓비 NEODA 우드트레이(28×20cm·드립서버·잔) & 블랙 레트로 진공관 앰프(주황 진공관 발광) + 우측 아트북 스택
//    - 5단(최하단 라탄 우드장 & LP존 y=11.8cm): 마켓비 벤탄(BENTAN) 미니수납장 낮은 2문 SHM2460 캄포어베니어(60×19.5×24cm · 케인 라탄 슬라이딩 도어) + 우측 LP 바이닐 18장 & 파스텔 핑크 미니멀 LP 커버
//    - 측면 기둥 디테일: 좌측 가로대에 매달린 원목 원숭이 피규어 + 우측 S고리 매트블랙 오버이어 헤드폰
// 2) 선반 북측 바닥 & 벽(x=474, z=618): 마켓비 심플리(SIMPLIE) 와이어 사이드테이블 블랙(35×35×35cm) + 전용 아크릴 상판(내부 매거진·상부 블랙 화분 플랜터) + 서쪽 벽 마켓비 ARTICO 50×70cm 미드센추리 캔버스액자
// 3) 선반 남측 코너(x=474, z=762): 마켓비 SODDE 장스탠드 E26 실버(H150cm 미드센추리 비대칭 콘 플로어램프)
// 4) 북서 다이닝 존(x=585, z=490): 마켓비 아나타 원형테이블(Ø80cm) + 아나타 체어 2인 세트
// 5) 동쪽 벽 휴식 존(x=750, z=705): 마켓비 니스코 라운지체어 + 마켓비 이지보 툴프리 3단 트롤리 카트(x=755, z=625)

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
  grpM.name = 'M MarketB CHAKOC 850 Curated Mid-Century & Vinyl Shelf Styling';
  grpM.visible = false;
  scene.add(grpM);

  // 재질 팔레트 (스틸 + 웜 캄포어/오크 우드 + 브라스 골드 + 팝 옐로우/오렌지/파스텔핑크/그린)
  const mOak = dWood('#cca673', '#9d7443');
  const mCamphor = dWood('#c59660', '#916537');
  const mLightBirch = dWood('#dcc096', '#b59264');
  const mWalnut = dWood('#7c5232', '#52331b');
  const mSteel = M('#cfd4d8', { metalness: 0.86, roughness: 0.22 });
  const mChrome = M('#e6eaed', { metalness: 0.94, roughness: 0.1 });
  const mGold = M('#cda34f', { metalness: 0.85, roughness: 0.24 });
  const mCopper = M('#c67c4e', { metalness: 0.8, roughness: 0.28 });
  const mBlack = M('#202224', { roughness: 0.52 });
  const mSpeakerBlack = M('#1b1c1e', { roughness: 0.62 });
  const mWhite = M('#f5f5f3', { roughness: 0.34 });
  const mCeramic = M('#faf8f2', { roughness: 0.2 });
  const mClearGlass = M('#eef6fa', { roughness: 0.08, transparent: true, opacity: 0.38 });
  const mAcrylic = M('#f4f8fb', { roughness: 0.06, transparent: true, opacity: 0.32 });
  const mFabricIvory = M('#eee8dc', { roughness: 0.88 });
  const mPopYellow = M('#f5c722', { roughness: 0.24, metalness: 0.08 });
  const mRetroGreen = M('#2d6b52', { roughness: 0.38 });
  const mTerracotta = M('#c45b3b', { roughness: 0.72 });
  const mLeafGreen = M('#2f5e39', { roughness: 0.58 });
  const mNavy = M('#243852', { roughness: 0.68 });
  const mBurgundy = M('#6e2b35', { roughness: 0.82 });

  // 모루/체커 유리 텍스처 (폴라보 유리 슬라이딩 도어용)
  const flutedGlassTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#dce7ec';
    g.fillRect(0, 0, 128, 128);
    for (let x = 0; x < 128; x += 8) {
      g.fillStyle = x % 16 === 0 ? 'rgba(255,255,255,0.65)' : 'rgba(160,185,198,0.35)';
      g.fillRect(x, 0, 4, 128);
    }
    for (let y = 0; y < 128; y += 16) {
      g.fillStyle = 'rgba(255,255,255,0.22)';
      g.fillRect(0, y, 128, 2);
    }
  });
  const mFlutedGlass = new THREE.MeshStandardMaterial({
    map: flutedGlassTex,
    roughness: 0.14,
    metalness: 0.05,
    transparent: true,
    opacity: 0.52
  });

  // 케인 라탄 위빙 텍스처 (벤탄 라탄 슬라이딩 도어용)
  const caneTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#d7b788';
    g.fillRect(0, 0, 128, 128);
    g.strokeStyle = '#bc9660';
    g.lineWidth = 3;
    for (let i = 0; i < 128; i += 16) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 128); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(128, i); g.stroke();
    }
    g.fillStyle = '#5a432b';
    for (let y = 8; y < 128; y += 16) {
      for (let x = 8; x < 128; x += 16) {
        g.beginPath(); g.arc(x, y, 3.2, 0, Math.PI * 2); g.fill();
      }
    }
  });
  const mCane = new THREE.MeshStandardMaterial({ map: caneTex, roughness: 0.72 });

  // 파스텔 핑크 시티팝 LP 앨범 커버 텍스처 (레퍼런스 사진 4 오마주)
  const pinkLpTex1 = canvasTex(256, 256, (g) => {
    const grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, '#f4dce4');
    grd.addColorStop(1, '#ecc8d6');
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 256);
    // 미니멀 시티팝 실루엣 & 타이포그래피
    g.fillStyle = '#2d2930';
    g.beginPath(); g.arc(128, 118, 56, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f2d3cb';
    g.beginPath(); g.arc(128, 128, 42, 0, Math.PI * 2); g.fill();
    // 컬리 헤어 디테일
    g.fillStyle = '#262228';
    for (const [cx, cy, r] of [[92,92,20],[115,80,22],[142,80,22],[165,94,19],[84,118,16],[172,118,16]]) {
      g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
    }
    // 눈동자와 분위기 있는 포즈
    g.fillStyle = '#262228';
    g.beginPath(); g.arc(113, 124, 3.5, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(143, 124, 3.5, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#d98a8c';
    g.fillRect(121, 146, 14, 5);
    // 상단 레코드 라벨 타이포
    g.fillStyle = '#5e4955';
    g.font = 'bold 15px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('SQUALL · CITY POP ARCHIVE', 128, 28);
    g.fillStyle = '#ffffff';
    g.fillRect(88, 206, 80, 38);
    g.fillStyle = '#d99aa8';
    g.fillRect(96, 214, 64, 22);
  });

  // 두 번째 파스텔 핑크 미니멀 LP 자켓 텍스처 (레퍼런스 사진 4 하단 오마주)
  const pinkLpTex2 = canvasTex(256, 256, (g) => {
    g.fillStyle = '#e7cad6';
    g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#2c262a';
    g.font = 'bold 14px sans-serif';
    g.textAlign = 'center';
    g.fillText('SCRATCH · THE CRUSADERS', 128, 46);
    g.fillStyle = '#8b838c';
    g.fillRect(92, 134, 72, 54);
    g.fillStyle = '#201e24';
    g.beginPath(); g.ellipse(115, 155, 18, 8, 0.5, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#b9b4d8';
    g.beginPath(); g.arc(136, 170, 9, 0, Math.PI * 2); g.fill();
  });

  // 아트 매거진 표지 텍스처 (레퍼런스 사진 1 좌상단 오마주)
  const artMagTex = canvasTex(256, 320, (g) => {
    g.fillStyle = '#e8e4dc';
    g.fillRect(0, 0, 256, 320);
    g.fillStyle = '#2d4459';
    g.fillRect(22, 54, 212, 220);
    g.fillStyle = '#d8cbb8';
    g.beginPath(); g.moveTo(22, 274); g.lineTo(135, 120); g.lineTo(234, 274); g.closePath(); g.fill();
    g.fillStyle = '#1f2326';
    g.font = 'bold 26px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('ARKITEKTUR', 128, 38);
  });

  // 미드센추리 지오메트릭 캔버스 액자 텍스처 (마켓비 ARTICO 33889 감성)
  const articoTex = canvasTex(256, 360, (g) => {
    g.fillStyle = '#f4efe6';
    g.fillRect(0, 0, 256, 360);
    // 파스텔 핑크 삼각형
    g.fillStyle = '#e7bec6';
    g.beginPath(); g.moveTo(24, 24); g.lineTo(88, 24); g.lineTo(56, 98); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(88, 24); g.lineTo(152, 24); g.lineTo(120, 98); g.closePath(); g.fill();
    // 딥 네이비 블록
    g.fillStyle = '#243a5e';
    g.fillRect(36, 128, 72, 54);
    g.fillRect(88, 214, 52, 68);
    g.beginPath(); g.moveTo(156, 26); g.lineTo(232, 98); g.lineTo(156, 98); g.closePath(); g.fill();
    // 웜 오커 & 올리브 포인트
    g.fillStyle = '#b9935a';
    g.fillRect(136, 136, 62, 58);
    g.fillRect(28, 224, 44, 96);
    g.fillStyle = '#8b998c';
    g.beginPath(); g.moveTo(158, 228); g.lineTo(232, 228); g.lineTo(232, 318); g.closePath(); g.fill();
  });

  // 아날로그 시계 다이얼 텍스처
  const clockFaceTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#faf7f0';
    g.fillRect(0, 0, 128, 128);
    g.strokeStyle = '#2c2a28';
    g.lineWidth = 3;
    g.strokeRect(8, 8, 112, 112);
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      g.beginPath();
      g.moveTo(64 + Math.cos(a) * 42, 64 + Math.sin(a) * 42);
      g.lineTo(64 + Math.cos(a) * 49, 64 + Math.sin(a) * 49);
      g.stroke();
    }
    g.lineWidth = 4;
    g.beginPath(); g.moveTo(64, 64); g.lineTo(64, 34); g.stroke();
    g.lineWidth = 2.5;
    g.beginPath(); g.moveTo(64, 64); g.lineTo(88, 72); g.stroke();
  });

  function placeM(x, z, rotY = 0) {
    const g = new THREE.Group();
    g.__planPlaced = true;
    g.position.set(cm(x), 0, cm(z));
    g.rotation.y = rotY;
    grpM.add(g);
    return g;
  }

  // LP 바이닐 묶음 생성 헬퍼
  const lpPalette = [
    '#22344a', '#c95c3e', '#d9a441', '#3b644b', '#e6cfd5',
    '#eae3d2', '#702c37', '#4a6b82', '#262729', '#c88b68',
    '#8c4a32', '#d45d79', '#525b44', '#f0e9dc'
  ];
  function addVinylRow(parent, xStart, xEnd, by, cz, seed = 11) {
    const r = rnd ? rnd(seed) : Math.random;
    let cx = xStart;
    let idx = 0;
    while (cx < xEnd - 0.7) {
      const thick = 0.55 + (r() * 0.35);
      const tilt = (idx % 7 === 5) ? 0.06 : 0;
      const col = M(lpPalette[idx % lpPalette.length], { roughness: 0.48 });
      const rec = new THREE.Group();
      rec.position.set(cm(cx + thick / 2), cm(by), cm(cz + (r() - 0.5) * 0.8));
      rec.rotation.z = tilt;
      parent.add(rec);
      B(rec, thick, 31.0 - (idx % 3) * 0.3, 31.0, col, 0, 0, 0, 0.06);
      // 레코드 옆면 속지 라인
      B(rec, thick * 0.5, 30.2, 30.4, mWhite, 0, 0.4, 0.2);
      cx += thick + 0.22;
      idx++;
    }
  }

  // ============================================================================
  // 1. 메인: 마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85 × 40 × 155cm)
  //    위치: 서쪽 벽(x=474, z=685, rotY=Math.PI/2)
  //    로컬 기준: x = -42.5..+42.5(북→남 방향: -x가 북쪽, +x가 남쪽? 주의: rotY=+PI/2이면 로컬 +z가 동쪽(+X), 로컬 +x가 북쪽(-Z)! 확인:
  //    rotY = +PI/2 일 때 local (1,0,0) -> world (0,0,-1) [북쪽], local (0,0,1) -> world (1,0,0) [동쪽 정면!]
  //    즉 정면에서 선반을 바라볼 때(동→서 시선): 왼쪽이 남쪽(local -x), 오른쪽이 북쪽(local +x)!)
  // ============================================================================
  const chakoc = placeM(474, 685, Math.PI / 2);
  chakoc.name = 'M MarketB CHAKOC Shelf 850 5-Tier Curated Showcase';
  chakoc.userData = {
    dimensions: [85, 40, 155],
    bounds: [454, 494, 642.5, 727.5],
    role: '마켓비 CHAKOC 850 넓은 5단 메인 선반 & 바이닐·유리진열장·버섯조명·우드서랍 큐레이션'
  };

  // 1-1. 4개 수직 실버 스틸 기둥
  const legPositions = [
    [-41.5, 1.5],
    [41.5, 1.5],
    [-41.5, 38.5],
    [41.5, 38.5]
  ];
  for (const [lx, lz] of legPositions) {
    CY(chakoc, 1.5, 1.5, 1.1, mBlack, lx, 0, lz, 20);
    CY(chakoc, 0.65, 0.65, 1.4, mSteel, lx, 1.1, lz, 16);
    CY(chakoc, 0.85, 0.85, 152.0, mSteel, lx, 2.5, lz, 20);
    CY(chakoc, 0.92, 0.92, 0.6, mChrome, lx, 154.5, lz, 20);
  }

  // 1-2. 측면 사다리형 수평 가로대 & 5단 오크 우드 선반
  // 선반 보드 하단 y = 10, 45.5, 81, 116.5, 152cm (두께 1.8cm → 상면 y = 11.8, 47.3, 82.8, 118.3, 153.8cm / 칸별 유효높이 33.7cm)
  const shelfHeights = [10, 45.5, 81, 116.5, 152];
  const ladderHeights = [10, 27.7, 45.5, 63.2, 81, 98.7, 116.5, 134.2, 152];
  for (const hy of ladderHeights) {
    dRod(chakoc, [-41.5, hy, 1.5], [-41.5, hy, 38.5], 0.34, mSteel);
    dRod(chakoc, [41.5, hy, 1.5], [41.5, hy, 38.5], 0.34, mSteel);
  }
  // 후면 X자 크롬 크로스 브레이스
  dRod(chakoc, [-41, 14, 1.5], [41, 149, 1.5], 0.28, mChrome);
  dRod(chakoc, [-41, 149, 1.5], [41, 14, 1.5], 0.28, mChrome);
  CY(chakoc, 1.2, 1.2, 0.8, mSteel, 0, 81.2, 1.5, 16);

  for (const sy of shelfHeights) {
    B(chakoc, 84.4, 1.8, 38.2, mOak, 0, sy, 20, 0.2);
    for (const [kx, kz] of legPositions) {
      B(chakoc, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.2, kz, 0.15);
    }
  }

  // ============================================================================
  // [1단 최상단 오픈 스테이지: y = 153.8cm]
  // 좌측 북쉘프 스피커 + 유리화병 대형 몬스테라 / 중앙 턴테이블 / 우측 스피커 + 달항아리 노란꽃 / 우측 끝 VALON 골드 플리츠 램프
  // ============================================================================
  {
    const y1 = 153.8;

    // 1-A. 북쉘프 스피커 좌·우 페어 (x = -33, +17)
    for (const sx of [-33, 17]) {
      const spk = new THREE.Group();
      spk.position.set(cm(sx), cm(y1), cm(21));
      chakoc.add(spk);
      // 방진 패드 + 인클로저 (12.5 × 20.5 × 15.5cm)
      B(spk, 12.2, 0.8, 15.0, M('#45474a', { roughness: 0.8 }), 0, 0, 0, 0.2);
      B(spk, 12.5, 20.0, 15.5, mSpeakerBlack, 0, 0.8, 0, 0.4);
      // 우퍼 콘 & 코퍼 센터캡 + 트위터 (정면 +z)
      const face = new THREE.Group();
      face.position.set(0, cm(8.2), cm(7.85));
      face.rotation.x = Math.PI / 2;
      spk.add(face);
      CY(face, 4.3, 4.3, 0.3, M('#2f3134', { roughness: 0.4 }), 0, 0, 0, 24);
      CY(face, 3.4, 3.4, 0.45, M('#151618', { roughness: 0.5 }), 0, 0, 0, 24);
      CY(face, 1.2, 1.2, 0.6, mCopper, 0, 0, 0, 16);
      const tw = new THREE.Group();
      tw.position.set(0, cm(16.2), cm(7.85));
      tw.rotation.x = Math.PI / 2;
      spk.add(tw);
      CY(tw, 2.0, 2.0, 0.3, M('#2b2d30', { roughness: 0.35 }), 0, 0, 0, 20);
      CY(tw, 0.9, 0.9, 0.5, mBlack, 0, 0, 0, 16);
      // 코퍼 볼륨 노브
      CY(tw, 0.45, 0.45, 0.5, mCopper, 3.8, 0, 11.2, 12);
    }

    // 1-B. 좌측 스피커 뒤 유리화병(마켓비 PLORN 감성) + 드라마틱 대형 몬스테라 잎 줄기 (레퍼런스 사진 4!)
    CY(chakoc, 3.2, 4.2, 15, mClearGlass, -26, y1, 10, 20);
    for (const [endX, endY, endZ, rotY, rotZ, lw, ld] of [
      [-37, y1 + 38, 12, 0.3, 0.28, 15, 11],
      [-23, y1 + 43, 14, -0.2, -0.12, 16, 12],
      [-11, y1 + 35, 11, -0.55, -0.32, 13, 9.5]
    ]) {
      dRod(chakoc, [-26, y1 + 8, 10], [endX, endY, endZ], 0.26, mLeafGreen);
      const lf = new THREE.Group();
      lf.position.set(cm(endX), cm(endY), cm(endZ));
      lf.rotation.set(0.18, rotY, rotZ);
      chakoc.add(lf);
      B(lf, lw, 0.22, ld, mLeafGreen, 0, 0, 0, 0.4);
      // 몬스테라 잎 갈라짐 표현
      B(lf, 1.2, 0.26, 3.8, M('#ede7dc', { transparent: true, opacity: 0.0 }), 2.5, 0, 2.5);
    }

    // 1-C. 우측 스피커 위 동그란 화이트 세라믹 달항아리 화병 + 노란 프리지아 꽃다발 (레퍼런스 사진 4!)
    {
      const vaseY = y1 + 20.8;
      const vPts = [
        [0, 0], [2.8, 0], [4.6, 2.4], [4.9, 5.2], [3.8, 7.8], [1.8, 9.0], [2.1, 9.6]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const vaseMesh = new THREE.Mesh(new THREE.LatheGeometry(vPts, 24), mCeramic);
      vaseMesh.position.set(cm(17), cm(vaseY), cm(21));
      vaseMesh.castShadow = true;
      chakoc.add(vaseMesh);
      for (const [fx, fy, fz] of [[15.2, vaseY + 14.5, 20], [17.4, vaseY + 16.0, 21.5], [19.2, vaseY + 13.8, 20.5], [16.5, vaseY + 13.2, 23]]) {
        dRod(chakoc, [17, vaseY + 8.5, 21], [fx, fy, fz], 0.16, mLeafGreen);
        CY(chakoc, 1.35, 0.6, 1.4, mPopYellow, fx, fy, fz, 12);
      }
    }

    // 1-D. 중앙 아날로그 턴테이블 + 반투명 오픈 더스트커버 (x = -8, z = 21)
    {
      const tt = new THREE.Group();
      tt.position.set(cm(-8), cm(y1), cm(21));
      chakoc.add(tt);
      // 4개 진동 흡수 풋 + 블랙 우드 플린스 (35 × 29 × 4.2cm)
      for (const [fx, fz] of [[-14, -11], [14, -11], [-14, 11], [14, 11]]) {
        CY(tt, 1.8, 1.8, 1.2, mChrome, fx, 0, fz, 16);
      }
      B(tt, 35, 4.2, 29, mBlack, 0, 1.2, 0, 0.35);
      // 실버 전면 컨트롤 트림 바
      B(tt, 34.6, 0.9, 0.4, mChrome, 0, 2.2, 14.5);
      // 알루미늄 플래터 + 딥 네이비 바이닐 레코드 + 머스타드 라벨
      CY(tt, 12.2, 12.5, 1.1, mChrome, -2.5, 5.4, 0, 36);
      CY(tt, 11.8, 11.8, 0.25, mNavy, -2.5, 6.5, 0, 36);
      CY(tt, 3.8, 3.8, 0.3, mPopYellow, -2.5, 6.65, 0, 24);
      CY(tt, 0.35, 0.35, 1.4, mChrome, -2.5, 6.5, 0, 12);
      // 톤암 베이스 & 크롬 톤암 & 카트리지
      CY(tt, 2.2, 2.4, 1.8, mChrome, 12.5, 5.4, -7.5, 20);
      dRod(tt, [12.5, 7.2, -7.5], [8.2, 7.2, 7.5], 0.26, mChrome);
      B(tt, 1.4, 0.9, 2.4, mBlack, 8.0, 6.8, 8.2, 0.1);
      // 살짝 열린 클리어 아크릴 더스트커버 (레퍼런스 사진 1·2·4 디테일!)
      const lidPivot = new THREE.Group();
      lidPivot.position.set(0, cm(5.4), cm(-14.2));
      lidPivot.rotation.x = -0.34;
      tt.add(lidPivot);
      B(lidPivot, 34.8, 0.4, 28.6, mAcrylic, 0, 5.2, 14.3, 0.15);
      B(lidPivot, 34.8, 5.2, 0.4, mAcrylic, 0, 0, 28.4);
      B(lidPivot, 0.4, 5.2, 28.6, mAcrylic, -17.2, 0, 14.3);
      B(lidPivot, 0.4, 5.2, 28.6, mAcrylic, 17.2, 0, 14.3);
    }

    // 1-E. 최상단 우측 끝: 마켓비 VALON 단스탠드 E26 골드 (Ø24 × H35.5cm · 레퍼런스 사진 1 우상단 골드 스탠드!)
    {
      const valon = new THREE.Group();
      valon.name = 'MarketB VALON Table Lamp Gold';
      valon.position.set(cm(32.5), cm(y1), cm(21));
      chakoc.add(valon);
      CY(valon, 4.8, 5.2, 2.0, mGold, 0, 0, 0, 24);
      CY(valon, 1.6, 2.8, 2.2, mGold, 0, 2.0, 0, 20);
      CY(valon, 0.65, 0.65, 16.5, mGold, 0, 4.2, 0, 16);
      // 당김 체인 스위치 디테일
      dRod(valon, [2.2, 19.5, 0], [2.2, 12.0, 0], 0.12, mGold);
      CY(valon, 0.35, 0.35, 0.9, mGold, 2.2, 11.2, 0, 10);
      // 플리츠 원뿔형 쉐이드 (하단 Ø22cm → 상단 Ø8cm, 높이 16cm)
      const valonShadeMat = new THREE.MeshStandardMaterial({
        color: '#fbf5e6',
        emissive: '#ffd58a',
        emissiveIntensity: 0.22,
        roughness: 0.45,
        side: THREE.DoubleSide
      });
      const shadeGeo = new THREE.CylinderGeometry(cm(4.0), cm(11.0), cm(16.0), 36, 1, true);
      const shadeMesh = new THREE.Mesh(shadeGeo, valonShadeMat);
      shadeMesh.position.y = cm(27.2);
      shadeMesh.castShadow = true;
      valon.add(shadeMesh);
      const valonLight = new THREE.PointLight('#ffe0a3', 0.9, 2.8, 1.8);
      valonLight.position.set(0, cm(23), 0);
      valon.add(valonLight);
      if (addAccent) addAccent(valonLight, valonShadeMat, 1.85, 2.2, 0.35, 0.32);
    }
  }

  // ============================================================================
  // [2단 눈높이 쇼케이스 존: y = 118.3cm (유효높이 33.7cm)]
  // 우·중앙: 마켓비 폴라보(POLABO) 유리 슬라이딩 미니수납장 CAM2260SL (60×26.5×22cm) + 내부 조명·위스키·시계·엽서
  // 좌측: 전면 아트 매거진 거치 + 마켓비 DONOS 골드/오렌지 글로브 무드등 (Ø14×15cm)
  // ============================================================================
  {
    const y2 = 118.3;

    // 2-A. 마켓비 폴라보 미니수납장 양면 4문 CAM2260SL · 캄포어베니어 (60 × 26.5 × 22cm)
    const polaboGlass = new THREE.Group();
    polaboGlass.name = 'MarketB POLABO Glass Sliding Mini Cabinet CAM2260SL';
    polaboGlass.position.set(cm(9.5), cm(y2), cm(20));
    chakoc.add(polaboGlass);

    // 외곽 원목 박스 프레임 (두께 1.6cm)
    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 0, 0, 0.15);        // 하판
    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 20.4, 0, 0.15);     // 상판
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, -29.2, 1.6, 0);      // 좌측판
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, 29.2, 1.6, 0);       // 우측판
    B(polaboGlass, 56.8, 18.8, 0.8, M('#f3ede2', { roughness: 0.7 }), 0, 1.6, -12.4); // 밝은 내부 배경 패널

    // 내부 따뜻한 쇼케이스 스포트라이트 (레퍼런스 사진 1의 하이라이트!)
    const showGlowMat = new THREE.MeshStandardMaterial({
      color: '#fff6df',
      emissive: '#ffcf75',
      emissiveIntensity: 0.45,
      roughness: 0.2
    });
    B(polaboGlass, 18, 0.4, 3.0, showGlowMat, 4, 19.9, 0);
    const showLight = new THREE.PointLight('#ffd484', 0.95, 1.8, 1.8);
    showLight.position.set(cm(4), cm(18.5), cm(2));
    polaboGlass.add(showLight);
    if (addAccent) addAccent(showLight, showGlowMat, 2.2, 2.8, 0.85, 1.15);

    // 쇼케이스 내부 소품 1: 뒷벽 콜라주 미니 엽서·폴라로이드 3장
    B(polaboGlass, 7.5, 9.5, 0.2, M('#f9f6ee', { roughness: 0.4 }), -18, 8.5, -11.8);
    B(polaboGlass, 5.8, 6.2, 0.22, mNavy, -18, 10.6, -11.7);
    B(polaboGlass, 6.8, 8.5, 0.2, M('#fbf8f1', { roughness: 0.4 }), -8.5, 9.2, -11.8);
    B(polaboGlass, 5.2, 5.2, 0.22, mTerracotta, -8.5, 11.2, -11.7);
    B(polaboGlass, 8.0, 6.5, 0.2, mPopYellow, 2.5, 11.0, -11.8);

    // 쇼케이스 내부 소품 2: 스퀘어 화이트 아날로그 탁상시계 (SLATTIS 35591 · 15,000원)
    const clk = new THREE.Group();
    clk.position.set(cm(-4), cm(1.6), cm(1.5));
    clk.rotation.y = 0.08;
    polaboGlass.add(clk);
    B(clk, 8.8, 8.8, 2.6, mWhite, 0, 0, 0, 0.3);
    const clkFace = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(7.4), cm(7.4)),
      new THREE.MeshStandardMaterial({ map: clockFaceTex, roughness: 0.3 })
    );
    clkFace.position.set(0, cm(4.4), cm(1.35));
    clk.add(clkFace);

    // 쇼케이스 내부 소품 3: 위스키 & 진 보틀 2병 + 크리스탈 스템 글라스 2잔 (레퍼런스 사진 1!)
    // 앰버 위스키 보틀
    CY(polaboGlass, 2.9, 2.9, 10.2, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), 8.5, 1.6, -1, 20);
    CY(polaboGlass, 1.0, 1.2, 3.8, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), 8.5, 11.8, -1, 16);
    CY(polaboGlass, 1.1, 1.1, 1.2, mGold, 8.5, 15.6, -1, 16);
    B(polaboGlass, 3.8, 4.6, 0.2, mCeramic, 8.5, 4.5, 1.9); // 화이트 보틀 라벨
    // 클리어 보태니컬 진 보틀
    CY(polaboGlass, 2.6, 2.6, 11.0, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 1.6, -2, 20);
    CY(polaboGlass, 0.9, 1.1, 3.6, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 12.6, -2, 16);
    CY(polaboGlass, 1.0, 1.0, 1.1, mBlack, 15.8, 16.2, -2, 16);
    // 크리스탈 고블렛/스템 글라스 2잔
    for (const gx of [21.5, 25.8]) {
      CY(polaboGlass, 1.8, 1.8, 0.3, mClearGlass, gx, 1.6, 2, 16);
      CY(polaboGlass, 0.22, 0.22, 4.2, mClearGlass, gx, 1.9, 2, 12);
      CY(polaboGlass, 2.0, 1.1, 4.6, mClearGlass, gx, 6.1, 2, 18);
    }
    // 좌측 칸 미니 향수병·실버 오브제
    B(polaboGlass, 3.4, 5.8, 2.2, mClearGlass, -21, 1.6, 1, 0.2);
    CY(polaboGlass, 0.8, 0.8, 1.4, mGold, -21, 7.4, 1, 12);
    CY(polaboGlass, 2.2, 2.8, 4.2, mChrome, -14.5, 1.6, 2.5, 18);

    // 전면 모루유리 슬라이딩 도어 2짝 (우측 도어를 살짝 왼쪽으로 슬라이드 오픈해 내부 위스키 바가 잘 보이게 연출!)
    for (const [dx, dz, knobX] of [[-14.2, 11.8, -24.5], [6.5, 12.6, 16.8]]) {
      const door = new THREE.Group();
      door.position.set(cm(dx), cm(1.8), cm(dz));
      polaboGlass.add(door);
      // 도어 우드 테두리 4변
      B(door, 28.2, 2.0, 0.9, mCamphor, 0, 0, 0);
      B(door, 28.2, 2.0, 0.9, mCamphor, 0, 16.4, 0);
      B(door, 2.2, 14.4, 0.9, mCamphor, -13.0, 2.0, 0);
      B(door, 2.2, 14.4, 0.9, mCamphor, 13.0, 2.0, 0);
      // 모루 유리창
      B(door, 23.8, 14.4, 0.3, mFlutedGlass, 0, 2.0, 0);
      // 매트블랙 원형 손잡이
      const kn = new THREE.Group();
      kn.position.set(cm(knobX - dx), cm(9.2), cm(0.8));
      kn.rotation.x = Math.PI / 2;
      door.add(kn);
      CY(kn, 0.9, 0.7, 0.9, mBlack, 0, 0, 0, 16);
    }

    // 쇼케이스 상판(y = 22cm 위) 디테일: 접힌 패턴 니트 스택 & 미니 컬렉터 헬멧 (레퍼런스 사진 1·3·5!)
    B(polaboGlass, 18, 2.6, 15, mBurgundy, -14, 22.0, 0, 0.8);
    B(polaboGlass, 16.5, 2.4, 14, M('#d48b9c', { roughness: 0.88 }), -14, 24.6, 0, 0.8);
    // 미니 컬렉터 헬멧 오브제 (화이트 쉘 + 블랙 바이저 · 상부 여유 11.7cm 안쪽에 여유 있게 수납)
    {
      const helm = new THREE.Group();
      helm.position.set(cm(15), cm(22.0), cm(1));
      helm.rotation.y = -0.25;
      polaboGlass.add(helm);
      CY(helm, 4.2, 4.6, 3.8, mWhite, 0, 0, 0, 24);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(cm(4.5), 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), mWhite);
      dome.position.y = cm(3.6);
      helm.add(dome);
      B(helm, 6.6, 2.4, 1.4, mBlack, 0, 2.8, 3.8, 0.4); // 다크 바이저
    }

    // 2-B. 좌측: 전면 아트북/매거진 페이스아웃 디스플레이 + 마켓비 DONOS 오렌지/골드 글로브 무드등 (레퍼런스 사진 1·2!)
    {
      const mag = new THREE.Group();
      mag.position.set(cm(-31), cm(y2), cm(15));
      mag.rotation.x = -0.24;
      mag.rotation.y = 0.1;
      chakoc.add(mag);
      // 우드 북스탠드 받침
      B(mag, 17, 1.2, 12, mLightBirch, 0, 0, 0, 0.2);
      // 매거진 본체 & 표지
      B(mag, 16.5, 22.5, 1.2, mWhite, 0, 1.2, 0, 0.1);
      const cover = new THREE.Mesh(
        new THREE.PlaneGeometry(cm(16.2), cm(22.2)),
        new THREE.MeshStandardMaterial({ map: artMagTex, roughness: 0.35 })
      );
      cover.position.set(0, cm(12.3), cm(0.66));
      mag.add(cover);

      // 마켓비 DONOS 무드등 G9 KS2520T (골드 베이스 Ø14cm + 따뜻한 오렌지-앰버 글로우 구체 Ø11cm · 33,900원)
      const donos = new THREE.Group();
      donos.name = 'MarketB DONOS Globe Mood Lamp';
      donos.position.set(cm(-29.5), cm(y2), cm(29));
      chakoc.add(donos);
      CY(donos, 6.2, 6.2, 2.2, mGold, 0, 0, 0, 28);
      CY(donos, 1.4, 2.0, 1.4, mGold, 0, 2.2, 0, 18);
      const orbMat = new THREE.MeshStandardMaterial({
        color: '#ff9d3b',
        emissive: '#ff6f14',
        emissiveIntensity: 0.55,
        roughness: 0.22
      });
      const orb = new THREE.Mesh(new THREE.SphereGeometry(cm(5.2), 28, 24), orbMat);
      orb.position.y = cm(8.4);
      donos.add(orb);
      const donosLight = new THREE.PointLight('#ff8c32', 0.75, 2.0, 1.8);
      donosLight.position.set(0, cm(9), cm(2));
      donos.add(donosLight);
      if (addAccent) addAccent(donosLight, orbMat, 1.85, 2.8, 0.55, 0.95);
    }
  }

  // ============================================================================
  // [3단 바이닐 LP 컬렉션 & 버섯 램프 존: y = 82.8cm (유효높이 33.7cm)]
  // 좌측: 12인치 LP 26장 세로 수납 / 중앙: 파스텔 핑크 LP 자켓 전면 거치 / 우측: 마켓비 GUBON 미니 옐로우 버섯 단스탠드(Ø20×31cm) + 목각 마네킹·그린 레트로 시계
  // ============================================================================
  {
    const y3 = 82.8;

    // 3-A. 세로 LP 바이닐 레코드 26장 (x = -39..-13.5) + 크롬 L자 북엔드
    addVinylRow(chakoc, -39.0, -13.5, y3, 20.5, 42);
    B(chakoc, 0.35, 18, 15, mChrome, -13.2, y3, 20.5);
    B(chakoc, 6.5, 0.35, 15, mChrome, -10.0, y3, 20.5);

    // 3-B. 전면(Face-out) 파스텔 핑크 시티팝 LP 앨범 커버 디스플레이 (레퍼런스 사진 4 핵심 감도!)
    {
      const lpShow = new THREE.Group();
      lpShow.position.set(cm(3.5), cm(y3), cm(21.5));
      lpShow.rotation.x = -0.11;
      chakoc.add(lpShow);
      B(lpShow, 31.2, 31.2, 0.9, mWhite, 0, 0, 0, 0.1);
      const jacket = new THREE.Mesh(
        new THREE.PlaneGeometry(cm(31.0), cm(31.0)),
        new THREE.MeshStandardMaterial({ map: pinkLpTex1, roughness: 0.32 })
      );
      jacket.position.set(0, cm(15.6), cm(0.5));
      lpShow.add(jacket);
      // 전면 슬림 스틸 LP 스토퍼 로드 (사진 4 디테일!)
      dRod(chakoc, [-12.5, y3 + 6.5, 24.5], [19.5, y3 + 6.5, 24.5], 0.22, mChrome);
    }

    // 3-C. 우측: 마켓비 GUBON 미니 단스탠드 E14 KS2310T · 옐로우 (Ø20 × H31cm · 23,900원 · 버섯 돔 램프!)
    {
      const gubon = new THREE.Group();
      gubon.name = 'MarketB GUBON Mini Mushroom Table Lamp Yellow';
      gubon.position.set(cm(29.5), cm(y3), cm(20.5));
      chakoc.add(gubon);

      // 트럼펫 플레어 스틸 베이스 + 슬림 기둥 (옐로우 파우더코팅)
      const basePts = [
        [0, 0], [5.4, 0], [5.2, 0.5], [3.2, 2.4], [1.6, 6.0], [1.05, 13.5], [0.9, 19.5]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const stemMesh = new THREE.Mesh(new THREE.LatheGeometry(basePts, 28), mPopYellow);
      stemMesh.castShadow = true;
      gubon.add(stemMesh);

      // 반구형 버섯 돔 쉐이드 (Ø20cm, 높이 11.5cm → 총높이 31cm < 유효 33.7cm 완벽 수납!)
      const gubonDomeMat = new THREE.MeshStandardMaterial({
        color: '#f5c722',
        emissive: '#ffbe1a',
        emissiveIntensity: 0.2,
        roughness: 0.24,
        side: THREE.DoubleSide
      });
      const domePts = [
        [10.0, 18.2], [9.8, 21.0], [8.6, 24.8], [6.2, 28.0], [3.0, 29.6], [0, 30.0]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const domeMesh = new THREE.Mesh(new THREE.LatheGeometry(domePts, 32), gubonDomeMat);
      domeMesh.castShadow = true;
      gubon.add(domeMesh);

      // 상단 크롬 볼 피니얼 (지름 1.5cm — 실제 GUBON 미니의 시그니처 디테일!)
      const finial = new THREE.Mesh(new THREE.SphereGeometry(cm(0.8), 16, 16), mChrome);
      finial.position.y = cm(30.7);
      gubon.add(finial);

      const gubonLight = new THREE.PointLight('#ffe094', 0.9, 2.2, 1.8);
      gubonLight.position.set(0, cm(18.5), 0);
      gubon.add(gubonLight);
      if (addAccent) addAccent(gubonLight, gubonDomeMat, 2.0, 2.4, 0.45, 0.35);
    }

    // 3-D. 레퍼런스 사진 2 & 3 컬렉터 소품: 레트로 그린 아치 시계(핑크 다이얼) & 원목 관절 마네킹 피규어
    {
      // 그린 레트로 아치형 미니 시계 (x = 21.5, z = 30.5 — 사진 2 오마주!)
      const gClk = new THREE.Group();
      gClk.position.set(cm(21.5), cm(y3), cm(30.5));
      gClk.rotation.y = -0.2;
      chakoc.add(gClk);
      B(gClk, 1.4, 5.5, 2.2, mRetroGreen, -1.8, 0, 0, 0.2);
      B(gClk, 1.4, 5.5, 2.2, mRetroGreen, 1.8, 0, 0, 0.2);
      const topCyl = new THREE.Group();
      topCyl.position.set(0, cm(6.2), 0);
      topCyl.rotation.x = Math.PI / 2;
      gClk.add(topCyl);
      CY(topCyl, 2.6, 2.6, 2.4, mRetroGreen, 0, -1.2, 0, 24);
      CY(topCyl, 2.0, 2.0, 2.6, M('#e6a5a8', { roughness: 0.35 }), 0, -1.3, 0, 20);

      // 원목 관절 마네킹 피규어 (x = -9, z = 30 — 사진 3 오마주!)
      const mq = new THREE.Group();
      mq.position.set(cm(-9), cm(y3), cm(30));
      chakoc.add(mq);
      CY(mq, 2.2, 2.2, 0.6, mLightBirch, 0, 0, 0, 16);
      dRod(mq, [0, 0.6, 0], [0, 8.5, 0], 0.14, mSteel);
      dRod(mq, [-0.8, 4.0, 0], [-1.1, 8.5, 0], 0.35, mLightBirch);
      dRod(mq, [0.8, 4.0, 0], [1.1, 8.5, 0], 0.35, mLightBirch);
      CY(mq, 1.1, 0.9, 4.2, mLightBirch, 0, 8.5, 0, 14);
      dRod(mq, [-1.3, 12.2, 0], [-2.5, 9.0, 0.8], 0.28, mLightBirch);
      dRod(mq, [1.3, 12.2, 0], [2.6, 14.5, 0.6], 0.28, mLightBirch);
      const head = new THREE.Mesh(new THREE.SphereGeometry(cm(0.95), 14, 14), mLightBirch);
      head.scale.y = 1.25;
      head.position.y = cm(14.2);
      mq.add(head);
    }
  }

  // ============================================================================
  // [4단 우드 2서랍 인서트 & 진공관 앰프·우드트레이 존: y = 47.3cm (유효높이 33.7cm)]
  // 마켓비 폴라보(POLABO) 미니수납장 2서랍 BSM2266 캄포어베니어 (66.7 × 25 × 20.5cm)
  // + 상판 마켓비 NEODA 우드트레이(28×20cm) & 레트로 진공관 앰프 + 우측 아트북
  // ============================================================================
  {
    const y4 = 47.3;

    // 4-A. 마켓비 폴라보 미니수납장 2서랍 BSM2266 · 캄포어베니어 (x = -6.5, z = 22)
    const polabo2Dr = new THREE.Group();
    polabo2Dr.name = 'MarketB POLABO 2-Drawer Mini Unit BSM2266';
    polabo2Dr.position.set(cm(-6.5), cm(y4), cm(22));
    chakoc.add(polabo2Dr);

    // 좌·우 측판 (높이 20.5cm — 상단 6cm 갤러리 트레이 엣지 포함!) & 후면판 & 상판(y = 14.5cm)
    B(polabo2Dr, 66.7, 1.5, 25.0, mCamphor, 0, 0, 0, 0.15);        // 바닥판
    B(polabo2Dr, 1.5, 20.5, 25.0, mCamphor, -32.6, 0, 0, 0.15);    // 좌측 갤러리 측판
    B(polabo2Dr, 1.5, 20.5, 25.0, mCamphor, 32.6, 0, 0, 0.15);     // 우측 갤러리 측판
    B(polabo2Dr, 63.7, 20.5, 1.2, mCamphor, 0, 0, -11.9, 0.15);    // 후면 갤러리 판
    B(polabo2Dr, 63.7, 1.4, 23.8, mCamphor, 0, 13.1, 0.6, 0.1);    // 서랍 상판 (상면 y = 14.5cm)
    B(polabo2Dr, 1.4, 11.6, 23.5, mCamphor, 0, 1.5, 0.5);          // 중앙 칸막이

    // 좌·우 2칸 원목 서랍 전면 패널 + 원목/블랙 노브
    for (const dx of [-16.2, 16.2]) {
      B(polabo2Dr, 30.8, 11.2, 1.4, mLightBirch, dx, 1.7, 12.1, 0.2);
      const kn = new THREE.Group();
      kn.position.set(cm(dx), cm(7.3), cm(13.2));
      kn.rotation.x = Math.PI / 2;
      polabo2Dr.add(kn);
      CY(kn, 1.0, 0.8, 1.2, mWalnut, 0, 0, 0, 16);
    }

    // 4-B. 서랍 상판 좌측: 마켓비 NEODA 우드트레이 28×20cm (26514 · 5,900원) + 유리 서버 & 에스프레소 컵 (사진 1 좌하단!)
    const trayY = 14.5;
    B(polabo2Dr, 26, 1.4, 18, mLightBirch, -16, trayY, 1, 0.4);
    CY(polabo2Dr, 3.2, 4.0, 8.5, mClearGlass, -22, trayY + 1.4, 1, 20);
    dRod(polabo2Dr, [-18.5, trayY + 3.5, 1], [-18.5, trayY + 8.0, 1], 0.3, mClearGlass);
    CY(polabo2Dr, 2.4, 2.0, 4.8, mCeramic, -11, trayY + 1.4, -1, 18);
    CY(polabo2Dr, 3.2, 3.2, 0.5, mBlack, -11, trayY + 1.0, -1, 18); // 블랙 소서
    CY(polabo2Dr, 2.2, 2.2, 6.2, mChrome, -10, trayY + 1.4, 5.5, 18); // 스텐 밀크저그

    // 4-C. 서랍 상판 우측: 레트로 매트블랙 진공관 앰프 (사진 1 중앙의 감성 핵심!)
    const amp = new THREE.Group();
    amp.position.set(cm(14), cm(trayY), cm(1.5));
    polabo2Dr.add(amp);
    B(amp, 21, 5.2, 16, mBlack, 0, 0, 0, 0.3);
    B(amp, 19, 4.2, 8, M('#2d3033', { metalness: 0.6, roughness: 0.35 }), 0, 5.2, -3, 0.2); // 트랜스포머 하우징
    // 전면 골드 볼륨 노브 2개 & 레벨 미터
    const ampFront = new THREE.Group();
    ampFront.position.set(0, cm(2.6), cm(8.2));
    ampFront.rotation.x = Math.PI / 2;
    amp.add(ampFront);
    CY(ampFront, 1.1, 1.1, 0.8, mGold, -6.5, 0, 0, 16);
    CY(ampFront, 1.1, 1.1, 0.8, mGold, 6.5, 0, 0, 16);
    // 주황빛 발광 진공관 4개
    const tubeMat = new THREE.MeshStandardMaterial({
      color: '#ffdcb0',
      emissive: '#ff7b1c',
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.88,
      roughness: 0.15
    });
    for (const tx of [-6.5, -2.2, 2.2, 6.5]) {
      CY(amp, 0.95, 0.95, 1.0, mChrome, tx, 5.2, 3.2, 14);
      CY(amp, 0.85, 0.85, 3.6, tubeMat, tx, 6.2, 3.2, 14);
    }
    const tubeLight = new THREE.PointLight('#ff8c38', 0.45, 1.1, 2.0);
    tubeLight.position.set(0, cm(9.5), cm(4));
    amp.add(tubeLight);
    if (addAccent) addAccent(tubeLight, tubeMat, 0.65, 2.2, 0.3, 1.1);

    // 4-D. 우측 여유 공간(x = +28.5..+39): 하드커버 디자인 아트북 4권 세로 수납
    const bCols = [mRetroGreen, mFabricIvory, mTerracotta, mNavy];
    let bx = 28.5;
    for (let i = 0; i < 4; i++) {
      B(chakoc, 2.3, 25 - (i % 2) * 2.2, 21, bCols[i], bx + 1.15, y4, 21, 0.12);
      B(chakoc, 1.8, 24 - (i % 2) * 2.2, 20, mWhite, bx + 1.15, y4 + 0.4, 21.2);
      bx += 2.6;
    }
  }

  // ============================================================================
  // [5단 최하단 라탄 우드 슬라이딩장 & LP 존: y = 11.8cm (유효높이 33.7cm)]
  // 마켓비 벤탄(BENTAN) 미니수납장 낮은 2문 SHM2460 캄포어베니어 (60 × 19.5 × 24cm)
  // + 우측 세로 LP 컬렉션 16장 & 두 번째 파스텔 핑크 미니멀 LP 슬리브
  // ============================================================================
  {
    const y5 = 11.8;

    // 5-A. 마켓비 벤탄 미니수납장 낮은 2문 SHM2460 · 캄포어베니어 (x = -10, z = 23)
    const bentan = new THREE.Group();
    bentan.name = 'MarketB BENTAN Rattan Sliding 2-Door Mini Cabinet SHM2460';
    bentan.position.set(cm(-10), cm(y5), cm(23));
    chakoc.add(bentan);

    B(bentan, 60, 1.6, 19.5, mCamphor, 0, 0, 0, 0.15);
    B(bentan, 60, 1.6, 19.5, mCamphor, 0, 22.4, 0, 0.15);
    B(bentan, 1.6, 20.8, 19.5, mCamphor, -29.2, 1.6, 0);
    B(bentan, 1.6, 20.8, 19.5, mCamphor, 29.2, 1.6, 0);
    B(bentan, 56.8, 20.8, 0.8, mWalnut, 0, 1.6, -9.0);

    // 케인 라탄 슬라이딩 도어 2짝
    for (const [dx, dz, kx] of [[-14.0, 8.2, -24.5], [14.0, 9.0, 24.5]]) {
      const rDoor = new THREE.Group();
      rDoor.position.set(cm(dx), cm(1.8), cm(dz));
      bentan.add(rDoor);
      B(rDoor, 28.4, 2.2, 0.9, mCamphor, 0, 0, 0);
      B(rDoor, 28.4, 2.2, 0.9, mCamphor, 0, 18.2, 0);
      B(rDoor, 2.4, 16.0, 0.9, mCamphor, -13.0, 2.2, 0);
      B(rDoor, 2.4, 16.0, 0.9, mCamphor, 13.0, 2.2, 0);
      B(rDoor, 23.6, 16.0, 0.4, mCane, 0, 2.2, 0);
      const kn = new THREE.Group();
      kn.position.set(cm(kx - dx), cm(10.2), cm(0.8));
      kn.rotation.x = Math.PI / 2;
      rDoor.add(kn);
      CY(kn, 0.95, 0.8, 0.8, mBlack, 0, 0, 0, 16);
    }
    // 벤탄 상판 위 세라믹 미니 오브제 & 하드커버 북스택 2권
    B(bentan, 22, 2.2, 15, mFabricIvory, -14, 24.0, 0, 0.2);
    B(bentan, 19, 2.0, 14, mNavy, -14, 26.2, 0, 0.2);
    CY(bentan, 3.8, 2.6, 5.2, mCeramic, 14, 24.0, 0, 20);

    // 5-B. 우측(x = +21.5..+39): 추가 세로 LP 바이닐 16장 + 파스텔 핑크 미니멀 LP 커버 (사진 4 하단 오마주!)
    addVinylRow(chakoc, 21.5, 39.2, y5, 20.5, 88);
    {
      const lp2 = new THREE.Group();
      lp2.position.set(cm(30.2), cm(y5), cm(34.5));
      lp2.rotation.x = -0.14;
      lp2.rotation.y = -0.06;
      chakoc.add(lp2);
      B(lp2, 16.5, 16.5, 0.6, mWhite, 0, 0, 0, 0.1); // 7인치 EP 바이닐 파스텔 핑크 자켓
      const j2 = new THREE.Mesh(
        new THREE.PlaneGeometry(cm(16.2), cm(16.2)),
        new THREE.MeshStandardMaterial({ map: pinkLpTex2, roughness: 0.35 })
      );
      j2.position.set(0, cm(8.25), cm(0.35));
      lp2.add(j2);
    }
  }

  // 1-6. 측면 기둥 감성 디테일: 매달린 원목 원숭이 피규어(사진 5!) & S고리 오버이어 헤드폰
  {
    // 우측(북쪽 x = +41.5, y = 134.2) 가로대에 한 손으로 매달린 카이 보예센풍 원목 몽키 피규어!
    const monkey = new THREE.Group();
    monkey.position.set(cm(42.2), cm(120), cm(26));
    monkey.rotation.y = Math.PI / 3;
    chakoc.add(monkey);
    dRod(monkey, [0, 5.5, 0], [-0.8, 14.5, 0], 0.42, mWalnut); // 위로 뻗어 가로대를 잡은 긴 팔
    dRod(monkey, [0.8, 5.5, 0], [2.2, 1.5, 1.0], 0.42, mWalnut); // 아래로 내린 팔
    CY(monkey, 1.8, 1.6, 5.5, mWalnut, 0, 1.2, 0, 16);           // 몸통
    CY(monkey, 1.3, 1.3, 3.8, mLightBirch, 0, 1.8, 0.6, 14);     // 밝은 배
    const mHead = new THREE.Mesh(new THREE.SphereGeometry(cm(1.85), 16, 16), mWalnut);
    mHead.position.set(0, cm(8.2), cm(0.3));
    monkey.add(mHead);
    const mMuzzle = new THREE.Mesh(new THREE.SphereGeometry(cm(1.2), 14, 14), mLightBirch);
    mMuzzle.position.set(0, cm(7.8), cm(1.3));
    monkey.add(mMuzzle);
    dRod(monkey, [-0.9, 1.2, 0], [-1.3, -2.5, 0.8], 0.42, mWalnut); // 다리
    dRod(monkey, [0.9, 1.2, 0], [1.3, -2.5, 0.8], 0.42, mWalnut);

    // 좌측(남쪽 x = -41.5, y = 98.7) 가로대 S고리 + 매트블랙 레트로 헤드폰
    dRod(chakoc, [-41.5, 99.5, 24], [-42.8, 96.5, 24], 0.25, mChrome);
    CY(chakoc, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 21.2, 20);
    CY(chakoc, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 26.8, 20);
    dRod(chakoc, [-43.5, 91, 21.2], [-43.5, 96.5, 24], 0.42, mBlack);
    dRod(chakoc, [-43.5, 96.5, 24], [-43.5, 91, 26.8], 0.42, mBlack);
  }

  // ============================================================================
  // 2. 선반 북측 바로 옆 바닥 & 벽면 (x = 474, z = 616):
  //    마켓비 심플리(SIMPLIE) 와이어 사이드테이블 블랙(35×35×35cm) + 전용 아크릴 상판
  //    + 내부 매거진·LP 슬리브 + 상부 블랙 플랜터 화분 (레퍼런스 사진 3 선반 옆 블랙 매거진 플랜터!)
  //    + 서쪽 벽 마켓비 ARTICO 50×70cm 미드센추리 캔버스액자
  // ============================================================================
  const simplieTable = placeM(474, 600, 0);
  simplieTable.name = 'M MarketB SIMPLIE Wire Side Table Black 35x35x35 & Acrylic Top';
  simplieTable.userData = {
    dimensions: [35, 35, 35],
    bounds: [456.5, 491.5, 582.5, 617.5],
    role: '마켓비 심플리 와이어 사이드테이블 블랙 + 전용 아크릴판 (매거진랙 겸 플랜터 스탠드)'
  };
  {
    // 외곽 사각 와이어 프레임 (35 × 35 × 35cm, 매트 블랙 스틸)
    const corners = [[-17.2, -17.2], [17.2, -17.2], [-17.2, 17.2], [17.2, 17.2]];
    for (const [wx, wz] of corners) {
      dRod(simplieTable, [wx, 0.4, wz], [wx, 34.6, wz], 0.35, mBlack);
    }
    for (const wy of [0.5, 34.6]) {
      dRod(simplieTable, [-17.2, wy, -17.2], [17.2, wy, -17.2], 0.35, mBlack);
      dRod(simplieTable, [-17.2, wy, 17.2], [17.2, wy, 17.2], 0.35, mBlack);
      dRod(simplieTable, [-17.2, wy, -17.2], [-17.2, wy, 17.2], 0.35, mBlack);
      dRod(simplieTable, [17.2, wy, -17.2], [17.2, wy, 17.2], 0.35, mBlack);
    }
    // 촘촘한 세로·바닥 와이어 그리드 살 (몬타나 팬톤 와이어 감성!)
    for (let s = -14; s <= 14; s += 3.5) {
      dRod(simplieTable, [-17.2, 0.5, s], [-17.2, 34.6, s], 0.18, mBlack);
      dRod(simplieTable, [17.2, 0.5, s], [17.2, 34.6, s], 0.18, mBlack);
      dRod(simplieTable, [s, 0.5, -17.2], [s, 0.5, 17.2], 0.18, mBlack);
      dRod(simplieTable, [s, 34.6, -17.2], [s, 34.6, 17.2], 0.18, mBlack);
    }
    // 전용 투명 아크릴 상판 (35 × 35 × 0.6cm)
    B(simplieTable, 35.2, 0.6, 35.2, mAcrylic, 0, 34.8, 0, 0.2);

    // 와이어 큐브 내부: 비스듬히 꽂힌 대형 매거진·LP 커버 5권
    const mCols = [mPopYellow, mTerracotta, mFabricIvory, mNavy, mRetroGreen];
    for (let i = 0; i < 5; i++) {
      const mg = new THREE.Group();
      mg.position.set(cm(-8 + i * 3.6), cm(1.0), 0);
      mg.rotation.z = 0.18;
      simplieTable.add(mg);
      B(mg, 1.2, 28, 24, mCols[i], 0, 0, 0, 0.1);
    }

    // 상판 위 블랙 실린더 플랜터 화분 + 싱그러운 초록 식물 (사진 3 선반 옆 플랜터 감성!)
    CY(simplieTable, 8.5, 7.8, 15, mBlack, 0, 35.4, 0, 24);
    CY(simplieTable, 8.0, 8.0, 1.0, M('#38281e', { roughness: 0.9 }), 0, 49.5, 0, 20);
    for (const [lx, ly, lz, ry] of [[-5, 62, -3, 0.4], [5, 65, 2, -0.5], [0, 68, -4, 1.2], [-3, 59, 5, 2.1], [4, 60, -5, -1.4]]) {
      dRod(simplieTable, [0, 50, 0], [lx, ly, lz], 0.22, mLeafGreen);
      const lf = new THREE.Group();
      lf.position.set(cm(lx), cm(ly), cm(lz));
      lf.rotation.y = ry;
      simplieTable.add(lf);
      B(lf, 6.5, 0.2, 4.2, mLeafGreen, 0, 0, 0, 0.3);
    }
  }

  // 서쪽 벽면 마켓비 ARTICO 50×70cm 미드센추리 지오메트릭 캔버스액자 (product_no=33889)
  const articoFrame = new THREE.Group();
  articoFrame.__planPlaced = true;
  articoFrame.position.set(cm(454.8), cm(118), cm(600));
  articoFrame.rotation.y = Math.PI / 2;
  articoFrame.userData = { wallMounted: true };
  grpM.add(articoFrame);
  B(articoFrame, 50, 70, 2.2, mOak, 0, 0, 0, 0.2);
  const artMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(cm(46.5), cm(66.5)),
    new THREE.MeshStandardMaterial({ map: articoTex, roughness: 0.42 })
  );
  artMesh.position.set(0, cm(35), cm(1.18));
  articoFrame.add(artMesh);

  // ============================================================================
  // 3. 선반 남측 코너: 마켓비 SODDE 장스탠드 E26 실버 (product_no=40722 · 미드센추리 비대칭 콘 플로어램프)
  //    위치: 서쪽 벽(x = 474, z = 762) — 실버 스틸 CHAKOC 선반과 완벽한 금속 톤 매칭!
  // ============================================================================
  const soddeFloor = placeM(474, 762, -Math.PI * 0.32);
  soddeFloor.name = 'M MarketB SODDE Mid-Century Silver Floor Lamp E26';
  soddeFloor.userData = {
    dimensions: [32, 32, 150],
    bounds: [458, 490, 746, 778],
    role: '마켓비 SODDE 미드센추리 실버 장스탠드 (CHAKOC 스틸 프레임 톤 매칭)'
  };
  {
    const mSatinSilver = M('#dce1e6', { metalness: 0.55, roughness: 0.28 });
    // 타공 디테일이 있는 실버 원형 베이스 + 약간 뒤로 기울어진 슬림 스틸 폴
    CY(soddeFloor, 13.5, 13.5, 1.2, mSatinSilver, 0, 0, 0, 32);
    CY(soddeFloor, 5.2, 5.2, 1.3, M('#dcd6cc', { roughness: 0.8 }), 3.5, 0.05, 0, 20);
    dRod(soddeFloor, [-4, 1.2, 0], [0, 142, 0], 0.85, mSatinSilver);
    // 아르네 야콥센(AJ) 스타일 비대칭 실버 원뿔 헤드 (선반 쪽으로 부드럽게 지향)
    const ajHead = new THREE.Group();
    ajHead.position.set(0, cm(142), 0);
    ajHead.rotation.z = -0.62;
    soddeFloor.add(ajHead);
    CY(ajHead, 2.2, 8.2, 22, mSatinSilver, 0, -14, 0, 28);
    const soddeBulbMat = new THREE.MeshStandardMaterial({
      color: '#fff6e0',
      emissive: '#ffd996',
      emissiveIntensity: 0.35
    });
    CY(ajHead, 2.4, 2.4, 3.0, soddeBulbMat, 0, -12, 0, 16);
    const soddeLight = new THREE.PointLight('#ffe2ad', 1.05, 4.2, 1.6);
    soddeLight.position.set(0, -cm(16), 0);
    ajHead.add(soddeLight);
    if (addAccent) addAccent(soddeLight, soddeBulbMat, 2.3, 2.6, 0.2, 0.35);
  }

  // ============================================================================
  // 4. 북서 다이닝 존: 마켓비 아나타 원형테이블(Ø80cm) + 아나타 체어 2인 세트
  // ============================================================================
  const diningGroup = placeM(585, 490, 0);
  diningGroup.name = 'M MarketB ANATA Round Table D80 & 2 Chairs';
  diningGroup.userData = {
    dimensions: [80, 80, 74],
    bounds: [545, 625, 450, 530],
    role: '마켓비 아나타 원형테이블 Ø80cm + 아나타 체어 2인 세트'
  };
  CY(diningGroup, 40, 40, 2.2, mWhite, 0, 71.8, 0, 36);
  CY(diningGroup, 22, 22, 1.8, mOak, 0, 70, 0, 24);
  for (const [dx, dz] of [[18, 18], [-18, 18], [-18, -18], [18, -18]]) {
    dRod(diningGroup, [dx * 0.45, 70, dz * 0.45], [dx, 0, dz], 1.6, mOak);
  }
  CY(diningGroup, 2.2, 3.2, 9, mCeramic, 0, 74, 0, 20);
  dRod(diningGroup, [0, 83, 0], [1, 91, 1], 0.25, mLeafGreen);
  CY(diningGroup, 2.0, 0.5, 1.5, mPopYellow, 1, 91, 1, 16);

  for (const [cx, rot] of [[-36, Math.PI / 2], [36, -Math.PI / 2]]) {
    const ch = new THREE.Group();
    ch.position.set(cm(cx), 0, 0);
    ch.rotation.y = rot;
    diningGroup.add(ch);
    B(ch, 42, 2.2, 40, mWhite, 0, 43.8, 0, 0.8);
    B(ch, 38, 2.5, 36, mFabricIvory, 0, 46, 0, 1.2);
    B(ch, 40, 24, 2.0, mWhite, 0, 56, -18, 0.8);
    for (const [lx, lz] of [[-17, -15], [17, -15], [-17, 15], [17, 15]]) {
      dRod(ch, [lx * 0.8, 43.8, lz * 0.8], [lx, 0, lz], 1.4, mOak);
    }
  }

  // ============================================================================
  // 5. 동쪽 벽 휴식 존: 마켓비 니스코 라운지체어 + 이지보 툴프리 3단 트롤리 카트
  // ============================================================================
  const niskoChair = placeM(750, 705, -Math.PI / 2);
  niskoChair.name = 'M MarketB NISKO Lounge Chair';
  niskoChair.userData = {
    dimensions: [68, 76, 78],
    bounds: [716, 784, 667, 743],
    role: '마켓비 니스코 1인 패브릭 라운지 안락의자'
  };
  for (const ax of [-31, 31]) {
    B(niskoChair, 3.8, 2.4, 62, mOak, ax, 52, 0, 0.4);
    dRod(niskoChair, [ax, 52, -24], [ax, 0, -28], 1.8, mOak);
    dRod(niskoChair, [ax, 52, 24], [ax, 0, 30], 1.8, mOak);
  }
  B(niskoChair, 58, 3.2, 54, mOak, 0, 32, 2, 0.3);
  B(niskoChair, 56, 12, 54, mFabricIvory, 0, 35, 2, 2.5);
  const backCushion = new THREE.Group();
  backCushion.position.set(0, cm(46), -cm(18));
  backCushion.rotation.x = -0.22;
  niskoChair.add(backCushion);
  B(backCushion, 56, 42, 10, mFabricIvory, 0, 0, 0, 2.5);
  B(backCushion, 36, 24, 7, mTerracotta, 0, 4, 7, 2.0);

  const trolley = placeM(755, 625, 0);
  trolley.name = 'M MarketB EASYBO Tool-Free 3-Tier Trolley Rivera Oak';
  trolley.userData = {
    dimensions: [45, 32, 75],
    bounds: [732.5, 777.5, 609, 641],
    role: '마켓비 이지보 툴프리 3단 이동식 트롤리 카트'
  };
  for (const [tx, tz] of [[-18, -12], [18, -12], [-18, 12], [18, 12]]) {
    CY(trolley, 1.8, 1.8, 1.2, mBlack, tx, 0, tz, 16);
    CY(trolley, 0.6, 0.6, 3.0, mSteel, tx, 1.2, tz, 12);
  }
  for (const ty of [4, 38, 70]) {
    B(trolley, 42, 4.5, 28, mOak, 0, ty, 0, 0.5);
  }
  for (const tx of [-20, 20]) {
    CY(trolley, 0.9, 0.9, 72, mSteel, tx, 3, 0, 16);
  }
  dRod(trolley, [-20, 75, 0], [20, 75, 0], 0.9, mSteel);
  CY(trolley, 3.2, 2.8, 7.5, mClearGlass, -9, 74.5, 0, 20);
  B(trolley, 18, 1.0, 22, mRetroGreen, 7, 74.5, 0, 0.2);

  return {
    group: grpM,
    chakoc,
    simplieTable,
    articoFrame,
    rustaFloor: soddeFloor,
    soddeFloor,
    diningGroup,
    niskoChair,
    trolley
  };
}
