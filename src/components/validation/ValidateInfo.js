function validateInfo(values) {
  let errors = {};

  if (!values.fName) {
    errors.fName = 'ಥ_ಥ Campo obrigatório';
  } 
   if (!values.lName) {
    errors.lName = 'ಥ_ಥ Campo obrigatório';
  }

  if (!values.email) {
    errors.email = 'ಥ_ಥ Campo obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'ಥ_ಥ Informe um e-mail válido';
  }
  
  if (!values.confirmEmail) {
    errors.confirmEmail = 'ಥ_ಥ Campo obrigatório';
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'ಥ_ಥ E-mails não combinam';
  }

  if (!values.cpf) {
    errors.cpf = 'ಥ_ಥ Campo obrigatório'
  }

  if (!values.nascimento){
    errors.nascimento = 'ಥ_ಥ Informe uma data válida'
  }

  if (!values.telefone) {
    errors.telefone = 'ಥ_ಥ Informe um telefone válido'
  }
  return errors;
}

export default validateInfo;