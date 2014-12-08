/**
 * Created by 2DAWT on 04/12/2014.
 */
var agenda=[];
var posicion=0;
var izquierda=false;
var derecha=false;


function onLoad()
{
    desplazamientoIzquierda(false);
    desplazamientoDerecha(false);
    cuadrosTexto(false);
    alert("onload");
}
function cuadrosTexto(bool)
{
    if(bool)
    {
        element("nombre").disabled=false;
        element("apellidos").disabled=false;
        element("telefono").disabled=false;
        element("fecha").disabled=false;
        element("nombre").style.background="white";
        element("apellidos").style.background="white";
        element("telefono").style.background="white";
        element("fecha").style.background="white";
    }
    else
    {
        element("nombre").disabled=true;
        element("apellidos").disabled=true;
        element("telefono").disabled=true;
        element("fecha").disabled=true;
        element("nombre").style.background="#818181";
        element("apellidos").style.background="#818181";
        element("telefono").style.background="#818181";
        element("fecha").style.background="#818181";
    }
}
function desplazamientoIzquierda(bool)
{
    izquierda=bool;
    if(!bool)
    {
        element("primer").style.background="#254d4d";
        element("anterior").style.background="#254d4d";
    }
    else
    {
        element("primer").style.background="#3B8686";
        element("anterior").style.background="#3B8686";
    }
}

function desplazamientoDerecha(bool)
{
    derecha=bool;
    if(!bool)
    {
        element("siguiente").style.background="#254d4d";
        element("ultimo").style.background="#254d4d";
    }
    else
    {
        element("siguiente").style.background="#3B8686";
        element("ultimo").style.background="#3B8686";
    }
}

function element(id)
{
    return document.getElementById(id);
}

function Contacto()
{
    this.nombre=element("nombre").value;
    this.apellidos=element("apellidos").value;
    this.telefono=element("telefono").value;
    this.fecha=fechaActual();
}

function fechaActual()
{
    var fecha=new Date;
    var dia=fecha.getDay();
    if (dia>0&&dia<10)
    dia="0"+dia;
    var mes=fecha.getMonth();
    var anio=fecha.getFullYear();
    return anio+"-"+mes+"-"+dia;
}
function limpiarCampos()
{
    element("nombre").value="";
    element("apellidos").value="";
    element("telefono").value="";
    element("fecha").value="";

}



function nuevo()
{
    cuadrosTexto(true);
    limpiarCampos();
    element("numeroRegistro").innerHTML=agenda.length+1+" de "+(agenda.length+1);


}
function guardar()
{
    persona=new Contacto();
    agenda.push(persona);
    posicion+=1;
    registrar();
    mostrar(posicion-1);
    mostrarResumen();
}
function borrar()
{
    agenda.splice(posicion-1,1);
    posicion=agenda.length;
    registrar();
}

function registrar()
{
    element("numeroRegistro").innerHTML=posicion+" de "+agenda.length;
    mostrar(posicion-1);
    if(posicion>1)
    {
        desplazamientoIzquierda(true);
    }
    else
    {
        desplazamientoIzquierda(false);
    }
    if(posicion<agenda.length)
    {
        desplazamientoDerecha(true);
    }
    else
    {
       desplazamientoDerecha(false);
    }


}
function mostrarResumen()
{
    element("textarea").value="Resumen agenda: ";
   for(i=0;i<agenda.length;i++)
   {
       element("textarea").value+="\n"+(i+1)+"   "+agenda[i].nombre+" "+agenda[i].apellidos+"  "+agenda[i].telefono+"  "+agenda[i].fecha;
   }
    element("textarea").value+="\n\n Total de entradas almacenadas: "+agenda.length;
}

function mostrar(pos)
{
    element("nombre").value=agenda[pos].nombre;
    element("apellidos").value=agenda[pos].apellidos;
    element("telefono").value=agenda[pos].telefono;
    element("fecha").value=agenda[pos].fecha;
}

function primerRegistro()
{
    if(izquierda)
    {
        posicion=1;
        registrar();
    }
}
function anteriorRegistro()
{
    if(izquierda)
    {
        posicion-=1;
        registrar();
    }
}
function siguienteRegistro()
{
    if(derecha)
    {
        posicion+=1;
        registrar();
    }
}
function ultimoRegistro()
{
    if(derecha)
    {
        posicion=agenda.length;
        registrar();
    }
}