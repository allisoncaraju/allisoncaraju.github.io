# Allison Car - Pintura Automotiva

Site institucional desenvolvido para a oficina **Allison Car**, especializada em pintura automotiva e localizada em Aracaju, Sergipe.

O projeto foi desenvolvido do zero com o objetivo de apresentar os serviços da oficina, facilitar o contato com clientes e disponibilizar informações sobre localização, horário de funcionamento e avaliação presencial.

## Site publicado

O site está disponível em:

https://allisoncaraju.github.io/

## Repositório oficial

O projeto está hospedado no GitHub através da organização:

```text
allisoncaraju
```

Repositório:

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

### Fontes

- **Montserrat** para títulos
- **Inter** para textos

## Funcionalidades

O site possui:

- layout responsivo para desktop, tablet e celular;
- imagem principal personalizada e otimizada;
- menu de navegação;
- menu mobile;
- rolagem suave entre seções;
- seção de serviços;
- cards interativos;
- seção de orçamento presencial;
- integração com WhatsApp;
- integração com Google Maps;
- integração com Instagram;
- seção institucional da oficina;
- informações sobre experiência profissional;
- seção de contato;
- rodapé responsivo;
- favicon personalizado;
- acessibilidade básica;
- navegação por teclado;
- estrutura HTML semântica;
- SEO básico;
- Open Graph;
- dados estruturados em JSON-LD;
- `robots.txt`;
- `sitemap.xml`;
- publicação através do GitHub Pages.

## Serviços apresentados

- Pintura automotiva
- Montagem de peças
- Polimento realizado por profissional parceiro
- Funilaria realizada por profissional parceiro

## Orçamento

Os orçamentos são realizados exclusivamente de forma presencial.

O site permite ao cliente:

- tirar dúvidas pelo WhatsApp;
- consultar a localização da oficina;
- visualizar o horário de funcionamento;
- acessar o Instagram da oficina;
- encontrar informações sobre os serviços oferecidos.

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

Responsável pela estrutura e pelo conteúdo do site.

Contém:

- cabeçalho;
- navegação;
- conteúdo principal;
- serviços;
- informações sobre orçamento;
- seção institucional;
- contato;
- rodapé;
- metadados de SEO;
- Open Graph;
- dados estruturados em JSON-LD.

### `style.css`

Responsável pela aparência e responsividade do site.

O projeto utiliza:

- Flexbox;
- CSS Grid;
- Media Queries;
- Transitions;
- Transforms;
- Gradients;
- Pseudo-elementos;
- estados de `hover`;
- estados de `focus`;
- responsividade para dispositivos móveis.

### `script.js`

Responsável pelas interações do site.

Atualmente controla:

- rolagem suave entre seções;
- abertura e fechamento do menu mobile;
- fechamento automático do menu após selecionar uma opção;
- atualização dos atributos de acessibilidade do menu.

### `assets/`

Diretório utilizado para os arquivos visuais do projeto.

Atualmente contém:

- favicon da oficina;
- imagem principal da página.

### `robots.txt`

Arquivo utilizado para fornecer instruções aos mecanismos de busca.

Também contém a referência para o sitemap oficial do site.

### `sitemap.xml`

Mapa do site utilizado para informar aos mecanismos de busca qual é a URL oficial disponível para indexação.

Como o projeto atualmente é um site de página única, o sitemap possui apenas a página principal.

## Identidade visual

As principais cores utilizadas são:

- **Vermelho** — cor principal
- **Preto** — cor secundária
- **Branco** — cor terciária

O vermelho é utilizado principalmente em:

- botões;
- títulos de destaque;
- ícones;
- bordas;
- interações;
- elementos da identidade visual.

## Responsividade

O site foi desenvolvido para funcionar em diferentes tamanhos de tela.

Existe uma adaptação específica para telas de até `768px`.

Na versão mobile:

- o menu horizontal é substituído por um menu hambúrguer;
- os cards são reorganizados em uma única coluna;
- os tamanhos de texto são adaptados;
- os espaçamentos são reduzidos;
- os botões são reorganizados;
- a imagem principal recebe enquadramento específico;
- efeitos de hover são reduzidos quando não são necessários;
- o rodapé passa para uma única coluna.

## Acessibilidade

Foram implementadas melhorias básicas de acessibilidade, incluindo:

- navegação por teclado;
- destaque visual com `:focus-visible`;
- atributos `aria` no menu mobile;
- atualização de `aria-expanded`;
- identificação da navegação principal;
- ícones decorativos ocultados de leitores de tela quando apropriado;
- estrutura semântica utilizando `header`, `nav`, `main`, `section` e `footer`.

## SEO

O projeto possui configurações básicas de SEO, incluindo:

- título otimizado;
- meta description;
- configuração para indexação;
- URL canônica;
- Open Graph;
- `og:url`;
- `og:image`;
- `og:image:alt`;
- identificação de idioma;
- favicon;
- HTML semântico;
- hierarquia de títulos;
- `robots.txt`;
- `sitemap.xml`;
- dados estruturados em JSON-LD.

A URL oficial configurada no projeto é:

```text
https://allisoncaraju.github.io/
```

Os dados estruturados identificam a Allison Car como uma empresa local do setor automotivo e incluem informações como:

- nome;
- endereço;
- telefone;
- horário de funcionamento;
- Instagram;
- ano de início das atividades;
- URL oficial;
- imagem da oficina.

## Otimização

A imagem principal utilizada na página foi comprimida para reduzir o tempo de carregamento.

O arquivo `hero-car.jpg` foi reduzido de aproximadamente:

```text
1,73 MB
```

para aproximadamente:

```text
146 KB
```

mantendo qualidade visual adequada para utilização como imagem principal do site.

## Hospedagem

O site utiliza **GitHub Pages**.

A publicação é feita diretamente através da branch:

```text
main
```

e da pasta:

```text
/ (root)
```

URL pública:

```text
https://allisoncaraju.github.io/
```

## Controle de versão

O projeto utiliza Git para controle de versão.

O repositório principal está configurado como:

```text
origin
```

apontando para:

```text
https://github.com/allisoncaraju/allisoncaraju.github.io.git
```

O repositório original também foi preservado como backup.

## Fluxo para futuras atualizações

Após realizar alterações no projeto:

```bash
git status
```

Adicionar as alterações:

```bash
git add .
```

Criar um commit:

```bash
git commit -m "Descrição da alteração"
```

Enviar para o GitHub:

```bash
git push
```

Após o `push`, o GitHub Pages atualiza automaticamente a versão publicada do site.

## Como executar localmente

### Opção 1 - Abrir diretamente

Abra:

```text
index.html
```

em um navegador moderno.

### Opção 2 - Live Server

No Visual Studio Code:

1. Instale a extensão **Live Server**.
2. Abra o arquivo `index.html`.
3. Execute **Open with Live Server**.
4. O projeto será aberto no navegador.

Exemplo:

```text
http://127.0.0.1:5500
```

## Testar no celular

Para testar o projeto em um celular conectado à mesma rede local do computador:

1. Execute o site com Live Server.
2. Abra o Prompt de Comando do Windows.
3. Execute:

```text
ipconfig
```

4. Localize o endereço IPv4 do computador.
5. No navegador do celular, acesse:

```text
http://IP-DO-COMPUTADOR:5500
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

### Segunda a sexta

```text
08:00 às 18:30
```

### Sábado

```text
08:00 às 13:00
```

### Domingo

```text
Fechado
```

## Status do projeto

### Projeto publicado

O site está atualmente online e funcional.

### Concluído

- estrutura HTML;
- identidade visual;
- tipografia;
- imagem principal;
- serviços;
- orçamento presencial;
- seção institucional;
- contato;
- integrações externas;
- rodapé;
- responsividade;
- menu mobile;
- acessibilidade básica;
- SEO básico;
- favicon;
- Open Graph;
- dados estruturados;
- otimização da imagem principal;
- HTML semântico;
- `robots.txt`;
- `sitemap.xml`;
- configuração Git;
- repositório oficial;
- organização no GitHub;
- publicação no GitHub Pages;
- URL pública oficial.

### Próximas melhorias possíveis

- testes de desempenho com Lighthouse;
- validação dos dados estruturados;
- acompanhamento da indexação nos mecanismos de busca;
- criação de novas páginas caso o site cresça;
- inclusão de fotos reais dos serviços;
- criação de uma galeria de trabalhos;
- possíveis melhorias de SEO local;
- futuras atualizações de conteúdo.