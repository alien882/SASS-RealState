const imagenes = document.querySelectorAll(".propiedad__imagen");

window.addEventListener('scroll', () => {
    const valorVertical = this.scrollY / -20;
    imagenes.forEach(imagen => {
        imagen.style.backgroundPositionY = `${valorVertical}px`;
    });
});