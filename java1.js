var n = Math.round ( Math.random()*100);
console.log(n)

const inp = document.getElementById("nombre")
const para = document.getElementById("msg")

var tentative = 0


function deviner(){
    var valeur_saisie = inp.value;
    if (n > valeur_saisie) {
        para.textContent = "le nombre est encors plus grand"
        para.classList.remove("success")
        para.classList.add("erreur")
        
        inp.value = ""
        inp.focus()
        tentative++
    }
    else if(n < valeur_saisie) {
         para.textContent = "le nombre est encors plus petit"
         para.classList.remove("success")
         para.classList.add("erreur")
        
         inp.value = ""
        inp.focus()
        tentative++

    }
    else 
    {
        tentative++
        para.textContent = "Bravo le nombre de tentatives est " +tentative 
        para.classList.add("success")
        
    }

    
}