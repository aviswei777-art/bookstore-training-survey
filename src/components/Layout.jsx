import { ChevronLeft } from 'lucide-react';
const labels=['首頁','選擇店別','法律課程','包裝課程','職類調查','完成'];
export function Logo(){return <div className="logo" aria-label="誠品 eslite"><span>誠品</span><small>eslite</small></div>}
export default function Layout({step,title,description,children,onBack}){
 return <div className="min-h-screen"><header><Logo/><div className="header-tag">門市人才發展</div></header><main>
  <nav className="progress" aria-label={`問卷進度，第 ${step} 步，共 6 步`}><div className="progress-top"><span>填寫進度</span><strong>{step} / 6</strong></div><div className="track"><div style={{width:`${((step-1)/5)*100}%`}}/></div><ol>{labels.map((x,i)=><li key={x} className={i+1<=step?'active':''}><i>{i+1<step?'✓':i+1}</i><span>{x}</span></li>)}</ol></nav>
  <section className="card">{onBack&&<button className="back-link" onClick={onBack}><ChevronLeft size={18}/>返回上一頁</button>}<p className="eyebrow">SEPTEMBER TRAINING SURVEY</p><h1>{title}</h1>{description&&<div className="description">{description}</div>}{children}</section>
 </main><footer>誠品生活股份有限公司｜人才發展部</footer></div>
}
