
//utilizamos o ".querySelector" para pegarmos o valor de algum elemento e entao armazenamos ele em uma variavel
//porem pegamos esse valor de acordo com a classe ou id do elemento como exemplo ".titulo"

var titulo = document.querySelector(".titulo");
//usamos o textContent para printarmos o valor desejado, ou seja
//pegamos o valor que queremos substituir, no caso o que tem a class "titulo" e assim fazemos
// igual =, ao valor que desejamos substituir - "nutricionista"
titulo.textContent = "Nutricionista";

var paciente = document.querySelector("#p-paciente");




var todosOsPacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < todosOsPacientes.length; i++){
    var paciente = todosOsPacientes[i]

    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaTrue = true;
    var pesoTrue = true;



    if(peso < 0 || peso > 1000){
        console.log("peso invalido")
        pesoTrue = false;
        tdImc.textContent = "Peso Invalido";
        //aqui podemos criar uma nova classe para algum elemento e assim adicionando uma funcao
        paciente.classList.add("paciente-invalido");
    }
    if(altura < 0 || altura > 4.00){
        console.log("altura invalida")
        alturaTrue = false;
        tdImc.textContent = "Altura Invalido"
        paciente.classList.add("paciente-invalido");
    }
    if(alturaTrue && pesoTrue){
        var imc = peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
//EVENTO DE CLICK, OU SEJA, QUANDO QUISER QUE ACONTECA UM EVENTO ao clicar em algo FACA ISSO
titulo.addEventListener("click", mostrarmensagem);
function mostrarmensagem(){
    console.log("clikcou")
}

var btnAdd = document.querySelector("#adicionar-paciente");
btnAdd.addEventListener("click", function(event){
    //previnir o comportamento padrao - recarregar a pagina
    event.preventDefault();
    //e fazer isso
    var form = document.querySelector("#add");
    //para ter acesso aos inputs do form, basta fazer form.o nome que deseja pegar, ex - form.altura
    console.log(form.altura);
    // e para pegar o valor especifico basta adicionar .value
    console.log(form.altura.value)

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //para criar elementos usasse essa linha de codigo
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // ou seja o valor nomeTd é exatamente o valor que eu extrai em var nome - form.nome.value
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //essa funcao serve para colocar elementos como filhos em algum elemento especifico
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)
})
