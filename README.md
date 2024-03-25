# React Crud Softplan

Crud para o desafio tecnico da Softplan

## 🔥 Introdução

Este projeto tem como objetivo principal a entrega de uma aplicação web feita utilizando a biblioteca React.
Esta aplicação oferece um sistema de gerenciamento de usuários com diversas funcionalidades essenciais, utilizando o React e a Context API para um gerenciamento eficiente do estado da aplicação. Além disso, integra uma API utilizando JSON Server e JSON Server Auth para persistência de dados e autenticação de usuários.

## 💡 Funcionalidades:

* **Cadastro de usuario:** Permite que novos usuários se cadastrem na plataforma, fornecendo informações como nome, e-mail e senha. A autenticação é realizada utilizando JSON Web Tokens (JWT), gerados pelo JSON Server Auth, proporcionando uma autenticação simples e segura.

* **Login de usuário:** Permite que usuários existentes façam login na aplicação utilizando suas credenciais previamente cadastradas. Após o login bem-sucedido, o estado de autenticação é gerenciado usando a Context API para garantir uma experiência de usuário consistente.

* **Logout de usuário:** Oferece a funcionalidade de logout, permitindo que os usuários encerrem sua sessão ativa de forma segura. Isso limpa os dados de autenticação armazenados e redireciona o usuário para a página de login.
  
* **Remover usuário:** Permite que os usuários excluam permanentemente sua conta da plataforma. Ao acionar essa funcionalidade, os dados do usuário são removidos tanto do cliente quanto do servidor, garantindo a conformidade com as políticas de privacidade.

* **Editar usuário:** Possibilita que os usuários atualizem suas informações pessoais, como nome, e-mail e senha. Após as alterações serem feitas, os dados são atualizados em tempo real no servidor e no estado local da aplicação.
  
* **Listagem de usuários:** Oferece uma funcionalidade de busca que permite listar aos usuários da plataforma. 

* **Filtrar usuários:** Permite que os usuários filtrem a lista de usuários com base no nome do usuário.

* **Paginação:** Implementa um sistema de paginação para lidar com grandes conjuntos de dados de usuários.





## 💡  Rotas da Aplicação
As rotas da aplicação foram implementadas utilizando o React Router DOM, consistindo principalmente em três rotas distintas:

* /sign-in:

  Esta rota requer que o usuário forneça um nome de usuário e um e-mail previamente cadastrados no sistema para efetuar login.
  
* /

  Essa é a rota inicial da aplicação, acessível após o usuário ter efetuado login com sucesso.
  
* /users:

  Nesta rota, todas as funcionalidades do CRUD podem ser executadas. Ambas as rotas '/' e '/users' compartilham o mesmo layout.


## 💡 Gerenciamento de Sessão
Quando um usuário realiza o login na aplicação, seu estado de autenticação é mantido através da utilização do sessionStorage. Isso garante que, mesmo após atualizar a página, o usuário permaneça autenticado.

Se um usuário já estiver autenticado e tentar acessar a rota /sign-in, ele será automaticamente redirecionado de volta para a página inicial (/).

Caso um usuário não esteja autenticado e tente acessar qualquer uma das rotas mencionadas acima, ele será direcionado para a rota /sign-in.

## 💡 Autenticação e Segurança
Para o cadastro e autenticação de usuários, foi utilizado o JSON Server e o JSON Server Auth. Dessa forma, ao cadastrar um novo usuário, é gerado um token de autenticação JWT para fornecer uma autenticação simples e segura.

Além disso, todas as senhas cadastradas na aplicação são criptografadas utilizando o algoritmo bcryptjs, garantindo uma camada adicional de segurança.

## 💡 Testes Unitários e E2E
Foram desenvolvidos testes unitários para validar cada componente e função individualmente, assegurando que cada parte do código funcione conforme esperado. Além disso, foram implementados testes de ponta a ponta (E2E) para simular interações do usuário em toda a aplicação, garantindo a integração adequada entre os componentes.

## 💡 Dados Mockados com MSW
Durante o processo de desenvolvimento, foram criados dados mockados utilizando o MSW (Mock Service Worker) para simular o comportamento da API durante os testes. Embora esses dados tenham sido elaborados para criar cenários realistas de interação com a API, é importante destacar que eles não foram efetivamente utilizados na aplicação principal.

## 📦 Tecnologias:
  <!-- Link para pegar as badges: https://github.com/Ileriayo/markdown-badges -->

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
* ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
* Zod
* Axios
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
* ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
* ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## 🔨 Guia de instalação


### 🔥 Login admin
    login: ana@ana.com
    senha: ana123

### Clone this repo and install the dependencies

    git clone https://github.com/RafaelDamasco/crud-react
    npm i

### Edite o nome do arquivo .env.local.example para .env.local

### Foram criados dois scripts um para rodar a aplicação e o outro para rodar o server mas podemos executar ambos usando o seguinte comando

    npm run start

## 🔨 Executando os testes E2E

    npm run start
    npm run cy:open
    
## 🔨 Executando os testes unitários

     npm run test
    
## 🔨 Scripts utilizados no desenvolvimento

    "dev:server": "json-server server.json -p 3333 -w -m ./node_modules/json-server-auth"
    "start": "concurrently \"npm run dev:server\" \"npm run dev\""
    "lint": "eslint src --ext .ts,.tsx"
    "lint:fix": "eslint src --ext .ts,.tsx --fix"
    "test": "vitest"
    "dev:test": "vite --port 3332 --mode test"
    "cy:open": "npx cypress open"

## 🔨 Aplicação web rodando na vercel
https://crud-react-weld-three.vercel.app/
    
## 🔨 Servidor
  https://api-storage-eight.vercel.app/
    
