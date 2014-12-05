/**
 * Created by 2DAWT on 04/12/2014.
 */
var agenda=[];
var posicion=0;

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
    element("nombre").value='';
    element("apellidos").value="";
    element("telefono").value="";
    element("fecha").value="";
}

function activarBotones(bool)
{
    element("nombre").onclick=bool;
    element("apellidos").onclick=bool;
    element("telefono").onclick=bool;
    element("fecha").onclick=bool;
    element("primer").onclick=bool;
    element("anterior").onclick=bool;
    element("siguiente").onclick=bool;
    element("ultimo").onclick=bool;
    element("borrar").onclick=bool;
    element("nuevo").onclick=bool;
}

function nuevo()
{
    element("nombre").disabled=false;
    element("apellidos").disabled=false;
    element("telefono").disabled=false;
    element("fecha").disabled=false;
    limpiarCampos();
    activarBotones(false);
    element("numeroRegistro").innerHTML=agenda.length+1+" de "+(agenda.length+1);


}
function guardar()
{
    persona=new Contacto();
    agenda.push(persona);
    posicion+=1;
    registrar();
    activarBotones(true);
    mostrar(posicion-1);


}

function registrar()
{
    element("numeroRegistro").innerHTML=posicion+" de "+agenda.length;
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
    posicion=1;
    registrar();
}
function anteriorRegistro()
{
    if(posicion>1)
    posicion-=1;
    registrar();
}
function siguienteRegistro()
{
    if(posicion<agenda.length)
    posicion+=1;
    registrar();
}
function ultimoRegistro()
{
    posicion=agenda.length;
    registrar();
}