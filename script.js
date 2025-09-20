var typedLine1 = new Typed('#typed-line1', {
  strings: ["Hi, I'm Your Name"],
  typeSpeed: 60,
  backSpeed: 20,
  backDelay: 2000,
  loop: false,
  showCursor: true
});
var typedLine2 = new Typed('#typed-line2', {
  strings: ["DevOps Engineer"],
  typeSpeed: 60,
  startDelay: 3000,
  backSpeed: 20,
  backDelay: 3000,
  loop: true,
  showCursor: true
});

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p>`;
      projectsContainer.appendChild(card);
    });

    const expContainer = document.getElementById('experience-container');
    data.experience.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${exp.role}</h3><p>${exp.company}</p><p>${exp.duration}</p>`;
      expContainer.appendChild(card);
    });

    function revealOnScroll() {
      const cards = document.querySelectorAll('.card');
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 150);
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  });
