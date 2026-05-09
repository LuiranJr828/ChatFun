const usuarios = ['mimmarcelo', 'Luiran', 'Dayvid', 'Mauro', 'Lucas'];
const senhas = ['Teste123', '123', '123', '123', '123'];

function validacao() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var contador = 0;
    var validador = 0;
    while(contador < usuarios.length && validador == 0) {
        if(username == usuarios[contador] && password == senhas[contador]) {
            validador++;
        }
        contador++;
    }

    if(validador == 1) {
        return alert(`Seja bem-vindo, ` + username);
    } else {
        return alert('Desculpe... Esse usuário não existe!');
    }
}