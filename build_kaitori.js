const fs = require('fs');

// Read service.html to extract shared header, nav, footer
const service = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/service.html', 'utf8');

// Extract header (body to PAGE HERO)
const bodyStart = service.indexOf('<body>');
const heroStart = service.indexOf('<!-- PAGE HERO -->');
const headerHTML = service.substring(bodyStart + 6, heroStart);

// Extract footer
const footerStart = service.indexOf('<footer');
const footerEnd = service.indexOf('</body>');
const footerHTML = service.substring(footerStart, footerEnd);

// Extract base CSS
const styleStart = service.indexOf('<style>');
const styleEnd = service.indexOf('</style>');
const baseCSS = service.substring(styleStart + 7, styleEnd);

// Read items.html for reusable sections (area, contact strip, contact card, services grid)
const items = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/items.html', 'utf8');

// Extract area section
const areaStart = items.indexOf('<!-- SERVICE AREA SECTION -->');
const areaEnd = items.indexOf('<!-- CONTACT STRIP -->');
const areaHTML = items.substring(areaStart, areaEnd);

// Extract contact strip + contact card
const contactStripStart = items.indexOf('<!-- CONTACT STRIP -->');
const contactEnd = items.indexOf('<!-- FOOTER -->');
const contactHTML = items.substring(contactStripStart, contactEnd);

