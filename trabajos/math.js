const math={};

function suma (valor1, valor2){
    console.log(valor1+valor2)
}
function resta (valor1, valor2){
    console.log(valor1-valor2)
}
function mult (valor1, valor2){
    console.log(valor1*valor2)
}

math.add =  suma;
math.resta = resta;
math.multi = mult;

module.export = math;
