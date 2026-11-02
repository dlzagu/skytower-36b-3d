// Two 1-person lounge chairs + shared round coffee table + JooyonTech V28UE monitor on arm for option F, 2026-11-02.
// Chairs & side table are layout placeholders (product/price unconfirmed, excluded from 5,035,100 KRW total).
export function buildTwoSeatSofa({THREE,cm,B,CY,M,parent,wood}) {
  const root=new THREE.Group();parent.add(root);
  root.userData={
    role:'Two 1-person lounge chairs and shared coffee side table',
    chairCount:2,
    chairDimensionsCm:[60,64,75],
    sideTableDimensionsCm:[35,35,52],
    seatHeightCm:41,
    productSelected:false,
    priced:false
  };
  const fabric=M('#d2c7b4',{roughness:.95}),cushion=M('#ded4c3',{roughness:.92});
  const pillowMat=M('#c4b49b',{roughness:.95});
  const steel=M('#cfd2d4',{roughness:.25,metalness:.82});
  const ceramic=M('#f6f3ec',{roughness:.25}),coffeeMat=M('#3b2416',{roughness:.2});

  function makeLoungeChair(name) {
    // Compact 1-person lounge chair centered at local (0, 0, 0), facing +z (w=60, d=64, h=75)
    const chair=new THREE.Group();chair.name=name;
    for(const x of [-25,25]){
      const fLeg=CY(chair,1.6,1.15,34,wood,x,0,19,16);fLeg.rotation.x=.06;
      const rLeg=CY(chair,1.7,1.15,33,wood,x,0,-21,16);rLeg.rotation.x=-.14;
      const sideBar=B(chair,2.4,3.0,44,wood,x,22,-1,.4);sideBar.rotation.x=-.05;
      const post=B(chair,2.6,22,3.2,wood,x,33,15,.4);post.rotation.x=-.08;
      const arm=B(chair,4.8,2.5,48,wood,x,53,-2,.8);arm.rotation.x=-.04;
    }
    B(chair,48,3,3.0,wood,0,24,15,.4);
    B(chair,48,3,3.0,wood,0,21,-17,.4);

    const seatBase=B(chair,50,6,48,fabric,0,26,2,2);seatBase.rotation.x=-.06;
    const seatCushion=B(chair,50,11,50,cushion,0,31,3.5,3.2);seatCushion.rotation.x=-.06;

    const backGroup=new THREE.Group();backGroup.position.set(0,cm(36),cm(-16));backGroup.rotation.x=-.24;chair.add(backGroup);
    B(backGroup,48,36,6.5,fabric,0,0,-3.5,2.2);
    B(backGroup,46,35,9.5,cushion,0,2,2,3.2);
    const pillow=B(backGroup,32,15,5,pillowMat,0,4,7.5,2.0);pillow.rotation.x=.08;
    return chair;
  }

  const ang=parent.rotation.y||(-65*Math.PI/180);
  const toLocal=(dx,dz)=>[
    cm(dx*Math.cos(ang)-dz*Math.sin(ang)),
    0,
    cm(dx*Math.sin(ang)+dz*Math.cos(ang))
  ];

  // Chair 1 (North): at parent origin world (746, 641), rotation -65 deg
  const chair1=makeLoungeChair('F lounge chair 1 (north) 60x64x75');
  root.add(chair1);

  // Chair 2 (South): at world (743, 750) -> delta (-3, 109) from (746, 641), world rotation -84 deg
  const chair2=makeLoungeChair('F lounge chair 2 (south) 60x64x75');
  chair2.position.set(...toLocal(-3,109));
  chair2.rotation.y=(-84*Math.PI/180)-ang;
  root.add(chair2);

  // Shared round coffee side table between the two chairs at world (761, 697) -> delta (15, 56)
  const table=new THREE.Group();table.name='F coffee side table 35x35x52';
  table.position.set(...toLocal(15,56));
  table.rotation.y=-ang;
  root.add(table);

  // Pedestal base + slim stainless column + round oak top (diameter 35cm, height 52cm)
  CY(table,12.5,13,1.4,steel,0,0,0,36);
  CY(table,1.3,1.3,48.6,steel,0,1.4,0,24);
  CY(table,17.5,17.5,2,wood,0,50,0,48);

  // Two coffee cups on saucers + small book for two people
  for(const [cx,cz,hRot] of [[-5.5,-5,Math.PI/5],[5,5.5,-Math.PI/3]]){
    CY(table,4.8,3.9,.65,ceramic,cx,52,cz,26);
    CY(table,3.1,2.7,5.8,ceramic,cx,52.65,cz,26);
    CY(table,2.7,2.7,.3,coffeeMat,cx,58.2,cz,22);
    const handle=new THREE.Mesh(new THREE.TorusGeometry(cm(1.3),cm(.32),8,18,Math.PI),ceramic);
    handle.rotation.y=hRot;
    handle.position.set(cm(cx+Math.cos(hRot)*2.6),cm(55.6),cm(cz+Math.sin(hRot)*2.6));
    table.add(handle);
  }
  const book=B(table,11,1.4,15,M('#dfd8ca',{roughness:.85}),-4,52,6,.3);book.rotation.y=.28;

  return root;
}

