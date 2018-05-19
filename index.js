function ciao(){
  alert("mi hai cliccato");
}

function showtime(){
  var data = new Date();
  document.getElementById("ora").innerHTML = data;
}

function iltuonome() {
  var oggetto = {
    nome : "vaff",
    cognome : "anculo",
    nomeintero : function() {
      return this.nome  + " " + this.cognome;
    }
  };
  document.getElementById("nomeintero").innerHTML = oggetto.nomeintero;
}
