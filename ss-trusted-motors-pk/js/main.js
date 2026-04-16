/* SS Trusted Motors — main.js */

// Header scroll
(function(){
  const h = document.querySelector('.site-header');
  if(!h) return;
  window.addEventListener('scroll', ()=>h.classList.toggle('scrolled', scrollY>40), {passive:true});
})();

// Mobile nav
(function(){
  const t = document.querySelector('.nav-toggle');
  const m = document.querySelector('.nav-menu');
  if(!t||!m) return;
  t.addEventListener('click',()=>{t.classList.toggle('open');m.classList.toggle('open');});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{t.classList.remove('open');m.classList.remove('open');}));
})();

// Active nav
(function(){
  const pg = location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link').forEach(l=>{
    const h=l.getAttribute('href');
    if(h===pg||(pg===''&&h==='index.html')) l.classList.add('active');
  });
})();

// Scroll reveal
(function(){
  const els=document.querySelectorAll('.reveal');
  if(!els.length) return;
  const io=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*70);io.unobserve(e.target);}});
  },{threshold:0.1});
  els.forEach(el=>io.observe(el));
})();

// Price formatter
function formatPrice(n){
  if(n>=10000000) return '₹'+(n/10000000).toFixed(2)+' Cr';
  if(n>=100000)   return '₹'+(n/100000).toFixed(2)+' L';
  return '₹'+n.toLocaleString('en-IN');
}

// Icons
const ICO = {
  fuel:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22V8l7-6 7 6v14H3zm4-6h6m-6 4h6"/><path d="M18 5l2 2v7h1a1 1 0 001-1V9l-2-2"/></svg>`,
  gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="6" r="2"/><circle cx="17" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 8v3a2 2 0 002 2h2m4-5v5l-2 2m-4 0h4"/></svg>`,
  odo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 12l-4-4"/><path d="M12 7v1m5 4h-1M7 12H6m6 5v-1"/></svg>`,
  eng:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="4" height="8" rx="1"/><rect x="6" y="10" width="12" height="6" rx="1"/><path d="M18 11h2a1 1 0 011 1v2a1 1 0 01-1 1h-2"/><path d="M10 8V6m4 2V6"/></svg>`,
  arrow:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>`
};

// Car card HTML
function carCardHTML(car, type='car'){
  const badge = car.badge ? `<div class="car-badge"><span class="badge">${car.badge}</span></div>` : '';
  const sub = car.subcategory==='premium' ? `<span style="font-family:var(--font-condensed);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);background:rgba(184,145,42,.1);border:1px solid var(--border-mid);border-radius:4px;padding:2px 8px;margin-left:6px;">Premium</span>` : '';
  return `<div class="car-card reveal" onclick="location.href='car-details.html?id=${car.id}&type=${type}'">
    <div class="car-img-wrap">
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <div class="car-img-overlay"></div>
      ${badge}
    </div>
    <div class="car-body">
      <div class="car-meta">
        <span class="car-meta-item">${ICO.fuel} ${car.fuel}</span>
        <span class="car-meta-item">${ICO.gear} ${car.transmission}</span>
        <span class="car-meta-item">${ICO.odo} ${car.mileage}</span>
      </div>
      <div class="car-name">${car.name}${sub}</div>
      <div class="car-year">${car.year} · ${car.category}</div>
      <div class="car-footer">
       
        <button class="btn btn-primary btn-sm">View ${ICO.arrow}</button>
      </div>
    </div>
  </div>`;
}

// Antique card HTML
function antiqueCardHTML(car){
  return `<div class="antique-card reveal" onclick="location.href='car-details.html?id=${car.id}&type=antique'">
    <div class="antique-img-wrap">
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <div class="antique-img-overlay"></div>
      <div class="antique-badge"><span class="badge badge-gold">${car.badge||'Vintage'}</span></div>
    </div>
    <div class="antique-body">
      <div class="antique-heritage">"${car.heritage}"</div>
      <div class="antique-name">${car.name}</div>
      <div class="antique-year">${car.year} · ${car.category}</div>
      <div class="antique-specs">
        <span class="antique-spec-item">${ICO.eng} ${car.engine}</span>
        <span class="antique-spec-item">${ICO.fuel} ${car.fuel}</span>
        <span class="antique-spec-item">${ICO.gear} ${car.transmission}</span>
      </div>
      <div class="antique-footer">
       
        <button class="btn btn-gold btn-sm">Enquire ${ICO.arrow}</button>
      </div>
    </div>
  </div>`;
}

// Fetch JSON
async function fetchJSON(url){
  const r = await fetch(url);
  if(!r.ok) throw new Error('Failed: '+url);
  return r.json();
}

// QR canvas
function generateQRCanvas(url, canvas){
  const ctx = canvas.getContext('2d');
  canvas.width=120; canvas.height=120;
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,120,120);
  ctx.fillStyle='#2a1f00';
  [[5,5],[85,5],[5,85]].forEach(([x,y])=>{
    ctx.fillRect(x,y,30,30);
    ctx.fillStyle='#fff'; ctx.fillRect(x+5,y+5,20,20);
    ctx.fillStyle='#2a1f00'; ctx.fillRect(x+10,y+10,10,10);
  });
  const hash=url.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  for(let i=0;i<60;i++){
    const row=Math.floor(i/8), col=i%8;
    if((hash*(i+1)*31)%3!==0) ctx.fillRect(42+col*9,42+row*9,7,7);
  }
  ctx.fillStyle='#c9a84c';
  ctx.font='bold 6px sans-serif'; ctx.textAlign='center';
  ctx.fillText('SS TRUSTED',60,116);
}

// Trigger reveal for dynamically added cards
function triggerReveal(container){
  setTimeout(()=>{
    container.querySelectorAll('.reveal').forEach((el,i)=>{
      setTimeout(()=>el.classList.add('visible'), i*55);
    });
  }, 60);
}

window.SS = {formatPrice, carCardHTML, antiqueCardHTML, fetchJSON, generateQRCanvas, triggerReveal, ICO};
