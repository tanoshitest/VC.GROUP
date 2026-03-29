const fs = require('fs');
let html = fs.readFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html','utf8');

const css = `
  /* ===== その他のサービス CARDS ===== */
  .svo-section {
    background: #dff0e3;
    padding: 50px 20px 60px;
  }
  .svo-inner { max-width: 960px; margin: 0 auto; }
  .svo-title {
    display: flex; align-items: center; gap: 10px;
    font-size: 20px; font-weight: 800; color: #1a1a1a;
    margin-bottom: 24px;
  }
  .svo-title::before {
    content: ''; display: block;
    width: 5px; height: 26px;
    background: #2ea84f; border-radius: 3px; flex-shrink: 0;
  }
  .svo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }
  .svo-grid-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .svo-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    display: flex; flex-direction: column;
  }
  .svo-card-img {
    width: 100%; height: 160px;
    background: linear-gradient(135deg, #a5d6a7 0%, #c8e6c9 60%, #81c784 100%);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .svo-card-img.img-b { background: linear-gradient(135deg, #80cbc4 0%, #b2dfdb 60%, #4db6ac 100%); }
  .svo-card-img.img-c { background: linear-gradient(135deg, #90caf9 0%, #bbdefb 60%, #64b5f6 100%); }
  .svo-card-img.img-d { background: linear-gradient(135deg, #ffcc80 0%, #ffe0b2 60%, #ffa726 100%); }
  .svo-card-img.img-e { background: linear-gradient(135deg, #ce93d8 0%, #f3e5f5 60%, #ba68c8 100%); }
  .svo-card-body { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 10px; }
  .svo-card-title {
    display: flex; align-items: center; gap: 6px;
    font-size: 14px; font-weight: 800; color: #1a9080;
  }
  .svo-card-text { font-size: 11.5px; color: #555; line-height: 1.75; flex: 1; }
  .svo-card-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    border: 2px solid #3abdb0; border-radius: 50px;
    color: #3abdb0; font-size: 13px; font-weight: 700;
    padding: 8px 18px; text-decoration: none;
    transition: background 0.2s, color 0.2s;
    width: 100%;
  }
  .svo-card-btn:hover { background: #3abdb0; color: #fff; }

  /* ===== CONTACT STRIP ===== */
  .sv-contact-strip {
    background: #1a6e2e;
    padding: 18px 20px;
    display: flex; align-items: center; gap: 16px;
    justify-content: center;
  }
  .sv-cs-badge {
    background: #f5c518; color: #333;
    font-size: 11px; font-weight: 800;
    padding: 5px 12px; border-radius: 50px;
    white-space: nowrap; flex-shrink: 0;
  }
  .sv-cs-text {
    color: #fff; font-size: 22px; font-weight: 900;
    letter-spacing: 0.04em;
  }

  /* ===== CONTACT CARD (reuse from index) ===== */
  .sv-contact-bg {
    background: #1e7e3a;
    padding: 40px 20px 50px;
  }

  @media (max-width: 640px) {
    .svo-grid, .svo-grid-2 { grid-template-columns: 1fr 1fr !important; gap: 10px; }
    .sv-cs-text { font-size: 16px; }
    .sv-contact-strip { flex-wrap: wrap; gap: 8px; }
  }
`;

