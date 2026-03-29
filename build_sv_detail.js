const fs = require('fs');
let html = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html','utf8');

const css = `
  /* ===== SERVICE DETAIL SECTION ===== */
  .svd-section {
    background: #fff;
    padding: 60px 20px 80px;
  }
  .svd-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .svd-row {
    display: flex;
    align-items: center;
    gap: 48px;
    padding: 40px 0;
    border-bottom: 1px solid #e8e8e8;
  }
  .svd-row:first-child { padding-top: 0; }
  .svd-row:last-child { border-bottom: none; }
  /* Even rows: reverse */
  .svd-row.reverse { flex-direction: row-reverse; }

  .svd-img {
    flex: 0 0 300px;
    height: 210px;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(135deg, #a5d6a7 0%, #c8e6c9 50%, #81c784 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .svd-img.img2 { background: linear-gradient(135deg, #80cbc4 0%, #b2dfdb 50%, #4db6ac 100%); }
  .svd-img.img3 { background: linear-gradient(135deg, #a5d6a7 0%, #dcedc8 50%, #aed581 100%); }
  .svd-img.img4 { background: linear-gradient(135deg, #90caf9 0%, #bbdefb 50%, #64b5f6 100%); }
  .svd-img.img5 { background: linear-gradient(135deg, #ffcc80 0%, #ffe0b2 50%, #ffa726 100%); }
  .svd-img.img6 { background: linear-gradient(135deg, #ce93d8 0%, #f3e5f5 50%, #ba68c8 100%); }
  .svd-img.img7 { background: linear-gradient(135deg, #ef9a9a 0%, #ffcdd2 50%, #e57373 100%); }

  .svd-content { flex: 1; min-width: 0; }
  .svd-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 800;
    color: #1a9080;
    margin-bottom: 14px;
  }
  .svd-title svg { flex-shrink: 0; }
  .svd-text {
    font-size: 13px;
    color: #444;
    line-height: 1.85;
    margin-bottom: 20px;
  }
  .svd-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #3abdb0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 24px;
    border-radius: 50px;
    text-decoration: none;
    transition: background 0.2s;
    min-width: 160px;
    justify-content: center;
  }
  .svd-btn:hover { background: #2ea898; }
  .svd-btn-arrow { font-size: 16px; }

  @media (max-width: 640px) {
    .svd-row, .svd-row.reverse { flex-direction: column !important; gap: 20px; padding: 28px 0; }
    .svd-img { flex: none !important; width: 100% !important; height: 180px; }
    .svd-title { font-size: 17px; }
    .svd-btn { width: 100%; }
  }
`;

