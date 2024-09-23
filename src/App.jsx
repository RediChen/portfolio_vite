import { useState } from 'react'
import s from './App.module.scss'
import MainPanel from './panel-main/MainPanel'
import SecPanel from './SecPanel'

function App() {
  const [openPortfolio, setOpenPortfolio] = useState(false)
  const pnClass = openPortfolio ? s.openState : '';

  return (
    <>
      <div className={s.fullScreen}>
        <button
          className={s.switchBtn}
          onClick={() => setOpenPortfolio(!openPortfolio)}>
          portfolio is {openPortfolio ? 'open' : 'close'}
        </button>
      </div>
      <div className={['container-fluid', s.panel, s.panel_1, pnClass].join(' ')}>
        <MainPanel />
      </div>
      <div className={['container-fluid', s.panel, s.panel_2, pnClass].join(' ')}>
        <SecPanel />
      </div>
    </>
  )
}

export default App
