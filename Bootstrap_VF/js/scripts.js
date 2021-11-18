

/* criando função anônima para chamar o navbar */
const navSlide = () => {
    /* selecionando burger e nav-links*/
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    /* criando o evento do click */
    burger.addEventListener('click', () => {
        /* Toggle que ativa o Nav */
        nav.classList.toggle('nav-active');
    });
}
/* chamando a função principal para que fique ativa */
navSlide();

