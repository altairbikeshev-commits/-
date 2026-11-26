// Генератор тематических SVG-иллюстраций для каждого кадра комикса
function makeIllustration(type, label) {
  const palettes = {
    cover: ['#090d16', '#1d4ed8', '#38bdf8'],
    mainframe: ['#1e1b4b', '#312e81', '#a5b4fc'],
    terminal: ['#064e3b', '#047857', '#6ee7b7'],
    sputnik: ['#020617', '#1e3a8a', '#facc15'],
    arpanet: ['#172554', '#1e40af', '#60a5fa'],
    tcpip: ['#0c4a6e', '#0284c7', '#7dd3fc'],
    www: ['#1e293b', '#2563eb', '#93c5fd'],
    search: ['#111827', '#059669', '#34d399'],
    ibmpc: ['#27272a', '#52525b', '#e4e4e7'],
    nokia: ['#1e1b4b', '#4338ca', '#818cf8'],
    iphone: ['#09090b', '#27272a', '#38bdf8'],
    cloud: ['#0f172a', '#0284c7', '#bae6fd'],
    bigdata: ['#020617', '#4f46e5', '#a78bfa'],
    ai: ['#111827', '#7c3aed', '#f472b6'],
    future: ['#042f2e', '#0d9488', '#5eead4']
  };

  const [c1, c2, c3] = palettes[type] || palettes.cover;

  return `
    <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${type}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="60%" stop-color="${c2}" />
          <stop offset="100%" stop-color="${c3}" />
        </linearGradient>
        <pattern id="grid_${type}" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="600" height="360" fill="url(#g_${type})" />
      <rect width="600" height="360" fill="url(#grid_${type})" />
      <circle cx="480" cy="80" r="95" fill="rgba(255,255,255,0.08)" />
      <circle cx="120" cy="290" r="120" fill="rgba(0,0,0,0.22)" />
      <rect x="44" y="42" width="512" height="276" rx="12" fill="rgba(15,23,42,0.45)" stroke="${c3}" stroke-width="2" />
      <text x="300" y="175" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" letter-spacing="2">
        ${label}
      </text>
      <line x1="180" y1="202" x2="420" y2="202" stroke="${c3}" stroke-width="3" stroke-linecap="round" />
      <text x="300" y="232" fill="${c3}" font-family="monospace" font-size="14" text-anchor="middle">
        ХРОНИКИ ИКТ • АРХИВНЫЙ КАДР
      </text>
    </svg>
  `;
}

