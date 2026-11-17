// Dados públicos do cardápio. O editor exporta este arquivo atualizado no pacote de publicação.
window.MENU_DATA = {
  version: 1,
  restaurant: { name: 'Mesa & Alma', tagline: 'COZINHA DE ENCONTROS', address: 'Rua dos Encontros, 128 · Centro\nEndereço fictício', hours: 'Terça a domingo · 11h30 às 22h\nSegunda: dia de descansar', publicUrl: '', hero: './public/images/hero.avif' },
  categories: ['Para começar', 'Da nossa cozinha', 'Para adoçar', 'Para brindar'],
  items: [
    {id:'p1',name:'Encontro da casa',category:'Da nossa cozinha',description:'Nossa combinação de sabores da estação, com ingredientes selecionados e aquele toque que faz querer voltar.',price:59.9,image:'./public/images/prato-1.avif',label:'FAVORITO DA CASA',vegetarian:false,available:true,featured:true,allergens:'Consulte a equipe sobre ingredientes e possíveis alérgenos.',serves:'1 pessoa'},
    {id:'p2',name:'Verde que abraça',category:'Para começar',description:'Folhas frescas, vegetais da estação e um molho delicado. Leve, colorido e cheio de personalidade.',price:32.9,image:'./public/images/entrada.avif',label:'FRESCO & LEVE',vegetarian:true,available:true,featured:false,allergens:'Consulte a equipe sobre a composição do molho.',serves:'1 pessoa'},
    {id:'p3',name:'O especial de hoje',category:'Da nossa cozinha',description:'A inspiração do chef encontra os melhores ingredientes do dia. Uma receita feita para surpreender.',price:68.9,image:'./public/images/prato-2.avif',label:'ESCOLHA DO CHEF',vegetarian:false,available:true,featured:true,allergens:'Ingredientes variam. Consulte a equipe antes de pedir.',serves:'1 pessoa'},
    {id:'p4',name:'Bons começos',category:'Para começar',description:'Uma porção generosa para colocar no centro da mesa, dividir e deixar a conversa acontecer.',price:42.9,image:'./public/images/porcao.avif',label:'PARA COMPARTILHAR',vegetarian:false,available:true,featured:false,allergens:'Consulte a equipe sobre ingredientes e possíveis alérgenos.',serves:'2 pessoas'},
    {id:'p5',name:'Um doce de pausa',category:'Para adoçar',description:'Nossa sobremesa artesanal: um encontro de texturas, delicadeza e uma boa dose de afeto.',price:26.9,image:'./public/images/sobremesa.avif',label:'FINAL FELIZ',vegetarian:true,available:true,featured:true,allergens:'Pode conter leite, ovos, trigo e castanhas. Consulte a equipe.',serves:'1 pessoa'},
    {id:'p6',name:'Brisa da casa',category:'Para brindar',description:'Nossa bebida refrescante para acompanhar bons pratos e brindar aos pequenos encontros do dia.',price:18.9,image:'./public/images/bebida.avif',label:'FEITO NA CASA',vegetarian:true,available:true,featured:false,allergens:'Consulte a equipe sobre a composição e presença de álcool.',serves:'1 copo'}
  ]
};
