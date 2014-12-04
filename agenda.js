/**
 * Created by 2DAWT on 04/12/2014.
 */


function Contacto()
{
    this.nombre="";
    this.apellidos="";
    this.telefono="";
    this.fecha=fechaActual();
}

function fechaActual()
{
    var fecha=new Date;
    var dia=fecha.getDay();
    if (dia>0&&dia<10)
    dia="0"+dia;
    var mes=fecha.getMonth();
    var anio=fecha.getYear();
    return anio+"-"+mes+"-"+dia;
}

function nuevo()
{
    var persona=new Contacto();
   document.getElementById("fecha").value=persona.fecha;
    alert();
}