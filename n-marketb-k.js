// N안: K안 100% 기준 + 미확정 2개 품목만 마켓비(MarketB) 제품으로 교체한 최종 통합안 (2026-11-11)
// 사용자 요청 반영:
//   "근데 k안이 거의 최종이고 저기서 확정이 안된건 sus랑 턴테이블 올릴 수납장이야
//    k를 기준으로 m을 만들어줘 마켓비 제품으로 지금도 좋은데 그럼 암체어위치가 애매해질것같아
//    턴테이블 수납장도 지금처럼 저제품도 좋지만 다른 좋은 제품있으면 찾아보는것도 좋을것같아
//    무튼 k를 기준으로 두개만 바꾸면 완벽해 N안으로 만들어봐"
//
// [K안 그대로 유지되는 항목 (암체어·식탁·조명·러그·복도·침실·욕실 100% 보존)]
//   - 북서 다이닝(596, 488): IKEA STOCKHOLM 2025 Ø115 원형 식탁 + PS 2026 접이식의자 2개 + KYRRE 쉬레 스툴 2개(자작나무·그린)
//   - 식탁·턴테이블장 사이(474, 484): IKEA PS 2026 다크레드 상향식 플로어스탠드 (식탁 펜던트 제거 유지)
//   - 서쪽 벽 중앙(495, 632 & 495, 708): IKEA POÄNG 포엥 암체어 2개(다크옐로 + 셸링에 베이지 + 컵홀더 2개) 위치 100% 보존!
//   - 서남 코너(474, 780) & 통창(538, 852 / 578, 882): 외켄산드 154cm 스탠드 + 150cm 트리 + 페이카 몬스테라
//   - 거실 중앙(585, 680): 노미아(NOMIA) t4 - 시폰 러그 (150×200cm)
//   - 복도·욕실·침실: 모아나 파노라마 퍼즐 액자 + 바다 물결 발매트 + 3단 빨래바구니(765, 365) + 훔레셴 세트 + 화이트 모아벨 화장대·포포 협탁
//
// [K안에서 마켓비로 교체된 단 2개 미확정 품목]
//   ① 동쪽 벽 무지 SUS 대체 5단 선반 자리(x=789.5 벽밀착, 중심 x=769.5, z=716 · 월패드 z=662.5 남측 여유 11.3cm):
//      → 마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85×40×155cm · 149,000원 · product_no=41358)
//        + M안 감도 마켓비 수납·조명 큐레이션:
//          · 1단(153.8cm): VALON 단스탠드 골드(26,900원 · 28828) + 니트 패브릭 스택 + 블랙 해트박스·미니 헬멧
//          · 2단(118.3cm): 폴라보 양면 4문 모루유리 미니수납장(77,400원 · 33454 · 위스키바·SLATTIS 시계 15,000원) + 매거진 & DONOS 글로브 무드등(33,900원 · 34707)
//          · 3단(82.8cm 허리높이): NEODA 우드트레이(5,900원 · 26514) 핸드드립 홈카페 커피 스테이션 + 우측 GUBON 미니 옐로우 버섯램프(23,900원 · 27594) & 오브제
//          · 4단(47.3cm): 폴라보 2서랍 미니수납장(59,400원 · 38717) + 디자인 아트북
//          · 5단(11.8cm): 벤탄 낮은 2문 케인 라탄 미니수납장(55,900원 · 41019) + 대형 화집 + 기둥 원목 원숭이 & 헤드폰
//
//   ② 서쪽 벽 북측 턴테이블·LP 수납장 자리(x=454 벽밀착, z=548 · PS 2026 다크레드등과 포엥 암체어 사이):
//      → 3D 실시간 1클릭 전환 비교 가능한 마켓비 베스트 턴테이블·LP 수납장 3종!
//        - [후보 1 · 기본 추천 (#n)]: 마켓비 필몬(FILMON) 수납장 2문 8080 CAM8080SH 세로형 · 캄포어베니어 (80×38×80cm · 149,000원 · product_no=40837)
//            상판 80cm 허리높이(안전하중 40kg)에 TEAC 턴테이블+MR3 스피커 오픈 배치 + 상단 6칸 세로 LP 전용 슬롯(높이 37×깊이 36cm) + 하단 2문 플랩도어 전면 LP 자켓 거치!
//        - [후보 2 · 스틸+오크 세트 (#n,chakoc3)]: 마켓비 CHAKOC 선반 850 넓은 3단 · 내추럴 (85×41×84.5cm · 70,900원 · product_no=29042)
//            맞은편 동쪽 CHAKOC 5단과 동일 프레임·선반 세트! 84.5cm 오픈 상판 + 36cm LP 2단 수납!
//        - [후보 3 · 미드센추리 크롬 모듈 (#n,simplie)]: 마켓비 심플리(SIMPLIE) 1x2 수납장 1문 BC602 · 솔리드베이지 (77×40×64cm · 149,000원 · product_no=38293)
//            USM 감성 크롬 파이프 + 솔리드베이지 스틸 드롭다운 도어(내부 높이 36.5×깊이 38.5cm LP 수납) + 상단 18cm 오픈 앰프 슬롯!

