/**
 * Created by 2DAWT on 04/12/2014.
 */
var agenda=[];
var posicion=0;
var izquierda=false;
var derecha=false;
var guardar=false;
var borrar=false;
var editar=false;
var buscarInd=false;
var accionBorrar="borrar";
var accionGuardar="guardar";
var colorBotonDesactivado="#254d4d";
var colorBotonActivado="#3B8686";
var colorInputActivado="white";
var colorInputDesactivado="#818181";


function onLoad()
{
    desplazamientoIzquierda(false);
    desplazamientoDerecha(false);
    cuadrosTexto(false);
    activarBotones(false,["borrar","guardar","editar"])
}
function activarBotones(activo,botones)
{
    if(activo)
    {
        for(i=0;i<botones.length;i++)
        {
            element(botones[i]).style.background=colorBotonActivado;
           window [botones[i]]=true;
        }
    }
    else
    {
        for(i=0;i<botones.length;i++)
        {
            element(botones[i]).style.background=colorBotonDesactivado;
            window [botones[i]]=false;
        }
    }

}


function cuadrosTexto(bool)
{
    if(bool)
    {
        element("nombre").disabled=false;
        element("apellidos").disabled=false;
        element("telefono").disabled=false;
        element("fecha").disabled=false;
        element("nombre").style.background=colorInputActivado;
        element("apellidos").style.background=colorInputActivado;
        element("telefono").style.background=colorInputActivado;
        element("fecha").style.background=colorInputActivado;
    }
    else
    {
        element("nombre").disabled=true;
        element("apellidos").disabled=true;
        element("telefono").disabled=true;
        element("fecha").disabled=true;
        element("nombre").style.background=colorInputDesactivado;
        element("apellidos").style.background=colorInputDesactivado;
        element("telefono").style.background=colorInputDesactivado;
        element("fecha").style.background=colorInputDesactivado;
    }
}
function desplazamientoIzquierda(bool)
{
    izquierda=bool;
    if(!bool)
    {
        element("primer").style.background=colorBotonDesactivado
        element("anterior").style.background=colorBotonDesactivado;
    }
    else
    {
        element("primer").style.background=colorBotonActivado;
        element("anterior").style.background=colorBotonActivado
    }
}

function desplazamientoDerecha(bool)
{
    derecha=bool;
    if(!bool)
    {
        element("siguiente").style.background=colorBotonDesactivado;
        element("ultimo").style.background=colorBotonDesactivado;
    }
    else
    {
        element("siguiente").style.background=colorBotonActivado;
        element("ultimo").style.background=colorBotonActivado;
    }
}
function cambiarAccionBorrar(accion)
{
    if(accion=="borrar")
    {
        element("borrar-img").src = "img/borrar.png";
        element("borrar").title = "Eliminar contato";
        accionBorrar = "borrar";
    }
    else
    {
        element("borrar-img").src = "img/cancelar.png";
        element("borrar").title = "Cancelar";
        accionBorrar = "cancelar";
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



function nuevoContacto()
{
    cuadrosTexto(true);
    limpiarCampos();
    element("numeroRegistro").innerHTML=agenda.length+1+" de "+(agenda.length+1);
    activarBotones(true,["borrar","guardar"]);
    cambiarAccionBorrar("cancelar");
}

function editarContacto()
{
    if (editar)
    {
        accionGuardar="editar";
        activarBotones(false,["nuevo"]);
        activarBotones(true,["guardar"]);
        cambiarAccionBorrar("cancelar");
        cuadrosTexto(true);
    }
}

function guardarContacto()
{
    if(guardar)
    {
        persona=new Contacto();
        if(accionGuardar=="guardar")
        {
            agenda.push(persona);
            posicion+=1;
        }
        else
        {
            agenda[posicion-1]=persona;
            accionGuardar="guardar";
        }
        registrar();
        mostrar(posicion-1);
        mostrarResumen();
        activarBotones(true,["borrar","editar","nuevo"]);
        activarBotones(false,["guardar"]);
        cuadrosTexto(false);
        cambiarAccionBorrar("borrar")
    }
}
function borrarContacto()
{
    if(borrar)
    {
        if (accionBorrar=="borrar")
        {
            agenda.splice(posicion-1,1);
            posicion=agenda.length;
            registrar();
            //activarBotones(true,["nuevo"]);
        }
        else
        {

            cuadrosTexto(false);
            cambiarAccionBorrar("borrar");
            posicion=agenda.length;
            limpiarCampos();
            activarBotones(false,["borrar"]);
            activarBotones(true,["nuevo"]);
            registrar();
        }
    }

}

function buscarIndice()
{
    if (buscarInd)
    {
        alert("buscar");
    }
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