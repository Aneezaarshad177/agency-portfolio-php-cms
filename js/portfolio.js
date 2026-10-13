document.addEventListener('siteready',function(){
var tabs=document.querySelector('.tabs'),pill=tabs.querySelector('.pill'),btns=[].slice.call(tabs.querySelectorAll('.tab')),cards=[].slice.call(document.querySelectorAll('.pc')),cur='all',busy=0;
function mv(b){pill.style.width=b.offsetWidth+'px';pill.style.transform='translateX('+b.offsetLeft+'px)'}
function show(){var k=0;cards.forEach(function(c){if(!c.classList.contains('gone')){c.style.transitionDelay=(k%3)*110+Math.floor(k/3)*60+'ms';k++}})}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
function apply(f){cards.forEach(function(c){var ok=f==='all'||c.dataset.cat===f;c.classList.toggle('gone',!ok);c.classList.remove('in');c.style.transitionDelay='0ms';io.unobserve(c)});
show();void document.body.offsetHeight;cards.forEach(function(c){if(!c.classList.contains('gone'))io.observe(c)})}
btns.forEach(function(b){b.addEventListener('click',function(){if(b.dataset.f===cur)return;cur=b.dataset.f;btns.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b)});mv(b);
cards.forEach(function(c){c.style.transitionDelay='0ms';c.classList.remove('in')});clearTimeout(busy);busy=setTimeout(function(){apply(cur)},380)})});
var on=btns[0];mv(on);window.addEventListener('resize',function(){mv(tabs.querySelector('.tab.on'))});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){mv(tabs.querySelector('.tab.on'))});
apply('all');
var lb=document.querySelector('.lb'),li=lb.querySelector('.lbi'),lc=lb.querySelector('.lbt'),last;
function open(c){last=c;li.style.cssText=c.querySelector('i').style.cssText;li.innerHTML=c.querySelector('i').innerHTML;
lc.querySelector('small').textContent=c.dataset.label;lc.querySelector('h3').textContent=c.dataset.title;lc.querySelector('p').textContent=c.dataset.desc;
lb.classList.add('open');document.body.style.overflow='hidden';lb.querySelector('.lbc').focus()}
function close(){lb.classList.remove('open');document.body.style.overflow='';if(last)last.focus()}
cards.forEach(function(c){c.addEventListener('click',function(){open(c)})});
lb.addEventListener('click',function(e){if(e.target===lb||e.target.closest('.lbc'))close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))close()});
});