export function buildNMarketBKLayout({
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
  addAccent
}) {
  const grpN = new THREE.Group();
  grpN.name = 'N Plan: K Baseline + MarketB East CHAKOC 5-Tier & West Turntable Cabinet';
  grpN.visible = false;
  scene.add(grpN);

  // 재질 팔레트
  const mOak = dWood('#cca673', '#9d7443');
  const mCamphor = dWood('#c59660', '#916537');
  const mLightBirch = dWood('#dcc096', '#b59264');
  const mWalnut = dWood('#7c5232', '#52331b');
  const mSteel = M('#cfd4d8', { metalness: 0.72, roughness: 0.25 });
  const mChrome = M('#e6eaed', { metalness: 0.9, roughness: 0.13 });
  const mGold = M('#cda34f', { metalness: 0.82, roughness: 0.24 });
  const mCopper = M('#c67c4e', { metalness: 0.78, roughness: 0.28 });
  const mBlack = M('#202224', { roughness: 0.52 });
  const mSpeakerBlack = M('#1b1c1e', { roughness: 0.62 });
  const mWhite = M('#f5f5f3', { roughness: 0.34 });
  const mSolidBeige = M('#e5dcc8', { roughness: 0.34, metalness: 0.12 });
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

  // 모루유리 텍스처 (폴라보 양면 4문 쇼케이스)
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

  // 케인 라탄 텍스처 (벤탄 2문장)
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

  // 파스텔 핑크 시티팝 LP 자켓 텍스처 2종
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
      const thick = 0.55 + r() * 0.35;
      const tilt = idx % 7 === 5 ? 0.045 : 0;
      const col = M(lpPalette[idx % lpPalette.length], { roughness: 0.48 });
      const rec = new THREE.Group();
      rec.position.set(cm(cx + thick / 2), cm(by), cm(cz + (r() - 0.5) * 0.6));
      rec.rotation.z = tilt;
      parent.add(rec);
      B(rec, thick, 31.0 - (idx % 3) * 0.3, 31.0, col, 0, 0, 0, 0.06);
      B(rec, thick * 0.5, 30.2, 30.4, mWhite, 0, 0.4, 0.2);
      cx += thick + 0.22;
      idx++;
    }
  }

  function addFaceOutLp(parent, cx, by, cz, tex, stopperRange = null, tiltX = -0.1) {
    const lpShow = new THREE.Group();
    lpShow.position.set(cm(cx), cm(by), cm(cz));
    lpShow.rotation.x = tiltX;
    parent.add(lpShow);
    B(lpShow, 30.6, 30.6, 0.8, mWhite, 0, 0, 0, 0.1);
    const jacket = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(30.4), cm(30.4)),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.32 })
    );
    jacket.position.set(0, cm(15.3), cm(0.46));
    lpShow.add(jacket);
    if (stopperRange) {
      dRod(parent, [stopperRange[0], by + 6.5, cz + 2.8], [stopperRange[1], by + 6.5, cz + 2.8], 0.22, mChrome);
    }
  }

  // 상판 위 TEAC TN-180BT 블랙 턴테이블 + Edifier MR3 블랙 스피커 1조 + 투명 LP거치대 스테이지
  function addTurntableAudioTop(parent, yTop, depthCm, widthCm, opts = {}) {
    const cz = depthCm * 0.52;
    const spkX = Math.min(30.5, widthCm * 0.5 - 8.2);

    // Edifier MR3 블랙 스피커 페어 (좌·우)
    for (const sx of [-spkX, spkX]) {
      const spk = new THREE.Group();
      spk.position.set(cm(sx), cm(yTop), cm(cz + 1.0));
      parent.add(spk);
      B(spk, 12.6, 0.7, 17.5, M('#3a3935', { roughness: 0.75 }), 0, 0, 0, 0.2);
      B(spk, 12.55, 21.5, 17.8, mSpeakerBlack, 0, 0.7, 0, 0.55);
      const woofer = new THREE.Group();
      woofer.position.set(0, cm(8.2), cm(9.0));
      woofer.rotation.x = Math.PI / 2;
      spk.add(woofer);
      CY(woofer, 4.1, 4.1, 0.3, M('#2b2d30', { roughness: 0.4 }), 0, 0, 0, 24);
      CY(woofer, 3.3, 3.3, 0.45, M('#121315', { roughness: 0.45 }), 0, 0, 0, 24);
      CY(woofer, 1.15, 1.15, 0.6, mCopper, 0, 0, 0, 18);
      const tweeter = new THREE.Group();
      tweeter.position.set(0, cm(16.8), cm(9.0));
      tweeter.rotation.x = Math.PI / 2;
      spk.add(tweeter);
      CY(tweeter, 1.8, 1.8, 0.3, M('#2b2d30', { roughness: 0.35 }), 0, 0, 0, 20);
      CY(tweeter, 0.9, 0.9, 0.45, mBlack, 0, 0, 0, 16);
    }

    // 중앙 TEAC TN-180BT 블랙 턴테이블 (42×35.6×10.5cm · 더스트커버 시원하게 개방!)
    const tt = new THREE.Group();
    tt.name = 'N TEAC TN-180BT Turntable on MarketB Cabinet';
    tt.position.set(cm(opts.ttX ?? -1.5), cm(yTop), cm(cz + 0.5));
    parent.add(tt);
    for (const [fx, fz] of [[-16.5, -12], [16.5, -12], [-16.5, 12], [16.5, 12]]) {
      CY(tt, 1.8, 1.8, 1.3, mBlack, fx, 0, fz, 16);
    }
    B(tt, 41.0, 4.6, 31.5, mBlack, 0, 1.3, 0, 0.45);
    CY(tt, 13.6, 13.8, 1.1, mChrome, -3.0, 5.9, 0, 40);
    CY(tt, 13.2, 13.2, 0.3, M('#16191d', { roughness: 0.25 }), -3.0, 7.0, 0, 40);
    CY(tt, 4.0, 4.0, 0.35, M('#c9683e', { roughness: 0.38 }), -3.0, 7.2, 0, 26);
    CY(tt, 0.35, 0.35, 1.5, mChrome, -3.0, 7.0, 0, 12);
    CY(tt, 2.1, 2.3, 1.8, mChrome, 14.2, 5.9, -8.5, 20);
    dRod(tt, [14.2, 7.7, -8.5], [9.8, 7.7, 8.8], 0.28, mChrome);
    B(tt, 1.6, 1.1, 2.6, mBlack, 9.5, 7.1, 9.6, 0.15);

    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, cm(5.9), cm(-15.4));
    lidPivot.rotation.x = -0.46;
    tt.add(lidPivot);
    B(lidPivot, 40.6, 0.4, 31.0, mAcrylic, 0, 4.8, 15.5, 0.15);
    B(lidPivot, 40.6, 4.8, 0.4, mAcrylic, 0, 0, 30.8);
    B(lidPivot, 0.4, 4.8, 31.0, mAcrylic, -20.1, 0, 15.5);
    B(lidPivot, 0.4, 4.8, 31.0, mAcrylic, 20.1, 0, 15.5);

    // 턴테이블 우측 앞 브라스 레코드 스태빌라이저 & 카본 브러쉬 디테일
    if (opts.withNowPlaying !== false) {
      CY(parent, 3.4, 3.6, 2.2, mGold, 21.6, yTop, cz + 6.5, 24);
      CY(parent, 1.8, 2.0, 1.2, mGold, 21.6, yTop + 2.2, cz + 6.5, 20);
      B(parent, 2.4, 1.4, 11.5, mChrome, 21.6, yTop, cz - 4.5, 0.2);
      B(parent, 2.0, 0.6, 11.0, mBlack, 21.6, yTop + 1.4, cz - 4.5, 0.1);
    }
  }

  // ============================================================================
  // ① 동쪽 벽(x=789.5 벽밀착, 중심 x=769.5, z=716, rotY=-Math.PI/2):
  //    마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85×40×155cm · 149,000원 · product_no=41358)
  //    서쪽 벽 포엥 암체어 2개에서 정면으로 바라보는 미드센추리 쇼케이스·커피·조명 월!
  // ============================================================================
  const eastChakoc5 = placeIn(grpN, 789.5, 716, -Math.PI / 2);
  eastChakoc5.name = 'N East Wall MarketB CHAKOC 850 5-Tier Curated Showcase';
  eastChakoc5.userData = {
    dimensions: [85, 40, 155],
    bounds: [749.5, 789.5, 673.5, 758.5],
    productNo: 41358,
    price: 149000,
    shipping: 16000
  };
  {
    const legPositions = [[-41.5, 1.5], [41.5, 1.5], [-41.5, 38.5], [41.5, 38.5]];
    for (const [lx, lz] of legPositions) {
      CY(eastChakoc5, 1.5, 1.5, 1.1, mBlack, lx, 0, lz, 20);
      CY(eastChakoc5, 0.65, 0.65, 1.4, mSteel, lx, 1.1, lz, 16);
      CY(eastChakoc5, 0.85, 0.85, 152.0, mSteel, lx, 2.5, lz, 20);
      CY(eastChakoc5, 0.92, 0.92, 0.6, mChrome, lx, 154.5, lz, 20);
    }
    const ladderHeights = [10, 27.7, 45.5, 63.2, 81, 98.7, 116.5, 134.2, 152];
    for (const hy of ladderHeights) {
      dRod(eastChakoc5, [-41.5, hy, 1.5], [-41.5, hy, 38.5], 0.34, mSteel);
      dRod(eastChakoc5, [41.5, hy, 1.5], [41.5, hy, 38.5], 0.34, mSteel);
    }
    dRod(eastChakoc5, [-41, 14, 1.5], [41, 149, 1.5], 0.28, mChrome);
    dRod(eastChakoc5, [-41, 149, 1.5], [41, 14, 1.5], 0.28, mChrome);
    CY(eastChakoc5, 1.2, 1.2, 0.8, mSteel, 0, 81.2, 1.5, 16);

    const boardHeights = [10, 45.5, 81, 116.5, 152];
    for (const sy of boardHeights) {
      B(eastChakoc5, 84.4, 1.8, 38.2, mOak, 0, sy, 20, 0.2);
      for (const [kx, kz] of legPositions) {
        B(eastChakoc5, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.2, kz, 0.15);
      }
    }

    // 측면 기둥 포인트: 원목 원숭이 피규어 & S고리 헤드폰 (북측 기둥 lx=-42.4 → 거실 진입 시 바로 보임!)
    const monkey = new THREE.Group();
    monkey.position.set(cm(-42.4), cm(120), cm(26));
    monkey.rotation.y = -Math.PI / 3;
    eastChakoc5.add(monkey);
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

    dRod(eastChakoc5, [-41.5, 99.5, 24], [-42.8, 96.5, 24], 0.25, mChrome);
    CY(eastChakoc5, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 21.2, 20);
    CY(eastChakoc5, 4.8, 4.8, 2.0, mBlack, -43.5, 88.5, 26.8, 20);
    dRod(eastChakoc5, [-43.5, 91, 21.2], [-43.5, 96.5, 24], 0.42, mBlack);
    dRod(eastChakoc5, [-43.5, 96.5, 24], [-43.5, 91, 26.8], 0.42, mBlack);

    // [1단 최상단 y = 153.8cm]: 우측(남측) VALON 골드 단스탠드 + 중앙 니트 패브릭 스택 + 좌측(북측) 해트박스 & F1 미니 헬멧
    const y1 = 153.8;
    {
      const valon = new THREE.Group();
      valon.name = 'MarketB VALON Table Lamp Gold';
      valon.position.set(cm(28.5), cm(y1), cm(21));
      eastChakoc5.add(valon);
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
      if (addAccent) addAccent(valonLight, valonShadeMat, 1.85, 2.2, 0.35, 0.32);

      B(eastChakoc5, 22, 3.0, 17, mBurgundy, 1.5, y1, 20.5, 0.9);
      B(eastChakoc5, 20.5, 2.8, 16, M('#d48b9c', { roughness: 0.88 }), 1.5, y1 + 3.0, 20.5, 0.9);
      B(eastChakoc5, 19.0, 2.6, 15, mFabricIvory, 1.5, y1 + 5.8, 20.5, 0.9);

      // 좌측(북측) K안 F1 해밀턴 페라리 미니 헬멧 케이스 + 블랙 해트박스
      CY(eastChakoc5, 8.8, 8.8, 10.5, mBlack, -25, y1, 19.5, 28);
      CY(eastChakoc5, 9.1, 9.1, 2.0, mBlack, -25, y1 + 9.4, 19.5, 28);
      const helm = new THREE.Group();
      helm.position.set(cm(-25), cm(y1 + 11.4), cm(19.5));
      helm.rotation.y = 0.25;
      eastChakoc5.add(helm);
      const hBall = new THREE.Mesh(new THREE.SphereGeometry(cm(4.8), 24, 18), M('#c92424', { roughness: 0.25, metalness: 0.18 }));
      hBall.position.y = cm(4.6);
      helm.add(hBall);
      B(helm, 6.4, 2.4, 2.6, M('#1b1d20', { roughness: 0.15, metalness: 0.7 }), 0, 3.8, 3.5, 0.35);
    }

    // [2단 눈높이 y = 118.3cm]: 폴라보 양면 4문 모루유리 쇼케이스(위스키바·SLATTIS 시계) + 좌측 매거진·DONOS 글로브 무드등
    const y2 = 118.3;
    {
      const polaboGlass = new THREE.Group();
      polaboGlass.name = 'MarketB POLABO Glass Sliding Mini Cabinet CAM2260SL';
      polaboGlass.position.set(cm(9.5), cm(y2), cm(20));
      eastChakoc5.add(polaboGlass);

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
      if (addAccent) addAccent(showLight, showGlowMat, 2.2, 2.8, 0.85, 1.15);

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
      CY(polaboGlass, 2.6, 2.6, 11.0, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 1.6, -2, 20);
      CY(polaboGlass, 0.9, 1.1, 3.6, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.8, 12.6, -2, 16);
      for (const stx of [21.5, 25.8]) {
        CY(polaboGlass, 1.8, 1.8, 0.3, mClearGlass, stx, 1.6, 2, 16);
        CY(polaboGlass, 0.22, 0.22, 4.2, mClearGlass, stx, 1.9, 2, 12);
        CY(polaboGlass, 2.0, 1.1, 4.6, mClearGlass, stx, 6.1, 2, 18);
      }

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

      const mag = new THREE.Group();
      mag.position.set(cm(-31), cm(y2), cm(15));
      mag.rotation.x = -0.24;
      mag.rotation.y = 0.1;
      eastChakoc5.add(mag);
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
      donos.position.set(cm(-29.5), cm(y2), cm(29));
      eastChakoc5.add(donos);
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

    // [3단 허리 높이 y = 82.8cm]: 좌측(북측 · 주방/식탁 인접) NEODA 트레이 핸드드립 홈카페 커피 스테이션 + 우측(남측) GUBON 미니 옐로우 버섯램프
    const y3 = 82.8;
    {
      // 핸드드립 홈카페 커피 스테이션 (K안의 커피 스테이션 기능 계승!)
      const cafe = new THREE.Group();
      cafe.name = 'N Home Cafe Hand-Drip Station on MarketB NEODA Tray';
      cafe.position.set(cm(-13.5), cm(y3), cm(21.5));
      eastChakoc5.add(cafe);
      // 마켓비 NEODA 우드트레이 (28×20cm) + 보조 원목 코스터
      B(cafe, 44, 1.4, 24, mLightBirch, 0, 0, 0, 0.35);
      // 좌측 구스넥 드립포트 (매트블랙)
      CY(cafe, 4.2, 4.8, 10.5, mBlack, -14, 1.4, 1, 22);
      CY(cafe, 4.3, 4.3, 0.8, mCamphor, -14, 11.9, 1, 20);
      dRod(cafe, [-9.5, 4.0, 1], [-6.2, 10.8, 1], 0.28, mBlack);
      dRod(cafe, [-18.2, 4.5, 1], [-20.0, 10.2, 1], 0.32, mBlack);
      // 중앙 V60 유리 서버 + 세라믹 드리퍼
      CY(cafe, 4.2, 5.2, 8.8, mClearGlass, -1.5, 1.4, 1.5, 22);
      CY(cafe, 4.8, 2.2, 6.8, mCeramic, -1.5, 10.2, 1.5, 22);
      // 수동 원두 핸드그라인더
      CY(cafe, 2.5, 2.5, 12.5, mChrome, 9.0, 1.4, -2.5, 20);
      dRod(cafe, [9.0, 13.9, -2.5], [14.0, 15.2, -1.0], 0.24, mChrome);
      CY(cafe, 1.1, 1.1, 1.4, mWalnut, 14.0, 14.2, -1.0, 14);
      // 원두 캐니스터 2개 & 컬러 머그컵
      CY(cafe, 3.6, 3.6, 9.8, mBlack, 16.5, 1.4, -4.5, 20);
      CY(cafe, 3.7, 3.7, 1.0, mCamphor, 16.5, 11.2, -4.5, 20);
      CY(cafe, 3.1, 2.8, 7.6, mTerracotta, 11.5, 1.4, 5.8, 20);
      CY(cafe, 3.1, 2.8, 7.6, mCeramic, 18.2, 1.4, 5.8, 20);

      // 우측(남측) 마켓비 GUBON 미니 단스탠드 옐로우 (Ø20×31cm · 27594)
      const gubon = new THREE.Group();
      gubon.name = 'MarketB GUBON Mini Mushroom Table Lamp Yellow';
      gubon.position.set(cm(27.5), cm(y3), cm(21));
      eastChakoc5.add(gubon);
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
      if (addAccent) addAccent(gubonLight, gubonDomeMat, 2.0, 2.4, 0.45, 0.35);
    }

    // [4단 y = 47.3cm]: 폴라보 2서랍 미니수납장 (BSM2266 · 38717) + 우측 아트북 컬렉션
    const y4 = 47.3;
    {
      const polabo2Dr = new THREE.Group();
      polabo2Dr.name = 'MarketB POLABO 2-Drawer Mini Unit BSM2266';
      polabo2Dr.position.set(cm(-6.5), cm(y4), cm(22));
      eastChakoc5.add(polabo2Dr);
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
      B(polabo2Dr, 21, 2.2, 15, mFabricIvory, -14, 14.5, 0, 0.2);
      B(polabo2Dr, 18, 2.0, 14, mRetroGreen, -14, 16.7, 0, 0.2);
      CY(polabo2Dr, 4.2, 3.0, 7.2, mCeramic, 14, 14.5, 0, 22);

      const bCols = [mRetroGreen, mFabricIvory, mTerracotta, mNavy];
      let bx = 28.5;
      for (let i = 0; i < 4; i++) {
        B(eastChakoc5, 2.3, 25 - (i % 2) * 2.2, 21, bCols[i], bx + 1.15, y4, 21, 0.12);
        B(eastChakoc5, 1.8, 24 - (i % 2) * 2.2, 20, mWhite, bx + 1.15, y4 + 0.4, 21.2);
        bx += 2.6;
      }
    }

    // [5단 최하단 y = 11.8cm]: 벤탄 낮은 2문 케인 라탄 미니수납장 (SHM2460 · 41019) + 우측 대형 아트북 화집
    const y5 = 11.8;
    {
      const bentan = new THREE.Group();
      bentan.name = 'MarketB BENTAN Rattan Sliding 2-Door Mini Cabinet SHM2460';
      bentan.position.set(cm(-9.5), cm(y5), cm(23));
      eastChakoc5.add(bentan);
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
      const fCols = [mNavy, mFabricIvory, mBurgundy, mLightBirch, mRetroGreen, mTerracotta];
      let fx = 22.0;
      for (let i = 0; i < 6; i++) {
        B(eastChakoc5, 2.4, 28 - (i % 3) * 1.8, 23, fCols[i], fx + 1.2, y5, 21, 0.12);
        B(eastChakoc5, 1.9, 27 - (i % 3) * 1.8, 22, mWhite, fx + 1.2, y5 + 0.4, 21.2);
        fx += 2.7;
      }
    }
  }

  // ============================================================================
  // ② 서쪽 벽 북측(x=454 벽밀착, z=548, rotY=+Math.PI/2):
  //    마켓비 턴테이블·LP 수납장 3종 실시간 전환 비교!
  //    (PS 2026 다크레드 상향등 [474, 484] 와 포엥 다크옐로 암체어 [495, 632] 사이에 완벽 수납!)
  // ============================================================================

  // [후보 1 · 기본 추천 ('filmon')]: 마켓비 필몬(FILMON) 수납장 2문 8080 CAM8080SH 세로형 · 캄포어베니어
  // 공식 실측: 가로 80 × 깊이 38(문 손잡이 턱 포함 최대 41.5) × 높이 80cm · 149,000원 + 배송 10,000원 (product_no=40837)
  const cabFilmon = placeIn(grpN, 454, 548, Math.PI / 2);
  cabFilmon.name = 'N West Turntable Cabinet 1: MarketB FILMON 8080 CAM8080SH Camphor Veneer';
  cabFilmon.userData = {
    mode: 'filmon',
    dimensions: [80, 38, 80],
    bounds: [454, 492, 508, 588],
    productNo: 40837,
    price: 149000,
    shipping: 10000
  };
  {
    // 외곽 프레임 (가로 80 × 깊이 38 × 높이 80cm, 판 두께 1.8cm)
    B(cabFilmon, 80, 2.0, 38, mCamphor, 0, 78.0, 19, 0.15); // 상판 (y=78..80cm)
    B(cabFilmon, 80, 1.8, 38, mCamphor, 0, 0.8, 19, 0.1);   // 하판
    B(cabFilmon, 1.8, 77.2, 38, mCamphor, -39.1, 0.8, 19, 0.1); // 좌측판
    B(cabFilmon, 1.8, 77.2, 38, mCamphor, 39.1, 0.8, 19, 0.1);  // 우측판
    B(cabFilmon, 76.4, 77.2, 1.0, mCamphor, 0, 0.8, 0.6);       // 뒷판
    B(cabFilmon, 76.4, 1.8, 37.0, mCamphor, 0, 39.2, 19.1, 0.1); // 중앙 가로 선반 (y=39.2..41cm)

    // 상단 6칸 세로 LP 레코드 슬롯 (5개 세로 디바이더 · 내부 높이 37cm × 깊이 36cm!)
    const divXs = [-25.5, -12.75, 0, 12.75, 25.5];
    for (const dx of divXs) {
      B(cabFilmon, 1.5, 37.0, 36.2, mCamphor, dx, 41.0, 19.2, 0.08);
    }
    // 6칸 세로 슬롯 안에 꽂힌 12인치 LP 바이닐 레코드 컬렉션!
    addVinylRow(cabFilmon, -37.5, -26.8, 41.0, 20.5, 17);
    addVinylRow(cabFilmon, -24.2, -14.0, 41.0, 20.5, 31);
    addVinylRow(cabFilmon, -11.5, -1.2, 41.0, 20.5, 53);
    addVinylRow(cabFilmon, 1.2, 11.5, 41.0, 20.5, 71);
    addVinylRow(cabFilmon, 14.0, 24.2, 41.0, 20.5, 89);
    addVinylRow(cabFilmon, 26.8, 37.2, 41.0, 20.5, 103);

    // 하단 비대칭 2문 플랩도어 (공식 도면 기준 좌 33cm + 중앙 세로기둥 + 우 42.5cm + 하단 3.5cm LP 자켓 거치 턱!)
    B(cabFilmon, 1.6, 36.6, 36.0, mCamphor, -4.8, 2.6, 19.0);
    // 좌측 플랩도어 (x = -38.0..-5.8, 폭 32.2cm) + 전면 LP 자켓 거치 턱
    B(cabFilmon, 32.0, 36.0, 1.4, mCamphor, -21.9, 2.8, 37.4, 0.12);
    B(cabFilmon, 32.0, 2.6, 3.2, mCamphor, -21.9, 2.6, 39.2, 0.15);
    addFaceOutLp(cabFilmon, -21.9, 5.2, 39.2, pinkLpTex1, null, -0.05);

    // 우측 플랩도어 (x = -3.8..38.0, 폭 41.8cm) + 전면 LP 자켓 거치 턱
    B(cabFilmon, 41.6, 36.0, 1.4, mCamphor, 17.1, 2.8, 37.4, 0.12);
    B(cabFilmon, 41.6, 2.6, 3.2, mCamphor, 17.1, 2.6, 39.2, 0.15);
    addFaceOutLp(cabFilmon, 17.1, 5.2, 39.2, pinkLpTex2, null, -0.05);

    // 상판(y = 80.0cm 허리 높이!) 오픈 오디오 스테이지: TEAC TN-180BT + Edifier MR3 페어
    addTurntableAudioTop(cabFilmon, 80.0, 38.0, 80.0);
  }

  // [후보 2 · 스틸+오크 세트 ('chakoc3')]: 마켓비 CHAKOC 선반 850 넓은 3단 · 내추럴
  // 공식 실측: 가로 85 × 깊이 41 × 높이 84.5cm · 70,900원 + 배송 5,000원 (product_no=29042)
  // 동쪽 벽 CHAKOC 850 넓은 5단과 완벽한 동일 라인 세트!
  const cabChakoc3 = placeIn(grpN, 454, 547, Math.PI / 2);
  cabChakoc3.name = 'N West Turntable Cabinet 2: MarketB CHAKOC 850 3-Tier Natural';
  cabChakoc3.visible = false;
  cabChakoc3.userData = {
    mode: 'chakoc3',
    dimensions: [85, 41, 84.5],
    bounds: [454, 495, 504.5, 589.5],
    productNo: 29042,
    price: 70900,
    shipping: 5000
  };
  {
    const leg3 = [[-41.5, 1.5], [41.5, 1.5], [-41.5, 39.5], [41.5, 39.5]];
    for (const [lx, lz] of leg3) {
      CY(cabChakoc3, 1.5, 1.5, 1.0, mBlack, lx, 0, lz, 20);
      CY(cabChakoc3, 0.65, 0.65, 1.2, mSteel, lx, 1.0, lz, 16);
      CY(cabChakoc3, 0.85, 0.85, 81.8, mSteel, lx, 2.2, lz, 20);
      CY(cabChakoc3, 0.92, 0.92, 0.5, mChrome, lx, 84.0, lz, 20);
    }
    for (const hy of [6.5, 25.5, 44.5, 63.5, 82.5]) {
      dRod(cabChakoc3, [-41.5, hy, 1.5], [-41.5, hy, 39.5], 0.34, mSteel);
      dRod(cabChakoc3, [41.5, hy, 1.5], [41.5, hy, 39.5], 0.34, mSteel);
    }
    dRod(cabChakoc3, [-41, 9.5, 1.5], [41, 80.5, 1.5], 0.28, mChrome);
    dRod(cabChakoc3, [-41, 80.5, 1.5], [41, 9.5, 1.5], 0.28, mChrome);
    CY(cabChakoc3, 1.2, 1.2, 0.8, mSteel, 0, 45.0, 1.5, 16);

    for (const sy of [6.5, 44.5, 82.5]) {
      B(cabChakoc3, 84.4, 2.0, 39.6, mOak, 0, sy, 20.5, 0.2);
      for (const [kx, kz] of leg3) {
        B(cabChakoc3, 2.4, 2.2, 2.4, mSteel, kx, sy - 0.1, kz, 0.15);
      }
    }
    addTurntableAudioTop(cabChakoc3, 84.5, 41.0, 85.0);
    addVinylRow(cabChakoc3, -39.2, -5.8, 46.5, 21.0, 42);
    B(cabChakoc3, 0.35, 18, 15, mChrome, -5.4, 46.5, 21.0);
    addFaceOutLp(cabChakoc3, 18.0, 46.5, 22.0, pinkLpTex1, [1.5, 34.5]);
    addFaceOutLp(cabChakoc3, -21.5, 8.5, 22.0, pinkLpTex2, [-38.0, -5.0]);
    addVinylRow(cabChakoc3, -1.5, 39.2, 8.5, 21.0, 88);
  }

  // [후보 3 · USM 감성 크롬 모듈 ('simplie')]: 마켓비 심플리(SIMPLIE) 1x2 수납장 1문 BC602 · 솔리드베이지
  // 공식 실측: 가로 77 × 깊이 40 × 높이 64cm (선반당 안전하중 60kg · 하단 도어 내부 높이 36.5×깊이 38.5cm LP 수납 통과!)
  // 가격: 149,000원 + 배송 6,000원 (product_no=38293)
  const cabSimplie = placeIn(grpN, 454, 548, Math.PI / 2);
  cabSimplie.name = 'N West Turntable Cabinet 3: MarketB SIMPLIE 1x2 BC602 Solid Beige';
  cabSimplie.visible = false;
  cabSimplie.userData = {
    mode: 'simplie',
    dimensions: [77, 40, 64],
    bounds: [454, 494, 509.5, 586.5],
    productNo: 38293,
    price: 149000,
    shipping: 6000
  };
  {
    const cPosts = [[-37.7, 1.0], [37.7, 1.0], [-37.7, 39.0], [37.7, 39.0]];
    for (const [px, pz] of cPosts) {
      CY(cabSimplie, 1.0, 1.0, 2.2, mBlack, px, 0, pz, 16);
      CY(cabSimplie, 0.9, 0.9, 61.5, mChrome, px, 2.2, pz, 20);
      for (const jy of [3.2, 42.0, 63.0]) {
        const ball = new THREE.Mesh(new THREE.SphereGeometry(cm(1.25), 16, 16), mChrome);
        ball.position.set(cm(px), cm(jy), cm(pz));
        cabSimplie.add(ball);
      }
    }
    for (const ry of [3.2, 42.0, 63.0]) {
      dRod(cabSimplie, [-37.7, ry, 1.0], [37.7, ry, 1.0], 0.85, mChrome);
      dRod(cabSimplie, [-37.7, ry, 39.0], [37.7, ry, 39.0], 0.85, mChrome);
      dRod(cabSimplie, [-37.7, ry, 1.0], [-37.7, ry, 39.0], 0.85, mChrome);
      dRod(cabSimplie, [37.7, ry, 1.0], [37.7, ry, 39.0], 0.85, mChrome);
    }

    // 파우더코팅 솔리드베이지 스틸 패널 (상판 y=62.2, 중판 y=41.2, 하판 y=3.0 + 하단 좌·우·후면·드롭다운 도어)
    B(cabSimplie, 74.6, 1.2, 37.6, mSolidBeige, 0, 62.2, 20.0, 0.1);
    B(cabSimplie, 74.6, 1.2, 37.6, mSolidBeige, 0, 41.2, 20.0, 0.1);
    B(cabSimplie, 74.6, 1.2, 37.6, mSolidBeige, 0, 3.0, 20.0, 0.1);
    B(cabSimplie, 0.8, 37.4, 37.2, mSolidBeige, -37.2, 4.0, 20.0);
    B(cabSimplie, 0.8, 37.4, 37.2, mSolidBeige, 37.2, 4.0, 20.0);
    B(cabSimplie, 74.0, 37.4, 0.8, mSolidBeige, 0, 4.0, 1.5);
    // 전면 드롭다운 도어 + 크롬 원형 링 손잡이 (공식 스펙 4cm 위치!)
    B(cabSimplie, 74.0, 36.6, 1.1, mSolidBeige, 0, 4.2, 38.6, 0.12);
    const ring = new THREE.Group();
    ring.position.set(0, cm(36.2), cm(39.3));
    ring.rotation.x = Math.PI / 2;
    cabSimplie.add(ring);
    CY(ring, 2.0, 2.0, 0.5, mChrome, 0, 0, 0, 24);
    CY(ring, 1.3, 1.3, 0.6, mBlack, 0, 0.05, 0, 20);

    // 상단 18cm 오픈 슬롯(y=42.4..62.2cm): 레트로 진공관 앰프 + 가로 아트북 스택
    B(cabSimplie, 23, 5.2, 18, mBlack, -15, 42.4, 21, 0.25);
    B(cabSimplie, 20, 4.2, 8.5, M('#2f3236', { metalness: 0.6, roughness: 0.35 }), -15, 47.6, 17.5, 0.2);
    for (const tx of [-21, -17, -13, -9]) {
      CY(cabSimplie, 0.85, 0.85, 3.4, M('#ffd59e', { emissive: '#ff7b1c', emissiveIntensity: 0.55 }), tx, 47.6, 23.5, 14);
    }
    B(cabSimplie, 26, 2.4, 20, mFabricIvory, 16, 42.4, 21, 0.2);
    B(cabSimplie, 24, 2.2, 18.5, mTerracotta, 16, 44.8, 21, 0.2);
    B(cabSimplie, 22, 2.0, 17.5, mNavy, 16, 47.0, 21, 0.2);

    // 상판(y=64.0cm) 오픈 오디오 스테이지: TEAC TN-180BT + Edifier MR3 페어
    addTurntableAudioTop(cabSimplie, 64.0, 40.0, 77.0);
  }

  let cabMode = 'filmon';
  function setNCabinetMode(mode) {
    const next = ['filmon', 'chakoc3', 'simplie'].includes(mode) ? mode : 'filmon';
    cabMode = next;
    cabFilmon.visible = cabMode === 'filmon';
    cabChakoc3.visible = cabMode === 'chakoc3';
    cabSimplie.visible = cabMode === 'simplie';
    return cabMode;
  }
  setNCabinetMode('filmon');

  return {
    group: grpN,
    eastChakoc5,
    cabFilmon,
    cabChakoc3,
    cabSimplie,
    setNCabinetMode,
    get cabMode() { return cabMode; }
  };
}
