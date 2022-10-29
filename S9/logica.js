
function procesar(t, e, p) {

    const talla = parseInt(document.getElementById(t).value);
    const edad = parseInt(document.getElementById(e).value);
    const peso = parseInt(document.getElementById(p).value);
    const g = document.querySelector('input[name="answer"]:checked').value;


    // const genero = parseInt(document.getElementsByClassName('radio').is(":checked").value);
    console.log('talla  ' + typeof talla);
    console.log('edad  ' + typeof edad);
    console.log('peso  ' + typeof peso);
    console.log('gen  ' + g);

    let imc = 50 + ((talla - 150) / 4) * 3 + (edad - 20) / 4 * g;

    const result = document.getElementById('result');
    let msg = '';
    if (peso > imc) msg = 'Tienes sobrepeso';
    if (peso < imc) msg = 'Estas bajo de peso';
    result.innerHTML = msg + '</br>Tu peso actual es:    ' + peso + '</br>Tu peso ideal es:   ' + imc;



}



