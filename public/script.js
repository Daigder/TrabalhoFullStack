document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pessoa-form');
    const listaPessoas = document.getElementById('lista-pessoas');

    form.addEventListener('submit', async (e) => {
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

        try {
            // Envia os dados para o backend
            const response = await fetch('http://localhost:3000/pessoas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, cpf, telefone })
            });

            console.log(response.body)

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            // Atualiza a lista de pessoas
            await loadPessoas();
            form.reset()
            window.location.reload()
        } catch (error) {
            console.error('Erro:', error);
        }
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
    
    async function loadPessoas() {
        try {
            const response = await fetch('http://localhost:3000/pessoas');
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            const pessoas = await response.json();
            listaPessoas.innerHTML = ''; // Limpa a lista atual

            pessoas.forEach(pessoa => {
                const pessoaItem = document.createElement('li');
                pessoaItem.classList.add('list-group-item');
                pessoaItem.textContent = `Nome: ${pessoa.nome}, CPF: ${formatarCPF(pessoa.cpf)}, Telefone: ${formatarTelefone(pessoa.telefone)}`;
                listaPessoas.appendChild(pessoaItem);
            });
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    // Carregar a lista de pessoas ao iniciar
    loadPessoas();
});