"use client";

import { useEffect, useRef, useState } from "react";
import { BatteryCharging, Check, Cpu, Fingerprint, RotateCcw, ShieldCheck, Tablet } from "lucide-react";

const chapters = [
  { label: "Başlangıç", start: 0, icon: Tablet, title: "Bütün fikirleriniz.\nTek bir ekranda.", text: "Bir çizim, bir sunum, yeni bir fikir. Gününüzün bir parçası olan iPad’in hikâyesini kaydırarak keşfedin." },
  { label: "Darbe", start: .16, icon: ShieldCheck, title: "Bir anlık kaza.\nHikâyenin sonu değil.", text: "Bir darbe, çatlayan bir cam. Yarım kalan işlerinize dönmeniz için önce hasarı birlikte değerlendirelim." },
  { label: "Ekran", start: .31, icon: Fingerprint, title: "Camın ötesine\nbakıyoruz.", text: "Görüntü, dokunmatik ve bağlantılar. Yalnızca çatlağa değil, ekranın bütününe bakarak gereken işlemi belirliyoruz." },
  { label: "İç yapı", start: .48, icon: Cpu, title: "Büyük bir ekran.\nİnce ince uzmanlık.", text: "Batarya, güç hattı ve anakart. Gereksiz parça değişimi yapmadan, sorunun kaynağını dikkatle inceliyoruz." },
  { label: "Onarım", start: .67, icon: BatteryCharging, title: "Her parça,\nyerini buluyor.", text: "İşlem kapsamını ve fiyatı onayladığınızda onarıma geçiyoruz. Bağlantıları tamamlıyor, ekranı özenle yerleştiriyoruz." },
  { label: "Yeniden", start: .9, icon: Check, title: "Tanıdık iPad’iniz.\nYepyeni bir başlangıç.", text: "Görüntü, dokunmatik ve şarj kontrolleri tamamlanır. iPad’inizle yarım kalanlara devam etmeniz için çalışıyoruz." },
];
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ramp = (p: number, a: number, b: number) => { const t = clamp((p-a)/(b-a)); return t*t*(3-2*t); };

