const caixaPrincipal =  document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');
const lista = [item1, item2]
const perguntas = [
    {
        Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?

        enunciado: "Pergunta 1",
        alternativas: ["Isso é assustador!", "Isso é maravilhoso"],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
];
const lapis = {
  tamanho: 20,
  tipo: 'HB',
  cor: 'Grafite',
  temBorrachaAtras: false
}  