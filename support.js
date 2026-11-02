(()=>{'use strict';const $=id=>document.getElementById(id);const support=$('support-card');support.innerHTML="<summary><span><strong>사용 가이드 및 지원</strong><small>사용법 · 예제 코드 · 문제 해결</small></span><span class=\"support-chevron\" aria-hidden=\"true\">⌄</span></summary><div class=\"support-content\"><p>한 손의 움직임으로 로봇팔을 조종해보세요.</p><div class=\"support-actions\"><button type=\"button\" data-tour=\"all\" class=\"support-primary\">사용법 둘러보기 →</button></div><details class=\"support-section\" id=\"help-examples\"><summary>마이크로비트 예제 코드</summary><div class=\"support-answer\"><div class=\"device-prepare\"><span class=\"device-tag\">공통 준비</span><p><a href=\"https://makecode.microbit.org/#pub:69459-03613-85562-69852\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>블루투스 이름 확인 코드 ↗</strong></a></p><p>LED에 표시되는 장치 이름(알파벳 소문자 5자리)을 확인한 뒤 아래 예제를 다운로드하세요.</p></div><article class=\"device-example-card\"><div class=\"device-example-heading\"><h4>AI 포니봇 로봇팔</h4><span class=\"device-tag\">로봇팔 사용</span></div><p>한 손의 움직임으로 로봇팔의 관절과 집게를 조종해보세요.</p><div class=\"device-example-links\"><a id=\"project-example-link\" href=\"https://makecode.microbit.org/#pub:83132-30926-34454-22521\" target=\"_blank\" rel=\"noopener noreferrer\">핸즈 텔레오퍼레이션 로봇팔 예제 ↗</a></div><p>Servo1 → Base · Servo2 → Shoulder<br>Servo3 → Elbow · Servo4 → Gripper</p><p>aiPonybot 확장과 호환되는 보드를 사용하세요. 다른 보드는 해당 보드용 서보 제어 블록으로 변경하세요.</p><p>전원을 켜면 세 관절은 90°, 집게는 닫힘으로 움직입니다. OLED의 장치 이름을 확인해 연결하세요.</p></article></div></details><div class=\"arm-help-links\"><button type=\"button\" data-arm-help=\"motion\" aria-haspopup=\"dialog\"><span><strong>손동작 · 관절 설정</strong><small>손의 움직임과 관절의 관계</small></span><span aria-hidden=\"true\">↗</span></button><button type=\"button\" data-arm-help=\"packet\" aria-haspopup=\"dialog\"><span><strong>전송 데이터 · 손 인식 해제</strong><small>데이터 읽는 법과 손을 치웠을 때의 동작</small></span><span aria-hidden=\"true\">↗</span></button></div><details class=\"support-section\" id=\"help-troubleshooting\"><summary>문제 해결</summary><div class=\"support-answer support-faq\"><details id=\"help-connection\"><summary>블루투스 연결이 안 돼요</summary><p>전원·UART 예제·OLED의 장치 이름을 확인하고 다른 앱의 연결을 해제하세요. PC는 Chrome·Edge, 안드로이드는 Chrome, 아이폰·아이패드는 Bluefy를 사용하세요.</p></details><details><summary>카메라나 모델이 준비되지 않아요</summary><p>인터넷 연결과 카메라 권한을 확인하세요. 카메라를 사용하는 다른 앱을 종료하고 새로고침하세요. 모델 로딩이 끝나야 기기 찾기가 활성화됩니다.</p></details><details><summary>손동작과 로봇팔 방향이 반대예요</summary><p>해당 관절의 반전 체크 상태와 서보 연결을 확인하세요. 집게 방향은 예제 코드의 Servo4 닫힘·열림 각도로 조정합니다.</p></details><details><summary>거리 제어가 일정하지 않아요</summary><p>손바닥 방향을 일정하게 유지하고 손 전체가 보이도록 앞뒤로 움직이세요. 손의 기울기와 모양에 따라 계산값이 달라집니다.</p></details><details><summary>가이드를 열면 조종이 멈추나요?</summary><p>안내 중에도 인식과 연결된 기기로의 전송은 계속됩니다. 기기를 연결하기 전에 사용법을 둘러보세요.</p></details></div></details><details class=\"support-section\" id=\"help-updates\"><summary>업데이트 노트</summary><div class=\"support-answer\"><p class=\"support-release\">2026.11.02 · 예제 카드와 설명 팝업 개선</p><ul><li>공통 준비·로봇팔 예제 카드 디자인 통일 및 코드 링크 갱신</li><li>손동작·관절 설정과 전송 데이터 안내를 넓은 팝업으로 구성</li><li>관절별 연결 도식과 데이터 항목 선택 기능 추가</li></ul><ul><li>로봇팔 사용법을 화면에서 단계별로 안내</li><li>로봇팔 예제 코드·관절 설정·전송 데이터 안내 추가</li><li>손 인식 해제 동작과 연결 문제 해결 안내 추가</li></ul></div></details><p><a href=\"https://boundaryx.io/ai/?bmode=view&idx=174049510&t=board\"  target=\"_blank\" rel=\"noopener noreferrer\">소개 · 프로젝트 아이디어 ↗</a></p><p><a href=\"mailto:hi@boundaryx.io\"  target=\"_blank\" rel=\"noopener noreferrer\">문의 · 개선 의견 ↗</a></p></div>";const allSteps=[["#project-example-link","로봇팔 예제를 준비하세요","예제를 다운로드하고 서보 연결을 확인하세요. 전원을 켜면 세 관절은 90°, 집게는 닫힘으로 움직입니다. OLED의 장치 이름을 확인하세요."],["#model-status","모델과 카메라를 준비하세요","AI 모델 준비 완료를 기다리고 카메라 권한을 허용하세요. 손 전체가 보이도록 한 손을 카메라 앞에 둡니다."],["#connection-panel","마이크로비트를 연결하세요","기기 찾기를 눌러 OLED에서 확인한 이름을 선택하세요. 연결되면 별도의 시작 버튼 없이 제어값이 전송됩니다."],[".canvas-wrapper","한 손으로 네 관절을 조종합니다","손목의 좌우는 Base, 앞뒤 거리는 Shoulder, 높이는 Elbow입니다. 엄지·검지를 모으면 집게가 닫히고 벌리면 열립니다."],["#angles-panel","계산된 관절 각도를 확인하세요","손을 천천히 움직이며 각도와 OPEN·CLOSE 상태를 확인하세요. 이 값은 로봇팔의 실제 각도를 측정한 값이 아닙니다."],[".mapping-panel","동작 방향과 범위를 맞추세요","반전 체크 상태로 방향을 바꿉니다. 기본적으로 거리만 체크 해제되어 있습니다. 손을 가까이 가져가면 Shoulder 각도가 커집니다."],["#packet-log","전송 패킷과 실제 동작을 확인하세요","B·S·E는 관절 각도, G000은 집게 닫기, G001은 열기입니다. 손을 치우면 세 관절은 90°를 향해 움직이고 집게는 닫힙니다. 연결 해제는 복귀 명령을 보내지 않습니다."]];const chapters=[{label:'기기 준비',start:0},{label:'손동작 · 설정',start:3},{label:'출력 확인',start:6}];

const armHelp=document.createElement('dialog');
armHelp.id='arm-help-dialog';
armHelp.setAttribute('aria-labelledby','arm-help-title');
armHelp.innerHTML='<div class="arm-help-header"><h2 id="arm-help-title"></h2><button type="button" id="arm-help-close" aria-label="설명 닫기">닫기 ×</button></div><div id="arm-help-body"></div><p class="arm-help-caption">안내 중에도 손 인식과 연결된 기기로의 전송은 계속됩니다.</p>';
document.body.appendChild(armHelp);
let armOpener;
const joints=[
 ['Base','좌우 위치','손목을 좌우로 움직이기','밑부분 회전','Servo1','0~180° · 반전 체크','↔'],
 ['Shoulder','앞뒤 거리','손을 카메라에 가까이·멀리 움직이기','어깨 관절','Servo2','20~160° · 반전 해제','↔'],
 ['Elbow','손의 높이','손목을 위아래로 움직이기','팔꿈치 관절','Servo3','20~160° · 반전 체크','↕'],
 ['Gripper','집게','엄지와 검지 끝을 모으거나 벌리기','집게 열기·닫기','Servo4','모으면 닫힘 · 벌리면 열림','⇆']
];
const packetInfo=[
 ['B090','Base · 밑부분','목표가 아닌 현재 계산된 각도 90°를 Servo1로 전달합니다.'],
 ['S120','Shoulder · 어깨','현재 계산된 각도 120°를 Servo2로 전달합니다.'],
 ['E060','Elbow · 팔꿈치','현재 계산된 각도 60°를 Servo3로 전달합니다.'],
 ['G001','Gripper · 집게','G000은 닫힘, G001은 열림입니다. 예제 코드에서 닫힘은 0°, 열림은 90°입니다.']
];
function renderJoint(i){
 const j=joints[i];
 armHelp.querySelectorAll('[data-joint]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.joint)===i)));
 $('joint-detail').innerHTML='<div class="arm-flow"><div><span class="arm-symbol" aria-hidden="true">'+j[6]+'</span><strong>'+j[2]+'</strong><small>손동작</small></div><span class="arm-flow-arrow" aria-hidden="true">→</span><div><span class="arm-port">'+j[4]+'</span><strong>'+j[0]+' · '+j[3]+'</strong><small>로봇팔</small></div></div><div class="arm-setting"><strong>기본 설정</strong><p>'+j[5]+'</p></div>';
}
function renderPacket(i){
 armHelp.querySelectorAll('[data-field]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.field)===i)));
 $('packet-detail').textContent=packetInfo[i][1]+' — '+packetInfo[i][2];
}
support.querySelectorAll('[data-arm-help]').forEach(button=>button.addEventListener('click',()=>{
 armOpener=button;
 const motion=button.dataset.armHelp==='motion';
 $('arm-help-title').textContent=motion?'손동작 · 관절 설정':'전송 데이터 · 손 인식 해제';
 $('arm-help-body').innerHTML=motion?
 '<p>관절을 선택해 어떤 손동작으로 조종하는지 확인하세요.</p><div class="arm-joint-buttons">'+joints.map((j,i)=>'<button type="button" data-joint="'+i+'" aria-pressed="'+(i===0)+'" aria-controls="joint-detail"><strong>'+j[0]+'</strong><small>'+j[1]+'</small></button>').join('')+'</div><div id="joint-detail" aria-live="polite"></div><div class="arm-setting"><h3>방향이 반대라면?</h3><p>왼쪽 패널에서 해당 관절의 <strong>반전</strong> 체크를 바꾸세요. 최소·최대 값은 손동작을 각도로 바꾸는 기준입니다.</p></div><details class="arm-detail"><summary>거리와 각도 설정에서 알아둘 점</summary><p>거리는 손 크기로 추정하며 실제 cm를 측정하지 않습니다. 손이 가까워져 크게 보이면 기본 설정에서 Shoulder 각도가 커집니다.</p><p>거리 입력에 따라 설정 범위를 벗어날 수 있습니다. 최종 출력은 0~180°로 제한되지만 설정값이 로봇팔의 기계적 한계를 보장하지는 않습니다.</p></details>':
 '<p>문자열의 각 항목을 눌러 의미를 확인하세요.</p><div class="arm-packet" aria-label="전송 데이터 예시">'+packetInfo.map((p,i)=>'<button type="button" data-field="'+i+'" aria-pressed="'+(i===0)+'" aria-controls="packet-detail">'+p[0]+'</button>').join('')+'<span>\\r\\n</span></div><p id="packet-detail" class="arm-setting" aria-live="polite"></p><p>각 항목은 문자 1개 + 숫자 3자리입니다. 마지막에 줄바꿈(CRLF)을 붙입니다.</p><div class="arm-setting"><h3>손이 인식되지 않으면</h3><div class="arm-reset-values"><span>Base <b>90°</b></span><span>Shoulder <b>90°</b></span><span>Elbow <b>90°</b></span><span>집게 <b>닫힘</b></span></div><p>세 관절은 90°를 향해 서서히 움직이고 집게는 닫힙니다. 블루투스 연결 해제 자체는 복귀 명령을 보내지 않습니다.</p></div><details class="arm-detail"><summary>언제 데이터가 전송되나요?</summary><p>연결 후 계산된 관절 각도가 직전 전송값보다 1.5° 이상 달라지거나 집게 상태가 바뀌면 전송합니다. 각도는 정수로 반올림해 보내므로 실제 전송값 차이는 2° 이상입니다.</p><p>연결 전에는 전송할 데이터를 표시합니다. 전송됨은 블루투스 쓰기 성공을 뜻하며 기기의 실제 동작이나 수신 처리를 확인한 것은 아닙니다.</p></details>';
 if(motion){renderJoint(0);armHelp.querySelectorAll('[data-joint]').forEach(el=>el.addEventListener('click',()=>renderJoint(Number(el.dataset.joint))));}
 else {renderPacket(0);armHelp.querySelectorAll('[data-field]').forEach(el=>el.addEventListener('click',()=>renderPacket(Number(el.dataset.field))));}
 armHelp.showModal();$('arm-help-close').focus();
}));
$('arm-help-close').addEventListener('click',()=>armHelp.close());
armHelp.addEventListener('click',e=>{if(e.target===armHelp){const r=armHelp.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)armHelp.close();}});
armHelp.addEventListener('close',()=>{if(armOpener)armOpener.focus({preventScroll:true});});

const dialog = document.createElement('dialog');
  dialog.id = 'guide-dialog';
  dialog.setAttribute('aria-labelledby', 'guide-title');
  dialog.setAttribute('aria-describedby', 'guide-description');
  dialog.innerHTML = `<div id="guide-spotlight" aria-hidden="true"></div><section id="guide-panel"><div class="guide-topline"><span id="guide-progress"></span><button id="guide-close" type="button" aria-label="화면 안내 종료">닫기 ×</button></div><nav class="guide-chapters" aria-label="안내 구간">${chapters.map((chapter, i) => `<button type="button" data-chapter="${i}" aria-pressed="false">${chapter.label}</button>`).join('')}</nav><div aria-live="polite" aria-atomic="true"><h2 id="guide-title"></h2><p id="guide-description"></p></div><p class="guide-caption">안내 중에도 연결된 기기로 전송이 계속됩니다.</p><button id="guide-skip-device" type="button" hidden>기기 연결 건너뛰기 →</button><div class="guide-navigation"><button id="guide-prev" type="button">이전</button><button id="guide-next" type="button">다음</button></div></section>`;
  document.body.appendChild(dialog);
  let steps = [], index = 0, target = null, opener = null, originalScroll = 0, pendingFrame = 0;

  let examplesWereOpen = false, sidebarScroll = 0;

  function openHelp(section) {
    support.open = true;
    if (section) {
      $('help-troubleshooting').open = true;
      $(section).open = true;
    }
    const heading = (section ? $(section) : support).querySelector('summary');
    heading.scrollIntoView({block: 'center', behavior: 'instant'});
    heading.focus({preventScroll: true});
  }
  document.querySelectorAll('[data-help]').forEach(button => button.addEventListener('click', () => openHelp(button.dataset.help || null)));

  function renderStep() {
    const [selector, title, description] = steps[index];
    if (selector === '#project-example-link') $('help-examples').open = true;
    target = document.querySelector(selector);
    const chapterIndex = index < chapters[1].start ? 0 : index < chapters[2].start ? 1 : 2;
    dialog.querySelectorAll('[data-chapter]').forEach((button, i) => button.setAttribute('aria-pressed', String(i === chapterIndex)));
    $('guide-skip-device').hidden = true;
    $('guide-progress').textContent = `${chapters[chapterIndex].label}${''} · ${index + 1} / ${steps.length}`;
    $('guide-title').textContent = title;
    $('guide-description').textContent = description;
    $('guide-prev').disabled = index === 0;
    $('guide-next').textContent = index === steps.length - 1 ? '안내 마치기' : '다음';
    if (target) target.scrollIntoView({block: 'center', behavior: 'instant'});
    positionGuide(true);
  }

  function positionGuide(reveal = false) {
    if (!dialog.open) return;
    const panel = $('guide-panel'), spot = $('guide-spotlight');
    const width = window.innerWidth, height = window.innerHeight, gap = 16;
    panel.style.width = Math.min(360, width - 24) + 'px';
    const ph = panel.getBoundingClientRect().height, pw = panel.getBoundingClientRect().width;
    const headerBottom = document.querySelector('header').getBoundingClientRect().bottom;
    let r = target ? target.getBoundingClientRect() : null;
    // Narrow screens reserve the lower area for the explanation. A temporary bottom
    // spacer allows the last control to scroll above it without altering saved data.
    const narrow = width < 700;
    if (reveal && r && narrow) {
      const top = Math.max(12, headerBottom + 16);
      window.scrollBy({top: r.top - top, behavior: 'instant'});
      r = target.getBoundingClientRect();
    }
    let x = width - pw - 12, y = height - ph - 12;
    if (r && !narrow) {
      const candidates = [
        [r.left - pw - gap, Math.max(12, Math.min(r.top, height - ph - 12))],
        [r.right + gap, Math.max(12, Math.min(r.top, height - ph - 12))],
        [Math.max(12, Math.min(r.left, width - pw - 12)), r.bottom + gap],
        [Math.max(12, Math.min(r.left, width - pw - 12)), r.top - ph - gap]
      ];
      const fit = candidates.find(([cx, cy]) => cx >= 12 && cy >= 12 && cx + pw <= width - 12 && cy + ph <= height - 12);
      if (fit) [x,y] = fit;
      // Keep the target's full width even when the explanation must overlay it.
    }
    panel.style.left = x + 'px'; panel.style.top = Math.max(12, y) + 'px';
    if (r) {
      const top = Math.max(4, r.top - 5), left = Math.max(4, r.left - 5);
      const bottom = Math.min(height - 4, narrow ? y - 12 : height - 4, r.bottom + 5);
      spot.hidden = bottom <= top || r.right <= 0 || r.left >= width;
      Object.assign(spot.style, {left: left + 'px', top: top + 'px', width: Math.max(0, Math.min(width - 4, r.right + 5) - left) + 'px', height: Math.max(0, bottom - top) + 'px'});
    } else spot.hidden = true;
  }
  function startTour(kind, button) {
    if (kind !== 'all') return;
    opener = button; originalScroll = window.scrollY; sidebarScroll = document.querySelector('.sidebar').scrollTop;
    steps = allSteps; index = 0;
    examplesWereOpen = $('help-examples').open;
    document.body.classList.add('guide-active');
    dialog.showModal();
    renderStep();
    $('guide-next').focus({preventScroll:true});
  }
  support.querySelectorAll('[data-tour]').forEach(button => button.addEventListener('click', () => startTour(button.dataset.tour, button)));
  $('guide-prev').addEventListener('click', () => { if (index > 0) { index--; renderStep(); } });
  $('guide-next').addEventListener('click', () => { if (index === steps.length - 1) dialog.close(); else { index++; renderStep(); } });
  dialog.querySelectorAll('[data-chapter]').forEach(button => button.addEventListener('click', () => { index = chapters[Number(button.dataset.chapter)].start; renderStep(); }));
  $('guide-skip-device').addEventListener('click', () => { index = chapters[2].start; renderStep(); $('guide-next').focus({preventScroll:true}); });
  $('guide-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('guide-active');
    $('help-examples').open = examplesWereOpen;
    window.scrollTo({top:originalScroll, behavior:'instant'}); document.querySelector('.sidebar').scrollTop = sidebarScroll;
    if (opener) opener.focus({preventScroll:true});
  });
  const reposition = () => {
    if (!dialog.open || pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => { pendingFrame = 0; positionGuide(); });
  };
  window.addEventListener('resize', () => { if (dialog.open) renderStep(); });
  window.addEventListener('scroll', reposition, {passive:true, capture:true});
  if (location.hash === '#support-card') requestAnimationFrame(() => openHelp());
})();


