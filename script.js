function trocarFoto() {
    var imagem = document.getElementById('foto');
    if (imagem.src.match('masaki-removebg-preview.png')) {
        imagem.src = 'https://www.dropbox.com/scl/fi/whgy7n1e8g3hbinat96y6/rodrigo-removebg-preview.png?rlkey=lu0x2ha2dei3epawu0yjb8x07&st=9bs9npg9&dl=1'; // Link para a imagem do Rodrigo
    } else {
        imagem.src = 'https://www.dropbox.com/scl/fi/ntz1i6fajnpw67g0r4q7m/masaki-removebg-preview.png?rlkey=rk001hg5u68yh978kg9ps0csz&st=0mrvo9wj&dl=1'; // Volta para a imagem do Masaki
    }
}
