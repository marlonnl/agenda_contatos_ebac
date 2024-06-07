const form = document.getElementById('form');
const tabelaBody = document.querySelector('tbody');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const statusbar = document.getElementById('statusbar');
const totalContatos = document.getElementById('total');

statusbar.classList.add('doNotShow');

let agenda = '';

let nomes = [];
let telefones = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    cadastrarContato(nome.value, telefone.value);
});

form.addEventListener('keyup', function(event) {
    statusbar.classList.add('doNotShow');
});

function cadastrarContato(nome, telefone) {
    // caso o nome e o telefone não esteja na lista ainda
    if (!nomes.includes(nome) && !telefones.includes(telefone)) {

        nomes.push(nome);
        telefones.push(telefone);

        let novaLinha = '<tr><td>';
        novaLinha += `${nome}`;
        novaLinha += '</td><td class="number">';
        novaLinha += `${telefone}`;
        novaLinha += '</td></tr>';

        agenda += novaLinha;

        tabelaBody.innerHTML += novaLinha;

        atualizarTotal();
        limparCampos();

    } else { // caso estejam
        let errorMsg = 'ERRO: ';

        if (nomes.includes(nome)) {
            errorMsg += `o contato <b>${nome}</b> já existe na agenda. `;
        }
        if (telefones.includes(telefone)) {
            errorMsg += `O número <b>${telefone}</b> já consta na agenda.`
        }

        statusbar.classList.remove('doNotShow');
        statusbar.innerHTML = errorMsg;
    }
}

function atualizarTotal() {
    let total = nomes.length;
    totalContatos.innerHTML = `Total de contatos: ${total}`;
}

function limparCampos() {
    nome.value = '';
    telefone.value = '';
}