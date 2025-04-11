// Gestion de l'activation des liens de navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    // Retirer la classe active de tous les liens
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Ajouter la classe active au lien cliqué
    this.classList.add('active');
  });
});

// Gestion des carrousels
document.addEventListener('DOMContentLoaded', function () {
  var carousels = [
    '#carouselExampleIndicators',
    '#carouselExampleIndicatorsBottom',
    '#carouselRealizations'
  ];

  carousels.forEach(function(id) {
    var myCarousel = document.querySelector(id);
    if (myCarousel) {
      var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        ride: 'carousel'
      });

      myCarousel.addEventListener('slid.bs.carousel', function () {
        carousel.cycle();
      });
    }
  });
});









