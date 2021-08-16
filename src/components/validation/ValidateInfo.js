function validateInfo(values) {
  let errors = {};

  if (!values.fName) {
    errors.fName = 'Campo obrigatório';
  } 
   if (!values.lName) {
    errors.lName = 'Campo obrigatório';
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

  if (!values.cpf) {
    errors.cpf = 'Campo obrigatório'
  }

  if (!values.nascimento){
    errors.nascimento = 'Informe uma data válida'
  }

  if (!values.telefone) {
    errors.telefone = 'Informe um telefone válido'
  }
  return errors;
}

export default validateInfo;