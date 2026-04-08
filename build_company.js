const fs = require('fs');

const service = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/service.html', 'utf8');
const items = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/items.html', 'utf8');

// Extract shared parts
const bodyStart = service.indexOf('<body>');
const heroStart = service.indexOf('<!-- PAGE HERO -->');
const headerHTML = service.substring(bodyStart + 6, heroStart);

const footerStart = service.indexOf('<footer');
const footerEnd = service.indexOf('</body>');
const footerHTML = service.substring(footerStart, footerEnd);

const styleStart = service.indexOf('<style>');
const styleEnd = service.indexOf('</style>');
const baseCSS = service.substring(styleStart + 7, styleEnd);

// Extract area + contact from items
const areaStart = items.indexOf('<!-- SERVICE AREA SECTION -->');
const areaEnd = items.indexOf('<!-- CONTACT STRIP -->');
const areaHTML = items.substring(areaStart, areaEnd);
const contactStripStart = items.indexOf('<!-- CONTACT STRIP -->');
const contactEnd = items.indexOf('<!-- FOOTER -->');
const contactHTML = items.substring(contactStripStart, contactEnd);

const companyCSS = `
  /* ===== COMPANY PAGE ===== */
  .co-hero {
    background: linear-gradient(135deg, rgba(26,110,46,0.92) 0%, rgba(46,168,79,0.88) 60%, rgba(67,199,100,0.85) 100%);
    padding: 40px 20px;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .co-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200"><rect fill="%231a6e2e" width="1200" height="200"/><rect fill="%23228b3a" x="0" y="0" width="200" height="200" opacity="0.3"/><rect fill="%23228b3a" x="250" y="0" width="150" height="200" opacity="0.2"/><rect fill="%23228b3a" x="500" y="0" width="200" height="200" opacity="0.15"/><rect fill="%23228b3a" x="800" y="0" width="180" height="200" opacity="0.25"/><rect fill="%23228b3a" x="1050" y="0" width="150" height="200" opacity="0.2"/></svg>') center/cover;
    opacity: 0.3;
  }
  .co-hero-inner { max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
  .co-hero-title { font-size: 32px; font-weight: 900; letter-spacing: 0.08em; }

  .co-breadcrumb {
    background: #fff; padding: 10px 20px; font-size: 12px; color: #666;
    display: flex; align-items: center; gap: 6px;
  }
  .co-breadcrumb a { color: #2ea84f; text-decoration: none; }
  .co-breadcrumb a:hover { text-decoration: underline; }

  /* ===== ご挨拶 SECTION ===== */
  .co-greeting {
    background: #fff;
    padding: 60px 20px 70px;
  }
  .co-greeting-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .co-greeting-title {
    text-align: center;
    font-size: 28px;
    font-weight: 900;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  .co-greeting-bar {
    width: 40px;
    height: 3px;
    background: #2ea84f;
    border-radius: 2px;
    margin: 0 auto 36px;
  }
  .co-greeting-content {
    display: flex;
    align-items: flex-start;
    gap: 36px;
  }
  .co-greeting-text {
    flex: 1;
    min-width: 0;
  }
  .co-greeting-heading {
    font-size: 22px;
    font-weight: 900;
    color: #1a1a1a;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  .co-greeting-heading .hl {
    color: #2ea84f;
  }
  .co-greeting-body {
    font-size: 14px;
    color: #444;
    line-height: 2;
  }
  .co-greeting-img {
    flex: 0 0 340px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== 会社概要 TABLE ===== */
  .co-info {
    background: #edf7ed;
    padding: 50px 20px 60px;
  }
  .co-info-inner { max-width: 960px; margin: 0 auto; }
  .co-info-title {
    text-align: center; font-size: 28px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;
  }
  .co-info-bar { width: 40px; height: 3px; background: #2ea84f; border-radius: 2px; margin: 0 auto 32px; }
  .co-table {
    width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #ddd; margin-bottom: 40px;
  }
  .co-table tr { border-bottom: 1px solid #ddd; }
  .co-table tr:last-child { border-bottom: none; }
  .co-table th {
    background: #2ea84f; color: #fff; font-size: 13px; font-weight: 700;
    padding: 14px 16px; text-align: left; width: 160px; vertical-align: top;
    border-right: 1px solid rgba(255,255,255,0.2);
  }
  .co-table td {
    font-size: 13px; color: #333; padding: 14px 16px; line-height: 1.7; vertical-align: top;
  }
  .co-table td a { color: #2ea84f; }
  .co-map-embed {
    width: 100%; max-width: 400px; height: 180px;
    background: #e8e8e8; border-radius: 6px; margin-top: 8px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  /* 各種許可証 */
  .co-license { margin-bottom: 40px; }
  .co-license-header {
    background: #2ea84f; color: #fff; font-size: 14px; font-weight: 700;
    padding: 8px 16px; margin-bottom: 12px;
  }
  .co-license-body {
    font-size: 13px; color: #333; line-height: 1.9; padding: 0 16px 16px;
  }
  .co-license-sub {
    background: #2ea84f; color: #fff; font-size: 12px; font-weight: 700;
    padding: 5px 12px; margin: 16px 0 8px; display: inline-block;
  }

  /* SDGs, インボイス, 関連サイト */
  .co-sdgs-row, .co-sites-row {
    display: flex; align-items: flex-start; border-bottom: 1px solid #ddd; background: #fff;
  }
  .co-sdgs-label, .co-sites-label {
    background: #2ea84f; color: #fff; font-size: 13px; font-weight: 700;
    padding: 14px 16px; width: 160px; flex-shrink: 0;
  }
  .co-sdgs-content, .co-sites-content {
    flex: 1; padding: 14px 16px; font-size: 13px; color: #333; line-height: 1.7;
  }
  .co-sites-grid {
    display: flex; flex-wrap: wrap; gap: 10px;
  }
  .co-site-badge {
    background: #f5f5f5; border: 1px solid #ddd; border-radius: 6px;
    padding: 8px 14px; font-size: 12px; font-weight: 700; color: #2ea84f;
    text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
  }
  .co-site-badge:hover { background: #e8f5e9; }
  .co-partner-grid {
    display: flex; flex-wrap: wrap; gap: 10px;
  }
  .co-partner-card {
    background: #fff; border: 1px solid #ddd; border-radius: 6px;
    padding: 10px 16px; font-size: 13px; font-weight: 700; color: #333;
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .co-hero-title { font-size: 24px; }
    .co-greeting-content { flex-direction: column; }
    .co-greeting-img { flex: none; width: 100%; }
    .co-greeting-heading { font-size: 18px; }
    .co-greeting-body { font-size: 13px; }
    .co-table th { width: 110px; font-size: 11px; padding: 10px 8px; }
    .co-table td { font-size: 12px; padding: 10px 8px; }
    .co-sdgs-row, .co-sites-row { flex-direction: column; }
    .co-sdgs-label, .co-sites-label { width: 100%; }
  }
`;

const companyHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>会社概要 | 不用品回収 クオーレ埼玉</title>
  <style>
${baseCSS}
${companyCSS}
  </style>
</head>
<body>
${headerHTML}
  <!-- NOTICE BAR -->
  <div class="notice-bar">
    アース埼玉はクオーレ埼玉にサービス名称を変更しました！
  </div>

  <!-- PAGE HERO -->
  <div class="co-hero">
    <div class="co-hero-inner">
      <div class="co-hero-title">会社概要</div>
    </div>
  </div>

  <!-- BREADCRUMB -->
  <div class="co-breadcrumb" style="max-width:960px;margin:0 auto;padding:10px 0;background:transparent;">
    <a href="index.html">埼玉の不用品回収・粗大ゴミ処分業者クオーレ</a>
    <span>＞</span>
    <span>会社概要</span>
  </div>

  <!-- ご挨拶 SECTION -->
  <div class="co-greeting">
    <div class="co-greeting-inner">
      <div class="co-greeting-title">ご挨拶</div>
      <div class="co-greeting-bar"></div>
      <div class="co-greeting-content">
        <div class="co-greeting-text">
          <div class="co-greeting-heading">
            <span class="hl">不用品回収クオーレ埼玉</span>のホームページをご覧いただきありがとうございます
          </div>
          <div class="co-greeting-body">
            不用品処分は引越しや遺品整理、空き家整理などあらゆる状況下で必要になるため、ご依頼くださるお客様の事情やご要望も千差万別です。すべてのお客様にご満足いただくため、不用品をただ回収するのではなく、お客様お一人おひとりのお悩みに耳を傾け、心に寄り添って作業することが重要だと当社は考えています。目の前のお客様に喜んでいただくために尽力するのはもちろん、社会の一端を担う企業としても、長期的な環境保全や福祉活動に積極的に取り組み、社会貢献に努めています。これからもたくさんの皆様に信頼され、必要とされるような企業であり続けるよう精進していきます。
          </div>
        </div>
        <div class="co-greeting-img">
          <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="340" height="260" fill="#f5f9f5" rx="8"/>
            <!-- Truck -->
            <rect x="120" y="100" width="150" height="80" rx="6" fill="#e0e0e0"/>
            <rect x="230" y="80" width="60" height="60" rx="4" fill="#bdbdbd"/>
            <rect x="235" y="85" width="50" height="35" rx="3" fill="#e3f2fd"/>
            <circle cx="155" cy="190" r="14" fill="#333" stroke="#666" stroke-width="3"/>
            <circle cx="260" cy="190" r="14" fill="#333" stroke="#666" stroke-width="3"/>
            <!-- Items -->
            <rect x="30" y="140" width="70" height="50" rx="3" fill="#ffb74d"/>
            <line x1="65" y1="140" x2="65" y2="190" stroke="#f57c00" stroke-width="1"/>
            <rect x="50" y="110" width="40" height="35" rx="3" fill="#a5d6a7"/>
            <rect x="20" y="120" width="25" height="30" rx="2" fill="#90caf9"/>
            <!-- Decorative circles -->
            <circle cx="280" cy="60" r="18" fill="#2ea84f" opacity="0.3"/>
            <circle cx="310" cy="80" r="10" fill="#42a5f5" opacity="0.4"/>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- 会社概要 TABLE -->
  <div class="co-info">
    <div class="co-info-inner">
      <div class="co-info-title">会社概要</div>
      <div class="co-info-bar"></div>

      <table class="co-table">
        <tr><th>会社名</th><td>株式会社 クオーレ</td></tr>
        <tr><th>運営サイト</th><td>不用品回収クオーレ埼玉(アース埼玉)</td></tr>
        <tr><th>代表取締役</th><td>竹本良正</td></tr>
        <tr><th>資本金</th><td>5,000万円</td></tr>
        <tr><th>連絡先</th><td>〒339-0072 埼玉県さいたま市岩槻区古ヶ場1-1-18-2F<div class="co-map-embed"><svg viewBox="0 0 400 180" width="400" height="180"><rect width="400" height="180" fill="#e8f5e9" rx="4"/><rect x="20" y="20" width="360" height="140" fill="#fff" stroke="#ccc" rx="4"/><text x="200" y="95" font-family="Arial" font-size="14" fill="#999" text-anchor="middle">Google Maps</text><circle cx="200" cy="70" r="8" fill="#e53935"/><path d="M200 78 L200 62 Q200 55 207 55" fill="none" stroke="#e53935" stroke-width="2"/></svg></div></td></tr>
        <tr><th>TEL</th><td>0120-996-638</td></tr>
        <tr><th>URL</th><td><a href="#">https://www.fuyouhinkaishuu-saitama.com/</a></td></tr>
        <tr><th>メール</th><td>お問い合わせは、<a href="#">メールフォーム</a>よりご連絡ください。</td></tr>
        <tr><th>社員数</th><td>20名</td></tr>
        <tr><th>事業内容</th><td>家具、バイク、農機具、家具、綺麗機器、オフィス用品などの回収不用品の対応、遺品整理、バイク回収、オフィス用品の売りなど</td></tr>
        <tr><th>対応エリア</th><td>埼玉全域</td></tr>
        <tr><th>損保加入先</th><td>西濃 西中山区計済共済共</td></tr>
      </table>

      <!-- 各種許可証 -->
      <div class="co-license">
        <div class="co-license-header">各種許可証</div>
        <div class="co-license-body">
          <div class="co-license-sub">産業廃棄物収集運搬業許可証</div>
          <div>
            埼玉県　第01100166157号<br>
            東京都　第13-00-166157号<br>
            神奈川県　第01407166157号<br>
            千葉県　第01200166157号<br>
            熊本県　第00300166157号<br>
            静岡県　第02200166157号<br>
            岐阜県　第02100166157号<br>
            愛知県　第02300166157号
          </div>

          <div class="co-license-sub">一般廃棄物収集運搬業許可証</div>
          <div>
            [さいたま市] さいたま市長 東京都民2号 第3009号<br>
            本芝市 第25-12号
          </div>

          <div class="co-license-sub">医療リサイクル等システム場の回収等</div>
          <div>
            総本支店　第2232-5007-9639号<br>
            横浜支店　第2232-5007-9660号<br>
            千葉支店　第2232-5008-2232号<br>
            名古屋支店　第2232-5007-0615号<br>
            鳥本支店　第2232-5008-6714号<br>
            西東京支店　第2232-5608-6715号<br>
            静岡支店　第2232-5008-6716号<br>
            横岡支店　第2232-5008-6717号<br>
            宇都支店　第2232-5008-6718号
          </div>

          <div class="co-license-sub">古物商許可番号</div>
          <div>54173110800号</div>

          <div class="co-license-sub">賠償損害士</div>
          <div>
            一般社団法人 個品管理士認定協会<br>
            一般社団法人 個品管理士認定協会認定 家庭地場得点保険保持士
          </div>

          <div class="co-license-sub">宅地建物取引業</div>
          <div>変割相知事(1) 第24518号</div>

          <div class="co-license-sub">解体工事業番号</div>
          <div>変割相知事(P-30) 第937号</div>

          <div class="co-license-sub">生活相談士</div>
          <div>
            一般社団法人 不用品管理界共催協会認定作業士<br>
            一般社団法人 不用品管理界共催協会2種法定副部長
          </div>

          <div class="co-license-sub">家計管理士</div>
          <div>一般社団法人 草リス管理士協会</div>

          <div class="co-license-sub">機関理相士</div>
          <div>一般社団法人 商品買取義会</div>

          <div class="co-license-sub">資格保有者あり</div>
        </div>
      </div>

      <!-- SDGs -->
      <div class="co-sdgs-row">
        <div class="co-sdgs-label">SDGs取組</div>
        <div class="co-sdgs-content">
          <svg viewBox="0 0 300 120" width="280" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="120" fill="#fff" rx="6"/>
            <circle cx="40" cy="40" r="20" fill="#4caf50"/>
            <text x="40" y="45" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">SDGs</text>
            <text x="80" y="35" font-family="Arial" font-size="11" fill="#333">クオーレは持続可能な</text>
            <text x="80" y="52" font-family="Arial" font-size="11" fill="#333">開発目標に取り組んでいます</text>
            <rect x="20" y="75" width="24" height="24" rx="2" fill="#e5243b"/>
            <rect x="50" y="75" width="24" height="24" rx="2" fill="#dda63a"/>
            <rect x="80" y="75" width="24" height="24" rx="2" fill="#4c9f38"/>
            <rect x="110" y="75" width="24" height="24" rx="2" fill="#c5192d"/>
            <rect x="140" y="75" width="24" height="24" rx="2" fill="#ff3a21"/>
            <rect x="170" y="75" width="24" height="24" rx="2" fill="#26bde2"/>
            <rect x="200" y="75" width="24" height="24" rx="2" fill="#fcc30b"/>
          </svg>
        </div>
      </div>

      <!-- インボイス -->
      <div class="co-sdgs-row">
        <div class="co-sdgs-label">インボイス登録事業者番号</div>
        <div class="co-sdgs-content">T3-1800-0110-0490</div>
      </div>

      <!-- 関連サイト -->
      <div class="co-sdgs-row">
        <div class="co-sdgs-label">関連サイト</div>
        <div class="co-sdgs-content">
          <div class="co-sites-grid">
            <span class="co-site-badge">クオーレ 埼玉</span>
            <span class="co-site-badge">クオーレ 東京</span>
            <span class="co-site-badge">クオーレ 千葉</span>
            <span class="co-site-badge">クオーレ 神奈川</span>
            <span class="co-site-badge">クオーレ 静岡</span>
            <span class="co-site-badge">クオーレ 名古屋</span>
            <span class="co-site-badge">クオーレ 岐阜</span>
            <span class="co-site-badge">クオーレ 熊本</span>
            <span class="co-site-badge">クオーレ 大分</span>
            <span class="co-site-badge">クオーレ 宮崎</span>
            <span class="co-site-badge">クオーレ 鹿児島</span>
          </div>
        </div>
      </div>

      <!-- お勧めサイト -->
      <div class="co-sdgs-row" style="border-bottom:none;">
        <div class="co-sdgs-label">お勧めサイト</div>
        <div class="co-sdgs-content">
          <div class="co-partner-grid">
            <span class="co-partner-card">Progress</span>
            <span class="co-partner-card">不用品回収プログレス</span>
            <span class="co-partner-card">CUORE:</span>
            <span class="co-partner-card">七福神</span>
            <span class="co-partner-card">クリエル</span>
          </div>
        </div>
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

let finalHTML = companyHTML;

// Fix nav link
finalHTML = finalHTML.replace(
  '<a href="#" onclick="closeMenu()">会社概要</a>',
  '<a href="company.html" onclick="closeMenu()" style="background:#f0faf2;color:#2b9e3a;font-weight:700;">会社概要</a>'
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

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/VC.GROUP/company.html', finalHTML, 'utf8');
console.log('company.html created successfully!');
console.log('File size:', (finalHTML.length / 1024).toFixed(1) + ' KB');
