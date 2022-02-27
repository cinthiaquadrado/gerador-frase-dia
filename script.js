let frases = ['Não desista', 'Força!', 'Calma que vai dar certo', 'Paciência em primeiro lugar', 'Dê tempo ao tempo', 'Estou aqui por você'];

function gerarfrase() {
    let frase = frases[
    Math.floor(Math.random() * frases.length)
    ]
    
    document.querySelector('#frase-gerada').textContent=frase;
}