// Страницы книги (Обложка + 5 глав, разделённых на отдельные страницы)
const pages = [
  {
    type: 'cover',
    chapterId: 'cover',
    chapterName: 'Обложка',
    title: 'ХРОНИКИ ИКТ',
    subtitle: 'От громоздких ламповых машин до умного будущего',
    art: makeIllustration('cover', 'ЭВОЛЮЦИЯ ТЕХНОЛОГИЙ')
  },
  {
    chapterId: 'ch1',
    chapterName: 'Глава 1',
    chapterTitle: 'Глава 1. Эпоха первых гигантов',
    panels: [
      {
        title: 'Первые ЭВМ середины XX века',
        caption: 'В середине XX века появились первые компьютеры — огромные и очень дорогие машины.',
        fact: 'ENIAC весил около 27 тонн и занимал площадь целого машинного зала.',
        art: makeIllustration('mainframe', '1940–1950 • ПЕРВЫЕ ЭВМ')
      },
      {
        title: 'Наука, оборона и корпорации',
        caption: 'Они использовались в науке, военной сфере и крупных компаниях.',
        fact: 'Расчёты, которые люди вели месяцами, первые ЭВМ выполняли за часы.',
        art: makeIllustration('terminal', 'НАУЧНЫЕ ВЫЧИСЛЕНИЯ')
      }
    ]
  },
  {
    chapterId: 'ch1',
    chapterName: 'Глава 1',
    chapterTitle: 'Глава 1. Эпоха первых гигантов (продолжение)',
    panels: [
      {
        title: 'Запуск первого спутника',
        caption: 'В 1957 году Советский Союз запустил первый искусственный спутник, что дало толчок развитию связи и ИКТ.',
        fact: 'Спутник-1 положил начало эпохе космической радиосвязи и глобальных телекоммуникаций.',
        art: makeIllustration('sputnik', '1957 • СПУТНИК-1')
      },
      {
        title: 'Первые идеи глобальной сети',
        caption: 'В 1960–70-х появились сети и первые идеи глобального интернета.',
        fact: 'В 1969 году сеть ARPANET объединила первые четыре университетских узла.',
        art: makeIllustration('arpanet', '1960–70 • ARPANET')
      }
    ]
  },
  {
    chapterId: 'ch2',
    chapterName: 'Глава 2',
    chapterTitle: 'Глава 2. Рождение интернета',
    panels: [
      {
        title: 'Создание протокола TCP/IP',
        caption: 'В 1983 году был создан TCP/IP — основа современного интернета.',
        fact: '1 января 1983 года ARPANET официально перешла на стек протоколов TCP/IP.',
        art: makeIllustration('tcpip', '1983 • TCP/IP')
      },
      {
        title: 'Появление World Wide Web',
        caption: 'В 1991 году появился World Wide Web, и информация стала доступной миллионам людей.',
        fact: 'Тим Бернерс-Ли создал первый веб-сайт, браузер и протокол HTTP.',
        art: makeIllustration('www', '1991 • WORLD WIDE WEB')
      }
    ]
  },
  {
    chapterId: 'ch2',
    chapterName: 'Глава 2',
    chapterTitle: 'Глава 2. Рождение интернета (продолжение)',
    panels: [
      {
        title: 'Поисковые системы и цифровая трансформация',
        caption: 'С тех пор интернет кардинально изменил мир: образование, общение и работу.',
        fact: 'Поисковые системы сделали мгновенным доступ к знаниям со всей планеты.',
        art: makeIllustration('search', 'ИНТЕРНЕТ МЕНЯЕТ МИР')
      },
      {
        title: 'Глобальная связность',
        caption: 'Электронная почта, форумы и веб-порталы объединили пользователей разных континентов.',
        fact: 'К концу 1990-х число пользователей интернета превысило 300 миллионов.',
        art: makeIllustration('www', 'ГЛОБАЛЬНАЯ СЕТЬ')
      }
    ]
  },
  {
    chapterId: 'ch3',
    chapterName: 'Глава 3',
    chapterTitle: 'Глава 3. Эра персональных устройств',
    panels: [
      {
        title: 'Первый персональный компьютер IBM PC',
        caption: 'В 1981 году появился первый персональный компьютер IBM PC, сделав технологии ближе к людям.',
        fact: 'Открытая архитектура IBM PC стала стандартом индустрии персональных компьютеров.',
        art: makeIllustration('ibmpc', '1981 • IBM PC')
      },
      {
        title: 'Мобильная революция 1990-х',
        caption: 'В 1990-х мобильные телефоны начали менять способ общения.',
        fact: 'Голосовые звонки и SMS сделали связь персональной и независимой от проводов.',
        art: makeIllustration('nokia', '1990-е • МОБИЛЬНАЯ СВЯЗЬ')
      }
    ]
  },
  {
    chapterId: 'ch3',
    chapterName: 'Глава 3',
    chapterTitle: 'Глава 3. Эра персональных устройств (продолжение)',
    panels: [
      {
        title: 'Выход iPhone и эра смартфонов',
        caption: 'В 2007 году вышел iPhone, открыв новую эпоху — эру смартфонов и мобильного интернета.',
        fact: 'Сенсорный экран и магазины приложений превратили телефон в карманный компьютер.',
        art: makeIllustration('iphone', '2007 • ЭРА СМАРТФОНОВ')
      },
      {
        title: 'Мобильный интернет всегда под рукой',
        caption: 'Сети 3G, 4G и 5G обеспечили высокоскоростной доступ в сеть в любой точке города.',
        fact: 'Сегодня большая часть мирового интернет-трафика приходится на мобильные устройства.',
        art: makeIllustration('iphone', 'МОБИЛЬНЫЙ ИНТЕРНЕТ')
      }
    ]
  },
  {
    chapterId: 'ch4',
    chapterName: 'Глава 4',
    chapterTitle: 'Глава 4. Цифровая революция',
    panels: [
      {
        title: 'Облака и социальные сети',
        caption: 'В 2000-х облачные технологии, социальные сети и онлайн-сервисы сделали интернет частью повседневной жизни.',
        fact: 'Облачные вычисления позволили хранить данные и запускать сервисы без покупки собственных серверов.',
        art: makeIllustration('cloud', '2000-е • ОБЛАКА И СОЦСЕТИ')
      },
      {
        title: 'Большие данные и искусственный интеллект',
        caption: 'А в 2010-х развитие больших данных и искусственного интеллекта открыло новые возможности для технологий.',
        fact: 'Глубокое обучение и обработка Big Data совершили прорыв в распознавании речи и изображений.',
        art: makeIllustration('bigdata', '2010-е • BIG DATA И ИИ')
      }
    ]
  },
  {
    chapterId: 'ch5',
    chapterName: 'Глава 5',
    chapterTitle: 'Глава 5. Будущее ИКТ',
    panels: [
      {
        title: 'Искусственный интеллект сегодня',
        caption: 'Сегодня ИИ помогает в медицине, образовании, бизнесе и многих других сферах.',
        fact: 'Нейросети помогают диагностировать заболевания, персонализировать обучение и автоматизировать рутину.',
        art: makeIllustration('ai', 'СЕГОДНЯ • ИИ ВОКРУГ НАС')
      },
      {
        title: 'Умный город и технологии завтрашнего дня',
        caption: 'И в будущем ИКТ продолжат развиваться, делая наш мир умнее, удобнее и технологичнее.',
        fact: 'Квантовые вычисления, автономный транспорт и умные города формируют облик следующего десятилетия.',
        art: makeIllustration('future', 'БУДУЩЕЕ ИКТ')
      }
    ]
  }
];

