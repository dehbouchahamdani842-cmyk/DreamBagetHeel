const produits = [
  { nom: "Viennoise Nature", image: "./images/img/viennoise-nature.png", description: "Viennoiserie moelleuse nature", prix: "80 DA", categorie: "Viennoiseries", nouveau: true, note: 4.5, stock: 10 },
  { nom: "Viennoise Chocolat", image: "./images/img/viennoise-chocolat.png", description: "Viennoise garnie de chocolat", prix: "85 DA", categorie: "Viennoiseries", note: 4.3, stock: 14 },
  { nom: "Tropezienne Individuelle", image: "./images/img/tropezienne-individuelole.png", description: "Brioche garnie de crème", prix: "120 DA", categorie: "Desserts", nouveau: true, stock: 6 },
  { nom: "Tiramisu Café", image: "./images/img/tiramisu-cafe.png", description: "Dessert italien au café", prix: "130 DA", categorie: "Desserts", note: 4.1, stock: 8 },
  { nom: "Tartes Nounours", image: "./images/img/tartes-nounours.png", description: "Tarte rigolote pour enfants", prix: "100 DA", categorie: "Desserts", stock: 11 },
  { nom: "Tartelette Tatin", image: "./images/img/tartelette-tatin.png", description: "Tartelette aux pommes caramélisées", prix: "95 DA", categorie: "Desserts", promo: true, note: 4.2, stock: 7 },
  { nom: "Tartelette Nounours", image: "./images/img/tartelette-nounours.png", description: "Mini tarte sucrée pour enfants", prix: "90 DA", categorie: "Desserts", stock: 10 },
  { nom: "Tarte aux Pommes", image: "./images/img/tarte-au-pommes.png", description: "Tarte fine aux pommes", prix: "110 DA", categorie: "Desserts", note: 4.0, stock: 5 },
  { nom: "Tartelette Framboises", image: "./images/img/tartelette-au-framboises.png", description: "Tartelette garnie de framboises", prix: "115 DA",  note: 4.8,categorie: "Desserts", stock: 4 },
  { nom: "Tarte Citron Framboises", image: "./images/img/tarte-citron framboises.png", description: "Alliance citron/framboises", prix: "120 DA", note: 4.1, categorie: "Desserts", promo: true, stock: 6 },
  { nom: "Tartelette aux Fraises", image: "./images/img/tartelette-aux-fraises.png", description: "Tartelette garnie de fraises fraîches", prix: "110 DA", categorie: "Desserts", note: 4.1, nouveau: true, stock: 9 },
  { nom: "Tarte aux Framboises", image: "./images/img/tarte-au-framboises.png", description: "Tarte généreuse aux framboises", prix: "125 DA", categorie: "Desserts", note: 4.4, stock: 8 },
  { nom: "Tarte Amandine Poires", image: "./images/img/tarte-amandine-poires.png", description: "Poires et crème d'amande", prix: "105 DA", categorie: "Desserts", note: 4.1, stock: 7 },
  { nom: "Tarte aux Fraises", image: "./images/img/tarte aux fraises.png", description: "Grande tarte aux fraises fraîches", prix: "130 DA", categorie: "Desserts", note: 4.1, promo: true, stock: 4 },
  { nom: "Pavé aux Céréales", image: "./images/img/pave-au-cereales.png", description: "Pain rustique aux céréales", prix: "60 DA", categorie: "Pains", note: 4.1, stock: 12 },
  { nom: "Pavé de Compagne", image: "./images/img/pave-de-compagne.png", description: "Pain de campagne au levain", prix: "65 DA", categorie: "Pains", note: 4.1, stock: 13 },
  { nom: "Pavé de Tradition", image: "./images/img/pave-de-tradition.png", description: "Pain traditionnel croustillant", prix: "68 DA", categorie: "Pains", note: 4.1, stock: 14 },
  { nom: "Part de Flan Vanille", image: "./images/img/part-de-flan-vanille.png", description: "Flan vanille crémeux", prix: "90 DA", categorie: "Desserts", note: 4.1, stock: 10 },
  { nom: "Paris-Brest", image: "./images/img/paris-brest.png", description: "Pâte à choux et crème pralinée", prix: "125 DA", categorie: "Desserts", note: 4.6, stock: 3 },
  { nom: "Panacotta Fruits Rouges", image: "./images/img/panacotta-fruit-rouges.png", description: "Crème italienne et fruits", prix: "100 DA", categorie: "Desserts", note: 4.1, stock: 6 },
  { nom: "Pain Suisse Chocolat Noisettes", image: "./images/img/pain-suisse-chocolat-noisettes.png", description: "Viennoiserie chocolat-noisette", prix: "85 DA", categorie: "Viennoiseries", note: 4.1, stock: 9 },
  { nom: "Pain de Mie Lunch Maïs", image: "./images/img/pain-de-mie-lunch-mais.png", description: "Pain de mie doux au maïs", prix: "70 DA", categorie: "Pains", note: 4.1, stock: 15 },
  { nom: "Pain de Tradition", image: "./images/img/pain-de-tradition.png", description: "Pain blanc traditionnel", prix: "60 DA", categorie: "Pains", note: 4.1, stock: 11 },
  { nom: "Pain Nordique", image: "./images/img/pain-noridique.png", description: "Pain foncé aux graines", prix: "72 DA", categorie: "Pains", note: 4.1, stock: 8 },
  { nom: "Pain Suisse", image: "./images/img/pain-suisse.png", description: "Viennoiserie au chocolat", prix: "88 DA", categorie: "Viennoiseries", note: 4.1, stock: 10 },
  { nom: "Pain de Compagne", image: "./images/img/pain-de-compagne.png", description: "Pain rustique à l'ancienne", prix: "70 DA", categorie: "Pains", stock: 14 },
  { nom: "Pain aux Raisins et Cranberries", image: "./images/img/pain-aux-raisins-et-cranberries.png", description: "Pain sucré fruité", prix: "90 DA", categorie: "Viennoiseries", note: 4.1, stock: 5 },
  { nom: "Pain aux Raisins", image: "./images/img/pain-aux-rainsins.png", description: "Viennoiserie aux raisins secs", prix: "85 DA", categorie: "Viennoiseries",  note: 4.1,stock: 7 },
  { nom: "Pain aux Noisettes", image: "./images/img/pain-aux-noisettes.png", description: "Pain aux éclats de noisettes", prix: "95 DA", categorie: "Pains", note: 4.1, stock: 6 },
  { nom: "Pain au Seigle", image: "./images/img/pain-au-seigle.png", description: "Pain foncé au seigle", prix: "75 DA", categorie: "Pains", stock: 8 },
  { nom: "Pain Abricots Noisettes", image: "./images/img/pain-aux-abricots-et-noisettes.png", description: "Pain sucré aux fruits secs", prix: "100 DA", categorie: "Pains",  note: 4.1,stock: 5 },
  { nom: "Pain aux Céréales", image: "./images/img/pain-aux-cereales.png", description: "Mélange de farines et graines", prix: "80 DA", categorie: "Pains", stock: 10 },
  { nom: "Pain Graines Courge Cranberries", image: "./images/img/pain-aux-de-courges-et-cranberries.png", description: "Pain original et fruité", prix: "90 DA", categorie: "Pains",  note: 4.1,stock: 6 },
  { nom: "Pain au Maïs", image: "./images/img/pain-au-mais.png", description: "Pain jaune et doux", prix: "70 DA", categorie: "Pains", stock: 9 },
  { nom: "Pain au Comté", image: "./images/img/pain-au-comte.png", description: "Pain garni de fromage comté", prix: "95 DA", categorie: "Pains",  note: 4.1,promo: true, stock: 4 },
  { nom: "Pain Complet", image: "./images/img/pain-au-complet.png", description: "Pain riche en fibres", prix: "65 DA", categorie: "Pains", stock: 13 },
  { nom: "Pain Chocolat Amande", image: "./images/img/pain-au-chocolat-a-lamande.png", description: "Viennoiserie chocolat-amande", prix: "90 DA", categorie: "Viennoiseries", note: 4.1, stock: 6 },
  { nom: "Mini Pain au Chocolat", image: "./images/img/mini-pain-au-chocolat.png", description: "Version mini pour enfants", prix: "45 DA", categorie: "Viennoiseries", stock: 10 },
  { nom: "Mini Pain aux Raisins", image: "./images/img/mini-pain-aux-rainsins.png", description: "Petit pain aux raisins", prix: "45 DA", categorie: "Viennoiseries",  note: 4.1,stock: 9 },
  { nom: "Opéra Individuel", image: "./images/img/opera-individuel.png", description: "Gâteau chic au chocolat", prix: "140 DA", categorie: "Desserts", stock: 3 },
  { nom: "Pain au Chocolat", image: "./images/img/pain-au-chocolat.png", description: "Classique viennoiserie au chocolat", prix: "90 DA", categorie: "Viennoiseries", promo: true, note: 5, stock: 0 },
  { nom: "Mini Croissant", image: "./images/img/mini-croissant.png", description: "Mini croissant pur beurre", prix: "40 DA", categorie: "Viennoiseries", note: 4.1, stock: 15 },
  { nom: "Macaron Vanille", image: "./images/img/macaron-vanille.png", description: "Macaron à la vanille", prix: "60 DA", categorie: "Macarons", stock: 12 },
  { nom: "Macaron Pistache", image: "./images/img/macaron-pistache.png", description: "Macaron à la pistache", prix: "60 DA", categorie: "Macarons", stock: 12 },
  { nom: "Macaron Nutella", image: "./images/img/macaron-nutella.png", description: "Macaron au Nutella", prix: "60 DA", categorie: "Macarons", stock: 12 },
  { nom: "Macaron Chocolat Noir", image: "./images/img/macaron-chocolat-noir.png", description: "Macaron chocolat intense", prix: "60 DA", categorie: "Macarons", note: 4.1, stock: 12 },
  { nom: "Macaron Chocolat Passion", image: "./images/img/macaron-chocolat-passion.png", description: "Chocolat noir & fruit de la passion", prix: "60 DA", categorie: "Macarons", stock: 12 },
  { nom: "Macaron Framboise", image: "./images/img/macaron-framboise.png", description: "Macaron à la framboise", prix: "60 DA", categorie: "Macarons", stock: 12 },
  { nom: "Macaron Caramel Fleur de Sel", image: "./images/img/macaron-caramel-fleur-de-sel.png", description: "Caramel salé et douceur", prix: "60 DA", categorie: "Macarons", note: 4.1, stock: 12 },
  { nom: "Macaron Café", image: "./images/img/macaron-cafe.png", description: "Macaron au café", prix: "60 DA", categorie: "Macarons", note: 4.1, stock: 12 }
];

