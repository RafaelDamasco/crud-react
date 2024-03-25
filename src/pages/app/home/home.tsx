export function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1>React Crud Softplan</h1>
      <p>Crud para o desafio tecnico da Softplan</p>

      <h2>🔥 Introdução</h2>
      <p>
        Este projeto tem como objetivo principal a entrega de uma aplicação web
        feita utilizando a biblioteca React. Esta aplicação oferece um sistema
        de gerenciamento de usuários com diversas funcionalidades essenciais,
        utilizando o React e a Context API para um gerenciamento eficiente do
        estado da aplicação. Além disso, integra uma API utilizando JSON Server
        e JSON Server Auth para persistência de dados e autenticação de
        usuários.
      </p>
      <h2>💡 Funcionalidades</h2>
      <ul className="list-disc list-inside">
        <li>Cadastro de usuario</li>
        <li>Login de usuário</li>
        <li>Logout de usuário</li>
        <li>Remover usuário</li>
        <li>Editar usuário</li>
        <li>Listagem de usuários</li>
        <li>Filtrar usuários</li>
        <li>Paginação</li>
      </ul>
    </div>
  )
}
