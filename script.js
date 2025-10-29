// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal logic for certifications
document.querySelectorAll('.cert').forEach(cert => {
  cert.addEventListener('click', e => {
    e.preventDefault();
    const title = cert.getAttribute('data-cert') || 'Certification';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-link').href = cert.href || '#';
    document.getElementById('cert-modal').classList.remove('hidden');
  });
});
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('cert-modal').classList.add('hidden');
});
