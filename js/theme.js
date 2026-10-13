(function(){var T={
charcoal:{n:'Charcoal Orange',bg:'#16181a',panel:'#1e2225',line:'#2c3236',tx:'#f2efea',mu:'#9aa3a6',a:'#ff6a1f',b:'#7fe0d4',ink:'#14110e'},
midnight:{n:'Midnight Blue',bg:'#0c1424',panel:'#141f36',line:'#243456',tx:'#eaf1ff',mu:'#8fa3c7',a:'#4f8cff',b:'#6ee7f9',ink:'#061022'},
slate:{n:'Slate Purple',bg:'#1a1923',panel:'#232231',line:'#36344b',tx:'#f1eefc',mu:'#a29fbd',a:'#a78bfa',b:'#f0abfc',ink:'#160f28'},
emerald:{n:'Emerald Dark',bg:'#0e1815',panel:'#15231f',line:'#233a33',tx:'#ecf7f2',mu:'#8fb0a5',a:'#34d399',b:'#fbbf24',ink:'#04170f'}};
function rgb(h){return parseInt(h.slice(1,3),16)+','+parseInt(h.slice(3,5),16)+','+parseInt(h.slice(5,7),16)}
function apply(k){var t=T[k]||T.charcoal,s=document.documentElement.style;
s.setProperty('--bg',t.bg);s.setProperty('--panel',t.panel);s.setProperty('--line',t.line);s.setProperty('--tx',t.tx);s.setProperty('--mu',t.mu);s.setProperty('--or',t.a);s.setProperty('--te',t.b);s.setProperty('--ink',t.ink);s.setProperty('--orr',rgb(t.a));s.setProperty('--ter',rgb(t.b));s.setProperty('--bgr',rgb(t.bg))}
window.TZ_THEMES=T;window.TZ_apply=apply;
var k='charcoal';try{k=localStorage.getItem('tz_theme')||k}catch(e){}apply(k)})();
