
function calculavalor(){
    document.getElementById('popup').classList.toggle('active');
    var valor = parseFloat(document.getElementById('pega-valor').value);

    valor *= 5.71

    document.querySelector('#insere-valor-final').innerHTML = `R$ ${valor.toFixed(2)}`;  

    document.getElementById('pega-valor').value = ''
    document.querySelector('#insere-valor-final').value = ''
}




