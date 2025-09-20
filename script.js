// Typed Animation
var typed1 = new Typed('#typed-line1', { strings:["Hi, I'm Pruthviraj Phadatare"], typeSpeed:60, backSpeed:20, loop:false, showCursor:true });
var typed2 = new Typed('#typed-line2', { strings:["AWS Cloud & DevOps Engineer"], typeSpeed:60, startDelay:3000, backSpeed:20, loop:true, showCursor:true });

// Load Projects & Experience
fetch('data.json')
.then(res=>res.json())
.then(data=>{
  const projContainer=document.getElementById('projects-container');
  data.projects.forEach((proj,index)=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<h3>${proj.name}</h3><p>${proj.description}</p>`;
    projContainer.appendChild(card);
  });

  const expContainer=document.getElementById('experience-container');
  data.experience.forEach((exp,index)=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<h3>${exp.role}</h3><p>${exp.company}</p><p>${exp.duration}</p>`;
    expContainer.appendChild(card);
  });

  function revealOnScroll(){
    document.querySelectorAll('.card').forEach((card,index)=>{
      if(card.getBoundingClientRect().top < window.innerHeight*0.85){
        setTimeout(()=>{card.classList.add('visible');},index*150);
      }
    });
  }
  window.addEventListener('scroll',revealOnScroll);
  window.addEventListener('load',revealOnScroll);
});

// Circular skill animation
function animateSkills(){
  const skills = document.querySelectorAll('.skill-circle');
  skills.forEach(skill=>{
    const percent = skill.getAttribute('data-percent');
    const canvas = document.createElement('canvas');
    canvas.width = 120; canvas.height = 120;
    skill.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const radius = 50, lineWidth = 6;
    let current = 0;

    function drawCircle(p){
      ctx.clearRect(0,0,120,120);
      ctx.beginPath();
      ctx.arc(60,60,radius,0,2*Math.PI);
      ctx.strokeStyle = 'rgba(0,217,255,0.2)';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(60,60,radius,-Math.PI/2,(-Math.PI/2)+(2*Math.PI*p/100));
      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      skill.querySelector('.skill-percent').innerText = Math.floor(p) + '%';
    }

    function animate(){
      if(current<percent){
        current +=1;
        drawCircle(current);
        requestAnimationFrame(animate);
      } else drawCircle(percent);
    }
    animate();
  });
}

// Trigger animation on scroll
function isElementInViewport(el){
  const rect = el.getBoundingClientRect();
  return (rect.top < window.innerHeight && rect.bottom > 0);
}

window.addEventListener('scroll',()=>{
  const skillSection = document.getElementById('skills');
  if(isElementInViewport(skillSection)) animateSkills();
});
window.addEventListener('load',()=>{
  const skillSection = document.getElementById('skills');
  if(isElementInViewport(skillSection)) animateSkills();
});
