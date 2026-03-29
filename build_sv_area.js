const fs = require('fs');
let html = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html','utf8');

const css = `
  /* ===== SERVICE AREA SECTION ===== */
  .area-section {
    background: linear-gradient(180deg, #e8f4fd 0%, #d4ecf7 60%, #c8e8f5 100%);
    padding: 50px 20px 0;
    position: relative;
    overflow: hidden;
  }
  .area-cityscape {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(180deg, transparent 0%, rgba(180,210,230,0.4) 100%);
    pointer-events: none;
  }
  .area-inner { max-width: 960px; margin: 0 auto; position: relative; }

  /* Top 2-col */
  .area-top {
    display: flex; align-items: flex-start; gap: 30px;
    margin-bottom: 36px;
  }
  .area-top-left { flex: 1; min-width: 0; }
  .area-small-label {
    font-size: 12px; color: #555; margin-bottom: 6px;
  }
  .area-title {
    display: flex; align-items: center; gap: 8px;
    font-size: 28px; font-weight: 900; color: #1a1a1a;
    margin-bottom: 16px;
  }
  .area-title svg { flex-shrink: 0; }
  .area-subtitle {
    font-size: 15px; font-weight: 800; color: #1a6e2e;
    margin-bottom: 10px;
  }
  .area-subtitle span { color: #e53935; }
  .area-desc { font-size: 12px; color: #555; line-height: 1.85; }
  .area-top-right {
    flex: 0 0 260px;
    position: relative;
    display: flex; align-items: flex-start; justify-content: center;
  }
  .area-map {
    width: 220px; height: 200px;
    background: linear-gradient(135deg, #43a047 0%, #66bb6a 40%, #81c784 100%);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .area-badge-yellow {
    position: absolute; top: 8px; right: 8px;
    background: #f5c518; color: #333;
    font-size: 11px; font-weight: 800;
    padding: 6px 10px; border-radius: 50px;
    white-space: nowrap; text-align: center; line-height: 1.4;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }

  /* エリア table */
  .area-table-wrap {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    margin-bottom: 24px;
  }
  .area-table-header {
    background: #1a6e2e;
    color: #fff;
    font-size: 15px; font-weight: 800;
    padding: 12px 20px;
    text-align: center;
  }
  .area-table-body {
    padding: 14px 16px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px 8px;
  }
  .area-city {
    font-size: 11.5px; color: #333;
    display: flex; align-items: center; gap: 3px;
    padding: 3px 0;
    white-space: nowrap;
  }
  .area-city::before {
    content: '›'; color: #2ea84f; font-weight: 700; flex-shrink: 0;
  }

  /* Info boxes */
  .area-info-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    margin-bottom: 24px;
  }
  .area-info-box {
    background: #fff;
    border: 1px solid #ddd; border-radius: 8px;
    padding: 16px 20px;
  }
  .area-info-title {
    font-size: 12px; font-weight: 700; color: #333;
    text-align: center; margin-bottom: 12px;
    padding-bottom: 8px; border-bottom: 1px solid #eee;
  }
  .area-logos-row {
    display: flex; align-items: center; gap: 10px;
    flex-wrap: wrap; margin-bottom: 10px;
    justify-content: center;
  }
  .area-paypay-row {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px; color: #555; justify-content: center;
  }
  .area-insurance {
    text-align: center;
  }
  .area-ins-label { font-size: 11px; color: #555; margin-bottom: 6px; }
  .area-ins-amount {
    font-size: 22px; font-weight: 900; color: #e53935;
    display: flex; align-items: baseline; gap: 2px; justify-content: center;
  }
  .area-ins-amount span { font-size: 13px; color: #333; }
  .area-ins-logo {
    font-size: 10px; color: #888; margin-top: 6px;
    padding: 4px 10px; border: 1px solid #ccc; border-radius: 4px;
    display: inline-block;
  }

  /* Invoice banner */
  .area-invoice {
    border: 3px solid #2ea84f;
    border-radius: 10px;
    background: #fff;
    padding: 16px 24px;
    display: flex; align-items: center; justify-content: center; gap: 16px;
    margin-bottom: 50px;
  }
  .area-invoice-main {
    font-size: 36px; font-weight: 900; color: #1a1a1a;
    display: flex; align-items: center; gap: 12px;
  }
  .area-invoice-sub {
    font-size: 11px; color: #666;
  }

  @media (max-width: 640px) {
    .area-top { flex-direction: column !important; }
    .area-top-right { flex: none !important; width: 100% !important; align-items: center; }
    .area-table-body { grid-template-columns: repeat(3, 1fr) !important; }
    .area-info-row { grid-template-columns: 1fr !important; }
    .area-invoice-main { font-size: 24px; }
    .area-title { font-size: 22px; }
  }
`;

const cities = [
  'さいたま市西区','さいたま市北区','さいたま市大宮区','さいたま市見沼区','さいたま市中央区',
  'さいたま市桜区','さいたま市浦和区','さいたま市南区','さいたま市緑区','さいたま市岩槻区',
  '川口市','所沢市','川越市','越谷市','草加市',
  '上尾市','春日部市','入間市','志木市','朝霞市',
  '蕨市','狭山市','八潮市','富士見市','新座市',
  '桶川市','久喜市','北本市','吉川市','蓮田市',
  '行田市','日高市','白岡市','鶴ヶ島市','坂戸市',
  '秩父市','深谷市','熊谷市','本庄市','東松山市',
  '羽生市','加須市','鴻巣市','上尾市','伊奈町',
  '三芳町','毛呂山町','越生町','滑川町','嵐山町',
  '小川町','ときがわ町','横瀬町','皆野町','長瀞町',
  '上里町','寄居町','宮代町','杉戸町','松伏町',
  '吉見町','川島町','ふじみ野市','富士見市','長瀞町',
];

