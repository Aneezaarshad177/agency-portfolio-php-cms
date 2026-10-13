(function(){
var B=window.TZ_BASE||'';
var I={brand:'<path d="M12 3l9 6-9 12L3 9z"/><path d="M3 9h18"/>',design:'<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',content:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 17v4M17 19h4"/>',social:'<circle cx="12" cy="12" r="9"/><path d="M8 13s1.5 2.5 4 2.5S16 13 16 13M9 9h.01M15 9h.01"/>',video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>',seo:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',web:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8"/>',ads:'<path d="M3 11v3a1 1 0 001 1h3l8 4V6L7 10H4a1 1 0 00-1 1z"/><path d="M19 9a4 4 0 010 6"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',ai:'<rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 15h6"/>',funnel:'<path d="M3 4h18l-7 9v6l-4 2v-8z"/>',trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/>',cert:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>'};
var SO={instagram:['Instagram','<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'],youtube:['YouTube','<path d="M22 8.5a3 3 0 00-2-2C18 6 12 6 12 6s-6 0-8 .5a3 3 0 00-2 2C1.5 10 1.5 12 1.5 12s0 2 .5 3.5a3 3 0 002 2C6 18 12 18 12 18s6 0 8-.5a3 3 0 002-2c.5-1.5.5-3.5.5-3.5s0-2-.5-3.5z"/><path d="M10 9l5 3-5 3z"/>'],facebook:['Facebook','<path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>'],linkedin:['LinkedIn','<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7h.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>']};
var CATS={social:'Social Media Management',perf:'Performance Marketing',web:'Website Development'};
var GR=['linear-gradient(135deg,var(--or),var(--panel))','linear-gradient(135deg,var(--te),var(--panel))','linear-gradient(135deg,var(--or),var(--te))','linear-gradient(135deg,var(--line),var(--te))','linear-gradient(135deg,var(--panel),var(--or) 70%)','linear-gradient(135deg,var(--te),var(--or))'];
function e(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return'&#'+c.charCodeAt(0)+';'})}
function sv(k,p){return'<svg viewBox="0 0 24 24">'+(p||I[k]||I.brand)+'</svg>'}
function bg(p,i){return p.image?'background-image:url('+e(B+p.image)+');background-size:cover;background-position:center':'background:'+GR[i%GR.length]}
function cur(d){return(d.settings&&d.settings.currency)||'PKR'}
function socials(s){return Object.keys(SO).filter(function(k){return s&&s[k]}).map(function(k){return'<a href="'+e(s[k])+'" target="_blank" rel="noopener" aria-label="'+SO[k][0]+'">'+sv(0,SO[k][1])+'</a>'}).join('')}
function map(a,f){return(a||[]).map(f).join('')}
var R={
photo:function(el,d){var p=d.settings&&d.settings.profilePhoto;if(p)el.innerHTML='<img src="'+e(B+p)+'" alt="Trezio Hubspot profile photo">'},
stats:function(el,d){el.innerHTML=map(d.stats,function(s){return'<div class="stat rv"><strong data-to="'+e(s.value)+'" data-suf="'+e(s.suffix)+'">0</strong><span>'+e(s.label)+'</span></div>'})},
servicesTeaser:function(el,d){el.innerHTML=map((d.services||[]).slice(0,6),function(s){return'<div class="card rv">'+sv(s.icon)+'<h3>'+e(s.title)+'</h3><p>'+e(s.desc)+'</p></div>'})},
services:function(el,d){el.innerHTML=map(d.services,function(s){return'<div class="card sv rv"><div class="ico">'+sv(s.icon)+'</div><h3>'+e(s.title)+'</h3><p>'+e(s.desc)+'</p>'+(s.price?'<div class="pr"><small>Starting at</small><strong>'+e(cur(d)+' '+s.price)+'</strong><span>'+e(s.unit)+'</span></div>':'')+'</div>'})},
awards:function(el,d){el.innerHTML=map(d.awards,function(a){return'<div class="ti rv"><span class="dot"></span><div class="card"><div class="ico">'+sv(a.icon)+'</div><h3>'+e(a.title)+'</h3>'+(a.issuer||a.year?'<div class="mt2">'+(a.issuer?'<span>Awarded by '+e(a.issuer)+'</span>':'')+(a.year?'<span class="yr">'+e(a.year)+'</span>':'')+'</div>':'')+'<p>'+e(a.desc)+'</p>'+(a.why?'<p style="margin-top:12px;color:var(--te)"><strong>Why it matters:</strong> '+e(a.why)+'</p>':'')+'</div></div>'})},
workHome:function(el,d){var n=0;el.innerHTML=map(d.projects,function(p,i){if(!p.featured||n>=6)return'';n++;return'<a class="thumb rv" href="portfolio.html"><i style="'+bg(p,i)+'"></i><p>'+e(p.title)+'<small>'+e(CATS[p.cat]||'')+'</small></p></a>'})},
portfolio:function(el,d){el.innerHTML=map(d.projects,function(p,i){var l=CATS[p.cat]||'';return'<button class="pc" data-cat="'+e(p.cat)+'" data-label="'+e(l)+'" data-title="'+e(p.title)+'" data-desc="'+e(p.desc)+'" aria-label="Open '+e(p.title)+'"><div class="pt"><i style="'+bg(p,i)+'">'+(p.image?'':sv(p.cat==='web'?'web':p.cat==='perf'?'ads':'social'))+'</i></div><div class="pb"><small>'+e(l)+'</small><h3>'+e(p.title)+'</h3><p>'+e(p.desc)+'</p></div></button>'})},
testimonials:function(el,d){el.innerHTML=map(d.testimonials,function(q){return'<div class="quote"><div><p>&ldquo;'+e(q.quote)+'&rdquo;</p><span>'+e(q.name)+'</span><em>'+e(q.role)+'</em></div></div>'})},
brands:function(el,d){var h=map(d.brands,function(b){return'<span>'+e(b.name)+'</span>'});el.innerHTML=h+h},
timeline:function(el,d){el.innerHTML=map(d.timeline,function(t){return'<div class="ti rv"><span class="dot"></span><div class="card"><h3>'+e(t.title)+'</h3><p>'+e(t.desc)+'</p></div></div>'})},
skills:function(el,d){el.innerHTML=map(d.skills,function(s){return'<div class="sk rv" data-v="'+e(Math.max(0,Math.min(100,+s.value||0)))+'"><div class="r"><span>'+e(s.name)+'</span><b>0%</b></div><div class="bar"><span class="fill"></span></div></div>'})},
contactinfo:function(el,d){var s=d.settings||{},wa=String(s.whatsapp||'').trim(),dg=wa.replace(/\D/g,''),so=socials(s);
el.innerHTML='<div class="card rv"><h3>Email</h3><a class="em" href="mailto:'+e(s.email)+'">'+e(s.email)+'</a></div><div class="card rv"><h3>WhatsApp</h3>'+(dg?'<a class="em" href="https://wa.me/'+dg+'" target="_blank" rel="noopener">'+e(wa)+'</a>':'<p>Available on request</p><small>Send a message through the form or email and I will share my number.</small>')+'</div>'+(so?'<div class="card rv"><h3>Follow my work</h3><div class="soc">'+so+'</div></div>':'')},
socials:function(el,d){el.innerHTML=socials(d.settings)}
};
function render(d){var T=d.texts||{};
document.querySelectorAll('[data-t]').forEach(function(x){var v=T[x.dataset.t];if(v!=null)x.textContent=v});
document.querySelectorAll('[data-r]').forEach(function(x){var f=R[x.dataset.r];if(f)f(x,d)});
window.SITE=d;document.dispatchEvent(new Event('siteready'))}
function load(){return fetch(B+'data/site.json?v='+Date.now(),{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).catch(function(){return JSON.parse(JSON.stringify(window.SITE_DEFAULT))})}
window.TZ={load:load,esc:e,icons:Object.keys(I),cats:CATS,render:render};
if(!window.TZ_ADMIN)load().then(function(d){try{localStorage.setItem('tz_theme',d.theme||'charcoal')}catch(x){}TZ_apply(d.theme);render(d)});
})();
