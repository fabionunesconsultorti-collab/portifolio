/**
 * FÁBIO NUNES CONSULTOR TI - HOTSITE INTERATIVIDADE & ENGINE
 * Funcionalidades: Filtro de Portfólio, Modal de Casos de Sucesso,
 * Contadores Animados, Integração com WhatsApp e Menu Mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de componentes
  initNavbar();
  initPortfolioFilter();
  initProjectModal();
  initGithubProjects();
  initStatsCounter();
  initContactForm();
});

/* ==========================================================================
   DADOS DOS PROJETOS / PORTFÓLIO (CASES REAIS)
   ========================================================================== */
const projectsData = [
  {
    id: 'migracao-erp-reds',
    title: 'Migração Completa e Otimização de Custos de ERP',
    category: 'erp',
    categoryLabel: 'Migração de ERP',
    image: 'assets/images/project-erp.jpg',
    client: 'REDS Calçados',
    segment: 'Varejo de Calçados e Moda',
    tags: ['Migração de Dados', 'ERP', 'Faturamento', 'Estoque'],
    metricLabel: 'Impacto Comprovado',
    metricValue: 'Até 70% de redução nos custos de licenciamento',
    summary: 'Diagnóstico, planejamento, migração de dados e acompanhamento ponta a ponta na troca de um ERP legado caro e limitado por uma solução moderna e ágil.',
    challenge: 'Existência de um sistema legado dispendioso, lento e limitado para as novas demandas de vendas online e integrações multicanal.',
    solution: 'Condução de todo o diagnóstico, planejamento, migração de dados e acompanhamento de ponta a ponta na implantação de um ERP moderno, ágil e eficiente.',
    results: [
      { num: '-70%', label: 'Custos gerais com licenciamento' },
      { num: '↑', label: 'Velocidade de faturamento e estoque' },
      { num: 'Pronto', label: 'Base para e-commerce e marketplaces' }
    ],
    impacts: [
      'Redução de até 70% nos custos gerais com licenciamento, mantendo e elevando a qualidade e a disponibilidade sistêmica.',
      'Aumento na velocidade das rotinas de faturamento e estoque.',
      'Preparação da arquitetura base para conexão com ecossistemas de e-commerce e grandes marketplaces.'
    ]
  },
  {
    id: 'omnichannel-tray',
    title: 'Ecossistema Multicanal de Expansão Nacional',
    category: 'ecommerce',
    categoryLabel: 'Omnichannel & Hub',
    image: 'assets/images/project-omnichannel.jpg',
    client: 'REDS Calçados · Luana Milani Store',
    segment: 'Moda, Calçados e Confecção',
    tags: ['Tray E-commerce', 'Marketplaces', 'ERP', 'Estoque Unificado'],
    metricLabel: 'Expansão Geográfica',
    metricValue: 'Vendas nacionais com tração em MG e BA',
    summary: 'Integração total entre a plataforma Tray, marketplaces líderes e o ERP central, sincronizando estoque físico e digital em tempo real.',
    challenge: 'Necessidade de romper barreiras geográficas, abrir canais digitais estruturados e sincronizar estoque físico e digital em tempo real.',
    solution: 'Arquitetura e implantação de integração total entre plataforma de e-commerce (Tray), marketplaces líderes e o ERP central da operação.',
    results: [
      { num: 'Nacional', label: 'Capilaridade dos novos canais de venda' },
      { num: 'MG + BA', label: 'Estados com maior tração de vendas' },
      { num: 'Zero', label: 'Rupturas entre lojas físicas e virtuais' }
    ],
    impacts: [
      'Abertura de novos canais de vendas com capilaridade nacional, com tração principalmente em Minas Gerais e Bahia.',
      'Fim de rupturas de estoque entre lojas físicas e virtuais, com sincronização automática e faturamento escalável.'
    ]
  },
  {
    id: 'bling-multisegmento',
    title: 'Padronização e Implantação de ERP Bling em Múltiplos Segmentos',
    category: 'erp',
    categoryLabel: 'Implantação Bling ERP',
    image: 'assets/images/hero-dashboard.jpg',
    client: 'Luana Milani Store · Mia Bonita · Panterry Semijoias · Silva & Lima · Liv Beauty',
    segment: 'Moda, Semijoias, Móveis & Decoração, Cosméticos',
    tags: ['Bling ERP', 'NF-e / NFC-e', 'Financeiro', 'Multiloja'],
    metricLabel: 'Padronização Operacional',
    metricValue: 'Processos normalizados, documentados e sem retrabalho',
    summary: 'Estruturação e parametrização completa do Bling ERP: financeiro, estoque multiloja, fiscal (NF-e/NFC-e) e integração com e-commerce e hubs de venda.',
    challenge: 'Empresas de segmentos distintos operando com processos manuais, controles dispersos, custos com servidores locais e licenças excedentes, e lentidão no atendimento e despacho de pedidos.',
    solution: 'Estruturação e parametrização completa do Bling ERP; gestão financeira (fluxo de caixa, contas a pagar e a receber); controle e cadastro de estoque multiloja / físico / virtual; parametrização fiscal e emissão ágil de NF-e e NFC-e; integração nativa com canais de e-commerce e hubs de vendas.',
    results: [
      { num: '5+', label: 'Segmentos atendidos com o mesmo método' },
      { num: 'NF-e', label: 'Emissão fiscal ágil e parametrizada' },
      { num: '↓', label: 'Custos com servidores e licenças' }
    ],
    impacts: [
      'Normalização e documentação dos processos operacionais.',
      'Redução substancial no tempo de resposta para o atendimento e despacho de pedidos.',
      'Enxugamento de custos com servidores locais e licenças excedentes.',
      'Otimização da folha operacional, eliminando retrabalho manual.'
    ]
  },
  {
    id: 'bi-bling',
    title: 'Business Intelligence Estratégico Integrado ao Bling',
    category: 'bi',
    categoryLabel: 'BI & Dados',
    image: 'assets/images/project-bi.jpg',
    client: 'Mia Bonita Moda Feminina · Silva & Lima Móveis e Decorações',
    segment: 'Moda Feminina, Móveis e Decoração',
    tags: ['Bling API', 'Dashboards', 'Curva ABC', 'Giro de Estoque'],
    metricLabel: 'Gestão Orientada a Dados',
    metricValue: 'Fim das planilhas paralelas e decisões em tempo real',
    summary: 'Painéis de BI customizados conectados à base do Bling, com métricas de faturamento, margem, curva ABC de produtos e giro de estoque.',
    challenge: 'Falta de clareza nos relatórios padrão do ERP, dispersão de informações em planilhas manuais paralelas (Excel) e demora na tomada de decisão gerencial.',
    solution: 'Concepção e implantação de painéis de BI customizados, integrados à base de dados do Bling, com foco em métricas de faturamento, margem, curva ABC de produtos e giro de estoque.',
    results: [
      { num: 'Zero', label: 'Controles paralelos em papel e Excel' },
      { num: 'ABC', label: 'Curva de produtos e giro de estoque' },
      { num: 'Real-time', label: 'Indicadores atualizados dinamicamente' }
    ],
    impacts: [
      'Eliminação de controles paralelos e papéis no dia a dia da gestão.',
      'Redução drástica no tempo de resposta da diretoria para compras, precificação e reposição de estoque.',
      'Decisões embasadas em indicadores reais e atualizados dinamicamente.'
    ]
  },
  {
    id: 'turnaround-baurufer',
    title: 'Saneamento de Dados e Recuperação de Implantação Crítica',
    category: 'consultoria',
    categoryLabel: 'Turnaround Sistêmico',
    image: 'assets/images/project-turnaround.jpg',
    client: 'Baurufer Metalúrgica',
    segment: 'Indústria e Distribuição',
    tags: ['Auditoria de BD', 'Conformidade Fiscal', 'Integrações', 'SQL'],
    metricLabel: 'Recuperação Operacional',
    metricValue: 'Operação restabelecida e conformidade fiscal garantida',
    summary: 'Intervenção técnica em sistema com implantação anterior falha: auditoria de banco, correção fiscal/cadastral e reparametrização das integrações.',
    challenge: 'Sistema com implantação anterior falha, parâmetros fiscais incorretos e rotinas de importação de dados corrompidas/quebradas, paralisando a operação.',
    solution: 'Intervenção técnica para auditoria de banco de dados, correção de inconsistências fiscais/cadastrais, saneamento da base e reparametrização completa das integrações.',
    results: [
      { num: 'Estável', label: 'Operação e importações confiáveis' },
      { num: '100%', label: 'Base auditada e saneada' },
      { num: 'Fiscal ✓', label: 'Cálculos corrigidos e em conformidade' }
    ],
    impacts: [
      'Restabelecimento da estabilidade operacional e confiabilidade nas importações de documentos e pedidos.',
      'Correção de cálculos e conformidade fiscal na emissão dos documentos industriais.'
    ]
  },
  {
    id: 'infra-governanca',
    title: 'Governança, Continuidade de Negócios e Cibersegurança',
    category: 'infra',
    categoryLabel: 'Infraestrutura & Segurança',
    image: 'assets/images/project-infra.jpg',
    client: 'Interjeans · Escolas Municipais de Americana · Escritórios de Advocacia · REDS Calçados',
    segment: 'Indústria, Setor Público, Jurídico e Varejo',
    tags: ['pfSense', 'VPN', 'Backup 3-2-1', 'Zabbix', 'Linux'],
    metricLabel: 'Disponibilidade e Segurança',
    metricValue: 'Ambientes protegidos com operação contínua',
    summary: 'Firewalls pfSense/Linux, VPNs entre filiais, servidores de arquivos com permissões por perfil, backups 3-2-1 automatizados e monitoramento Zabbix.',
    challenge: 'Ambientes corporativos e públicos expostos a paradas não programadas, ameaças virtuais e ausência de governança sobre dados estratégicos.',
    solution: 'Implantação e configuração de Firewalls pfSense / Linux, controle de tráfego, VPNs interligando filiais e filtragem de acessos; servidores dedicados de dados e arquivos com permissões por perfil de usuário; política robusta de Backups Automatizados (3-2-1) e monitoramento de ativos (Zabbix).',
    results: [
      { num: '3-2-1', label: 'Política de backups automatizados' },
      { num: 'VPN', label: 'Filiais interligadas com segurança' },
      { num: '24/7', label: 'Monitoramento de ativos (Zabbix)' }
    ],
    impacts: [
      'Ambientes corporativos seguros contra paradas não programadas e ameaças virtuais.',
      'Garantia de operabilidade contínua (alta disponibilidade) e governança sobre os dados estratégicos das empresas.'
    ]
  }
];

