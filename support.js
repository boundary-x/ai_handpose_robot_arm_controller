(()=>{'use strict';const $=id=>document.getElementById(id);const support=$('support-card');support.innerHTML="<summary><span><strong>사용 가이드 및 지원</strong><small>사용법 · 예제 코드 · 문제 해결</small></span><span class=\"support-chevron\" aria-hidden=\"true\">⌄</span></summary><div class=\"support-content\"><p>한 손의 움직임으로 로봇팔을 조종해보세요.</p><div class=\"support-actions\"><button type=\"button\" data-tour=\"all\" class=\"support-primary\">사용법 둘러보기 →</button></div><details class=\"support-section\" id=\"help-examples\"><summary>마이크로비트 예제 코드</summary><div class=\"support-answer\"><p><a href=\"https://makecode.microbit.org/S49771-77509-50114-72682\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>블루투스 이름 확인 코드 ↗</strong></a></p><p>연결할 마이크로비트의 장치 이름을 확인합니다. LED 매트릭스에 출력되는 이름(알파벳 소문자 5자리)을 확인한 뒤 아래 프로젝트 코드를 다운로드하세요.</p><p><a href=\"https://makecode.microbit.org/_ckiCTkDkc8K5\" id=\"project-example-link\" target=\"_blank\" rel=\"noopener noreferrer\">AI 포니봇 로봇팔 프로젝트 예제 코드 ↗</a></p><p>aiPonybot 확장과 호환되는 보드에서 Servo1은 Base, Servo2는 Shoulder, Servo3는 Elbow, Servo4는 Gripper에 연결합니다. 다른 보드는 서보 제어 블록을 해당 보드용으로 변경하세요.</p><p>MakeCode 프로젝트 설정에서 블루투스 페어링을 필요하지 않음으로 설정하고 다운로드하세요. 전원을 켜면 세 관절은 90°, 집게는 0°로 움직입니다. OLED에 표시되는 장치 이름을 확인한 뒤 기기를 연결하세요.</p></div></details><details class=\"support-section\" ><summary>손동작 · 관절 설정</summary><div class=\"support-answer\"><p>손목의 좌우 위치 → Base<br>손을 카메라에 가까이·멀리 → Shoulder<br>손목의 높이 → Elbow<br>엄지·검지 끝 모으기 → 집게 닫기<br>엄지·검지 끝 벌리기 → 집게 열기</p><p>기본값: Base 0~180°·반전 체크, Shoulder 20~160°·반전 해제, Elbow 20~160°·반전 체크입니다. 거리 제어는 손 크기를 이용하며 실제 cm 측정이 아닙니다.</p><p>거리 입력에 따라 설정 범위를 벗어날 수 있고 최종 출력은 0~180°로 제한됩니다. 설정 숫자는 로봇팔의 기계적 한계를 보장하지 않습니다.</p></div></details><details class=\"support-section\" ><summary>전송 데이터 · 손 인식 해제</summary><div class=\"support-answer\"><p><code>B090S120E060G001</code> 뒤에 줄바꿈(CRLF)을 붙여 전송합니다. B·S·E는 세 관절의 각도, G000은 집게 닫기, G001은 열기입니다. 예제의 집게 각도는 닫힘 0°·열림 90°입니다.</p><p>연결 후 계산된 각도나 집게 상태가 바뀌면 데이터를 전송합니다. 전송 패킷 표시는 기기의 수신 확인이 아니므로 실제 동작도 확인하세요.</p><p><strong>손이 인식되지 않으면</strong> 세 관절의 목표 각도가 90°로 바뀌고 집게는 닫힙니다. 연결 해제 자체는 복귀 명령을 보내지 않습니다.</p></div></details><details class=\"support-section\" id=\"help-troubleshooting\"><summary>문제 해결</summary><div class=\"support-answer\"><details id=\"help-connection\"><summary>블루투스 연결이 안 돼요</summary><p>전원·UART 예제·OLED의 장치 이름을 확인하고 다른 앱의 연결을 해제하세요. PC는 Chrome·Edge, 안드로이드는 Chrome, 아이폰·아이패드는 Bluefy를 사용하세요.</p></details><details><summary>카메라나 모델이 준비되지 않아요</summary><p>인터넷 연결과 카메라 권한을 확인하세요. 카메라를 사용하는 다른 앱을 종료하고 새로고침하세요. 모델 로딩이 끝나야 기기 찾기가 활성화됩니다.</p></details><details><summary>손동작과 로봇팔 방향이 반대예요</summary><p>해당 관절의 반전 체크 상태와 서보 연결을 확인하세요. 집게 방향은 예제 코드의 Servo4 닫힘·열림 각도로 조정합니다.</p></details><details><summary>거리 제어가 일정하지 않아요</summary><p>손바닥 방향을 일정하게 유지하고 손 전체가 보이도록 앞뒤로 움직이세요. 손의 기울기와 모양에 따라 계산값이 달라집니다.</p></details><details><summary>가이드를 열면 조종이 멈추나요?</summary><p>안내 중에도 인식과 연결된 기기로의 전송은 계속됩니다. 기기를 연결하기 전에 사용법을 둘러보세요.</p></details></div></details><details class=\"support-section\" id=\"help-updates\"><summary>업데이트 노트</summary><div class=\"support-answer\"><ul><li>로봇팔 사용법을 화면에서 단계별로 안내</li><li>로봇팔 예제 코드·관절 설정·전송 데이터 안내 추가</li><li>손 인식 해제 동작과 연결 문제 해결 안내 추가</li></ul></div></details><p><a href=\"https://boundaryx.io/ai/?bmode=view&idx=174049510&t=board\"  target=\"_blank\" rel=\"noopener noreferrer\">소개 · 프로젝트 아이디어 ↗</a></p><p><a href=\"mailto:hi@boundaryx.io\"  target=\"_blank\" rel=\"noopener noreferrer\">문의 · 개선 의견 ↗</a></p></div>";const allSteps=[["#project-example-link","로봇팔 예제를 준비하세요","예제를 다운로드하고 서보 연결을 확인하세요. 전원을 켜면 세 관절은 90°, 집게는 닫힘으로 움직입니다. OLED의 장치 이름을 확인하세요."],["#model-status","모델과 카메라를 준비하세요","AI 모델 준비 완료를 기다리고 카메라 권한을 허용하세요. 손 전체가 보이도록 한 손을 카메라 앞에 둡니다."],["#connection-panel","마이크로비트를 연결하세요","기기 찾기를 눌러 OLED에서 확인한 이름을 선택하세요. 연결되면 별도의 시작 버튼 없이 제어값이 전송됩니다."],[".canvas-wrapper","한 손으로 네 관절을 조종합니다","손목의 좌우는 Base, 앞뒤 거리는 Shoulder, 높이는 Elbow입니다. 엄지·검지를 모으면 집게가 닫히고 벌리면 열립니다."],["#angles-panel","계산된 관절 각도를 확인하세요","손을 천천히 움직이며 각도와 OPEN·CLOSE 상태를 확인하세요. 이 값은 로봇팔의 실제 각도를 측정한 값이 아닙니다."],[".mapping-panel","동작 방향과 범위를 맞추세요","반전 체크 상태로 방향을 바꿉니다. 기본적으로 거리만 체크 해제되어 있습니다. 손을 가까이 가져가면 Shoulder 각도가 커집니다."],["#packet-log","전송 패킷과 실제 동작을 확인하세요","B·S·E는 관절 각도, G000은 집게 닫기, G001은 열기입니다. 손을 치우면 세 관절은 90°를 향해 움직이고 집게는 닫힙니다. 연결 해제는 복귀 명령을 보내지 않습니다."]];const chapters=[{label:'기기 준비',start:0},{label:'손동작 · 설정',start:3},{label:'출력 확인',start:6}];
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
