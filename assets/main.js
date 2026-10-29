/* ============================================================
   MUHAMMAD ANEES — PORTFOLIO (shared script)
   To add a project: copy one object in PROJECTS below and edit it.
   cats: ai | vr | webxr | mobile | research | holo
   color: indigo | teal | amber | rose
   icon: headset | globe | phone | flask | cube | spark | trophy
============================================================ */

const ICONS = {
  headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-3.2a2 2 0 0 1-1.7-.9l-.9-1.3a.85.85 0 0 0-1.4 0l-.9 1.3a2 2 0 0 1-1.7.9H5.5A2.5 2.5 0 0 1 3 14.5z"/><circle cx="8" cy="12" r="1.3"/><circle cx="16" cy="12" r="1.3"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',
  flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4.8 18.2A1.9 1.9 0 0 0 6.5 21h11a1.9 1.9 0 0 0 1.7-2.8L14 9V3"/><path d="M7.5 15h9"/></svg>',
  cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8 20 7.3v9.4l-8 4.5-8-4.5V7.3z"/><path d="M4 7.3l8 4.5 8-4.5M12 11.8v9.4"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>',
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 21h7M10 17h4"/></svg>'
};

const DRIVE = 'https://drive.google.com/drive/folders/14fCjlWRmGfCeL58mP4B6tp8ceVHRvntV';
const SW = 'https://worlds.saltysharks.io/';

