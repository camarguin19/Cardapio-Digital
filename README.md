# Mesa & Alma — cardápio digital editável

Marca, endereço, preços e produtos fictícios, criados para demonstração em portfólio. Layout minimalista, com fundo claro, verde discreto e tipografia elegante. A abertura é compacta, sem faixas promocionais, selos ou seções decorativas. Os pratos são apresentados em duas colunas no desktop e uma lista com fotos laterais no celular. Fotografias do projeto de referência fornecido pelo usuário.

## Começar

Abra `index.html` em um navegador atual. O CSS compilado e as bibliotecas de QR e ZIP já acompanham o projeto. Para todas as funções, abra a pasta com **Live Server** no VS Code ou outro servidor estático. A abertura por `file://` permite explorar o cardápio, mas o navegador pode restringir armazenamento e exportação do ZIP.

No rodapé, escolha **Editar cardápio**. O editor permite:

- Criar, editar e excluir produtos; alterar preços, porções, descrições e informações sobre alérgenos.
- Enviar fotos JPG/PNG/WebP de até 5 MB, otimizadas localmente, ou informar links HTTPS.
- Marcar disponibilidade, produtos vegetarianos e favoritos da casa.
- Criar, renomear e ordenar categorias; categorias com produtos são preservadas até os itens serem movidos.
- Editar nome, assinatura, capa, endereço e horários.
- Exportar o site atualizado, os dados públicos ou um backup JSON, além de importar backups.

## Colocar o cardápio nos celulares dos clientes

O editor salva um **rascunho neste navegador**. Não há servidor de administração, login ou sincronização entre dispositivos. Para que uma alteração apareça para todos:

1. Edite o cardápio e abra **Publicar & backup**.
2. Clique em **Baixar site atualizado (.zip)**. Esse recurso exige abrir o projeto via HTTP, por exemplo com Live Server. Extraia o ZIP gerado.
3. Publique o conteúdo da pasta `Mesa_e_Alma` em uma hospedagem estática HTTPS. Mantenha `index.html` na raiz pública, junto a `src` e `public`.
4. Verifique o site em outro celular. Use sempre a mesma URL para preservar os QR codes já impressos.

Alternativa que funciona sem servidor local: **Baixar dados públicos (.js)** e substituir `public/menu-data.js` pelo arquivo baixado antes de publicar a pasta completa. Não renomeie o arquivo.

O site exportado inclui o editor, mas as alterações feitas por visitantes ficam apenas no navegador deles e não alteram o cardápio publicado. Uma edição centralizada com autenticação e publicação automática exige backend; não está incluída nesta demonstração. O editor ignora rascunhos antigos quando detecta uma nova versão dos dados publicados.

## Gerar e imprimir o QR code

1. Primeiro publique o site em uma URL pública HTTPS. O projeto não vem hospedado.
2. No rodapé, abra **QR para as mesas** e informe a URL completa. A geração bloqueia endereços de arquivo, localhost, IPs e domínios de exemplo. Links privados ainda precisam ser identificados por você e não devem ser usados.
3. Clique em **Gerar QR code**. A geração acontece no próprio navegador, sem um serviço intermediário ou assinatura.
4. Baixe o QR em **SVG** (vetorial) ou **PNG** (1.400 × 1.400 pixels). Há também um **cartão A6 em SVG**, com marca, convite e QR.
5. Para imprimir, escolha a quantidade e a primeira mesa. Ative a numeração se desejar. **Imprimir / salvar PDF** abre o diálogo de impressão do navegador.
6. Use papel A4, escala de 100%, sem cabeçalhos e rodapés do navegador. A folha comporta quatro cartões A6 (105 × 148 mm), com linhas de corte. Em impressoras sem impressão até a borda, o navegador pode ajustar a escala; confira a prévia e prefira gerar o PDF para uma gráfica.
7. Antes de imprimir em quantidade, teste o QR com a câmera de outro celular pela rede móvel. Preserve o quadrado inteiro, o contraste e a margem branca. Evite dobras, reflexos e redução excessiva.

**O QR contém somente a URL do cardápio.** Atualizar produtos não exige outro QR desde que a URL permaneça igual. A numeração das mesas identifica os cartões físicos; não registra pedidos ou vincula sessões a mesas. Não existe carrinho, pagamento ou envio de pedidos.

O sistema não verifica se o domínio informado está publicado ou acessível: faça o teste real antes da impressão. Como nenhum endereço de hospedagem foi fornecido, a entrega não inclui um QR definitivo com destino publicado. O gerador está pronto para receber essa URL.

## Tecnologias e estrutura

Mantidas as linguagens e pastas principais do modelo: **HTML, Tailwind CSS 4 e JavaScript puro**, com `src/input.css`, `src/main.js`, `public/output.css`, `public/images` e `index.html`. As bibliotecas JavaScript locais `qrcode-generator` 2.0.4 e `JSZip` 3.10.2, com suas licenças em `public/vendor`, fornecem QR e exportação sem dependência de CDNs. Não há troca de framework ou linguagem.

```text
Mesa_e_Alma/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── src/
│   ├── input.css
│   └── main.js
└── public/
    ├── menu-data.js
    ├── output.css
    ├── images/
    └── vendor/
```

Para recompilar o CSS, com Node.js/npm instalados:

```sh
npm ci
npm run build
```

`npm run dev` acompanha alterações no CSS, como no modelo original; não inicia um servidor HTTP.

## Dados e imagens

Faça backups antes de limpar os dados do navegador. Os rascunhos e fotos enviadas ocupam armazenamento local; se a quota for excedida, a interface avisa e é necessário exportar para preservar a sessão. O limite do backup é de 12 MB, com até 150 produtos e 30 categorias. Links de imagens externos dependem do servidor que os hospeda; prefira enviar os arquivos.

Os pratos e as descrições são exemplos. Antes de usar em um estabelecimento real, substitua as fotos, os preços, os ingredientes e as informações de alérgenos por informações confirmadas pela cozinha. A identidade fictícia é uma sugestão de apresentação; não foi realizada pesquisa de disponibilidade de marca. As imagens foram reutilizadas do arquivo fornecido: confira as licenças antes de uso comercial.

## Verificação da entrega

CSS compilado e JavaScript verificado. O layout da página, dos detalhes, do editor, dos formulários e da área de QR foi conferido nas larguras de 320, 360, 390, 480, 768, 1024 e 1440 pixels, sem transbordamento horizontal. Os campos de formulário usam texto de 16 pixels para evitar zoom automático em celulares. Categorias deslizam horizontalmente dentro da própria faixa, sem alargar a página. Testes em navegador cobriram busca, filtros, detalhes, cadastro e edição de produtos, disponibilidade, categorias, identidade da casa, persistência, exportação do site e do backup e bloqueio de destinos locais para o QR. Os QR exportados em PNG e SVG foram lidos por um decodificador independente e retornaram a URL de teste exata. A impressão de oito cartões numerados gerou duas páginas A4. Os arquivos e URLs de teste não fazem parte dos dados públicos entregues.
