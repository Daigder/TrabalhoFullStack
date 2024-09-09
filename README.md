# Trabalho Desenvolvimento WEB (Front e Back end)

## Atividade proposta:

Caros Alunos, para esse trabalho iremos construir um cadastro de pessoas físicas, deve ser desenvolvido um backend (sugerimos o uso do NodeJs+Sequelize+Postgres para o Backend, também serão aceitos backends em Java+spring e em PHP + Laravel) que irá receber os dados da pessoa e persistí-las, o frontend deverá ser desenvolvido em HTML+CSS+JS(está permitido o uso de Bootstrap, Tailwind e outros frameworks CSS). A seguir segue a estrutura de dados Pessoa que deverá ser enviada pelo front e recebida e tratada no back:

Pessoa:
Nome,
CPF,
Telefone.

O conteúdo necessário para o desenvolvimento do trabalho está nas apresentações das aulas da disciplina.

IMPORTANTE: o nome do repositório deverá ser: trabalhofullstack, deverá ser usado um novo repositório no git para isso

Dica: Realizem este trabalho por etapas, garantindo que cada implementação esteja correta, está permitido consulta a fóruns, stackoverflow e principalmente nas documentações que deixei aqui no classroom.

## Com o codigo ja feito usando Node.JS JavaScript, HTML e CSS e usando de base os slides passados na aula. Vamos começar a criar o banco:
Colocamos o nome: postgres, senha: postgres e host: 127.0.0.1 e colocamos esses dados na config.json.

![Imagem do WhatsApp de 2024-09-09 à(s) 01 35 30_afe72c5f](https://github.com/user-attachments/assets/3b174cdb-1c90-4f7a-a5f2-02fdb68fcffe)

## Primeiro Comando: Geração de Modelo Sequelize para Endereço com Atributos Definidos

Quando executar este comando, o Sequelize CLI gera um novo arquivo de modelo no diretório models da sua aplicação. Este arquivo define a estrutura da tabela Pessoa no banco de dados com os atributos especificados, além de criar um arquivo de migração que pode ser usado para criar a tabela no banco de dados.
![Imagem do WhatsApp de 2024-09-08 à(s) 23 20 45_16c5201e](https://github.com/user-attachments/assets/2afdc28c-c454-4310-9283-e9da5a4f506e)

## Segundo Comando: Aplicação de Migrações ao Banco de Dados com Sequelize

O comando "npx sequelize-cli db:migrate" é para manter o banco de dados sincronizado com as alterações estruturais definidas nos arquivos de migração, facilitando o gerenciamento e a evolução do esquema do banco de dados durante o desenvolvimento da aplicação.
![Imagem do WhatsApp de 2024-09-08 à(s) 23 21 12_5cac907d](https://github.com/user-attachments/assets/d68182a1-2531-4002-9c79-b6046a4a71e4)

## Visualização pelo Postgres:
Para visualizar basta clicar em Schemas / Tables / Pessoa, clique com o direito em cima de Endereco e procure por View/Edit Data e depois so clicar em All Rows. Na imagem podemos ver que os dados foram para o PostgresSQL e dessa forma o banco de dados foi feito com sucesso. podemos ver que foi criado com sucesso os atributos: Nome, CPF e Telefone.

![Imagem do WhatsApp de 2024-09-09 à(s) 03 28 53_f6957558](https://github.com/user-attachments/assets/b6cce27d-01e5-4b77-b1ee-6f1312b8a01b)

## Visualizando o Banco de dados 

Fiz alguns testes antes de tirar a print para verificar se o banco estava recebendo as informações corretamente 
![Imagem do WhatsApp de 2024-09-09 à(s) 03 38 49_77691c49](https://github.com/user-attachments/assets/730301e6-2c18-406e-910e-05ef1851f09c)

## Visualizando o Front-end

Como podemos ver temos os 3 campos proposto na atividade para ser preenchido, coloquei algumas validações para deixar o sistema vai completo.

![Imagem do WhatsApp de 2024-09-09 à(s) 03 42 41_50ccc53c](https://github.com/user-attachments/assets/455a1b43-ef8b-4e0d-a832-5d14c75addab)
![Imagem do WhatsApp de 2024-09-09 à(s) 03 43 56_f96406f3](https://github.com/user-attachments/assets/3ac13048-3b7d-4730-835f-7099c8542f3c)

### Validações: 
1. Não é possivel digitar números no campo Nome
2. Não é possivel digitar letras nos campos CPF e Telefone
3. É obrigatorio o campo CPF e Telefone ter 11 digitos


# Conclusão do Projeto

Foi um trabalho bem legal de fazer, especialmente porque foi a minha primeira vez realmente lidando com JavaScript, HTML, CSS, Node.js e PostgreSQL. Claro, tive muitos erros no caminho, mas foi resolvendo esses problemas que aprendi a entender como o Front-end e o Back-end se conectam. Cada erro que consertei foi uma pequena vitória para mim e ajudou a crescer como estudante e futuro profissional. Esse projeto foi um desafio e tanto, mas estou feliz com o resultado final e com o que consegui entregar. Aprendi bastante e estou animado para aplicar tudo o que descobri em novos projetos.

Obrigado.


