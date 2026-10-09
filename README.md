# 🚀 Cane Tech - Hotsite Profissional de Consultoria & Serviços de TI

Hotsite institucional de alta performance e conversão, desenvolvido especialmente para divulgação de serviços de consultoria em TI, implantação e parametrização de **ERP Bling**, desenvolvimento de automações/ferramentas sob demanda e gestão de infraestrutura de redes e suporte.

Projetado para ser **100% autohospedado no GitHub Pages**, com zero dependências de build, carregamento instantâneo, design moderno **Tech Dark Premium** e integração direta com WhatsApp.

---

## 📸 Demonstração Visual e Recursos

- **Design System Tech Dark**: Cores profundas (deep titanium), acentos em neon ciano e esmeralda, glassmorphism e tipografia moderna (*Plus Jakarta Sans* e *JetBrains Mono*).
- **Overview Completo de Serviços**:
  1. **Implantação de ERP Bling**: Configuração fiscal completa, integração com canais de venda (Mercado Livre, Shopee, Nuvemshop), controle de estoque multicanal e treinamento de equipe.
  2. **Automação & Ferramentas Sob Demanda**: Integrações via API REST, Webhooks, automações de dados e scripts sob medida.
  3. **Consultoria Técnica de Sistemas**: Diagnóstico de gargalos, otimização de custos de software e auditoria de processos.
  4. **Suporte & Infraestrutura de TI**: Redes corporativas, servidores, firewalls e política de Backup 3-2-1 imutável.
- **Portfólio Interativo com Filtros**:
  - Filtro em tempo real por categoria (Todos, ERP Bling, Automações, Infraestrutura e Consultoria).
  - Modal dinâmico com **Estudo de Caso Completo**: Desafio do negócio, Solução técnica implementada e Métricas de impacto alcançado.
- **Métricas de Impacto com Contadores Animados**:
  - +500h poupadas/mês por automações
  - +45 Empresas atendidas
  - 100% Sincronização Fiscal e Estoque
  - 99.9% Disponibilidade de Infraestrutura
- **Formulário de Orçamento com Integração WhatsApp**:
  - Gera uma mensagem pré-formatada com nome, empresa, serviço selecionado e resumo do projeto, abrindo direto no WhatsApp do cliente com 1 clique.
- **Botão Flutuante de WhatsApp**: Acesso rápido ao canal de atendimento em qualquer ponto da navegação.
- **SEO & Performance**: Marcação semântica HTML5, Meta tags Open Graph/Twitter e dados estruturados Schema.org JSON-LD.

---

## 📁 Estrutura de Arquivos

```text
canehotsite/
├── index.html                 # Página principal semântica com SEO e Schema.org
├── css/
│   └── style.css             # Design System, layout responsivo e animações
├── js/
│   └── main.js               # Filtros, modais, contadores e gerador de link WhatsApp
├── assets/
│   └── images/
│       ├── hero-dashboard.jpg        # Banner de tecnologia/automações do Hero
│       ├── project-erp.jpg           # Case Bling ERP & E-Commerce
│       ├── project-automation.jpg    # Case Automação e APIs
│       └── project-infra.jpg         # Case Infraestrutura de Redes e Servidores
└── README.md                  # Documentação do projeto e guia de deploy
```

---

## 🛠️ Como Personalizar Seus Dados

### 1. Alterar Número do WhatsApp
No arquivo [js/main.js](file:///home/fabio/Projetos/canehotsite/js/main.js), localize a linha com `WHATSAPP_PHONE`:
```javascript
const WHATSAPP_PHONE = '5511999999999'; // Substitua pelo seu DDI + DDD + Telefone (ex: 5511987654321)
```

E no arquivo [index.html](file:///home/fabio/Projetos/canehotsite/index.html), busque por `5511999999999` para atualizar os links diretos do cabeçalho, rodapé e botão flutuante.

### 2. Alterar E-mail e Nome/Marca
No arquivo [index.html](file:///home/fabio/Projetos/canehotsite/index.html), busque por `contato@canetech.com.br` e `Cane Tech` para inserir seus dados de contato.

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
git commit -m "feat: hotsite Cane Tech completo para GitHub Pages"

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
# Com Python 3:
python3 -m http.server 8080

# Em seguida, acesse no navegador:
http://localhost:8080
```
