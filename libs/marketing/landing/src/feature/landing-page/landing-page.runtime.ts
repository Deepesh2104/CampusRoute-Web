// AUTO-GENERATED from legacy HTML — run: node tools/sync-legacy-landing.mjs
// @ts-nocheck

/** Runs legacy landing IIFE exactly as in the static HTML file. */
export function initLandingPageRuntime(): () => void {
  document.getElementById('bar')?.remove();
  document.getElementById('cg')?.remove();

(function(){
var $=function(i){return document.getElementById(i)},fmt=function(n){return '₹'+Math.round(n).toLocaleString('en-IN')},lk=function(n){return n>=1e5?'₹'+(n/1e5).toFixed(1).replace('.0','')+' lakh':fmt(n)};
// reveal + count-up
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(function(el){var t=+el.dataset.n,s=el.dataset.s||'',st=performance.now();(function f(n){var p=Math.min(1,(n-st)/1400);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)});io.unobserve(e.target)})},{threshold:.2});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
// hero parallax
var sg=$('stage');document.querySelector('.hero').addEventListener('pointermove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;sg.querySelectorAll('.fl').forEach(function(c){var d=+c.dataset.d;c.style.transform='translate('+x*d*2+'px,'+y*d*2+'px) rotateY('+x*d/2+'deg) rotateX('+(-y*d/2)+'deg)'})});
// bento spotlight
document.querySelectorAll('.bx').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.setProperty('--x',(e.clientX-r.left)+'px');b.style.setProperty('--y',(e.clientY-r.top)+'px')})});
// tabs
var T=[['Choose','Compare programmes and colleges on like-for-like, verified facts.',[['Sample Tech, Pune','<span class="ch">Verified fee</span>'],['Demo Institute, Hyderabad','<span class="ch w">Estimated</span>'],['Example University, Chennai','<span class="ch">Verified fee</span>']]],
['Fund','Itemise every cost, match scholarships and compare loan terms before you commit.',[['State merit scholarship','<span class="ch">You may qualify</span>'],['Loan: 10.5% · 10 yrs','<b>₹21,600/mo</b>'],['Documents ready','<b>6 of 8</b>']]],
['Build','Turn a target role into a skill roadmap with projects and evidence recruiters can check.',[['Data structures','<div class="pb"><i style="width:80%"></i></div>'],['Backend project','<div class="pb"><i style="width:55%"></i></div>'],['System design','<div class="pb"><i style="width:20%"></i></div>']]],
['Get hired','Polish your resume, practise interviews, track applications and compare offers side by side.',[['Applied · 6','<span class="ch w">In review</span>'],['Interview · 2','<span class="ch">Scheduled</span>'],['Offer · 1','<b>Compare</b>']]]];
var tb=$('tabs'),pn=$('panel');
function show(i){tb.querySelectorAll('.tab').forEach(function(b,j){b.setAttribute('aria-selected',j===i)});var t=T[i];pn.style.animation='none';pn.offsetHeight;pn.style.animation='';pn.innerHTML='<div><h3>'+t[0]+'</h3><p>'+t[1]+'</p></div><div class="mock">'+t[2].map(function(r){return '<div class="row"><span>'+r[0]+'</span>'+r[1]+'</div>'}).join('')+'</div>'}
T.forEach(function(t,i){var b=document.createElement('button');b.className='tab';b.role='tab';b.textContent=(i+1)+'. '+t[0];b.onclick=function(){show(i)};tb.appendChild(b)});show(0);
// simulator
var P={eng:[4,180000,25000],gov:[4,60000,15000],mba:[2,350000,40000],bba:[3,120000,20000]},k='eng',col=['#7C5CFF','#22D3EE','#FFB020','#34D399','#A5AFD0','#FF5C7A'];
function sum(b,y,r){var s=0;for(var i=0;i<y;i++)s+=b*Math.pow(1+r,i);return s}
function tg(id){var b=$(id);b.onclick=function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true');calc()};}
['hostel','laptop','s1','s2'].forEach(tg);
document.querySelectorAll('#prog button').forEach(function(b){b.onclick=function(){document.querySelectorAll('#prog button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});k=b.dataset.k;calc()}});
var cur=0,raf;
function tween(to){cancelAnimationFrame(raf);var from=cur,st=performance.now();(function f(n){var p=Math.min(1,(n-st)/500);cur=from+(to-from)*(1-Math.pow(1-p,3));$('tot').textContent=fmt(cur);if(p<1)raf=requestAnimationFrame(f)})(st)}
function on(i){return $(i).getAttribute('aria-pressed')==='true'}
function calc(){
 var p=P[k],r=$('rise').value/100+(on('s1')?.08:0),h=on('hostel'),l=on('laptop');
 var it=[['Tuition',sum(p[1],p[0],r)],['Other fees',sum(p[2],p[0],r)],['Hostel and mess',h?sum(115000,p[0],r):0],['Books and travel',sum(15000,p[0],r)],['Laptop',l?60000:0]];
 var sub=it.reduce(function(a,b){return a+b[1]},0);it.push(['Safety buffer',sub*.1]);var tot=sub*1.1;
 var y1=(p[1]+p[2]+(h?115000:0)+15000+(l?60000:0))*1.1,bud=$('bud').value*(on('s2')?.7:1),gap=Math.max(0,tot-bud),cov=Math.min(100,bud/tot*100);
 $('riseV').textContent=Math.round(r*100)+'%';$('budV').textContent=lk(bud);tween(tot);$('y1').textContent='First year: '+fmt(y1);
 var a=0,g=[];it.forEach(function(x,i){if(!x[1])return;var s=a;a+=x[1]/tot*100;g.push(col[i]+' '+s+'% '+a+'%')});$('donut').style.background='conic-gradient('+g.join(',')+')';
 $('lg').innerHTML=it.filter(function(x){return x[1]}).map(function(x){return '<li><span><i style="background:'+col[it.indexOf(x)]+'"></i>'+x[0]+'</span><b>'+lk(x[1])+'</b></li>'}).join('');
 $('cov').textContent=Math.round(cov)+'%';var m=$('mt');m.style.width=cov+'%';m.style.background=cov>=100?'#34D399':cov>60?'#FFB020':'#FF5C7A';
 var v=$('vd');if(gap<=0){v.className='vd';v.textContent='Covered, with '+lk(bud-tot)+' to spare. Keep it as your buffer.'}else{var q=.105/12,emi=gap*q/(1-Math.pow(1+q,-120));v.className='vd bad';v.textContent='Funding gap '+lk(gap)+'. As an illustrative 10.5% loan over 10 years, that is about '+fmt(emi)+' a month. Scholarships could shrink it.'}}
$('rise').oninput=calc;$('bud').oninput=calc;calc();
document.querySelectorAll('.now button').forEach(function(b){b.onclick=function(){show(+b.dataset.i);$('journey').scrollIntoView({behavior:'smooth'})}});
var C=[['Sample Tech, Pune',720000,1860000],['Demo Institute, Hyderabad',640000,1720000],['Example University, Chennai',880000,2150000]],rb=$('rvb'),rbx=$('rvbars');
rbx.innerHTML=C.map(function(c,i){return '<div class="rr"><div class="rh"><span>'+c[0]+'</span><span class="ch w" id="rx'+i+'" style="visibility:hidden">+'+lk(c[2]-c[1])+' hidden</span></div><div class="tk"><i id="ri'+i+'"></i><s id="rs'+i+'"></s></div></div>'}).join('');
function rvf(){var t=rb.getAttribute('aria-pressed')==='true',mx=2150000,s=0;C.forEach(function(c,i){var e=$('ri'+i),h=$('rs'+i),x=$('rx'+i);e.style.width=c[1]/mx*100+'%';e.textContent=fmt(c[1]);h.style.width=t?(c[2]-c[1])/mx*100+'%':'0%';h.textContent=t?'+'+lk(c[2]-c[1]):'';x.style.visibility=t?'visible':'hidden';x.textContent='+'+Math.round((c[2]/c[1]-1)*100)+'% more';s+=c[2]/c[1]});$('rvs').innerHTML=t?'The real bill is about <span class="grad">'+(s/C.length).toFixed(1)+'× the brochure fee</span>':'Looks affordable, right? Flip the switch.'}
rb.onclick=function(){rb.setAttribute('aria-pressed',rb.getAttribute('aria-pressed')!=='true');rvf()};rvf();
new IntersectionObserver(function(es,o){if(es[0].isIntersecting){o.disconnect();setTimeout(function(){if(rb.getAttribute('aria-pressed')!=='true'){rb.setAttribute('aria-pressed','true');rvf()}},1300)}},{threshold:.6}).observe($('rvbars'));
var bg=$('bg'),nv=document.querySelector('header .nav > nav[aria-label="Main"]');if(bg&&nv){bg.onclick=function(){var o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)};nv.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nv.classList.remove('open');bg.setAttribute('aria-expanded','false')})})}
var FC=['All','Decide','Fund','Apply','Learn','Career','Support','Partners','Abroad'],FI=[
['Decide','🧭','Career discovery','Interests, strengths and role pathways, with salary ranges and their sources.'],
['Decide','🏫','Course and college comparison','Side-by-side programmes with accreditation evidence, outcomes and fees.'],
['Decide','📝','Entrance exam hub','Eligibility, syllabus, dates, mock tests and the counselling calendar.'],
['Fund','💰','True-cost engine','Every fee itemised with source, date and confidence.'],
['Fund','🎁','Scholarship finder','Government, state, private and college aid with deadlines and eligibility.'],
['Fund','🏦','Loan comparison','Compare terms side by side. The lender keeps sanction authority.'],
['Fund','🗂️','Financial passport','Consent-controlled record of budgets, payments, loans and repayments.'],
['Apply','📅','Admissions tracker','Deadlines, checklists, applications and status in one workspace.'],
['Apply','🪑','Counselling and seats','Choice filling, rounds and seat decisions. Official portals stay the authority.'],
['Apply','📁','Document vault','Secure uploads, expiry reminders and shareable bundles.'],
['Learn','🗺️','Learning roadmaps','Weekly plans built from your target role and current skills.'],
['Learn','🧠','AI study assistant','Explanations and practice with sources and clear uncertainty.'],
['Learn','🧩','Projects and portfolio','Real projects with reviews and evidence you can show.'],
['Career','📄','Resume and ATS help','Sharper resumes without ever inventing experience.'],
['Career','🎤','Mock interviews','Rubric-based feedback and an improvement plan. Recording needs your consent.'],
['Career','💼','Jobs and internships','Verified listings with scam warnings and freshness checks.'],
['Career','⚖️','Offer comparison','Salary, benefits and notice period side by side.'],
['Support','🤝','Mentors and counsellors','Verified experts with transparent booking and reviews.'],
['Support','💬','Student community','Moderated groups, Q&A and study circles.'],
['Support','🏠','Housing and campus life','Verified hostel and rental listings with safety information.'],
['Support','🌱','Wellbeing resources','Support and counsellor discovery. No AI diagnosis or treatment.'],
['Partners','🏛️','Admissions CRM','For colleges: consented enquiries, follow-ups and status updates.'],
['Partners','🧑‍💼','Hiring workflow','For employers: verified jobs, scorecards and offers.'],
['Partners','🎓','Alumni network','Verified alumni journeys, mentoring and referrals.'],
['Abroad','🌍','International discovery','Countries, costs, language tests and visa information from official sources.'],
['Abroad','✈️','Relocation guide','Pre-departure checklists and country guides. No visa guarantees.']
],fcat=$('fcat'),fgrid=$('fgrid');
var fc='All',fx=false;
function fshow(c){if(c!==fc)fx=false;fc=c;fcat.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b.textContent===c)});var l=FI.filter(function(x){return c==='All'||x[0]===c}),v=fx?l:l.slice(0,6);fgrid.innerHTML=v.map(function(x){return '<div class="fi"><em>'+x[1]+'</em><b>'+x[2]+'</b><p>'+x[3]+'</p></div>'}).join('');var m=$('fmore');m.hidden=l.length<=6;m.textContent=fx?'Show less':'Show '+(l.length-6)+' more'}
$('fmore').onclick=function(){fx=!fx;fshow(fc);if(!fx)$('features').scrollIntoView({behavior:'smooth'})};
FC.forEach(function(c){var b=document.createElement('button');b.className='tg';b.textContent=c;b.onclick=function(){fshow(c)};fcat.appendChild(b)});fshow('All');
var fd=document.querySelectorAll('#faq details');
if(fd.length>6){var fw2=document.createElement('div');fw2.className='mr';fw2.innerHTML='<button class="btn" type="button" id="fqm"></button>';fd[fd.length-1].parentNode.appendChild(fw2);var fqx=false,fq=function(){fd.forEach(function(d,i){d.hidden=!fqx&&i>=6});$('fqm').textContent=fqx?'Show fewer questions':'Show '+(fd.length-6)+' more questions'};$('fqm').onclick=function(){fqx=!fqx;fq()};fq()}
var bt=document.querySelector('#why .bento'),bxs=bt.querySelectorAll('.bx');
if(bxs.length>6){bt.classList.add('col');var bw=document.createElement('div');bw.className='mr';bw.innerHTML='<button class="btn" type="button" id="bm"></button>';bt.parentNode.appendChild(bw);var bf=function(){var o=!bt.classList.contains('col');bxs.forEach(function(x,i){x.hidden=!o&&i>=6});$('bm').textContent=o?'Show fewer':'Show '+(bxs.length-6)+' more'};$('bm').onclick=function(){bt.classList.toggle('col');bf()};bf()}
var au=$('auth'),tl=$('tl'),ts=$('ts'),fl=$('fl'),fs=$('fs'),re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function route(){if(!au||!tl||!ts||!fl||!fs)return;var h=location.hash.slice(1);if(h==='login'||h==='signup'){var s=h==='signup';au.classList.add('on');document.body.style.overflow='hidden';fl.hidden=s;fs.hidden=!s;$('fo').hidden=true;$('odone').hidden=true;clearInterval(otm);tl.setAttribute('aria-selected',!s);ts.setAttribute('aria-selected',s);au.scrollTop=0;setTimeout(function(){var f=$(s?'sn':'le');f&&f.focus({preventScroll:true})},60)}else{au.classList.remove('on');document.body.style.overflow=''}}
addEventListener('hashchange',route);route();
addEventListener('keydown',function(e){if(e.key==='Escape'&&au.classList.contains('on'))location.hash='top'});
tl.onclick=function(){location.hash='login';route()};ts.onclick=function(){location.hash='signup';route()};
document.querySelectorAll('.eye').forEach(function(b){b.onclick=function(){var i=$(b.dataset.t),s=i.type==='password';i.type=s?'text':'password';b.textContent=s?'Hide':'Show';b.setAttribute('aria-label',s?'Hide password':'Show password')}});
function ok2(v){v=v.trim();var d=v.replace(/[\s-]/g,'').replace(/^\+?91/,'');return re.test(v)||/^[6-9]\d{9}$/.test(d)}
function chk(list){var ok=true,first=null;list.forEach(function(x){$(x[0]).textContent=x[1]?'':x[2];if(!x[1]){ok=false;if(!first)first=$(x[3])}});if(first)first.focus();return ok}
var oc='',om='',oat=0,otm,oin=[];
for(var oi=0;oi<6;oi++){var ox=document.createElement('input');ox.inputMode='numeric';ox.maxLength=1;ox.autocomplete=oi?'off':'one-time-code';ox.setAttribute('aria-label','Digit '+(oi+1));$('otp').appendChild(ox);oin.push(ox)}
function oclr(){oin.forEach(function(x){x.value=''})}
oin.forEach(function(x,i){x.addEventListener('input',function(){x.value=x.value.replace(/\D/g,'').slice(-1);if(x.value&&i<5)oin[i+1].focus()});x.addEventListener('keydown',function(e){if(e.key==='Backspace'&&!x.value&&i>0){oin[i-1].focus();oin[i-1].value=''}});x.addEventListener('paste',function(e){var t=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,6);if(t){e.preventDefault();t.split('').forEach(function(d,j){oin[j].value=d});oin[Math.min(t.length,5)].focus()}})});
function ottick(n){clearInterval(otm);var l=$('otr'),s=$('ots');l.hidden=true;s.textContent='Resend code in '+n+'s';otm=setInterval(function(){n--;if(n<=0){clearInterval(otm);s.textContent='';l.hidden=false}else s.textContent='Resend code in '+n+'s'},1000)}
function ogen(){oc=String(100000+Math.floor(Math.random()*900000));oat=0;$('otd').textContent='Demo only: no message was really sent. Your code is '+oc+'.'}
function startOtp(id,mode){om=mode;fl.hidden=true;fs.hidden=true;$('fo').hidden=false;$('oto').textContent='We sent a 6-digit code to '+id+'. Enter it below.';$('ote').textContent='';oclr();ogen();ottick(30);oin[0].focus()}
$('fo').onsubmit=function(e){e.preventDefault();var v=oin.map(function(x){return x.value}).join(''),er=$('ote');if(v.length<6){er.textContent='Enter all 6 digits.';(oin.filter(function(x){return !x.value})[0]||oin[5]).focus();return}if(oat>=5){er.textContent='Too many attempts. Please resend a new code.';return}if(v!==oc){oat++;er.textContent='That code is not correct. '+(5-oat)+' tries left.';oclr();oin[0].focus();return}er.textContent='';clearInterval(otm);$('fo').hidden=true;$('odone').hidden=false;$('odt').textContent=om==='login'?'Welcome back':'You are verified';$('odp').textContent=(om==='signup'&&$('sr').value==='School student'?'Next, we would ask a parent or guardian to approve your account. ':'')+'Demo only: no real account or login was created.'};
$('otr').onclick=function(e){e.preventDefault();ogen();ottick(30);$('ote').textContent='';oclr();oin[0].focus()};
$('otc').onclick=function(e){e.preventDefault();clearInterval(otm);$('fo').hidden=true;(om==='login'?fl:fs).hidden=false};
$('lo').onclick=function(e){e.preventDefault();if(chk([['lee',ok2($('le').value),'Enter a valid email or 10-digit mobile number.','le']]))startOtp($('le').value.trim(),'login')};
fl.onsubmit=function(e){e.preventDefault();var m=$('lm');if(chk([['lee',ok2($('le').value),'Enter a valid email or 10-digit mobile number.','le'],['lpe',!!$('lp').value,'Enter your password.','lp']])){m.className='am2 ok';m.textContent='Demo only: no real login happened. Connect an authentication backend to enable this.'}else m.textContent=''};

