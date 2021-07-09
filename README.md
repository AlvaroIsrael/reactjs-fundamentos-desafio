# Desafio: Fundamentos ReactJS

Aplicação feita com React.js e TypeScript para gerenciar transacoes GoFinances. Essa aplicação é parte do bootcamp
GoStack ministrado pela Rocketseat.

### Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **`should be able to list the total balance inside the cards`**: Para que esse teste passe, sua aplicação deve
  permitir que seja exibido na sua Dashboard, cards contendo o total de `income`, `outcome` e o total da subtração
  de `income - outcome` que são retornados pelo balance do seu backend.

* **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que sejam
  listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

**Dica**: Para a exibição dos valores na listagem de transações, as transações com tipo `income` devem exibir os valores
no formado `R$ 5.500,00`. Transações do tipo `outcome` devem exibir os valores no formado `- R$ 5.500,00`.

- **`should be able to navigate to the import page`**: Para que esse teste passe, você deve permitir a troca de página
  através do Header, pelo botão que contém o nome `Importar`.

**Dica**: Utilize o componente `Link` que é exportado do `react-router-dom`, passando a propriedade `to` que leva para a
página `/import`.

- **`should be able to upload a file`**: Para que esse teste passe, você deve permitir que um arquivo seja enviado
  através do componente de drag-n-drop na página de `import`, e que seja possível exibir o nome do arquivo enviado para
  o input.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
