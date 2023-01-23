const panier = document.getElementById("panier");
const articlesPanier = panier.querySelectorAll(".article-panier");
const boutonsMoins = panier.querySelectorAll(".bouton-moins");
const boutonsPlus = panier.querySelectorAll(".bouton-plus");
const boutonsSupprimer = panier.querySelectorAll(".bouton-supprimer-article");
const boutonsAimer = panier.querySelectorAll(".bouton-aimer-article");
const prixTotal = document.getElementById("prix-total-panier");


function mettreAJourPrixTotal() {
  let prix = 0;
  for (let i = 0; i < articlesPanier.length; i++) {
    const prixArticle = parseFloat(articlesPanier[i].querySelector(".prix-article").innerText.replace("$", ""));
    const quantitéArticle = parseFloat(articlesPanier[i].querySelector(".input-quantité-article").value);
    prix += prixArticle * quantitéArticle;
  }
  prixTotal.innerText = `Total: $${prix}`;
}


for (let i = 0; i < boutonsMoins.length




; i++) {
boutonsMoins[i].addEventListener("click", function() {
const inputQuantité = this.parentElement.querySelector(".input-quantité-article");
if (parseFloat(inputQuantité.value) > 1) {
inputQuantité.value = parseFloat(inputQuantité.value) - 1;
}
mettreAJourPrixTotal();
});
}

for (let i = 0; i < boutonsPlus.length; i++) {
boutonsPlus[i].addEventListener("click", function() {
const inputQuantité = this.parentElement.querySelector(".input-quantité-article");
inputQuantité.value = parseFloat(inputQuantité.value) + 1;
mettreAJourPrixTotal();
});
}

for (let i = 0; i < boutonsSupprimer.length; i++) {
boutonsSupprimer[i].addEventListener("click", function() {
const article = this.parentElement;
article.remove();
mettreAJourPrixTotal();
});
}

for (let i = 0; i < boutonsAimer.length; i++) {
boutonsAimer[i].addEventListener("click", function() {
this.classList.toggle("aimé");
});
}


mettreAJourPrixTotal();