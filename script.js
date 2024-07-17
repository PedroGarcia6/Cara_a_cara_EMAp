document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery img');

    images.forEach(function(image) {
        // Adiciona a descrição abaixo da imagem com o texto do atributo alt
        var description = document.createElement('div');
        description.className = 'description';
        description.textContent = image.alt;
        image.parentNode.appendChild(description);

        // Adiciona o evento de clique para alternar a classe grayscale
        image.addEventListener('click', function() {
            image.classList.toggle('grayscale');
        });
    });
});