const section = `
  <!-- その他のサービス CARDS -->
  <div class="svo-section">
    <div class="svo-inner">
      <div class="svo-title">その他のサービス</div>

      <!-- Row 1: 3 cards -->
      <div class="svo-grid">
        <div class="svo-card">
          <div class="svo-card-img">
            <svg viewBox="0 0 80 60" width="70" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"><rect x="10" y="8" width="60" height="44" rx="4"/><line x1="20" y1="20" x2="60" y2="20"/><line x1="20" y1="30" x2="50" y2="30"/><line x1="20" y1="40" x2="45" y2="40"/></svg>
          </div>
          <div class="svo-card-body">
            <div class="svo-card-title">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#1a9080" stroke-width="1.5"><rect x="2" y="1" width="12" height="14" rx="2"/><line x1="5" y1="5" x2="11" y2="5"/><line x1="5" y1="8" x2="9" y2="8"/></svg>
              遺品整理
            </div>
            <p class="svo-card-text">遺人様の大切な品物をご遺族様に確認しながら丁寧に仕分けして、整理いたします。</p>
            <a href="#" class="svo-card-btn">詳しく見る ›</a>
          </div>
        </div>

        <div class="svo-card">
          <div class="svo-card-img img-b">
            <svg viewBox="0 0 80 60" width="70" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"><rect x="8" y="10" width="64" height="40" rx="3"/><path d="M20 50V30 a8 8 0 0 1 16 0v20"/><path d="M44 50V20"/><line x1="38" y1="20" x2="50" y2="20"/></svg>
          </div>
          <div class="svo-card-body">
            <div class="svo-card-title">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#1a9080" stroke-width="1.5"><rect x="1" y="4" width="14" height="10" rx="2"/><path d="M5 4V3a3 3 0 0 1 6 0v1"/></svg>
              リフォーム・ハウスクリーニング
            </div>
            <p class="svo-card-text">リフォームやハウスクリーニングを行い、専門技術をもって丁寧な対応に使います。</p>
            <a href="#" class="svo-card-btn">詳しく見る ›</a>
          </div>
        </div>

        <div class="svo-card">
          <div class="svo-card-img img-c">
            <svg viewBox="0 0 80 60" width="70" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"><path d="M10 50V22L40 6l30 16v28H10Z"/><rect x="28" y="32" width="24" height="18" rx="2"/><line x1="28" y1="44" x2="52" y2="44"/></svg>
          </div>
          <div class="svo-card-body">
            <div class="svo-card-title">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#1a9080" stroke-width="1.5"><path d="M2 14V7l6-4 6 4v7H2Z"/><rect x="5" y="9" width="6" height="5" rx="1"/></svg>
              不動産売却
            </div>
            <p class="svo-card-text">物置が増えてしまったご家族や解体工事後の売却手続きなど、不動産の整理をお手伝いします。</p>
            <a href="#" class="svo-card-btn">詳しく見る ›</a>
          </div>
        </div>
      </div>

      <!-- Row 2: 2 cards -->
      <div class="svo-grid-2">
        <div class="svo-card">
          <div class="svo-card-img img-d">
            <svg viewBox="0 0 80 60" width="70" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"><rect x="6" y="30" width="68" height="24" rx="3"/><rect x="20" y="14" width="40" height="18" rx="2"/><rect x="30" y="6" width="20" height="10" rx="2"/></svg>
          </div>
          <div class="svo-card-body">
            <div class="svo-card-title">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#1a9080" stroke-width="1.5"><path d="M3 13V6l5-3 5 3v7H3Z"/><line x1="6" y1="13" x2="6" y2="9"/><line x1="10" y1="13" x2="10" y2="9"/></svg>
              解体工事
            </div>
            <p class="svo-card-text">ご自宅やお庭・建物の解体から残置物の撤去まで、丁寧な対応で誠実して、作業で対応いたします。</p>
            <a href="#" class="svo-card-btn">詳しく見る ›</a>
          </div>
        </div>

        <div class="svo-card">
          <div class="svo-card-img img-e">
            <svg viewBox="0 0 80 60" width="70" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"><rect x="10" y="8" width="60" height="44" rx="3"/><rect x="20" y="18" width="16" height="12" rx="1"/><rect x="44" y="18" width="16" height="12" rx="1"/><line x1="20" y1="38" x2="60" y2="38"/><line x1="20" y1="44" x2="50" y2="44"/></svg>
          </div>
          <div class="svo-card-body">
            <div class="svo-card-title">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="#1a9080" stroke-width="1.5"><rect x="1" y="3" width="14" height="10" rx="2"/><line x1="5" y1="7" x2="11" y2="7"/><line x1="5" y1="10" x2="9" y2="10"/></svg>
              法人のお客様向け
            </div>
            <p class="svo-card-text">オフィスの処拠や空き撤の期間に伴う処拠品対応や、長続の対応要分などもお任せください。</p>
            <a href="#" class="svo-card-btn">詳しく見る ›</a>
          </div>
        </div>

        <div></div>
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
`;

html = html.replace('</style>', css + '\n</style>');
html = html.replace('\n</div>\n</body>', '\n' + section + '\n</div>\n</body>');

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/service.html', html);
console.log('Done! Lines:', html.split('\n').length);
