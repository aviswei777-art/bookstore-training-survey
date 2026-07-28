import { Fragment } from 'react';
import { ChevronLeft } from 'lucide-react';
const labels=['首頁','選擇店別','法律課程','包裝課程','職類調查','完成'];
export function Logo(){return <img className="logo" src="/eslite-logo.png" alt="誠品 eslite"/>}
export default function Layout({step,title,description,children,onBack}){
 return <div className="min-h-screen"><header><Logo/></header><main>
  <nav className="progress" aria-label={`問卷進度，第 ${step} 步，共 6 步`}><ol>{labels.map((x,i)=><Fragment key={x}><li className={i+1<=step?'active':''}><i>{i+1<step?'✓':i+1}</i><span>{x}</span></li>{i<labels.length-1&&<li className="progress-dots" aria-hidden="true"><i/><i/><i/></li>}</Fragment>)}</ol></nav>
  <section className="card">{onBack&&<button className="back-link" onClick={onBack}><ChevronLeft size={18}/>返回上一頁</button>}<h1>{title}</h1>{description&&<div className="description">{description}</div>}{children}</section>
 </main><footer>人力資源處｜學習發展部</footer></div>
}
