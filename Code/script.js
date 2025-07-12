// Simples Kontaktformular (Fake-Submit für Demo)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Danke für deine Nachricht! Wir melden uns schnellstmöglich.';
    this.reset();
  });
  