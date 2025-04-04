window.openModal = function (id) {
  console.log("Ouverture de la modale :", id);
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
      modal.style.display = "flex";
  } else {
      console.error("Modale non trouvée :", `modal${id}`);
  }
};





// Ouvrir une modale
function openModal(id) {
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
      modal.style.display = "flex";
  }
}

// Fermer une modale
function closeModal(id) {
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
      modal.style.display = "none";
  }
}

// Fermer la modale si on clique en dehors du contenu
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
};
function openModal(id) {
  console.log("Tentative d'ouverture de la modale :", id);
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
      modal.style.display = "flex";
  }
}
document.getElementById("btn1").addEventListener("click", function() {
  openModal(1);
});