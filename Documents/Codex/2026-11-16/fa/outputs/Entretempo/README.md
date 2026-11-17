# Entretempo — sua agenda, com respiro

Sistema genérico de cadastro e agendamento, criado como demonstração para portfólio. Interface em português, com cores areia, verde profundo e terracota; tipografia editorial; navegação por teclado e layout adaptado a celulares.

## Abrir o projeto

Extraia o ZIP e abra `index.html` em um navegador atual. O CSS compilado está incluído: não é preciso instalar nada para explorar o sistema. Para armazenamento consistente, recomenda-se usar um servidor estático, como a extensão Live Server do VS Code. O comportamento de armazenamento em URLs `file://` depende do navegador.

## Desenvolvimento

Com Node.js e npm instalados:

```sh
npm ci
npm run dev
```

O comando `dev`, assim como no modelo original, acompanha alterações do Tailwind; ele não inicia um servidor HTTP. Use Live Server para abrir a página. Para compilar a versão final:

```sh
npm run build
```

## Estrutura e tecnologias

Mantida a base do projeto enviado: HTML, CSS com Tailwind CSS 4 e JavaScript puro. Não foram adicionados frameworks, bibliotecas de interface ou dependências de produção.

```text
Entretempo/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── public/
│   ├── output.css
│   └── images/
│       └── icon.svg
└── src/
    ├── input.css
    └── main.js
```

O favicon SVG substitui a imagem do restaurante. As fotografias e o histórico Git do modelo não fazem parte do novo projeto. A pasta `node_modules` é recriada por `npm ci` e não está no ZIP.

## O que explorar

- Agenda semanal (segunda a sexta) e diária (todos os dias), navegação por períodos, calendário lateral e filtro por situação.
- Agendar, editar, cancelar e concluir encontros. Cancelamentos permanecem no histórico e liberam o intervalo.
- Duração calculada pelo serviço, validação do expediente, de datas e de sobreposição de intervalos. Um encontro pode começar exatamente quando outro termina.
- Cadastro e edição de clientes com busca, validação de telefone e detecção de e-mail ou telefone duplicado.
- Cadastro e edição de serviços com duração, descrição e preço.
- Exclusão de clientes e serviços sem histórico vinculado; registros vinculados são preservados.
- Indicadores calculados para o dia selecionado e próximos atendimentos.
- Configuração do nome do espaço e expediente; mudanças de horário não podem ocultar encontros já cadastrados.
- Persistência local, exportação JSON e restauração dos exemplos.

## Decisões de escopo

A agenda representa **um único profissional ou recurso**, portanto todos os atendimentos ativos são considerados na verificação de conflitos. A duração e o preço ficam registrados no agendamento; editar um serviço não altera encontros anteriores. Ao editar e salvar um agendamento, ele passa a usar os valores atuais do serviço.

Os exemplos são fictícios, gerados na semana em que o navegador abre o projeto pela primeira vez. Os indicadores financeiros mostram previsão, não pagamentos recebidos. A exportação é uma cópia legível; não existe importação pela interface.

Esta é uma **demonstração frontend**, com dados em `localStorage`. Não inclui autenticação, banco de dados em servidor, sincronização entre dispositivos, pagamentos, lembretes por WhatsApp/e-mail ou garantia de concorrência entre usuários. Para uso real, essas funções e as validações de disponibilidade devem ser implementadas em backend. Abas do mesmo navegador atualizam os dados pelo evento de armazenamento, mas isso não substitui transações de servidor.

## Personalizar para seu portfólio

As cores e o layout ficam em `src/input.css`; os dados fictícios e as regras em `src/main.js`; a estrutura da interface em `index.html`. Depois de alterar CSS ou classes, execute `npm run build`. O conteúdo estático pode ser hospedado em qualquer serviço de hospedagem estática.

## Verificação desta entrega

Compilação Tailwind e sintaxe JavaScript verificadas. Testes funcionais por DOM cobriram cadastros, edição de cliente, duplicidade, criação de serviço, agendamentos, sobreposição de horários, intervalos adjacentes, expediente, cancelamento, reutilização de horário, proteção de histórico, configurações, persistência e busca. A revisão visual em navegador não pôde ser realizada porque a ferramenta de automação não iniciou neste ambiente. O layout responsivo foi implementado, mas ainda deve ser conferido visualmente nos dispositivos desejados.
