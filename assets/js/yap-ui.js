function switchTab(screenName, btn) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screenName).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('screen-' + screenName).scrollTop = 0;
}

function playContent() {
  const player = document.getElementById('miniPlayer');
  if (player) player.style.display = 'block';
}

function togglePlay() {
  const player = document.getElementById('miniPlayer');
  const btn = document.getElementById('miniPlayBtn');
  if (player) player.style.display = 'block';
  if (!btn) return;
  const isPaused = btn.innerHTML.includes('M8 5v14l11-7z');
  btn.innerHTML = isPaused
    ? '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>';
}

function toggleTheme() {
  const body = document.body;
  const sw = document.getElementById('themeSwitch');
  const label = document.getElementById('themeLabel');
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  if (sw) sw.classList.toggle('light-mode', isLight);
  if (label) label.textContent = isLight ? 'Light Mode' : 'Dark Mode';
}

function seekMini(e) {
  const track = document.getElementById('miniProgressTrack');
  const fill = document.getElementById('miniProgressFill');
  const rect = track.getBoundingClientRect();
  const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
  fill.style.width = pct + '%';
}

// ===== RENDER FUNCTIONS =====
function renderResumeSessions() {
  const container = document.getElementById('resume-sessions');
  if (!container) return;
  container.innerHTML = resumeSessions.map(item => `
    <div class="card" onclick="playContent()">
      <div class="card-image">
        <img src="${item.img}" alt="${item.title}">
        <div class="card-progress"><div class="card-progress-bar" style="width:${item.progress}%"></div></div>
      </div>
      <div class="card-info"><div class="card-title">${item.title}</div><div class="card-subtitle">${item.subtitle}</div></div>
    </div>
  `).join('');
}

function renderMomentumPicks() {
  const container = document.getElementById('momentum-picks');
  if (!container) return;
  container.innerHTML = momentumPicks.map(item => `
    <div class="grid-card" onclick="playContent()">
      <div class="grid-card-image">
        <img src="${item.img}" alt="${item.title}">
        ${item.badge ? `<span class="card-badge ${item.badge}">${item.badgeText}</span>` : ''}
      </div>
      <div class="grid-card-info">
        <div class="grid-card-title">${item.title}</div>
        <div class="grid-card-meta">
          <span>${item.meta}</span>
          ${item.extra ? `<span class="dot"></span><span>${item.extra}</span>` : ''}
          ${item.ai ? '<span class="dot"></span><span class="ai-badge">AI</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderQuickHits() {
  const container = document.getElementById('quick-hits');
  if (!container) return;
  container.innerHTML = quickHits.map(item => `
    <div class="shorts-card" onclick="playContent()">
      <div class="shorts-card-image"><img src="${item.img}" alt="${item.title}"></div>
      <div class="shorts-card-overlay"></div>
      <div class="shorts-card-info">
        <div class="shorts-card-title">${item.title}</div>
        <div class="shorts-card-meta">${item.views}</div>
      </div>
    </div>
  `).join('');
}

function renderCuratedForYou() {
  const container = document.getElementById('curated-for-you');
  if (!container) return;
  container.innerHTML = curatedForYou.map(item => `
    <div class="picked-card" onclick="playContent()">
      <div class="picked-card-image">
        <img src="${item.img}" alt="${item.title}">
        <span class="picked-badge">AI Pick</span>
      </div>
      <div class="picked-card-info"><div class="picked-card-title">${item.title}</div><div class="picked-card-sub">${item.sub}</div></div>
    </div>
  `).join('');
}

function renderSchedule() {
  const container = document.getElementById('schedule-section');
  if (!container) return;
  container.innerHTML = scheduleItems.map(item => `
    <div class="schedule-item">
      <div class="schedule-time">
        <span class="schedule-time-day">${item.day}</span>
        <span class="schedule-time-hour">${item.hour}</span>
      </div>
      <div class="schedule-info">
        <div class="schedule-info-title">${item.title}</div>
        <div class="schedule-info-sub">${item.sub}</div>
        <div class="schedule-info-tags">
          ${item.tags.map(t => `<span class="schedule-tag ${t.cls}">${t.text}</span>`).join('')}
        </div>
      </div>
      <button class="schedule-remind">&#128276;</button>
    </div>
  `).join('');
}

function renderReplays() {
  const container = document.getElementById('replay-grid');
  if (!container) return;
  container.innerHTML = replays.map(item => `
    <div class="replay-card" onclick="playContent()">
      <div class="replay-card-image">
        <img src="${item.img}" alt="">
        <div class="replay-overlay"><div class="replay-play">&#9654;</div></div>
        <span class="replay-duration">${item.duration}</span>
      </div>
      <div class="replay-info"><div class="replay-title">${item.title}</div><div class="replay-meta">${item.meta}</div></div>
    </div>
  `).join('');
}

function renderSearchCategories() {
  const container = document.getElementById('search-categories');
  if (!container) return;
  container.innerHTML = searchCategories.map(item => `
    <div class="search-category">
      <div class="search-category-icon">${item.icon}</div>
      <div class="search-category-title">${item.title}</div>
      <div class="search-category-sub">${item.sub}</div>
    </div>
  `).join('');
}

function renderTrendingSearches() {
  const container = document.getElementById('trending-searches');
  if (!container) return;
  container.innerHTML = trendingSearches.map(item => `
    <div class="trending-item">
      <span class="trending-rank">${item.rank}</span>
      <div class="trending-info"><div class="trending-title">${item.title}</div><div class="trending-sub">${item.sub}</div></div>
      <span class="trending-icon">${item.icon}</span>
    </div>
  `).join('');
}

function renderLibraryList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `
    <div class="list-item" onclick="playContent()">
      <div class="list-thumb"><img src="${item.img}" alt=""><div class="list-play"><span>&#9654;</span></div></div>
      <div class="list-info"><div class="list-title">${item.title}</div><div class="list-meta">${item.meta}</div></div>
      <button class="list-action">&#8942;</button>
    </div>
  `).join('');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  renderResumeSessions();
  renderMomentumPicks();
  renderQuickHits();
  renderCuratedForYou();
  renderSchedule();
  renderReplays();
  renderSearchCategories();
  renderTrendingSearches();
  renderLibraryList('library-downloads', libraryDownloads);
  renderLibraryList('library-continue', libraryContinue);

  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', function() {
      this.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.library-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      this.parentElement.querySelectorAll('.library-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
