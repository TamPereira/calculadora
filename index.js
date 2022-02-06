const inquirer = require('inquirer')
const calculadora = require('./calculadora')

inquirer.prompt([
    { name: 'n1', mensagem: 'Digite o primeiro valor.'},
    { name: 'n2', mensagem: 'Digite o segundo valor.'},
    { name: 'operacao', mensagem: 'Escolha sua operação!'}
    
]).then(answer => {
    let n1 = parseFloat(answer.n1)
    let n2 = parseFloat(answer.n2)
    let operacao = answer.operacao
    let resultado = 0
    

    switch (operacao) {
        case '+':
            resultado = calculadora.soma(n1, n2)
            console.log(resultado)
            break;

        case '-':
            resultado = calculadora.subtracao(n1, n2)
            console.log(resultado)
            break;

        case '/':
            resultado = calculadora.divisao(n1, n2)
            console.log(resultado)
            break;

        case '*':
            resultado = calculadora.multiplicacao(n1, n2)
            console.log(resultado)
            break;
    
    }

})