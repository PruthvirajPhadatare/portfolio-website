// Fetch resume data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // About Section
    document.getElementById('about-text').innerText = data.summary;

    // Skills Section
    const skillsContainer = document.getElementById('skills-container');
    for (let category in data.skills) {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');
      skillDiv.innerHTML = `<h4>${category}</h4><p>${data.skills[category].join(', ')}</p>`;
      skillsContainer.appendChild(skillDiv);
    }

    // Projects Section
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.innerHTML = `<h4>${project.title}</h4><p>${project.description}</p><small>${project.tools.join(', ')}</small>`;
      projectsContainer.appendChild(projectDiv);
    });

    // Experience Section
    const experienceList = document.getElementById('experience-list');
    data.experience.forEach(exp => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${exp.role}</strong> | ${exp.company}, ${exp.location} (${exp.duration})<ul>${exp.description.map(d => `<li>${d}</li>`).join('')}</ul>`;
      experienceList.appendChild(li);
    });

    // Contact Section
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `${data.contact.phone} | ${data.contact.email} | ${data.contact.location}`;
    document.querySelectorAll('.social-links a')[0].href = data.contact.github;
    document.querySelectorAll('.social-links a')[1].href = data.contact.linkedin;
  });

// Typed.js animation
var typed = new Typed('#typed', {
  strings: ["Hi, I'm Pruthviraj Phadatare – AWS Cloud & DevOps Engineer"],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true
});

// Initialize AOS animations
AOS.init();
