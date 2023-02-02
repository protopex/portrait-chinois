var objanalogie;
var objvaleuranalogie;
var objet_analogie;


//Importer les annalogies depuiss le fichier annalogies.json
fetch('analogies.json').then(function (response) {
  response.json().then(function (data) {              //Récupère les données du JSON et les stocke dans une variale data
    console.log(data);
    for (let numCase = 0; numCase < data.length; numCase++) {
      const element = data[numCase]    //Execute la fonction analogies avec toutes les valeurs de data
      analogies(element)
    }
  })
})


function analogies(x) {
  document.querySelector(".main").innerHTML += "<section class=slider id=" + x.id + "><h1>" + x.titre + "</h1>" + x.image + "<p class=[TEXTES]>Si j'étais " + x.analogie + " je serais " + x.valeurAnalogie + " car " + x.explication + "</p></section>"
}


const envoyer_form = document.getElementById("Envoyerform")
envoyer_form.addEventListener("click", ajouter_analogie)



function ajouter_analogie() {
  const input_analogie = document.getElementById("analogie").value
  const input_valeurAnalogie = document.getElementById("valeurAnalogie").value
  const input_titre = document.getElementById("titre").value
  const input_explication = document.getElementById("explication").value



  objet_analogie = {
    "analogie": input_analogie, "valeurAnalogie": input_valeurAnalogie, "titre": input_titre, "explication": input_explication,
    "image": image_analogie
  }
  analogies(objet_analogie)
}

//avoir les images quand l'utilisateur choisi son analogie
var loadFile = function(event) {
  image_analogie =  "<img class=Imageclickable src=" + URL.createObjectURL(event.target.files[0]) + ">"
  console.log(image_analogie)
};


// pour la fenetre modal
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// les evenements qui peuvent arriver
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// ouverture de la modal
function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

//API

function creation_fonction() {
  objet_analogie = { "analogie": input_analogie, "valeurAnalogie": input_valeurAnalogie, "titre": input_titre, "explication": input_explication, "image": image_analogie, }
  url = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&courriel=" + Email + "&login=antoine.attali&message=Si jétais_" + input_analogie + "_je serais_" + input_valeurAnalogie + "_car " + input_explication + "_Votre image_" + image_analogie;
  analogies(objet_analogie)
  document.getElementById('preview').scrollIntoView();

  if (confirm(url) == true) {
    window.open(url)
  } else {
    alert("et voila toc")
  }
}