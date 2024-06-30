/* Exemplo de CSS com Media Queries para responsividade */
body {
    font-family: 'Arial', sans-serif; /* Define a fonte para todo o corpo do documento */
    background-color: #f0f0f0; /* Cor de fundo */
}

.presidente {
    cursor: pointer; /* Estilo do cursor como ponteiro para indicar clicabilidade */
}

#titulo {
    color: #007BFF; /* Cor azul para o título */
    font-size: 20px; /* Tamanho da fonte para o título */
}

/* Media Query para iPhone 15 Pro Max */
@media only screen and (min-device-width: 428px) and (max-device-width: 926px) and (orientation: portrait) {
    #titulo, #resposta {
        font-size: 22px; /* Aumenta o tamanho da fonte para dispositivos maiores */
        color: #ff6347; /* Cor mais viva */
    }
}
