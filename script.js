var $=function(i){return document.getElementById(i)};
/* ====== صور الأطباء: ضع رابط الصورة هنا باسم الدكتور بالظبط ======
   مثال: PHOTOS['د. محمد حسن']='https://موقعك.com/images/mohamed.jpg'
   ولو مفيش رابط بيظهر أول حرف من الاسم */
var PHOTOS={};
var TABS=[['clinic','العيادات والأطباء'],['hospital','المستشفيات'],['lab','المعامل'],['pharmacy','الصيدليات']];
var SPECS=['باطنة','أطفال','نساء وتوليد','عظام','أسنان','عيون','أنف وأذن','جلدية','قلب','مخ وأعصاب','مسالك بولية','نفسية','جراحة عامة','أورام','كلى','سكر وغدد','صدر','تغذية علاجية','علاج طبيعي','أوعية دموية','جهاز هضمي','روماتيزم','تجميل','أشعة'];
/* التخصصات الفرعية: السن للأطفال وغيرها */
var SUBS={'أطفال':['حديثي الولادة (0-1 شهر)','رضّع (1 شهر - سنتين)','أطفال (3-12 سنة)','مراهقين (13-18 سنة)'],'أسنان':['أسنان أطفال','تقويم','زراعة','تجميل','علاج جذور'],'عيون':['عيون أطفال','ليزك','شبكية'],'باطنة':['جهاز هضمي','صدر','سكر وغدد'],'نساء وتوليد':['متابعة حمل','عقم وحقن مجهري'],'عظام':['عظام أطفال','مفاصل','إصابات ملاعب'],'جلدية':['جلدية أطفال','ليزر وتجميل'],'أنف وأذن':['أنف وأذن أطفال','سمعيات']};
var GOV={
'القاهرة':'مدينة نصر،مصر الجديدة،المعادي،حلوان،شبرا،وسط البلد،التجمع الخامس،الشروق،المقطم،عين شمس،المطرية،الزمالك،السيدة زينب،15 مايو،بدر',
'الجيزة':'الدقي،المهندسين،العجوزة،الهرم،فيصل،6 أكتوبر،الشيخ زايد،إمبابة،العمرانية،الوراق،البدرشين،الحوامدية،أوسيم،كرداسة،أبو النمرس،الصف،العياط،أطفيح',
'الإسكندرية':'سموحة،سيدي جابر،العجمي،المنتزه،ميامي،العصافرة،محرم بك،برج العرب،كرموز،الورديان',
'القليوبية':'بنها،شبرا الخيمة،قليوب،الخانكة،القناطر الخيرية،طوخ،شبين القناطر،العبور',
'الشرقية':'الزقازيق،العاشر من رمضان،بلبيس،منيا القمح،أبو حماد،فاقوس،ههيا،أبو كبير',
'الدقهلية':'المنصورة،طلخا،ميت غمر،السنبلاوين،أجا،دكرنس،بلقاس،شربين',
'الغربية':'طنطا،المحلة الكبرى،كفر الزيات،زفتى،السنطة،بسيون،سمنود',
'المنوفية':'شبين الكوم،منوف،أشمون،قويسنا،السادات،الباجور،تلا',
'البحيرة':'دمنهور،كفر الدوار،رشيد،إيتاي البارود،أبو حمص،كوم حمادة،إدكو',
'كفر الشيخ':'كفر الشيخ،دسوق،بيلا،فوه،بلطيم،مطوبس،سيدي سالم',
'دمياط':'دمياط،رأس البر،فارسكور،كفر سعد،الزرقا',
'بورسعيد':'حي الشرق،حي العرب،حي الضواحي،بورفؤاد',
'الإسماعيلية':'الإسماعيلية،فايد،القنطرة،التل الكبير،أبو صوير',
'السويس':'السويس،الأربعين،فيصل،عتاقة',
'بني سويف':'الواسطى،بني سويف،ناصر،إهناسيا،ببا،الفشن،سمسطا',
'الفيوم':'الفيوم،إبشواي،طامية،سنورس،إطسا،يوسف الصديق',
'المنيا':'المنيا،ملوي،مغاغة،بني مزار،سمالوط،العدوة،أبو قرقاص،مطاي',
'أسيوط':'أسيوط،ديروط،القوصية،منفلوط،أبنوب،الفتح،أبو تيج',
'سوهاج':'سوهاج،أخميم،جرجا،طهطا،المراغة،البلينا،دار السلام',
'قنا':'قنا،نجع حمادي،قوص،دشنا،أبو تشت،فرشوط',
'الأقصر':'الأقصر،إسنا،أرمنت،الطود،القرنة',
'أسوان':'أسوان،كوم أمبو،إدفو،دراو،نصر النوبة',
'البحر الأحمر':'الغردقة،سفاجا،القصير،مرسى علم',
'الوادي الجديد':'الخارجة،الداخلة،الفرافرة،باريس',
'مطروح':'مرسى مطروح،الحمام،العلمين،سيوة',
'شمال سيناء':'العريش،الشيخ زويد،رفح،بئر العبد',
'جنوب سيناء':'شرم الشيخ،الطور،دهب،نويبع،سانت كاترين'};
var FN=['محمد','أحمد','محمود','خالد','عمر','طارق','هشام','ياسر','منى','سارة','هالة','نهى','ريم','إيمان','حسام','كريم','شريف','أمير','دينا','ليلى'];
var LN=['حسن','سعيد','عبد الله','إبراهيم','فتحي','يوسف','علي','مصطفى','عادل','السيد','الشافعي','منصور'];
var ST=['شارع الجمهورية','شارع البحر','ميدان المحطة','الشارع الرئيسي','شارع المدارس','شارع النيل'];
var MEDS=['بنادول','أوجمنتين','كونكور','فيتامين د','فلاجيل','بانادول إكسترا','كتافلام','نوفالجين','أنتينال','سيتال'];
var FAMOUS={
hospital:[['مستشفى قصر العيني','gov','القاهرة'],['مستشفى الدمرداش','gov','القاهرة'],['مستشفى أبو الريش للأطفال','gov','القاهرة'],['معهد القلب القومي','gov','الجيزة'],['مستشفى أسيوط الجامعي','gov','أسيوط'],['مستشفى المنصورة الجامعي','gov','المنصورة'],['مستشفى دار الفؤاد','pri','6 أكتوبر'],['مستشفى السلام الدولي','pri','المعادي'],['مستشفى كليوباترا','pri','مصر الجديدة'],['مستشفى النيل بدراوي','pri','المعادي'],['مستشفى 57357 لأورام الأطفال','pri','القاهرة']],
lab:[['معامل البرج','','فروع في كل المحافظات'],['المختبر','','فروع في كل المحافظات'],['ألفا لاب','','فروع في كل المحافظات']],
pharmacy:[['صيدليات العزبي','','فروع في كل المحافظات'],['صيدليات رشدي','','فروع في كل المحافظات'],['صيدليات مصر','','فروع في كل المحافظات'],['صيدليات سيف','','فروع في كل المحافظات'],['صيدليات 19011','','فروع في كل المحافظات']]};
function H(s){var x=7;for(var i=0;i<s.length;i++)x=(x*31+s.charCodeAt(i))>>>0;return x}
function R(seed){var x=H(seed);return function(n){x=(x*1664525+1013904223)>>>0;return x%n}}
function rate(r){return (4+r(10)/10).toFixed(1)}
var C={};
function gen(g,ar){var k=g+'|'+ar;if(C[k])return C[k];var r=R(k),o=[],loc=ar+'، '+g,ph='01XXXXXXXXX';
SPECS.forEach(function(sp){for(var j=0;j<2;j++){var nm='د. '+FN[r(20)]+' '+LN[r(12)];var sb=SUBS[sp]?[SUBS[sp][r(SUBS[sp].length)]]:[];if(sp=='أطفال'&&r(2))sb.push(SUBS[sp][r(4)]);
o.push({t:'clinic',s:sp,sub:sb,n:nm,a:ST[r(6)]+'، '+loc,r:rate(r),c:20+r(480),hr:'4 م – 9 م',fee:150+r(8)*50,ph:ph})}});
['gov','gov','pri','pri'].forEach(function(sc,i){o.push({t:'hospital',g:sc,n:(sc=='gov'?(i?'الوحدة الصحية بـ':'مستشفى '+ar+' المركزي'):['مستشفى الأمل ','مستشفى النور '][i-2]+(i>1?ar:''))+(sc=='gov'&&i?ar:''),a:ST[r(6)]+'، '+loc,r:rate(r),c:50+r(900),hr:'24 ساعة',ph:ph})});
['الشفاء','الدقة','النور'].forEach(function(n){o.push({t:'lab',n:'معمل '+n+' – '+ar,a:ST[r(6)]+'، '+loc,r:rate(r),c:30+r(400),hr:'8 ص – 10 م',ph:ph})});
['الصحة','الأمان','دعاء','الحياة'].forEach(function(n){var m=[];for(var i=0;i<4;i++)m.push([MEDS[r(10)],r(5)?'متوفر':'قليل']);o.push({t:'pharmacy',n:'صيدلية '+n+' – '+ar,a:ST[r(6)]+'، '+loc,r:rate(r),c:30+r(400),hr:r(2)?'24 ساعة':'9 ص – 12 م',m:m,ph:ph})});
return C[k]=o}
var S={tab:'clinic',spec:'',sub:'',sec:'',q:'',lim:18};
function pool(){var g=$('gov').value,a=$('mk').value;
if(!g){return S.tab=='clinic'?['القاهرة','الجيزة','الإسكندرية'].reduce(function(acc,x){return acc.concat(gen(x,GOV[x].split('،')[0]),gen(x,GOV[x].split('،')[1]))},[]).filter(function(d){return d.t=='clinic'}):FAMOUS[S.tab]?FAMOUS[S.tab].map(function(f,i){var rr=R(f[0]);return {t:S.tab,g:f[1],n:f[0],a:f[2],r:(4.3+rr(7)/10).toFixed(1),c:500+rr(9000),hr:S.tab=='hospital'?'24 ساعة':'مواعيد الفرع',ph:'01XXXXXXXX',m:S.tab=='pharmacy'?[['بنادول','متوفر'],['أوجمنتين','متوفر']]:null}}):[]}
var as=a?[a]:GOV[g].split('،');var o=[];as.forEach(function(x){o=o.concat(gen(g,x))});return o}
function fill(){$('gov').innerHTML='<option value="">كل مصر (الأشهر)</option>'+Object.keys(GOV).map(function(g){return '<option>'+g+'</option>'}).join('');mk()}
function mk(){var g=$('gov').value;$('mk').innerHTML=g?'<option value="">كل المراكز والمناطق</option>'+GOV[g].split('،').map(function(m){return '<option>'+m+'</option>'}).join(''):'<option value="">—</option>';$('mk').disabled=!g}
function toast(t){var e=$('toast');e.textContent=t;e.style.display='block';setTimeout(function(){e.style.display='none'},2400)}
function btns(arr,key){return arr.map(function(a){return '<button data-k="'+key+'" data-v="'+a[0]+'" class="'+(S[key]==a[0]?'on':'')+'">'+a[1]+'</button>'}).join('')}
function share(n,a){var u='https://www.google.com/maps/search/'+encodeURIComponent(n+' '+a);
if(navigator.share){navigator.share({title:n,text:n+' – '+a,url:u}).catch(function(){})}else{try{navigator.clipboard.writeText(n+' – '+a+' '+u);toast('تم نسخ الموقع')}catch(e){toast(u)}}}
var CUR=[];
function render(){
$('nav').innerHTML=TABS.map(function(t){return '<button data-t="'+t[0]+'" class="'+(S.tab==t[0]?'on':'')+'">'+t[1]+'</button>'}).join('');
$('sub').innerHTML=S.tab=='hospital'?btns([['','الكل'],['gov','حكومي'],['pri','خاص']],'sec'):'';
var ch='';if(S.tab=='clinic'){ch=btns([['','كل التخصصات']].concat(SPECS.map(function(s){return [s,s]})),'spec');
if(S.spec&&SUBS[S.spec])ch+='<div style="width:100%;color:var(--mut);font-size:14px">'+(S.spec=='أطفال'?'اختار سن الطفل:':'تخصص فرعي:')+'</div>'+btns([['','الكل']].concat(SUBS[S.spec].map(function(s){return [s,s]})),'sub')}
$('chips').innerHTML=ch;
var q=S.q.trim(),L=pool().filter(function(d){if(d.t!=S.tab)return false;if(S.spec&&d.s!=S.spec)return false;if(S.sub&&(!d.sub||d.sub.indexOf(S.sub)<0))return false;if(S.sec&&d.g!=S.sec)return false;
if(q){var h=d.n+' '+(d.s||'')+' '+(d.sub||[]).join(' ')+' '+(d.m?d.m.map(function(x){return x[0]}).join(' '):'');if(h.indexOf(q)<0)return false}return true});
L.sort(function(a,b){return b.r-a.r||b.c-a.c});CUR=L;
var g=$('gov').value,a=$('mk').value,T=TABS.filter(function(t){return t[0]==S.tab})[0][1];
$('ttl').textContent=(g?T+' في '+(a?a+' – ':'')+g:(S.tab=='clinic'?'أشهر الأطباء':'أشهر '+T)+' في مصر')+' ('+L.length+')';
$('out').innerHTML=L.length?L.slice(0,S.lim).map(function(d,i){var doc=d.t=='clinic',ph=PHOTOS[d.n];
return '<div class="card'+(d.t=='pharmacy'?' p':'')+'"><div class="top3">'+(doc?(ph?'<img class="av" alt="" src="'+ph+'">':'<div class="av">'+d.n.replace('د. ','').charAt(0)+'</div>'):'')+'<div><h3>'+d.n+'</h3>'+(d.s?'<span class="tag">'+d.s+'</span> ':'')+(d.sub||[]).map(function(x){return '<span class="tag">'+x+'</span> '}).join('')+(d.g?'<span class="tag">'+(d.g=='gov'?'حكومي':'خاص')+'</span>':'')+'</div></div>'+
'<p class="stars">★ '+d.r+' <small style="color:var(--mut)">('+d.c+' تقييم)</small></p><p>'+d.a+'</p><p>المواعيد: '+d.hr+(d.fee?' – الكشف '+d.fee+' جنيه':'')+'</p>'+
(d.m?'<div class="meds">'+d.m.map(function(x,j){return '<div class="med"><span>'+x[0]+' <small>('+x[1]+')</small></span><button data-r="'+i+'" data-j="'+j+'">احجز</button></div>'}).join('')+'</div>':'')+
'<div class="acts"><a href="tel:'+d.ph+'">اتصل</a><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/'+encodeURIComponent(d.n+' '+d.a)+'">الموقع على الخريطة</a><button data-s="'+i+'">مشاركة</button>'+(doc?'<button data-b="'+i+'">احجز كشف</button>':'')+'</div></div>'}).join(''):'<div class="empty">مفيش نتائج، جرّب بحث تاني.</div>';
$('more').hidden=L.length<=S.lim}
document.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var d=b.dataset;
if(d.t){S.tab=d.t;S.spec='';S.sub='';S.sec='';S.lim=18;render()}
else if(d.k){S[d.k]=d.v;if(d.k=='spec')S.sub='';S.lim=18;render()}
else if(d.s){share(CUR[d.s].n,CUR[d.s].a)}
else if(d.r){toast('تم طلب حجز '+CUR[d.r].m[d.j][0]+' من '+CUR[d.r].n)}
else if(d.b){toast('تم إرسال طلب حجز عند '+CUR[d.b].n)}});
$('q').addEventListener('input',function(e){S.q=e.target.value;S.lim=18;render()});
$('gov').onchange=function(){mk();S.lim=18;render()};$('mk').onchange=function(){S.lim=18;render()};
$('more').onclick=function(){S.lim+=18;render()};
$('bp').onclick=function(){$('m1').hidden=true};
function doc(){$('m1').hidden=true;$('m2').hidden=false}
$('bd').onclick=doc;$('bd2').onclick=doc;$('cl').onclick=function(){$('m2').hidden=true};
fill();render();