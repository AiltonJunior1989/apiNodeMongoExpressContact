# API de criação de contatos utilizando NodeJS, MongoDB
 Esta API permite a criação de contatos utilizando o banco de dados
 NoSQL MongoDB que é um banco de dados não relacional, não utiliza 
 de colunas e linhas, mas por documentos.
 Algumas funcionalidades da API:
 
 ➡ Registrar usuário - 
 Nome, email e senha, onde utilizando o Bcrypt, faz a criptografia da senha antes de salvar no banco de dados.
 
 ➡ Login de usuário - Utiliza o Bcrypt novamente fazendo a comparação da senha e retornando caso não obter match, caso email e senha corretos utiliza-se o JWT-Jason Web Token para controlar acesso as rotas. Tornando a API mais segura.
 
 ➡ CRUD de contato - Onde é criado nome, email e telefone - 
 Create, Read, Update e Delete - Utilizando o JWT somente o usuário que criou o contato pode atualizar, deletar seus próprios contatos, o legal também é que somente o usuário consegue obter os contatos que ele criou.
    
 
    