let currentPage = 0;

const bookEl = document.getElementById('book');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageCounter = document.getElementById('pageCounter');
const chapterNav = document.getElementById('chapterNav');
const thumbnailsEl = document.getElementById('thumbnails');
const photoInput = document.getElementById('photoInput');

// Элементы модального окна
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxArt = document.getElementById('lightboxArt');
const lightboxChapter = document.getElementById('lightboxChapter');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxFact = document.getElementById('lightboxFact');

// Построение навигации по главам
function buildNavigation() {
  const seen = new Set();
  pages.forEach((p, idx) => {
    if (!seen.has(p.chapterId)) {
      seen.add(p.chapterId);
      const btn = document.createElement('button');
      btn.className = 'chapter-btn';
      btn.textContent = p.chapterName;
      btn.dataset.chapterId = p.chapterId;
      btn.onclick = () => goToPage(idx);
      chapterNav.appendChild(btn);
    }

    const thumb = document.createElement('button');
    thumb.className = 'thumb-btn';
    thumb.textContent = idx === 0 ? 'Обложка' : `Стр. ${idx}`;
    thumb.onclick = () => goToPage(idx);
    thumbnailsEl.appendChild(thumb);
  });
}

// Отрисовка текущей страницы книги
function renderPage(direction = '') {
  if (direction) {
    bookEl.classList.add(direction === 'next' ? 'flip-next' : 'flip-prev');
    setTimeout(() => {
      bookEl.classList.remove('flip-next', 'flip-prev');
    }, 240);
  }

  const page = pages[currentPage];

  if (page.type === 'cover') {
    bookEl.innerHTML = `
      <div class="cover-page">
        <div>
          <h2 class="cover-title">${page.title}</h2>
          <div class="cover-subtitle">${page.subtitle}</div>
        </div>
        <div class="cover-art">${page.art}</div>
        <div style="font-size: 13px; opacity: 0.85;">
          Нажмите стрелку вправо или выберите главу сверху, чтобы листать книгу
        </div>
      </div>
    `;
  } else {
    const panelsHtml = page.panels
      .map(
        (panel, idx) => `
        <article class="comic-panel" data-panel-idx="${idx}">
          <div class="panel-art">
            ${panel.customImg ? `<img src="${panel.customImg}" alt="${panel.title}" />` : panel.art}
          </div>
          <div class="panel-caption">${panel.caption}</div>
        </article>
      `
      )
      .join('');

    bookEl.innerHTML = `
      <div class="page-header">
        <span class="chapter-tag">${page.chapterTitle}</span>
        <span class="page-num">Стр. ${currentPage} / ${pages.length - 1}</span>
      </div>
      <div class="panels-grid">${panelsHtml}</div>
    `;

    // Клик по кадру открывает крупный просмотр
    bookEl.querySelectorAll('.comic-panel').forEach((card) => {
      card.addEventListener('click', () => {
        const panel = page.panels[Number(card.dataset.panelIdx)];
        openLightbox(page.chapterTitle, panel);
      });
    });
  }

  // Обновление кнопок и счётчиков
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
  pageCounter.textContent = `Страница ${currentPage + 1} из ${pages.length}`;

  document.querySelectorAll('.chapter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.chapterId === page.chapterId);
  });

  document.querySelectorAll('.thumb-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentPage);
  });
}

function goToPage(index) {
  if (index < 0 || index >= pages.length || index === currentPage) return;
  const dir = index > currentPage ? 'next' : 'prev';
  currentPage = index;
  renderPage(dir);
}

function openLightbox(chapterTitle, panel) {
  lightboxChapter.textContent = chapterTitle;
  lightboxTitle.textContent = panel.title;
  lightboxCaption.textContent = panel.caption;
  lightboxFact.textContent = `Историческая справка: ${panel.fact}`;
  lightboxArt.innerHTML = panel.customImg
    ? `<img src="${panel.customImg}" alt="${panel.title}" />`
    : panel.art;
  lightbox.hidden = false;
}

lightboxClose.addEventListener('click', () => (lightbox.hidden = true));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.hidden = true;
});

prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

// Листание с клавиатуры
document.addEventListener('keydown', (e) => {
  if (!lightbox.hidden && e.key === 'Escape') {
    lightbox.hidden = true;
    return;
  }
  if (e.key === 'ArrowRight') goToPage(currentPage + 1);
  if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
});

// Загрузка пользовательских фотографий в кадры текущей страницы
photoInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  if (currentPage === 0) currentPage = 1;
  const page = pages[currentPage];

  files.forEach((file, idx) => {
    if (page.panels[idx]) {
      page.panels[idx].customImg = URL.createObjectURL(file);
    }
  });

  renderPage();
  photoInput.value = '';
});

buildNavigation();
renderPage();