const PROJECTS = [
  // ---------- AI + XR (featured) ----------
  {title:'MEDVR AI — Medical Training Lab', cats:['ai','vr'], featured:true, plat:'Meta Quest', icon:'spark', color:'teal',
   desc:'VR medical training lab with a Convai conversational AI agent that talks with the trainee and explains the room, equipment and workflow. Interactive instruments, UI, surgical bed and surgical light.',
   tags:['AI Agent','Convai','VR','Medical Training'],
   link:'https://www.meta.com/experiences/medvr-ai-medical-training-lab/1381644995025840/', linkText:'View on Meta Quest'},
  {title:'Archimedes — Multiplayer Science Lab', cats:['ai','webxr'], featured:true, plat:'WebXR', icon:'spark', color:'amber',
   desc:'Multiplayer WebXR learning experience with a Convai-powered Archimedes character. Players run experiments together; Archimedes first assembles the Archimedes’ Screw, then players assemble it and turn the handle to lift water.',
   tags:['Multiplayer','Convai','WebXR','Education'],
   link:'https://saltysharks.itch.io/archimedes', linkText:'Play on itch.io'},
  {title:'Brains Boots & Beyond VR', cats:['ai','vr'], featured:true, plat:'VR · 7NEWS', icon:'trophy', color:'indigo',
   desc:'Decision-training VR for athletes: read the play, decide under pressure, see the outcome. Australian National Science Week experience (Concinnity · UniSQ · Western Clydesdales), featured on 7NEWS Australia.',
   tags:['Decision Training','Sports Science','VR','Lead Developer'],
   link:'https://www.youtube.com/watch?v=gzjs31G0H6Q', linkText:'Watch 7NEWS feature'},

  // ---------- VR & MR (Meta Quest) ----------
  {title:'Violet Flame VR Experience', cats:['vr'], plat:'Meta Quest', icon:'headset', color:'indigo',
   desc:'Immersive VR experience published on Meta Quest, built end to end from concept through Unity development, optimisation and store release.',
   tags:['VR','Unity','Meta Quest'], link:'https://www.meta.com/experiences/6738439822877580', linkText:'View on Meta Quest'},
  {title:'Nexus Arcade', cats:['vr'], plat:'Meta Quest', icon:'headset', color:'indigo',
   desc:'Multi-game VR arcade on Meta Quest, maintained with regular updates and an expanding content library.',
   tags:['VR Arcade','Unity','Live Ops'], link:'https://www.meta.com/en-gb/experiences/nexus-arcade/6962116033836064/', linkText:'View on Meta Quest'},
  {title:'Mindful Moments MR', cats:['vr'], plat:'Meta Quest · MR', icon:'cube', color:'teal',
   desc:'Mixed Reality wellness application that blends the user’s real room with virtual elements for guided mindfulness sessions.',
   tags:['Mixed Reality','Passthrough','Wellness'], link:'https://www.meta.com/experiences/mindful-moments/24210209858630331/', linkText:'View on Meta Quest'},
  {title:'Pharaoh’s Vault Escape Room', cats:['vr'], plat:'Meta Quest', icon:'headset', color:'amber',
   desc:'Ancient-Egypt VR puzzle escape room: environment design, puzzle logic and a full Unity interaction system.',
   tags:['VR','Puzzle Design','Interaction'], link:'https://www.meta.com/experiences/pharaohs-vault-escape-room/1129026526966891/', linkText:'View on Meta Quest'},

  // ---------- WebXR ----------
  {title:'Football Mindset Experience', cats:['webxr'], plat:'WebXR', icon:'globe', color:'indigo',
   desc:'Browser-based sports-psychology experience focused on football mindset and decision making, playable without an install.',
   tags:['WebXR','Sports','Decision Making'], link:'https://saltysharks.itch.io/football-mindset-experience', linkText:'Play on itch.io'},
  {title:'Pharaoh’s Vault — WebXR Build', cats:['webxr'], plat:'WebXR', icon:'globe', color:'amber',
   desc:'Browser-playable WebXR version of the escape room. No headset or install required.',
   tags:['WebXR','Cross-Platform'], link:'https://saltysharks.itch.io/pharaohs-vault-escape-room', linkText:'Play on itch.io'},
  {title:'Great White Dive Adventure', cats:['webxr'], plat:'WebXR', icon:'globe', color:'teal',
   desc:'Immersive underwater WebXR experience built around a great white shark dive.', tags:['WebXR','Marine','Education'], link:SW+'great-white-dive-adventure/', linkText:'Launch experience'},
  {title:'Manta Ray Shoals', cats:['webxr'], plat:'WebXR', icon:'globe', color:'teal',
   desc:'Marine WebXR experience exploring manta rays and their reef environment.', tags:['WebXR','Marine'], link:SW+'manta-ray-shoals/', linkText:'Launch experience'},
  {title:'Respiratory System', cats:['webxr'], plat:'WebXR', icon:'globe', color:'rose',
   desc:'Interactive 3D lesson exploring the human respiratory system in the browser.', tags:['WebXR','Medical Education'], link:SW+'respiratory-system/', linkText:'Launch experience'},
  {title:'Skeleton System', cats:['webxr'], plat:'WebXR', icon:'globe', color:'rose',
   desc:'Immersive 3D lesson for exploring the human skeletal system.', tags:['WebXR','Medical Education'], link:SW+'skeleton-system/', linkText:'Launch experience'},
  {title:'Pyramids of Giza', cats:['webxr'], plat:'WebXR', icon:'globe', color:'amber',
   desc:'Interactive exploration of the Pyramids of Giza in a virtual environment.', tags:['WebXR','History'], link:SW+'pyramids-of-giza/', linkText:'Launch experience'},
  {title:'Pharaoh’s Escape Room', cats:['webxr'], plat:'WebXR', icon:'globe', color:'amber',
   desc:'Egypt-themed WebXR escape room with exploration and puzzle-based play.', tags:['WebXR','Puzzle'], link:SW+'pharaohs_escape_room/', linkText:'Launch experience'},
  {title:'Platypus Virtual World', cats:['webxr'], plat:'WebXR', icon:'globe', color:'teal',
   desc:'Virtual-world experience centred on the platypus and its habitat.', tags:['WebXR','Education'], link:SW+'platypus-virtual-world/', linkText:'Launch experience'},
  {title:'Whale Shark Station', cats:['webxr'], plat:'WebXR', icon:'globe', color:'indigo',
   desc:'Underwater exploration experience centred on whale sharks.', tags:['WebXR','Marine'], link:SW+'whale-shark-station/', linkText:'Launch experience'},
  {title:'Oceans Aquarium', cats:['webxr'], plat:'WebXR', icon:'globe', color:'teal',
   desc:'Virtual aquarium for exploring ocean life up close.', tags:['WebXR','Marine'], link:SW+'oceans-aquarium/', linkText:'Launch experience'},
  {title:'Turtle Beach', cats:['webxr'], plat:'WebXR', icon:'globe', color:'teal',
   desc:'Marine-life experience about turtles and their beach environment.', tags:['WebXR','Education'], link:SW+'turtle-beach/', linkText:'Launch experience'},
  {title:'Rocks & Soil', cats:['webxr'], plat:'WebXR', icon:'globe', color:'amber',
   desc:'Earth-science lesson for exploring rocks and soil interactively.', tags:['WebXR','Earth Science'], link:SW+'rocks-soil/', linkText:'Launch experience'},
  {title:'Sub-Racer', cats:['webxr'], plat:'WebXR', icon:'globe', color:'indigo',
   desc:'Submarine racing game set in underwater environments.', tags:['WebXR','Racing'], link:SW+'Sub-racer/', linkText:'Launch experience'},

  // ---------- Mobile ----------
  {title:'Logic Escape', cats:['mobile'], plat:'App Store', icon:'phone', color:'amber',
   desc:'Puzzle escape-room game live on the Apple App Store: puzzle design, Unity build and App Store publishing.',
   tags:['iOS','Unity','Puzzle'], link:'https://apps.apple.com/pk/app/logic-escape/id6761766461', linkText:'View on App Store'},
  {title:'MyCre Adventures', cats:['mobile'], plat:'App Store', icon:'phone', color:'indigo',
   desc:'Adventure app on the Apple App Store; built interactive features and gameplay systems.',
   tags:['iOS','Gameplay'], link:'https://apps.apple.com/us/app/mycre-adventures/id6717614238', linkText:'View on App Store'},
  {title:'Cart Carriage', cats:['mobile'], plat:'Google Play', icon:'phone', color:'teal',
   desc:'Android game published by Koncept Solution: storyline, Unity animation and performance optimisation.',
   tags:['Android','Unity'], link:'https://play.google.com/store/apps/details?id=com.KonceptSol.cartcarriage', linkText:'View on Google Play'},

  // ---------- Research ----------
  {title:'Healthcare ML — CIH Decision Support', cats:['research'], plat:'MS Thesis', icon:'flask', color:'teal',
   desc:'Symptom-based disease prediction (41 diseases, 133 symptoms) with CIH recommendations and follow-up logic. Six models compared; best accuracy 97.62%.',
   tags:['ML','Healthcare AI','Python'], link:'research.html#thesis', linkText:'Read the research'},
  {title:'Drug–Drug Interaction Prediction', cats:['research'], plat:'Manuscript', icon:'flask', color:'indigo',
   desc:'CNN predicting 65 DDI event types from DrugBank features (SMILES, targets, enzymes, pathways). 89.89% accuracy.',
   tags:['Deep Learning','CNN','Bioinformatics'], link:'research.html#publications', linkText:'Read the research'},

  // ---------- HoloLens ----------
  {title:'HoloLens Mixed Reality', cats:['holo'], plat:'HoloLens', icon:'cube', color:'rose',
   desc:'Extending MR work from Meta Quest to Microsoft HoloLens: enterprise-style spatial-computing prototypes and MR interaction systems.',
   tags:['HoloLens','Spatial Computing'], note:'In development. Details on request.'}
];


