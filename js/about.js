document.addEventListener('siteready',function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
var s=e.target,v=+s.dataset.v,f=s.querySelector('.fill'),n=s.querySelector('b'),t0=null;f.style.width=v+'%';
function step(t){t0=t0||t;var p=Math.min((t-t0)/1800,1);n.textContent=Math.round(v*(1-Math.pow(1-p,3)))+'%';if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)})},{threshold:.4});
document.querySelectorAll('.sk').forEach(function(s){io.observe(s)});
});
