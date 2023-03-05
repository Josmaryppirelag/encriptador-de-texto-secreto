function encrypt(){
    let text= document.getElementById("textarea").value();
    let textEncrypt= text.replace(/a/gm,"ai");
    let textEncrypt= textEncrypt.replace(/e/gm,"enter");
    let textEncrypt= textEncrypt.replace(/i/gm,"imes");
    let textEncrypt= textEncrypt.replace(/o/gm,"ober");
    let textEncrypt= textEncrypt.replace(/u/gm,"ufat");

    document.getElementById("message").innerHTML= textEncrypt;
    document.getElementById("copy").style.display= "Show";
    document.getElementById("copy").style.display= "inherit";

}

function decrypt(){
    let text= document.getElementById("textarea").value();
    let textEncrypt= text.replace(/ai/gm,"a");
    let textEncrypt= textEncrypt.replace(/enter/gm,"e");
    let textEncrypt= textEncrypt.replace(/imes/gm,"i");
    let textEncrypt= textEncrypt.replace(/ober/gm,"o");
    let textEncrypt= textEncrypt.replace(/ufat/gm,"u");

    document.getElementById("message").innerHTML= textEncrypt;
    document.getElementById("copy").style.display= "Show";
    document.getElementById("copy").style.display= "inherit";

}

function copiar(){
    let content= document.querySelector("message");
    content.select();
    document.execCommand("copy");
}
