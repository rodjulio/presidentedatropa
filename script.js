/* Estilos para o corpo */
body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #282c34;
    color: #61dafb;
}

/* Container central */
.container {
    text-align: center;
}

/* Estilos para o cabeçalho */
.header h1 {
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 20px;
}

/* Estilos para a div presidente */
.presidente {
    cursor: pointer;
    transition: transform 0.3s;
    margin: 20px;
    border: 5px solid #61dafb;
    border-radius: 10px;
    padding: 10px;
    background-color: #20232a;
}

.presidente:hover {
    transform: scale(1.1);
}

img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
}

/* Estilos para o texto do título */
#titulo {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

/* Estilos para a resposta */
#resposta {
    color: #61dafb;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}
