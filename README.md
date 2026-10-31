# Leguará — Plataforma de Educação Cultural Brasileira

Plataforma educacional multimodal sobre cultura brasileira, com conteúdo acessível para diferentes formas de aprendizagem.

## Como publicar no GitHub Pages

### 1. Estrutura de arquivos necessária

```
leguara/
├── index.html          ← arquivo principal da plataforma
├── style.css / script.js
├── palacios.css        ← estilos da página Palácios Mentais
├── palacios.js         ← conteúdo e lógica dos Palácios Mentais
├── README.md           ← este arquivo
└── audio/
    ├── africana.mp3
    ├── indigena.mp3
    ├── biomas.mp3
    ├── rio.mp3
    └── imigracao.mp3
```

> **Atenção:** a pasta `audio/` precisa existir com exatamente esses nomes.

---

### 2. Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login (ou crie uma conta gratuita)
2. Clique em **"+"** (canto superior direito) → **"New repository"**
3. Nome: `leguara`
4. Marque: ✅ **Public**
5. Clique em **"Create repository"**

---

### 3. Fazer upload dos arquivos

**Opção A — Pelo navegador (mais simples):**

1. Na página do repositório, clique em **"uploading an existing file"**
2. Arraste o arquivo `index.html` e o `README.md`
3. Clique em **"Commit changes"**
4. Para criar a pasta `audio/`: clique em **"Add file" → "Create new file"**
5. No nome do arquivo, digite: `audio/.gitkeep`
6. Clique em **"Commit new file"**
7. Volte para a pasta `audio/` → **"Add file" → "Upload files"**
8. Arraste os 5 arquivos `.mp3` → **"Commit changes"**

**Opção B — Com Git (para quem já usa o terminal):**
```bash
git clone https://github.com/seu-usuario/leguara.git
cd leguara
mkdir audio
cp caminho/index.html .
cp caminho/*.mp3 audio/
git add .
git commit -m "Leguará: versão inicial"
git push
```

---

### 4. Ativar o GitHub Pages

1. No repositório, vá em **Settings** (aba no topo)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"**, selecione: **"Deploy from a branch"**
4. Em **"Branch"**, selecione: **"main"** e **"/ (root)"**
5. Clique em **"Save"**
6. Aguarde 1–3 minutos
7. Seu site estará disponível em: `https://seu-usuario.github.io/leguara`

---

### 5. Como editar depois

**Editar o HTML pelo navegador:**
1. Acesse o repositório no GitHub
2. Clique no arquivo `index.html`
3. Clique no ícone de lápis ✏️ (canto superior direito do arquivo)
4. Faça as alterações desejadas
5. Clique em **"Commit changes"**
6. O site atualiza automaticamente em ~1 minuto

---

## Temas disponíveis

| Tema | Formatos |
|------|----------|
| Ancestralidade Africana | Padrão · Simplificada · Ultra objetiva · Leitura visual · Quiz · Professor · Áudio · Mapa interativo · Atividade |
| Ancestralidade Indígena | Padrão · Simplificada · Ultra objetiva · Leitura visual · Quiz · Professor · Áudio · Mapa interativo · Atividade |
| Biomas Brasileiros | Padrão · Simplificada · Ultra objetiva · Leitura visual · Quiz · Professor · Áudio · Mapa interativo · Quiz Genially |
| História do Rio de Janeiro | Padrão · Simplificada · Ultra objetiva · Leitura visual · Quiz · Professor · Áudio · Mapa interativo · Quiz Genially |
| Imigração no Brasil | Padrão · Simplificada · Ultra objetiva · Leitura visual · Quiz · Professor · Áudio · Mapa interativo · Quiz Genially |

---

## Palácios Mentais

Página em que cada tema vira uma casa em 2D. O usuário percorre os cômodos em ordem, toca nos objetos e liga cada um a um conhecimento. Cada casa tem uma âncora sensorial (cheiro, estação, som, textura) e um som ambiente gerado no próprio navegador. No modo **Lembrar**, os objetos ficam escondidos para treinar a memória. Para editar casas, cômodos e objetos, mexa no objeto `PALACIOS` no início de `palacios.js`.

---

## Alternativas gratuitas ao GitHub Pages

| Plataforma | Vantagem | Como usar |
|------------|----------|-----------|
| **Cloudflare Pages** | Mais rápido, CDN global | Conecta ao GitHub, publica automaticamente |
| **Vercel** | Fácil, preview automático | Conecta ao GitHub em vercel.com |
| **Netlify** | Arrasta pasta, vai ao ar | netlify.com/drop — arrasta a pasta inteira |

---

## Projeto Leguará

Plataforma de educação cultural brasileira.  
Produzido com ❤️ para professores, estudantes e brasileiros no mundo.