/* Extra detail shown in the project popup (keyed by title). */
const DETAILS = {
  'MEDVR AI — Medical Training Lab':{role:'Lead developer',tech:['Unity','C#','Convai','Meta Quest','XR Interaction Toolkit'],
    points:['Integrated a Convai conversational AI agent that speaks with the trainee in real time and explains the room, equipment and procedure.','Built physics-based interaction with medical instruments, surgical bed, surgical light and in-world UI panels.','Optimised for standalone Meta Quest and published on the Meta Store.'],
    research:'Conversational agents as adaptive tutors in immersive clinical training.'},
  'Archimedes — Multiplayer Science Lab':{role:'Lead developer',tech:['Unity','WebXR','Multiplayer networking','Convai'],
    points:['Multiplayer sessions where several players perform physics experiments together in the browser.','A Convai-powered Archimedes character talks with players and guides each experiment.','Archimedes’ Screw: the character assembles it first as a demo, then players assemble the parts and rotate the handle to lift water.'],
    research:'AI characters and collaborative play for learning in shared virtual spaces.'},
  'Brains Boots & Beyond VR':{role:'Lead developer',tech:['Unity','C#','VR headsets','Avatar systems'],video:'gzjs31G0H6Q',
    points:['Game-realistic virtual field where athletes read the play, decide under pressure and see the outcome.','Built for Australia’s National Science Week with Concinnity, the University of Southern Queensland (UniSQ) and the Western Clydesdales.','Featured on 7NEWS Australia.'],
    research:'Measuring decision-making and cognitive load under pressure in VR.'},
  'Healthcare ML — CIH Decision Support':{role:'First author · MS thesis',tech:['Python','scikit-learn','TensorFlow / Keras','Pandas'],
    points:['Six classifiers compared: SVC, Random Forest, Gradient Boosting, KNN, Multinomial Naïve Bayes and a Neural Network.','Best accuracy 97.62% (Naïve Bayes and Gradient Boosting).','Follow-up logic adapts advice for stable, improved and worsened patients.']},
  'Drug–Drug Interaction Prediction':{role:'Co-author',tech:['Python','CNN','DrugBank','NLP'],
    points:['Predicts 65 DDI event types.','Features: SMILES structures, targets, enzymes, pathways; Jaccard similarity.','89.89% accuracy, 87.11% precision, 77.23% recall, 80.72% F1.']}
};

