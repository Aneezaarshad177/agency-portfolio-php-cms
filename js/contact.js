(function(){
var em=function(){return(window.SITE&&SITE.settings&&SITE.settings.email)||'treziohubspot@gmail.com'};var f=document.getElementById('cf'),s=document.querySelector('.fs');
f.addEventListener('submit',function(e){e.preventDefault();var bad=0;
[].forEach.call(f.querySelectorAll('[required]'),function(el){var ok=el.value.trim()&&(el.type!=='email'||/^\S+@\S+\.\S+$/.test(el.value));el.parentNode.classList.toggle('bad',!ok);if(!ok)bad++});
if(bad){s.textContent='Please fill in the highlighted fields.';s.classList.add('show');return}
var g=function(n){return f.elements[n].value.trim()};
var body='Name: '+g('name')+'\nEmail: '+g('email')+'\nProject type: '+g('type')+'\nBudget: '+g('budget')+'\n\n'+g('message');
s.innerHTML='Thank you, '+g('name').replace(/[<>&]/g,'')+'. Your email app should open with your message ready to send. If it does not, email <a href="mailto:'+em()+'">'+em()+'</a> directly.';s.classList.add('show');
window.location.href='mailto:'+em()+'?subject='+encodeURIComponent('New project enquiry: '+g('type'))+'&body='+encodeURIComponent(body)});
f.addEventListener('input',function(e){e.target.parentNode.classList.remove('bad')});
})();
