/* time*/
function mostrarDescritivo(id) {
    var descritivos = document.getElementsByClassName("info");
    var descritivo = descritivos[id];
  
    if (descritivo.style.display === "none") {
      descritivo.style.display = "block";
    } else {
      descritivo.style.display = "none";
    }
  }
/*Index*/ 
  function mostrarDescricao(id) {
    var descricao = document.getElementById('descricao-' + id);
    if (descricao.style.display === 'none') {
      descricao.style.display = 'block';
    } else {
      descricao.style.display = 'none';
    }
  }