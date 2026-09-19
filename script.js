(() => {
  'use strict';

  document.documentElement.classList.remove('no-js');

  /* ==========================================================
     支援事例データ（ここを書き換えるとカードとモーダルに反映されます）
     出典：株式会社宮田財務ブログ「コンサル実話」（全文は stories/ 内の各ページ）
     ※社名は伏せ、記事に書かれている事実・数値のみで構成しています
     ※link は stories/ 内のページ。http から始まるURLを入れると新しいタブで開きます
     ※period を空にするとモーダルの「支援期間」行は表示されません
     ========================================================== */
  const works = [
    {
      case: 'Case 01',
      category: '利益改善',
      title: '月商800万円の会社／製品別の粗利分析で「お金が残る」体質へ',
      summary: '毎月30万円ずつお金が減っていた会社で、製品ごとの粗利益を分析。粗利率70%の製品に力を注ぎ、約3ヶ月で毎月35万円が残るようになりました。',
      tags: ['財務分析', '利益再編'],
      image: './images/work-passbook.jpg',
      scope: '利益分析（製品別の粗利益分析）／注力する製品の選定／設備投資と営業方針の整理',
      issue: '月売上800万円に対して粗利益240万円、固定費240万円、銀行返済30万円。毎月30万円、年間で360万円ずつお金が減っていく状態でした。製品A（粗利率20%）が売上の大半を占め、粗利率70%の製品Cは売上100万円にとどまっていました。',
      solution: '製品別に粗利益を分析し、粗利率が最も高い製品Cの売上を上げる対策を社長と一緒に考えました。中古機械（500万円）の購入と、製品Cの営業の強化です。1月以降は月売上700万円に対して粗利益305万円となり、売上は減っても毎月35万円が会社に残るようになりました。',
      period: '約3ヶ月（10月〜翌1月）',
      link: './stories/01.html',
      linkLabel: 'コンサル実話①『利益改善』を読む'
    },
    {
      case: 'Case 02',
      category: '利益再編',
      title: '従業員72名・年商6億円／「大きい会社」より「強い会社」へ',
      summary: '売上が毎年5,000万円ずつ減り、不安を抱えていた社長。3期分の数字を並べると、利益の出る仕事を選んだ結果、経常利益は2,000万円から4,000万円になっていました。',
      tags: ['財務分析', '利益再編'],
      image: './images/work-office.jpg',
      scope: '3期分の経営数値の比較／経営方針の整理（大きい会社か、強い会社か）',
      issue: '令和2年に売上6億円・スタッフ72名だった会社で、売上が毎年5,000万円ずつ減少。スタッフの離職と採用難も重なっていました。',
      solution: '「大きい会社を目指すのか、強い会社を目指すのか」を社長に問いかけました。人が減った分、利益の出る仕事を受け、利益の出ない仕事は断らざるをえなかった。その結果、令和4年は売上5億円・スタッフ62名となった一方、経常利益は2,000万円から4,000万円に増えていました。社長は「まずは経常利益を確保して、強い会社にするにはどうするべきかを考えていきたい」と話されています。',
      period: '令和2年〜令和4年の3期で比較',
      link: './stories/02.html',
      linkLabel: 'コンサル実話②を読む'
    },
    {
      case: 'Case 03',
      category: '財務相談',
      title: '顧問の会計事務所との付き合い方／「税務」と「財務」を分けて考える',
      summary: '「会計事務所にどこまで相談できるのか」という社長の疑問に、税務と財務を分けて考えることをお伝えしました。',
      tags: ['財務分析'],
      image: './images/work-kessan.jpg',
      scope: '会計事務所との付き合い方のご相談／税務と財務の役割の整理',
      issue: '顧問の会計事務所に、どこまでのアドバイスを求めてよいのか。税務と財務の関係がわからないというご相談でした。',
      solution: '月3〜4万円の顧問料では、試算表と決算書の作成が中心になりやすいこと、税務と財務は別物として考える必要があることをご説明。難しいことを簡単に伝えてくれる担当者の大切さと、経営者ご自身が学ぶことの大切さもお伝えしました。社長からは「適正な節税方法や通勤手当など、知らなかったことを社内に落とし込みできた」「会社が少しずつ良くなっている感じ」との声をいただいています。',
      period: '',
      link: './stories/03.html',
      linkLabel: 'コンサル実話③を読む'
    },
    {
      case: 'Case 04',
      category: '事業転換',
      title: '卸売業／年商1億円／BtoBからBtoCへの転換で粗利率15%→30%',
      summary: '粗利率15%でぎりぎりの経営だった卸売業が、直接販売（BtoC）に挑戦。売上は6,000万円に減っても、粗利益は1,500万円から1,800万円に増えました。',
      tags: ['財務分析', '利益再編'],
      image: './images/work-team.jpg',
      scope: '粗利構造の分析／BtoC（直接販売）への転換支援',
      issue: '令和2年は年間売上1億円に対して粗利率15%、粗利益1,500万円。人件費や光熱費を差し引くと、ぎりぎりの経営状態でした。',
      solution: 'なるべく経費をかけずに、お客様へ直接販売できる店舗づくりなど、BtoCへの転換にあらゆる角度から挑戦していただきました。令和3年はコロナ禍で売上が6,000万円に減ったものの、粗利率は30%に上がって粗利益は1,800万円となり、人件費や光熱費を差し引いても利益が出る状態に。社長からは「徹底的に活動したことで、最終的に財務改善出来ました。いつも叱咤激励してくれるので気が抜けませんでしたが」との声をいただいています。',
      period: '約1年（令和2年→令和3年）',
      link: './stories/04.html',
      linkLabel: 'コンサル実話④『BtoBからBtoCへ』を読む'
    },
    {
      case: 'Case 05',
      category: '人材育成',
      title: '採用に悩む会社／ナンバーツーを「給料を払いながら褒めて共育」',
      summary: '求人を出しても人が集まらない会社で、「採る」より「いまいる人を育てる」へ。ナンバーツー育成の方針を社長と整理しました。',
      tags: ['人材育成'],
      image: './images/work-meeting.jpg',
      scope: '採用・人材育成のご相談／ナンバーツー育成の方針整理',
      issue: '求人を出しても人が集まらず、仕事があっても断らざるを得ない状況で、売上も下がっていました。営業成績は優秀でも部下指導に関心のないF君、営業力は劣るものの部下指導に熱心なG君と、ナンバーツーが育たないことも課題でした。',
      solution: 'F君と同じ営業成績を出せる人を新たに採用するのは難しいとお伝えし、悪いところではなく良いところを見て、営業成果を意識して褒めることをご提案。「人は誰かに認めてもらう事で幸せを感じるもの」とお伝えすると、社長は「早速おいしい果物でも買って日頃の努力に対して認めてあげたい」と話されました。',
      period: '',
      link: './stories/05.html',
      linkLabel: 'コンサル実話⑤を読む'
    },
    {
      case: 'Case 06',
      category: '勉強会',
      title: '経営者向け勉強会「黒字化本気塾」「社長塾」',
      summary: '決算書の読み方、資金繰り、事業承継などをテーマにした経営者向けの勉強会です。毎月第4日曜に定期開催しています。',
      tags: ['勉強会', '財務分析'],
      image: './images/seminar.jpg',
      scope: '講座の設計／登壇／教材制作',
      issue: '自社の数字を自分で読めるようになりたい、という経営者・後継者の方に向けた学びの場です。',
      solution: '専門用語で煙に巻かず、社長ご自身が自社の数字を語れるようになることを目指して講座を行っています。',
      period: '毎月第4日曜 8:30〜12:30（水戸・ZOOM）',
      link: 'https://www.fpmiyata.com/study/',
      linkLabel: '黒字化本気塾のページを見る'
    }
  ];

  const body = document.body;
  const header = document.querySelector('.header');

  /* ---------- Header: スクロールで背景白＋影 / ページトップボタン ---------- */
  const pagetop = document.querySelector('.pagetop');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    if (pagetop) pagetop.classList.toggle('is-show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- SPナビ ---------- */
  const toggle = document.querySelector('.header__toggle');
  const nav = document.getElementById('global-nav');

  if (toggle && nav) {
  const setNav = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
    body.classList.toggle('is-locked', open);
  };
  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 1321px)').addEventListener('change', (e) => { if (e.matches) setNav(false); });
  }

  /* ---------- 支援事例カードの生成 ---------- */
  const list = document.getElementById('works-list');
  const modal = document.getElementById('work-modal');

  const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  if (list) list.innerHTML = works.map((w, i) => `
    <li class="js-fade">
      <button class="card work-card" type="button" data-index="${i}" aria-expanded="false" aria-controls="work-modal" aria-haspopup="dialog">
        <span class="ph ph--work"><img src="${escapeHTML(w.image)}" alt="${escapeHTML(w.case)}のイメージ" loading="lazy"></span>
        <span class="work-card__body">
          <span class="work-card__head">
            <span class="work-card__case">${escapeHTML(w.case)}</span>
            <span class="work-card__category">${escapeHTML(w.category)}</span>
          </span>
          <span class="work-card__title">${escapeHTML(w.title)}</span>
          <span class="work-card__summary">${escapeHTML(w.summary)}</span>
          <span class="work-card__tags">${w.tags.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</span>
        </span>
      </button>
    </li>
  `).join('');

  /* ---------- スクロールフェードイン ---------- */
  const fadeEls = document.querySelectorAll('.js-fade');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  fadeEls.forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const siblings = Array.from(parent.children).filter((c) => c.classList.contains('js-fade'));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty('--stagger', `${idx * 90}ms`);
  });

  if (reduced || !('IntersectionObserver' in window)) {
    fadeEls.forEach((el) => el.classList.add('is-inview'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    fadeEls.forEach((el) => io.observe(el));
  }

  const fvBg = document.querySelector('.fv__bg');
  const philBg = document.querySelector('.philosophy__bg');
  if (!reduced && fvBg) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        fvBg.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`;
        if (philBg) {
          const rect = philBg.parentElement.getBoundingClientRect();
          const y = (window.innerHeight * 0.5 - rect.top) * 0.12;
          philBg.style.transform = `translate3d(0, ${y}px, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- FAQ アコーディオン（開くのは常に1つ） ---------- */
  const faqButtons = document.querySelectorAll('.faq__btn');
  const setFaq = (btn, open) => {
    btn.setAttribute('aria-expanded', String(open));
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
  };
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const willOpen = btn.getAttribute('aria-expanded') !== 'true';
      faqButtons.forEach((other) => { if (other !== btn) setFaq(other, false); });
      setFaq(btn, willOpen);
    });
  });

  /* ---------- 支援事例モーダル ---------- */
  if (list && modal) {
  const modalContent = modal.querySelector('.modal__content');
  const modalImg = modal.querySelector('.modal__img');
  const modalLink = modal.querySelector('.modal__link');
  let lastTrigger = null;

  const setText = (selector, text) => { modal.querySelector(selector).textContent = text || ''; };

  const openModal = (trigger) => {
    const w = works[Number(trigger.dataset.index)];
    setText('.modal__case', `${w.case}｜${w.category}`);
    setText('.modal__title', w.title);
    setText('.modal__scope', w.scope);
    setText('.modal__period', w.period);
    setText('.modal__issue', w.issue);
    setText('.modal__solution', w.solution);
    modalImg.setAttribute('src', w.image || '');
    modalImg.alt = `${w.case}のイメージ`;
    modalLink.hidden = !w.link;
    modalLink.href = w.link || '#';
    // サイト外のURLだけ新しいタブで開く
    if (/^https?:/.test(w.link)) {
      modalLink.target = '_blank';
      modalLink.rel = 'noopener';
    } else {
      modalLink.removeAttribute('target');
      modalLink.removeAttribute('rel');
    }
    modalLink.textContent = w.linkLabel || '関連リンクを見る';
    modal.querySelector('.modal__period').parentElement.hidden = !w.period;

    lastTrigger = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    modal.hidden = false;
    modalContent.scrollTop = 0;
    body.classList.add('is-locked');
    modalContent.focus();
    document.addEventListener('keydown', onModalKeydown);
  };

  const closeModal = () => {
    modal.hidden = true;
    body.classList.remove('is-locked');
    document.removeEventListener('keydown', onModalKeydown);
    if (lastTrigger) {
      lastTrigger.setAttribute('aria-expanded', 'false');
      lastTrigger.focus();
    }
  };

  // Escで閉じる＋Tabでフォーカスをモーダル内に留める
  function onModalKeydown(e) {
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab') return;
    const focusables = [...modal.querySelectorAll('button, a[href]')].filter((el) => !el.hidden);
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === modalContent)) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  list.addEventListener('click', (e) => {
    const card = e.target.closest('.work-card');
    if (card) openModal(card);
  });
  modal.querySelectorAll('[data-modal-close]').forEach((el) => el.addEventListener('click', closeModal));
  }

  /* ---------- YouTube 最新投稿 ---------- */
  const ytHost = document.getElementById('youtube-feed');
  if (ytHost) {
    const shortsId = ytHost.dataset.shorts;
    const uploadsId = ytHost.dataset.uploads;
    const fallbackPlayer = (listId) => {
      ytHost.innerHTML = `<iframe class="yt-feed__player" title="YouTubeの最新投稿" src="https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(listId)}&rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
    };

    const renderCards = async (ids) => {
      const items = await Promise.all(ids.slice(0, 3).map(async (id) => {
        try {
          const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`);
          if (!res.ok) throw new Error('oembed');
          const data = await res.json();
          return { id, title: data.title || '動画を見る', thumb: data.thumbnail_url };
        } catch {
          return { id, title: '動画を見る', thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` };
        }
      }));
      ytHost.innerHTML = items.map((item, i) => `
        <a class="yt-card" href="https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}" target="_blank" rel="noopener">
          <img src="${item.thumb}" alt="" width="320" height="180">
          <span class="yt-card__body">
            <span class="yt-card__label">Latest 0${i + 1}</span>
            <span class="yt-card__title">${escapeHTML(item.title)}</span>
          </span>
        </a>
      `).join('');
    };

    const bootPlayer = (listId, retryUploads) => {
      if (!window.YT || !YT.Player) {
        fallbackPlayer(shortsId);
        return;
      }
      const old = document.getElementById('yt-probe');
      if (old) old.remove();
      const probe = document.createElement('div');
      probe.id = 'yt-probe';
      document.body.appendChild(probe);
      new YT.Player('yt-probe', {
        height: '1',
        width: '1',
        playerVars: { listType: 'playlist', list: listId, origin: location.origin },
        events: {
          onReady: (e) => {
            const ids = e.target.getPlaylist() || [];
            e.target.destroy();
            const latest = ids.length > 1 ? [...ids].reverse() : ids;
            if (latest.length >= 2) {
              renderCards(latest);
            } else if (retryUploads) {
              bootPlayer(uploadsId, false);
            } else if (latest.length) {
              renderCards(latest);
            } else {
              fallbackPlayer(shortsId);
            }
          },
          onError: () => fallbackPlayer(shortsId)
        }
      });
    };

    const start = () => bootPlayer(shortsId, true);
    if (window.YT && YT.Player) {
      start();
    } else {
      window.onYouTubeIframeAPIReady = start;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.onerror = () => fallbackPlayer(shortsId);
      document.head.appendChild(tag);
    }
  }

  /* ---------- 塾の申し込みフォーム ---------- */
  const applyForm = document.querySelector('.js-apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submit = applyForm.querySelector('button[type="submit"]');
      const done = applyForm.parentElement.querySelector('.apply-done');
      const original = submit.textContent;
      submit.disabled = true;
      submit.textContent = '送信しています…';

      const fd = new FormData(applyForm);
      const payload = {};
      // 同じ名前のチェックボックス（複数選択）は「、」でつなげて送る
      fd.forEach((value, key) => { payload[key] = key in payload ? `${payload[key]}、${value}` : value; });

      let sent = false;
      try {
        const res = await fetch('https://formsubmit.co/ajax/miyata@miyata-fp.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        sent = res.ok;
      } catch (err) {
        sent = false;
      }

      if (sent) {
        window.location.href = applyForm.getAttribute('data-thanks') || './apply-thanks.html';
        return;
      }

      const subject = encodeURIComponent(String(payload._subject || '申し込み'));
      const body = encodeURIComponent(
        Object.entries(payload)
          .filter(([key]) => !key.startsWith('_'))
          .map(([key, value]) => `${key}：${value}`)
          .join('\n')
      );
      window.location.href = `mailto:miyata@miyata-fp.com?subject=${subject}&body=${body}`;
      applyForm.hidden = true;
      if (done) done.hidden = false;
      submit.disabled = false;
      submit.textContent = original;
    });
  }
})();
