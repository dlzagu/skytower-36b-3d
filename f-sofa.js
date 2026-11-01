// 1-person coffee & lounge chair + side table + JooyonTech V28UE monitor on arm for option F, 2026-11-01.
// Chair & side table are layout placeholders (product/price unconfirmed, excluded from 5,035,100 KRW total).
export function buildTwoSeatSofa({THREE,cm,B,CY,M,parent,wood}) {
  const root=new THREE.Group();parent.add(root);
  root.userData={
    role:'1-person lounge chair and coffee side table',
    dimensionsCm:[68,72,75],
    sideTableDimensionsCm:[36,36,52],
    seatHeightCm:41,
    productSelected:false,
    priced:false
  };
  const fabric=M('#d2c7b4',{roughness:.95}),cushion=M('#ded4c3',{roughness:.92});
  const darkWood=M('#9c7b50',{roughness:.55}),steel=M('#cfd2d4',{roughness:.25,metalness:.82});
  const ceramic=M('#f6f3ec',{roughness:.25}),coffeeMat=M('#3b2416',{roughness:.2});

  // 1-person lounge chair centered at local (0, 0, 0), facing +z (w=68, d=72, h=75)
  const chair=new THREE.Group();chair.name='F lounge chair 68x72x75';root.add(chair);
  // Open sculpted oak legs (front and slightly splayed rear legs)
  for(const x of [-28,28]){
    const fLeg=CY(chair,1.7,1.2,34,wood,x,0,22,16);fLeg.rotation.x=.06;
    const rLeg=CY(chair,1.8,1.2,33,wood,x,0,-24,16);rLeg.rotation.x=-.14;
    // Side stretcher bar
    const sideBar=B(chair,2.6,3.2,50,wood,x,22,-1,.4);sideBar.rotation.x=-.05;
    // Armrest support post & warm oak curved armrest
    const post=B(chair,2.8,22,3.4,wood,x,33,18,.4);post.rotation.x=-.08;
    const arm=B(chair,5.2,2.6,54,wood,x,53,-2,.8);arm.rotation.x=-.04;
  }
  // Cross rails under seat
  B(chair,54,3,3.2,wood,0,24,18,.4);
  B(chair,54,3,3.2,wood,0,21,-20,.4);

  // Seat base & plush angled seat cushion (seat height ~41cm)
  const seatBase=B(chair,56,6,54,fabric,0,26,2,2);seatBase.rotation.x=-.06;
  const seatCushion=B(chair,56,11,56,cushion,0,31,4,3.5);seatCushion.rotation.x=-.06;

  // Reclined backrest frame & tufted back cushion (top at ~75cm)
  const backGroup=new THREE.Group();backGroup.position.set(0,cm(36),cm(-18));backGroup.rotation.x=-.24;chair.add(backGroup);
  B(backGroup,54,36,7,fabric,0,0,-4,2.5);
  B(backGroup,52,35,10,cushion,0,2,2,3.5);
  // Subtle lumbar/accent pillow
  const pillow=B(backGroup,36,16,5.5,M('#c4b49b',{roughness:.95}),0,4,8,2.2);pillow.rotation.x=.08;

  // Compact round coffee side table at world (756, 758) — placed via parent-relative transform
  const table=new THREE.Group();table.name='F coffee side table 36x36x52';
  // Chair is at world (742, 696) with rotation.y = -70 deg. Convert world delta (14, 62) to chair local:
  const ang=parent.rotation.y||(-70*Math.PI/180),dx=14,dz=62;
  table.position.set(cm(dx*Math.cos(ang)-dz*Math.sin(ang)),0,cm(dx*Math.sin(ang)+dz*Math.cos(ang)));
  table.rotation.y=-ang;
  root.add(table);

  // Pedestal base + slim stainless column + round oak top (diameter 36cm, height 52cm)
  CY(table,13,13.5,1.4,steel,0,0,0,36);
  CY(table,1.3,1.3,48.6,steel,0,1.4,0,24);
  CY(table,18,18,2,wood,0,50,0,48);
  // Coffee saucer, mug & book on the side table
  CY(table,5.2,4.2,.7,ceramic,-4,52,3,28);
  CY(table,3.3,2.9,6.2,ceramic,-4,52.7,3,28);
  CY(table,2.9,2.9,.3,coffeeMat,-4,58.7,3,24);
  const handle=new THREE.Mesh(new THREE.TorusGeometry(cm(1.4),cm(.35),8,20,Math.PI),ceramic);
  handle.rotation.y=Math.PI/4;handle.position.set(cm(-1.2),cm(55.8),cm(4.2));table.add(handle);
  const book=B(table,13,1.6,18,M('#dfd8ca',{roughness:.85}),5,52,-3,.3);book.rotation.y=.35;

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

  // Monitor head at (13, 108.5, 23), swiveled -34 deg toward the East-wall lounge chair
  const head=new THREE.Group();head.name='V28UE panel 63.9x36.9x4.3';
  head.position.set(cm(13),cm(108.5),cm(23));
  head.rotation.y=-0.59; // ~ -34 deg toward living room / lounge chair
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
