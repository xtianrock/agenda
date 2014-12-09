/**
 * Created by Cristian on 28/10/2014.
 */
var sobreescribir=true;
var existeOperador=false;
var operadores=["+","-","/","*"];
var mensajesError=['umm...','ups...','error...',':-('];
var resultadoAnterior="";
var operadorAnterior="";



function generaError()
{
    var resultado=document.getElementById("resultado");
    var calculo=document.getElementById("calculo");
    var inferior = 0;
    var superior = mensajesError.length-1;
    var numPosibilidades = (superior + 1) - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    aleat = (inferior + aleat);
    resultado.value=mensajesError[aleat];
    calculo.value='';
    document.getElementById("pantalla").style.backgroundColor="#FF5D5F";
    document.getElementById("resultado").style.color="#ffffff";


}
function restableceColor()
{
    document.getElementById("pantalla").style.backgroundColor="#fff";
    document.getElementById("resultado").style.color="#3B8686";
}

function ultimoCaracter()
{
    restableceColor();
    var calculo=document.getElementById("calculo");
    var caracter=calculo.value;
    return caracter[caracter.length-1];
}

function escribeNumero(caracter)
{
    restableceColor();
    var resultado=document.getElementById("resultado");
    if (resultado.value=='0'||sobreescribir)
    {
       resultado.value=caracter;
    }
    else
    {
        resultado.value+=caracter;
    }
    sobreescribir=false;

}
function escribeOperador(operador)
{
    var resultado=document.getElementById("resultado");
    var calculo=document.getElementById("calculo");



    if (!existeOperador)
    {
        if(operador=="-")
        {
            resultado.value=operador;
        }
        else
        {
            calculo.value=resultado.value+operador.toString();
            resultado.value="";
        }

    }
    else
    {
        if(resultadoAnterior!="")
        {
          resultado.value=eval(resultadoAnterior+operadorAnterior+resultado.value);
        }
        else
        {
            var operacion=calculo.value+resultado.value;
            calculo.value=operacion+operador;
            resultado.value=eval(operacion);
        }
            operadorAnterior=operador;
            resultadoAnterior=resultado.value;
    }
    existeOperador=true;
    sobreescribir=true;

    ultimoCaracter();
}

function evaluar()
{
    var resultado=document.getElementById("resultado");
    var calculo=document.getElementById("calculo");
    if(operadores.indexOf(ultimoCaracter()>-1)&&resultado.value=='')
    {
       generaError();
    }
    else
    {

        var operacion=calculo.value+resultado.value;
        calculo.value="";
        resultado.value=eval(operacion);
    }

    resultadoAnterior="";
    sobreescribir=true;
    existeOperador=false;
}

function borrar()
{
    restableceColor();
    var resultado=document.getElementById("resultado");
    resultado.value='0';
}

function borrarTodo()
{
    restableceColor();
    var resultado=document.getElementById("resultado");
    var calculo=document.getElementById("calculo");
    resultado.value='0';
    calculo.value="";
}