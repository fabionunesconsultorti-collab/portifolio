# 🚀 Fábio Nunes Consultor TI - Hotsite Profissional de Consultoria & Serviços de TI

Hotsite institucional de alta performance e conversão, desenvolvido especialmente para divulgação de serviços de consultoria em TI, implantação e parametrização de **ERP Bling**, desenvolvimento de automações/ferramentas sob demanda e gestão de infraestrutura de redes e suporte.

Projetado para ser **100% autohospedado no GitHub Pages**, com zero dependências de build, carregamento instantâneo, design moderno **Tech Dark Premium** e integração direta com WhatsApp.

---

## 📸 Demonstração Visual e Recursos

- **Design System Tech Dark Premium**: Cores profundas (deep titanium), acentos em neon ciano e esmeralda, glassmorphism e tipografia moderna (*Plus Jakarta Sans* e *JetBrains Mono*).
- **Perfil & Pilares de Atuação Especializada**:
  - Gestão & Sistemas (ERPs, WMS, parametrização e normalização)
  - Omnichannel & Hub (Tray, Marketplaces, Automação n8n/Python)
  - Infraestrutura & Segurança (pfSense, Backups 3-2-1, Linux/AWS)
- **Modelos de Contratação Especializados**:
  1. Diagnóstico e Turnaround Sistêmico
  2. Implantação de ERP & Hubs de Venda
  3. Desenvolvimento de Dashboards / BI
  4. Infraestrutura, Segurança e Backup
- **6 Cases de Sucesso Reais Implementados**:
  1. **REDS Calçados**: Migração Completa e Otimização de Custos de ERP (Redução de até 70% em licenciamento)
  2. **REDS Calçados / Luana Milani Store**: Ecossistema Multicanal de Expansão Nacional (Tray + Marketplaces + ERP)
  3. **Luana Milani, Mia Bonita, Panterry, Silva & Lima, Liv Beauty**: Padronização e Implantação de ERP Bling em Múltiplos Segmentos
  4. **Mia Bonita / Silva & Lima**: Business Intelligence Estratégico Integrado ao Bling
  5. **Baurufer Metalúrgica**: Normalização, Saneamento de Dados e Recuperação de Implantação Crítica
  6. **Interjeans, Escolas Municipais de Americana, Escritórios de Advocacia, Varejo**: Governança, Continuidade de Negócios e Cibersegurança
- **Laboratório Open Source / Projetos GitHub**:
  - Vitrine integrada dos repositórios públicos de [`@fabionunesconsultorti-collab`](https://github.com/fabionunesconsultorti-collab) (CRM Pro Gamificado com WhatsApp e IA, BlingBI, GerenciaZap, CraftManager, GoHorse Image Converter, iMais Documentador, Jogo da Latinha).
  - Consulta assíncrona automática à API pública do GitHub para exibição de métricas e estrelas.
- **Formulário de Orçamento com Integração WhatsApp**:
  - Gera uma mensagem pré-formatada e estruturada pronta para envio via WhatsApp em 1 clique.
- **Botão Flutuante de WhatsApp**: Atendimento ágil e direto em qualquer ponto de rolagem.
- **SEO & Performance**: Marcação semântica HTML5, Meta tags Open Graph/Twitter e dados estruturados Schema.org JSON-LD.

---

## 📁 Estrutura de Arquivos

```text
canehotsite/
├── index.html                 # Página principal com SEO, Schema.org e novas seções
├── css/
│   └── style.css             # Design System, layout responsivo, pilares e cards GitHub
├── js/
│   └── main.js               # Dados dos 6 cases, catálogo GitHub, modais e WhatsApp
├── assets/
│   └── images/
│       ├── hero-dashboard.jpg        # Banner de tecnologia/automações do Hero
│       ├── project-erp.jpg           # Case Migração de ERP (REDS Calçados)
│       ├── project-omnichannel.jpg   # Case Omnichannel Tray + Marketplaces
│       ├── project-bi.jpg            # Case Business Intelligence Bling ERP
│       ├── project-turnaround.jpg    # Case Turnaround e Auditoria (Baurufer)
│       └── project-infra.jpg         # Case Infraestrutura, pfSense e Backups
└── README.md                  # Documentação do projeto e guia de deploy
```

---

## 🛠️ Como Personalizar Seus Dados

### 1. Número do WhatsApp
Configurado com `5519998306652` ((19) 99830-6652) no [js/main.js](file:///home/fabio/Projetos/canehotsite/js/main.js) e [index.html](file:///home/fabio/Projetos/canehotsite/index.html).

### 2. E-mail e Nome/Marca
Configurado com `fabionunes.consultorti@gmail.com` e `Fábio Nunes Consultor TI`.

---

## 🌐 Como Publicar no GitHub Pages (Passo a Passo)

Como o hotsite é estático e puro (Vanilla HTML/CSS/JS), a publicação no GitHub Pages é automática e gratuita:

### Passo 1: Criar o Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Dê um nome ao repositório (exemplo: `canehotsite` ou `<seu-usuario>.github.io`)
3. Deixe o repositório marcado como **Public** e clique em **Create repository**.

### Passo 2: Subir os Arquivos via Terminal
Execute os comandos abaixo na pasta do projeto:

```bash
# 1. Iniciar o Git (caso ainda não iniciado)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: hotsite Fábio Nunes Consultor TI completo para GitHub Pages"

# 4. Vincular seu repositório remoto (substitua com o link do seu repositório)
git remote add origin https://github.com/<SEU_USUARIO>/canehotsite.git

# 5. Definir a branch principal como main e enviar os arquivos
git branch -M main
git push -u origin main
```

### Passo 3: Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, selecione **Pages**.
3. Na seção **Build and deployment**:
   - **Source**: Selecione `Deploy from a branch`
   - **Branch**: Selecione `main` e a pasta `/ (root)`
4. Clique em **Save**.
5. Aguarde cerca de 1 a 2 minutos. O GitHub exibirá o link público do seu site:
   `https://<seu-usuario>.github.io/canehotsite/`

---

## 💻 Testando Localmente

Para abrir e visualizar o site em sua máquina:
```bash
./iniciar.sh
```

Ou diretamente com Python:
```bash
python3 -m http.server 8090
```
Em seguida, acesse no navegador:
👉 **http://localhost:8090**
