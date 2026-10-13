(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);
var el=e.target,end=parseFloat(el.dataset.to)||0,dec=(String(el.dataset.to).split('.')[1]||'').length,suf=el.dataset.suf||'',t0=null;
function step(t){t0=t0||t;var p=Math.min((t-t0)/1800,1),v=end*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)})},{threshold:.5});
var tm;
function slider(){var tr=document.querySelector('.track');if(!tr||!tr.children.length)return;var n=tr.children.length,i=0,ds=document.querySelector('.dots');ds.innerHTML='';clearInterval(tm);
for(var k=0;k<n;k++){(function(k){var d=document.createElement('button');d.setAttribute('aria-label','Testimonial '+(k+1));d.onclick=function(){go(k);auto()};ds.appendChild(d)})(k)}
function go(x){i=x;tr.style.transform='translateX(-'+(i*100)+'%)';[].forEach.call(ds.children,function(d,j){d.classList.toggle('on',j===i)})}
function auto(){clearInterval(tm);tm=setInterval(function(){go((i+1)%n)},5500)}go(0);auto()}
function init(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el)});document.querySelectorAll('[data-to]').forEach(function(el){cio.observe(el)});slider()}
var b=document.querySelector('.burger'),m=document.querySelector('.menu');
if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.addEventListener('siteready',init);
})();
