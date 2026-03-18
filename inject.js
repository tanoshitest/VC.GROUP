const fs = require('fs');

const original = fs.readFileSync('C:/Users/ADMIN/Downloads/header-clone_18.html', 'utf8');

const newCSS = `
    /* ===== FEATURES STRIP ===== */
    .features-strip {
      background: #2b9e3a;
      padding: 18px 20px;
    }
    .features-inner {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      max-width: 1000px;
      margin: 0 auto;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #fff;
    }
    .feature-icon { font-size: 32px; }
    .feature-title { font-size: 15px; font-weight: 900; }
    .feature-desc { font-size: 12px; opacity: 0.9; }

    /* ===== COMMON SECTION ===== */
    .section { padding: 64px 20px; }
    .section-inner { max-width: 1000px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-tag {
      display: inline-block;
      background: #2b9e3a;
      color: #fff;
      font-size: 11px;
      font-weight: bold;
      letter-spacing: 0.15em;
      padding: 3px 12px;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    .section-title { font-size: 28px; font-weight: 900; color: #111; margin-top: 6px; margin-bottom: 10px; }
    .section-sub { font-size: 14px; color: #666; }

    /* ===== SERVICES ===== */
    .services-section { background: #fff; }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .service-card {
      background: #f8f9fa;
      border-radius: 10px;
      padding: 28px 22px;
      border: 1px solid #eee;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .service-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.1); transform: translateY(-3px); }
    .service-card-icon { font-size: 36px; margin-bottom: 14px; }
    .service-card h3 { font-size: 16px; font-weight: 900; color: #111; margin-bottom: 10px; }
    .service-card p { font-size: 13px; color: #555; line-height: 1.7; margin-bottom: 16px; }
    .service-card-link { color: #2b9e3a; font-size: 13px; font-weight: bold; text-decoration: none; }
    .service-card-link:hover { text-decoration: underline; }

    /* ===== FLOW ===== */
    .flow-section { background: #f0faf2; }
    .flow-steps { display: flex; align-items: flex-start; justify-content: center; gap: 0; flex-wrap: wrap; }
    .flow-step {
      text-align: center;
      max-width: 180px;
      padding: 20px 16px;
      background: #fff;
      border-radius: 10px;
      border: 2px solid #2b9e3a;
      position: relative;
    }
    .flow-step-num {
      position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
      background: #2b9e3a; color: #fff; font-size: 13px; font-weight: 900;
      width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }
    .flow-step-icon { font-size: 32px; margin: 8px 0 10px; }
    .flow-step h4 { font-size: 14px; font-weight: 900; color: #111; margin-bottom: 8px; }
    .flow-step p { font-size: 12px; color: #555; line-height: 1.6; }
    .flow-arrow { font-size: 28px; color: #2b9e3a; display: flex; align-items: center; padding: 0 10px; margin-top: 28px; }

    /* ===== PRICING ===== */
    .pricing-section { background: #fff; }
    .pricing-web-badge {
      text-align: center; background: #fff0f0; border: 1px dashed #e63b2e;
      color: #e63b2e; font-size: 14px; padding: 10px 20px; border-radius: 6px;
      margin-bottom: 36px; max-width: 400px; margin-left: auto; margin-right: auto;
    }
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
    .pricing-card { border: 2px solid #ddd; border-radius: 10px; overflow: hidden; position: relative; }
    .pricing-card-popular { border-color: #2b9e3a; box-shadow: 0 6px 24px rgba(43,158,58,0.15); }
    .pricing-popular-badge { background: #2b9e3a; color: #fff; text-align: center; font-size: 12px; font-weight: bold; padding: 5px; letter-spacing: 0.1em; }
    .pricing-card-header { background: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #eee; }
    .pricing-card-popular .pricing-card-header { background: #f0faf2; }
    .pricing-plan-name { font-size: 18px; font-weight: 900; color: #111; }
    .pricing-plan-sub { font-size: 12px; color: #666; margin-top: 4px; }
    .pricing-price { text-align: center; padding: 20px; background: #fff; }
    .price-from { font-size: 18px; font-weight: bold; color: #e63b2e; vertical-align: top; line-height: 2; }
    .price-num { font-size: 40px; font-weight: 900; color: #e63b2e; line-height: 1; }
    .price-tax { font-size: 13px; color: #666; }
    .pricing-list { padding: 0 20px 20px; list-style: none; }
    .pricing-list li { font-size: 13px; padding: 6px 0; border-bottom: 1px solid #f0f0f0; color: #444; }
    .btn-pricing {
      display: block; margin: 0 20px 20px; background: #f4821f; color: #fff;
      text-align: center; padding: 12px; border-radius: 5px; text-decoration: none;
      font-weight: bold; font-size: 14px; transition: opacity 0.2s;
    }
    .btn-pricing:hover { opacity: 0.85; }
    .btn-pricing-popular { background: #2b9e3a; }
    .pricing-note { text-align: center; font-size: 12px; color: #888; margin-top: 24px; }

    /* ===== ITEMS ===== */
    .items-section { background: #f8f9fa; }
    .items-categories { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .item-category { background: #fff; border-radius: 10px; padding: 20px; border: 1px solid #eee; }
    .item-cat-title { font-size: 15px; font-weight: 900; color: #2b9e3a; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #f0faf2; }
    .item-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .item-tag { background: #f0faf2; color: #2b9e3a; font-size: 12px; padding: 4px 12px; border-radius: 20px; border: 1px solid #c8e6cc; }
    .items-note { margin-top: 24px; background: #fff8e1; border: 1px solid #ffe082; border-radius: 8px; padding: 14px 18px; font-size: 13px; color: #555; line-height: 1.7; }

    /* ===== AREA ===== */
    .area-section { background: #fff; }
    .area-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }
    .area-block { background: #f8f9fa; border-radius: 10px; padding: 24px; border: 1px solid #eee; }
    .area-pref { font-size: 16px; font-weight: 900; color: #2b9e3a; margin-bottom: 12px; }
    .area-cities { font-size: 13px; color: #555; line-height: 1.9; }

    /* ===== CONTACT ===== */
    .contact-section { background: #f0faf2; }
    .contact-wrapper { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; }
    .contact-label-badge { display: inline-block; background: #2b9e3a; color: #fff; font-size: 12px; font-weight: bold; padding: 4px 14px; border-radius: 3px; margin-bottom: 14px; }
    .contact-label-line { background: #06c755; }
    .contact-phone-big { margin-bottom: 28px; }
    .contact-phone-num { font-size: 32px; font-weight: 900; color: #111; display: flex; align-items: center; gap: 8px; }
    .contact-phone-icon { font-size: 28px; }
    .contact-phone-sub { font-size: 12px; color: #666; margin-top: 6px; }
    .contact-line-btn { display: flex; align-items: center; gap: 10px; background: #06c755; color: #fff; font-size: 15px; font-weight: bold; padding: 14px 22px; border-radius: 6px; text-decoration: none; max-width: 240px; transition: opacity 0.2s; }
    .contact-line-btn:hover { opacity: 0.85; }
    .contact-line-sub { font-size: 11px; color: #666; margin-top: 6px; }
    .contact-form { background: #fff; border-radius: 10px; padding: 28px; border: 1px solid #ddd; }
    .form-row { margin-bottom: 16px; }
    .form-row label { display: block; font-size: 13px; font-weight: bold; color: #333; margin-bottom: 6px; }
    .form-required { background: #e63b2e; color: #fff; font-size: 10px; padding: 1px 6px; border-radius: 3px; margin-left: 6px; font-weight: normal; }
    .form-row input, .form-row textarea { width: 100%; border: 1px solid #ccc; border-radius: 5px; padding: 10px 12px; font-size: 14px; font-family: inherit; transition: border-color 0.2s; outline: none; }
    .form-row input:focus, .form-row textarea:focus { border-color: #2b9e3a; }
    .form-submit-btn { width: 100%; background: #e63b2e; color: #fff; border: none; padding: 15px; border-radius: 6px; font-size: 16px; font-weight: 900; cursor: pointer; transition: opacity 0.2s; font-family: inherit; }
    .form-submit-btn:hover { opacity: 0.85; }

    /* ===== COMPANY ===== */
    .company-section { background: #fff; }
    .company-table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .company-table th, .company-table td { padding: 14px 18px; border-bottom: 1px solid #eee; text-align: left; }
    .company-table th { width: 180px; color: #2b9e3a; font-weight: 900; background: #f0faf2; }
    .company-table td { color: #444; }

    /* ===== FOOTER ===== */
    .site-footer { background: #1a1a1a; color: #ccc; padding: 36px 20px 20px; }
    .footer-inner { max-width: 1000px; margin: 0 auto; text-align: center; }
    .footer-logo { font-size: 20px; font-weight: 900; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 6px; }
    .footer-logo-red { color: #e63b2e; }
    .footer-logo-green { color: #2b9e3a; }
    .footer-logo-badge { background: #2b9e3a; color: #fff; font-size: 13px; padding: 2px 8px; border-radius: 3px; }
    .footer-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; }
    .footer-links a { color: #aaa; text-decoration: none; font-size: 13px; transition: color 0.2s; }
    .footer-links a:hover { color: #2b9e3a; }
    .footer-phone { font-size: 14px; margin-bottom: 14px; color: #bbb; }
    .footer-copy { font-size: 12px; color: #666; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .services-grid { grid-template-columns: 1fr; }
      .pricing-grid { grid-template-columns: 1fr; }
      .items-categories { grid-template-columns: 1fr; }
      .area-grid { grid-template-columns: 1fr; }
      .contact-wrapper { grid-template-columns: 1fr; }
      .flow-steps { flex-direction: column; align-items: center; }
      .flow-arrow { transform: rotate(90deg); margin: 0; padding: 5px 0; }
      .features-inner { gap: 20px; }
      .header-top { flex-direction: column; align-items: flex-start; }
    }
`;

