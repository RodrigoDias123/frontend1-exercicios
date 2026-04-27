// Parte 1: Objeto com informações pessoais
const pessoa = {
  nome: "Rodrigo Dias",
  idade: 18,
  email: "rodrigo.dias@email.com"
};

// Converter objeto para JSON e exibir na consola
const pessoaJSON = JSON.stringify(pessoa);
console.log("Objeto convertido para JSON:");
console.log(pessoaJSON);

// Converter string JSON de volta para objeto e aceder a uma propriedade
const pessoaObjeto = JSON.parse(pessoaJSON);
console.log("Propriedade 'nome' do objeto:", pessoaObjeto.nome);

// Parte 2: Importar data.json e fazer console.log
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("Dados da homepage:", data);
  });
