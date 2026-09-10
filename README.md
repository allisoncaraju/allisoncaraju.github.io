# Allison Car - Pintura Automotiva

Site institucional desenvolvido para a oficina **Allison Car**, especializada em pintura automotiva e localizada em Aracaju, Sergipe.

O projeto foi desenvolvido do zero com o objetivo de apresentar os serviços da oficina, facilitar o contato com clientes e disponibilizar informações sobre localização, horário de funcionamento e avaliação presencial.

## Site publicado

https://allisoncaraju.github.io/

## Repositório oficial

```text
https://github.com/allisoncaraju/allisoncaraju.github.io
```

## Sobre a oficina

A oficina Allison Car atua no mercado de pintura automotiva desde janeiro de 2015.

A oficina é conduzida por Allison, profissional com mais de 20 anos de experiência no setor automotivo.

### Localização

**Av. Brasil, 358 - Novo Paraíso**  
Aracaju - SE, 49082-065

## Tecnologias utilizadas

### Front-end

- HTML5
- CSS
- JavaScript Vanilla
- Font Awesome
- Google Fonts

### Tipografia

- **Montserrat** para títulos
- **Inter** para textos

## Funcionalidades

O site possui:

- layout responsivo para desktop, tablet e celular;
- menu de navegação;
- menu mobile;
- rolagem suave entre seções;
- imagem principal personalizada;
- seção de serviços;
- cards interativos;
- informações sobre orçamento presencial;
- integração com WhatsApp;
- integração com Google Maps;
- integração com Instagram;
- ligação telefônica por link;
- seção institucional;
- informações sobre experiência e localização;
- seção de contato;
- rodapé responsivo;
- favicon personalizado;
- acessibilidade básica;
- navegação por teclado;
- SEO;
- Open Graph;
- dados estruturados em JSON-LD;
- `robots.txt`;
- `sitemap.xml`;
- publicação automática através do GitHub Pages.

## Serviços apresentados

- Pintura automotiva
- Montagem de peças
- Polimento realizado por profissional parceiro
- Funilaria realizada por profissional parceiro

## Orçamento

Os orçamentos são realizados exclusivamente de forma presencial.

O site permite ao cliente consultar informações sobre os serviços, tirar dúvidas pelo WhatsApp e encontrar a localização da oficina.

## Estrutura do projeto

```text
allison-car/
├── assets/
│   ├── favicon.png
│   └── images/
│       └── hero-car.jpg
├── .gitignore
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── script.js
└── style.css
```

## Organização dos arquivos

### `index.html`

Responsável pela estrutura e conteúdo da página.

Inclui:

- HTML semântico;
- cabeçalho;
- navegação;
- conteúdo principal;
- serviços;
- orçamento;
- informações institucionais;
- contato;
- rodapé;
- metadados de SEO;
- Open Graph;
- JSON-LD;
- carregamento prioritário da imagem principal.

### `style.css`

Responsável pela identidade visual, layout e responsividade.

Utiliza recursos como:

- Flexbox;
- CSS Grid;
- Media Queries;
- gradients;
- transitions;
- transforms;
- pseudo-elementos;
- estados de hover;
- estados de focus;
- adaptação específica para dispositivos móveis.

### `script.js`

Responsável pelas interações do site.

Atualmente controla:

- rolagem suave entre links internos;
- animação de rolagem com `requestAnimationFrame`;
- abertura e fechamento do menu mobile;
- atualização de `aria-expanded`;
- atualização do `aria-label` do botão;
- fechamento automático do menu após a seleção de um link.

O JavaScript também possui verificações para evitar erros caso elementos necessários não estejam disponíveis na página.

## Identidade visual

As cores principais são:

```text
Vermelho
Preto
Branco
```

O vermelho é utilizado principalmente em botões, ícones, bordas e elementos de destaque.

Para pequenos textos de destaque foi utilizado um vermelho com contraste mais elevado, garantindo melhor acessibilidade sem descaracterizar a identidade visual.

## Responsividade

O site possui adaptação específica para telas de até:

```text
768px
```

Na versão mobile:

- o menu tradicional é substituído pelo menu hambúrguer;
- os cards passam para uma única coluna;
- títulos e textos são redimensionados;
- espaçamentos são reduzidos;
- botões passam a ocupar melhor a largura disponível;
- a imagem principal recebe enquadramento específico;
- efeitos inadequados para telas touch são reduzidos;
- o rodapé é reorganizado em uma única coluna.

## Acessibilidade

Foram implementadas melhorias de acessibilidade, incluindo:

