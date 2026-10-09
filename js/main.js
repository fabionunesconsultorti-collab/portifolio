/**
 * CANE TECH - HOTSITE INTERATIVIDADE & ENGINE
 * Funcionalidades: Filtro de Portfólio, Modal de Casos de Sucesso,
 * Contadores Animados, Integração com WhatsApp e Menu Mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de componentes
  initNavbar();
  initPortfolioFilter();
  initProjectModal();
  initStatsCounter();
  initContactForm();
});

/* ==========================================================================
   DADOS DOS PROJETOS / PORTFÓLIO
   ========================================================================== */
const projectsData = [
  {
    id: 'bling-ecommerce',
    title: 'Implantação Bling ERP & Integração Multi-Canal',
    category: 'erp',
    categoryLabel: 'ERP & E-Commerce',
    image: 'assets/images/project-erp.jpg',
    tags: ['Bling ERP', 'Mercado Livre', 'Shopee', 'Nuvemshop', 'Emissão Fiscal'],
    metricLabel: 'Impacto Comprovado',
    metricValue: '85% menos tempo em expedição e faturamento',
    summary: 'Estruturação completa do ERP Bling para distribuidora de comércio eletrônico, unificando estoque físico e virtual em múltiplos canais de venda.',
    challenge: 'A empresa sofria com rupturas frequentes de estoque, erros manuais na emissão de notas fiscais e atrasos críticos no despacho diário de mais de 300 pedidos.',
    solution: 'Parametrização fiscal e tributária completa do Bling, integração direta via API com Mercado Livre, Shopee e Nuvemshop, implantação de bipagem por código de barras na conferência e treinamento integral dos operadores.',
    results: [
      { num: '85%', label: 'Redução no tempo de faturamento' },
      { num: '0%', label: 'Taxa de ruptura por saldo desatualizado' },
      { num: '3x', label: 'Aumento na capacidade de envio diário' }
    ]
  },
  {
    id: 'automacao-pedidos',
    title: 'Pipeline de Automação de Dados & Webhooks',
    category: 'automacao',
    categoryLabel: 'Automação Sob Demanda',
    image: 'assets/images/project-automation.jpg',
    tags: ['Node.js / Python', 'APIs & Webhooks', 'WhatsApp API', 'Sincronização'],
    metricLabel: 'Economia Operacional',
    metricValue: '+40 horas manuais poupadas por semana',
    summary: 'Criação de esteira automática de conexão entre plataforma de vendas, gateway de pagamento e envio instantâneo de avisos de rastreio aos clientes.',
    challenge: 'A equipe perdia 8 horas por dia conferindo planilhas manuais, atualizando status de entrega e respondendo clientes repetidamente pelo WhatsApp.',
    solution: 'Desenvolvimento de uma ferramenta em nuvem sob demanda que processa webhooks de pagamento, dispara atualização de status e envia mensagem automática com código de rastreamento no WhatsApp.',
    results: [
      { num: '100%', label: 'Processamento autônomo sem planilha' },
      { num: '< 2s', label: 'Latência média de notificação' },
      { num: '+98%', label: 'Satisfação dos clientes com tracking' }
    ]
  },
  {
    id: 'infra-firewall-backup',
    title: 'Modernização de Infraestrutura de TI & Backup 3-2-1',
    category: 'infra',
    categoryLabel: 'Infraestrutura & Redes',
    image: 'assets/images/project-infra.jpg',
    tags: ['Servidores Linux', 'Redes Corporativas', 'Firewall pfSense', 'Backup Nuvem'],
    metricLabel: 'Disponibilidade e Segurança',
    metricValue: '99.9% de uptime e blindagem contra ransomware',
    summary: 'Auditoria técnica, reestruturação física e lógica de rede corporativa, implementação de firewall dedicado e política automatizada de backup em nuvem.',
    challenge: 'Rede interna instável, quedas contínuas durante o expediente, servidores sem redundância e vulnerabilidade severa contra perdas de dados em caso de falha de disco.',
    solution: 'Instalação de firewall de borda com balanceamento de links de internet, segmentação de VLANs para escritório e convidados, e implantação de rotina de backup imutável com regra 3-2-1 (local + offsite).',
    results: [
      { num: '99.9%', label: 'Uptime estável da infraestrutura' },
      { num: 'Zero', label: 'Incidentes de perda de dados' },
      { num: '15 min', label: 'RTO (tempo de recuperação) testado' }
    ]
  },
  {
    id: 'consultoria-sistemas',
    title: 'Consultoria de Sistemas & Conciliação Automática',
    category: 'consultoria',
    categoryLabel: 'Consultoria de TI',
    image: 'assets/images/hero-dashboard.jpg',
    tags: ['Arquitetura de TI', 'ETL de Dados', 'Dashboards', 'Otimização de Custos'],
    metricLabel: 'Eficiência de Gestão',
    metricValue: 'Fechamento financeiro de 3 dias para 15 minutos',
    summary: 'Diagnóstico técnico da stack de softwares da empresa, substituição de ferramentas redundantes e script de conciliação financeira entre bancos e ERP.',
    challenge: 'A diretoria operava com softwares legados caros e desalinhados, gastando dias no final de cada mês para cruzar extratos bancários com contas a receber.',
    solution: 'Mapeamento de processos, cancelamento de 4 softwares redundantes, implementação de rotina em Python para conciliação bancária automática com exportação gerencial em dashboard.',
    results: [
      { num: '-42%', label: 'Redução em custos mensais de SaaS' },
      { num: '15 min', label: 'Fechamento financeiro completo' },
      { num: '100%', label: 'Visibilidade de fluxo de caixa em tempo real' }
    ]
  }
];

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
      });
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

  modalImg.src = project.image;
  modalImg.alt = project.title;
  modalTag.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalChallenge.textContent = project.challenge;
  modalSolution.textContent = project.solution;

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

  // Substitua pelo número real do WhatsApp (DDI + DDD + Número)
  // Exemplo padrão formatado para o usuário personalizar facilmente
  const WHATSAPP_PHONE = '5511999999999';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const company = document.getElementById('form-company').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const serviceRadio = document.querySelector('input[name="service-type"]:checked');
    const service = serviceRadio ? serviceRadio.value : 'Consultoria Geral';
    const message = document.getElementById('form-message').value.trim();

    const text = 
      `*Solicitação de Diagnóstico / Orçamento - Cane Tech*\n\n` +
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
