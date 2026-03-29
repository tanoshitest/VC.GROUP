const fs = require('fs');
let html = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html','utf8');

const css = `
  /* ===== SERVICE LIST SECTION ===== */
  .sv-list-section { background: #eef7ee; padding: 50px 20px 60px; }
  .sv-list-inner { max-width: 960px; margin: 0 auto; }
  .sv-main-title { text-align: center; font-size: 28px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px; }
  .sv-title-bar { width: 50px; height: 4px; background: #2ea84f; border-radius: 2px; margin: 0 auto 36px; }
  .sv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
  .sv-grid-2col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 40px; }
  .sv-btn-green {
    display: flex; align-items: center; gap: 12px;
    background: #2ea84f; border: none; border-radius: 50px;
    padding: 14px 18px; cursor: pointer; text-decoration: none;
    transition: background 0.2s, transform 0.15s;
  }
  .sv-btn-green:hover { background: #259042; transform: translateY(-1px); }
  .sv-btn-icon { width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
  .sv-btn-label { flex: 1; font-size: 14px; font-weight: 700; color: #fff; }
  .sv-btn-chevron {
    width: 24px; height: 24px; border-radius: 50%;
    background: rgba(255,255,255,0.25);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .sv-other-title {
    display: flex; align-items: center; gap: 10px;
    font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 20px;
  }
  .sv-other-title::before {
    content: ''; display: block; width: 5px; height: 26px;
    background: #2ea84f; border-radius: 3px; flex-shrink: 0;
  }
  .sv-btn-white {
    display: flex; align-items: center; gap: 10px;
    background: #fff; border: 2px solid #2ea84f; border-radius: 50px;
    padding: 14px 18px; cursor: pointer; text-decoration: none;
    transition: background 0.2s;
  }
  .sv-btn-white:hover { background: #f0faf2; }
  .sv-btn-white .sv-btn-label { color: #1a1a1a; font-size: 13px; }
  .sv-btn-white .sv-btn-chevron { background: rgba(46,168,79,0.1); }
  @media (max-width: 640px) {
    .sv-grid, .sv-grid-2col { grid-template-columns: 1fr 1fr !important; gap: 8px; }
    .sv-btn-green, .sv-btn-white { padding: 10px 10px; gap: 6px; }
    .sv-btn-label { font-size: 11px; }
    .sv-btn-icon { width: 24px; height: 24px; }
    .sv-main-title { font-size: 22px; }
  }
`;

const chevronGreen = `<svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#2ea84f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const chevronWhite = `<svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;

function greenBtn(icon, label) {
  return `<a href="#" class="sv-btn-green">
          <span class="sv-btn-icon">${icon}</span>
          <span class="sv-btn-label">${label}</span>
          <span class="sv-btn-chevron">${chevronWhite}</span>
        </a>`;
}
function whiteBtn(label) {
  return `<a href="#" class="sv-btn-white">
          <span class="sv-btn-label">${label}</span>
          <span class="sv-btn-chevron">${chevronGreen}</span>
        </a>`;
}

const iconFuyohin = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="4" y="8" width="24" height="18" rx="3"/><path d="M10 8V6a6 6 0 0 1 12 0v2"/><circle cx="16" cy="17" r="3"/></svg>`;
const iconSodai = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="3" y="13" width="26" height="13" rx="3"/><path d="M7 13V11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><rect x="9" y="18" width="4" height="4" rx="1"/><rect x="19" y="18" width="4" height="4" rx="1"/></svg>`;
const iconKagu = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="4" y="6" width="24" height="22" rx="2"/><line x1="10" y1="6" x2="10" y2="28"/><line x1="22" y1="6" x2="22" y2="28"/><line x1="4" y1="16" x2="28" y2="16"/></svg>`;
const iconKaden = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="4" y="8" width="24" height="18" rx="2"/><rect x="12" y="4" width="8" height="4" rx="1"/><circle cx="16" cy="20" r="4"/><circle cx="16" cy="20" r="1.5" fill="#fff"/></svg>`;
const iconHaihin = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="2" y="15" width="20" height="11" rx="2"/><path d="M22 19h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"/><path d="M2 21l4-8h12l4 8"/><circle cx="8" cy="27" r="2.5" fill="#2ea84f" stroke="#fff"/><circle cx="20" cy="27" r="2.5" fill="#2ea84f" stroke="#fff"/></svg>`;
const iconKaitori = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><path d="M10 28V10l6-6 6 6v18"/><rect x="13" y="20" width="6" height="8"/><line x1="7" y1="28" x2="25" y2="28"/></svg>`;
const iconHikkoshi = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><rect x="2" y="16" width="20" height="10" rx="2"/><path d="M22 20h4a2 2 0 0 1 2 2v4H22"/><path d="M2 22l3-8h14l3 8"/><circle cx="8" cy="27" r="2.5" fill="#2ea84f" stroke="#fff"/><circle cx="18" cy="27" r="2.5" fill="#2ea84f" stroke="#fff"/><rect x="9" y="10" width="8" height="6" rx="1"/></svg>`;
const iconGomi = `<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2" width="28" height="28"><path d="M6 28V10l10-7 10 7v18H6z"/><path d="M12 28v-8h8v8"/><line x1="16" y1="6" x2="16" y2="12"/><line x1="10" y1="16" x2="14" y2="16"/><line x1="18" y1="16" x2="22" y2="16"/></svg>`;

const section = `
  <!-- SERVICE LIST SECTION -->
  <div class="sv-list-section">
    <div class="sv-list-inner">

      <div class="sv-main-title">主なサービス</div>
      <div class="sv-title-bar"></div>

      <div class="sv-grid">
        ${greenBtn(iconFuyohin, '不用品回収')}
        ${greenBtn(iconSodai, '粗大ゴミ処分')}
        ${greenBtn(iconKagu, '家具回収')}
        ${greenBtn(iconKaden, '家電回収')}
        ${greenBtn(iconHaihin, '廃品回収')}
        ${greenBtn(iconKaitori, '不用品買取')}
      </div>
      <div class="sv-grid-2col">
        ${greenBtn(iconHikkoshi, '引越しサポート')}
        ${greenBtn(iconGomi, 'ゴミ屋敷片付け')}
        <div></div>
      </div>

      <div class="sv-other-title">その他のサービス</div>
      <div class="sv-grid">
        ${whiteBtn('遺品整理')}
        ${whiteBtn('リフォーム・ハウスクリーニング')}
        ${whiteBtn('不動産売却')}
      </div>
      <div class="sv-grid-2col" style="margin-top:14px;">
        ${whiteBtn('解体工事')}
        ${whiteBtn('法人のお客様向け')}
        <div></div>
      </div>

    </div>
  </div>
`;

html = html.replace('</style>', css + '\n</style>');
html = html.replace('<p style="text-align:center;color:#666;padding:60px 0;">コンテンツを作成中...</p>\n  </div>', section + '\n  </div>');

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html', html);
console.log('Done!');
