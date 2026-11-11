// M안: 마켓비 CHAKOC 선반 850 중심 미드센추리 바이닐·쇼케이스·컬렉터 홈스타일링 (2026-11-11 · LP/턴테이블 허리 높이 인체공학 개선)
// 사용자 피드백 반영 ("lp가 너무 높은데 ? 최선이야 ??"):
//   기존 5단 최상단(153.8cm · 눈/이마 높이)에 있던 턴테이블·스피커를 실제 레퍼런스 사진 1·2·4번과 동일하게
//   서서 LP를 꺼내고 더스트커버를 열고 바늘을 올리기 가장 편한 '허리·손 높이(82.8~84.5cm)'로 재설계!
//
// [기본 추천 · Mode A (dual = true, #m): CHAKOC 850 넓은 5단(155cm) + 같은 라인 넓은 3단(84.5cm) 나란히 모듈 조합]
//   - 서쪽 벽 북측(x=474.5, z=598.5): 마켓비 CHAKOC 선반 850 넓은 3단 · 내추럴 (85×41×84.5cm · 70,900원 · product_no=29042)
//     · 상판 오픈 청음 스테이지(y=84.5cm 허리 높이! 상부 간섭 0cm): 좌·우 북쉘프 스피커 + 중앙 아날로그 턴테이블(아크릴 더스트커버 개방) + PLORN 유리화병 대형 몬스테라 + 달항아리 노란 프리지아
//     · 중단(y=46.5cm · 유효높이 36cm): 턴테이블 바로 손 아래! 12인치 LP 36장 세로 수납 + 파스텔 핑크 시티팝 LP 자켓(SQUALL) 전면 진열
//     · 하단(y=8.5cm · 유효높이 36cm): 파스텔 핑크 미니멀 LP 자켓(SCRATCH) 전면 진열 + 12인치 LP 40장 세로 수납
//     · 상부 벽면(y=132~202cm): 마켓비 ARTICO 50×70cm 미드센추리 캔버스액자
//   - 서쪽 벽 중앙(x=474, z=685): 마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85×40×155cm · 149,000원 · product_no=41358)
//     · 1단 최상단(y=153.8cm): 가벼운 조명·패브릭·오브제 전용 — 우측 마켓비 VALON 골드 플리츠 단스탠드 + 중앙 접힌 니트 패브릭 스택 + 좌측 블랙 해트박스·미니 헬멧·매거진
//     · 2단 눈높이(y=118.3cm): 마켓비 폴라보(POLABO) 양면 4문 모루유리 미니수납장(내부 웜 쇼케이스 조명·위스키/진 보틀·크리스탈잔·SLATTIS 시계·엽서) + 좌측 매거진 & DONOS 글로브 무드등
//     · 3단 허리 높이(y=82.8cm — 옆 3단 상판 84.5cm와 수평 라인 일치!): 좌측 마켓비 GUBON 미니 옐로우 버섯램프(Ø20×31cm) + 중앙 목각 마네킹·그린 레트로 시계 + 우측(턴테이블 바로 옆) 레트로 진공관 앰프
//     · 4단(y=47.3cm — 옆 3단 중단 46.5cm와 수평 일치!): 마켓비 폴라보(POLABO) 2서랍 미니수납장 + 상판 NEODA 우드트레이 커피 서버 세트 + 디자인 아트북
//     · 5단 최하단(y=11.8cm): 마켓비 벤탄(BENTAN) 낮은 2문 케인 라탄 미니수납장 + 대형 아트북 화집
//   - 북측 끝 바닥(x=474, z=534): 마켓비 심플리(SIMPLIE) 블랙 와이어 사이드테이블(35×35×35cm) + 전용 아크릴 상판 매거진·플랜터 큐브
//
// [비교 대안 · Mode B (single = true, #m,single): 추가 선반 없이 CHAKOC 850 넓은 5단 1개 단독 선반 높이조절 배치]
//   - CHAKOC 5단의 측면 9단 사다리 가로대 높이조절 구조를 활용해 상부 선반을 134.2cm(8번째 가로대)에 걸어
//     3단(y=82.8cm 허리 높이) 상부 유효높이를 33.7cm → 51.4cm로 확장!
//   - 82.8cm 허리 높이에 턴테이블·스피커 배치(더스트커버 개방 여유 51.4cm 확보), 바로 아래 4단(47.3cm)에 LP 바이닐·핑크 자켓·GUBON 버섯램프 배치!

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
  grpM.name = 'M MarketB CHAKOC 850 Waist-Height Vinyl & Mid-Century Showcase';
  grpM.visible = false;
  scene.add(grpM);

  // 재질 팔레트
  const mOak = dWood('#cca673', '#9d7443');
  const mCamphor = dWood('#c59660', '#916537');
  const mLightBirch = dWood('#dcc096', '#b59264');
  const mWalnut = dWood('#7c5232', '#52331b');
  const mSteel = M('#cfd4d8', { metalness: 0.72, roughness: 0.25 });
  const mChrome = M('#e6eaed', { metalness: 0.88, roughness: 0.14 });
  const mGold = M('#cda34f', { metalness: 0.82, roughness: 0.24 });
  const mCopper = M('#c67c4e', { metalness: 0.78, roughness: 0.28 });
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

  // 파스텔 핑크 시티팝 LP 앨범 커버 텍스처 1 (레퍼런스 4번 상단 오마주)
  const pinkLpTex1 = canvasTex(256, 256, (g) => {
    const grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, '#f4dce4');
    grd.addColorStop(1, '#ecc8d6');
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#2d2930';
    g.beginPath(); g.arc(128, 118, 56, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f2d3cb';
    g.beginPath(); g.arc(128, 128, 42, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#262228';
    for (const [cx, cy, r] of [[92,92,20],[115,80,22],[142,80,22],[165,94,19],[84,118,16],[172,118,16]]) {
      g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
    }
    g.beginPath(); g.arc(113, 124, 3.5, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(143, 124, 3.5, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#d98a8c';
    g.fillRect(121, 146, 14, 5);
    g.fillStyle = '#5e4955';
    g.font = 'bold 15px Georgia, serif';
    g.textAlign = 'center';
    g.fillText('SQUALL · CITY POP ARCHIVE', 128, 28);
    g.fillStyle = '#ffffff';
    g.fillRect(88, 206, 80, 38);
    g.fillStyle = '#d99aa8';
    g.fillRect(96, 214, 64, 22);
  });

  // 파스텔 핑크 미니멀 LP 자켓 텍스처 2 (레퍼런스 4번 하단 오마주)
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

  // 아트 매거진 표지 텍스처
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

  // 미드센추리 지오메트릭 캔버스 액자 텍스처 (마켓비 ARTICO 33889)
  const articoTex = canvasTex(256, 360, (g) => {
    g.fillStyle = '#f4efe6';
    g.fillRect(0, 0, 256, 360);
    g.fillStyle = '#e7bec6';
    g.beginPath(); g.moveTo(24, 24); g.lineTo(88, 24); g.lineTo(56, 98); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(88, 24); g.lineTo(152, 24); g.lineTo(120, 98); g.closePath(); g.fill();
    g.fillStyle = '#243a5e';
    g.fillRect(36, 128, 72, 54);
    g.fillRect(88, 214, 52, 68);
    g.beginPath(); g.moveTo(156, 26); g.lineTo(232, 98); g.lineTo(156, 98); g.closePath(); g.fill();
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

  function placeIn(parent, x, z, rotY = 0) {
    const g = new THREE.Group();
    g.__planPlaced = true;
    g.position.set(cm(x), 0, cm(z));
    g.rotation.y = rotY;
    parent.add(g);
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
      const tilt = (idx % 7 === 5) ? 0.055 : 0;
      const col = M(lpPalette[idx % lpPalette.length], { roughness: 0.48 });
      const rec = new THREE.Group();
      rec.position.set(cm(cx + thick / 2), cm(by), cm(cz + (r() - 0.5) * 0.8));
      rec.rotation.z = tilt;
      parent.add(rec);
      B(rec, thick, 31.0 - (idx % 3) * 0.3, 31.0, col, 0, 0, 0, 0.06);
      B(rec, thick * 0.5, 30.2, 30.4, mWhite, 0, 0.4, 0.2);
      cx += thick + 0.22;
      idx++;
    }
  }

  // 전면(Face-out) 12인치 파스텔 핑크 LP 자켓 거치 헬퍼
  function addFaceOutLp(parent, cx, by, cz, tex, stopperRange = null) {
    const lpShow = new THREE.Group();
    lpShow.position.set(cm(cx), cm(by), cm(cz));
    lpShow.rotation.x = -0.11;
    parent.add(lpShow);
    B(lpShow, 31.2, 31.2, 0.9, mWhite, 0, 0, 0, 0.1);
    const jacket = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(31.0), cm(31.0)),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.32 })
    );
    jacket.position.set(0, cm(15.6), cm(0.5));
    lpShow.add(jacket);
    if (stopperRange) {
      dRod(parent, [stopperRange[0], by + 6.5, cz + 3.0], [stopperRange[1], by + 6.5, cz + 3.0], 0.22, mChrome);
    }
  }

  // ============================================================================
  // 공통 모듈 빌더 (턴테이블+스피커 세트 / 폴라보 유리쇼케이스 / 폴라보 2서랍 / 벤탄 라탄장 / 조명 3종)
  // ============================================================================
  function addTurntableStage(parent, yBase, opts = {}) {
    const spkLeftX = opts.spkLeftX ?? -29.5;
    const spkRightX = opts.spkRightX ?? 29.5;
    const ttX = opts.ttX ?? 0;
    const lidAngle = opts.lidAngle ?? -0.58; // 상부 간섭 없을 때 시원하게 오픈!

    // 좌·우 블랙 북쉘프 스피커 페어
    for (const sx of [spkLeftX, spkRightX]) {
      const spk = new THREE.Group();
      spk.position.set(cm(sx), cm(yBase), cm(21));
      parent.add(spk);
      B(spk, 12.2, 0.8, 15.0, M('#45474a', { roughness: 0.8 }), 0, 0, 0, 0.2);
      B(spk, 12.5, 20.0, 15.5, mSpeakerBlack, 0, 0.8, 0, 0.4);
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
      CY(tw, 0.45, 0.45, 0.5, mCopper, 3.8, 0, 11.2, 12);
    }

    // 좌측 스피커 뒤 PLORN 유리화병 + 대형 몬스테라 잎 (레퍼런스 4번 @wws_hyeongho)
    if (opts.withPlants !== false) {
      const vx = spkLeftX + 3.5;
      CY(parent, 3.2, 4.2, 15, mClearGlass, vx, yBase, 9.5, 20);
      const leafHeightScale = opts.compactPlants ? 0.72 : 1.0;
      for (const [dx, dy, dz, rotY, rotZ, lw, ld] of [
        [-10, 35 * leafHeightScale, 2, 0.3, 0.28, 14.5, 10.5],
        [2, 40 * leafHeightScale, 4, -0.2, -0.12, 15.5, 11.5],
        [13, 32 * leafHeightScale, 1.5, -0.55, -0.32, 12.5, 9.2]
      ]) {
        dRod(parent, [vx, yBase + 8, 9.5], [vx + dx, yBase + dy, 9.5 + dz], 0.26, mLeafGreen);
        const lf = new THREE.Group();
        lf.position.set(cm(vx + dx), cm(yBase + dy), cm(9.5 + dz));
        lf.rotation.set(0.18, rotY, rotZ);
        parent.add(lf);
        B(lf, lw, 0.22, ld, mLeafGreen, 0, 0, 0, 0.4);
      }

      // 우측 스피커 위 화이트 세라믹 달항아리 화병 + 노란 프리지아 꽃다발
      const vaseY = yBase + 20.8;
      const vPts = [
        [0, 0], [2.8, 0], [4.6, 2.4], [4.9, 5.2], [3.8, 7.8], [1.8, 9.0], [2.1, 9.6]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const vaseMesh = new THREE.Mesh(new THREE.LatheGeometry(vPts, 24), mCeramic);
      vaseMesh.position.set(cm(spkRightX), cm(vaseY), cm(21));
      vaseMesh.castShadow = true;
      parent.add(vaseMesh);
      for (const [fx, fy, fz] of [
        [spkRightX - 1.8, vaseY + 14.2, 20],
        [spkRightX + 0.4, vaseY + 15.6, 21.5],
        [spkRightX + 2.2, vaseY + 13.5, 20.5],
        [spkRightX - 0.5, vaseY + 13.0, 23]
      ]) {
        dRod(parent, [spkRightX, vaseY + 8.5, 21], [fx, fy, fz], 0.16, mLeafGreen);
        CY(parent, 1.35, 0.6, 1.4, mPopYellow, fx, fy, fz, 12);
      }
    }

    // 중앙 아날로그 턴테이블 + 오픈 더스트커버
    const tt = new THREE.Group();
    tt.name = 'Analog Turntable at Ergonomic Waist Height';
    tt.position.set(cm(ttX), cm(yBase), cm(21.5));
    parent.add(tt);
    for (const [fx, fz] of [[-14, -11], [14, -11], [-14, 11], [14, 11]]) {
      CY(tt, 1.8, 1.8, 1.2, mChrome, fx, 0, fz, 16);
    }
    B(tt, 35, 4.2, 29, mBlack, 0, 1.2, 0, 0.35);
    B(tt, 34.6, 0.9, 0.4, mChrome, 0, 2.2, 14.5);
    CY(tt, 12.2, 12.5, 1.1, mChrome, -2.5, 5.4, 0, 36);
    CY(tt, 11.8, 11.8, 0.25, mNavy, -2.5, 6.5, 0, 36);
    CY(tt, 3.8, 3.8, 0.3, mPopYellow, -2.5, 6.65, 0, 24);
    CY(tt, 0.35, 0.35, 1.4, mChrome, -2.5, 6.5, 0, 12);
    CY(tt, 2.2, 2.4, 1.8, mChrome, 12.5, 5.4, -7.5, 20);
    dRod(tt, [12.5, 7.2, -7.5], [8.2, 7.2, 7.5], 0.26, mChrome);
    B(tt, 1.4, 0.9, 2.4, mBlack, 8.0, 6.8, 8.2, 0.1);

    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, cm(5.4), cm(-14.2));
    lidPivot.rotation.x = lidAngle;
    tt.add(lidPivot);
    B(lidPivot, 34.8, 0.4, 28.6, mAcrylic, 0, 5.2, 14.3, 0.15);
    B(lidPivot, 34.8, 5.2, 0.4, mAcrylic, 0, 0, 28.4);
    B(lidPivot, 0.4, 5.2, 28.6, mAcrylic, -17.2, 0, 14.3);
    B(lidPivot, 0.4, 5.2, 28.6, mAcrylic, 17.2, 0, 14.3);
  }

  function addValonLamp(parent, x, y, z, lightList) {
    const valon = new THREE.Group();
    valon.name = 'MarketB VALON Table Lamp Gold';
    valon.position.set(cm(x), cm(y), cm(z));
    parent.add(valon);
    CY(valon, 4.8, 5.2, 2.0, mGold, 0, 0, 0, 24);
    CY(valon, 1.6, 2.8, 2.2, mGold, 0, 2.0, 0, 20);
    CY(valon, 0.65, 0.65, 16.5, mGold, 0, 4.2, 0, 16);
    dRod(valon, [2.2, 19.5, 0], [2.2, 12.0, 0], 0.12, mGold);
    CY(valon, 0.35, 0.35, 0.9, mGold, 2.2, 11.2, 0, 10);
    const valonShadeMat = new THREE.MeshStandardMaterial({
      color: '#fbf5e6',
      emissive: '#ffd58a',
      emissiveIntensity: 0.22,
      roughness: 0.45,
      side: THREE.DoubleSide
    });
    const shadeMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(cm(4.0), cm(11.0), cm(16.0), 36, 1, true),
      valonShadeMat
    );
    shadeMesh.position.y = cm(27.2);
    shadeMesh.castShadow = true;
    valon.add(shadeMesh);
    const valonLight = new THREE.PointLight('#ffe0a3', 0.9, 2.8, 1.8);
    valonLight.position.set(0, cm(23), 0);
    valon.add(valonLight);
    if (lightList) lightList.push(valonLight);
    if (addAccent) addAccent(valonLight, valonShadeMat, 1.85, 2.2, 0.35, 0.32);
    return valon;
  }

  function addGubonLamp(parent, x, y, z, lightList) {
    const gubon = new THREE.Group();
    gubon.name = 'MarketB GUBON Mini Mushroom Table Lamp Yellow';
    gubon.position.set(cm(x), cm(y), cm(z));
    parent.add(gubon);
    const basePts = [
      [0, 0], [5.4, 0], [5.2, 0.5], [3.2, 2.4], [1.6, 6.0], [1.05, 13.5], [0.9, 19.5]
    ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
    const stemMesh = new THREE.Mesh(new THREE.LatheGeometry(basePts, 28), mPopYellow);
    stemMesh.castShadow = true;
    gubon.add(stemMesh);

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

    const finial = new THREE.Mesh(new THREE.SphereGeometry(cm(0.8), 16, 16), mChrome);
    finial.position.y = cm(30.7);
    gubon.add(finial);

    const gubonLight = new THREE.PointLight('#ffe094', 0.9, 2.2, 1.8);
    gubonLight.position.set(0, cm(18.5), 0);
    gubon.add(gubonLight);
    if (lightList) lightList.push(gubonLight);
    if (addAccent) addAccent(gubonLight, gubonDomeMat, 2.0, 2.4, 0.45, 0.35);
    return gubon;
  }

  function addPolaboGlassZone(parent, yBase, lightList, opts = {}) {
    const gx = opts.cabX ?? 9.5;
    const polaboGlass = new THREE.Group();
    polaboGlass.name = 'MarketB POLABO Glass Sliding Mini Cabinet CAM2260SL';
    polaboGlass.position.set(cm(gx), cm(yBase), cm(20));
    parent.add(polaboGlass);

    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 0, 0, 0.15);
    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 20.4, 0, 0.15);
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, -29.2, 1.6, 0);
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, 29.2, 1.6, 0);
    B(polaboGlass, 56.8, 18.8, 0.8, M('#f3ede2', { roughness: 0.7 }), 0, 1.6, -12.4);

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
    if (lightList) lightList.push(showLight);
    if (addAccent) addAccent(showLight, showGlowMat, 2.2, 2.8, 0.85, 1.15);

    // 내부 엽서·SLATTIS 시계·위스키/진 보틀·크리스탈잔
    B(polaboGlass, 7.5, 9.5, 0.2, M('#f9f6ee', { roughness: 0.4 }), -18, 8.5, -11.8);
    B(polaboGlass, 5.8, 6.2, 0.22, mNavy, -18, 10.6, -11.7);
    B(polaboGlass, 6.8, 8.5, 0.2, M('#fbf8f1', { roughness: 0.4 }), -8.5, 9.2, -11.8);
    B(polaboGlass, 5.2, 5.2, 0.22, mTerracotta, -8.5, 11.2, -11.7);
    B(polaboGlass, 8.0, 6.5, 0.2, mPopYellow, 2.5, 11.0, -11.8);

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

    CY(polaboGlass, 2.9, 2.9, 10.2, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), 8.5, 1.6, -1, 20);
    CY(polaboGlass, 1.0, 1.2, 3.8, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), 8.5, 11.8, -1, 16);
    CY(polaboGlass, 1.1, 1.1, 1.2, mGold, 8.5, 15.6, -1, 16);
    B(polaboGlass, 3.8, 4.6, 0.2, mCeramic, 8.5, 4.5, 1.9);

    CY(polaboGlass, 2.6, 2.6, 11.0, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 1.6, -2, 20);
    CY(polaboGlass, 0.9, 1.1, 3.6, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 12.6, -2, 16);
    CY(polaboGlass, 1.0, 1.0, 1.1, mBlack, 15.8, 16.2, -2, 16);

    for (const stx of [21.5, 25.8]) {
      CY(polaboGlass, 1.8, 1.8, 0.3, mClearGlass, stx, 1.6, 2, 16);
      CY(polaboGlass, 0.22, 0.22, 4.2, mClearGlass, stx, 1.9, 2, 12);
      CY(polaboGlass, 2.0, 1.1, 4.6, mClearGlass, stx, 6.1, 2, 18);
    }
    B(polaboGlass, 3.4, 5.8, 2.2, mClearGlass, -21, 1.6, 1, 0.2);
    CY(polaboGlass, 0.8, 0.8, 1.4, mGold, -21, 7.4, 1, 12);
    CY(polaboGlass, 2.2, 2.8, 4.2, mChrome, -14.5, 1.6, 2.5, 18);

    // 모루유리 슬라이딩 도어 2짝
    for (const [dx, dz, knobX] of [[-14.2, 11.8, -24.5], [6.5, 12.6, 16.8]]) {
      const door = new THREE.Group();
      door.position.set(cm(dx), cm(1.8), cm(dz));
      polaboGlass.add(door);
      B(door, 28.2, 2.0, 0.9, mCamphor, 0, 0, 0);
      B(door, 28.2, 2.0, 0.9, mCamphor, 0, 16.4, 0);
      B(door, 2.2, 14.4, 0.9, mCamphor, -13.0, 2.0, 0);
      B(door, 2.2, 14.4, 0.9, mCamphor, 13.0, 2.0, 0);
      B(door, 23.8, 14.4, 0.3, mFlutedGlass, 0, 2.0, 0);
      const kn = new THREE.Group();
      kn.position.set(cm(knobX - dx), cm(9.2), cm(0.8));
      kn.rotation.x = Math.PI / 2;
      door.add(kn);
      CY(kn, 0.9, 0.7, 0.9, mBlack, 0, 0, 0, 16);
    }

    // 좌측 전면 매거진 + 마켓비 DONOS 글로브 무드등
    const magX = opts.magX ?? -31;
    const mag = new THREE.Group();
    mag.position.set(cm(magX), cm(yBase), cm(15));
    mag.rotation.x = -0.24;
    mag.rotation.y = 0.1;
    parent.add(mag);
    B(mag, 17, 1.2, 12, mLightBirch, 0, 0, 0, 0.2);
    B(mag, 16.5, 22.5, 1.2, mWhite, 0, 1.2, 0, 0.1);
    const cover = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(16.2), cm(22.2)),
      new THREE.MeshStandardMaterial({ map: artMagTex, roughness: 0.35 })
    );
    cover.position.set(0, cm(12.3), cm(0.66));
    mag.add(cover);

    const donos = new THREE.Group();
    donos.name = 'MarketB DONOS Globe Mood Lamp';
    donos.position.set(cm(magX + 1.5), cm(yBase), cm(29));
    parent.add(donos);
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
    if (lightList) lightList.push(donosLight);
    if (addAccent) addAccent(donosLight, orbMat, 1.85, 2.8, 0.55, 0.95);
    return polaboGlass;
  }

  function addTubeAmp(parent, x, y, z, lightList) {
    const amp = new THREE.Group();
    amp.name = 'Retro Vacuum Tube Amplifier';
    amp.position.set(cm(x), cm(y), cm(z));
    parent.add(amp);
    B(amp, 22, 5.4, 17, mBlack, 0, 0, 0, 0.3);
    B(amp, 19.5, 4.4, 8.2, M('#2d3033', { metalness: 0.6, roughness: 0.35 }), 0, 5.4, -3.2, 0.2);
    const ampFront = new THREE.Group();
    ampFront.position.set(0, cm(2.7), cm(8.7));
    ampFront.rotation.x = Math.PI / 2;
    amp.add(ampFront);
    CY(ampFront, 1.15, 1.15, 0.8, mGold, -7.0, 0, 0, 16);
    CY(ampFront, 1.15, 1.15, 0.8, mGold, 7.0, 0, 0, 16);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: '#ffdcb0',
      emissive: '#ff7b1c',
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.88,
      roughness: 0.15
    });
    for (const tx of [-6.8, -2.3, 2.3, 6.8]) {
      CY(amp, 0.95, 0.95, 1.0, mChrome, tx, 5.4, 3.4, 14);
      CY(amp, 0.85, 0.85, 3.8, tubeMat, tx, 6.4, 3.4, 14);
    }
    const tubeLight = new THREE.PointLight('#ff8c38', 0.45, 1.1, 2.0);
    tubeLight.position.set(0, cm(9.8), cm(4));
    amp.add(tubeLight);
    if (lightList) lightList.push(tubeLight);
    if (addAccent) addAccent(tubeLight, tubeMat, 0.65, 2.2, 0.3, 1.1);
    return amp;
  }

  function addBentanCabinet(parent, x, y, z) {
    const bentan = new THREE.Group();
    bentan.name = 'MarketB BENTAN Rattan Sliding 2-Door Mini Cabinet SHM2460';
    bentan.position.set(cm(x), cm(y), cm(z));
    parent.add(bentan);
    B(bentan, 60, 1.6, 19.5, mCamphor, 0, 0, 0, 0.15);
    B(bentan, 60, 1.6, 19.5, mCamphor, 0, 22.4, 0, 0.15);
    B(bentan, 1.6, 20.8, 19.5, mCamphor, -29.2, 1.6, 0);
    B(bentan, 1.6, 20.8, 19.5, mCamphor, 29.2, 1.6, 0);
    B(bentan, 56.8, 20.8, 0.8, mWalnut, 0, 1.6, -9.0);
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
    B(bentan, 22, 2.2, 15, mFabricIvory, -14, 24.0, 0, 0.2);
    B(bentan, 19, 2.0, 14, mNavy, -14, 26.2, 0, 0.2);
    CY(bentan, 3.8, 2.6, 5.2, mCeramic, 14, 24.0, 0, 20);
    return bentan;
  }

  function buildChakoc5Frame(parent, boardHeights) {
    const legPositions = [[-41.5, 1.5], [41.5, 1.5], [-41.5, 38.5], [41.5, 38.5]];
    for (const [lx, lz] of legPositions) {
      CY(parent, 1.5, 1.5, 1.1, mBlack, lx, 0, lz, 20);
      CY(parent, 0.65, 0.65, 1.4, mSteel, lx, 1.1, lz, 16);
      CY(parent, 0.85, 0.85, 152.0, mSteel, lx, 2.5, lz, 20);
      CY(parent, 0.92, 0.92, 0.6, mChrome, lx, 154.5, lz, 20);
    }
    const ladderHeights = [10, 27.7, 45.5, 63.2, 81, 98.7, 116.5, 134.2, 152];
    for (const hy of ladderHeights) {
      dRod(parent, [-41.5, hy, 1.5], [-41.5, hy, 38.5], 0.34, mSteel);
      dRod(parent, [41.5, hy, 1.5], [41.5, hy, 38.5], 0.34, mSteel);
    }
    dRod(parent, [-41, 14, 1.5], [41, 149, 1.5], 0.28, mChrome);
    dRod(parent, [-41, 149, 1.5], [41, 14, 1.5], 0.28, mChrome);
    CY(parent, 1.2, 1.2, 0.8, mSteel, 0, 81.2, 1.5, 16);

    for (const sy of boardHeights) {
      B(parent, 84.4, 1.8, 38.2, mOak, 0, sy, 20, 0.2);
      for (const [kx, kz] of legPositions) {
        B(parent, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.2, kz, 0.15);
      }
    }

    // 측면 기둥 디테일: 외측 기둥에 매달린 원목 원숭이 피규어 & S고리 헤드폰
    const monkey = new THREE.Group();
    monkey.position.set(cm(-42.4), cm(120), cm(26));
    monkey.rotation.y = -Math.PI / 3;
    parent.add(monkey);
    dRod(monkey, [0, 5.5, 0], [0.8, 14.5, 0], 0.42, mWalnut);
    dRod(monkey, [-0.8, 5.5, 0], [-2.2, 1.5, 1.0], 0.42, mWalnut);
    CY(monkey, 1.8, 1.6, 5.5, mWalnut, 0, 1.2, 0, 16);
    CY(monkey, 1.3, 1.3, 3.8, mLightBirch, 0, 1.8, 0.6, 14);
    const mHead = new THREE.Mesh(new THREE.SphereGeometry(cm(1.85), 16, 16), mWalnut);
    mHead.position.set(0, cm(8.2), cm(0.3));
    monkey.add(mHead);
    const mMuzzle = new THREE.Mesh(new THREE.SphereGeometry(cm(1.2), 14, 14), mLightBirch);
    mMuzzle.position.set(0, cm(7.8), cm(1.3));
    monkey.add(mMuzzle);
    dRod(monkey, [-0.9, 1.2, 0], [-1.3, -2.5, 0.8], 0.42, mWalnut);
    dRod(monkey, [0.9, 1.2, 0], [1.3, -2.5, 0.8], 0.42, mWalnut);

    dRod(parent, [-41.5, 99.5, 24], [-42.8, 96.5, 24], 0.25, mChrome);
    CY(parent, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 21.2, 20);
    CY(parent, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 26.8, 20);
    dRod(parent, [-43.5, 91, 21.2], [-43.5, 96.5, 24], 0.42, mBlack);
    dRod(parent, [-43.5, 96.5, 24], [-43.5, 91, 26.8], 0.42, mBlack);
  }

  // ============================================================================
  // [MODE A · 기본 1순위 추천]: CHAKOC 850 넓은 5단(z=685) + CHAKOC 850 넓은 3단(z=598.5)
  // 레퍼런스 1번(@worthwhile_official) & 4번(@wws_hyeongho) 비대칭 허리높이 바이닐 모듈 완벽 구현!
  // ============================================================================
  const dualGroup = new THREE.Group();
  dualGroup.name = 'M Mode A: CHAKOC 5-Tier + CHAKOC 3-Tier Waist-Height Vinyl Station';
  grpM.add(dualGroup);
  const dualLights = [];

  // A-1. 마켓비 CHAKOC 선반 850 넓은 3단 · 내추럴 (85 × 41 × 84.5cm · product_no=29042 · 70,900원)
  // 위치: 서쪽 벽 북측(x=474.5, z=598.5, rotY=Math.PI/2) — 5단(z=642.5..727.5)과 1.5cm 간격!
  const chakoc3 = placeIn(dualGroup, 474.5, 598.5, Math.PI / 2);
  chakoc3.name = 'M MarketB CHAKOC Shelf 850 3-Tier Waist-Height Vinyl & Turntable';
  chakoc3.userData = {
    dimensions: [85, 41, 84.5],
    bounds: [454, 495, 556, 641],
    role: '마켓비 CHAKOC 선반 850 넓은 3단 (상판 84.5cm 허리 높이 턴테이블·스피커 스테이지 + 36cm LP 2단 수납)'
  };
  {
    const leg3 = [[-41.5, 1.5], [41.5, 1.5], [-41.5, 39.5], [41.5, 39.5]];
    for (const [lx, lz] of leg3) {
      CY(chakoc3, 1.5, 1.5, 1.0, mBlack, lx, 0, lz, 20);
      CY(chakoc3, 0.65, 0.65, 1.2, mSteel, lx, 1.0, lz, 16);
      CY(chakoc3, 0.85, 0.85, 81.8, mSteel, lx, 2.2, lz, 20);
      CY(chakoc3, 0.92, 0.92, 0.5, mChrome, lx, 84.0, lz, 20);
    }
    // 3단 실측: 하판 y=6.5(상면 8.5), 중판 y=44.5(상면 46.5, 하칸 유효 36cm), 상판 y=82.5(상면 84.5cm, 중칸 유효 36cm)
    for (const hy of [6.5, 25.5, 44.5, 63.5, 82.5]) {
      dRod(chakoc3, [-41.5, hy, 1.5], [-41.5, hy, 39.5], 0.34, mSteel);
      dRod(chakoc3, [41.5, hy, 1.5], [41.5, hy, 39.5], 0.34, mSteel);
    }
    // 후면 X자 크로스 지지대
    dRod(chakoc3, [-41, 9.5, 1.5], [41, 80.5, 1.5], 0.28, mChrome);
    dRod(chakoc3, [-41, 80.5, 1.5], [41, 9.5, 1.5], 0.28, mChrome);
    CY(chakoc3, 1.2, 1.2, 0.8, mSteel, 0, 45.0, 1.5, 16);

    for (const sy of [6.5, 44.5, 82.5]) {
      B(chakoc3, 84.4, 2.0, 39.6, mOak, 0, sy, 20.5, 0.2);
      for (const [kx, kz] of leg3) {
        B(chakoc3, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.1, kz, 0.15);
      }
    }

    // [상판 y = 84.5cm: 허리 높이 오픈 LP 청음 스테이지! 상부 선반 간섭 0!]
    addTurntableStage(chakoc3, 84.5, { spkLeftX: -29.5, spkRightX: 29.5, ttX: 0, lidAngle: -0.58 });

    // [중단 y = 46.5cm (유효높이 36.0cm): 턴테이블 바로 손 아래 메인 LP 수납칸!]
    addVinylRow(chakoc3, -39.2, -5.8, 46.5, 21.0, 42);
    B(chakoc3, 0.35, 18, 15, mChrome, -5.4, 46.5, 21.0);
    B(chakoc3, 6.5, 0.35, 15, mChrome, -2.2, 46.5, 21.0);
    addFaceOutLp(chakoc3, 18.0, 46.5, 22.0, pinkLpTex1, [1.5, 34.5]);

    // [하단 y = 8.5cm (유효높이 36.0cm): 전면 파스텔 핑크 LP 자켓 + 추가 12인치 LP 컬렉션!]
    addFaceOutLp(chakoc3, -21.5, 8.5, 22.0, pinkLpTex2, [-38.0, -5.0]);
    addVinylRow(chakoc3, -1.5, 39.2, 8.5, 21.0, 88);
    B(chakoc3, 0.35, 18, 15, mChrome, -1.9, 8.5, 21.0);
  }

  // A-2. 마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85 × 40 × 155cm · product_no=41358 · 149,000원)
  const chakoc5Dual = placeIn(dualGroup, 474, 685, Math.PI / 2);
  chakoc5Dual.name = 'M MarketB CHAKOC Shelf 850 5-Tier Curated Showcase';
  chakoc5Dual.userData = {
    dimensions: [85, 40, 155],
    bounds: [454, 494, 642.5, 727.5],
    role: '마켓비 CHAKOC 선반 850 넓은 5단 쇼케이스·조명·우드서랍·라탄장 큐레이션'
  };
  buildChakoc5Frame(chakoc5Dual, [10, 45.5, 81, 116.5, 152]);
  {
    // [1단 최상단 y = 153.8cm: 가벼운 조명·패브릭·컬렉터 오브제 전용! (레퍼런스 1번 상단 100% 재현)]
    const y1 = 153.8;
    // 우측 끝 VALON 골드 플리츠 단스탠드
    addValonLamp(chakoc5Dual, 29.5, y1, 21, dualLights);
    // 중앙 접힌 버건디·핑크·아이보리 니트 패브릭 스택 (레퍼런스 1번 상단 중앙!)
    B(chakoc5Dual, 22, 3.0, 17, mBurgundy, 2.5, y1, 20.5, 0.9);
    B(chakoc5Dual, 20.5, 2.8, 16, M('#d48b9c', { roughness: 0.88 }), 2.5, y1 + 3.0, 20.5, 0.9);
    B(chakoc5Dual, 19.0, 2.6, 15, mFabricIvory, 2.5, y1 + 5.8, 20.5, 0.9);
    // 좌측 매트블랙 라운드 해트박스 + 화이트 미니 컬렉터 헬멧 오브제 (레퍼런스 1번 상단 좌측!)
    CY(chakoc5Dual, 9.2, 9.2, 11.5, mBlack, -24, y1, 19.5, 28);
    CY(chakoc5Dual, 9.5, 9.5, 2.2, mBlack, -24, y1 + 10.2, 19.5, 28);
    const helm = new THREE.Group();
    helm.position.set(cm(-24), cm(y1 + 12.4), cm(19.5));
    helm.rotation.y = 0.28;
    chakoc5Dual.add(helm);
    CY(helm, 4.2, 4.6, 3.8, mWhite, 0, 0, 0, 24);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(cm(4.5), 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), mWhite);
    dome.position.y = cm(3.6);
    helm.add(dome);
    B(helm, 6.6, 2.4, 1.4, mBlack, 0, 2.8, 3.8, 0.4);

    // [2단 눈높이 y = 118.3cm: 폴라보 양면 4문 모루유리 미니수납장(위스키바·SLATTIS 시계) + 좌측 매거진·DONOS 무드등]
    addPolaboGlassZone(chakoc5Dual, 118.3, dualLights);

    // [3단 허리 높이 y = 82.8cm (옆 3단 선반 상판 84.5cm 턴테이블과 수평 연결!): GUBON 옐로우 버섯램프 + 마네킹/시계 + 우측 진공관 앰프]
    const y3 = 82.8;
    addGubonLamp(chakoc5Dual, -27.5, y3, 20.5, dualLights);
    // 중앙 컬러 하드커버 북스택 + 원목 관절 마네킹 + 레트로 그린 아치 시계
    B(chakoc5Dual, 19, 2.4, 15, mFabricIvory, -3.5, y3, 19.5, 0.2);
    B(chakoc5Dual, 17.5, 2.2, 14, mTerracotta, -3.5, y3 + 2.4, 19.5, 0.2);
    const gClk = new THREE.Group();
    gClk.position.set(cm(-5.5), cm(y3 + 4.6), cm(20.5));
    gClk.rotation.y = 0.15;
    chakoc5Dual.add(gClk);
    B(gClk, 1.4, 5.5, 2.2, mRetroGreen, -1.8, 0, 0, 0.2);
    B(gClk, 1.4, 5.5, 2.2, mRetroGreen, 1.8, 0, 0, 0.2);
    const topCyl = new THREE.Group();
    topCyl.position.set(0, cm(6.2), 0);
    topCyl.rotation.x = Math.PI / 2;
    gClk.add(topCyl);
    CY(topCyl, 2.6, 2.6, 2.4, mRetroGreen, 0, -1.2, 0, 24);
    CY(topCyl, 2.0, 2.0, 2.6, M('#e6a5a8', { roughness: 0.35 }), 0, -1.3, 0, 20);

    const mq = new THREE.Group();
    mq.position.set(cm(5.5), cm(y3), cm(28.5));
    chakoc5Dual.add(mq);
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

    // 우측(+x = 북쪽, 바로 옆 CHAKOC 3단 턴테이블과 20cm 거리 직결!): 레트로 진공관 앰프
    addTubeAmp(chakoc5Dual, 23.5, y3, 21.5, dualLights);

    // [4단 y = 47.3cm: 폴라보 2서랍 미니수납장 + 상판 NEODA 우드트레이 커피 세트 + 우측 디자인 아트북]
    const y4 = 47.3;
    const polabo2Dr = new THREE.Group();
    polabo2Dr.name = 'MarketB POLABO 2-Drawer Mini Unit BSM2266';
    polabo2Dr.position.set(cm(-6.5), cm(y4), cm(22));
    chakoc5Dual.add(polabo2Dr);
    B(polabo2Dr, 66.7, 1.5, 25.0, mCamphor, 0, 0, 0, 0.15);
    B(polabo2Dr, 1.5, 20.5, 25.0, mCamphor, -32.6, 0, 0, 0.15);
    B(polabo2Dr, 1.5, 20.5, 25.0, mCamphor, 32.6, 0, 0, 0.15);
    B(polabo2Dr, 63.7, 20.5, 1.2, mCamphor, 0, 0, -11.9, 0.15);
    B(polabo2Dr, 63.7, 1.4, 23.8, mCamphor, 0, 13.1, 0.6, 0.1);
    B(polabo2Dr, 1.4, 11.6, 23.5, mCamphor, 0, 1.5, 0.5);
    for (const dx of [-16.2, 16.2]) {
      B(polabo2Dr, 30.8, 11.2, 1.4, mLightBirch, dx, 1.7, 12.1, 0.2);
      const kn = new THREE.Group();
      kn.position.set(cm(dx), cm(7.3), cm(13.2));
      kn.rotation.x = Math.PI / 2;
      polabo2Dr.add(kn);
      CY(kn, 1.0, 0.8, 1.2, mWalnut, 0, 0, 0, 16);
    }
    const trayY = 14.5;
    B(polabo2Dr, 28, 1.4, 19, mLightBirch, -12, trayY, 1, 0.4);
    CY(polabo2Dr, 3.2, 4.0, 8.5, mClearGlass, -18, trayY + 1.4, 1, 20);
    dRod(polabo2Dr, [-14.5, trayY + 3.5, 1], [-14.5, trayY + 8.0, 1], 0.3, mClearGlass);
    CY(polabo2Dr, 2.4, 2.0, 4.8, mCeramic, -7, trayY + 1.4, -1, 18);
    CY(polabo2Dr, 3.2, 3.2, 0.5, mBlack, -7, trayY + 1.0, -1, 18);
    CY(polabo2Dr, 2.2, 2.2, 6.2, mChrome, -6, trayY + 1.4, 5.5, 18);
    // 우측 상판 원두 캐니스터 2개
    CY(polabo2Dr, 3.6, 3.6, 9.2, mBlack, 12, trayY, 0, 20);
    CY(polabo2Dr, 3.7, 3.7, 1.1, mCamphor, 12, trayY + 9.2, 0, 20);
    CY(polabo2Dr, 3.4, 3.4, 7.8, mCeramic, 21.5, trayY, 1, 20);
    CY(polabo2Dr, 3.5, 3.5, 1.0, mCamphor, 21.5, trayY + 7.8, 1, 20);

    const bCols = [mRetroGreen, mFabricIvory, mTerracotta, mNavy];
    let bx = 28.5;
    for (let i = 0; i < 4; i++) {
      B(chakoc5Dual, 2.3, 25 - (i % 2) * 2.2, 21, bCols[i], bx + 1.15, y4, 21, 0.12);
      B(chakoc5Dual, 1.8, 24 - (i % 2) * 2.2, 20, mWhite, bx + 1.15, y4 + 0.4, 21.2);
      bx += 2.6;
    }

    // [5단 최하단 y = 11.8cm: 벤탄 낮은 2문 케인 라탄 미니수납장 + 우측 대형 아트북 화집]
    const y5 = 11.8;
    addBentanCabinet(chakoc5Dual, -9.5, y5, 23);
    const fCols = [mNavy, mFabricIvory, mBurgundy, mLightBirch, mRetroGreen, mTerracotta];
    let fx = 22.0;
    for (let i = 0; i < 6; i++) {
      B(chakoc5Dual, 2.4, 28 - (i % 3) * 1.8, 23, fCols[i], fx + 1.2, y5, 21, 0.12);
      B(chakoc5Dual, 1.9, 27 - (i % 3) * 1.8, 22, mWhite, fx + 1.2, y5 + 0.4, 21.2);
      fx += 2.7;
    }
  }

  // ============================================================================
  // [MODE B · 5단 단독 대안 (#m,single)]: 추가 선반 없이 CHAKOC 850 넓은 5단 1개 단독 높이조절 배치
  // 상부 선반을 134.2cm(8번 가로대)로 올려 3단(y=82.8cm 허리 높이) 상부 유효높이를 51.4cm로 확보!
  // ============================================================================
  const singleGroup = new THREE.Group();
  singleGroup.name = 'M Mode B: Single CHAKOC 5-Tier Height-Adjusted Waist Turntable';
  singleGroup.visible = false;
  grpM.add(singleGroup);
  const singleLights = [];

  const chakoc5Single = placeIn(singleGroup, 474, 685, Math.PI / 2);
  chakoc5Single.name = 'M Single CHAKOC 850 Height-Adjusted 82.8cm Turntable';
  chakoc5Single.userData = {
    dimensions: [85, 40, 155],
    bounds: [454, 494, 642.5, 727.5],
    role: '마켓비 CHAKOC 850 넓은 5단 단독 높이조절 배치 (턴테이블 82.8cm 허리 높이 + 상부 유효높이 51.4cm 확보)'
  };
  // 측면 9단 가로대 중 [10, 45.5, 81.0, 134.2] 4개 단에 선반 거치 (여분 선반 1장은 보관)
  buildChakoc5Frame(chakoc5Single, [10, 45.5, 81.0, 134.2]);
  {
    // [최상단 오픈 쇼케이스존 y = 136.0cm]: 폴라보 유리 쇼케이스 + 좌측 매거진·DONOS 무드등 + 상판 우측 VALON 골드 램프
    addPolaboGlassZone(chakoc5Single, 136.0, singleLights, { cabX: -1.5, magX: -34.5 });
    addValonLamp(chakoc5Single, 33.5, 136.0, 21, singleLights);

    // [중단 허리 높이 청음 스테이지 y = 82.8cm (상부 선반 134.2cm까지 유효높이 51.4cm! 더스트커버 개방 간섭 0!)]
    addTurntableStage(chakoc5Single, 82.8, {
      spkLeftX: -31.5,
      spkRightX: 29.5,
      ttX: -1.0,
      lidAngle: -0.52,
      compactPlants: true
    });

    // [중하단 LP 바이닐 & 옐로우 버섯램프 존 y = 47.3cm (유효높이 33.7cm > 12인치 LP 31.5cm)]
    addVinylRow(chakoc5Single, -39.0, -13.5, 47.3, 20.5, 42);
    B(chakoc5Single, 0.35, 18, 15, mChrome, -13.2, 47.3, 20.5);
    addFaceOutLp(chakoc5Single, 3.5, 47.3, 21.5, pinkLpTex1, [-12.5, 19.5]);
    addGubonLamp(chakoc5Single, 29.5, 47.3, 20.5, singleLights);

    // [최하단 y = 11.8cm (유효높이 33.7cm)]: 폴라보 2서랍 미니수납장(상판 NEODA 트레이 + 진공관 앰프) + 우측 LP 컬렉션
    const polabo2DrS = new THREE.Group();
    polabo2DrS.position.set(cm(-10.5), cm(11.8), cm(22));
    chakoc5Single.add(polabo2DrS);
    B(polabo2DrS, 58.0, 1.5, 25.0, mCamphor, 0, 0, 0, 0.15);
    B(polabo2DrS, 1.5, 20.5, 25.0, mCamphor, -28.25, 0, 0, 0.15);
    B(polabo2DrS, 1.5, 20.5, 25.0, mCamphor, 28.25, 0, 0, 0.15);
    B(polabo2DrS, 55.0, 20.5, 1.2, mCamphor, 0, 0, -11.9, 0.15);
    B(polabo2DrS, 55.0, 1.4, 23.8, mCamphor, 0, 13.1, 0.6, 0.1);
    B(polabo2DrS, 1.4, 11.6, 23.5, mCamphor, 0, 1.5, 0.5);
    for (const dx of [-14.0, 14.0]) {
      B(polabo2DrS, 26.4, 11.2, 1.4, mLightBirch, dx, 1.7, 12.1, 0.2);
    }
    B(polabo2DrS, 22, 1.3, 17, mLightBirch, -13, 14.5, 1, 0.3);
    CY(polabo2DrS, 3.0, 3.6, 8.0, mClearGlass, -16, 15.8, 1, 18);
    addTubeAmp(polabo2DrS, 12, 14.5, 1.5, singleLights);
    addVinylRow(chakoc5Single, 20.5, 39.0, 11.8, 20.5, 88);
  }

  // ============================================================================
  // 2. 선반 북측 옆 바닥 & 벽면:
  //    마켓비 심플리(SIMPLIE) 와이어 사이드테이블 블랙(35×35×35cm) + 전용 아크릴 상판
  //    + 서쪽 벽 마켓비 ARTICO 50×70cm 미드센추리 캔버스액자
  //    (Mode A에서는 3단 옆 z=534 & 3단 위 벽 z=598.5,y=132 / Mode B에서는 5단 옆 z=600,y=118)
  // ============================================================================
  const simplieTable = placeIn(grpM, 474, 524, 0);
  simplieTable.name = 'M MarketB SIMPLIE Wire Side Table Black 35x35x35 & Acrylic Top';
  simplieTable.userData = {
    dimensions: [35, 35, 35],
    bounds: [456.5, 491.5, 506.5, 541.5],
    role: '마켓비 심플리 와이어 사이드테이블 블랙 + 전용 아크릴판 (매거진랙 겸 플랜터 스탠드)'
  };
  {
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
    for (let s = -14; s <= 14; s += 3.5) {
      dRod(simplieTable, [-17.2, 0.5, s], [-17.2, 34.6, s], 0.18, mBlack);
      dRod(simplieTable, [17.2, 0.5, s], [17.2, 34.6, s], 0.18, mBlack);
      dRod(simplieTable, [s, 0.5, -17.2], [s, 0.5, 17.2], 0.18, mBlack);
      dRod(simplieTable, [s, 34.6, -17.2], [s, 34.6, 17.2], 0.18, mBlack);
    }
    B(simplieTable, 35.2, 0.6, 35.2, mAcrylic, 0, 34.8, 0, 0.2);

    const mCols = [mPopYellow, mTerracotta, mFabricIvory, mNavy, mRetroGreen];
    for (let i = 0; i < 5; i++) {
      const mg = new THREE.Group();
      mg.position.set(cm(-8 + i * 3.6), cm(1.0), 0);
      mg.rotation.z = 0.18;
      simplieTable.add(mg);
      B(mg, 1.2, 28, 24, mCols[i], 0, 0, 0, 0.1);
    }

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

  // 서쪽 벽면 마켓비 ARTICO 50×70cm 미드센추리 지오메트릭 캔버스액자 (3단 턴테이블 스테이지 상부 벽면)
  const articoFrame = new THREE.Group();
  articoFrame.__planPlaced = true;
  articoFrame.position.set(cm(454.8), cm(132), cm(598.5));
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
  // ============================================================================
  const soddeFloor = placeIn(grpM, 474, 762, -Math.PI * 0.32);
  soddeFloor.name = 'M MarketB SODDE Mid-Century Silver Floor Lamp E26';
  soddeFloor.userData = {
    dimensions: [32, 32, 150],
    bounds: [458, 490, 746, 778],
    role: '마켓비 SODDE 미드센추리 실버 장스탠드 (CHAKOC 스틸 프레임 톤 매칭)'
  };
  {
    const mSatinSilver = M('#dce1e6', { metalness: 0.55, roughness: 0.28 });
    CY(soddeFloor, 13.5, 13.5, 1.2, mSatinSilver, 0, 0, 0, 32);
    CY(soddeFloor, 5.2, 5.2, 1.3, M('#dcd6cc', { roughness: 0.8 }), 3.5, 0.05, 0, 20);
    dRod(soddeFloor, [-4, 1.2, 0], [0, 142, 0], 0.85, mSatinSilver);
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
  const diningGroup = placeIn(grpM, 585, 490, 0);
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
  const niskoChair = placeIn(grpM, 750, 705, -Math.PI / 2);
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

  const trolley = placeIn(grpM, 755, 625, 0);
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

  // ============================================================================
  // 모드 전환 함수: false = [기본] 5단+3단 허리높이 모듈 조합 / true = [대안] 5단 1개 단독 높이조절
  // ============================================================================
  let isSingleMode = false;
  function setMShelfSingle(single) {
    isSingleMode = !!single;
    dualGroup.visible = !isSingleMode;
    singleGroup.visible = isSingleMode;
    for (const l of dualLights) l.visible = !isSingleMode;
    for (const l of singleLights) l.visible = isSingleMode;

    if (isSingleMode) {
      simplieTable.position.set(cm(474), 0, cm(592));
      simplieTable.userData.bounds = [456.5, 491.5, 574.5, 609.5];
      articoFrame.position.set(cm(454.8), cm(124), cm(590));
    } else {
      simplieTable.position.set(cm(474), 0, cm(524));
      simplieTable.userData.bounds = [456.5, 491.5, 506.5, 541.5];
      articoFrame.position.set(cm(454.8), cm(132), cm(598.5));
    }
  }
  setMShelfSingle(false);

  return {
    group: grpM,
    chakoc: chakoc5Dual,
    chakoc3,
    chakoc5Single,
    dualGroup,
    singleGroup,
    setMShelfSingle,
    get isSingleMode() { return isSingleMode; },
    simplieTable,
    articoFrame,
    rustaFloor: soddeFloor,
    soddeFloor,
    diningGroup,
    niskoChair,
    trolley
  };
}