const groupes = {};
produits.forEach(p => {
  if (!groupes[p.categorie]) groupes[p.categorie] = [];
  groupes[p.categorie].push(p);
});

let categorieActive = null;

function afficherBoutonsCategories() {
  const filtres = document.getElementById("filtres-categories");

  const btnTous = document.createElement("button");
  btnTous.textContent = "Tous";
  btnTous.className = "btn-categorie active";
  btnTous.addEventListener("click", () => {
    filtrerCategorie(null);
    setCategorieActive(btnTous);
  });
  filtres.appendChild(btnTous);

  Object.keys(groupes).forEach(categorie => {
    const btn = document.createElement("button");
    btn.textContent = categorie;
    btn.className = "btn-categorie";
    btn.addEventListener("click", () => {
      filtrerCategorie(categorie);
      setCategorieActive(btn);
    });
    filtres.appendChild(btn);
  });
}

function afficherCarteProduit(produit) {
  const container = document.getElementById("produits");

  const carte = document.createElement("div");
  carte.className = "produit";
  if (produit.stock === 0) carte.classList.add("rupture");

  carte.innerHTML = `
<div class="boutons-actions">
  <button class="btn-ajout"${produit.stock === 0 ? " disabled" : ""}>+</button>
</div>


    <img src="${produit.image}" alt="${produit.nom}">
    <div class="info-produit">
      <button class="btn-fermer hidden">&times;</button>
      <h3>${produit.nom.replace(/\s+/g, '\n')}</h3>
      <p>${produit.description || ""}</p>
      <div class="note">${"★".repeat(Math.floor(produit.note || 0))}${"☆".repeat(5 - Math.floor(produit.note || 0))}</div>
      <div class="details-caches hidden">
        <p class="prix">Prix : ${produit.prix}</p>
        <button class="btn-ajout-secondaire">Ajouter au panier</button>
      </div>
    </div>
  `;

  if (produit.nouveau) {
    const badge = document.createElement("div");
    badge.textContent = "NOUVEAU";
    badge.className = "badge-nouveau";
    carte.appendChild(badge);
  }
  if (produit.promo) {
    const badge = document.createElement("div");
    badge.textContent = "PROMO";
    badge.className = "badge-promo";
    carte.appendChild(badge);
  }
  if (produit.stock === 0) {
    const badge = document.createElement("div");
    badge.textContent = "Rupture";
    badge.className = "badge-rupture";
    carte.appendChild(badge);
  }

  const boutonSecondaire = carte.querySelector(".btn-ajout-secondaire");
  const boutonAjout = carte.querySelector(".btn-ajout");
  const divActions = carte.querySelector(".boutons-actions");
const favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
const estFavori = favoris.includes(produit.nom);

const btnFavori = document.createElement("button");
btnFavori.className = "btn-favori";
btnFavori.innerHTML = `<i class="${estFavori ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
btnFavori.onclick = () => toggleFavori(produit.nom, btnFavori);

divActions.appendChild(btnFavori);

  const details = carte.querySelector(".details-caches");
  const boutonFermer = carte.querySelector(".btn-fermer");

  carte.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-ajout")) return;

    document.querySelectorAll(".produit.zoomed").forEach(p => {
      p.classList.remove("zoomed");
      p.querySelector(".details-caches")?.classList.add("hidden");
    });

    carte.classList.add("zoomed");
    details.classList.remove("hidden");

    document.addEventListener("click", function unzoom(event) {
      if (!carte.contains(event.target)) {
        carte.classList.remove("zoomed");
        details.classList.add("hidden");
        document.removeEventListener("click", unzoom);
      }
    });
  });

  boutonAjout?.addEventListener("click", () => {
    lancerAnimationVol(carte.querySelector("img"));
    ajouterAuPanier(produit.nom);
     afficherMessagePanier(produit.nom);
  });

  boutonSecondaire?.addEventListener("click", (e) => {
    e.stopPropagation();
    lancerAnimationVol(carte.querySelector("img"));
    ajouterAuPanier(produit.nom);
      afficherMessagePanier(produit.nom);
  });

  container.appendChild(carte);
}

function filtrerCategorie(categorie) {
  categorieActive = categorie;
  const container = document.getElementById("produits");
  container.innerHTML = "";
  const produitsAAfficher = categorie ? groupes[categorie] : produits;
  produitsAAfficher.forEach(p => afficherCarteProduit(p));
}

function setCategorieActive(boutonActif) {
  document.querySelectorAll(".btn-categorie").forEach(btn => btn.classList.remove("active"));
  boutonActif.classList.add("active");
}

afficherBoutonsCategories();
filtrerCategorie(null);

// Panier
const panier = {};
const panierBulle = document.getElementById("panier-bulle");
const panierDetail = document.getElementById("panier-detail");
const panierCompteur = document.getElementById("panier-compteur");
const listePanier = document.getElementById("liste-panier");
const fermerPanierBtn = document.getElementById("fermer-panier");
const validerCommandeBtn = document.getElementById("valider-commande");

validerCommandeBtn.addEventListener("click", () => {
  localStorage.setItem("panier", JSON.stringify(panier)); // sauvegarde le panier
  localStorage.setItem("catalogue", JSON.stringify(produits)); // sauvegarde le catalogue complet
  window.location.href = "panier.html"; // redirection
});

// changer le texte du bouton
document.getElementById("valider-commande").textContent = "Aller au panier";


function ajouterAuPanier(nomProduit) {
  if (panier[nomProduit]) {
    panier[nomProduit]++;
  } else {
    panier[nomProduit] = 1;
  }
  mettreAJourPanier();
}

function mettreAJourPanier() {
  panierCompteur.textContent = Object.values(panier).reduce((a, b) => a + b, 0);
  listePanier.innerHTML = "";

  Object.keys(panier).forEach(nom => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${nom}</span>
      <div class="quantite">
        <button onclick="changerQuantite('${nom}', -1)">−</button>
        <span>${panier[nom]}</span>
        <button onclick="changerQuantite('${nom}', 1)">+</button>
      </div>
    `;
    listePanier.appendChild(li);
  });

  const zoneValidation = document.getElementById("zone-validation");
  zoneValidation.classList.toggle("hidden", Object.keys(panier).length === 0);
}

