import { useState } from 'react'
import s from './panel-main.module.scss'

export default function Panel() {
  const [tabNum, setTabNum] = useState(1);

  return (
    <section className={s.section}>
      <h2 className='bg-primary'>主面板</h2>
      <div>
        <button
          className='btn btn-primary'
          onClick={() => setTabNum(1)}>
          本體
        </button>
        <button
          className='btn btn-primary'
          onClick={() => setTabNum(2)}>
          技能
        </button>
      </div>
      <div>
        {tabNum === 1 && (
          <article>11111</article>
        )}
        {tabNum === 2 && (
          <article>22222</article>
        )}
        {tabNum === 3 && (
          <article>33333</article>
        )}
      </div>
    </section>
  )
}
