# BudgetWise

BudgetWise é uma aplicação web que a principio foi pensada para organizarmos nossos objetos, aqui podemos colocar data de validade dos produtos, armazenar dados de suas contas e fazer uma média anual e acompanhar o crescimento ou deft do consumo.
Podemos gerar metas para diversos tipos de situações, meta de quanto você quer poupar, meta de gasto, fazer uma lista de metas sobre comprar um determinado eletronico ou viagem, catalogar seus livros, ferramentas, parafusos e adicionar para quem você emprestou e quanto tempo já esta emprestado.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Siga as instruções abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
   ```bash
   git clone https:git@github.com/CristianR10/BudgetWise.git
   cd BudgetWise

2. Instalar as dependência (Cole isso no seu terminal)
    `cd budget-wise-back && npm install && cd ../budget-wise-front && npm install`

3. Configure as variáveis de ambiente. Crie um arquivo .env na pasta backend e adicione suas configurações.

## Uso
Para iniciar o servidor backend:

`cd budget-wise-back && npm start`    
`cd frontend && npm start`


## Estrutura do Projeto
    meu-projeto/
    ├── budget-wise-back/    # Código do backend
    │   ├── config/          # Configurações
    │   ├── controllers/     # Controladores
    │   ├── models/          # Modelos de dados
    │   ├── routes/          # Definições de rotas
    │   ├── middleware/      # Middleware
    │   ├── utils/           # Funções utilitárias
    │   ├── index.js         # Ponto de entrada do servidor
    │   └── package.json     # Dependências do backend
    ├── budget-wise-front/   # Código do frontend
    │   ├── src/
    │   │   ├── components/  # Componentes React
    │   │   ├── pages/       # Páginas do aplicativo
    │   │   ├── hooks/       # Hooks personalizados
    │   │   ├── context/     # Context API
    │   │   ├── styles/      # Estilos (Sass)
    │   │   ├── utils/       # Funções utilitárias
    │   │   ├── App.tsx      # Componente principal
    │   │   └── index.tsx    # Ponto de entrada do React
    ├── .env                  # Variáveis de ambiente
    └── README.md             # Documentação do projeto


## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue.

## Licença

Este projeto está licenciado sob a licença ISC. Você é livre para usar, modificar e distribuir este código, desde que mantenha o aviso de direitos autorais. Para mais detalhes, consulte o arquivo `LICENSE`.

### Texto da Licença ISC

Licença ISC

Copyright (c) 2024 Cristian Renato

A permissão para usar, copiar, modificar e/ou distribuir este software para qualquer finalidade, com ou sem taxa, é concedida por meio deste, desde que o aviso de copyright acima e este aviso de permissão apareçam em todas as cópias.

O SOFTWARE É FORNECIDO "COMO ESTÁ" E O AUTOR RENUNCIA A TODAS AS GARANTIAS RELACIONADAS A ESTE SOFTWARE, INCLUINDO TODAS AS GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO E ADEQUAÇÃO. EM NENHUM CASO O AUTOR SERÁ RESPONSÁVEL POR DANOS ESPECIAIS, DIRETOS, INDIRETOS OU CONSEQUENCIAIS OU POR QUAISQUER DANOS QUE RESULTEM DA PERDA DE USO, DADOS OU LUCROS, SEJA EM UMA AÇÃO DE CONTRATO, NEGLIGÊNCIA OU OUTRA AÇÃO TORTUOSA, DECORRENTE OU EM CONEXÃO COM O USO OU DESEMPENHO DESTE SOFTWARE.
