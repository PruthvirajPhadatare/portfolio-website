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

// Skills animation with gradient fill
function animateSkills(){
  const skills=document.querySelectorAll('.skill-circle');
  skills.forEach(skill=>{
    const percent=skill.getAttribute('data-percent');
    const canvas=document.createElement('canvas');
    canvas.width=130;canvas.height=130;
    skill.appendChild(canvas);
    const ctx=canvas.getContext('2d');
    const radius=54,lineWidth=6;
    let current=0;

    function drawCircle(p){
      ctx.clearRect(0,0,130,130);
      ctx.beginPath();
      ctx.arc(65,65,radius,0,2*Math.PI);
      ctx.strokeStyle='rgba(0,217,255,0.2)';
      ctx.lineWidth=lineWidth;ctx.stroke();
      const grad=ctx.createLinearGradient(0,0,130,0);
      grad.addColorStop(0,'#00d9ff');grad.addColorStop(1,'#00ffc2');
      ctx.beginPath();
      ctx.arc(65,65,radius,-Math.PI/2,(-Math.PI/2)+(2*Math.PI*p/100));
      ctx.strokeStyle=grad;ctx.lineWidth=lineWidth;ctx.stroke();
      skill.querySelector('.skill-percent').innerText=Math.floor(p)+'%';
    }

    function animate(){if(current<percent){current+=1;drawCircle(current);requestAnimationFrame(animate);}else drawCircle(percent);}
    animate();
  });
}
window.addEventListener('load',animateSkills);
