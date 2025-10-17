
(function(){
  const protected = ['index.html','about.html','audio.html','founder.html','contact.html'];
  const current = location.pathname.split('/').pop() || 'index.html';
  const logged = localStorage.getItem('sp_logged') === '1';
  if(current !== 'login.html' && !logged){
    location.href = 'login.html';
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.nav a').forEach(a=>{ if(a.getAttribute('href') === current) a.classList.add('active'); });
  });
  if(current === 'login.html'){
    const form = document.getElementById('loginForm');
    if(form) form.addEventListener('submit', (e)=>{ e.preventDefault(); const email=document.getElementById('email').value.trim(); const pass=document.getElementById('password').value.trim(); if(!email||!pass){alert('Enter credentials');return;} localStorage.setItem('sp_logged','1'); localStorage.setItem('sp_user', JSON.stringify({email})); location.href='index.html'; });
  }
  const logout = document.getElementById('logoutBtn'); if(logout) logout.addEventListener('click', ()=>{ localStorage.removeItem('sp_logged'); localStorage.removeItem('sp_user'); location.href='login.html'; });
})();