// Kaitori-specific CSS
const kaitoriCSS = `
  /* ===== KAITORI PAGE ===== */
  .kai-hero {
    background: #2b9e3a;
    display: flex;
    align-items: stretch;
    min-height: 320px;
    overflow: hidden;
  }
  .kai-hero-photos {
    flex: 0 0 55%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3px;
  }
  .kai-hero-photo {
    background-size: cover;
    background-position: center;
    min-height: 160px;
  }
  .kai-hero-photo:nth-child(1) {
    background: linear-gradient(135deg, #5d7a5d 0%, #7a9a7a 100%);
  }
  .kai-hero-photo:nth-child(2) {
    background: linear-gradient(135deg, #6a8a9a 0%, #8aacbc 100%);
  }
  .kai-hero-photo:nth-child(3) {
    background: linear-gradient(135deg, #7a6a5a 0%, #9a8a7a 100%);
    grid-column: 1 / 2;
  }
  .kai-hero-photo:nth-child(4) {
    background: linear-gradient(135deg, #5a6a5a 0%, #7a8a7a 100%);
  }
  .kai-hero-content {
    flex: 1;
    padding: 40px 40px 40px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .kai-hero-badge {
    position: absolute;
    top: 24px;
    right: 30px;
    width: 90px;
    height: 90px;
    background: #ffd700;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .kai-hero-badge .badge-big {
    font-size: 20px;
    font-weight: 900;
    color: #e63b2e;
    line-height: 1.1;
  }
  .kai-hero-badge .badge-small {
    font-size: 11px;
    font-weight: 700;
    color: #333;
    line-height: 1.2;
  }
  .kai-hero-title {
    font-size: 36px;
    font-weight: 900;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  .kai-hero-desc {
    font-size: 14px;
    color: rgba(255,255,255,0.95);
    line-height: 1.9;
  }
  .kai-hero-map {
    position: absolute;
    bottom: 10px;
    right: 20px;
    opacity: 0.15;
  }

  /* Breadcrumb */
  .kai-breadcrumb {
    background: #fff;
    padding: 10px 20px;
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .kai-breadcrumb a {
    color: #2ea84f;
    text-decoration: none;
  }
  .kai-breadcrumb a:hover { text-decoration: underline; }

  /* ===== INTRO SECTION ===== */
  .kai-intro {
    background: #edf7ed;
    padding: 50px 20px 60px;
  }
  .kai-intro-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .kai-intro-heading {
    text-align: center;
    margin-bottom: 32px;
  }
  .kai-intro-sub {
    font-size: 16px;
    font-weight: 700;
    color: #2ea84f;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .kai-intro-sub .deco {
    display: inline-block;
    width: 16px;
    height: 2px;
    background: #2ea84f;
  }
  .kai-intro-main {
    font-size: 26px;
    font-weight: 900;
    color: #1a1a1a;
  }
  .kai-intro-main .hl {
    color: #e63b2e;
  }
  .kai-intro-card {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    background: #fff;
    border-radius: 12px;
    padding: 28px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .kai-intro-card-text {
    flex: 1;
    min-width: 0;
  }
  .kai-intro-card-title {
    font-size: 20px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  .kai-intro-card-title-red {
    font-size: 20px;
    font-weight: 900;
    color: #e63b2e;
    margin-bottom: 14px;
  }
  .kai-intro-card-body {
    font-size: 13px;
    color: #444;
    line-height: 1.9;
  }
  .kai-intro-card-img {
    flex: 0 0 260px;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 50%, #81c784 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== 3つの強み SECTION ===== */
  .kai-strengths {
    background: radial-gradient(ellipse at center, #4caf50 0%, #2e7d32 50%, #1b5e20 100%);
    padding: 50px 20px 60px;
    position: relative;
    overflow: hidden;
  }
  .kai-strengths::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.03) 10deg 20deg);
    pointer-events: none;
  }
  .kai-strengths-inner {
    max-width: 960px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .kai-strengths-header {
    text-align: center;
    margin-bottom: 36px;
    color: #fff;
  }
  .kai-strengths-header-sub {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .kai-strengths-header-sub .deco { color: #ffd700; }
  .kai-strengths-header-main {
    font-size: 30px;
    font-weight: 900;
  }
  .kai-strengths-header-main .num {
    font-size: 42px;
    color: #ffd700;
  }
  .kai-staff-img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto 20px;
    height: 120px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Strength items */
  .kai-str-item {
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
  .kai-str-num {
    width: 36px;
    height: 36px;
    background: #2ea84f;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 900;
    flex-shrink: 0;
  }
  .kai-str-content {
    flex: 1;
    min-width: 0;
  }
  .kai-str-title {
    font-size: 18px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  .kai-str-title .hl {
    color: #e63b2e;
  }
  .kai-str-body {
    font-size: 13px;
    color: #444;
    line-height: 1.85;
  }
  .kai-str-visual {
    flex: 0 0 220px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Diagram styles */
  .kai-diagram {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .kai-diagram-box {
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: #555;
  }
  .kai-diagram-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 4px;
  }
  .kai-diagram-icon.green { background: #e8f5e9; }
  .kai-diagram-icon.orange { background: #fff3e0; }
  .kai-diagram-icon.blue { background: #e3f2fd; }
  .kai-diagram-op {
    font-size: 20px;
    font-weight: 900;
    color: #888;
  }

  /* Compare diagram */
  .kai-compare {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 8px;
  }
  .kai-compare-bar {
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: #555;
  }
  .kai-compare-bar .bar {
    width: 40px;
    border-radius: 4px 4px 0 0;
    margin: 0 auto 4px;
  }
  .kai-compare-label {
    background: #2ea84f;
    color: #fff;
    font-size: 9px;
    padding: 2px 6px;
    border-radius: 3px;
    margin-bottom: 4px;
    display: inline-block;
  }

  /* Items visual */
  .kai-items-visual {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .kai-item-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== 買取サービスの流れ ===== */
  .kai-flow {
    background: #fff;
    padding: 50px 20px 60px;
  }
  .kai-flow-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .kai-flow-title {
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  .kai-flow-bar {
    width: 40px;
    height: 3px;
    background: #1a6e2e;
    border-radius: 2px;
    margin: 0 auto 32px;
  }
  .kai-flow-steps {
    display: flex;
    gap: 0;
    position: relative;
  }
  .kai-flow-step {
    flex: 1;
    text-align: center;
    position: relative;
  }
  .kai-flow-step-header {
    background: #2ea84f;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 6px 0;
    letter-spacing: 0.05em;
    position: relative;
  }
  .kai-flow-step:not(:last-child) .kai-flow-step-header::after {
    content: '';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 14px 0 14px 8px;
    border-color: transparent transparent transparent #2ea84f;
    z-index: 1;
  }
  .kai-flow-step-img {
    height: 90px;
    background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .kai-flow-step-text {
    padding: 10px 8px;
    font-size: 11px;
    font-weight: 600;
    color: #444;
    line-height: 1.5;
  }

  /* ===== 高く売れるポイント ===== */
  .kai-points {
    background: #edf7ed;
    padding: 50px 20px 60px;
  }
  .kai-points-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .kai-points-title {
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  .kai-points-bar {
    width: 40px;
    height: 3px;
    background: #e63b2e;
    border-radius: 2px;
    margin: 0 auto 32px;
  }
  .kai-points-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .kai-point-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  }
  .kai-point-img {
    height: 140px;
    background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 50%, #81c784 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .kai-point-img.img-b { background: linear-gradient(135deg, #b0bec5 0%, #90a4ae 50%, #78909c 100%); }
  .kai-point-img.img-c { background: linear-gradient(135deg, #a5d6a7 0%, #dcedc8 50%, #aed581 100%); }
  .kai-point-img.img-d { background: linear-gradient(135deg, #bcaaa4 0%, #a1887f 50%, #8d6e63 100%); }
  .kai-point-num {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 32px;
    height: 32px;
    background: #2ea84f;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 900;
  }
  .kai-point-body {
    padding: 16px 18px 20px;
  }
  .kai-point-label {
    font-size: 16px;
    font-weight: 900;
    color: #2ea84f;
    text-align: center;
    margin-bottom: 10px;
  }
  .kai-point-text {
    font-size: 12px;
    color: #555;
    line-height: 1.8;
  }

  /* ===== 買取対象品目 ===== */
  .kai-target {
    background: #fff;
    padding: 50px 20px 60px;
  }
  .kai-target-inner { max-width: 960px; margin: 0 auto; }
  .kai-target-title {
    text-align: center; font-size: 24px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;
  }
  .kai-target-bar { width: 40px; height: 3px; background: #1a6e2e; border-radius: 2px; margin: 0 auto 28px; }
  .kai-target-grid {
    display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 28px;
  }
  .kai-target-card {
    text-align: center; background: #fff; border-radius: 6px; overflow: hidden;
    box-shadow: 0 1px 6px rgba(0,0,0,0.08);
  }
  .kai-target-card-label {
    background: #2ea84f; color: #fff; font-size: 12px; font-weight: 700; padding: 6px 0;
  }
  .kai-target-card-img {
    height: 80px; display: flex; align-items: center; justify-content: center;
    background: #f9f9f9; padding: 8px;
  }
  .kai-target-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #2ea84f; color: #fff; font-size: 15px; font-weight: 700;
    padding: 14px 32px; border-radius: 50px; text-decoration: none;
    max-width: 360px; margin: 0 auto; transition: background 0.2s;
  }
  .kai-target-btn:hover { background: #259042; }

  /* ===== 買取事例 ===== */
  .kai-examples {
    background: #edf7ed; padding: 50px 20px 60px;
  }
  .kai-examples-inner { max-width: 960px; margin: 0 auto; }
  .kai-examples-title {
    text-align: center; font-size: 24px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;
  }
  .kai-examples-bar { width: 40px; height: 3px; background: #1a6e2e; border-radius: 2px; margin: 0 auto 28px; }
  .kai-examples-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 28px;
  }
  .kai-ex-card {
    background: #fff; border-radius: 10px; overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06); text-align: center;
  }
  .kai-ex-img {
    height: 140px; background: linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%);
    display: flex; align-items: center; justify-content: center;
  }
  .kai-ex-img.img-b { background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%); }
  .kai-ex-img.img-c { background: linear-gradient(135deg, #d7ccc8 0%, #bcaaa4 100%); }
  .kai-ex-body { padding: 14px 14px 18px; }
  .kai-ex-name { font-size: 13px; font-weight: 700; color: #333; margin-bottom: 10px; line-height: 1.5; }
  .kai-ex-price {
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .kai-ex-price-badge {
    background: #e63b2e; color: #fff; font-size: 10px; font-weight: 700;
    padding: 3px 8px; border-radius: 3px;
  }
  .kai-ex-price-amount { font-size: 18px; font-weight: 900; color: #e63b2e; }

  /* ===== よくあるご質問 ===== */
  .kai-faq { background: #fff; padding: 50px 20px 60px; }
  .kai-faq-inner { max-width: 960px; margin: 0 auto; }
  .kai-faq-title {
    text-align: center; font-size: 24px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;
  }
  .kai-faq-bar { width: 40px; height: 3px; background: #1a6e2e; border-radius: 2px; margin: 0 auto 28px; }
  .kai-faq-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px;
  }
  .kai-faq-card {
    background: #f9f9f9; border-radius: 10px; padding: 20px;
  }
  .kai-faq-q {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 14px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px;
  }
  .kai-faq-q .q-icon {
    width: 24px; height: 24px; background: #2ea84f; color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 900; flex-shrink: 0;
  }
  .kai-faq-a {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 12px; color: #555; line-height: 1.7;
  }
  .kai-faq-a .a-icon {
    width: 24px; height: 24px; background: #e63b2e; color: #fff;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 900; flex-shrink: 0;
  }

  /* Shared green button */
  .kai-green-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #2ea84f; color: #fff; font-size: 15px; font-weight: 700;
    padding: 14px 32px; border-radius: 50px; text-decoration: none;
    max-width: 360px; margin: 0 auto; transition: background 0.2s;
  }
  .kai-green-btn:hover { background: #259042; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 640px) {
    .kai-hero { flex-direction: column; }
    .kai-hero-photos { flex: none; grid-template-columns: 1fr 1fr; }
    .kai-hero-photo { min-height: 120px; }
    .kai-hero-content { padding: 24px 20px; }
    .kai-hero-title { font-size: 26px; }
    .kai-hero-badge { width: 70px; height: 70px; top: 16px; right: 16px; }
    .kai-hero-badge .badge-big { font-size: 16px; }
    .kai-hero-badge .badge-small { font-size: 9px; }
    .kai-intro-card { flex-direction: column; padding: 20px; }
    .kai-intro-card-img { flex: none; width: 100%; height: 160px; }
    .kai-intro-main { font-size: 20px; }
    .kai-intro-card-title, .kai-intro-card-title-red { font-size: 17px; }
    .kai-str-item { flex-direction: column; padding: 20px; }
    .kai-str-visual { flex: none; width: 100%; justify-content: center; }
    .kai-strengths-header-main { font-size: 24px; }
    .kai-strengths-header-main .num { font-size: 34px; }
    .kai-flow-steps { flex-wrap: wrap; }
    .kai-flow-step { flex: 0 0 calc(50% - 4px); }
    .kai-flow-step:not(:last-child) .kai-flow-step-header::after { display: none; }
    .kai-points-grid { grid-template-columns: 1fr; }
    .kai-target-grid { grid-template-columns: repeat(3, 1fr); }
    .kai-examples-grid { grid-template-columns: 1fr; }
    .kai-faq-grid { grid-template-columns: 1fr; }
  }
`;

