// R2M Brands v2 - Interactions
// Vercel / GitHub ready - vanilla JS, no build

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

// Mobile menu
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobile-menu');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Navbar scrolled
const navbar = $('#navbar');
if(navbar){
  const onScroll = () => navbar.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

// Reveal
const reveals = $$('.reveal');
if(reveals.length){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
 },{threshold:0.12});
  reveals.forEach(el=>io.observe(el));
}

// Counters
const counters = $$('.counter');
if(counters.length){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting && entry.target.dataset.done!=='true'){
        entry.target.dataset.done='true';
        const target = +entry.target.dataset.target;
        const duration = 1400;
        const start = performance.now();
        const tick = (now)=>{
          const p = Math.min((now-start)/duration,1);
          const eased = 1 - Math.pow(1-p,3);
          entry.target.textContent = Math.floor(eased*target).toLocaleString();
          if(p<1) requestAnimationFrame(tick);
          else entry.target.textContent = target.toLocaleString();
        };
        requestAnimationFrame(tick);
      }
    });
 },{threshold:0.5});
  counters.forEach(c=>io.observe(c));
}

// Neon rings: only animate while on screen (saves battery / keeps scrolling smooth)
const neons = $$('.neon-wrapper');
if(neons.length && 'IntersectionObserver' in window){
  const nio = new IntersectionObserver((entries)=>{
    entries.forEach(e=> e.target.classList.toggle('is-idle', !e.isIntersecting));
  },{rootMargin:'120px'});
  neons.forEach(n=>nio.observe(n));
}

// Back to top
const btt = $('#back-to-top');
if(btt){
  addEventListener('scroll', ()=>{
    btt.classList.toggle('show', scrollY>500);
  },{passive:true});
  btt.addEventListener('click', ()=> scrollTo({top:0, behavior:'smooth'}));
}

// Smooth hash open for details
function openHash(){
  if(location.hash.length>1){
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if(el && el.tagName==='DETAILS') el.open=true;
    if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
}
openHash();
addEventListener('hashchange', openHash);

// Contact form (progressive enhancement)
const form = $('#contact-form');
if(form){
  const status = $('#formStatus');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const btn = form.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // For static hosting, we simulate success. Replace with your endpoint:
    // const res = await fetch('/api/contact', {method:'POST', body: data});
    await new Promise(r=>setTimeout(r, 900));

    if(status){
      status.textContent = "Message sent! We'll reach out within 2 hours (business hours).";
      status.style.color = 'var(--teal)';
    }
    form.reset();
    btn.textContent = 'Sent ✓';
    setTimeout(()=>{ btn.textContent=orig; btn.disabled=false; }, 2200);
  });
}

// Lazy load images with blur
$$('img[loading="lazy"]').forEach(img=>{
  img.addEventListener('load', ()=> img.classList.add('loaded'));
});