function Panel({ replacement = false }: { replacement?: boolean }) {
  const id = replacement ? "ips-new" : "ips-old";
  return <svg viewBox="0 0 600 420" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-rim`} x2="600" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#e1e8f1"/><stop offset=".35" stopColor="#78899e"/><stop offset=".7" stopColor="#dce4ef"/><stop offset="1" stopColor="#607087"/></linearGradient>
      <linearGradient id={`${id}-screen`} x2="560" y2="390" gradientUnits="userSpaceOnUse"><stop stopColor="#11337b"/><stop offset=".5" stopColor="#4766e0"/><stop offset="1" stopColor="#a2b7ff"/></linearGradient>
      <linearGradient id={`${id}-ribbon`} x2="550" y2="350" gradientUnits="userSpaceOnUse"><stop stopColor="#bbecff"/><stop offset=".5" stopColor="#8aaeff"/><stop offset="1" stopColor="#7361df"/></linearGradient>
      <clipPath id={`${id}-clip`}><rect x="18" y="18" width="564" height="384" rx="17"/></clipPath>
    </defs>
    <rect x="1" y="1" width="598" height="418" rx="31" fill={`url(#${id}-rim)`} stroke="#d4dfed" strokeWidth="2"/>
    <rect x="5" y="5" width="590" height="410" rx="28" fill="#111a2c"/>
    <g clipPath={`url(#${id}-clip)`}>
      <rect x="18" y="18" width="564" height="384" fill={`url(#${id}-screen)`}/>
      <path d="M-90 390C70-80 610 30 435 250S95 535 185 205 710-55 695 360" stroke={`url(#${id}-ribbon)`} strokeWidth="70"/>
      <path d="M-90 390C70-80 610 30 435 250S95 535 185 205 710-55 695 360" stroke="#e4f5ff" strokeWidth="1.5" opacity=".5"/>
      <path d="M30-60 550 440" stroke="white" strokeWidth="110" opacity=".04"/>
      <text x="59" y="99" fill="white" fontSize="41" fontWeight="500" letterSpacing="-2">{replacement ? "Yeniden." : "Her şey mümkün."}</text>
      <text x="61" y="128" fill="#e0ecff" fontSize="14">{replacement ? "Kaldığınız yerden devam." : "Fikirlerinize yer açın."}</text>
      <rect x="183" y="346" width="234" height="41" rx="14" fill="#e4eeff" fillOpacity=".25" stroke="white" strokeOpacity=".2"/>
      {["#e6efff","#a8d6ff","#9af0df","#ffd2ae","#c8b6ff"].map((c,i)=><rect key={c} x={198+i*42} y="353" width="28" height="28" rx="7" fill={c}/>)}
    </g>
    <circle cx="300" cy="10" r="3" fill="#364966"/>
    {!replacement && <svg className="ips-cracks" x="18" y="18" width="564" height="384" viewBox="0 0 564 384">
      <g stroke="#07142d" strokeWidth="2.5" opacity=".6">{fractures.map(d=><path key={d} d={d} pathLength="1"/>)}</g>
      <g stroke="#eaf5ff" strokeWidth="1" strokeLinejoin="bevel">{fractures.map(d=><path key={d} d={d} pathLength="1"/>)}</g>
      <circle cx="368" cy="214" r="8" fill="#e3f4ff" fillOpacity=".45"/>
    </svg>}
  </svg>;
}

const fractures = [
  "M368 214 345 184 351 161 318 131 324 104 293 74 285 38 262 0",
  "M368 214 395 187 401 162 432 149 451 113 490 97 518 63 564 49",
  "M368 214 407 219 432 206 464 226 491 218 526 240 564 235",
  "M368 214 379 245 364 274 389 301 384 329 407 356 413 384",
  "M368 214 333 239 319 268 285 281 268 311 227 325 204 359 176 384",
  "M368 214 327 206 301 222 273 202 241 210 204 187 166 193 127 172 90 182 42 161 0 171",
  "M351 161 380 142 389 118 414 96 421 63 449 40 447 0",
  "M319 268 290 255 256 267 230 252 202 263 175 244 144 251",
  "M318 131 286 139 268 114 237 103 218 76 181 66 157 34 119 24 100 0",
  "M432 206 446 179 472 166 480 143 513 133 543 105 564 106",
  "M389 301 423 287 449 304 481 296 505 328 537 341 564 367",
  "M333 239 342 268 332 300 349 326 340 358 350 384",
];

function Hardware({ part }: { part: "body" | "battery" | "board" }) {
  return <svg viewBox="0 0 600 420" fill="none" aria-hidden="true">
    {part === "body" ? <>
      <defs><linearGradient id="ips-body-metal" x2="600" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#e4ebf2"/><stop offset=".5" stopColor="#93a3b8"/><stop offset="1" stopColor="#dce4f0"/></linearGradient></defs>
      <rect x="1" y="1" width="598" height="418" rx="31" fill="url(#ips-body-metal)" stroke="#72839a" strokeWidth="2"/>
      <rect x="10" y="10" width="580" height="400" rx="25" fill="#9eacbc" stroke="#f0f5fc"/>
      <rect x="25" y="26" width="550" height="368" rx="17" fill="#718299"/>
      <path d="M40 57H560M40 363H560" stroke="#bdc9d9" strokeWidth="2"/>
      {[35,565].flatMap(x=>[38,110,210,310,382].map(y=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="4" fill="#e3eaf5"/><path d={`M${x-2} ${y}h4`} stroke="#657a96"/></g>))}
      {[40,500].map(x=><g key={x}><rect x={x} y="37" width="60" height="22" rx="6" fill="#28394f"/>{[0,1,2,3,4,5].map(i=><path key={i} d={`M${x+8+i*9} 43v10`} stroke="#647b98" strokeWidth="3"/>)}</g>)}
      <rect x="278" y="400" width="44" height="8" rx="4" fill="#33455e"/>
      <circle cx="554" cy="83" r="17" fill="#29384d" stroke="#d5dfec" strokeWidth="3"/><circle cx="554" cy="83" r="9" fill="#0e2039"/><circle cx="551" cy="80" r="3" fill="#5f9dc0"/>
    </> : part === "battery" ? <>
      {[0,1].map(i=><g key={i}><rect x={65+i*199} y="82" width="185" height="267" rx="12" fill="#202f45" stroke="#536782" strokeWidth="2"/><path d={`M${73+i*199} 100v230`} stroke="#8896ab" strokeOpacity=".25"/><text x={157+i*199} y="207" fill="#bdcadd" textAnchor="middle" fontSize="22">Li-ion</text><text x={157+i*199} y="231" fill="#7f94b1" textAnchor="middle" fontSize="10" letterSpacing="2">RECHARGEABLE</text>{[258,267,276].map(y=><path key={y} d={`M${112+i*199} ${y}h90`} stroke="#5a708e" strokeWidth="2"/>)}</g>)}
      <path d="M250 112h22v-17h14" stroke="#d3a85f" strokeWidth="9"/>
    </> : <>
      <path d="M477 66h51v53h22v209h-21v31h-57V244h-14V111h19Z" fill="#234943" stroke="#739c8a" strokeWidth="2"/>
      {[100,170,253].map((y,i)=><g key={y}><rect x="478" y={y} width="53" height="55" rx="4" fill="#adc1cc"/><rect x="484" y={y+6} width="41" height="43" rx="3" fill="#2b3c4d"/>{Array.from({length:8},(_,j)=><path key={j} d={`M473 ${y+5+j*6}h5m53 0h5`} stroke="#dec08a" strokeWidth="2"/>)}</g>)}
      <text x="505" y="204" fill="#c2d6e2" fontSize="15" textAnchor="middle">CK</text><path d="M502 328v42H302v24" stroke="#c89a4e" strokeWidth="11"/><path d="M516 80v238" stroke="#a1b99d" strokeWidth="1"/>
    </>}
  </svg>;
}

export function IpadRepairStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [chapter,setChapter] = useState(0);
  const [reduced,setReduced] = useState(false);
  const manualProgress = useRef<((p: number)=>void)|null>(null);

  useEffect(()=>{
    const section = sectionRef.current;
    if (!section) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame=0, current=0, target=0, visible=false, lastChapter=-1;
    const assembly=section.querySelector<HTMLElement>(".ips-assembly")!;
    const old=section.querySelector<HTMLElement>(".ips-old")!;
    const battery=section.querySelector<HTMLElement>(".ips-battery")!;
    const board=section.querySelector<HTMLElement>(".ips-board")!;
    const replacement=section.querySelector<HTMLElement>(".ips-replacement")!;
    const crack=section.querySelector<HTMLElement>(".ips-cracks")!;
    const progress=section.querySelector<HTMLElement>(".ips-progress-fill")!;
    const draw=(p:number)=>{
      const spread=ramp(p,.27,.49)*(1-ramp(p,.68,.89));
      const lift=ramp(p,.25,.4);
      const recoil=Math.sin(ramp(p,.135,.175)*Math.PI)* (1-ramp(p,.175,.21));
      assembly.style.transform=`rotateX(${24+spread*15+recoil*4}deg) rotateY(${-9+Math.sin(p*Math.PI)*7}deg) rotateZ(${-12+spread*5-recoil*2}deg) translateY(${recoil*5}px)`;
      old.style.transform=`translate3d(${-lift*35}px,${-lift*35}px,${12+lift*145}px)`;
      old.style.opacity=String(1-ramp(p,.4,.49));
      crack.style.opacity=String(ramp(p,.145,.175));
      crack.style.setProperty("--crack",String(1-ramp(p,.145,.205)));
      battery.style.transform=`translate3d(${-spread*20}px,0,${2+spread*58}px)`;
      board.style.transform=`translate3d(${spread*40}px,0,${4+spread*90}px)`;
      replacement.style.transform=`translate3d(${(1-ramp(p,.7,.91))*35}px,${(1-ramp(p,.7,.91))*25}px,${12+(1-ramp(p,.7,.91))*175}px)`;
      replacement.style.opacity=String(ramp(p,.64,.71));
      progress.style.transform=`scaleX(${p})`;
      section.dataset.progress=p.toFixed(4);
      const index=chapters.reduce((v,c,i)=>p>=c.start?i:v,0);
      if(index!==lastChapter){lastChapter=index;section.dataset.chapter=String(index);setChapter(index);}
    };
    const tick=()=>{
      frame=0;
      if(!visible||document.hidden||media.matches)return;
      current+= (target-current)*.14;
      if(Math.abs(current-target)<.00015)current=target;
      draw(current);
      if(current!==target)frame=requestAnimationFrame(tick);
    };
    const measure=()=>{
      if(!visible||media.matches)return;
      const box=section.getBoundingClientRect();
      target=clamp(-box.top/Math.max(1,section.offsetHeight-innerHeight));
      if(!frame&&!document.hidden)frame=requestAnimationFrame(tick);
    };
    const preference=()=>{setReduced(media.matches);cancelAnimationFrame(frame);frame=0;if(media.matches){current=target=0;draw(0)}else measure();};
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)measure();else{cancelAnimationFrame(frame);frame=0}},{rootMargin:"100px"});
    observer.observe(section);
    manualProgress.current=(p)=>{current=target=p;draw(p)};
    preference();draw(0);
    window.addEventListener("scroll",measure,{passive:true});
    window.addEventListener("resize",measure,{passive:true});
    document.addEventListener("visibilitychange",measure);
    media.addEventListener("change",preference);
    return()=>{observer.disconnect();cancelAnimationFrame(frame);manualProgress.current=null;window.removeEventListener("scroll",measure);window.removeEventListener("resize",measure);document.removeEventListener("visibilitychange",measure);media.removeEventListener("change",preference);};
  },[]);

  const jump=(index:number)=>{
    const section=sectionRef.current;if(!section)return;
    const p=index===0?0:Math.min(1,chapters[index].start+.025);
    if(reduced){manualProgress.current?.(p);return;}
    window.scrollTo({top:window.scrollY+section.getBoundingClientRect().top+p*(section.offsetHeight-innerHeight),behavior:"smooth"});
  };
  const active=chapters[chapter], Icon=active.icon;
  return <section id="ipad-hikayesi" ref={sectionRef} className={`ips-story ${reduced?"ips-reduced":""}`} data-chapter="0" aria-label="iPad’in onarım hikâyesi">
    <div className="ips-sticky"><div className="ip-container ips-inner">
      <div className="ips-top"><span>HER DETAYINA ÖZEN.</span><span>iPAD’İN YENİDEN BAŞLAMA HİKÂYESİ</span></div>
      <div className="ips-layout"><div className="ips-copy"><span className="ips-icon"><Icon size={25}/></span><p className="ip-eyebrow">{active.label.toLocaleUpperCase("tr-TR")} · CEP KAPINDA</p><h2>{active.title.split("\n").map((line,i)=><span key={line} className={i?"ips-muted":""}>{line}</span>)}</h2><p className="ips-description">{active.text}</p><a href="#fiyat" className="ip-quiet-link">iPad’iniz için onarımı planlayalım</a></div>
      <div className="ips-stage" role="img" aria-label={`${active.label}: iPad’in ekran, batarya ve anakart katmanlarını gösteren temsili onarım animasyonu`}><div className="ips-halo"/><span className="ips-watermark" aria-hidden="true">Yeniden.</span><div className="ips-device"><div className="ips-shadow"/><div className="ips-assembly"><div className="ips-layer ips-body"><Hardware part="body"/></div><div className="ips-layer ips-battery"><Hardware part="battery"/></div><div className="ips-layer ips-board"><Hardware part="board"/></div><div className="ips-layer ips-old"><Panel/></div><div className="ips-layer ips-replacement"><Panel replacement/></div></div></div><span className="ips-caption">{chapter===5?"Kontroller tamam. Yeniden hazır.":"Temsili iPad onarım animasyonu."}</span></div></div>
      <div className="ips-bottom"><div className="ips-tabs" role="group" aria-label="iPad onarım hikâyesinin aşamaları">{chapters.map((c,i)=><button key={c.label} type="button" aria-pressed={chapter===i} onClick={()=>jump(i)}>{c.label}</button>)}</div><button className="ips-replay" type="button" onClick={()=>jump(0)} aria-label="iPad hikâyesini baştan oynat"><RotateCcw size={17}/></button></div>
      <p className="ips-hint">{reduced?"Aşamaları düğmelerle keşfedin.":"Keşfetmek için kaydırın veya bir aşama seçin."}</p><div className="ips-progress"><div className="ips-progress-fill"/></div>
    </div></div>
  </section>;
}
