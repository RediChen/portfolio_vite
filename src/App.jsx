import { useState } from 'react'
import s from './App.module.scss'
import MainPanel from './panel-main/MainPanel'
import SecPanel from './panel-second/SecPanel'

function App() {
  const [openPortfolio, setOpenPortfolio] = useState(false)
  const pnClass = openPortfolio ? s.openState : '';

  return (
    <>
      <div className={s.fullScreen}>
        <button
          className={s.switchBtn}
          onClick={() => setOpenPortfolio(!openPortfolio)}>
          作品集 {openPortfolio ? '關閉' : 'OPEN'}
        </button>
      </div>
      <div className={['container-fluid', s.panel, s.panel_1, pnClass].join(' ')}>
        <MainPanel setOpenPortfolio={(v) => setOpenPortfolio(v)} />
      </div>
      <div className={['container-fluid', s.panel, s.panel_2, pnClass].join(' ')}>
        <SecPanel setOpenPortfolio={(v) => setOpenPortfolio(v)} />
      </div>
    </>
  )
}

export default App
