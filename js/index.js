const botaoAbertura = document.querySelector('.botao-abertura');
const fecharModal = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkDoVideo = video.src; 

botaoAbertura.addEventListener('click', () => {
    modal.classList.add('aberto');
    video.setAttribute('src', linkDoVideo)
});

fecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', '');
});