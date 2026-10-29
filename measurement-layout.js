// 2026-10-29: measured clear dimensions. Furniture is translated/rotated, never stretched.
export const MEASUREMENTS = {
  revision:'measured-clear-layout-20261029-r3', unit:'cm',
  bedroom:{width:338,eastWall:250,westWallFromWardrobeFront:282},
  living:{eastReferenceLength:370,westReferenceLength:384,widthReadFromSketch:340},
  niches:{fridge:{width:100,height:189,depth:null},microwave:{width:53,height:33,depth:null},washer:{width:60,height:83,depth:null}},
  ceilingReadFromSketch:228, counterLengthReadFromSketch:200,
  provisional:{bedroomUtilityStep:122.70633,kitchenReferenceOffset:206.5,wardrobeDepth:44,bedroomDoorWidth:78,
    note:'단차 122.7은 실측값이 아닙니다. 보일러실 뒤 외벽의 기존 도면 각도를 유지해 계산한 임시값입니다. 창 각도·문 위치·칸 깊이·붙박이장 깊이는 확인 전입니다.'}
};

const A = new Map([
  ['441,224',[441,224]],['953,224',[1040,224]],['1062,224',[1149,224]],
  ['441,323',[441,326.7]],['441,411',[441,439.5]],
  ['953,280',[1040,311.5]],['1062,280',[1149,311.5]],
  ['953,362',[1040,393.5]],['910,362',[997,393.5]],
  ['910,446',[997,477.5]],['747,446',[796,477.5]],
  ['910,490',[997,521.5]],['1062,490',[1149,521.5]],
  ['441,742',[441,827.8337]],['530,912',[606.380145,954.09358]],
  ['747,745',[796,816.26415]],['832,912',[965.707675,931.63726]],
  ['912,860',[1023.29367,898.33181]],['912,739',[1023.29367,783.5]],
  ['1062,739',[1149,783.5]],['1062,762',[1149,816.34942]],
]);
const oldRegions=[
  [[441,224],[953,224],[953,362],[910,362],[910,446],[747,446],[747,745],[530,912],[441,742],[441,411],[441,323]],
  [[747,446],[910,446],[910,490],[1062,490],[1062,739],[912,739],[912,860],[832,912],[747,745]],
  [[953,280],[1062,280],[1062,490],[910,490],[910,362],[953,362]],
  [[953,224],[1062,224],[1062,280],[953,280]],
  [[912,739],[1062,739],[1062,762],[912,860]],
];
const flatCorners={
  '530,912':[[599.29705,954.09358],[613.46324,954.09358]],
  '832,912':[[959.19005,931.63726],[972.22530,931.63726]],
};
const slants=[[[441,742],[530,912]],[[530,912],[747,745]],[[747,745],[832,912]],[[832,912],[1062,762]]];
const overrides=new Map([
  ['592,233',[618,233]],['441,366',[441,378.5]],['446,365',[455,378.5]],
  ['741,313',[780,319]],['752,313',[791,319]],['743,224',[782,224]],
  ['828,451',[896.5,483.5]],['853,495.2',[921.5,527.7]],
  ['788,502',[840,545.8692]],['912,403',[999,435.5]],
  ['854,228',[913,228]],
  ['552,459',[554,500]],['454,556.5',[454,600]],['454,633',[454,676.5]],['450.5,556.5',[450.5,600]],
  ['1052,648',[1136,695]],['1032,520',[1118,555]],
  ['753,632',[804,695]],['775,632',[826,695]],['778,632',[829,695]],
  ['881,800',[992.29367,835]],['818,775',[879,812]],['488,685',[488,747]],
  ['468,718',[476,780]],['854,439.5',[904,471]],
  ['895,830',[879,812]],
]);

