// Generic two-seat sofa for option F, 2026-11-01. No product is selected; this is a size placeholder.
export function buildTwoSeatSofa({THREE,cm,B,CY,M,parent,wood}) {
  const sofa=new THREE.Group();parent.add(sofa);
  sofa.userData={dimensionsCm:[150,85,78],seatHeightCm:42,productSelected:false,priced:false};
  const fabric=M('#cbbfa9',{roughness:1}),cushion=M('#d5cab6',{roughness:1});
  for(const x of [-65,65])for(const z of [8,76])CY(sofa,1.8,1.2,14,wood,x,0,z,14);
  B(sofa,150,14,85,fabric,0,14,42.5,3);
  B(sofa,150,50,17,fabric,0,28,8.5,5);
  for(const x of [-68,68])B(sofa,14,32,85,fabric,x,28,42.5,5);
  for(const x of [-30.5,30.5]){
    B(sofa,60,14,66,cushion,x,28,50,5);
    const back=B(sofa,60,34,14,cushion,x,41,23,6);back.rotation.x=-.12;
  }
  return sofa;
}
