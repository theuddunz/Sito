function ciao(){
  alert("mi hai cliccato");
}

function showtime(){
  var data = new Date();
  document.getElementById("ora").innerHTML = data;
}

function iltuonome() {
  var persona = {
    nome : document.getElementById('nome').value,
    cognome : document.getElementById('cognome').value,
    nomeintero : function(){
      return (this.nome + " " + this.cognome);
    }
  };
  document.getElementById("nomeintero").innerHTML = persona.nomeintero(); //attenzione alle parentesi, sennò ritorna la definizione della funzione!!
}
