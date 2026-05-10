const usuarios = ['mimmarcelo', 'Luiran', 'Dayvid', 'Mauro', 'Lucas'];

const senhas = ['Teste123', '123', '123', '123', '123'];

function validacao() {

    var username =
    document.getElementById('username').value;

    var password =
    document.getElementById('password').value;

    var contador = 0;

    var validador = 0;

    while(contador < usuarios.length && validador == 0) {

        if(username == usuarios[contador] &&
           password == senhas[contador]) {

            validador++;

            // SALVA USUÁRIO
            localStorage.setItem(
                "usuarioLogado",
                username
            );

        }

        contador++;

    }

    if(validador == 1) {

        
        alert(`Seja bem-vindo, ` + username);

        // ABRE O CHAT
        window.location.href = "chats.html";

    }

    else {

        alert('Desculpe... Esse usuário não existe!');

    }

}