
import * as T from './vendor/three.module.js';
const params=new URLSearchParams(location.search),joint=Number(params.get('joint')||0),reverse=params.get('reverse')==='1';
const host=document.querySelector('#scene');
let renderer;
try{renderer=new T.WebGLRenderer({antialias:true,alpha:true});}catch(e){host.textContent='3D를 표시할 수 없습니다. WebGL을 지원하는 브라우저에서 확인해주세요.';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.append(renderer.domElement);
const scene=new T.Scene(),camera=new T.PerspectiveCamera(36,1,.1,100);
camera.position.set(0,2.3,10);camera.lookAt(0,1.1,0);
scene.add(new T.HemisphereLight(0xffffff,0x8391a4,2.5));
const light=new T.DirectionalLight(0xffffff,3);light.position.set(-3,6,5);scene.add(light);
const skin=new T.MeshStandardMaterial({color:0xe8bca4,roughness:.64});
const nail=new T.MeshStandardMaterial({color:0xf5dbcd,roughness:.4});
const metal=new T.MeshStandardMaterial({color:0xe0e6ec,metalness:.35,roughness:.32});
const dark=new T.MeshStandardMaterial({color:0x28384b,metalness:.3,roughness:.4});
const yellow=new T.MeshStandardMaterial({color:0xffc538,metalness:.15,roughness:.38});
function mesh(g,m,p,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);p.add(o);return o;}
function ball(p,r,m,x=0,y=0,z=0){return mesh(new T.SphereGeometry(r,20,14),m,p,x,y,z);}
function capsule(p,r,len,m,y){return mesh(new T.CapsuleGeometry(r,Math.max(.01,len-2*r),5,14),m,p,0,y);}
function group(p,x=0,y=0,z=0){let g=new T.Group();g.position.set(x,y,z);p.add(g);return g;}
const hand=group(scene,-2,1.1,0);hand.rotation.y=-.2;
const palm=ball(hand,1,skin);palm.scale.set(.48,.64,.17);
capsule(hand,.18,.65,skin,-.65);
const fingers=[];
function finger(x,y,length,spread){
 const root=group(hand,x,y,0);root.rotation.z=spread;
 const nodes=[];let parent=root;
 for(let k=0;k<3;k++){const len=length*[.45,.32,.23][k],r=.088-k*.012;
 const node=group(parent,0,k===0?0:nodes[k-1].len,0);
 ball(node,r,skin);capsule(node,r,len,skin,len/2);
 nodes.push({node,len});parent=node;
 if(k===2){const n=ball(node,.07,nail,0,len-.055,.067);n.scale.set(.72,1,.2);}
 }
 fingers.push(nodes);return root;
}
finger(-.29,.43,.86,.09);finger(-.08,.54,1.02,.015);finger(.14,.5,.94,-.06);finger(.33,.38,.71,-.17);
const thumb=group(hand,-.39,-.16,.03);thumb.rotation.z=.85;
const thumbNodes=[];
let p=thumb;
for(const len of [.35,.3]){const n=group(p,0,p===thumb?0:.35,0);ball(n,.11,skin);capsule(n,.105,len,skin,len/2);thumbNodes.push(n);p=n;}
const tn=ball(p,.08,nail,0,.23,.09);tn.scale.set(.9,1,.2);
const robot=group(scene,1.85,-.05,0);
mesh(new T.CylinderGeometry(.62,.7,.18,36),dark,robot,0,.09);
const yaw=group(robot,0,.23);mesh(new T.CylinderGeometry(.35,.42,.2,32),joint===0?yellow:metal,yaw);
const shoulder=group(yaw,0,.15);
function axle(parent,m){const o=mesh(new T.CylinderGeometry(.2,.2,.38,24),m,parent);o.rotation.x=Math.PI/2;}
axle(shoulder,joint===1?yellow:dark);
capsule(shoulder,.13,1.05,metal,.52);
const elbow=group(shoulder,0,1.05);axle(elbow,joint===2?yellow:dark);
capsule(elbow,.105,.9,metal,.45);
const wrist=group(elbow,0,.9);ball(wrist,.15,dark);
const jaws=[];
for(const sign of [-1,1]){const g=group(wrist,sign*.12,.1);capsule(g,.055,.34,joint===3?yellow:dark,.17);const tip=capsule(g,.055,.18,joint===3?yellow:dark,.37);tip.rotation.z=sign*.7;jaws.push(g);}
const floor=mesh(new T.PlaneGeometry(12,5),new T.MeshStandardMaterial({color:0xe5ebf1,roughness:1}),scene,0,-.15);floor.rotation.x=-Math.PI/2;
const labels=['손목을 좌우로 이동 → 밑부분 회전','카메라에 가까이·멀리 → 어깨 관절','손목을 위아래로 이동 → 팔꿈치 관절','엄지·검지를 모으고 벌리기 → 집게'];
document.querySelector('#action').textContent=labels[joint];
const progress=document.querySelector('#progress'),play=document.querySelector('#play');
let phase=0,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,frame=0,last=0,t=0;
function pose(v){
 const u=reverse?1-v:v;
 hand.position.set(-2,1.2,0);hand.scale.setScalar(1);hand.rotation.set(0,-.2,0);
 yaw.rotation.y=-.35;shoulder.rotation.z=.35;elbow.rotation.z=-1;
 fingers.forEach(ns=>ns.forEach(({node},i)=>node.rotation.x=.08+i*.04));
 thumb.rotation.set(.1,0,.85);thumbNodes.forEach(n=>n.rotation.x=.12);
 if(joint===0){hand.position.x=-2+(v-.5)*.8;yaw.rotation.y=(u-.5)*1.7;}
 if(joint===1){hand.position.z=(v-.5)*1.3;hand.rotation.y=-.6;shoulder.rotation.z=.8-u*1.1;}
 if(joint===2){hand.position.y=.85+v*.7;elbow.rotation.z=-.3-u*1.3;}
 if(joint===3){
 // Articulated pinch: thumb opposes the index, other fingers remain relaxed.
 hand.rotation.y=-.25;
 fingers[0][0].node.rotation.x=(1-v)*.85;
 fingers[0][1].node.rotation.x=(1-v)*.8;
 fingers[0][2].node.rotation.x=(1-v)*.3;
 thumb.rotation.z=.85-(1-v)*.65;
 thumb.rotation.y=-(1-v)*.9;
 thumbNodes[0].rotation.x=(1-v)*.65;thumbNodes[1].rotation.x=(1-v)*.65;
 for(let k=1;k<4;k++)fingers[k].forEach(({node},n)=>node.rotation.x=.2+n*.12);
 jaws.forEach((g,k)=>g.rotation.z=(k===0?1:-1)*(.08+v*.5));
 }else jaws.forEach((g,k)=>g.rotation.z=(k===0?1:-1)*.3);
 renderer.render(scene,camera);
}
function resize(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w<420?13:10;camera.updateProjectionMatrix();pose(t);}
new ResizeObserver(resize).observe(host);
function sync(){play.textContent=playing?'일시정지':'재생';play.setAttribute('aria-pressed',String(playing));}
function tick(now){frame=0;if(!playing)return;if(last)phase+=(now-last)*.0012;last=now;t=(1-Math.cos(phase))/2;progress.value=String(Math.round(t*100));pose(t);frame=requestAnimationFrame(tick);}
function run(){cancelAnimationFrame(frame);last=0;sync();if(playing)frame=requestAnimationFrame(tick);}
play.onclick=()=>{playing=!playing;run();};
progress.oninput=()=>{playing=false;run();t=Number(progress.value)/100;phase=Math.acos(1-2*t);pose(t);};
document.addEventListener('visibilitychange',()=>{if(document.hidden){playing=false;run();}});
addEventListener('pagehide',()=>{playing=false;cancelAnimationFrame(frame);scene.traverse(o=>{o.geometry?.dispose();});[skin,nail,metal,dark,yellow].forEach(m=>m.dispose());renderer.dispose();});
resize();run();

