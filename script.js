// Seleciona os elementos da página usando os IDs configurados no HTML
const magicBtn = document.getElementById('magicBtn');
const magicMessage = document.getElementById('magicMessage');

// Escuta o evento de clique no botão
magicBtn.addEventListener('click', () => {
    
    // Verifica se a mensagem está escondida
    if (magicMessage.classList.contains('hidden')) {
        // Mostra a mensagem e altera o texto do botão
        magicMessage.classList.remove('hidden');
        magicMessage.classList.add('visible');
        magicBtn.textContent = 'Esconder Mágica';
    } else {
        // Oculta a mensagem novamente e resgata o texto original do botão
        magicMessage.classList.remove('visible');
        magicMessage.classList.add('hidden');
        magicBtn.textContent = 'Clique Aqui';
    }
});