function changerQuantite(nom, delta) {
  panier[nom] += delta;
  if (panier[nom] <= 0) delete panier[nom];
  mettreAJourPanier();
}

panierBulle.addEventListener("click", () => {
  panierDetail.classList.toggle("hidden");
});

fermerPanierBtn.addEventListener("click", () => {
  panierDetail.classList.add("hidden");
});

function lancerAnimationVol(imgElement) {
  const imgClone = imgElement.cloneNode(true);
  const rect = imgElement.getBoundingClientRect();
  const panierRect = panierBulle.getBoundingClientRect();

  imgClone.classList.add("flying-image");
  imgClone.style.top = rect.top + "px";
  imgClone.style.left = rect.left + "px";
  imgClone.style.position = "fixed";
  imgClone.style.width = rect.width + "px";
  imgClone.style.height = rect.height + "px";

  document.body.appendChild(imgClone);

  const deltaX = panierRect.left + panierRect.width / 2 - (rect.left + rect.width / 2);
  const deltaY = panierRect.top + panierRect.height / 2 - (rect.top + rect.height / 2);

  requestAnimationFrame(() => {
    imgClone.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
    imgClone.style.opacity = "0";
  });

  setTimeout(() => {
    document.body.removeChild(imgClone);
  }, 700);
}

