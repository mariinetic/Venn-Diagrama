// Criando um quadrinho de identificação (min 38:00 do vídeo)
const dadosMariana = document.createElement('p');
dadosMariana.textContent = 'Mariana Oliveira, 1BD';

// Testando quadrinho do nome
dadosMariana.style.position = 'fixed';
dadosMariana.style.top = '50px'; 
dadosMariana.style.right = '20px'; 
dadosMariana.style.backgroundColor = 'pink'; 
dadosMariana.style.padding = '10px'; 
dadosMariana.style.border = '1px solid black';

// Adiciona o parágrafo ao corpo do documento
document.body.appendChild(dadosMariana);