export function createMeasuredLayout(THREE){
  const triangles=[];
  for(const region of oldRegions){
    const indices=THREE.ShapeUtils.triangulateShape(region.map(p=>new THREE.Vector2(...p)),[]);
    for(const ids of indices) triangles.push({old:ids.map(i=>region[i]),next:ids.map(i=>A.get(region[i].join(',')))});
  }
  function bary(p,a,b,c){const den=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1]);
    const u=((b[1]-c[1])*(p[0]-c[0])+(c[0]-b[0])*(p[1]-c[1]))/den;
    const v=((c[1]-a[1])*(p[0]-c[0])+(a[0]-c[0])*(p[1]-c[1]))/den;return[u,v,1-u-v];}
  function map(x,y){const exact=A.get(`${x},${y}`);if(exact)return [...exact];
    let best=null,score=Infinity;
    for(const t of triangles){const b=bary([x,y],...t.old),s=b.reduce((q,v)=>q+Math.max(0,-v),0);if(s<score){score=s;best={t,b};}if(s<1e-8)break;}
    if(!best)return[x,y];
    return [0,1].map(k=>best.b.reduce((v,b,i)=>v+b*best.t.next[i][k],0));
  }
  function position(x,y){const manual=overrides.get(`${x},${y}`);if(manual)return manual;const p=map(x,y);
    if(x===450||x===451||x===450.5)p[0]=x;
    if(x===741&&y>=446)p[0]=790;
    if(x===1053&&y>=490)p[0]=1140;
    if(x===906&&y>=739)p[0]=1017.29367;
    if(y===439.5)p[1]=471;
    if(x===970&&y===794){p[0]-=1.1;p[1]-=1.7;}
    if(x===651&&y===807){const[a,b]=line([530,912],[747,745]),dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy),t=((651-530)*217+(807-912)*-167)/(217*217+167*167);return[a[0]+dx*t+dy/len*9.1,a[1]+dy*t-dx/len*9.1];}
    return p;
  }
  const distance=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
  function floor(poly){return poly.flatMap((p,i)=>{const flat=flatCorners[p.join(',')];if(!flat)return[map(...p)];const prev=map(...poly[(i+poly.length-1)%poly.length]);return distance(prev,flat[0])<distance(prev,flat[1])?flat:[...flat].reverse();});}
  function line(a,b){if(a.join(',')==='746,224'&&b.join(',')==='746,340')return[[785,224],[785,347.3]];let aa=map(...a),bb=map(...b);const af=flatCorners[a.join(',')],bf=flatCorners[b.join(',')];
    if(af)aa=[...af].sort((p,q)=>distance(p,bb)-distance(q,bb))[0];if(bf)bb=[...bf].sort((p,q)=>distance(p,aa)-distance(q,aa))[0];return[aa,bb];}
  function dist(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p[0]-a[0]-dx*t,p[1]-a[1]-dy*t);}
  function normal(x,y,nx,ny){if(Math.abs(nx)<.001||Math.abs(ny)<.001)return[nx,ny];
    const s=[...slants].sort((a,b)=>dist([x,y],...a)-dist([x,y],...b))[0];const [a,b]=line(...s),len=Math.hypot(b[0]-a[0],b[1]-a[1]);let n=[-(b[1]-a[1])/len,(b[0]-a[0])/len];if(n[0]*nx+n[1]*ny<0)n=n.map(v=>-v);return n;}
  function wall(x1,y1,x2,y2,ops){const [a,b]=line([x1,y1],[x2,y2]),oldL=Math.hypot(x2-x1,y2-y1),newL=Math.hypot(b[0]-a[0],b[1]-a[1]);
    const openings=ops.map(o=>{const width=o.e-o.s;let center=(o.s+o.e)*.5/oldL*newL;center=Math.max(width/2+4,Math.min(newL-width/2-4,center));return{...o,s:center-width/2,e:center+width/2};});
    return {a,b,ops:openings};}
  function relocateLoose(root){
    function visit(o){if(o.__planPlaced||o.isCamera)return;
      if(Math.abs(o.position.x)>.01||Math.abs(o.position.z)>.01){const [x,y]=position(o.position.x*100,o.position.z*100);o.position.x=x/100;o.position.z=y/100;o.__planPlaced=true;return;}
      for(const c of o.children)visit(c);
    }for(const c of root.children)visit(c);
  }
  return {map,position,floor,line,normal,wall,relocateLoose,flatWalls:Object.values(flatCorners),anchors:A,measurements:MEASUREMENTS};
}