document.getElementById("btn-accueil").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.getElementById("tri").addEventListener("change", (e) => {
  const tri = e.target.value;
  let produitsAAfficher = categorieActive ? groupes[categorieActive].slice() : produits.slice();

  if (tri === "prix-asc") {
    produitsAAfficher.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
  } else if (tri === "prix-desc") {
    produitsAAfficher.sort((a, b) => parseInt(b.prix) - parseInt(a.prix));
  }

  const container = document.getElementById("produits");
  container.innerHTML = "";
  produitsAAfficher.forEach(p => afficherCarteProduit(p));
});
function ajouterAuxFavoris(nomProduit) {
  let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
  if (!favoris.includes(nomProduit)) {
    favoris.push(nomProduit);
    localStorage.setItem("favoris", JSON.stringify(favoris));
    alert(`"${nomProduit}" ajouté aux favoris ! ❤️`);
  } else {
    alert(`"${nomProduit}" est déjà dans vos favoris.`);
  }
}
function toggleFavori(nomProduit, bouton) {
  let favoris = JSON.parse(localStorage.getItem("favoris") || "[]");
  const index = favoris.indexOf(nomProduit);

  if (index === -1) {
    favoris.push(nomProduit);
    bouton.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    favoris.splice(index, 1);
    bouton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }

  localStorage.setItem("favoris", JSON.stringify(favoris));
}
function afficherMessagePanier(nomProduit) {
  const msg = document.getElementById("message-panier");
  msg.textContent = `"${nomProduit}" a été ajouté au panier 🛒`;
  msg.classList.remove("hidden");
  msg.classList.add("visible");

  setTimeout(() => {
    msg.classList.remove("visible");
    setTimeout(() => msg.classList.add("hidden"), 500);
  }, 2500); // visible 2.5 secondes
}
