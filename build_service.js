const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/index.html','utf8');
const lines = content.split('\n');

const cssBlock = lines.slice(0, 2585).join('\n');
const headerBlock = lines.slice(2589, 2715).join('\n');

const pageCSS = `
  /* ===== SERVICE PAGE ===== */
  .sv-hero {
    background: linear-gradient(135deg, #1a6e2e 0%, #2ea84f 60%, #43c764 100%);
    padding: 40px 20px;
    text-align: center;
    color: #fff;
  }
  .sv-hero-inner { max-width: 960px; margin: 0 auto; }
  .sv-hero-small { font-size: 13px; color: rgba(255,255,255,0.85); margin-bottom: 8px; letter-spacing: 0.05em; }
  .sv-hero-title { font-size: 32px; font-weight: 900; letter-spacing: 0.08em; }
  .sv-breadcrumb {
    background: #f5f5f5;
    padding: 10px 20px;
    font-size: 12px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid #e5e5e5;
  }
  .sv-breadcrumb a { color: #2ea84f; text-decoration: none; }
  .sv-content { max-width: 960px; margin: 0 auto; padding: 40px 20px 60px; }
`;

const bodyContent = `
<body>
<div id="page-wrapper">

` + headerBlock + `

  <!-- PAGE HERO -->
  <div class="sv-hero">
    <div class="sv-hero-inner">
      <div class="sv-hero-small">不用品回収クオーレ埼玉の</div>
      <div class="sv-hero-title">サービス一覧</div>
    </div>
  </div>

  <!-- BREADCRUMB -->
  <div class="sv-breadcrumb">
    <a href="index.html">トップ</a>
    <span>›</span>
    <span>サービス一覧</span>
  </div>

  <!-- CONTENT -->
  <div class="sv-content">
    <p style="text-align:center;color:#666;padding:60px 0;">コンテンツを作成中...</p>
  </div>

</div>
</body>
</html>
`;

const finalHtml = cssBlock.replace('</style>', pageCSS + '\n</style>') + bodyContent;
fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html', finalHtml);
console.log('Done! Lines:', finalHtml.split('\n').length);
