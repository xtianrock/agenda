/**
 * Created by Cristian on 28/10/2014.
 */
var sobreescribir=true;
var existeOperador=false;
var operadores=["+","-","/","*"];
var mensajesError=['umm...','ups...','error...',':-('];
var resultadoAnterior="";
var operadorAnterior="";
var operando1;
var operador;
var operando2;

function element(id)
{
    return document.getElementById(id);
}

function generaError()
{
    var resultado=element("resultado");
    var calculo=element("calculo");
    var inferior = 0;
    var superior = mensajesError.length-1;
    var numPosibilidades = (superior + 1) - inferior;
    var aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    aleat = (inferior + aleat);
    resultado.value=mensajesError[aleat];
    calculo.value='';
    element("pantalla").style.backgroundColor="#FF5D5F";
    element("resultado").style.color="#ffffff";


}
function restableceColor()
{
    element("pantalla").style.backgroundColor="#fff";
    element("resultado").style.color="#3B8686";
}

function ultimoCaracter()
{
    restableceColor();
    var calculo=element("calculo");
    var caracter=calculo.value;
    return caracter[caracter.length-1];
}

function escribeNumero(caracter)
{
    restableceColor();
    var resultado=element("resultado");
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
function escribePunto(punto)
{
    var resultado=element("resultado");
    if(resultado.value.indexOf(".")==-1)
    {
        if(resultado.value=="")
        {
            resultado.value+="0.";
        }
        else
        {
            resultado.value+=".";
        }
        sobreescribir=false;
    }
}
function escribeOperador(operador)
{
    var resultado=element("resultado");
    var calculo=element("calculo");

    if (!existeOperador)
    {
        if((resultado.value==""||resultado.value=="0")&&operador=="-")
        {
            resultado.value=operador;
            existeOperador=true;
        }
        else if(resultado.value!=""&&resultado.value!="0")
        {
            calculo.value=resultado.value+operador;
            resultado.value="";
            existeOperador=true;
        }
    }
    else
    {
        var operacion=calculo.value+resultado.value;
        if(resultadoAnterior!="")
        {
          resultado.value=eval(resultadoAnterior+operadorAnterior+resultado.value);
            calculo.value=operacion+operador;
        }
        else
        {
            calculo.value=operacion+operador;
            resultado.value=eval(operacion);
        }
            operadorAnterior=operador;
            resultadoAnterior=resultado.value;
    }
    sobreescribir=true;
    ultimoCaracter();
}

function evaluar()
{
    var resultado=element("resultado");
    var calculo=element("calculo");
    if(operadores.indexOf(ultimoCaracter()>-1)&&resultado.value=='')
    {
       generaError();
    }
    else if(resultadoAnterior!="")
    {
        var operacion=resultadoAnterior+operadorAnterior+resultado.value;
        calculo.value="";
        resultado.value=eval(operacion);
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
    var resultado=element("resultado");
    resultado.value='0';
    resultadoAnterior="";
    operadorAnterior="";
}

function borrarTodo()
{
    restableceColor();
    var resultado=element("resultado");
    var calculo=element("calculo");
    resultado.value='0';
    calculo.value="";
    existeOperador=false;
    resultadoAnterior="";
    operadorAnterior="";
}

function retroceder()
{
    var resultado=element("resultado");
    resto = resultado.value.substr(0, resultado.value.length - 1);
    if (resto == "" || resto == "-") {
        resultado.value="0";
    } else {
      resultado.value = resto;
    }
}
function cambiaSigno()
{
    element("resultado").value*=-1;
}

function raiz()
{
    element("calculo").value="sqrt("+element("resultado").value+")";
    element("resultado").value=Math.sqrt(parseInt(element("resultado").value));
    sobreescribir=true;
}

function fraccion()
{
    element("calculo").value="reciproc("+element("resultado").value+")";
    element("resultado").value=eval("1/"+element("resultado").value);
    sobreescribir=true;
}

function porcentaje()
{
    porcientoDe=element("calculo").value.substr(0, element("calculo").value.length - 1);
    alert(element("resultado").value+"/100*"+porcientoDe);
    element("resultado").value=eval(element("resultado").value+"/100*"+porcientoDe);

    sobreescribir=true;
}