function encriptartexto() {
    var inputText = document.getElementById("textarea").value.toLowerCase();

    /*La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"*/
    var i = 0;
    var letra;
    var palabracompleta = "";

    while (i <= inputText.length) {
      letra = inputText.charAt(i);
      if (letra == "e") {
        letra = "enter";
      } else if (letra == "i") {
        letra = "imes";
      } else if (letra == "a") {
        letra = "ai";
      } else if (letra == "o") {
        letra = "ober";
      } else if (letra == "u") {
        letra = "ufat";
      }
      palabracompleta = palabracompleta + letra;
      i++;
    }
    mostrarTextoEncriptado(palabracompleta);
  }


  function desencriptartexto() {
    var textDecifrado = document.getElementById("textarea").value.toLowerCase();

    /*La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"*/
    var text= textDecifrado.replace(/enter/igm,"e");
    var text= text.replace(/ober/igm,"o");
    var text= text.replace(/imes/igm,"i");
    var text= text.replace(/ai/igm,"a");
    var text= text.replace(/ufat/igm,"u");
    mostrarTextoDesencriptado(text)
  }

  function mostrarTextoEncriptado(palabracompleta) {
    document.getElementById("imgTwo").style.display = "none";
    document.getElementById("pTwo").textContent = palabracompleta;
    document.getElementById("pTwo").style.fontSize = "20px";
    document.getElementById("h3Two").style.display = "none";
  }

  function mostrarTextoDesencriptado(palabracompleta) {
      document.getElementById("imgTwo").style.display = "none";
    document.getElementById("pTwo").textContent = palabracompleta;
    document.getElementById("pTwo").style.fontSize = "20px";
    document.getElementById("h3Two").style.display = "none";
  
  }



  function copiartexto(){
  var content = document.getElementById('pTwo').innerHTML;

  navigator.clipboard.writeText(content);
 
  }



