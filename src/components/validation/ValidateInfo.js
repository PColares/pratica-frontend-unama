import moment from "moment";
function validateInfo(values) {
  const errors = {};
  const invalidNumbers = [
    "000.000.000-00",
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
    "444.444.444-44",
    "555.555.555-55",
    "666.666.666-66",
    "777.777.777-77",
    "888.888.888-88",
    "999.999.999-99",
  ];

  const invalidDates = [
    "00/00/0000",
    "11/11/1111",
    "22/22/2222",
    "33/33/3333",
    "44/44/4444",
    "55/55/5555",
    "66/66/6666",
    "77/77/7777",
    "88/88/8888",
    "99/99/9999",
  ]

  // Data de nascimento
  let UserDate = values.nascimento;
  const newDate = moment(UserDate, "DD-MM-YYYY", true);
  UserDate = moment().diff(newDate, "years");
  const yearRange = 5;
  const maxYearRange = 100;

  if (UserDate > maxYearRange) {
    errors.nascimento = "Data muito antiga";
  }
  if (UserDate < yearRange) {
    errors.nascimento = "Data muito recente";
  }
  if (!values.nascimento) {
    errors.nascimento = 'Campo obrigatório';
  }
  if (invalidDates.find((s) => s === values.nascimento)) {
    errors.nascimento = 'Data inválida'
  }
  if (!values.fName) {
    errors.fName = 'Campo obrigatório';
  }
  if (!values.lName) {
    errors.lName = 'Campo obrigatório';
  }
  if (!values.cpf) {
    errors.cpf = 'Campo obrigatório'
  }
  if (invalidNumbers.find((s) => s === values.cpf)) {
    errors.cpf = 'CPF inválido'
  }
  if (!values.telefone) {
    errors.telefone = 'Campo obrigatório'
  }
  if (!values.email) {
    errors.email = 'Campo obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Informe um e-mail válido';
  }
  if (!values.confirmEmail) {
    errors.confirmEmail = 'Campo obrigatório';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'E-mails não combinam';
  }

  return errors;
}

export default validateInfo;