$('fp').onclick=function(e){e.preventDefault();var m=$('lm');m.className='am2 ok';m.textContent='Demo only: a password-reset email would be sent here.'};
$('sr').onchange=function(){$('u18n').hidden=this.value!=='School student'};
$('sp').oninput=function(){var p=this.value,s=0;if(p.length>=8)s++;if(/[A-Z]/.test(p)&&/[a-z]/.test(p))s++;if(/\d/.test(p))s++;if(/[^A-Za-z0-9]/.test(p)||p.length>=12)s++;};
fs.onsubmit=function(e){e.preventDefault();var m=$('sm2');if(chk([['sne',$('sn').value.trim().length>1,'Enter your full name.','sn'],['see',ok2($('se').value),'Enter a valid email or 10-digit mobile number.','se'],['spe',$('sp').value.length>=8,'Use at least 8 characters.','sp'],['sce',$('sc').checked,'Please agree to continue.','sc']])){m.textContent='';startOtp($('se').value.trim(),'signup')}else m.textContent=''};
// consent
var sb=document.querySelectorAll('#consent .sw button');function sh(){var l=['name and email'];sb.forEach(function(b){if(b.getAttribute('aria-pressed')==='true')l.push(b.dataset.f)});$('shn').textContent='Sending: '+l.join(', ')+'. Nothing else leaves your account.'}
sb.forEach(function(b){b.onclick=function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true');sh()}});sh();
var bar=document.createElement('div');bar.id='bar';document.body.appendChild(bar);var cg=document.createElement('div');cg.id='cg';document.body.appendChild(cg);
addEventListener('scroll',function(){bar.style.width=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100+'%'},{passive:true});
addEventListener('pointermove',function(e){cg.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
document.querySelectorAll('.btn.p').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.18+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});
var nl=document.querySelectorAll('.nav nav a'),so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)nl.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){so.observe(s)});
// form
$('f').onsubmit=function(e){e.preventDefault();var v=$('em').value.trim(),m=$('msg');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){m.className='msg er';m.textContent='Enter a valid email, like name@example.com.';return}m.className='msg ok';m.textContent='Thanks! This is a demo page, so nothing was stored.';$('em').value=''};
})();

  return function teardownLandingRuntime() {
    document.getElementById('bar')?.remove();
    document.getElementById('cg')?.remove();
    document.body.style.overflow = '';
    document.getElementById('auth')?.classList.remove('on');
  };
}