- HTML semântico;
- navegação por teclado;
- `:focus-visible`;
- atributos `aria`;
- `aria-expanded`;
- `aria-controls`;
- `aria-label`;
- ícones decorativos com `aria-hidden`;
- contraste adequado entre textos e fundos;
- hierarquia correta de títulos;
- um único `h1` principal.

## SEO

O projeto possui:

- título otimizado;
- meta description;
- URL canônica;
- configuração de indexação;
- Open Graph;
- `og:url`;
- `og:image`;
- `og:image:alt`;
- `og:site_name`;
- HTML semântico;
- hierarquia de headings;
- `robots.txt`;
- `sitemap.xml`;
- dados estruturados em JSON-LD.

URL oficial:

```text
https://allisoncaraju.github.io/
```

Os dados estruturados identificam a Allison Car como uma empresa local do setor automotivo e incluem informações como nome, telefone, endereço, horário de funcionamento, Instagram e ano de início das atividades.

## Otimização de desempenho

A imagem principal foi comprimida de aproximadamente:

```text
1,73 MB
```

para aproximadamente:

```text
146 KB
```

A hero também utiliza preload e prioridade elevada:

```html
<link
  rel="preload"
  as="image"
  href="assets/images/hero-car.jpg"
  type="image/jpeg"
  fetchpriority="high"
/>
```

Isso permite ao navegador descobrir e carregar antecipadamente um dos recursos mais importantes da página.

## Lighthouse

Em um dos testes finais realizados na versão publicada, o projeto atingiu:

```text
Performance:        97
Accessibility:     100
Best Practices:    100
SEO:               100
```

Métricas registradas no mesmo teste:

```text
First Contentful Paint:   1,8 s
Largest Contentful Paint: 2,3 s
Total Blocking Time:      0 ms
Cumulative Layout Shift:  0
```

Os resultados de Performance podem variar entre execuções de acordo com rede, dispositivo, navegador e ambiente do teste.

## Refatoração e organização

Após a conclusão funcional do site, os principais arquivos foram revisados.

Foram realizados:

- remoção de comentários redundantes;
- redução de linhas em branco desnecessárias;
- padronização da formatação;
- remoção de metadados duplicados;
- melhoria na organização do JavaScript;
- correção de listeners duplicados do menu;
- inclusão de `type="button"` no botão do menu;
- melhoria dos atributos de acessibilidade;
- preservação apenas de comentários que documentam decisões técnicas relevantes.

O código permanece legível e não foi minificado, permitindo manutenção e estudo.

## Hospedagem

O site utiliza **GitHub Pages**.

Repositório:

```text
allisoncaraju/allisoncaraju.github.io
```

Branch utilizada:

```text
main
```

Diretório publicado:

```text
/ (root)
```

URL:

```text
https://allisoncaraju.github.io/
```

## Controle de versão

O projeto utiliza Git.

O repositório principal está configurado como:

```text
origin
```

apontando para:

```text
https://github.com/allisoncaraju/allisoncaraju.github.io.git
```

O repositório criado originalmente na conta pessoal foi preservado como backup.

## Fluxo para futuras atualizações

Após alterar algum arquivo:

```bash
git status
```

Adicionar as alterações:

```bash
git add .
```

Criar o commit:

```bash
git commit -m "Descrição da alteração"
```

Enviar para o GitHub:

```bash
git push
```

O GitHub Pages realizará automaticamente uma nova publicação.

## Como executar localmente

Com o projeto aberto no Visual Studio Code, é possível abrir o `index.html` diretamente no navegador ou utilizar a extensão **Live Server**.

Com Live Server:

```text
http://127.0.0.1:5500
```

## Contato da oficina

### WhatsApp

```text
(79) 9 9843-7032
```

### Instagram

```text
@allisoncar_
```

### Endereço

```text
Av. Brasil, 358 - Novo Paraíso
Aracaju - SE, 49082-065
```

## Horário de funcionamento

```text
Segunda a sexta: 08:00 às 18:30
Sábado:          08:00 às 13:00
Domingo:         Fechado
```

## Status do projeto

### Versão 1.0

A primeira versão do site está concluída, publicada e funcional.

A versão atual inclui estrutura completa, responsividade, acessibilidade, SEO, integrações externas, otimização de desempenho, controle de versão e publicação automática.

## Melhorias futuras

O desenvolvimento futuro poderá incluir galeria de trabalhos, comparações de antes e depois, fotos reais da oficina, avaliações de clientes, novas páginas, acompanhamento de indexação, melhorias de SEO local e outras funcionalidades conforme surgir necessidade.