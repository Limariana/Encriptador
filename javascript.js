
function obtenerdatos(){
    var texto = document.getElementById ("input-texto").value;
        
            
                
                
            
        
    
        texto = texto.replace (/e/g , "enter"). replace(/i/g,"imes"). replace (/a/g, "ai"). replace(/o/g, "ober"). replace(/u/g, "ufat");
        document.getElementById ("msg").value =texto;
        document.getElementById ("input-texto").value = "";
        document.getElementById ("input-texto").focus();
}

function desencriptarTexto(){
    var texto = document.getElementById ("input-texto").value;
        texto = texto.replace (/enter/g , "e"). replace(/imes/g,"i"). replace (/ai/g, "a"). replace(/ober/g, "o"). replace(/ufat/g, "u");
    
            
    
    
            
        
           
     document.getElementById ("msg").value =texto;
    console.log(texto);


    document.getElementById ("input-texto").value = "";
    document.getElementById ("input-texto").focus();
}


function copiado(){
    var msg = document.getElementById ("msg");
    msg.select(); 
    msg.setSelectionRange(0,9999);
    
    document.execCommand("copy"); 
    alert("mensaje copiado");
    document.getElementById ("msg").value = "";
}