const CAT_LABELS = {all:'All', ai:'AI + XR', vr:'VR & MR', webxr:'WebXR', mobile:'Mobile', research:'Research', holo:'HoloLens'};

function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
const isExt=l=>/^https?:/.test(l||'');

function card(p,i){
  return `<article class="pj c-${p.color} reveal" data-cats="${p.cats.join(' ')}" data-idx="${i}" tabindex="0" role="button" aria-label="Open details: ${esc(p.title)}">
    <div class="pj-top">${p.featured?'<span class="pj-star">AI + XR</span>':''}${ICONS[p.icon]||''}<span class="pj-plat">${esc(p.plat)}</span></div>
    <div class="pj-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tag-row">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
      <span class="link">View details</span>
    </div></article>`;
}

/* ---------- MODAL ---------- */
let lastFocus=null;
function ensureModal(){
  let m=document.getElementById('modal'); if(m) return m;
  m=document.createElement('div'); m.id='modal'; m.className='modal'; m.hidden=true;
  m.innerHTML='<div class="modal-backdrop" data-close></div><div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><button class="modal-x" data-close aria-label="Close">×</button><div class="modal-content"></div></div>';
  document.body.appendChild(m);
  m.addEventListener('click',e=>{if(e.target.closest('[data-close]')) closeModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.hidden) closeModal();});
  return m;
}
function openModal(html){
  const m=ensureModal(); lastFocus=document.activeElement;
  m.querySelector('.modal-content').innerHTML=html; m.hidden=false;
  requestAnimationFrame(()=>m.classList.add('open'));
  document.body.style.overflow='hidden';
  m.querySelector('.modal-x').focus();
}
function closeModal(){
  const m=document.getElementById('modal'); if(!m) return;
  m.classList.remove('open'); document.body.style.overflow='';
  setTimeout(()=>{m.hidden=true;m.querySelector('.modal-content').innerHTML='';},250);
  if(lastFocus) lastFocus.focus();
}
function projectModal(p){
  const d=DETAILS[p.title]||{};
  const media=d.video?`<div class="modal-video"><iframe src="https://www.youtube-nocookie.com/embed/${d.video}" title="Video: ${esc(p.title)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
    :`<div class="modal-art c-${p.color}">${ICONS[p.icon]||''}<span>${esc(p.plat)}</span></div>`;
  return `${media}<div class="modal-body">
    <div class="modal-meta">${esc(p.plat)}${d.role?' · '+esc(d.role):''}</div>
    <h2 id="modalTitle">${esc(p.title)}</h2>
    <p>${esc(p.desc)}</p>
    ${d.points?`<ul class="feature-points">${d.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${d.research?`<div class="why"><b>Research angle:</b> ${esc(d.research)}</div>`:''}
    <div class="tag-row">${(d.tech||p.tags).map(t=>`<span class="tag tag-i">${esc(t)}</span>`).join('')}</div>
    <div class="modal-actions">
      ${p.link?`<a class="btn btn-solid" href="${p.link}"${isExt(p.link)?' target="_blank" rel="noopener"':''}>${esc(p.linkText)} ↗</a>`:''}
      ${p.note?`<span class="pj-note" style="margin:0">${esc(p.note)}</span>`:''}
      <a class="btn btn-outline" href="${DRIVE}" target="_blank" rel="noopener">Video portfolio</a>
    </div></div>`;
}
function contactModal(){
  return `<div class="modal-body">
    <div class="modal-meta">Get in touch</div>
    <h2 id="modalTitle">Let’s work together</h2>
    <p>Hiring for an XR role, or recruiting a PhD student for AI + XR research? Pick whichever channel suits you.</p>
    <div class="con-list" style="margin-top:1.2rem">
      <button class="con-link copy" data-copy="animalik272@gmail.com">animalik272@gmail.com<small>Copy email</small></button>
      <a class="con-link" href="mailto:animalik272@gmail.com">Write an email<small>Mail app</small></a>
      <a class="con-link" href="https://wa.me/923357428855" target="_blank" rel="noopener">+92 335 742 8855<small>WhatsApp</small></a>
      <a class="con-link" href="https://www.linkedin.com/in/muhammad-anees-b72404210" target="_blank" rel="noopener">Muhammad Anees<small>LinkedIn</small></a>
      <a class="con-link" href="assets/Muhammad_Anees_CV.pdf" download>Muhammad_Anees_CV.pdf<small>Download CV</small></a>
    </div></div>`;
}

/* ---------- TOAST ---------- */
function toast(msg){
  let t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.setAttribute('role','status');document.body.appendChild(t);}
  t.textContent=msg; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),2200);
}

