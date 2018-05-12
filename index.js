function ciao(){
  alert("blabla");
}

function showtime(){
  var data = new Date();
  document.getElementById("ora").innerHTML = data;
}

function oggetto(){
  var oggetto = {
    nome:"",
    cognome:"pappo",
    nomeintero: function(){
      return this.nome + " " + this.cognome;
    }
  };
  return oggetto;
}