const section = `
  <!-- SERVICE DETAIL SECTION -->
  <div class="svd-section">
    <div class="svd-inner">

      <!-- 1. 不用品回収 -->
      <div class="svd-row">
        <div class="svd-img">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="10" y="10" width="60" height="40" rx="4"/><path d="M20 10V6h40v4"/><circle cx="40" cy="30" r="10"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="3" y="5" width="14" height="12" rx="2"/><path d="M7 5V4a3 3 0 0 1 6 0v1"/><circle cx="10" cy="11" r="2"/></svg>
            不用品回収
          </div>
          <p class="svd-text">大量廃棄や整理整頓で発生する不用品から溢れてしまった直後まで、様々な場面での不用品回収を行っております。大量中や中程度の引越労力なく手早く不要な不用品の整理ができるなど、一般の方だけではなかなか分からない不用品の処分方法も都度ご提案いたします。</p>
          <a href="#" class="svd-btn">不用品回収 <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 2. 粗大ゴミ処分 -->
      <div class="svd-row reverse">
        <div class="svd-img img2">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="8" y="18" width="64" height="32" rx="4"/><path d="M18 18V14a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v4"/><rect x="24" y="28" width="10" height="10" rx="1"/><rect x="46" y="28" width="10" height="10" rx="1"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="2" y="8" width="16" height="10" rx="2"/><path d="M6 8V6a4 4 0 0 1 8 0v2"/><line x1="10" y1="11" x2="10" y2="15"/></svg>
            粗大ゴミ処分
          </div>
          <p class="svd-text">粗大ゴミを処分するためには二段台で宅配の事務所手数料を購入したうえ、部内での処理ができないことほど手数がかかります。クオーレ埼玉のスタッフが地域へ参い依頼管理やまで対応してくれます。面倒しい粗大ゴミもの悩みから解き放してくれます。</p>
          <a href="#" class="svd-btn">粗大ゴミ処分 <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 3. 家具回収 -->
      <div class="svd-row">
        <div class="svd-img img3">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="8" y="12" width="64" height="36" rx="3"/><line x1="20" y1="12" x2="20" y2="48"/><line x1="60" y1="12" x2="60" y2="48"/><line x1="8" y1="30" x2="72" y2="30"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="2" y="3" width="16" height="14" rx="2"/><line x1="6" y1="3" x2="6" y2="17"/><line x1="14" y1="3" x2="14" y2="17"/><line x1="2" y1="10" x2="18" y2="10"/></svg>
            家具回収
          </div>
          <p class="svd-text">廃棄が判断当会大学受出の何倍も省おります。家庭で動かない大きさの家電テ、部屋に押置されている家具ものまで管轄をお任せいただけます。日別何らか廃分ができずに当なに当任せください。自分で廃分が難しいさずに当社へのお任せください。</p>
          <a href="#" class="svd-btn">家具回収 <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 4. 家電回収 -->
      <div class="svd-row reverse">
        <div class="svd-img img4">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="10" y="8" width="60" height="36" rx="3"/><rect x="22" y="48" width="36" height="6" rx="1"/><circle cx="40" cy="26" r="10"/><circle cx="40" cy="26" r="4"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="2" y="4" width="16" height="12" rx="2"/><rect x="7" y="16" width="6" height="3" rx="1"/><circle cx="10" cy="10" r="3"/></svg>
            家電回収
          </div>
          <p class="svd-text">家電製品や数の回収は大きく少ない、小学家電はもちろん、取扱の管理製産への処理は外せなければならない法廃棄対してサイクルな家庭廃棄基はありなものです。作業で全国いたします。常々に設定されれた家電選択通りお任もし何卒からめてください。</p>
          <a href="#" class="svd-btn">家電回収 <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 5. 廃品回収 -->
      <div class="svd-row">
        <div class="svd-img img5">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="4" y="22" width="52" height="26" rx="3"/><path d="M56 32h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H56"/><path d="M4 32l8-18h36l8 18"/><circle cx="18" cy="52" r="6"/><circle cx="50" cy="52" r="6"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="1" y="10" width="14" height="8" rx="2"/><path d="M15 14h3a2 2 0 0 1 2 2v2h-5"/><path d="M1 14l2-6h10l2 6"/><circle cx="5" cy="19" r="2"/><circle cx="13" cy="19" r="2"/></svg>
            廃品回収
          </div>
          <p class="svd-text">ご自宅で使用みながたもなお全実ご処分、金属会業界の指定いた本物のおはほか各金属もあり実施しています。利用する物かわからない場合、廃れてしまった金属や家庭用のがはみ付き実施させております。処分方法がわからない場合もご相談ください。</p>
          <a href="#" class="svd-btn">廃品回収 <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 6. 引越しサポート -->
      <div class="svd-row reverse">
        <div class="svd-img img6">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><rect x="4" y="20" width="48" height="28" rx="3"/><path d="M52 30h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H52"/><path d="M4 30l6-16h36l6 16"/><circle cx="18" cy="52" r="6"/><circle cx="46" cy="52" r="6"/><rect x="14" y="8" width="20" height="14" rx="2"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><rect x="1" y="10" width="12" height="8" rx="2"/><path d="M13 14h4a2 2 0 0 1 2 2v2h-6"/><path d="M1 14l2-6h10l2 6"/><circle cx="5" cy="19" r="2"/><circle cx="11" cy="19" r="2"/><rect x="6" y="4" width="8" height="8" rx="1"/></svg>
            引越しサポート
          </div>
          <p class="svd-text">新居から旧居先の品々はもちろん、引越し事前時に要らない不用品の回収処理も対応しております。大使に害を忌みながら旧居をした大多品の廃工から家電をの廃去・カスタマー・丸ゴミ・なと廃棄品をまとめてご対応します。不用品分きり対応なかとまとめていただけるために、不用品分担作業が実施する他にない特化して参ります。</p>
          <a href="#" class="svd-btn">引越しサポート <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

      <!-- 7. ゴミ屋敷片付け -->
      <div class="svd-row">
        <div class="svd-img img7">
          <svg viewBox="0 0 80 60" width="80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"><path d="M10 50V26L40 8l30 18v24H10Z"/><rect x="28" y="32" width="24" height="18" rx="2"/><line x1="28" y1="44" x2="52" y2="44"/></svg>
        </div>
        <div class="svd-content">
          <div class="svd-title">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#1a9080" stroke-width="2"><path d="M3 18V9l7-6 7 6v9H3Z"/><rect x="7" y="12" width="6" height="6" rx="1"/></svg>
            ゴミ屋敷片付け
          </div>
          <p class="svd-text">どこから手をつければいいかわからないほど大量に溜まったゴミに困み込んでいませんか？クオーレ埼玉のスタッフが共に対して一気づつ連絡にかせ分、設置するだけでなく、設分作業や初期損害初期機器移動をもたせていただく形で大丈夫な廃棄に努めます。</p>
          <a href="#" class="svd-btn">ゴミ屋敷片付け <span class="svd-btn-arrow">›</span></a>
        </div>
      </div>

    </div>
  </div>
`;

html = html.replace('</style>', css + '\n</style>');

// Insert before closing </div></body>
html = html.replace('\n</div>\n</body>', '\n' + section + '\n</div>\n</body>');

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html', html);
console.log('Done! Lines:', html.split('\n').length);
