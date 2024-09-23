function validaçãodeCadastro(data) {
    //Data faz com que não aja outro cadastro com os mesmos dados fornecidos
    const { nome, email, cpf, senha, confSenha } = data;

    // Validação do nome
     //Lenght conta quantos numeros tem 
    if (typeof nome !== 'string' || nome.length < 3) {
        return { valid: false, message: "Nome deve ter no mínimo 3 caracteres." };
    }

    // Validação do e-mail
    //Rexex = expressão regular(usada para validar emails com dominios especificos)
    const emailRegex = /^[a-zA-Z0-9._]+@docente\.senai\.br$/;
    if (!emailRegex.test(email)) {
        return { valid: false, message: "E-mail deve ter o domínio @docente.senai.br." };
    }

    // Validação do CPF
     //isNaN garante que so tenha numeros
    const cleanedCPF = cpf.replace(/\D/g, '');
    if (cleanedCPF.length !== 11 || isNaN(cleanedCPF)) {
        return { valid: false, message: "CPF deve ter exatamente 11 dígitos." };
    }

    // Validação da senha
    if (senha.length < 8 || senha.length > 30) {
        return { valid: false, message: "Senha deve ter entre 8 e 30 caracteres." };
    }

    // Validação da confirmação da senha
    if (senha !== confSenha) {
        return { valid: false, message: "Confirmação de senha deve ser igual à senha." };
    }

    return { valid: true, message: "Cadastro válido!" };
}

//Exemplo de uso
const registroData = {
    nome: "João",
    email: "joao@docente.senai.br",
    cpf: "12345678909",
    senha: "senhaSegura123",
    confSenha: "senhaSegura123"
};

const validaçãoFinal = validaçãodeCadastro(registroData);
