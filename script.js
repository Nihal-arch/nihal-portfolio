const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menuBtn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
menuBtn?.addEventListener('click',()=>{nav.classList.toggle('mobile-open')});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