// Build the page
const kaitoriHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>不用品買取 | 不用品回収 クオーレ埼玉</title>
  <style>
${baseCSS}
${kaitoriCSS}
  </style>
</head>
<body>
${headerHTML}
  <!-- NOTICE BAR -->
  <div class="notice-bar">
    アース埼玉はクオーレ埼玉にサービス名称を変更しました！
  </div>

  <!-- HERO SECTION -->
  <div class="kai-hero">
    <div class="kai-hero-photos">
      <div class="kai-hero-photo"></div>
      <div class="kai-hero-photo"></div>
      <div class="kai-hero-photo"></div>
      <div class="kai-hero-photo"></div>
    </div>
    <div class="kai-hero-content">
      <div class="kai-hero-badge">
        <span class="badge-big">無料</span>
        <span class="badge-small">で<br>適正査定！</span>
      </div>
      <div class="kai-hero-title">不用品買取</div>
      <div class="kai-hero-desc">
        不用品回収中にまだ使用できる品物、中古市場で需要が高い品物を見つけた際はスタッフが買取査定をご提案する場合があります。ブランド品はもちろん、業務用機器や農機具など幅広い品目を査定し、買取金は利用料金から差し引きが可能です。
      </div>
      <div class="kai-hero-map">
        <svg viewBox="0 0 120 140" width="100" height="120" fill="none">
          <path d="M30 20 L50 10 L80 15 L100 30 L110 50 L105 75 L95 90 L80 110 L65 125 L50 120 L35 105 L20 85 L15 60 L20 40 Z" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- BREADCRUMB -->
  <div class="kai-breadcrumb" style="max-width:960px;margin:0 auto;padding:10px 0;background:transparent;">
    <a href="index.html">埼玉の不用品回収・粗大ゴミ処分業者クオーレ</a>
    <span>＞</span>
    <span>不用品買取</span>
  </div>

  <!-- INTRO SECTION -->
  <div class="kai-intro">
    <div class="kai-intro-inner">
      <div class="kai-intro-heading">
        <div class="kai-intro-sub">
          <span class="deco"></span>
          幅広い不用品の買取に対応
          <span class="deco"></span>
        </div>
        <div class="kai-intro-main">クオーレ埼玉なら<span class="hl">高価買取が可能</span>です！</div>
      </div>
      <div class="kai-intro-card">
        <div class="kai-intro-card-text">
          <div class="kai-intro-card-title">価値がある不用品を買取し</div>
          <div class="kai-intro-card-title-red">処分費用の削減が可能！</div>
          <div class="kai-intro-card-body">
            不用品はお気軽にしてしまうものですが、リユースとして市場で取引されることでゴミにするより人の価値が出る点もあります。<br>
            今や不用品買取はもっと身近な利用可能なサービスです。オフィスで使われている事務機器の需要も高く安い、お得で地球に優しい不用品買取をぜひお試しください。
          </div>
        </div>
        <div class="kai-intro-card-img">
          <svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
            <rect width="260" height="180" fill="#f0f7f0" rx="6"/>
            <!-- Staff with items -->
            <rect x="140" y="30" width="80" height="120" rx="4" fill="#e8e8e8"/>
            <rect x="145" y="35" width="70" height="50" rx="3" fill="#bdbdbd"/>
            <rect x="145" y="90" width="70" height="25" rx="2" fill="#ccc"/>
            <circle cx="80" cy="55" r="20" fill="#42a5f5"/>
            <rect x="60" y="75" width="40" height="50" rx="4" fill="#42a5f5"/>
            <rect x="55" y="125" width="20" height="30" rx="2" fill="#1565c0"/>
            <rect x="85" y="125" width="20" height="30" rx="2" fill="#1565c0"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- 3つの強み SECTION -->
  <div class="kai-strengths">
    <div class="kai-strengths-inner">
      <div class="kai-strengths-header">
        <div class="kai-strengths-header-sub">
          <span class="deco">＞</span>
          クオーレの買取サービス
          <span class="deco">＜</span>
        </div>
        <div class="kai-strengths-header-main">
          <span class="num">3</span>つの強み
        </div>
      </div>

      <div class="kai-staff-img">
        <svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="120" fill="transparent" rx="8"/>
          <circle cx="250" cy="40" r="25" fill="rgba(255,255,255,0.2)"/>
          <rect x="230" y="65" width="40" height="40" rx="4" fill="rgba(66,165,245,0.4)"/>
        </svg>
      </div>

      <!-- Strength 1 -->
      <div class="kai-str-item">
        <div class="kai-str-num">1</div>
        <div class="kai-str-content">
          <div class="kai-str-title">買取金額で<span class="hl">費用削減！</span></div>
          <div class="kai-str-body">
            回収が必要でも買取が不可能であっても不用品は必ずどこかに価値を持っています。回収だけでなく不用品買取サービスの利用料金のお支払い少しでもお安くするためにも、よりお得にお引き渡しをいたします。
          </div>
        </div>
        <div class="kai-str-visual">
          <div class="kai-diagram">
            <div class="kai-diagram-box">
              <div class="kai-diagram-icon green">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#2ea84f" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/><circle cx="12" cy="14" r="2"/></svg>
              </div>
              回収料金
            </div>
            <div class="kai-diagram-op">−</div>
            <div class="kai-diagram-box">
              <div class="kai-diagram-icon orange">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ff9800" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
              </div>
              買取金額
            </div>
            <div class="kai-diagram-op">＝</div>
            <div class="kai-diagram-box">
              <div class="kai-diagram-icon blue">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1976d2" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
              </div>
              <span style="color:#1976d2;font-weight:800;">実質負担</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Strength 2 -->
      <div class="kai-str-item">
        <div class="kai-str-num">2</div>
        <div class="kai-str-content">
          <div class="kai-str-title">高額買取に<span class="hl">挑戦中！</span></div>
          <div class="kai-str-body">
            高い買取金額が可能でできるように、不用品の価格だけではなく、最新の中古市場で需要がある中から交渉実績者が査定。不要品は大きな価値を持つ可能性がありますので、ぜひ他にもご比較ください。
          </div>
        </div>
        <div class="kai-str-visual">
          <div class="kai-compare">
            <div class="kai-compare-bar">
              <div class="kai-compare-label">クオーレ</div>
              <div class="bar" style="height:70px;background:#2ea84f;"></div>
            </div>
            <div class="kai-compare-bar">
              <div class="bar" style="height:45px;background:#ccc;"></div>
              A社
            </div>
            <div class="kai-compare-bar">
              <div class="bar" style="height:30px;background:#ccc;"></div>
              B社
            </div>
          </div>
        </div>
      </div>

      <!-- Strength 3 -->
      <div class="kai-str-item">
        <div class="kai-str-num">3</div>
        <div class="kai-str-content">
          <div class="kai-str-title">幅広い品目を<span class="hl">査定</span>します！</div>
          <div class="kai-str-body">
            当社が定額に対応している品目は幅広く、高級ブランド品だけでなく趣味の品まで、中古市場で需要がある限り幅広く高く、家具やスポーツ用品なども含め、お客様が思い付く不用品でも高額買取ができる可能性がございます。
          </div>
        </div>
        <div class="kai-str-visual">
          <div class="kai-items-visual">
            <div class="kai-item-circle">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#555" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 4v16"/><path d="M16 4v16"/></svg>
            </div>
            <div class="kai-item-circle">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#555" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div class="kai-item-circle">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#555" stroke-width="1.5"><rect x="4" y="8" width="16" height="12" rx="2"/><rect x="8" y="4" width="8" height="4" rx="1"/><circle cx="12" cy="16" r="2"/></svg>
            </div>
            <div class="kai-item-circle">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#555" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- 買取サービスの流れ -->
  <div class="kai-flow">
    <div class="kai-flow-inner">
      <div class="kai-flow-title">買取サービスの流れ</div>
      <div class="kai-flow-bar"></div>
      <div class="kai-flow-steps">
        <div class="kai-flow-step">
          <div class="kai-flow-step-header">STEP 01</div>
          <div class="kai-flow-step-img"><svg viewBox="0 0 100 90" width="100" height="90"><rect width="100" height="90" fill="#f5f5f5"/><rect x="25" y="15" width="50" height="35" rx="3" fill="#8d6e63"/><rect x="20" y="50" width="60" height="5" rx="1" fill="#795548"/><circle cx="50" cy="70" r="8" fill="#4caf50"/></svg></div>
          <div class="kai-flow-step-text">ご自宅へ訪問<br>無料お見積もり</div>
        </div>
        <div class="kai-flow-step">
          <div class="kai-flow-step-header">STEP 02</div>
          <div class="kai-flow-step-img"><svg viewBox="0 0 100 90" width="100" height="90"><rect width="100" height="90" fill="#f5f5f5"/><circle cx="35" cy="35" r="15" fill="#42a5f5"/><rect x="25" y="50" width="20" height="25" rx="3" fill="#42a5f5"/><rect x="55" y="20" width="30" height="40" rx="3" fill="#e0e0e0"/></svg></div>
          <div class="kai-flow-step-text">不用品を確認し<br>サービスを開始</div>
        </div>
        <div class="kai-flow-step">
          <div class="kai-flow-step-header">STEP 03</div>
          <div class="kai-flow-step-img"><svg viewBox="0 0 100 90" width="100" height="90"><rect width="100" height="90" fill="#f5f5f5"/><rect x="20" y="15" width="35" height="50" rx="3" fill="#fff" stroke="#ccc" stroke-width="1"/><line x1="26" y1="25" x2="49" y2="25" stroke="#ddd" stroke-width="2"/><line x1="26" y1="33" x2="49" y2="33" stroke="#ddd" stroke-width="2"/><circle cx="70" cy="40" r="15" fill="#42a5f5"/></svg></div>
          <div class="kai-flow-step-text">査定結果を説明<br>買取金額の提示</div>
        </div>
        <div class="kai-flow-step">
          <div class="kai-flow-step-header">STEP 04</div>
          <div class="kai-flow-step-img"><svg viewBox="0 0 100 90" width="100" height="90"><rect width="100" height="90" fill="#f5f5f5"/><rect x="30" y="20" width="40" height="45" rx="3" fill="#ffb74d"/><line x1="50" y1="20" x2="50" y2="65" stroke="#f57c00" stroke-width="1"/><circle cx="25" cy="35" r="10" fill="#42a5f5"/></svg></div>
          <div class="kai-flow-step-text">買取成立後は<br>対象品を搬出</div>
        </div>
        <div class="kai-flow-step">
          <div class="kai-flow-step-header">STEP 05</div>
          <div class="kai-flow-step-img"><svg viewBox="0 0 100 90" width="100" height="90"><rect width="100" height="90" fill="#f5f5f5"/><rect x="20" y="25" width="60" height="35" rx="4" fill="#4caf50"/><text x="50" y="48" font-family="Arial" font-size="16" font-weight="900" fill="#fff" text-anchor="middle">￥</text></svg></div>
          <div class="kai-flow-step-text">その場で精算<br>銀行振込も可能</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 高く売れるポイント -->
  <div class="kai-points">
    <div class="kai-points-inner">
      <div class="kai-points-title">高く売れるポイント</div>
      <div class="kai-points-bar"></div>
      <div class="kai-points-grid">
        <div class="kai-point-card">
          <div class="kai-point-img"><div class="kai-point-num">01</div><svg viewBox="0 0 200 140"><rect width="200" height="140" fill="#e8f5e9"/><circle cx="60" cy="60" r="25" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"/><rect x="110" y="40" width="60" height="50" rx="4" fill="#90caf9"/></svg></div>
          <div class="kai-point-body"><div class="kai-point-label">季節物</div><div class="kai-point-text">扇風機や暖房器具など季節に利用する不用品は特に注目されるため、需要が高まるシーズンより少し前に査定に出すと高い買取金額が期待できます。</div></div>
        </div>
        <div class="kai-point-card">
          <div class="kai-point-img img-b"><div class="kai-point-num">02</div><svg viewBox="0 0 200 140"><rect width="200" height="140" fill="#eceff1"/><rect x="60" y="30" width="80" height="60" rx="5" fill="#78909c"/><circle cx="100" cy="55" r="15" fill="#546e7a"/><circle cx="100" cy="55" r="5" fill="#b0bec5"/></svg></div>
          <div class="kai-point-body"><div class="kai-point-label">お品物の状態</div><div class="kai-point-text">品物の状態がよければ高額に査定するため、査定前にお手入れをしてホコリやカビなどご自身でお手入れをすることが高額買取のポイントになります。</div></div>
        </div>
        <div class="kai-point-card">
          <div class="kai-point-img img-c"><div class="kai-point-num">03</div><svg viewBox="0 0 200 140"><rect width="200" height="140" fill="#f1f8e9"/><rect x="60" y="20" width="80" height="90" rx="8" fill="#333"/><rect x="65" y="25" width="70" height="40" rx="3" fill="#555"/><circle cx="100" cy="85" r="12" fill="#444" stroke="#666" stroke-width="2"/></svg></div>
          <div class="kai-point-body"><div class="kai-point-label">付属品を揃えておく</div><div class="kai-point-text">購入した時の外箱に加えて全ての付属部品が揃っているか、家電製品であれば保証書などが付属しているか確認おかげで査定にプラスになります。</div></div>
        </div>
        <div class="kai-point-card">
          <div class="kai-point-img img-d"><div class="kai-point-num">04</div><svg viewBox="0 0 200 140"><rect width="200" height="140" fill="#efebe9"/><rect x="40" y="30" width="50" height="70" rx="4" fill="#8d6e63"/><circle cx="140" cy="60" r="25" fill="#bcaaa4"/><circle cx="140" cy="60" r="10" fill="#8d6e63"/></svg></div>
          <div class="kai-point-body"><div class="kai-point-label">非売品</div><div class="kai-point-text">市場に流通していない限定品などでは希少価値が高く、コレクターなどの間では高値で取引されることがあるため高い査定額がつく可能性がございます。</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 買取対象品目 -->
  <div class="kai-target">
    <div class="kai-target-inner">
      <div class="kai-target-title">買取対象品目</div>
      <div class="kai-target-bar"></div>
      <div class="kai-target-grid">
        <div class="kai-target-card"><div class="kai-target-card-label">パソコン類</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="5" y="5" width="50" height="30" rx="3" fill="#ccc"/><rect x="10" y="8" width="40" height="22" rx="2" fill="#e3f2fd"/><rect x="20" y="38" width="20" height="4" rx="1" fill="#bbb"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">家電製品</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="10" y="5" width="20" height="35" rx="3" fill="#78909c"/><rect x="35" y="15" width="18" height="25" rx="2" fill="#90a4ae"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">ブランド家具類</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="8" y="15" width="44" height="22" rx="4" fill="#42a5f5"/><rect x="5" y="37" width="4" height="8" rx="1" fill="#1565c0"/><rect x="51" y="37" width="4" height="8" rx="1" fill="#1565c0"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">ゲーム類</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="10" y="10" width="40" height="28" rx="3" fill="#333"/><circle cx="42" cy="20" r="3" fill="#4caf50"/><circle cx="48" cy="26" r="3" fill="#f44336"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">ブランド類</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><path d="M15 15 L30 5 L45 15 L45 40 L15 40 Z" fill="#f5f5f5" stroke="#bbb" stroke-width="1"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">貴金属</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><circle cx="30" cy="22" r="12" fill="none" stroke="#ffd700" stroke-width="3"/><circle cx="20" cy="38" r="5" fill="#ffd700"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">骨董品</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><path d="M20 40 Q20 15 30 10 Q40 15 40 40 Z" fill="#8d6e63"/><ellipse cx="30" cy="10" rx="8" ry="3" fill="#795548"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">楽器類</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><ellipse cx="22" cy="35" rx="12" ry="8" fill="#ff9800"/><rect x="32" y="8" width="3" height="30" rx="1" fill="#795548"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">車両・バイク</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="10" y="20" width="35" height="12" rx="3" fill="#ef5350"/><circle cx="18" cy="36" r="6" fill="#333"/><circle cx="38" cy="36" r="6" fill="#333"/></svg></div></div>
        <div class="kai-target-card"><div class="kai-target-card-label">農具・工具</div><div class="kai-target-card-img"><svg viewBox="0 0 60 50" width="50" height="42"><rect x="15" y="10" width="8" height="30" rx="2" fill="#8bc34a"/><rect x="35" y="15" width="15" height="20" rx="2" fill="#ff9800"/></svg></div></div>
      </div>
      <a href="items.html" class="kai-target-btn">買取対象品目一覧 <span>›</span></a>
    </div>
  </div>

  <!-- 買取事例のご紹介 -->
  <div class="kai-examples">
    <div class="kai-examples-inner">
      <div class="kai-examples-title">買取事例のご紹介</div>
      <div class="kai-examples-bar"></div>
      <div class="kai-examples-grid">
        <div class="kai-ex-card">
          <div class="kai-ex-img"><svg viewBox="0 0 180 140"><rect width="180" height="140" fill="#e8e8e8"/><ellipse cx="70" cy="90" rx="35" ry="20" fill="#ff9800"/><rect x="95" y="20" width="5" height="75" rx="1" fill="#795548"/><rect x="100" y="50" width="50" height="35" rx="4" fill="#333"/></svg></div>
          <div class="kai-ex-body"><div class="kai-ex-name">ジーストリング ウクレレ<br>GString ハードケース</div><div class="kai-ex-price"><span class="kai-ex-price-badge">買取価格</span><span class="kai-ex-price-amount">18,000円</span></div></div>
        </div>
        <div class="kai-ex-card">
          <div class="kai-ex-img img-b"><svg viewBox="0 0 180 140"><rect width="180" height="140" fill="#fff3e0"/><rect x="30" y="15" width="55" height="80" rx="3" fill="#fff" stroke="#ddd"/><rect x="95" y="25" width="55" height="80" rx="3" fill="#fff" stroke="#ddd"/></svg></div>
          <div class="kai-ex-body"><div class="kai-ex-name">少年ジャンプ<br>1985 1月29日号 / ほか4点</div><div class="kai-ex-price"><span class="kai-ex-price-badge">買取価格</span><span class="kai-ex-price-amount">5,050円</span></div></div>
        </div>
        <div class="kai-ex-card">
          <div class="kai-ex-img img-c"><svg viewBox="0 0 180 140"><rect width="180" height="140" fill="#efebe9"/><rect x="50" y="15" width="60" height="80" rx="6" fill="#bdbdbd"/><rect x="55" y="20" width="50" height="40" rx="3" fill="#e0e0e0"/><circle cx="80" cy="80" r="8" fill="#9e9e9e"/></svg></div>
          <div class="kai-ex-body"><div class="kai-ex-name">初代ゲームボーイ<br>本体 箱付き</div><div class="kai-ex-price"><span class="kai-ex-price-badge">買取価格</span><span class="kai-ex-price-amount">1,000円</span></div></div>
        </div>
      </div>
      <a href="#" class="kai-green-btn">買取事例一覧 <span>›</span></a>
    </div>
  </div>

  <!-- よくあるご質問 -->
  <div class="kai-faq">
    <div class="kai-faq-inner">
      <div class="kai-faq-title">よくあるご質問</div>
      <div class="kai-faq-bar"></div>
      <div class="kai-faq-grid">
        <div class="kai-faq-card">
          <div class="kai-faq-q"><span class="q-icon">Q</span>買取できない品物はありますか？</div>
          <div class="kai-faq-a"><span class="a-icon">A</span>お問い物や盗品の疑いがあるものは査定できませんが、あらゆる品物が査定対象です。</div>
        </div>
        <div class="kai-faq-card">
          <div class="kai-faq-q"><span class="q-icon">Q</span>エアコンの査定はできますか？</div>
          <div class="kai-faq-a"><span class="a-icon">A</span>エアコンなどの家庭の回収も対象です。取扱い等は取り外しも対応でやっています。</div>
        </div>
        <div class="kai-faq-card">
          <div class="kai-faq-q"><span class="q-icon">Q</span>ブランド品以外も査定可能？</div>
          <div class="kai-faq-a"><span class="a-icon">A</span>ブランド品であるかにかかわらず、当社では幅広い種類の品目を査定に応じます。</div>
        </div>
        <div class="kai-faq-card">
          <div class="kai-faq-q"><span class="q-icon">Q</span>状態が悪くても大丈夫ですか？</div>
          <div class="kai-faq-a"><span class="a-icon">A</span>傷や汚れがある中古品でも、中古市場で需要が高い場合であれば買取可能です。</div>
        </div>
      </div>
      <a href="#" class="kai-green-btn">よくあるご質問一覧 <span>›</span></a>
    </div>
  </div>

  <!-- サービス一覧 (reuse from items) -->
  <div class="items-services-section" style="background:#edf7ed;">
    <div class="items-services-inner" style="max-width:960px;margin:0 auto;">
      <div style="text-align:center;font-size:24px;font-weight:900;color:#1a1a1a;margin-bottom:10px;">サービス一覧</div>
      <div style="width:40px;height:3px;background:#2ea84f;border-radius:2px;margin:0 auto 32px;"></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;transition:box-shadow 0.2s;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="8" y="12" width="32" height="28" rx="4"/><path d="M16 12V8a8 8 0 0 1 16 0v4"/><circle cx="24" cy="26" r="4"/></svg><span style="font-size:13px;font-weight:700;color:#333;">不用品回収</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="4" y="18" width="40" height="22" rx="4"/><path d="M10 18v-4a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v4"/><rect x="14" y="26" width="6" height="6" rx="1"/><rect x="28" y="26" width="6" height="6" rx="1"/></svg><span style="font-size:13px;font-weight:700;color:#333;">粗大ゴミ処分</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="6" y="8" width="36" height="34" rx="3"/><line x1="14" y1="8" x2="14" y2="42"/><line x1="34" y1="8" x2="34" y2="42"/><line x1="6" y1="24" x2="42" y2="24"/></svg><span style="font-size:13px;font-weight:700;color:#333;">家具回収</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="6" y="10" width="36" height="28" rx="3"/><rect x="16" y="6" width="16" height="6" rx="2"/><circle cx="24" cy="28" r="6"/><circle cx="24" cy="28" r="2" fill="#2ea84f"/></svg><span style="font-size:13px;font-weight:700;color:#333;">家電回収</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="4" y="20" width="28" height="16" rx="3"/><path d="M32 28h6a4 4 0 0 1 4 4v6H32"/><circle cx="12" cy="40" r="4" fill="#2ea84f" stroke="#fff"/><circle cx="30" cy="40" r="4" fill="#2ea84f" stroke="#fff"/></svg><span style="font-size:13px;font-weight:700;color:#333;">廃品回収</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="kaitori.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><circle cx="24" cy="20" r="10"/><path d="M16 34h16v6H16z"/><path d="M20 20l4-4 4 4"/><line x1="24" y1="16" x2="24" y2="28"/></svg><span style="font-size:13px;font-weight:700;color:#333;">不用品買取</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><path d="M14 40V14l10-8 10 8v26"/><rect x="20" y="28" width="8" height="12"/><line x1="10" y1="40" x2="38" y2="40"/></svg><span style="font-size:13px;font-weight:700;color:#333;">引越しサポート</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
        <a href="service.html" style="background:#fff;border:1px solid #e0e0e0;border-radius:10px;padding:24px 16px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-decoration:none;position:relative;overflow:hidden;"><svg viewBox="0 0 48 48" fill="none" stroke="#2ea84f" stroke-width="2" width="40" height="40"><rect x="6" y="10" width="36" height="30" rx="3"/><path d="M6 20h36"/><path d="M16 20v20"/><path d="M32 20v20"/></svg><span style="font-size:13px;font-weight:700;color:#333;">ゴミ屋敷片付け</span><span style="position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 20px 20px;border-color:transparent transparent #2ea84f transparent;"></span></a>
      </div>
    </div>
  </div>

  ${areaHTML}

  ${contactHTML}

  <!-- FOOTER -->
  ${footerHTML}

</div>
</body>
</html>`;

let finalHTML = kaitoriHTML;

// Fix nav link for this page
finalHTML = finalHTML.replace(
  '<a href="#" onclick="closeMenu()">不用品買取</a>',
  '<a href="kaitori.html" onclick="closeMenu()" style="background:#f0faf2;color:#2b9e3a;font-weight:700;">不用品買取</a>'
);

// Remove duplicate notice bar
const noticeCount = (finalHTML.match(/class="notice-bar"/g) || []).length;
if (noticeCount > 1) {
  const firstNotice = finalHTML.indexOf('class="notice-bar"');
  const secondNotice = finalHTML.indexOf('class="notice-bar"', firstNotice + 1);
  if (secondNotice > 0) {
    const divStart = finalHTML.lastIndexOf('<div', secondNotice);
    const divEnd = finalHTML.indexOf('</div>', secondNotice) + 6;
    finalHTML = finalHTML.substring(0, divStart) + finalHTML.substring(divEnd);
  }
}

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/kaitori.html', finalHTML, 'utf8');
console.log('kaitori.html created successfully!');
console.log('File size:', (finalHTML.length / 1024).toFixed(1) + ' KB');
