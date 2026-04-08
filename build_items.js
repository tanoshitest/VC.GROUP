const fs = require('fs');

// Read service.html to extract shared header, nav, footer
const service = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/service.html', 'utf8');

// Extract everything from <body> to end of nav/notice section (before <!-- PAGE HERO -->)
const bodyStart = service.indexOf('<body>');
const heroStart = service.indexOf('<!-- PAGE HERO -->');
const headerHTML = service.substring(bodyStart + 6, heroStart);

// Extract footer
const footerStart = service.indexOf('<footer');
const footerEnd = service.indexOf('</body>');
const footerHTML = service.substring(footerStart, footerEnd);

// Extract CSS from <style> to </style>
const styleStart = service.indexOf('<style>');
const styleEnd = service.indexOf('</style>');
const baseCSS = service.substring(styleStart + 7, styleEnd);

// New page-specific CSS
const itemsCSS = `
  /* ===== ITEMS PAGE ===== */
  .items-hero {
    background: linear-gradient(135deg, rgba(26,110,46,0.92) 0%, rgba(46,168,79,0.88) 60%, rgba(67,199,100,0.85) 100%),
                url('') center/cover no-repeat;
    padding: 40px 20px;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .items-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><rect fill="%231a6e2e" width="1200" height="200"/><rect fill="%23228b3a" x="0" y="0" width="200" height="200" opacity="0.3"/><rect fill="%23228b3a" x="250" y="0" width="150" height="200" opacity="0.2"/><rect fill="%23228b3a" x="500" y="0" width="200" height="200" opacity="0.15"/><rect fill="%23228b3a" x="800" y="0" width="180" height="200" opacity="0.25"/><rect fill="%23228b3a" x="1050" y="0" width="150" height="200" opacity="0.2"/></svg>') center/cover;
    opacity: 0.3;
  }
  .items-hero-inner {
    max-width: 960px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .items-hero-title {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  /* Breadcrumb */
  .items-breadcrumb {
    background: #fff;
    padding: 10px 20px;
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .items-breadcrumb a {
    color: #2ea84f;
    text-decoration: none;
  }
  .items-breadcrumb a:hover {
    text-decoration: underline;
  }

  /* ===== SECTION 1: INTRO ===== */
  .items-intro {
    background: #edf7ed;
    padding: 50px 20px 60px;
  }
  .items-intro-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  /* Heading with decorations */
  .items-heading {
    text-align: center;
    margin-bottom: 40px;
  }
  .items-heading-sub {
    font-size: 22px;
    font-weight: 800;
    color: #2ea84f;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .items-heading-sub .deco {
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #2ea84f;
    position: relative;
  }
  .items-heading-sub .deco::before {
    content: '';
    position: absolute;
    top: -4px;
    width: 6px;
    height: 6px;
    background: #2ea84f;
    border-radius: 50%;
  }
  .items-heading-sub .deco:first-child::before { right: 0; }
  .items-heading-sub .deco:last-child::before { left: 0; }
  .items-heading-main {
    font-size: 30px;
    font-weight: 900;
    color: #1a1a1a;
    position: relative;
    display: inline-block;
  }
  .items-heading-main .highlight {
    background: linear-gradient(transparent 60%, #fff44f 60%);
    padding: 0 4px;
  }

  /* Info card */
  .items-info-card {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    background: #fff;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 40px;
  }
  .items-info-img {
    flex: 0 0 280px;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 50%, #81c784 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .items-info-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .items-info-content {
    flex: 1;
    min-width: 0;
  }
  .items-info-title {
    font-size: 20px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  .items-info-title-red {
    font-size: 20px;
    font-weight: 900;
    color: #e63b2e;
    margin-bottom: 14px;
  }
  .items-info-text {
    font-size: 13px;
    color: #444;
    line-height: 1.9;
  }

  /* Category buttons */
  .items-categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-width: 960px;
    margin: 0 auto;
  }
  .items-cat-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #2ea84f;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    padding: 14px 20px;
    border-radius: 50px;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: background 0.2s, transform 0.15s;
  }
  .items-cat-btn:hover {
    background: #259042;
    transform: translateY(-2px);
  }
  .items-cat-btn .cat-chevron {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ===== CATEGORY DETAIL SECTIONS ===== */
  .cat-section {
    background: #edf7ed;
    padding: 0 20px 50px;
  }
  .cat-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .cat-header {
    background: #2ea84f;
    color: #fff;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    padding: 14px 20px;
    border-radius: 6px;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
  }
  .cat-desc-row {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 28px;
  }
  .cat-desc-text {
    flex: 1;
    min-width: 0;
  }
  .cat-desc-title {
    font-size: 18px;
    font-weight: 900;
    color: #1a1a1a;
    line-height: 1.6;
    margin-bottom: 4px;
  }
  .cat-desc-title-green {
    font-size: 18px;
    font-weight: 900;
    color: #2ea84f;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  .cat-desc-body {
    font-size: 13px;
    color: #444;
    line-height: 1.85;
  }
  .cat-desc-img {
    flex: 0 0 200px;
    height: 140px;
    border-radius: 8px;
    overflow: hidden;
    background: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cat-desc-img svg {
    width: 100%;
    height: 100%;
  }

  /* Items table */
  .cat-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border: 1px solid #ddd;
  }
  .cat-table tr {
    border-bottom: 1px solid #ddd;
  }
  .cat-table tr:last-child {
    border-bottom: none;
  }
  .cat-table th {
    background: #f5f5f5;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    padding: 14px 16px;
    text-align: center;
    width: 140px;
    border-right: 1px solid #ddd;
    vertical-align: middle;
  }
  .cat-table td {
    font-size: 13px;
    color: #444;
    padding: 14px 16px;
    line-height: 1.7;
  }

  /* ===== NOTICE / CTA ===== */
  .items-notice-section {
    background: #dff0e3;
    padding: 50px 20px;
  }
  .items-notice-inner {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .items-notice-heading {
    font-size: 16px;
    font-weight: 700;
    color: #2ea84f;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .notice-deco {
    color: #2ea84f;
    font-size: 14px;
  }
  .items-notice-main {
    font-size: 26px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 28px;
    background: linear-gradient(transparent 60%, #fff44f 60%);
    display: inline-block;
    padding: 0 4px;
  }
  .items-notice-box {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 20px 24px;
    text-align: left;
  }
  .items-notice-box p {
    font-size: 12px;
    color: #666;
    line-height: 1.9;
  }

  /* ===== サービス一覧 GRID ===== */
  .items-services-section {
    background: #fff;
    padding: 50px 20px 60px;
  }
  .items-services-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .items-services-title {
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  .items-services-bar {
    width: 40px;
    height: 3px;
    background: #2ea84f;
    border-radius: 2px;
    margin: 0 auto 32px;
  }
  .items-services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .items-svc-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 24px 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .items-svc-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
  .items-svc-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .items-svc-label {
    font-size: 13px;
    font-weight: 700;
    color: #333;
    text-align: center;
  }
  .items-svc-corner {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 20px 20px;
    border-color: transparent transparent #2ea84f transparent;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 640px) {
    .items-hero-title { font-size: 24px; }
    .items-heading-sub { font-size: 17px; }
    .items-heading-main { font-size: 22px; }
    .items-info-card { flex-direction: column; padding: 20px; gap: 16px; }
    .items-info-img { flex: none; width: 100%; height: 180px; }
    .items-categories { grid-template-columns: 1fr 1fr; gap: 8px; }
    .items-cat-btn { font-size: 13px; padding: 12px 14px; }
    .items-info-title, .items-info-title-red { font-size: 17px; }
    .cat-header { font-size: 18px; padding: 12px 16px; }
    .cat-desc-row { flex-direction: column; }
    .cat-desc-img { flex: none; width: 100%; height: 160px; }
    .cat-table th { width: 100px; font-size: 12px; padding: 10px 8px; }
    .cat-table td { font-size: 12px; padding: 10px 8px; }
    .cat-desc-title, .cat-desc-title-green { font-size: 15px; }
    .items-notice-main { font-size: 20px; }
    .items-services-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .items-svc-card { padding: 18px 12px 16px; }
    .items-svc-label { font-size: 12px; }
  }
`;