const cityItems = cities.map(c => `<div class="area-city">${c}</div>`).join('\n        ');

const section = `
  <!-- SERVICE AREA SECTION -->
  <div class="area-section">
    <div class="area-inner">

      <!-- Top: title + map -->
      <div class="area-top">
        <div class="area-top-left">
          <div class="area-small-label">不用品回収クオーレ埼玉の</div>
          <div class="area-title">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2ea84f" stroke-width="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            サービス対応エリア
          </div>
          <div class="area-subtitle">スピード回収！<span>最短即日</span>で対応いたします！</div>
          <p class="area-desc">不用品回収クオーレ埼玉では以前を松戸市域をお発品と不用品・粗大ゴミ対応を行っています。埼玉を始め対応エリア内などにても訪問し、無料にて無料見積査定成形をします。近場通じてのお引渡り対応も可能ですので、不用品の処分にお困りならばクオーレ埼玉にご相談ください。</p>
        </div>
        <div class="area-top-right">
          <div class="area-map">
            <svg viewBox="0 0 120 140" width="130" height="150" fill="none">
              <!-- Simplified Saitama map shape -->
              <path d="M30 20 L50 10 L80 15 L100 30 L110 50 L105 75 L95 90 L80 110 L65 125 L50 120 L35 105 L20 85 L15 60 L20 40 Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
              <path d="M40 55 L55 45 L70 50 L80 65 L75 80 L60 85 L45 78 L38 65 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
              <circle cx="58" cy="65" r="5" fill="rgba(255,255,255,0.8)"/>
              <circle cx="58" cy="65" r="2" fill="#fff"/>
            </svg>
            <div class="area-badge-yellow">最短即日で<br>駆けつけ！</div>
          </div>
        </div>
      </div>

      <!-- エリア table -->
      <div class="area-table-wrap">
        <div class="area-table-header">埼玉県のサービス対応エリア</div>
        <div class="area-table-body">
          ${cityItems}
        </div>
      </div>

      <!-- Info boxes -->
      <div class="area-info-row">
        <div class="area-info-box">
          <div class="area-info-title">各種クレジットカードがご利用いただけます</div>
          <div class="area-logos-row">
            <!-- VISA -->
            <svg viewBox="0 0 60 20" width="56" height="20"><rect width="60" height="20" rx="3" fill="#1a1f71"/><text x="30" y="15" font-family="Arial" font-weight="900" font-size="12" fill="white" text-anchor="middle">VISA</text></svg>
            <!-- JCB -->
            <svg viewBox="0 0 44 30" width="40" height="28"><rect width="44" height="30" rx="4" fill="#003087"/><rect x="2" y="2" width="12" height="26" rx="3" fill="#003087"/><rect x="16" y="2" width="12" height="26" rx="3" fill="#e31837"/><rect x="30" y="2" width="12" height="26" rx="3" fill="#007b40"/><text x="8" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">J</text><text x="22" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">C</text><text x="36" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">B</text></svg>
            <!-- Mastercard -->
            <svg viewBox="0 0 44 28" width="40" height="26"><circle cx="16" cy="14" r="13" fill="#eb001b"/><circle cx="28" cy="14" r="13" fill="#f79e1b"/><path d="M22 5.3a13 13 0 0 1 0 17.4A13 13 0 0 1 22 5.3z" fill="#ff5f00"/></svg>
            <!-- AMEX -->
            <svg viewBox="0 0 60 22" width="56" height="20"><rect width="60" height="22" rx="3" fill="#2e77bc"/><text x="30" y="16" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">AMERICAN EXPRESS</text></svg>
          </div>
          <div class="area-paypay-row">
            <span>スマホ決済にも対応！</span>
            <svg viewBox="0 0 80 28" width="70" height="24"><rect width="80" height="28" rx="4" fill="#fff" stroke="#e00"/><text x="40" y="19" font-family="Arial" font-weight="900" font-size="14" fill="#e00" text-anchor="middle">PayPay</text></svg>
          </div>
        </div>
        <div class="area-info-box">
          <div class="area-info-title">万が一の際には損害賠償免責</div>
          <div class="area-insurance">
            <div class="area-ins-label">人身・物損に適応</div>
            <div class="area-ins-amount">最高<span></span>5,000<span>万円まで</span></div>
            <div class="area-ins-logo">あいおいニッセイ同期損保</div>
          </div>
        </div>
      </div>

      <!-- Invoice banner -->
      <div class="area-invoice">
        <div class="area-invoice-main">
          インボイス
          <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#2ea84f" stroke-width="2"><rect x="4" y="2" width="24" height="28" rx="3"/><line x1="10" y1="10" x2="22" y2="10"/><line x1="10" y1="16" x2="22" y2="16"/><line x1="10" y1="22" x2="18" y2="22"/></svg>
          登録店
        </div>
        <div class="area-invoice-sub">適格請求書発行事業者制度</div>
      </div>

    </div>
    <div class="area-cityscape"></div>
  </div>
`;

html = html.replace('</style>', css + '\n</style>');
html = html.replace('\n</div>\n</body>', '\n' + section + '\n</div>\n</body>');

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html', html);
console.log('Done! Lines:', html.split('\n').length);