/* ---------- PROJECT GRID ---------- */
function renderProjects(){
  const grid=document.getElementById('projGrid'), row=document.getElementById('filterRow');
  if(!grid||!row) return;
  grid.innerHTML=PROJECTS.map(card).join('');
  const counts={all:PROJECTS.length};
  PROJECTS.forEach(p=>p.cats.forEach(c=>counts[c]=(counts[c]||0)+1));
  row.innerHTML=Object.keys(CAT_LABELS).filter(k=>counts[k]).map(k=>
    `<button class="filter-btn${k==='all'?' on':''}" data-cat="${k}" aria-pressed="${k==='all'}">${CAT_LABELS[k]}<span class="n">${counts[k]}</span></button>`).join('');
  const apply=cat=>{
    row.querySelectorAll('.filter-btn').forEach(b=>{const on=b.dataset.cat===cat;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
    grid.querySelectorAll('.pj').forEach(el=>{
      const show=cat==='all'||el.dataset.cats.split(' ').includes(cat);
      el.style.display=show?'flex':'none';
      if(show){el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop');}
    });
  };
  row.addEventListener('click',e=>{const b=e.target.closest('.filter-btn');if(b){apply(b.dataset.cat);history.replaceState(null,'','#'+b.dataset.cat);}});
  const hash=location.hash.slice(1);
  if(CAT_LABELS[hash]) apply(hash);
}

/* ---------- CAROUSEL ---------- */
function initCarousel(){
  document.querySelectorAll('.carousel').forEach(c=>{
    const track=c.querySelector('.car-track'), slides=[...track.children], dots=c.querySelector('.car-dots');
    let i=0, timer=null;
    dots.innerHTML=slides.map((_,k)=>`<button aria-label="Go to slide ${k+1}"></button>`).join('');
    const go=n=>{i=(n+slides.length)%slides.length;track.style.transform=`translateX(-${i*100}%)`;
      [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
      slides.forEach((s,k)=>s.setAttribute('aria-hidden',k!==i));};
    const play=()=>{stop();timer=setInterval(()=>go(i+1),6500);};
    const stop=()=>clearInterval(timer);
    c.querySelector('.car-prev').onclick=()=>{go(i-1);play();};
    c.querySelector('.car-next').onclick=()=>{go(i+1);play();};
    dots.onclick=e=>{const k=[...dots.children].indexOf(e.target);if(k>=0){go(k);play();}};
    c.addEventListener('mouseenter',stop); c.addEventListener('mouseleave',play);
    c.addEventListener('focusin',stop);
    let x0=null;
    track.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;stop();},{passive:true});
    track.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));x0=null;play();});
    go(0); if(!matchMedia('(prefers-reduced-motion: reduce)').matches) play();
  });
}

