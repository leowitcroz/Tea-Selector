var escolhedorCha = document.getElementById("escolher");
lista = ['Chá de camomila', 'Chá de erva doce', 'Chá de erva cidreira','Chá de pêssego','Chá de hibisco','Chá de alecrim','Chá de hortelã','Chá de frutas vermelhas','Chá indiano','Chá mate','Chá preto'];
elemento = lista[Math.floor(Math.random() * lista.length)];
console.log(`Meu sistema operacional favorito é ${elemento}!`);

escolhedorCha.addEventListener("click", cha);

function cha()
{

    var nome = document.getElementById("campo-nome").value;
    if ( nome !== "")
    {
        textoresultado.innerHTML = `Olá ${nome}, o chá escolhido é o de ${elemento}.  Aproveite!!`;

    }
    
}