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
//          · 1단(153.8cm): 조명 제외 깔끔한 여백 — 우측 세라믹 화병 오브제 + 니트 패브릭 스택 + 블랙 해트박스·미니 헬멧
//          · 2단(118.3cm): 폴라보 양면 4문 모루유리 미니수납장(77,400원 · 33454 · 위스키바·SLATTIS 시계 15,000원) + 좌측 매거진 (무드등 제외)
//          · 3단(82.8cm 허리높이): NEODA 우드트레이(5,900원 · 26514) 핸드드립 홈카페 커피 스테이션 + 우측 단독 포인트 조명 GUBON 미니 옐로우 버섯램프(23,900원 · 27594) 1개만 배치!
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

  // O안 전면 큐레이션 북 · 바이닐 커버 텍스처 4종 + 미니 NOW PLAYING 카드
  const bauhausBookTex = canvasTex(256, 340, (g) => {
    g.fillStyle = '#f4efe4';
    g.fillRect(0, 0, 256, 340);
    g.strokeStyle = '#222428';
    g.lineWidth = 2.5;
    g.strokeRect(14, 14, 228, 312);
    g.fillStyle = '#1c1e22';
    g.font = 'bold 28px sans-serif';
    g.textAlign = 'left';
    g.fillText('BAUHAUS', 26, 52);
    g.fillStyle = '#5a554c';
    g.font = 'bold 11px sans-serif';
    g.fillText('ARCHIVE · MODULAR FORM 1926', 28, 70);
    g.fillStyle = '#21488a';
    g.beginPath(); g.arc(96, 178, 56, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#c85232';
    g.fillRect(130, 122, 92, 112);
    g.fillStyle = '#eab638';
    g.beginPath(); g.arc(176, 178, 30, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#1c1e22';
    g.fillRect(26, 260, 204, 10);
    g.fillRect(26, 278, 120, 4);
  });

  const nordicBookTex = canvasTex(256, 320, (g) => {
    g.fillStyle = '#eae3d6';
    g.fillRect(0, 0, 256, 320);
    g.fillStyle = '#1e2022';
    g.font = 'bold 22px sans-serif';
    g.textAlign = 'center';
    g.fillText('NORDIC SPACE', 128, 44);
    g.fillStyle = '#6f675c';
    g.font = '11px Georgia, serif';
    g.fillText('DAYLIGHT · TIMBER · SILENCE', 128, 63);
    g.fillStyle = '#d6c9b6';
    g.fillRect(26, 82, 204, 198);
    g.fillStyle = '#9c7148';
    g.beginPath();
    g.moveTo(64, 280);
    g.lineTo(64, 176);
    g.arc(128, 176, 64, Math.PI, 0, false);
    g.lineTo(192, 280);
    g.closePath();
    g.fill();
    g.fillStyle = '#efe7da';
    g.beginPath();
    g.moveTo(92, 280);
    g.lineTo(92, 186);
    g.arc(128, 186, 36, Math.PI, 0, false);
    g.lineTo(164, 280);
    g.closePath();
    g.fill();
    g.fillStyle = 'rgba(28, 30, 34, 0.16)';
    g.beginPath();
    g.moveTo(26, 82); g.lineTo(165, 82); g.lineTo(26, 240); g.closePath(); g.fill();
  });

  const oLpJazzTex = canvasTex(256, 256, (g) => {
    g.fillStyle = '#183568';
    g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#f3ece0';
    g.font = 'bold 22px sans-serif';
    g.textAlign = 'left';
    g.fillText('MIDNIGHT', 22, 42);
    g.fillText('IN TOKYO', 22, 68);
    g.fillStyle = '#d9a441';
    g.font = 'bold 10px sans-serif';
    g.fillText('BLUE SESSION · QUARTET STEREO', 24, 86);
    g.fillStyle = '#d99b38';
    g.beginPath(); g.arc(160, 166, 62, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#12264a';
    g.beginPath(); g.arc(122, 176, 48, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f3ece0';
    for (let x = 24; x < 232; x += 18) {
      g.fillRect(x, 224, 10, 4);
    }
  });

  const oLpSolarisTex = canvasTex(256, 256, (g) => {
    g.fillStyle = '#efe5d5';
    g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#c95938';
    g.beginPath();
    g.arc(128, 170, 74, Math.PI, 0, false);
    g.closePath();
    g.fill();
    g.fillStyle = '#e6b245';
    g.beginPath();
    g.arc(128, 170, 44, Math.PI, 0, false);
    g.closePath();
    g.fill();
    g.fillStyle = '#1f2124';
    g.fillRect(28, 174, 200, 5);
    g.font = 'bold 22px sans-serif';
    g.textAlign = 'center';
    g.fillText('SOLARIS', 128, 46);
    g.fillStyle = '#5e564d';
    g.font = 'bold 11px sans-serif';
    g.fillText('ANALOG EDITION · 33⅓ RPM', 128, 66);
  });

  const nowPlayingMiniTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#f4efe4';
    g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#1c1e22';
    g.font = 'bold 12px sans-serif';
    g.textAlign = 'center';
    g.fillText('NOW PLAYING', 64, 22);
    g.fillStyle = '#204584';
    g.beginPath(); g.arc(64, 72, 34, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#c85232';
    g.beginPath(); g.arc(64, 72, 13, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#f4efe4';
    g.beginPath(); g.arc(64, 72, 3, 0, Math.PI * 2); g.fill();
  });

  const oTopAccGroups = [];
  function addMoonJarWithFreesia(parent, cx, by, cz) {
    const grp = new THREE.Group();
    grp.position.set(cm(cx), cm(by), cm(cz));
    parent.add(grp);
    const pts = [
      [0, 0], [2.4, 0], [4.1, 2.2], [4.3, 4.9], [3.4, 7.5], [1.65, 8.8], [1.9, 9.6]
    ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
    const jar = new THREE.Mesh(new THREE.LatheGeometry(pts, 28), mCeramic);
    jar.castShadow = true;
    jar.receiveShadow = true;
    grp.add(jar);
    for (const [fx, fy, fz] of [
      [-1.8, 13.8, -0.6],
      [0.4, 15.2, 0.5],
      [2.1, 13.2, -0.4],
      [-0.5, 12.6, 1.8]
    ]) {
      dRod(grp, [0, 8.2, 0], [fx, fy, fz], 0.14, mLeafGreen);
      CY(grp, 1.15, 0.45, 1.25, mPopYellow, fx, fy, fz, 12);
    }
    return grp;
  }

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

  const turntablePairs = [];
  const nOnlyCurationItems = [];
  let cafeEquipGroup = null;

  // 상판 위 턴테이블(N안: TEAC TN-180BT / O안: 소니 PS-LX5BT) + Edifier MR3 블랙 스피커 1조 스테이지
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

    // 중앙 턴테이블: N안은 TEAC TN-180BT, O안은 소니 PS-LX5BT(올블랙 플래터 + 옐로우 스타일러스 + 그린 스타트 버튼) 전환
    const ttTeac = new THREE.Group();
    ttTeac.name = 'N TEAC TN-180BT Turntable on MarketB Cabinet';
    ttTeac.position.set(cm(opts.ttX ?? -1.5), cm(yTop), cm(cz + 0.5));
    parent.add(ttTeac);
    for (const [fx, fz] of [[-16.5, -12], [16.5, -12], [-16.5, 12], [16.5, 12]]) {
      CY(ttTeac, 1.8, 1.8, 1.3, mBlack, fx, 0, fz, 16);
    }
    B(ttTeac, 41.0, 4.6, 31.5, mBlack, 0, 1.3, 0, 0.45);
    CY(ttTeac, 13.6, 13.8, 1.1, mChrome, -3.0, 5.9, 0, 40);
    CY(ttTeac, 13.2, 13.2, 0.3, M('#16191d', { roughness: 0.25 }), -3.0, 7.0, 0, 40);
    CY(ttTeac, 4.0, 4.0, 0.35, M('#c9683e', { roughness: 0.38 }), -3.0, 7.2, 0, 26);
    CY(ttTeac, 0.35, 0.35, 1.5, mChrome, -3.0, 7.0, 0, 12);
    CY(ttTeac, 2.1, 2.3, 1.8, mChrome, 14.2, 5.9, -8.5, 20);
    dRod(ttTeac, [14.2, 7.7, -8.5], [9.8, 7.7, 8.8], 0.28, mChrome);
    B(ttTeac, 1.6, 1.1, 2.6, mBlack, 9.5, 7.1, 9.6, 0.15);
    {
      const lidPivot = new THREE.Group();
      lidPivot.position.set(0, cm(5.9), cm(-15.4));
      lidPivot.rotation.x = -0.46;
      ttTeac.add(lidPivot);
      B(lidPivot, 40.6, 0.4, 31.0, mAcrylic, 0, 4.8, 15.5, 0.15);
      B(lidPivot, 40.6, 4.8, 0.4, mAcrylic, 0, 0, 30.8);
      B(lidPivot, 0.4, 4.8, 31.0, mAcrylic, -20.1, 0, 15.5);
      B(lidPivot, 0.4, 4.8, 31.0, mAcrylic, 20.1, 0, 15.5);
    }

    // O안 전용: 소니 PS-LX5BT 블루투스 턴테이블 (43×36.6×11.7cm · 매트블랙 플래터 + 노란 바늘 포인트 + 그린 START 버튼)
    const ttSony = new THREE.Group();
    ttSony.name = 'O Sony PS-LX5BT Bluetooth Turntable';
    ttSony.position.set(cm(opts.ttX ?? -1.5), cm(yTop), cm(cz + 0.5));
    ttSony.visible = false;
    parent.add(ttSony);
    const mSonyMatte = M('#1b1c1f', { roughness: 0.62, metalness: 0.08 });
    const mSonyPlatter = M('#27292d', { roughness: 0.42, metalness: 0.22 });
    for (const [fx, fz] of [[-17.2, -12.5], [17.2, -12.5], [-17.2, 12.5], [17.2, 12.5]]) {
      CY(ttSony, 1.9, 1.9, 1.1, mBlack, fx, 0, fz, 16);
    }
    B(ttSony, 42.2, 4.8, 32.6, mSonyMatte, 0, 1.1, 0, 0.18);
    // 올블랙 다이캐스트 플래터 & 매트 + 은색 스핀들
    CY(ttSony, 13.9, 14.1, 1.0, mBlack, -2.8, 5.9, -0.4, 42);
    CY(ttSony, 13.6, 13.6, 0.32, mSonyPlatter, -2.8, 6.9, -0.4, 42);
    CY(ttSony, 4.4, 4.4, 0.36, M('#222428', { roughness: 0.5 }), -2.8, 7.05, -0.4, 28);
    CY(ttSony, 0.32, 0.32, 1.5, mChrome, -2.8, 6.9, -0.4, 12);
    // 좌측 전방 블루투스 페어링 원형 버튼
    CY(ttSony, 1.05, 1.05, 0.25, M('#2b2d31', { roughness: 0.5 }), -17.6, 5.9, 11.8, 18);
    // 우측 후방 블랙 톤암 베이스 + 블랙 톤암 + 시그니처 옐로우 카트리지 캡
    CY(ttSony, 2.3, 2.5, 2.4, mBlack, 14.5, 5.9, -7.8, 22);
    dRod(ttSony, [14.5, 7.8, -7.8], [9.4, 7.6, 8.2], 0.3, mBlack);
    B(ttSony, 1.7, 1.0, 2.7, mBlack, 9.1, 7.1, 9.1, 0.12);
    B(ttSony, 1.0, 0.85, 1.1, M('#f0be18', { roughness: 0.32 }), 8.9, 6.65, 10.1, 0.08);
    // 우측 측면 속도/게인 다이얼 2개 + 전면 우측 그린 START 버튼 및 STOP·UP/DOWN 버튼 3개
    CY(ttSony, 0.85, 0.85, 1.1, mBlack, 17.2, 5.9, 2.2, 16);
    CY(ttSony, 0.85, 0.85, 1.1, mBlack, 17.2, 5.9, 6.2, 16);
    CY(ttSony, 0.9, 0.9, 0.75, M('#2f7a52', { roughness: 0.38 }), 7.2, 5.9, 13.4, 18);
    CY(ttSony, 0.9, 0.9, 0.75, mBlack, 10.6, 5.9, 13.4, 18);
    CY(ttSony, 0.9, 0.9, 0.75, mBlack, 14.0, 5.9, 13.4, 18);
    {
      const lidPivot = new THREE.Group();
      lidPivot.position.set(0, cm(5.9), cm(-15.9));
      lidPivot.rotation.x = -0.44;
      ttSony.add(lidPivot);
      B(lidPivot, 41.8, 0.4, 32.0, mAcrylic, 0, 5.0, 16.0, 0.12);
      B(lidPivot, 41.8, 5.0, 0.4, mAcrylic, 0, 0, 31.8);
      B(lidPivot, 0.4, 5.0, 32.0, mAcrylic, -20.7, 0, 16.0);
      B(lidPivot, 0.4, 5.0, 32.0, mAcrylic, 20.7, 0, 16.0);
    }
    turntablePairs.push({ teac: ttTeac, sony: ttSony });

    // 턴테이블 우측 앞 브라스 레코드 스태빌라이저 & 카본 브러쉬 디테일
    if (opts.withNowPlaying !== false) {
      CY(parent, 3.4, 3.6, 2.2, mGold, 21.6, yTop, cz + 6.5, 24);
      CY(parent, 1.8, 2.0, 1.2, mGold, 21.6, yTop + 2.2, cz + 6.5, 20);
      B(parent, 2.4, 1.4, 11.5, mChrome, 21.6, yTop, cz - 4.5, 0.2);
      B(parent, 2.0, 0.6, 11.0, mBlack, 21.6, yTop + 1.4, cz - 4.5, 0.1);
    }
  }

  // 공유 큐레이션 모듈 헬퍼 (N안/O안 중복 방지)
  function addHangingMonkey(parent, x, y, z, rotY = -Math.PI / 3) {
    const monkey = new THREE.Group();
    monkey.position.set(cm(x), cm(y), cm(z));
    monkey.rotation.y = rotY;
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
  }

  function addPostHeadphones(parent, postX, hookY, cz) {
    dRod(parent, [postX + 0.9, hookY + 3.0, cz], [postX - 0.4, hookY, cz], 0.25, mChrome);
    CY(parent, 4.8, 4.8, 2.0, mBlack, postX - 1.1, hookY - 8.0, cz - 2.8, 20);
    CY(parent, 4.8, 4.8, 2.0, mBlack, postX - 1.1, hookY - 8.0, cz + 2.8, 20);
    dRod(parent, [postX - 1.1, hookY - 5.5, cz - 2.8], [postX - 1.1, hookY, cz], 0.42, mBlack);
    dRod(parent, [postX - 1.1, hookY, cz], [postX - 1.1, hookY - 5.5, cz + 2.8], 0.42, mBlack);
  }

  function addPolaboGlassBox(parent, cx, by, cz, opts = {}) {
    const polaboGlass = new THREE.Group();
    polaboGlass.name = 'MarketB POLABO Glass Sliding Mini Cabinet CAM2260SL';
    polaboGlass.position.set(cm(cx), cm(by), cm(cz));
    parent.add(polaboGlass);

    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 0, 0, 0.15);
    B(polaboGlass, 60, 1.6, 26.5, mCamphor, 0, 20.4, 0, 0.15);
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, -29.2, 1.6, 0);
    B(polaboGlass, 1.6, 18.8, 26.5, mCamphor, 29.2, 1.6, 0);
    B(polaboGlass, 56.8, 18.8, 0.8, M('#f3ede2', { roughness: 0.7 }), 0, 1.6, -12.4);

    // 엽서 · 미니 갤러리 카드
    B(polaboGlass, 7.5, 9.5, 0.2, M('#f9f6ee', { roughness: 0.4 }), -18, 8.5, -11.8);
    B(polaboGlass, 5.8, 6.2, 0.22, mNavy, -18, 10.6, -11.7);
    B(polaboGlass, 6.8, 8.5, 0.2, M('#fbf8f1', { roughness: 0.4 }), -8.5, 9.2, -11.8);
    B(polaboGlass, 5.2, 5.2, 0.22, mTerracotta, -8.5, 11.2, -11.7);
    B(polaboGlass, 8.0, 6.5, 0.2, mPopYellow, 2.5, 11.0, -11.8);

    if (opts.withClock) {
      const clk = new THREE.Group();
      clk.position.set(cm(-4), cm(1.6), cm(1.5));
      clk.rotation.y = 0.08;
      polaboGlass.add(clk);
      nOnlyCurationItems.push(clk);
      B(clk, 8.8, 8.8, 2.6, mWhite, 0, 0, 0, 0.3);
      const clkFace = new THREE.Mesh(
        new THREE.PlaneGeometry(cm(7.4), cm(7.4)),
        new THREE.MeshStandardMaterial({ map: clockFaceTex, roughness: 0.3 })
      );
      clkFace.position.set(0, cm(4.4), cm(1.35));
      clk.add(clkFace);
    }

    if (opts.withJigger) {
      CY(polaboGlass, 1.8, 0.7, 3.0, mGold, -3.5, 1.6, 1.2, 18);
      CY(polaboGlass, 0.7, 1.5, 2.2, mGold, -3.5, 4.6, 1.2, 18);
    }

    // 위스키·진 보틀 & 글라스
    const bx = opts.withJigger ? 8.0 : 8.5;
    CY(polaboGlass, 2.9, 2.9, 10.2, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), bx, 1.6, -1, 20);
    CY(polaboGlass, 1.0, 1.2, 3.8, M('#b86828', { roughness: 0.12, transparent: true, opacity: 0.78 }), bx, 11.8, -1, 16);
    CY(polaboGlass, 1.1, 1.1, 1.2, mGold, bx, 15.6, -1, 16);
    CY(polaboGlass, 2.6, 2.6, 11.0, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.6, 1.6, -2, 20);
    CY(polaboGlass, 0.9, 1.1, 3.6, M('#cfe6e2', { roughness: 0.1, transparent: true, opacity: 0.65 }), 15.6, 12.6, -2, 16);
    for (const stx of [21.8, 26.0]) {
      CY(polaboGlass, 1.8, 1.8, 0.3, mClearGlass, stx, 1.6, 2, 16);
      CY(polaboGlass, 0.22, 0.22, 4.2, mClearGlass, stx, 1.9, 2, 12);
      CY(polaboGlass, 2.0, 1.1, 4.6, mClearGlass, stx, 6.1, 2, 18);
    }

    // 상부 내부 은은한 간접바 조명 (O안 전용)
    if (opts.withWarmLight) {
      const stripMat = new THREE.MeshStandardMaterial({
        color: '#fff4dc',
        emissive: '#ffd28a',
        emissiveIntensity: 0.75,
        roughness: 0.3
      });
      B(polaboGlass, 26.0, 0.4, 1.2, stripMat, 4.0, 19.6, -2.5, 0.1);
      const barLight = new THREE.PointLight('#ffdca2', 0.38, 0.95, 1.8);
      barLight.position.set(cm(4.0), cm(18.2), cm(-1.0));
      polaboGlass.add(barLight);
      if (addAccent) addAccent(barLight, stripMat, 1.15, 1.8, 0.38, 0.75);
    }

    const rDoorX = opts.rightDoorX ?? 6.5;
    for (const [dx, dz, knobX] of [[-14.2, 11.8, -24.5], [rDoorX, 12.6, rDoorX + 10.3]]) {
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
    return polaboGlass;
  }

  function addGubonLamp(parent, x, by, z) {
    const gubon = new THREE.Group();
    gubon.name = 'MarketB GUBON Mini Mushroom Table Lamp Yellow';
    gubon.position.set(cm(x), cm(by), cm(z));
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
    if (addAccent) addAccent(gubonLight, gubonDomeMat, 2.0, 2.4, 0.45, 0.35);
    return gubon;
  }

  function addPolabo2DrawerBox(parent, cx, by, cz) {
    const polabo2Dr = new THREE.Group();
    polabo2Dr.name = 'MarketB POLABO 2-Drawer Mini Unit BSM2266';
    polabo2Dr.position.set(cm(cx), cm(by), cm(cz));
    parent.add(polabo2Dr);
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
    return polabo2Dr;
  }

  function addCoffeeGear(cafeGear, layout = {}) {
    const kx = layout.kettleX ?? -14;
    const vx = layout.v60X ?? -1.5;
    const gx = layout.grinderX ?? 9.0;
    const gz = layout.grinderZ ?? -2.5;
    const cx = layout.canisterX ?? 16.5;
    const cz = layout.canisterZ ?? -4.5;
    const m1x = layout.mug1X ?? 11.5;
    const m2x = layout.mug2X ?? 18.2;
    const mz = layout.mugZ ?? 5.8;

    CY(cafeGear, 4.2, 4.8, 10.5, mBlack, kx, 0, 1, 22);
    CY(cafeGear, 4.3, 4.3, 0.8, mCamphor, kx, 10.5, 1, 20);
    dRod(cafeGear, [kx + 4.5, 2.6, 1], [kx + 7.8, 9.4, 1], 0.28, mBlack);
    dRod(cafeGear, [kx - 4.2, 3.1, 1], [kx - 6.0, 8.8, 1], 0.32, mBlack);
    CY(cafeGear, 4.2, 5.2, 8.8, mClearGlass, vx, 0, 1.5, 22);
    CY(cafeGear, 4.8, 2.2, 6.8, mCeramic, vx, 8.8, 1.5, 22);
    CY(cafeGear, 2.5, 2.5, 12.5, mChrome, gx, 0, gz, 20);
    dRod(cafeGear, [gx, 12.5, gz], [gx + 5.0, 13.8, gz + 1.5], 0.24, mChrome);
    CY(cafeGear, 1.1, 1.1, 1.4, mWalnut, gx + 5.0, 12.8, gz + 1.5, 14);
    CY(cafeGear, 3.6, 3.6, 9.8, mBlack, cx, 0, cz, 20);
    CY(cafeGear, 3.7, 3.7, 1.0, mWalnut, cx, 9.8, cz, 20);
    CY(cafeGear, 3.1, 2.8, 7.6, mTerracotta, m1x, 0, mz, 20);
    CY(cafeGear, 3.1, 2.8, 7.6, mCeramic, m2x, 0, mz, 20);
  }

  function addWireEaselBook(parent, cx, by, cz, w, h, d, tex, rotY = 0.08, tiltX = -0.22) {
    const holder = new THREE.Group();
    holder.position.set(cm(cx), cm(by), cm(cz));
    holder.rotation.y = rotY;
    parent.add(holder);

    // 크롬 와이어 이젤
    const bw = w * 0.34;
    dRod(holder, [-bw, 0.25, 2.5], [bw, 0.25, 2.5], 0.22, mChrome);
    dRod(holder, [-bw, 0.25, 2.5], [-bw * 0.7, h * 0.55, -2.5], 0.22, mChrome);
    dRod(holder, [bw, 0.25, 2.5], [bw * 0.7, h * 0.55, -2.5], 0.22, mChrome);
    dRod(holder, [-bw * 0.7, h * 0.55, -2.5], [-bw * 0.7, 0.2, -5.2], 0.2, mChrome);
    dRod(holder, [bw * 0.7, h * 0.55, -2.5], [bw * 0.7, 0.2, -5.2], 0.2, mChrome);

    const book = new THREE.Group();
    book.position.set(0, cm(0.45), 0);
    book.rotation.x = tiltX;
    holder.add(book);
    B(book, w, h, d, mWhite, 0, 0, 0, 0.1);
    const cover = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(w - 0.3), cm(h - 0.3)),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.36 })
    );
    cover.position.set(0, cm(h / 2), cm(d / 2 + 0.08));
    book.add(cover);
    return holder;
  }

  // ============================================================================
  // ① 동쪽 벽(x=789.5 벽밀착, 중심 x=769.5, z=716, rotY=-Math.PI/2):
  //    마켓비 CHAKOC 선반 850 넓은 5단 · 내추럴 (85×40×155cm · 149,000원 · product_no=41358)
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
  const nShelfDecor = new THREE.Group();
  nShelfDecor.name = 'N Shelf Decor';
  eastChakoc5.add(nShelfDecor);

  const oShelfDecor = new THREE.Group();
  oShelfDecor.name = 'O Editorial Shelf Decor';
  oShelfDecor.visible = false;
  eastChakoc5.add(oShelfDecor);

  const oSidePostDecor = new THREE.Group();
  oSidePostDecor.name = 'O Living-Side Post Decor';
  oShelfDecor.add(oSidePostDecor);

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

    const y1 = 153.8, y2 = 118.3, y3 = 82.8, y4 = 47.3, y5 = 11.8;

    // ------------------------------------------------------------------------
    // [N안 전용 5단 내부·측면 큐레이션 (기존 100% 보존)]
    // ------------------------------------------------------------------------
    addHangingMonkey(nShelfDecor, -42.4, 120, 26);
    addPostHeadphones(nShelfDecor, -42.4, 96.5, 24);

    // N 1단 (y1=153.8)
    {
      const topVase = new THREE.Group();
      topVase.name = 'Sculptural Off-White Ceramic Vase Object';
      topVase.position.set(cm(27.5), cm(y1), cm(20.5));
      nShelfDecor.add(topVase);
      const tvPts = [
        [0, 0], [3.6, 0], [5.6, 3.2], [5.8, 7.6], [3.8, 12.0], [2.1, 14.8], [2.5, 16.2]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const tvMesh = new THREE.Mesh(new THREE.LatheGeometry(tvPts, 28), mCeramic);
      tvMesh.castShadow = true;
      topVase.add(tvMesh);
      dRod(topVase, [0, 14, 0], [-2.4, 23.5, 1.0], 0.18, mLeafGreen);
      dRod(topVase, [0, 14, 0], [2.2, 24.8, -0.8], 0.18, mLeafGreen);
      B(topVase, 3.8, 0.18, 2.6, mLeafGreen, -2.4, 23.5, 1.0, 0.3);
      B(topVase, 4.0, 0.18, 2.8, mLeafGreen, 2.2, 24.8, -0.8, 0.3);

      B(nShelfDecor, 22, 3.0, 17, mBurgundy, 1.5, y1, 20.5, 0.9);
      B(nShelfDecor, 20.5, 2.8, 16, M('#d48b9c', { roughness: 0.88 }), 1.5, y1 + 3.0, 20.5, 0.9);
      B(nShelfDecor, 19.0, 2.6, 15, mFabricIvory, 1.5, y1 + 5.8, 20.5, 0.9);

      CY(nShelfDecor, 8.8, 8.8, 10.5, mBlack, -25, y1, 19.5, 28);
      CY(nShelfDecor, 9.1, 9.1, 2.0, mBlack, -25, y1 + 9.4, 19.5, 28);
      const helm = new THREE.Group();
      helm.position.set(cm(-25), cm(y1 + 11.4), cm(19.5));
      helm.rotation.y = 0.25;
      nShelfDecor.add(helm);
      const hBall = new THREE.Mesh(new THREE.SphereGeometry(cm(4.8), 24, 18), M('#c92424', { roughness: 0.25, metalness: 0.18 }));
      hBall.position.y = cm(4.6);
      helm.add(hBall);
      B(helm, 6.4, 2.4, 2.6, M('#1b1d20', { roughness: 0.15, metalness: 0.7 }), 0, 3.8, 3.5, 0.35);
    }

    // N 2단 (y2=118.3)
    {
      addPolaboGlassBox(nShelfDecor, 9.5, y2, 20, { withClock: true, rightDoorX: 6.5, withWarmLight: false });
      const mag = new THREE.Group();
      mag.position.set(cm(-29.5), cm(y2), cm(19.5));
      mag.rotation.x = -0.24;
      mag.rotation.y = 0.1;
      nShelfDecor.add(mag);
      B(mag, 17, 1.2, 12, mLightBirch, 0, 0, 0, 0.2);
      B(mag, 16.5, 22.5, 1.2, mWhite, 0, 1.2, 0, 0.1);
      const cover = new THREE.Mesh(
        new THREE.PlaneGeometry(cm(16.2), cm(22.2)),
        new THREE.MeshStandardMaterial({ map: artMagTex, roughness: 0.35 })
      );
      cover.position.set(0, cm(12.3), cm(0.66));
      mag.add(cover);
    }

    // N 3단 (y3=82.8)
    {
      const cafe = new THREE.Group();
      cafe.name = 'N Home Cafe Hand-Drip Station';
      cafe.position.set(cm(-13.5), cm(y3), cm(21.5));
      nShelfDecor.add(cafe);
      const neodaTray = B(cafe, 44, 1.4, 24, mLightBirch, 0, 0, 0, 0.35);
      nOnlyCurationItems.push(neodaTray);
      const cafeGear = new THREE.Group();
      cafeGear.position.y = cm(1.4);
      cafe.add(cafeGear);
      cafeEquipGroup = cafeGear;
      addCoffeeGear(cafeGear);
      addGubonLamp(nShelfDecor, 27.5, y3, 21);
    }

    // N 4단 (y4=47.3)
    {
      const polabo2Dr = addPolabo2DrawerBox(nShelfDecor, -6.5, y4, 22);
      B(polabo2Dr, 21, 2.2, 15, mFabricIvory, -14, 14.5, 0, 0.2);
      B(polabo2Dr, 18, 2.0, 14, mRetroGreen, -14, 16.7, 0, 0.2);
      CY(polabo2Dr, 4.2, 3.0, 7.2, mCeramic, 14, 14.5, 0, 22);

      const bCols = [mRetroGreen, mFabricIvory, mTerracotta, mNavy];
      let bx = 28.5;
      for (let i = 0; i < 4; i++) {
        B(nShelfDecor, 2.3, 25 - (i % 2) * 2.2, 21, bCols[i], bx + 1.15, y4, 21, 0.12);
        B(nShelfDecor, 1.8, 24 - (i % 2) * 2.2, 20, mWhite, bx + 1.15, y4 + 0.4, 21.2);
        bx += 2.6;
      }
    }

    // N 5단 (y5=11.8): 벤탄 라탄장 포함
    {
      const bentan = new THREE.Group();
      bentan.name = 'MarketB BENTAN Rattan Sliding 2-Door Mini Cabinet SHM2460';
      bentan.position.set(cm(-9.5), cm(y5), cm(23));
      nShelfDecor.add(bentan);
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
        B(nShelfDecor, 2.4, 28 - (i % 3) * 1.8, 23, fCols[i], fx + 1.2, y5, 21, 0.12);
        B(nShelfDecor, 1.9, 27 - (i % 3) * 1.8, 22, mWhite, fx + 1.2, y5 + 0.4, 21.2);
        fx += 2.7;
      }
    }

    // ------------------------------------------------------------------------
    // [O안 에디토리얼 리스타일링 5단 큐레이션 (벤탄 라탄장 제거 · 여백 + 식물 + 간접광)]
    // ------------------------------------------------------------------------
    addHangingMonkey(oSidePostDecor, -42.4, 104, 26);
    addPostHeadphones(oSidePostDecor, -42.4, 74.0, 24);

    // O 1단 (y1=153.8): 좌측 늘어지는 스킨답서스 화분 + 중앙 아트 모노그래프 & 크롬 스페어 + 우측 투명 아크릴 F1 헬멧 케이스
    {
      const mIvyDark = M('#2e6339', { roughness: 0.48 });
      const mIvyBright = M('#48824c', { roughness: 0.46 });
      const mStemGreen = M('#3a6b40', { roughness: 0.56 });
      const mSoil = M('#28221e', { roughness: 0.92 });
      const pot = new THREE.Group();
      pot.name = 'O 1-Tier Trailing Pothos Planter';
      pot.position.set(cm(-27.5), cm(y1), cm(21.5));
      oShelfDecor.add(pot);

      CY(pot, 6.2, 5.8, 11.5, mCeramic, 0, 0, 0, 28);
      CY(pot, 6.3, 6.3, 0.45, mChrome, 0, 11.05, 0, 28);
      CY(pot, 5.6, 5.6, 0.3, mSoil, 0, 10.9, 0, 24);

      const addLeaf = (parent, lx, ly, lz, rx, ry, rz, sc = 1.0, bright = false) => {
        const lf = new THREE.Mesh(
          new THREE.SphereGeometry(cm(2.8), 12, 10),
          bright ? mIvyBright : mIvyDark
        );
        lf.scale.set(sc, 0.16 * sc, 1.38 * sc);
        lf.position.set(cm(lx), cm(ly), cm(lz));
        lf.rotation.set(rx, ry, rz);
        lf.castShadow = true;
        parent.add(lf);
      };

      // 상부 풍성한 9개 잎 크라운
      for (const [lx, ly, lz, ry, rz, sc, br] of [
        [-4.2, 15.0, 1.5, 0.4, 0.4, 0.95, true],
        [3.8, 15.8, 2.0, -0.5, -0.35, 1.0, false],
        [0.2, 19.2, -1.2, 0.1, 0.15, 1.05, true],
        [-2.8, 18.0, -3.5, 0.8, 0.2, 0.92, false],
        [4.5, 14.5, -2.5, -0.9, -0.25, 0.95, true],
        [-5.2, 13.8, -1.0, 1.2, 0.35, 0.88, false],
        [1.8, 20.6, 2.4, -0.3, -0.15, 0.9, true],
        [-1.4, 15.6, 4.8, 0.25, 0.28, 0.98, false],
        [2.6, 17.4, -4.6, -1.1, -0.18, 0.86, true]
      ]) {
        dRod(pot, [0, 11.0, 0], [lx * 0.85, ly - 0.5, lz * 0.85], 0.16, mStemGreen);
        addLeaf(pot, lx, ly, lz, 0.35, ry, rz, sc, br);
      }

      // 앞쪽 선반 턱(z=+17.6 상대위치 = 보드 앞엣지 39.1) 위로 자연스럽게 늘어지는 줄기 4가닥 + 잎 14장
      const vines = [
        [[-2.0, 11.0, 3.0], [-4.5, 12.2, 11.5], [-6.8, 1.6, 18.0], [-8.8, -8.5, 18.9], [-9.4, -17.5, 19.3]],
        [[0.0, 11.0, 3.2], [-1.0, 12.0, 12.5], [-1.8, 1.2, 18.1], [-2.2, -6.8, 18.8], [-1.6, -13.5, 19.2]],
        [[2.2, 11.0, 2.8], [3.6, 11.8, 11.8], [4.8, 1.0, 18.0], [5.5, -7.8, 18.8], [6.0, -15.2, 19.1]],
        [[-3.6, 11.0, 1.5], [-7.2, 10.6, 9.5], [-9.6, 0.8, 17.8], [-10.8, -6.2, 18.6]]
      ];
      let vIdx = 0;
      for (const pts of vines) {
        for (let i = 0; i < pts.length - 1; i++) {
          dRod(pot, pts[i], pts[i + 1], 0.15, mStemGreen);
          if (i >= 1) {
            const p = pts[i + 1];
            addLeaf(pot, p[0], p[1], p[2] + 0.6, 0.95, (vIdx % 2 === 0 ? 0.25 : -0.25), (vIdx % 3 - 1) * 0.28, 0.84, vIdx % 2 === 1);
            vIdx++;
          }
        }
        const mid = pts[2];
        addLeaf(pot, mid[0] + 0.6, mid[1] - 3.4, mid[2] + 0.8, 1.05, 0.15, -0.2, 0.78, vIdx % 2 === 0);
        vIdx++;
      }

      // 중앙 미니멀 모노그래프 2권 + 브러시드 크롬 스페어 오브제
      const mCobalt = M('#1f4587', { roughness: 0.62 });
      const mCreamBook = M('#f0ece1', { roughness: 0.8 });
      B(oShelfDecor, 23, 2.2, 17, mCreamBook, -1.5, y1, 20.5, 0.18);
      B(oShelfDecor, 20, 1.9, 15.5, mCobalt, -1.5, y1 + 2.2, 20.5, 0.16);
      CY(oShelfDecor, 2.1, 2.3, 0.7, mBlack, -1.5, y1 + 4.1, 20.5, 24);
      const sphereObj = new THREE.Mesh(new THREE.SphereGeometry(cm(3.0), 24, 20), mChrome);
      sphereObj.position.set(cm(-1.5), cm(y1 + 4.8 + 2.7), cm(20.5));
      sphereObj.castShadow = true;
      oShelfDecor.add(sphereObj);

      // 우측 슬림 블랙 플린스 + 투명 5면 아크릴 F1 미니 헬멧 쇼케이스 (올드 해트박스 대체)
      const acX = 24.5, acZ = 20.0;
      const mGlassCase = M('#eef6fa', { roughness: 0.08, transparent: true, opacity: 0.22 });
      B(oShelfDecor, 17.6, 1.4, 15.6, mBlack, acX, y1, acZ, 0.15);
      const helm = new THREE.Group();
      helm.position.set(cm(acX), cm(y1 + 1.4), cm(acZ));
      helm.rotation.y = 0.28;
      oShelfDecor.add(helm);
      const hBall = new THREE.Mesh(new THREE.SphereGeometry(cm(4.8), 24, 18), M('#c92424', { roughness: 0.25, metalness: 0.18 }));
      hBall.position.y = cm(5.0);
      hBall.castShadow = true;
      helm.add(hBall);
      B(helm, 6.4, 2.4, 2.6, M('#1b1d20', { roughness: 0.15, metalness: 0.7 }), 0, 4.2, 3.5, 0.35);
      CY(helm, 3.4, 3.8, 0.7, mBlack, 0, 0, 0, 20);
      // 얇은 투명 아크릴 후드 5면
      const hy = y1 + 1.4;
      B(oShelfDecor, 16.8, 0.3, 14.8, mGlassCase, acX, hy + 14.2, acZ);
      B(oShelfDecor, 16.8, 14.2, 0.3, mGlassCase, acX, hy, acZ - 7.25);
      B(oShelfDecor, 16.8, 14.2, 0.3, mGlassCase, acX, hy, acZ + 7.25);
      B(oShelfDecor, 0.3, 14.2, 14.2, mGlassCase, acX - 8.25, hy, acZ);
      B(oShelfDecor, 0.3, 14.2, 14.2, mGlassCase, acX + 8.25, hy, acZ);
    }

    // O 2단 (y2=118.3): 바우하우스 전면 전시북 + 폴라보 양면 4문 모루유리 쇼케이스 (우측 도어 개방감 + 은은한 간접조명 · 시계 제외)
    {
      addWireEaselBook(oShelfDecor, -30.5, y2, 20.5, 18.5, 24.5, 1.4, bauhausBookTex, 0.08, -0.22);
      addPolaboGlassBox(oShelfDecor, 10.0, y2, 20.0, {
        withClock: false,
        withJigger: true,
        rightDoorX: 2.2,
        withWarmLight: true
      });
    }

    // O 3단 (y3=82.8): 좌측(거실방향) GUBON 옐로우 단독조명 + 에스프레소 컵세트, 우측(식탁방향) 블랙 바매트 핸드드립 커피존
    {
      addGubonLamp(oShelfDecor, -26.5, y3, 21.0);
      CY(oShelfDecor, 3.5, 3.5, 0.4, mCeramic, -11.8, y3, 23.5, 22);
      CY(oShelfDecor, 2.5, 1.8, 4.0, mCeramic, -11.8, y3 + 0.4, 23.5, 20);

      // 슬림 매트블랙 & 브러시드 크롬 엣지 카페 바매트 (NEODA 우드트레이 제외)
      const bmX = 15.0, bmZ = 21.5;
      B(oShelfDecor, 41.0, 0.35, 21.0, mBlack, bmX, y3, bmZ, 0.12);
      B(oShelfDecor, 41.4, 0.25, 0.4, mChrome, bmX, y3 + 0.15, bmZ - 10.5);
      B(oShelfDecor, 41.4, 0.25, 0.4, mChrome, bmX, y3 + 0.15, bmZ + 10.5);
      B(oShelfDecor, 0.4, 0.25, 21.0, mChrome, bmX - 20.5, y3 + 0.15, bmZ);
      B(oShelfDecor, 0.4, 0.25, 21.0, mChrome, bmX + 20.5, y3 + 0.15, bmZ);

      const oCafeGear = new THREE.Group();
      oCafeGear.position.set(cm(bmX), cm(y3 + 0.35), cm(bmZ));
      oShelfDecor.add(oCafeGear);
      addCoffeeGear(oCafeGear, {
        kettleX: -13.0,
        v60X: -1.2,
        grinderX: 8.8,
        grinderZ: -3.0,
        canisterX: 15.2,
        canisterZ: -3.8,
        mug1X: 9.2,
        mug2X: 15.8,
        mugZ: 5.2
      });
    }

    // O 4단 (y4=47.3): 폴라보 2서랍 (BSM2266 · 상부 여백) + 우측 크롬 북엔드 + 하드커버 3권
    {
      const oPolabo2 = addPolabo2DrawerBox(oShelfDecor, -6.5, y4, 21.5);
      B(oPolabo2, 21, 1.1, 15, mFabricIvory, -15.5, 14.5, 0.8, 0.15);
      B(oPolabo2, 21.2, 1.18, 3.2, mTerracotta, -15.5, 14.48, 0.8, 0.08);
      const miniJarPts = [
        [0, 0], [2.4, 0], [3.8, 2.5], [3.6, 5.4], [1.9, 7.6], [2.2, 8.4]
      ].map(([r, h]) => new THREE.Vector2(cm(r), cm(h)));
      const miniJar = new THREE.Mesh(new THREE.LatheGeometry(miniJarPts, 24), mCeramic);
      miniJar.position.set(cm(15.5), cm(14.5), cm(-0.8));
      miniJar.castShadow = true;
      oPolabo2.add(miniJar);

      // 크롬 L-북엔드 + 세로 아트북 3권
      B(oShelfDecor, 0.35, 14.0, 12.0, mChrome, 29.2, y4, 21.0);
      B(oShelfDecor, 5.0, 0.3, 12.0, mChrome, 31.7, y4, 21.0);
      const rCols = [mRetroGreen, mFabricIvory, mBurgundy];
      const rHeights = [27.0, 24.5, 25.8];
      for (let i = 0; i < 3; i++) {
        const bx = 30.8 + i * 2.8;
        B(oShelfDecor, 2.4, rHeights[i], 20.5, rCols[i], bx, y4, 21.0, 0.12);
        B(oShelfDecor, 1.9, rHeights[i] - 1.0, 19.6, mWhite, bx, y4 + 0.4, 21.2);
      }
    }

    // O 5단 (y5=11.8 · 벤탄 라탄장 완전 제거!): 전면 건축북 이젤 + 낮은 가로 북스택(상부 27.4cm 여백) + 오픈 크롬 와이어 바스켓 & 패브릭
    {
      addWireEaselBook(oShelfDecor, -24.5, y5, 21.5, 22.0, 27.5, 1.6, nordicBookTex, 0.1, -0.18);

      // 중앙 낮은 3권 가로 커피테이블 북 (총 높이 6.3cm → 상부 27.4cm 오픈 여백)
      const mSageBook = M('#7a8c7b', { roughness: 0.72 });
      const mLinenBook = M('#ede7da', { roughness: 0.82 });
      const mCharcoalBook = M('#2c2e30', { roughness: 0.65 });
      B(oShelfDecor, 26.0, 2.2, 19.5, mCharcoalBook, 1.8, y5, 21.0, 0.15);
      B(oShelfDecor, 24.0, 2.1, 18.2, mLinenBook, 1.8, y5 + 2.2, 21.0, 0.15);
      B(oShelfDecor, 21.5, 2.0, 17.0, mSageBook, 1.8, y5 + 4.3, 21.0, 0.15);

      // 우측 미니멀 오픈 크롬 와이어 바스켓 + 접힌 리넨 스로우
      const bkt = new THREE.Group();
      bkt.name = 'Minimal Open Chrome Wire Basket';
      bkt.position.set(cm(26.8), cm(y5), cm(21.5));
      oShelfDecor.add(bkt);
      const hw = 10.8, hd = 10.2, bh = 13.5;
      for (const [cx, cz] of [[-hw, -hd], [hw, -hd], [-hw, hd], [hw, hd]]) {
        dRod(bkt, [cx, 0.2, cz], [cx, bh, cz], 0.22, mChrome);
      }
      for (const ry of [0.3, bh]) {
        dRod(bkt, [-hw, ry, -hd], [hw, ry, -hd], 0.22, mChrome);
        dRod(bkt, [-hw, ry, hd], [hw, ry, hd], 0.22, mChrome);
        dRod(bkt, [-hw, ry, -hd], [-hw, ry, hd], 0.22, mChrome);
        dRod(bkt, [hw, ry, -hd], [hw, ry, hd], 0.22, mChrome);
      }
      for (const rx of [-5.4, 0, 5.4]) {
        dRod(bkt, [rx, 0.3, hd], [rx, bh, hd], 0.16, mChrome);
        dRod(bkt, [rx, 0.3, -hd], [rx, bh, -hd], 0.16, mChrome);
      }
      B(bkt, 19.6, 5.2, 18.2, mFabricIvory, 0, 0.5, 0, 0.9);
      B(bkt, 18.2, 4.4, 17.0, M('#ddd3c2', { roughness: 0.9 }), 0, 5.7, 0, 0.9);
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

    // 상판(y = 80.0cm 허리 높이!) 오픈 오디오 스테이지
    addTurntableAudioTop(cabFilmon, 80.0, 38.0, 80.0);
    const oFilmonAcc = addMoonJarWithFreesia(cabFilmon, 30.5, 102.2, 20.8);
    oFilmonAcc.visible = false;
    oTopAccGroups.push(oFilmonAcc);
  }

  // [후보 2 · 스틸+오크 세트 ('chakoc3')]: 마켓비 CHAKOC 선반 850 넓은 3단 · 내추럴
  // 공식 실측: 가로 85 × 깊이 41 × 높이 84.5cm · 오늘의집 75,900원 무료배송 (goods/614942)
  const cabChakoc3 = placeIn(grpN, 454, 547, Math.PI / 2);
  cabChakoc3.name = 'N West Turntable Cabinet 2: MarketB CHAKOC 850 3-Tier Natural';
  cabChakoc3.visible = false;
  cabChakoc3.userData = {
    mode: 'chakoc3',
    dimensions: [85, 41, 84.5],
    bounds: [454, 495, 504.5, 589.5],
    productNo: 29042,
    price: 75900,
    shipping: 0
  };
  const nLp3Decor = new THREE.Group();
  nLp3Decor.name = 'N 3-Tier LP Decor';
  cabChakoc3.add(nLp3Decor);

  const oLp3Decor = new THREE.Group();
  oLp3Decor.name = 'O 3-Tier Editorial LP Decor';
  oLp3Decor.visible = false;
  cabChakoc3.add(oLp3Decor);

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

    // N안 3단 LP 데코 (기존 보존)
    addVinylRow(nLp3Decor, -39.2, -5.8, 46.5, 21.0, 42);
    B(nLp3Decor, 0.35, 18, 15, mChrome, -5.4, 46.5, 21.0);
    addFaceOutLp(nLp3Decor, 18.0, 46.5, 22.0, pinkLpTex1, [1.5, 34.5]);
    addFaceOutLp(nLp3Decor, -21.5, 8.5, 22.0, pinkLpTex2, [-38.0, -5.0]);
    addVinylRow(nLp3Decor, -1.5, 39.2, 8.5, 21.0, 88);

    // O안 3단 LP 데코: 상판 달항아리+프리지아 · NOW PLAYING 스탠드 + 중단/하단 여백 & 그래픽 바이닐 커버 2종
    addMoonJarWithFreesia(oLp3Decor, 30.5, 106.7, 22.3);
    const npStand = new THREE.Group();
    npStand.position.set(cm(-30.5), cm(84.5), cm(35.8));
    oLp3Decor.add(npStand);
    B(npStand, 10.6, 1.6, 3.6, mWalnut, 0, 0, 0, 0.15);
    dRod(npStand, [-3.4, 1.6, -1.2], [-3.4, 8.5, -2.2], 0.18, mChrome);
    dRod(npStand, [3.4, 1.6, -1.2], [3.4, 8.5, -2.2], 0.18, mChrome);
    dRod(npStand, [-3.4, 8.5, -2.2], [3.4, 8.5, -2.2], 0.18, mChrome);
    const npCard = new THREE.Group();
    npCard.position.set(0, cm(1.3), cm(-0.2));
    npCard.rotation.x = -0.18;
    npStand.add(npCard);
    B(npCard, 10.2, 10.2, 0.4, mWhite, 0, 0, 0, 0.08);
    const npPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(cm(10.0), cm(10.0)),
      new THREE.MeshStandardMaterial({ map: nowPlayingMiniTex, roughness: 0.34 })
    );
    npPlane.position.set(0, cm(5.1), cm(0.24));
    npCard.add(npPlane);

    // 중단 (y=46.5, 유효높이 36cm): 좌측 LP 24장 + 크롬 와이어 디바이더 + 중앙 12.5cm 오픈 여백 + 우측 블루 재즈 전면 커버
    addVinylRow(oLp3Decor, -38.5, -11.5, 46.5, 21.0, 42);
    dRod(oLp3Decor, [-10.8, 46.5, 13.0], [-10.8, 68.5, 13.0], 0.22, mChrome);
    dRod(oLp3Decor, [-10.8, 46.5, 29.0], [-10.8, 68.5, 29.0], 0.22, mChrome);
    dRod(oLp3Decor, [-10.8, 68.5, 13.0], [-10.8, 68.5, 29.0], 0.22, mChrome);
    addFaceOutLp(oLp3Decor, 19.5, 46.5, 22.0, oLpJazzTex, [3.0, 36.0]);

    // 하단 (y=8.5, 유효높이 36cm): 좌측 솔라리스 전면 커버 + 중앙 낮은 북스택&인센스(상부 30cm 여백) + 우측 LP 18장
    addFaceOutLp(oLp3Decor, -22.0, 8.5, 22.0, oLpSolarisTex, [-38.5, -5.5]);
    B(oLp3Decor, 18.0, 1.8, 14.0, mFabricIvory, 4.5, 8.5, 21.5, 0.15);
    B(oLp3Decor, 16.0, 1.6, 13.0, M('#6c7c66', { roughness: 0.72 }), 4.5, 10.3, 21.5, 0.15);
    CY(oLp3Decor, 2.8, 2.4, 0.7, mBlack, 4.5, 11.9, 22.2, 20);
    dRod(oLp3Decor, [4.5, 12.4, 22.2], [7.2, 16.4, 21.0], 0.1, M('#a87954', { roughness: 0.8 }));
    dRod(oLp3Decor, [17.8, 8.5, 13.0], [17.8, 30.5, 13.0], 0.22, mChrome);
    dRod(oLp3Decor, [17.8, 8.5, 29.0], [17.8, 30.5, 29.0], 0.22, mChrome);
    dRod(oLp3Decor, [17.8, 30.5, 13.0], [17.8, 30.5, 29.0], 0.22, mChrome);
    addVinylRow(oLp3Decor, 18.5, 38.5, 8.5, 21.0, 88);
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

    // 상판(y=64.0cm) 오픈 오디오 스테이지
    addTurntableAudioTop(cabSimplie, 64.0, 40.0, 77.0);
    const oSimplieAcc = addMoonJarWithFreesia(cabSimplie, 30.3, 86.2, 21.8);
    oSimplieAcc.visible = false;
    oTopAccGroups.push(oSimplieAcc);
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

  // N안(서쪽 LP장 + 동쪽 5단) vs O안(맞교환 3종 + 서쪽선반 냉장고옆 당김 oPull + 동쪽 인터폰벽 3단·5단 일체형 세트 'eastset') 전환
  function applyNOLayout(variant, oMode = 'chakoc3', oPull = true) {
    const isO = variant === 'O';
    nShelfDecor.visible = !isO;
    oShelfDecor.visible = isO;
    oSidePostDecor.visible = isO && (oMode !== 'eastset');
    nLp3Decor.visible = !isO;
    oLp3Decor.visible = isO;
    for (const acc of oTopAccGroups) acc.visible = isO;
    for (const item of nOnlyCurationItems) item.visible = !isO;
    if (cafeEquipGroup) cafeEquipGroup.position.y = isO ? 0 : cm(1.4);
    for (const pair of turntablePairs) {
      pair.teac.visible = !isO;
      pair.sony.visible = isO;
    }
    if (isO) {
      if (oMode === 'eastset') {
        // O안 옵션 ④ ('eastset'): 동쪽 벽에 3단(인터폰쪽 z=668, H84.5cm < 조작판 104·월패드 133.5cm) + 5단(책상쪽 z=754, 스틱청소기 앞 5.4cm 여유) 나란히 세트 배치!
        cabFilmon.visible = false;
        cabSimplie.visible = false;
        cabChakoc3.visible = true;
        cabChakoc3.position.set(cm(789.5), 0, cm(668));
        cabChakoc3.rotation.y = -Math.PI / 2;
        eastChakoc5.position.set(cm(789.5), 0, cm(754));
        eastChakoc5.rotation.y = -Math.PI / 2;
      } else {
        // O안 맞교환 ①~③: oPull=true(기본)일 때 서쪽 CHAKOC 5단을 냉장고장(z=430.3) 옆 9.2cm 여유 지점(z=482, 범위 439.5~524.5)으로 당기고 동쪽 LP장(기본: CHAKOC 3단)을 z=706에 정렬
        const m = ['filmon', 'chakoc3', 'simplie'].includes(oMode) ? oMode : 'chakoc3';
        const zShelf = oPull ? 482 : 548;
        const zCab = oPull ? 706 : 714;
        cabFilmon.visible = m === 'filmon';
        cabChakoc3.visible = m === 'chakoc3';
        cabSimplie.visible = m === 'simplie';
        eastChakoc5.position.set(cm(454), 0, cm(zShelf));
        eastChakoc5.rotation.y = Math.PI / 2;
        cabFilmon.position.set(cm(789.5), 0, cm(zCab));
        cabFilmon.rotation.y = -Math.PI / 2;
        cabChakoc3.position.set(cm(789.5), 0, cm(zCab));
        cabChakoc3.rotation.y = -Math.PI / 2;
        cabSimplie.position.set(cm(789.5), 0, cm(zCab));
        cabSimplie.rotation.y = -Math.PI / 2;
      }
    } else {
      // N안 원래 좌표 100% 복원
      cabFilmon.visible = cabMode === 'filmon';
      cabChakoc3.visible = cabMode === 'chakoc3';
      cabSimplie.visible = cabMode === 'simplie';
      eastChakoc5.position.set(cm(789.5), 0, cm(716));
      eastChakoc5.rotation.y = -Math.PI / 2;
      cabFilmon.position.set(cm(454), 0, cm(548));
      cabFilmon.rotation.y = Math.PI / 2;
      cabChakoc3.position.set(cm(454), 0, cm(547));
      cabChakoc3.rotation.y = Math.PI / 2;
      cabSimplie.position.set(cm(454), 0, cm(548));
      cabSimplie.rotation.y = Math.PI / 2;
    }
  }

  return {
    group: grpN,
    eastChakoc5,
    cabFilmon,
    cabChakoc3,
    cabSimplie,
    nShelfDecor,
    oShelfDecor,
    oSidePostDecor,
    nLp3Decor,
    oLp3Decor,
    nOnlyCurationItems,
    turntablePairs,
    setNCabinetMode,
    applyNOLayout,
    get cabMode() { return cabMode; }
  };
}
