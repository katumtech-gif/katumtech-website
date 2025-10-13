
document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.slides img');
  let idx = 0;
  function show(i){
    slides.forEach(s=>s.classList.remove('active'));
    slides[i].classList.add('active');
  }
  show(0);
  setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, 3000);
  const loader = document.getElementById('loader');
  if(loader){ setTimeout(()=>{ loader.style.display='none'; }, 700); }
});