// Build the HTML
const itemsHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>回収対象品目一覧 | 不用品回収 クオーレ埼玉</title>
  <style>
${baseCSS}
${itemsCSS}
  </style>
</head>
<body>
${headerHTML}
  <!-- NOTICE BAR -->
  <div class="notice-bar">
    アース埼玉はクオーレ埼玉にサービス名称を変更しました！
  </div>

  <!-- PAGE HERO -->
  <div class="items-hero">
    <div class="items-hero-inner">
      <div class="items-hero-title">回収対象品目一覧</div>
    </div>
  </div>

  <!-- BREADCRUMB -->
  <div class="items-breadcrumb" style="max-width:960px;margin:0 auto;padding:10px 0;background:transparent;">
    <a href="index.html">埼玉の不用品回収・粗大ゴミ処分業者クオーレ</a>
    <span>＞</span>
    <span>回収対象品目一覧</span>
  </div>

  <!-- SECTION 1: INTRO -->
  <div class="items-intro">
    <div class="items-intro-inner">

      <!-- Heading -->
      <div class="items-heading">
        <div class="items-heading-sub">
          <span class="deco"></span>
          クオーレ埼玉は生活用品から工具まで
          <span class="deco"></span>
        </div>
        <div class="items-heading-main">
          <span class="highlight">あらゆる品目が回収可能！</span>
        </div>
      </div>

      <!-- Info card -->
      <div class="items-info-card">
        <div class="items-info-img">
          <svg viewBox="0 0 280 200" width="280" height="200" xmlns="http://www.w3.org/2000/svg">
            <!-- Placeholder illustration of household items -->
            <rect width="280" height="200" fill="#f0f7f0" rx="8"/>
            <!-- Table/desk -->
            <rect x="20" y="120" width="80" height="50" rx="3" fill="#8d6e63"/>
            <rect x="15" y="115" width="90" height="8" rx="2" fill="#6d4c41"/>
            <!-- Fan -->
            <circle cx="180" cy="70" r="30" fill="none" stroke="#78909c" stroke-width="2"/>
            <circle cx="180" cy="70" r="5" fill="#78909c"/>
            <line x1="180" y1="100" x2="180" y2="160" stroke="#78909c" stroke-width="3"/>
            <line x1="165" y1="160" x2="195" y2="160" stroke="#78909c" stroke-width="3"/>
            <!-- Box -->
            <rect x="110" y="130" width="40" height="35" rx="2" fill="#ffb74d"/>
            <line x1="130" y1="130" x2="130" y2="165" stroke="#f57c00" stroke-width="1"/>
            <line x1="110" y1="148" x2="150" y2="148" stroke="#f57c00" stroke-width="1"/>
            <!-- Lamp -->
            <polygon points="230,50 250,50 260,90 220,90" fill="#fff9c4" stroke="#fbc02d" stroke-width="1"/>
            <rect x="237" y="90" width="6" height="50" fill="#795548"/>
            <rect x="228" y="140" width="24" height="5" rx="2" fill="#795548"/>
            <!-- Small items -->
            <rect x="50" y="85" width="25" height="30" rx="2" fill="#90caf9"/>
            <circle cx="260" cy="130" r="12" fill="#ef9a9a"/>
          </svg>
        </div>
        <div class="items-info-content">
          <div class="items-info-title">種類や数量に関係なく回収！</div>
          <div class="items-info-title-red">事前準備なしで処分可能です</div>
          <div class="items-info-text">
            不用品回収クオーレ埼玉では不用品の処分にお悩みの埼玉県の皆様からのご依頼に迅速にお応えしております。<br>
            自治体で回収されない家電4品目やパソコン、ピアノなども含め、様々な品目を回収できます。ご自宅までお伺いして作業しますので、タンスなど大型家具の分解や洗濯機などの重い家電の搬出、室外機の取り外しもお任せください。
          </div>
        </div>
      </div>

      <!-- Category buttons -->
      <div class="items-categories">
        <a href="#cat-furniture" class="items-cat-btn">
          家具など
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
        <a href="#cat-electronics" class="items-cat-btn">
          電化製品など
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
        <a href="#cat-vehicle" class="items-cat-btn">
          車両農機具など
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
        <a href="#cat-toys" class="items-cat-btn">
          玩具
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
        <a href="#cat-sports" class="items-cat-btn">
          スポーツ用品
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
        <a href="#cat-instruments" class="items-cat-btn">
          楽器
          <span class="cat-chevron">
            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M2 4l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          </span>
        </a>
      </div>

    </div>
  </div>

  <!-- CATEGORY DETAILS -->
  <div class="cat-section">
    <div class="cat-inner">

      <!-- ===== 家具・インテリアなど ===== -->
      <div id="cat-furniture" style="padding-top:20px;">
        <div class="cat-header">家具・インテリアなど</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">2階にある重い物でも分解・吊り作業で対応可能！</div>
            <div class="cat-desc-title-green">買い替えや引越しで処分する予定の家具を回収します</div>
            <div class="cat-desc-body">
              タンスや本棚のような扉の幅よりも大きな家具の場合は分解してから搬出。照明器具やカーペットは設置された状態から対応いたしますので、事前準備の必要もありません。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#f0f4f8" rx="4"/>
              <rect x="30" y="40" width="100" height="55" rx="6" fill="#5c6bc0"/>
              <rect x="30" y="40" width="50" height="55" rx="6" fill="#7986cb"/>
              <rect x="25" y="95" width="5" height="15" rx="2" fill="#3949ab"/>
              <rect x="130" y="95" width="5" height="15" rx="2" fill="#3949ab"/>
              <rect x="140" y="30" width="35" height="60" rx="3" fill="#a5d6a7"/>
              <rect x="145" y="35" width="25" height="20" rx="2" fill="#c8e6c9"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>ブランド家具</th>
            <td>ベッド / ベビーベッド / スプリングマット / たんす / テーブル / ソファー / 机 / 椅子 / 食器棚 / 縁台 / サイドボード</td>
          </tr>
          <tr>
            <th>インテリア</th>
            <td>照明器具 / じゅうたん</td>
          </tr>
        </table>
      </div>

      <!-- ===== 電化製品など ===== -->
      <div id="cat-electronics" style="padding-top:40px;">
        <div class="cat-header">電化製品など</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">自治体の収集を利用できない家電も回収可能！</div>
            <div class="cat-desc-title-green">適切な処分を行いますので安心してご相談を！</div>
            <div class="cat-desc-body">
              不要になった家電の処分でお困りの方はご相談ください。自分の街に所定の手続きを踏む必要がある冷蔵庫など家電4品目はもちろん、業務用機器も適切な方法で処分します。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#f0f4f8" rx="4"/>
              <rect x="20" y="20" width="50" height="80" rx="4" fill="#455a64"/>
              <rect x="25" y="25" width="40" height="30" rx="2" fill="#78909c"/>
              <rect x="25" y="60" width="40" height="30" rx="2" fill="#607d8b"/>
              <rect x="80" y="50" width="45" height="50" rx="3" fill="#e0e0e0"/>
              <circle cx="102" cy="75" r="12" fill="#bdbdbd"/>
              <rect x="135" y="30" width="45" height="70" rx="3" fill="#37474f"/>
              <rect x="140" y="35" width="35" height="45" rx="2" fill="#546e7a"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>大型家電</th>
            <td>冷蔵庫 / 洗濯機（ドラム式・全自動・二槽式） / 乾燥機 / 液晶テレビ / エアコン / マッサージチェアー / オーブンレンジ / 電子レンジ / 食器洗い乾燥機 / 食器消毒庫</td>
          </tr>
          <tr>
            <th>小型家電</th>
            <td>掃除機 / ストーブ（ガス、電気） / ファンヒーター / 給湯器 / 温風器 / 冷風機 / ドライヤー / カメラ / 空気清浄機 / 高圧洗浄器 / 集塵機 / 発電機 / ミシン</td>
          </tr>
          <tr>
            <th>調理家電</th>
            <td>IH・ガスコンロ / ホットプレート / 炊飯器（ガス、電気） / ガステーブル / クッキングヒーター / 電子ケトル / ポット（電気ポット・保温ポット） / トースター / コーヒーメーカー / 精米機 / ホームフリーザー / ホームベーカリー（パン焼き器）</td>
          </tr>
          <tr>
            <th>パソコン</th>
            <td>パソコン本体 / モニター / 液晶ディスプレイ / ノートパソコン / パソコン付属品 / 複合機 / プロジェクター / コピー機 / iPad</td>
          </tr>
          <tr>
            <th>オーディオ</th>
            <td>DVDプレーヤー / CDプレーヤー / ブルーレイプレーヤー / ブルーレイレコーダー / ラジカセ / コンポ / ビデオデッキ / デジタルオーディオプレーヤー / ホームシアターシステム / ICレコーダー / iPod / アンプ / ステレオ / スピーカー / ヘッドホン</td>
          </tr>
        </table>
      </div>

      <!-- ===== 車両・農機具など ===== -->
      <div id="cat-vehicle" style="padding-top:40px;">
        <div class="cat-header">車両・農機具など</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">自動二輪車や農業機械などの車両も回収対象です</div>
            <div class="cat-desc-title-green">車庫内の不用品を丸ごと回収いたします</div>
            <div class="cat-desc-body">
              現場まで回収に伺いますので、エンジンが始動しない場合でも問題ありません。お使いれの古やき型になったトラクター、農機具など、車庫丸ごとの回収もお任せください。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#2e3a2e" rx="4"/>
              <!-- Motorcycle silhouette -->
              <ellipse cx="60" cy="95" rx="22" ry="22" fill="none" stroke="#888" stroke-width="3"/>
              <ellipse cx="145" cy="95" rx="22" ry="22" fill="none" stroke="#888" stroke-width="3"/>
              <circle cx="60" cy="95" r="8" fill="#555"/>
              <circle cx="145" cy="95" r="8" fill="#555"/>
              <path d="M75 85 L110 55 L135 60 L140 80" fill="none" stroke="#aaa" stroke-width="4"/>
              <path d="M110 55 L115 40 L125 42" fill="none" stroke="#aaa" stroke-width="3"/>
              <rect x="80" y="70" width="40" height="12" rx="3" fill="#666"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>車・バイク</th>
            <td>マウンテンバイク / 三輪車 / 大型バイク / 中型バイク / 小型バイク / タイヤ / 自動車バッテリー / カーステレオ / カーナビ / タイヤチェーン / エアロパーツ / マフラー / 車椅子 / アルミ付タイヤ / キックボード / スケートボード</td>
          </tr>
          <tr>
            <th>耕作機械など</th>
            <td>発電機 / トラクター / 耕運機 / 経運機 / 草刈り機 / 製粉機 / 脱水機 / 輸収機 / 乾燥機 / 洗浄機 / チェーンソー / 電動工具 / リヤカー</td>
          </tr>
        </table>
      </div>

      <!-- ===== 玩具 ===== -->
      <div id="cat-toys" style="padding-top:40px;">
        <div class="cat-header">玩具</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">遊ばなくなったおもちゃ・ゲーム機もお任せ！</div>
            <div class="cat-desc-title-green">最新相場にあわせた買取も行います！</div>
            <div class="cat-desc-body">
              置き場のないフィギュアや遊ばなくなったおもちゃの処分にお困りの際は当社にご相談を。ご予算にあわせてご対応いただけるのはもちろん、希少な品はその場で買取いたします。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#f5f5f5" rx="4"/>
              <!-- Game controller -->
              <rect x="50" y="40" width="100" height="60" rx="20" fill="#333"/>
              <circle cx="80" cy="65" r="8" fill="none" stroke="#888" stroke-width="2"/>
              <line x1="80" y1="57" x2="80" y2="73" stroke="#888" stroke-width="2"/>
              <line x1="72" y1="65" x2="88" y2="65" stroke="#888" stroke-width="2"/>
              <circle cx="120" cy="58" r="4" fill="#4caf50"/>
              <circle cx="128" cy="66" r="4" fill="#f44336"/>
              <circle cx="112" cy="66" r="4" fill="#2196f3"/>
              <circle cx="120" cy="74" r="4" fill="#ffeb3b"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>玩具</th>
            <td>ゲーム機 / ゲームソフト / おもちゃ</td>
          </tr>
        </table>
      </div>

      <!-- ===== スポーツ用品 ===== -->
      <div id="cat-sports" style="padding-top:40px;">
        <div class="cat-header">スポーツ用品</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">スポーツ用品も種類を問わずご相談を</div>
            <div class="cat-desc-title-green">スポーツ施設からの大量の回収も承ります</div>
            <div class="cat-desc-body">
              物置に眠ったままのスポーツ用品を手放す際にはクオーレまでご相談ください。スキーブーツやゴルフクラブ、ロードバイクなど、種類を問わず丁寧に回収いたします。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#f5f5f5" rx="4"/>
              <!-- Snowboard -->
              <rect x="30" y="20" width="18" height="110" rx="9" fill="#1565c0" transform="rotate(-10 39 75)"/>
              <rect x="36" y="50" width="6" height="8" rx="1" fill="#333"/>
              <rect x="36" y="72" width="6" height="8" rx="1" fill="#333"/>
              <!-- Ski -->
              <rect x="70" y="15" width="10" height="115" rx="5" fill="#e53935" transform="rotate(-5 75 72)"/>
              <!-- Boots -->
              <rect x="110" y="80" width="30" height="35" rx="5" fill="#795548"/>
              <rect x="105" y="100" width="40" height="15" rx="4" fill="#5d4037"/>
              <rect x="150" y="80" width="30" height="35" rx="5" fill="#795548"/>
              <rect x="145" y="100" width="40" height="15" rx="4" fill="#5d4037"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>スポーツ用品</th>
            <td>スキー板 / スノーボード / スキーブーツ / サーフボード / ロードバイク</td>
          </tr>
        </table>
      </div>

      <!-- ===== 楽器 ===== -->
      <div id="cat-instruments" style="padding-top:40px;">
        <div class="cat-header">楽器</div>
        <div class="cat-desc-row">
          <div class="cat-desc-text">
            <div class="cat-desc-title">思い出のある楽器を手放す際はクオーレにご相談を</div>
            <div class="cat-desc-title-green">大型の楽器も当社の技術で安全に搬出いたします</div>
            <div class="cat-desc-body">
              ギターからグランドピアノのような大きな楽器まで回収できます。2階にあっても吊り作業を駆使して搬出点まで対応しますので、状況・機種を問わずご相談ください。
            </div>
          </div>
          <div class="cat-desc-img">
            <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="140" fill="#1a1a1a" rx="4"/>
              <!-- Piano keys -->
              <rect x="10" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="32" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="54" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="76" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="98" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="120" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="142" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <rect x="164" y="50" width="20" height="70" fill="#fff" stroke="#ccc" stroke-width="0.5" rx="1"/>
              <!-- Black keys -->
              <rect x="23" y="50" width="14" height="42" fill="#222" rx="1"/>
              <rect x="45" y="50" width="14" height="42" fill="#222" rx="1"/>
              <rect x="89" y="50" width="14" height="42" fill="#222" rx="1"/>
              <rect x="111" y="50" width="14" height="42" fill="#222" rx="1"/>
              <rect x="133" y="50" width="14" height="42" fill="#222" rx="1"/>
              <rect x="155" y="50" width="14" height="42" fill="#222" rx="1"/>
            </svg>
          </div>
        </div>
        <table class="cat-table">
          <tr>
            <th>楽器</th>
            <td>電子ピアノ / ピアノ / エレクトーン / キーボード / ギター / ベース / ドラム / バイオリン / 弦楽器</td>
          </tr>
        </table>
      </div>

    </div>
  </div>

  <!-- ===== NOTICE / CTA SECTION ===== -->
  <div class="items-notice-section">
    <div class="items-notice-inner">
      <div class="items-notice-heading">
        <span class="notice-deco">＞</span>
        上記以外にも回収可能な品目が多数ございます
        <span class="notice-deco">＜</span>
      </div>
      <div class="items-notice-main">
        まずは一度、お気軽にお問い合わせください！
      </div>
      <div class="items-notice-box">
        <p>ワシントン条約又は種の保存法等の法法規を遵守する観点から、動植物及び動植物の加工品については、お断りとして引き取りや回収をお断りしております。また、銃砲及び刀剣類の買い取りについても、その譲り渡し又は譲受が上記の条約、法律、その他の法法規に反するし、ないものであることをお客様において申告いただき、かつ、明らかな根拠又は法令違反の疑件がある場合は引き取り又は回収等をお断りさせていただくことがございますので、ご了承はどよろしくお願いいたします）。</p>
      </div>
    </div>
  </div>

  <!-- ===== サービス一覧 SECTION ===== -->
  <div class="items-services-section">
    <div class="items-services-inner">
      <div class="items-services-title">サービス一覧</div>
      <div class="items-services-bar"></div>
      <div class="items-services-grid">
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="8" y="12" width="32" height="28" rx="4"/><path d="M16 12V8a8 8 0 0 1 16 0v4"/><circle cx="24" cy="26" r="4"/>
            </svg>
          </div>
          <div class="items-svc-label">不用品回収</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="4" y="18" width="40" height="22" rx="4"/><path d="M10 18v-4a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v4"/><rect x="14" y="26" width="6" height="6" rx="1"/><rect x="28" y="26" width="6" height="6" rx="1"/>
            </svg>
          </div>
          <div class="items-svc-label">粗大ゴミ処分</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="6" y="8" width="36" height="34" rx="3"/><line x1="14" y1="8" x2="14" y2="42"/><line x1="34" y1="8" x2="34" y2="42"/><line x1="6" y1="24" x2="42" y2="24"/>
            </svg>
          </div>
          <div class="items-svc-label">家具回収</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="6" y="10" width="36" height="28" rx="3"/><rect x="16" y="6" width="16" height="6" rx="2"/><circle cx="24" cy="28" r="6"/><circle cx="24" cy="28" r="2" fill="#2ea84f"/>
            </svg>
          </div>
          <div class="items-svc-label">家電回収</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="4" y="20" width="28" height="16" rx="3"/><path d="M32 28h6a4 4 0 0 1 4 4v6H32"/><path d="M4 30l6-12h18l6 12"/><circle cx="12" cy="40" r="4" fill="#2ea84f" stroke="#fff"/><circle cx="30" cy="40" r="4" fill="#2ea84f" stroke="#fff"/>
            </svg>
          </div>
          <div class="items-svc-label">廃品回収</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <circle cx="24" cy="20" r="10"/><path d="M16 34h16v6H16z"/><path d="M20 20l4-4 4 4"/><line x1="24" y1="16" x2="24" y2="28"/>
            </svg>
          </div>
          <div class="items-svc-label">不用品買取</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <path d="M14 40V14l10-8 10 8v26"/><rect x="20" y="28" width="8" height="12"/><line x1="10" y1="40" x2="38" y2="40"/>
            </svg>
          </div>
          <div class="items-svc-label">引越しサポート</div>
          <div class="items-svc-corner"></div>
        </a>
        <a href="service.html" class="items-svc-card">
          <div class="items-svc-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40">
              <rect x="6" y="10" width="36" height="30" rx="3"/><path d="M6 20h36"/><path d="M16 20v20"/><path d="M32 20v20"/><circle cx="24" cy="15" r="3"/>
            </svg>
          </div>
          <div class="items-svc-label">ゴミ屋敷片付け</div>
          <div class="items-svc-corner"></div>
        </a>
      </div>
    </div>
  </div>

  <!-- SERVICE AREA SECTION -->
  <div class="area-section">
    <div class="area-inner">
      <div class="area-top">
        <div class="area-top-left">
          <div class="area-small-label">不用品回収クオーレ埼玉の</div>
          <div class="area-title">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2ea84f" stroke-width="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            サービス対応エリア
          </div>
          <div class="area-subtitle">スピード回収！<span>最短即日</span>で対応いたします！</div>
          <p class="area-desc">不用品回収クオーレ埼玉では埼玉県全域を対象に不用品・粗大ゴミの回収を行っています。埼玉を始め対応エリア内であれば訪問し、無料にてお見積もりいたします。お気軽にご相談ください。</p>
        </div>
        <div class="area-top-right">
          <div class="area-map">
            <svg viewBox="0 0 120 140" width="130" height="150" fill="none">
              <path d="M30 20 L50 10 L80 15 L100 30 L110 50 L105 75 L95 90 L80 110 L65 125 L50 120 L35 105 L20 85 L15 60 L20 40 Z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
              <path d="M40 55 L55 45 L70 50 L80 65 L75 80 L60 85 L45 78 L38 65 Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
              <circle cx="58" cy="65" r="5" fill="rgba(255,255,255,0.8)"/>
              <circle cx="58" cy="65" r="2" fill="#fff"/>
            </svg>
            <div class="area-badge-yellow">最短即日で<br>駆けつけ！</div>
          </div>
        </div>
      </div>

      <div class="area-table-wrap">
        <div class="area-table-header">埼玉県のサービス対応エリア</div>
        <div class="area-table-body">
          <div class="area-city">さいたま市西区</div>
          <div class="area-city">さいたま市北区</div>
          <div class="area-city">さいたま市大宮区</div>
          <div class="area-city">さいたま市見沼区</div>
          <div class="area-city">さいたま市中央区</div>
          <div class="area-city">さいたま市桜区</div>
          <div class="area-city">さいたま市浦和区</div>
          <div class="area-city">さいたま市南区</div>
          <div class="area-city">さいたま市緑区</div>
          <div class="area-city">さいたま市岩槻区</div>
          <div class="area-city">川口市</div>
          <div class="area-city">所沢市</div>
          <div class="area-city">川越市</div>
          <div class="area-city">越谷市</div>
          <div class="area-city">草加市</div>
          <div class="area-city">上尾市</div>
          <div class="area-city">春日部市</div>
          <div class="area-city">入間市</div>
          <div class="area-city">志木市</div>
          <div class="area-city">朝霞市</div>
          <div class="area-city">蕨市</div>
          <div class="area-city">狭山市</div>
          <div class="area-city">八潮市</div>
          <div class="area-city">富士見市</div>
          <div class="area-city">新座市</div>
          <div class="area-city">桶川市</div>
          <div class="area-city">久喜市</div>
          <div class="area-city">北本市</div>
          <div class="area-city">吉川市</div>
          <div class="area-city">蓮田市</div>
          <div class="area-city">行田市</div>
          <div class="area-city">日高市</div>
          <div class="area-city">白岡市</div>
          <div class="area-city">鶴ヶ島市</div>
          <div class="area-city">坂戸市</div>
          <div class="area-city">秩父市</div>
          <div class="area-city">深谷市</div>
          <div class="area-city">熊谷市</div>
          <div class="area-city">本庄市</div>
          <div class="area-city">東松山市</div>
          <div class="area-city">羽生市</div>
          <div class="area-city">加須市</div>
          <div class="area-city">鴻巣市</div>
          <div class="area-city">伊奈町</div>
          <div class="area-city">三芳町</div>
          <div class="area-city">毛呂山町</div>
          <div class="area-city">越生町</div>
          <div class="area-city">滑川町</div>
          <div class="area-city">嵐山町</div>
          <div class="area-city">小川町</div>
          <div class="area-city">ときがわ町</div>
          <div class="area-city">横瀬町</div>
          <div class="area-city">皆野町</div>
          <div class="area-city">長瀞町</div>
          <div class="area-city">上里町</div>
          <div class="area-city">寄居町</div>
          <div class="area-city">宮代町</div>
          <div class="area-city">杉戸町</div>
          <div class="area-city">松伏町</div>
          <div class="area-city">吉見町</div>
          <div class="area-city">川島町</div>
          <div class="area-city">ふじみ野市</div>
        </div>
      </div>

      <div class="area-info-row">
        <div class="area-info-box">
          <div class="area-info-title">各種クレジットカードがご利用いただけます</div>
          <div class="area-logos-row">
            <svg viewBox="0 0 60 20" width="56" height="20"><rect width="60" height="20" rx="3" fill="#1a1f71"/><text x="30" y="15" font-family="Arial" font-weight="900" font-size="12" fill="white" text-anchor="middle">VISA</text></svg>
            <svg viewBox="0 0 44 30" width="40" height="28"><rect width="44" height="30" rx="4" fill="#003087"/><rect x="2" y="2" width="12" height="26" rx="3" fill="#003087"/><rect x="16" y="2" width="12" height="26" rx="3" fill="#e31837"/><rect x="30" y="2" width="12" height="26" rx="3" fill="#007b40"/><text x="8" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">J</text><text x="22" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">C</text><text x="36" y="20" font-family="Arial" font-weight="900" font-size="9" fill="white" text-anchor="middle">B</text></svg>
            <svg viewBox="0 0 44 28" width="40" height="26"><circle cx="16" cy="14" r="13" fill="#eb001b"/><circle cx="28" cy="14" r="13" fill="#f79e1b"/><path d="M22 5.3a13 13 0 0 1 0 17.4A13 13 0 0 1 22 5.3z" fill="#ff5f00"/></svg>
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

      <div class="area-invoice">
        <div class="area-invoice-main">
          インボイス
          <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#2ea84f" stroke-width="2"><rect x="4" y="2" width="24" height="28" rx="3"/><line x1="10" y1="10" x2="22" y2="10"/><line x1="10" y1="16" x2="22" y2="16"/><line x1="10" y1="22" x2="18" y2="22"/></svg>
          登録店
        </div>
        <div class="area-invoice-sub">適格請求書発行事業者制度</div>
      </div>
    </div>
  </div>

  <!-- CONTACT STRIP -->
  <div class="sv-contact-strip">
    <span class="sv-cs-badge">ご相談・お見積もり無料</span>
    <span class="sv-cs-text">お気軽にお問い合わせを！</span>
  </div>

  <!-- CONTACT CARD -->
  <div class="sv-contact-bg">
    <div class="contact-section" style="padding:0;">
      <div class="contact-card">
        <div class="contact-left">
          <div class="contact-staff-img"></div>
          <div class="contact-badges">
            <div class="contact-badge-yellow"><span>最短即日で<br>駆けつけ！</span></div>
            <div class="contact-badge-google">
              <div class="cbg-title">Google口コミ</div>
              <div class="cbg-stars">★4.8獲得</div>
              <div class="cbg-star-row">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="contact-middle">
          <div class="contact-campaign-bar"><span>🎉</span> WEB限定&nbsp; 割引キャンペーン <span>🧮</span></div>
          <div class="contact-offer-text">見積もり価格から<span class="co-big">20%OFF割引</span>を実施中！</div>
          <div class="contact-phone-row">
            <div class="contact-free-badge"><span>ご相談<br>お見積もり<br>無料</span></div>
            <div class="contact-phone-block">
              <div class="contact-phone-num">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                0120-996-638
              </div>
              <div class="contact-phone-sub">✓ 24時間受付対応&nbsp;<span class="cpb-tag">土日祝OK</span><span class="cpb-tag">通話無料</span></div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <a href="#" class="contact-btn-mail">
            <div class="cbtn-sub">── お見積もり無料受付 ──</div>
            <div class="cbtn-main">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              メールでお問い合わせ
            </div>
          </a>
          <a href="#" class="contact-btn-line">
            <div class="cbtn-sub">── 24時間・365日受付 ──</div>
            <div class="cbtn-main">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.7 1.3 5.12 3.35 6.82L4.5 22l4.37-2.27A10.8 10.8 0 0 0 12 20c5.52 0 10-4.03 10-9S17.52 2 12 2zm1 13H7v-2h6v2zm2-4H7V9h8v2z"/></svg>
              LINEでお問い合わせ
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  ${footerHTML}

