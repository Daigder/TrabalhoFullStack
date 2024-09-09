document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pessoa-form');
    const listaPessoas = document.getElementById('lista-pessoas');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const telefone = document.getElementById('telefone').value;

        if (!validarNome(nome)) {
            alert('O nome não pode conter números.');
            return;
        }

        if (!validarCPF(cpf)) {
            alert('O CPF deve conter exatamente 11 números.');
            return;
        }

        if (!validarTelefone(telefone)) {
            alert('O telefone deve conter exatamente 11 números.');
            return;
        }

        adicionarPessoa(nome, formatarCPF(cpf), formatarTelefone(telefone));
        form.reset();
    });

    function validarNome(nome) {
        return !/\d/.test(nome);
    }

    function validarCPF(cpf) {
        return /^\d{11}$/.test(cpf);
    }

    function validarTelefone(telefone) {
        return /^\d{11}$/.test(telefone);
    }

    function formatarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    function formatarTelefone(telefone) {
        telefone = telefone.replace(/\D/g, '');
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    function adicionarPessoa(nome, cpf, telefone) {
        const li = document.createElement('li');
        li.className = 'list-group-item';

        li.innerHTML = `
            <strong>Nome:</strong> ${nome} <br>
            <strong>CPF:</strong> ${cpf} <br>
            <strong>Telefone:</strong> ${telefone}
        `;

        listaPessoas.appendChild(li);
    }
});
