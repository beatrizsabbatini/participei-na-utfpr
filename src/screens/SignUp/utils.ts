export function getMessageByErrorCode(error: any) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Já existe um usuário com esse e-mail cadastrado! Crie uma conta com outro e-mail.';

    case 'auth/weak-password':
      return 'Senha fraca! Digite uma senha com no mínimo 6 caracteres.';

    default:
      return error.message;
  }
}

export const getStepFieldsToValidate = (currentStep: number) => {
  switch (currentStep) {
    case 0: return ['name'];
    case 1: return ['email'];
    case 2: return ['password', 'confirmPassword'];
    case 3: return ['ra'];
    case 4: return ['campusId', 'departmentId'];
    default: return []
  }
}
