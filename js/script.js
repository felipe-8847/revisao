let inputCPF = document.getElementById("cpf");
let inputCEP = document.getElementById("cep");
let inputCartao = document.getElementById("numeroCartao");
let inputsenha = document.getElementById("password");
let inputsenhacomfirme = document.getElementById("comfirme");
let inputcpfTitular = document.getElementById("cpfTitular");
let inputCVV = document.getElementById("CodigoSeguranca");
let inputEndereco = document.getElementById("endereco");
let inputBairro = document.getElementById("bairro");
let inputCidade = document.getElementById("cidade");


inputCPF.addEventListener('keyup',(event)=>{
    if (isNaN(inputCPF.value)){
        event.preventDefault();
        inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length -100))
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0,11)
    }
})
function buscarCep(cep){
    alert ("vou buscar o cep" + cep); 
}
inputCEP.addEventListener('keyup',(event)=>{
    if (isNaN(inputCEP.value)){
        event.preventDefault();
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length -1))
    }
    if (inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0,8)
        buscarCep(inputCEP.value)
    }
})
inputsenhacomfirme.addEventListener('keyup', (e)=>{
    if (inputsenhacomfirme.value != inputsenha.value){
        inputsenhacomfirme.setAttribute('class','form-control is-invalid')
    }else {
        inputsenhacomfirme.setAttribute ('class','form-control is-valid')
    }
})

inputCartao.addEventListener('keyup',(event)=>{
    if (isNaN(inputCartao.value)){
        event.preventDefault();
        inputCartao.value = inputCartao.value.substring(0,(inputCartao.value.length -1))
    }
    if (inputCartao.value.length >= 16){
        inputCartao.value = inputCartao.value.substring(0,16)
    }
})
inputCVV.addEventListener('keyup',(event)=>{
    if (isNaN(inputCVV.value)){
        event.preventDefault();
        inputCVV.value = inputCVV.value.substring(0,(inputCVV.value.length -1))
    }
    if (inputCVV.value.length >= 3){
        inputCVV.value = inputCVV.value.substring(0,3)
    }
})
inputcpfTitular.addEventListener('keyup',(event)=>{
    if (isNaN(inputcpfTitular.value)){
        event.preventDefault();
        inputcpfTitular.value = inputcpfTitular.value.substring(0,(inputcpfTitular.value.length -100))
    }
    if(inputcpfTitular.value.length >= 11){
        inputcpfTitular.value = inputcpfTitular.value.substring(0,11)
    }
})

function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response=> Response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEP.setAttribute("class", "form-control is-invalid")
        }
        inputcep.setAttribute("class", "form-control is-valid")
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.Bairro
        inputCidade.value = dados.localidade
        selectEstado.value = dados.uf

    })
}