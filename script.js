// Typed.js for dynamic intro
var typed = new Typed('#typed', {
  strings: ["Hi, I'm Pruthviraj Phadatare – AWS Cloud & DevOps Engineer"],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 2500,
  loop: true
});

// Load dynamic content
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Skills
    const skillsContainer = document.getElementById('skills-container');
    for (let category in data.skills) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${category}</h3><p>${data.skills[category].join(', ')}</p>`;
      skillsContainer.appendChild(card);
    }

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p>`;
      projectsContainer.appendChild(card);
    });

    // Experience
    const expContainer = document.getElementById('experience-container');
    data.experience.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${exp.role}</h3><p>${exp.company}</p><p>${exp.duration}</p>`;
      expContainer.appendChild(card);
    });

    // Scroll animation
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