const newSections = `

  <!-- FEATURES STRIP -->
  <section class="features-strip">
    <div class="features-inner">
      <div class="feature-item">
        <div class="feature-icon">&#128663;</div>
        <div class="feature-text">
          <div class="feature-title">即日対応</div>
          <div class="feature-desc">お電話から最短30分で到着</div>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">&#128176;</div>
        <div class="feature-text">
          <div class="feature-title">明朗会計</div>
          <div class="feature-desc">追加料金なし・事前見積もり無料</div>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">&#9989;</div>
        <div class="feature-text">
          <div class="feature-title">安心・丁寧</div>
          <div class="feature-desc">埼玉県公安委員会許可取得済み</div>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">&#127758;</div>
        <div class="feature-text">
          <div class="feature-title">エコ回収</div>
          <div class="feature-desc">リユース・リサイクルで環境配慮</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section services-section" id="services">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">SERVICE</span>
        <h2 class="section-title">サービス一覧</h2>
        <p class="section-sub">クオーレ埼玉のすべてのサービスをご紹介します</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-card-icon">&#127968;</div>
          <h3>家庭の不用品回収</h3>
          <p>引越し・大掃除・遺品整理など、ご家庭で出た不用品をまとめてお引き取りします。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
        <div class="service-card">
          <div class="service-card-icon">&#127970;</div>
          <h3>オフィス・店舗片付け</h3>
          <p>移転・閉店時の家具・OA機器・什器など大量の不用品も一括回収いたします。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
        <div class="service-card">
          <div class="service-card-icon">&#128301;</div>
          <h3>遺品整理・生前整理</h3>
          <p>故人のお荷物や生前整理をご遺族の気持ちに寄り添い、丁寧に対応します。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
        <div class="service-card">
          <div class="service-card-icon">&#128295;</div>
          <h3>大型家具・家電回収</h3>
          <p>ソファ・冷蔵庫・洗濯機など、一人では運び出せない大型品も対応します。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
        <div class="service-card">
          <div class="service-card-icon">&#128722;</div>
          <h3>不用品買取</h3>
          <p>査定次第では買取も可能です。回収費用の相殺にもなり、お得に処分できます。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
        <div class="service-card">
          <div class="service-card-icon">&#127815;</div>
          <h3>ゴミ屋敷清掃</h3>
          <p>長年溜まったゴミや不用品も、スタッフが一気に片付けます。秘密厳守で対応。</p>
          <a href="#contact" class="service-card-link">詳しく見る &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- FLOW -->
  <section class="section flow-section" id="flow">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">FLOW</span>
        <h2 class="section-title">ご利用の流れ</h2>
        <p class="section-sub">お申し込みから回収完了まで最短1日で対応可能です</p>
      </div>
      <div class="flow-steps">
        <div class="flow-step">
          <div class="flow-step-num">1</div>
          <div class="flow-step-icon">&#128222;</div>
          <h4>お問い合わせ</h4>
          <p>お電話・メール・LINEでご連絡ください。24時間365日受付対応中！</p>
        </div>
        <div class="flow-arrow">&#10132;</div>
        <div class="flow-step">
          <div class="flow-step-num">2</div>
          <div class="flow-step-icon">&#128203;</div>
          <h4>無料お見積もり</h4>
          <p>現地またはお写真・お電話でお見積もりします。もちろん無料です。</p>
        </div>
        <div class="flow-arrow">&#10132;</div>
        <div class="flow-step">
          <div class="flow-step-num">3</div>
          <div class="flow-step-icon">&#128197;</div>
          <h4>日程確定</h4>
          <p>ご都合の良い日時をお選びください。最短即日対応も可能です。</p>
        </div>
        <div class="flow-arrow">&#10132;</div>
        <div class="flow-step">
          <div class="flow-step-num">4</div>
          <div class="flow-step-icon">&#128663;</div>
          <h4>回収・完了</h4>
          <p>スタッフが伺い、丁寧・迅速に作業します。お支払いは完了後でOKです。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section class="section pricing-section" id="pricing">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">PRICE</span>
        <h2 class="section-title">料金について</h2>
        <p class="section-sub">明朗会計・追加料金なし。WEB申し込みで全プラン20%OFF！</p>
      </div>
      <div class="pricing-web-badge">&#127381; WEB申し込み限定 <strong>20%OFF</strong> 適用中</div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-card-header">
            <div class="pricing-plan-name">軽トラック</div>
            <div class="pricing-plan-sub">1K・単品回収向け</div>
          </div>
          <div class="pricing-price">
            <span class="price-from">&#165;</span>
            <span class="price-num">9,800</span>
            <span class="price-tax">〜（税込）</span>
          </div>
          <ul class="pricing-list">
            <li>&#10003; 軽トラック1台分</li>
            <li>&#10003; 単品〜数点の回収</li>
            <li>&#10003; 1K・ワンルーム向け</li>
            <li>&#10003; 搬出作業込み</li>
          </ul>
          <a href="#contact" class="btn-pricing">このプランで申し込む</a>
        </div>
        <div class="pricing-card pricing-card-popular">
          <div class="pricing-popular-badge">人気No.1</div>
          <div class="pricing-card-header">
            <div class="pricing-plan-name">2トントラック</div>
            <div class="pricing-plan-sub">1LDK〜2LDK向け</div>
          </div>
          <div class="pricing-price">
            <span class="price-from">&#165;</span>
            <span class="price-num">29,800</span>
            <span class="price-tax">〜（税込）</span>
          </div>
          <ul class="pricing-list">
            <li>&#10003; 2トントラック1台分</li>
            <li>&#10003; 1LDK〜2LDK向け</li>
            <li>&#10003; 引越し後の残置物</li>
            <li>&#10003; 搬出・分別作業込み</li>
          </ul>
          <a href="#contact" class="btn-pricing btn-pricing-popular">このプランで申し込む</a>
        </div>
        <div class="pricing-card">
          <div class="pricing-card-header">
            <div class="pricing-plan-name">4トントラック</div>
            <div class="pricing-plan-sub">3LDK以上・事務所向け</div>
          </div>
          <div class="pricing-price">
            <span class="price-from">&#165;</span>
            <span class="price-num">59,800</span>
            <span class="price-tax">〜（税込）</span>
          </div>
          <ul class="pricing-list">
            <li>&#10003; 4トントラック1台分</li>
            <li>&#10003; 3LDK以上の大量回収</li>
            <li>&#10003; 事務所・店舗対応</li>
            <li>&#10003; 搬出・清掃作業込み</li>
          </ul>
          <a href="#contact" class="btn-pricing">このプランで申し込む</a>
        </div>
      </div>
      <p class="pricing-note">※ 料金はあくまでも目安です。品目・量・作業内容により変動する場合があります。まずはお気軽にお見積もりください。</p>
    </div>
  </section>

  <!-- ITEMS -->
  <section class="section items-section" id="items">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">ITEMS</span>
        <h2 class="section-title">回収対象品目一覧</h2>
        <p class="section-sub">家具・家電・生活用品など幅広く対応しています</p>
      </div>
      <div class="items-categories">
        <div class="item-category">
          <div class="item-cat-title">&#127968; 家具類</div>
          <div class="item-tags">
            <span class="item-tag">ソファ</span><span class="item-tag">ベッド・マットレス</span>
            <span class="item-tag">タンス・食器棚</span><span class="item-tag">テーブル・机</span>
            <span class="item-tag">椅子・チェア</span><span class="item-tag">本棚・ラック</span>
            <span class="item-tag">カーペット・ラグ</span>
          </div>
        </div>
        <div class="item-category">
          <div class="item-cat-title">&#128268; 家電類</div>
          <div class="item-tags">
            <span class="item-tag">冷蔵庫</span><span class="item-tag">洗濯機・乾燥機</span>
            <span class="item-tag">エアコン</span><span class="item-tag">テレビ</span>
            <span class="item-tag">電子レンジ・炊飯器</span><span class="item-tag">パソコン・タブレット</span>
            <span class="item-tag">掃除機・扇風機</span>
          </div>
        </div>
        <div class="item-category">
          <div class="item-cat-title">&#127968; 生活用品</div>
          <div class="item-tags">
            <span class="item-tag">衣類・布団</span><span class="item-tag">食器・調理器具</span>
            <span class="item-tag">おもちゃ・ゲーム</span><span class="item-tag">書籍・雑誌</span>
            <span class="item-tag">スポーツ用品</span><span class="item-tag">楽器</span>
            <span class="item-tag">自転車・バイク部品</span>
          </div>
        </div>
        <div class="item-category">
          <div class="item-cat-title">&#127970; 事業系</div>
          <div class="item-tags">
            <span class="item-tag">コピー機・FAX</span><span class="item-tag">スチールラック</span>
            <span class="item-tag">ロッカー・金庫</span><span class="item-tag">什器・備品</span>
            <span class="item-tag">工場機械類</span><span class="item-tag">厨房機器</span>
          </div>
        </div>
      </div>
      <div class="items-note">
        <p>&#9888;&#65039; 一部回収できないものもございます（ガスボンベ・タイヤ・農薬・薬品など）。不明な場合はお気軽にお問い合わせください。</p>
      </div>
    </div>
  </section>

  <!-- AREA -->
  <section class="section area-section" id="area">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">AREA</span>
        <h2 class="section-title">対応エリア</h2>
        <p class="section-sub">埼玉県全域および一部近隣県に対応しています</p>
      </div>
      <div class="area-grid">
        <div class="area-block">
          <div class="area-pref">埼玉県</div>
          <div class="area-cities">
            さいたま市・川越市・熊谷市・川口市・行田市・秩父市・所沢市・飯能市・加須市・本庄市・東松山市・春日部市・狭山市・羽生市・鴻巣市・深谷市・上尾市・草加市・越谷市・蕨市・戸田市・入間市・朝霞市・志木市・和光市・新座市・桶川市・久喜市・北本市・八潮市・富士見市・三郷市・蓮田市・坂戸市・幸手市・鶴ヶ島市・日高市・吉川市・ふじみ野市・白岡市 ほか
          </div>
        </div>
        <div class="area-block">
          <div class="area-pref">近隣対応エリア</div>
          <div class="area-cities">
            東京都（一部）・神奈川県（一部）・千葉県（一部）・群馬県（一部）<br>
            ※ 遠方の場合は別途出張費をいただく場合があります。
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section contact-section" id="contact">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">CONTACT</span>
        <h2 class="section-title">お問い合わせ・無料見積もり</h2>
        <p class="section-sub">24時間365日受付。まずはお気軽にご連絡ください！</p>
      </div>
      <div class="contact-wrapper">
        <div class="contact-info-col">
          <div class="contact-phone-big">
            <div class="contact-label-badge">お電話でのお問い合わせ</div>
            <div class="contact-phone-num">
              <span class="contact-phone-icon">&#128222;</span>
              048-919-2962
            </div>
            <div class="contact-phone-sub">受付時間 : 8:00〜20:00（年中無休）</div>
          </div>
          <div class="contact-line-block">
            <div class="contact-label-badge contact-label-line">LINEでのお問い合わせ</div>
            <a href="#" class="contact-line-btn">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2C10.06 2 2 8.84 2 17.2c0 5.52 3.44 10.36 8.64 13.18-.38 1.42-1.38 5.16-1.58 5.96-.24.98.36 1 .76.72.32-.22 4.96-3.32 6.98-4.66.72.1 1.46.16 2.2.16 9.94 0 18-6.84 18-15.2S29.94 2 20 2z"/>
              </svg>
              LINEで無料相談する
            </a>
            <p class="contact-line-sub">24時間・365日受付対応</p>
          </div>
        </div>
        <div class="contact-form-col">
          <div class="contact-label-badge">メールフォームでのお問い合わせ</div>
          <form class="contact-form" onsubmit="handleSubmit(event)">
            <div class="form-row">
              <label>お名前 <span class="form-required">必須</span></label>
              <input type="text" placeholder="例：山田 太郎" required />
            </div>
            <div class="form-row">
              <label>電話番号 <span class="form-required">必須</span></label>
              <input type="tel" placeholder="例：048-123-4567" required />
            </div>
            <div class="form-row">
              <label>メールアドレス</label>
              <input type="email" placeholder="例：example@mail.com" />
            </div>
            <div class="form-row">
              <label>ご住所（市区町村まで） <span class="form-required">必須</span></label>
              <input type="text" placeholder="例：さいたま市浦和区" required />
            </div>
            <div class="form-row">
              <label>回収品目・ご要望</label>
              <textarea rows="4" placeholder="例：冷蔵庫・洗濯機・ソファなど。引越し後の残置物一式。"></textarea>
            </div>
            <button type="submit" class="form-submit-btn">無料で見積もりを依頼する</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPANY -->
  <section class="section company-section" id="company">
    <div class="section-inner">
      <div class="section-header">
        <span class="section-tag">COMPANY</span>
        <h2 class="section-title">会社概要</h2>
      </div>
      <table class="company-table">
        <tr><th>社名</th><td>VC GROUP（クオーレ埼玉）</td></tr>
        <tr><th>旧社名</th><td>アース埼玉</td></tr>
        <tr><th>所在地</th><td>〒336-0974 埼玉県さいたま市緑区大字大崎</td></tr>
        <tr><th>電話番号</th><td>048-919-2962</td></tr>
        <tr><th>受付時間</th><td>8:00〜20:00（年中無休）</td></tr>
        <tr><th>事業内容</th><td>不用品回収・買取、遺品整理、ゴミ屋敷清掃、オフィス・店舗片付け</td></tr>
        <tr><th>対応エリア</th><td>埼玉県全域・東京都（一部）・神奈川・千葉・群馬（一部）</td></tr>
        <tr><th>許可番号</th><td>埼玉県公安委員会 古物商許可証取得済み</td></tr>
      </table>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-logo">
        <span class="footer-logo-red">不用品回収</span>
        <span class="footer-logo-green">VC GROUP</span>
        <span class="footer-logo-badge">埼玉</span>
      </div>
      <div class="footer-links">
        <a href="#">トップ</a>
        <a href="#services">サービス一覧</a>
        <a href="#pricing">料金について</a>
        <a href="#items">回収品目</a>
        <a href="#area">対応エリア</a>
        <a href="#contact">お問い合わせ</a>
        <a href="#company">会社概要</a>
      </div>
      <div class="footer-phone">&#128222; 048-919-2962　受付 8:00〜20:00（年中無休）</div>
      <div class="footer-copy">&copy; 2024 VC GROUP（クオーレ埼玉） All Rights Reserved.</div>
    </div>
  </footer>

<script>
function handleSubmit(e) {
  e.preventDefault();
  alert('お問い合わせを受け付けました。\n担当者より折り返しご連絡いたします。');
  e.target.reset();
}
</script>
`;

// Inject CSS before </style>
let result = original.replace('</style>', newCSS + '\n  </style>');

// Inject new sections before closing tags
const endMarker = '\n</div>\n</body>\n</html>';
const insertAt = result.lastIndexOf(endMarker);
result = result.slice(0, insertAt) + newSections + endMarker;

fs.writeFileSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/index.html', result, 'utf8');
console.log('Done! File size:', (fs.statSync('C:/Users/ADMIN/Desktop/Vibe/thugomdocu/index.html').size / 1024).toFixed(0), 'KB');
