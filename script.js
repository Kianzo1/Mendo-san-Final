
document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal();

  // Propuesta Valor (aparece desde abajo una sola vez)
  sr.reveal('.propuesta-valor', {
    distance: '100px',
    origin: 'right',
    opacity: 0,
    duration: 1500,
    easing: 'ease-out',
    reset: true // NO se repite
  });

  // Nuestros Servicios (aparece desde arriba y se repite)
  sr.reveal('.titulo-servicios', {
    distance: '100px',
    origin: 'top',
    opacity: 0,
    duration: 1500,
    easing: 'ease-out',
    reset: true // SE REPITE cada vez
  });

  // Servicios impares (desde izquierda)
  sr.reveal('.galeria-servicios .img-servicio-1, .galeria-servicios .img-servicio-3', {
    distance: '100px',
    origin: 'left',
    opacity: 0,
    duration: 1500,
    interval: 200,
    reset: true
  });

  // Servicios pares (desde derecha)
  sr.reveal('.galeria-servicios .img-servicio-2, .galeria-servicios .img-servicio-5', {
    distance: '100px',
    origin: 'right',
    opacity: 0,
    duration: 1500,
    interval: 200,
    reset: true
  });



  // Servicios pares (desde abajo)
  sr.reveal('.galeria-servicios .img-servicio-4', {
    distance: '100px',
    origin: 'bottom',
    opacity: 0,
    duration: 1800,
    interval: 200,
    reset: true

  });

  });


// Efecto Parallax y Oscurecimiento dinámico

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container-1");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Efecto Parallax (ajusta el factor 0.4 para más/menos movimiento)
    container.style.backgroundPosition = `center ${scrollY * 0.4}px`;

    // Oscurecimiento dinámico (máximo 0.8 = casi negro)
    const opacity = Math.min(scrollY / 400, 0.8);
    container.style.setProperty("--overlay-color", `rgba(0, 0, 0, ${opacity})`);
  });
});




// Efecto scroll a features

window.addEventListener("scroll", function () {
  const features = document.querySelector(".features");
  const rect = features.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    features.classList.add("visible");
  }
});

// JavaScript mínimo para efectos adicionales si es necesario
        const serviceCard = document.getElementById('serviceCard');
        
        serviceCard.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
        });
        
        serviceCard.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });

