// FADE-IN (IntersectionObserver)
document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.fade-in-up');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visivel');
        o.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  elementos.forEach(e => obs.observe(e));
});

// ELEMENTO ROTACIONAL — gira no eixo fixo e metade fora da tela
window.addEventListener('scroll', ()=>{
  const rot = document.getElementById('rotacaoScroll');
  if(!rot) return;
  const scrollY = window.scrollY || window.pageYOffset;
  const rotationAmount = scrollY * 0.6; // ajustar velocidade
  rot.style.transform = `rotate(${rotationAmount}deg)`;
  // margem negativa para simular subida (limite)
  const translate = Math.max(-scrollY * 0.18, -260);
  rot.style.marginBottom = `${translate}px`;

  // Esconde o elemento após rolar uma certa distância
  if (scrollY > 1500) {
    rot.style.opacity = '0';
    rot.style.pointerEvents = 'none';
  } else {
    rot.style.opacity = '1';
    rot.style.pointerEvents = 'none'; // continua none para não ser clicável
  }
});
