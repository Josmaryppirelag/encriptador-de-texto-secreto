function encrypt(){
    var text= document.getElementById("textarea").value;
    textEncrypt= text.toString().replace(/a/gm,"ai");
    textEncrypt= textEncrypt.replace(/e/gm,"enter");
    textEncrypt= textEncrypt.replace(/i/gm,"imes");
    textEncrypt= textEncrypt.replace(/o/gm,"ober");
    textEncrypt= textEncrypt.replace(/u/gm,"ufat");

    document.getElementById("message").innerHTML= textEncrypt;
    document.getElementById("copy").style.display= "Show";
    document.getElementById("copy").style.display= "inherit";
    

}

    function decrypt(){
        var text= document.getElementById("textarea").value;
        textEncrypt= text.toString().replace(/ai/gm,"a");
        textEncrypt= textEncrypt.replace(/enter/gm,"e");
        textEncrypt= textEncrypt.replace(/imes/gm,"i");
        textEncrypt= textEncrypt.replace(/ober/gm,"o");
        textEncrypt= textEncrypt.replace(/ufat/gm,"u");
    
        document.getElementById("message").innerHTML= textEncrypt;
        document.getElementById("copy").style.display= "Show";
        document.getElementById("copy").style.display= "inherit";
    
    
    }
    
    window.onload = function () {
        encrypt();
        decrypt();
        }

function copy(){
    let content= document.getElementById("message").innerHTML;
    navigator.clipboard.writeText(content);
    }
