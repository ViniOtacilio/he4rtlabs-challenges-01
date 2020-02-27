
let ResultadoValorHora;

function submitValue(){
    event.preventDefault();
    let ValorTotal = document.getElementById('valor-total').value;
    let HorasTrabalhadas = document.getElementById('horas-trabalhadas').value;
    let DiasTrabalhados = document.getElementById('dias-trabalhados').value;
    let DiasFerias = document.getElementById('dias-ferias').value;
    ResultadoValorHora = (ValorTotal / (DiasTrabalhados * 4 * HorasTrabalhadas)) + ( ( DiasFerias * DiasTrabalhados * HorasTrabalhadas) );
    localStorage.setItem('ResultadoValorHora',ResultadoValorHora);
    location.href="http://127.0.0.1:5500/src/result-page/indexResult.html";
}


