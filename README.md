# Star Wars: O Império Contra-Ataca — Abertura Animada

Recriação da icônica abertura ("opening crawl") de **Star Wars: Episódio V — O Império Contra-Ataca** usando apenas **HTML, CSS e JavaScript**. O projeto simula a experiência do cinema: o texto introdutório "Há muito tempo, em uma galáxia muito, muito distante...", o logo em perspectiva e o texto rolando ao fundo estrelado, sincronizado com o tema musical.

## 🎬 Demonstração

Ao abrir a página, a sequência é executada automaticamente:

1. **Introdução** — "Há muito tempo, em uma galáxia muito, muito distante..." surge e desaparece em fade.
2. **Logo** — o logo em SVG surge em escala e encolhe em perspectiva.
3. **Crawl** — o texto do Episódio V rola em perspectiva 3D sobre o céu estrelado.
4. **Trilha sonora** — o tema de Star Wars toca no momento exato da animação (após ~8 s).

## ✨ Funcionalidades

- Céu estrelado com **100 estrelas** geradas dinamicamente via JavaScript.
- **Reposicionamento responsivo**: ao redimensionar a janela, as estrelas são recriadas sem acumular elementos.
- Texto rolando com perspectiva 3D (`transform: perspective(...) rotateX(...)`) e velocidade controlada por `@keyframes`.
- Logo renderizado em **SVG vetorial**, com animação de escala.
- Layout adaptado para diferentes tamanhos de tela via **media queries**.
- Trilha sonora integrada (`<audio>`) com início programado.

## 🛠️ Tecnologias

- **HTML5** — estrutura e SVG do logo.
- **CSS3** — animações (`@keyframes`), transformações 3D e responsividade.
- **JavaScript (vanilla + jQuery)** — geração de estrelas, posições aleatórias, tratamento de `resize` e controle de áudio.
- **Bootstrap 3** e **jQuery 3.7.1** — incluídos localmente no projeto.

## 📁 Estrutura do projeto

```
starwars_fatecmm/
├── index.html          # Página principal (logo SVG, texto e áudio)
├── css/
│   ├── bootstrap.min.css
│   └── style.css       # Animações, layout e responsividade
├── js/
│   ├── bootstrap.min.js
│   ├── jquery-3.7.1.min.js
│   └── script.js       # Geração de estrelas e controle do áudio
└── media/
    └── star_wars_theme.mp3
```

## 🚀 Como executar

Não há dependências para instalar. Basta abrir o arquivo `index.html` no navegador:

```bash
# opção 1: abrir diretamente
xdg-open index.html   # Linux
# start index.html     # Windows
# open index.html      # macOS
```

Ou servir com um servidor local (recomendado para o áudio funcionar corretamente em alguns navegadores):

```bash
# com Python
python3 -m http.server 8000

# ou com PHP (XAMPP)
php -S localhost:8000
```

Depois acesse `http://localhost:8000`.

> **Nota:** navegadores exigem interação do usuário para reproduzir áudio automaticamente. Caso o som não toque, clique na página antes/durante a animação.

## 🧩 Detalhes da implementação

- `pegarPosicoesRandom()` retorna um par `[x, y]` aleatório com base em `window.innerWidth` e `window.innerHeight`.
- `criarEstrelas()` cria as estrelas em loop e as anexa ao `body`.
- No evento `resize`, as estrelas antigas são removidas antes da recriação, evitando acúmulo de elementos no DOM.
- O áudio é disparado com `setTimeout` para coincidir com o fim da sequência de logo.

## 📜 Licença

Projeto de fins educacionais. *Star Wars* e todos os elementos relacionados são marcas registradas da Lucasfilm Ltd. Este projeto não possui fins comerciais.