</div>
</body>
</html>`;

// Remove duplicate notice bar (already in extracted header)
let finalHTML = itemsHTML;

// Fix nav link for this page
finalHTML = finalHTML.replace(
  '<a href="#" onclick="closeMenu()">回収対象品目一覧</a>',
  '<a href="items.html" onclick="closeMenu()" style="background:#f0faf2;color:#2b9e3a;font-weight:700;">回収対象品目一覧</a>'
);

// Remove duplicate notice bar if header already has one
const noticeCount = (finalHTML.match(/class="notice-bar"/g) || []).length;
if (noticeCount > 1) {
  // Remove the second notice bar (the one we added, keep the one from header)
  const firstNotice = finalHTML.indexOf('class="notice-bar"');
  const secondNotice = finalHTML.indexOf('class="notice-bar"', firstNotice + 1);
  if (secondNotice > 0) {
    const divStart = finalHTML.lastIndexOf('<div', secondNotice);
    const divEnd = finalHTML.indexOf('</div>', secondNotice) + 6;
    finalHTML = finalHTML.substring(0, divStart) + finalHTML.substring(divEnd);
  }
}

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/items.html', finalHTML, 'utf8');
console.log('items.html created successfully!');
console.log('File size:', (finalHTML.length / 1024).toFixed(1) + ' KB');