// JooyonTech V28UE (28" 4K UHD IPS, 63.9 x 36.9 x 4.3 cm without stand, VESA 100x100) on articulated monitor arm
export function buildV28UEMonitorArm({THREE,cm,B,CY,M,parent,screenMat}) {
  const grp=new THREE.Group();grp.name='F JooyonTech V28UE 28in 4K + Monitor Arm';
  grp.userData={
    productName:'주연테크 V28UE 28인치 4K UHD 모니터 + 모니터암',
    panelDimensionsCm:[63.9,4.3,36.9],
    vesaMm:[100,100],
    swiveledForLivingRoom:true,
    pricedInPlan:false
  };
  parent.add(grp);

  const armSilver=M('#d8dad9',{roughness:.28,metalness:.75});
  const armDark=M('#25272a',{roughness:.45,metalness:.35});
  const bezelBlack=M('#18191b',{roughness:.38,metalness:.2});
  const silverChin=M('#c8cdd2',{roughness:.25,metalness:.8});

  // Desk clamp at back of desk (local x=14, y=72, z=2.2)
  B(grp,7,2.4,6.5,armDark,14,71.2,2.2,.4);
  B(grp,5,6.5,1.4,armDark,14,66.2,-.4,.3);
  CY(grp,1.85,1.85,20,armSilver,14,72.4,2.2,24);
  CY(grp,2.2,2.2,2.4,armDark,14,87.5,2.2,24);

  // Lower arm: from (14, 89, 2.2) to (5, 90, 12.5)
  const lowerArm=new THREE.Group();lowerArm.position.set(cm(14),cm(89),cm(2.2));
  lowerArm.rotation.y=Math.atan2(-9,10.3);grp.add(lowerArm);
  B(lowerArm,3.2,3.2,14.5,armSilver,0,0,7,1);
  CY(lowerArm,1.9,1.9,4.2,armDark,0,-.5,13.8,20);

  // Upper gas-spring arm: from (5, 91.5, 12.5) to (13, 107, 22)
  const upperArm=new THREE.Group();upperArm.position.set(cm(5),cm(91.5),cm(12.5));
  upperArm.rotation.y=Math.atan2(8,9.5);upperArm.rotation.x=-Math.atan2(15.5,12.4);grp.add(upperArm);
  B(upperArm,3.0,3.6,19.8,armSilver,0,0,9.5,1);
  B(upperArm,1.4,1.2,12,armDark,0,1.9,9,.4);

  // Monitor head at (13, 108.5, 23), swiveled -34 deg toward the East-wall lounge chairs
  const head=new THREE.Group();head.name='V28UE panel 63.9x36.9x4.3';
  head.position.set(cm(13),cm(108.5),cm(23));
  head.rotation.y=-0.59; // ~ -34 deg toward living room / lounge chairs
  grp.add(head);

  // VESA 100x100mm bracket (10x10cm) + pivot knuckle
  CY(head,1.6,1.6,3.6,armDark,0,-1.8,-3.2,18);
  B(head,10,10,.8,armDark,0,-5,-1.6,.4);

  // V28UE rear casing (total thickness 4.3cm: main slim body 2.2cm + rear center housing 2.1cm)
  B(head,28,17,2.1,bezelBlack,0,-7.5,-.2,1.2);
  B(head,63.9,36.9,2.2,bezelBlack,0,-18.45,1.85,.6);
  // Metallic silver bottom bezel strip (front bottom chin)
  B(head,63.9,1.3,2.35,silverChin,0,-18.45,1.85,.2);
  // Active 28" 16:9 4K display surface (62.1 x 34.9 cm)
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(cm(62.1),cm(34.9)),screenMat);
  scr.position.set(0,cm(.4),cm(3.02));
  head.add(scr);

  return grp;
}
