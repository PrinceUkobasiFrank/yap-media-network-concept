let selectedName = '';

function selectName(name, btn) {
  document.querySelectorAll('.name-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('nameInput').value = '';
  selectedName = name;
  enableEnter();
}

function onTypeInput(val) {
  document.querySelectorAll('.name-btn').forEach(b => b.classList.remove('selected'));
  selectedName = val.trim();
  selectedName.length > 0 ? enableEnter() : disableEnter();
}

function enableEnter() {
  const btn = document.getElementById('enterBtn');
  btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
}

function disableEnter() {
  const btn = document.getElementById('enterBtn');
  btn.disabled = true; btn.style.opacity = '0.35'; btn.style.cursor = 'not-allowed';
}

function proceed() {
  if (!selectedName) return;
  document.getElementById('viewerTag').textContent = `Viewer · ${selectedName}`;
  showScreen('screen-loading');
  setTimeout(() => { showScreen('screen-welcome'); }, 2200);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
