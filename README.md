# Sistema de Gerenciamento de Dados dos Motores

Este projeto é um sistema de gerenciamento de dados dos motores, onde é possível adicionar, pesquisar e exportar informações sobre os motores, incluindo seus detalhes técnicos e laudos em imagem. A aplicação foi desenvolvida usando **HTML**, **CSS**, **JavaScript** e a biblioteca **XLSX.js** para exportação dos dados para Excel.

## Funcionalidades

- **Adicionar Dados dos Motores**: Permite o preenchimento de um formulário com informações detalhadas sobre o motor, incluindo marca, modelo, especificações técnicas e laudos em formato de imagem.
- **Pesquisa**: A barra de pesquisa permite buscar dados de motores de acordo com qualquer parâmetro (exemplo: marca, modelo, CV, etc.).
- **Exibição de Dados**: Os dados inseridos no sistema são listados na interface e podem ser visualizados a qualquer momento.
- **Exportação para Excel**: Permite a exportação dos dados dos motores para um arquivo Excel, facilitando a análise e o armazenamento dos dados.

## Tecnologias Utilizadas

- **HTML**: Para estruturação da página web.
- **CSS**: Para estilização da interface.
- **JavaScript**: Para funcionalidades dinâmicas (pesquisa, exibição de dados, exportação para Excel).
- **XLSX.js**: Biblioteca para conversão de dados em formato Excel.

Adicionando Dados:
Preencha o formulário com as informações do motor (marca, modelo, CV, etc.).
Selecione a imagem do laudo do motor e clique em "Adicionar Dados do Motor".
Pesquisando Dados:

Use a barra de pesquisa para procurar por qualquer parâmetro dos motores cadastrados. O sistema filtra os resultados dinamicamente à medida que você digita.
Exibindo Dados Existentes:

Clique no botão "Mostrar Dados Existentes" para listar todos os motores cadastrados.
Exportando Dados para Excel:

Clique no botão "Exportar para Excel" para gerar um arquivo .xlsx com todos os dados dos motores.
Estrutura de Diretórios
bash
Copiar código
/projeto
├── index.html       # Página principal
├── /css
│   └── style.css    # Arquivo de estilos
├── /js
│   └── banco_dados.js   # Arquivo de lógica JavaScript
└── /imagens         # Armazenamento de imagens de laudos
