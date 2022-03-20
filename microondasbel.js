//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// -Maior 2x que o padrão, exibir mensagem que a comida queimou.
//- Se o tempo for maior que o padrão e menor que 2 x o tempo padrão, exibir a mensagem: " A comida está pronta, mas passou um pouco do ponto."
//- Se o tempo for menor que o padrão, exibir a mensagem: "Tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
//Equipe: Robelsa Vasconcelos, Rafael Alves, Fábio Júnior, Raphael Moura.


let padraoPipoca = 10
let padraoMacarrao = 8
let padraoCarne = 15
let padraoFeijao = 12
let padraoBrigadeiro = 8

let pipoca = 'pipoca'
let macarrao = 'macarrao'
let carne = 'carne'
let feijao = 'feijao'
let brigadeiro = 'brigadeiro'

let msg = 'Prato pronto, bom apetite!!!'

function microondas (alimento,tempo) { 

        // Tempo padrao de cada prato
    if((alimento == 'pipoca' && tempo == padraoPipoca)  ||
    (alimento == 'macarrao' && tempo == padraoMacarrao) ||
    (alimento == 'carne' && tempo == padraoCarne)       || 
    (alimento == 'feijao' && tempo == padraoFeijao)     || 
    (alimento == 'brigadeiro' && tempo == padraoBrigadeiro)) {
        return  `\n${msg}`;
    }

        // Se selecionar o prato e colocar um valor entre o padrao ou menor que 2x o valor padrao!
     else if ((alimento == 'pipoca' && tempo > padraoPipoca && tempo < padraoPipoca*2) || 
     (alimento == 'macarrao' && tempo > padraoMacarrao && tempo < padraoMacarrao*2)    || 
     (alimento == 'carne' && tempo > padraoCarne && tempo < padraoCarne*2)             || 
     (alimento == 'feijao' && tempo > padraoFeijao && tempo < padraoFeijao*2)          || 
     (alimento == 'brigadeiro' && tempo > padraoBrigadeiro && tempo < padraoBrigadeiro*2)) {
        return `${msg}. (Cuidado, a(o) ${alimento} pode ter passado um pouco do ponto).`;
    }
        // Se selecionar o prato e colocar um valor maior ou igual a 2x o valor padrao e menor que 3x o valor padrao!
     else if((alimento == 'pipoca' && tempo >= padraoPipoca*2 && tempo < padraoPipoca*3) || (alimento == 'macarrao' && tempo >= padraoMacarrao*2 && tempo < padraoMacarrao*3) || (alimento == 'carne' && tempo >= padraoCarne*2 && tempo < padraoCarne*3) || (alimento == 'feijao' && tempo >= padraoFeijao*2 && tempo < padraoFeijao*3) || (alimento == 'brigadeiro' && tempo >= padraoBrigadeiro*2 && tempo < padraoBrigadeiro*3)) {
        return  `A(o) ${alimento} queimou!`;
    }
        // Se selecionar o prato e colocar um valor menor que o padrao!
     else if ((alimento == 'pipoca' && tempo < padraoPipoca) || 
    (alimento == 'macarrao' && tempo < padraoMacarrao)       || 
    (alimento == 'carne' && tempo < padraoCarne)             || 
    (alimento == 'feijao' && tempo < padraoFeijao)           || 
    (alimento == 'brigadeiro' && tempo < padraoBrigadeiro))
    {
        return  `O tempo de ${tempo} segundos para o(a) ${alimento} é insuficiente!`;
    }
        // Se selecionar o prato e colocar um valor maior ou igual a 3x o valor padrao!
     else if ((alimento == 'pipoca' && tempo >= padraoPipoca*3) || 
    (alimento == 'macarrao' && tempo >= padraoMacarrao*3)        || 
    (alimento == 'carne' && tempo >= padraoCarne*3)              || 
    (alimento == 'feijao' && tempo >= padraoFeijao*3)            || 
    (alimento == 'brigadeiro' && tempo >= padraoBrigadeiro*3)) {
        return `A ${alimento} Explodiu!`;
    } 
        //Se o prato não estiver cadastrado!
    else {
        return  'Prato não existe!';
    }
}


console.log(microondas('feijao', 10))
console.log(microondas('feijao', 12))
console.log(microondas('pipoca', 20))
console.log(microondas('pipoca', 30))
console.log(microondas('pipoca', 11))
console.log(microondas('caldo', 11))