/* ---------- SCROLL ANIMATIONS ---------- */
function initReveal(){
  const sel='.sec-title,.sec-lede,.eyebrow,.card,.feature,.pub,.q,.tl-item,.ach,.skill-group,.stat-strip,.cta-band,.obj,.video-band,.chip-cloud,.tbl-wrap,.carousel,.snap';
  document.querySelectorAll(sel).forEach(el=>{if(!el.closest('.modal')&&!el.closest('.hero')&&!el.closest('.car-track'))el.classList.add('reveal');});
  const els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting){
      const sib=[...en.target.parentElement.children].filter(x=>x.classList.contains('reveal'));
      en.target.style.transitionDelay=Math.min(sib.indexOf(en.target),6)*70+'ms';
      en.target.classList.add('in'); io.unobserve(en.target);}
  }),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(e=>io.observe(e));
}
function initCounters(){
  const nums=document.querySelectorAll('[data-count]');
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting) return; io.unobserve(en.target);
    const el=en.target, end=+el.dataset.count, suf=el.dataset.suffix||'', t0=performance.now(), dur=1400;
    const step=t=>{const k=Math.min((t-t0)/dur,1),v=Math.round(end*(1-Math.pow(1-k,3)));el.textContent=v+suf;if(k<1)requestAnimationFrame(step);};
    requestAnimationFrame(step);
  }),{threshold:.5});
  nums.forEach(n=>io.observe(n));
}
function initTyper(){
  document.querySelectorAll('[data-words]').forEach(el=>{
    const words=JSON.parse(el.dataset.words); let w=0,c=0,del=false;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=words[0];return;}
    const tick=()=>{const word=words[w];
      el.textContent=word.slice(0,c);
      if(!del&&c<word.length){c++;setTimeout(tick,70);}
      else if(!del){del=true;setTimeout(tick,1800);}
      else if(c>0){c--;setTimeout(tick,35);}
      else{del=false;w=(w+1)%words.length;setTimeout(tick,300);}};
    tick();
  });
}
function initChrome(){
  const bar=document.createElement('div'); bar.className='progress'; document.body.appendChild(bar);
  const top=document.createElement('button'); top.className='to-top'; top.setAttribute('aria-label','Back to top'); top.innerHTML='↑'; document.body.appendChild(top);
  top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
  const nav=document.querySelector('.site-nav');
  const on=()=>{const h=document.documentElement, p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);
    bar.style.transform=`scaleX(${p})`; top.classList.toggle('show',h.scrollTop>600); nav.classList.toggle('scrolled',h.scrollTop>10);};
  addEventListener('scroll',on,{passive:true}); on();
}
function initNav(){
  const btn=document.querySelector('.hamburger'), nav=document.getElementById('mobileNav');
  if(btn&&nav) btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=ICONS[el.dataset.icon]||'';});
  initNav(); renderProjects(); initCarousel(); initReveal(); initCounters(); initTyper(); initChrome();
  document.body.classList.add('loaded');
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  // Popups: project cards, [data-project] buttons, contact buttons, copy buttons
  document.addEventListener('click',e=>{
    const pj=e.target.closest('.pj[data-idx]'); if(pj){openModal(projectModal(PROJECTS[+pj.dataset.idx]));return;}
    const dp=e.target.closest('[data-project]'); if(dp){e.preventDefault();const p=PROJECTS.find(x=>x.title===dp.dataset.project);if(p)openModal(projectModal(p));return;}
    const ct=e.target.closest('[data-contact]'); if(ct){e.preventDefault();openModal(contactModal());return;}
    const cp=e.target.closest('[data-copy]'); if(cp){navigator.clipboard?.writeText(cp.dataset.copy).then(()=>toast('Email copied ✓'),()=>toast(cp.dataset.copy));}
  });
  document.addEventListener('keydown',e=>{const pj=e.target.closest&&e.target.closest('.pj[data-idx]');if(pj&&(e.key==='Enter'||e.key===' ')){e.preventDefault();pj.click();}});
});
