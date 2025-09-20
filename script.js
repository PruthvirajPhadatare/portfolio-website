// Load content dynamically from data.json
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    // Skills
    const skillsContainer = document.getElementById("skills-container");
    for (let category in data.skills) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${category}</h3><p>${data.skills[category].join(", ")}</p>`;
      skillsContainer.appendChild(card);
    }

    // Projects
    const projectsContainer = document.getElementById("projects-container");
    data.projects.forEach(proj => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${proj.name}</h3><p>${proj.description}</p>`;
      projectsContainer.appendChild(card);
    });

    // Experience
    const expContainer = document.getElementById("experience-container");
    data.experience.forEach(exp => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${exp.role}</h3><p>${exp.company}</p><p>${exp.duration}</p>`;
      expContainer.appendChild(card);
    });
  });
