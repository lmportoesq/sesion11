let calificacion=parseInt(prompt("Ingrese tu calificación"));
if(calificacion>90){
    console.log("Aprobo con Honores");
    document.write("Aprobo con Honores");
 
}else if(calificacion>=70){
    console.log("Aprobo");
    document.write("aprobo");
 
}
else{
    console.log("reprobo");
    document.write("reprobo");
}
