window.addEventListener('load', function () {
  const bait = document.createElement('div');
  bait.className = 'adsbox';        // 흔히 차단되는 클래스 이름
  bait.style.height = '1px';
  bait.style.width = '1px';
  bait.style.position = 'absolute';
  bait.style.left = '-9999px';      // 화면 밖으로 숨김
  document.body.appendChild(bait);

  setTimeout(() => {
    if (bait.offsetHeight === 0) {
      // 광고 차단기 켜져 있음
      const warning = document.getElementById('adblock-warning');
      const content = document.getElementById('main-content');
      warning.style.display = 'block';
      content.style.opacity = '0.3';  // 콘텐츠 흐리게 처리
      console.log("🚫 광고 차단기 감지됨!");
    } else {
      console.log("✅ 광고 차단기 꺼져 있음 (정상)");
    }
  }, 300);
});
