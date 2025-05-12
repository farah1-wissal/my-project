
function ajouter(valeur) {
    document.getElementById('affiche').value += valeur
  }
  
  function effacer() {
    document.getElementById('affiche').value = ''
  }
  
  function supprimerDernier() {
    let contenu = document.getElementById('affiche').value
    document.getElementById('affiche').value = contenu.slice(0, -1)
  }
  
  function calculer() {
      let resultat = eval(document.getElementById('affiche').value)
      document.getElementById('affiche').value = resultat
    } 
  
  function modeSombre() {
    document.body.classList.toggle('sombre')
  }