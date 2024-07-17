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

    // Array com os nomes das imagens na pasta 'figs'
    var imagens = [
        'adame.png',
        'amanda.png',
        'barradas.png',
        'bianca.png',
        'breno.png',
        'carlos.png',
        'carol.png',
        'cleo.png',
        'cleomar.png',
        'cristiano.png',
        'dandan.png',
        'daniela.png',
        'darlan.png',
        'domi.png',
        'edilton.png',
        'ezequiel.png',
        'falqueto.png',
        'fernanda.png',
        'fornaro.png',
        'gabmel.png',
        'iara.png',
        'jairon.png',
        'janaina.png',
        'juan.png',
        'juliana.png',
        'kayo.png',
        'laguardia.png',
        'lamarca.png',
        'leticia.png',
        'lindsey.png',
        'marceli.png',
        'marcelo.png',
        'murilo.png',
        'nicole.png',
        'paloma.png',
        'pastori.png',
        'pedro.png',
        'raul.png',
        'rian.png',
        'rodrigo.png',
        'sanches.png',
        'sofia.png',
        'treuke.png',
        'vanessa.png',
        'vic.png',
        'vini.png',
        'wendell.png',
        'westfal.png'
    ];    

    var divSorteio = document.querySelector('.sorteio');
    var imagemSorteada = document.querySelector('#imagemSorteada');

    // Gera um número aleatório entre 0 e o comprimento da lista de imagens
    var indiceAleatorio = Math.floor(Math.random() * imagens.length);

    // Define o src da imagem sorteada
    imagemSorteada.src = 'figs/' + imagens[indiceAleatorio];
});