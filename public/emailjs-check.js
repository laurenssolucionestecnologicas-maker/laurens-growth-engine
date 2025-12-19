// Crear un archivo public/emailjs-check.js
window.addEventListener('load', function() {
  if (typeof emailjs === 'undefined') {
    console.error('❌ EmailJS no se cargó');
    // Puedes mostrar un alert o intentar cargarlo de nuevo
  } else {
    console.log('✅ EmailJS listo:', emailjs);
  }
});