/* ==========================================================================
   PROJETOS OPEN SOURCE (GITHUB)
   ========================================================================== */
const GITHUB_USER = 'fabionunesconsultorti-collab';

const githubProjects = [
  {
    repo: 'crm-gamificado',
    title: 'CRM Pro Gamificado',
    language: 'HTML / JS',
    featured: true,
    icon: 'crm',
    description: 'CRM web modular com funil de vendas Kanban, prospecção ativa via Google Maps, atendimento autônomo no WhatsApp com IA (RAG híbrido), integração com Bling ERP e gamificação de equipes comerciais com XP e níveis.',
    tags: ['Kanban', 'WhatsApp + IA', 'RAG', 'Bling ERP', 'Docker']
  },
  {
    repo: 'BlingBI',
    title: 'BlingBI',
    language: 'Python',
    featured: true,
    icon: 'bi',
    description: 'Business Intelligence e painel executivo em Python Flask, rodando localmente e conectado ao Bling ERP via API e Webhooks em tempo real (túnel HTTPS automatizado com Ngrok). Inicialização com 1 clique no Windows e Linux.',
    tags: ['Flask', 'Bling API', 'Webhooks', 'Dashboards']
  },
  {
    repo: 'gerenciazap',
    title: 'GerenciaZap',
    language: 'Python / HTML',
    icon: 'zap',
    description: 'Sistema de atendimento e prospecção via WhatsApp para equipes de vendedores, com módulo de cobranças inteligente e instalação simplificada para Windows.',
    tags: ['WhatsApp', 'Equipes de Venda', 'Cobrança']
  },
  {
    repo: 'CraftManager',
    title: 'CraftManager',
    language: 'HTML / JS',
    icon: 'craft',
    description: 'Gestão de produção e precificação de custos para pequenas empresas de produtos artesanais e personalizados — nascido para uma fabriqueta de papelaria personalizada e adaptável a diversos nichos.',
    tags: ['Precificação', 'Produção', 'Pequenos Negócios']
  },
  {
    repo: 'GoHorseMultipleImageConverter',
    title: 'GoHorse Image Converter',
    language: 'Python',
    icon: 'image',
    description: 'Conversor de formatos e tamanhos de imagens em lote, pensado para padronizar fotos de produtos para plataformas de e-commerce e marketplaces.',
    tags: ['Processamento em Lote', 'E-commerce', 'Pillow']
  },
  {
    repo: 'imaisdocumentador',
    title: 'iMais Documentador',
    language: 'Python',
    icon: 'doc',
    description: 'Ferramenta de apoio à documentação de processos e sistemas combinando capturas de tela e texto — agiliza manuais de implantação e treinamentos.',
    tags: ['Documentação', 'Prints + Texto', 'Treinamento']
  },
  {
    repo: 'jogodalatinha',
    title: 'Jogo da Latinha',
    language: 'Python',
    icon: 'game',
    description: 'Gerador automático de cartas para o jogo de dinâmica e agilidade: suba as formas e gere seus próprios temas. Interface CustomTkinter e instaladores .exe e .deb.',
    tags: ['CustomTkinter', 'Pillow', 'Instaladores']
  }
];

const githubIcons = {
  crm: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  bi: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  zap: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  craft: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  game: '<rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/>'
};

/* ==========================================================================
   NAVBAR & SCROLL BEHAVIOR
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   PORTFÓLIO: RENDERIZAÇÃO E FILTRAGEM
   ========================================================================== */
function initPortfolioFilter() {
  const grid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <span class="project-category-badge">${project.categoryLabel}</span>
        </div>
        <div class="project-body">
          <div class="project-client">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
            ${project.client}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.summary}</p>
          
          <div class="project-meta-box">
            <div class="project-meta-label">${project.metricLabel}</div>
            <div class="project-meta-value">${project.metricValue}</div>
          </div>

          <div class="project-tags">
            ${project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>

          <button type="button" class="btn-project-details" data-id="${project.id}">
            Ver Estudo de Caso Completo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Re-atribui evento de clique nos botões de detalhes
    document.querySelectorAll('.btn-project-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Evento dos botões de filtro
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Render inicial
  renderProjects('all');
}

/* ==========================================================================
   MODAL DE DETALHES DO PROJETO
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const project = projectsData.find(p => p.id === projectId);
  if (!modal || !project) return;

  const modalImg = document.getElementById('modal-image');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalMetrics = document.getElementById('modal-metrics-container');

  const modalClient = document.getElementById('modal-client');
  const modalSegment = document.getElementById('modal-segment');
  const modalImpacts = document.getElementById('modal-impacts');

  modalImg.src = project.image;
  modalImg.alt = project.title;
  modalTag.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  if (modalClient) modalClient.textContent = project.client;
  if (modalSegment) modalSegment.textContent = project.segment;
  modalChallenge.textContent = project.challenge;
  modalSolution.textContent = project.solution;

  if (modalImpacts) {
    modalImpacts.innerHTML = (project.impacts || []).map(i => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${i}</span>
      </li>
    `).join('');
  }

  modalMetrics.innerHTML = project.results.map(r => `
    <div class="modal-metric-box">
      <div class="modal-metric-num">${r.num}</div>
      <div class="modal-metric-desc">${r.label}</div>
    </div>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   PROJETOS GITHUB: RENDERIZAÇÃO + DADOS AO VIVO (ESTRELAS / ATUALIZAÇÃO)
   ========================================================================== */
function initGithubProjects() {
  const grid = document.getElementById('github-grid');
  if (!grid) return;

  grid.innerHTML = githubProjects.map(p => `
    <article class="gh-card${p.featured ? ' gh-card--featured' : ''}" id="gh-${p.repo}">
      <div class="gh-card-head">
        <div class="gh-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${githubIcons[p.icon] || ''}</svg>
        </div>
        <div class="gh-card-heading">
          <h3 class="gh-card-title">${p.title}</h3>
          <span class="gh-card-repo">${GITHUB_USER}/<strong>${p.repo}</strong></span>
        </div>
        ${p.featured ? '<span class="gh-featured-badge">Destaque</span>' : ''}
      </div>
      <p class="gh-card-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
      <div class="gh-card-footer">
        <div class="gh-card-stats">
          <span class="gh-lang"><span class="gh-lang-dot" data-lang="${p.language.split(' ')[0]}"></span>${p.language}</span>
          <span class="gh-stars" data-repo="${p.repo}" hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span class="gh-stars-count">0</span>
          </span>
        </div>
        <a href="https://github.com/${GITHUB_USER}/${p.repo}" target="_blank" rel="noopener" class="gh-card-link" id="gh-link-${p.repo}">
          Ver no GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </article>
  `).join('');

  // Enriquecimento opcional com dados ao vivo (falha silenciosamente se offline / rate limit)
  fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
    .then(r => (r.ok ? r.json() : []))
    .then(repos => {
      if (!Array.isArray(repos)) return;
      repos.forEach(repo => {
        const starsEl = grid.querySelector(`.gh-stars[data-repo="${repo.name}"]`);
        if (starsEl && repo.stargazers_count > 0) {
          starsEl.querySelector('.gh-stars-count').textContent = repo.stargazers_count;
          starsEl.hidden = false;
        }
      });
      const countEl = document.getElementById('gh-repo-count');
      if (countEl) countEl.textContent = repos.filter(r => !r.fork).length;
    })
    .catch(() => {});
}

/* ==========================================================================
   CONTADORES ANIMADOS DE ESTATÍSTICAS
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.ceil(target / 45);
          const duration = 1800; // ms
          const stepTime = Math.abs(Math.floor(duration / (target / increment)));

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = `${prefix}${current}${suffix}`;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   INTEGRAÇÃO FORMULÁRIO COM WHATSAPP
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('quick-quote-form');
  if (!form) return;

  // WhatsApp configurado com o número de atendimento
  const WHATSAPP_PHONE = '5519998306652';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const company = document.getElementById('form-company').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const serviceRadio = document.querySelector('input[name="service-type"]:checked');
    const service = serviceRadio ? serviceRadio.value : 'Consultoria Geral';
    const message = document.getElementById('form-message').value.trim();

    const text = 
      `*Solicitação de Diagnóstico / Orçamento - Fábio Nunes Consultor TI*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `🏢 *Empresa:* ${company || 'Não informada'}\n` +
      `📞 *Contato:* ${phone}\n` +
      `⚙️ *Interesse Principal:* ${service}\n` +
      `📝 *Detalhes:* ${message || 'Gostaria de agendar uma conversa para entender como podemos atuar.'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  });
}
