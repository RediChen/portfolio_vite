import { useState } from 'react'
import s from './index.module.scss'
import Skill from './2-skills/skill';

export default function Panel() {
  const [tabNum, setTabNum] = useState(1);

  return (
    <section className="h-100">
      <div className="h-100 d-flex flex-row">
        <div className={s.bookmarkWrap}>
          <button
            className={['shadow-lg', s.bookmark, tabNum === 1 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(1)}>
            基本
          </button>
          <button
            className={[s.bookmark, tabNum === 2 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(2)}>
            技術棧
          </button>
          <button
            className={[s.bookmark, tabNum === 3 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(3)}>
            學經歷
          </button>
        </div>
        <div className={s.main}>
          {tabNum === 1 && (
            <article>11111</article>
          )}
          {tabNum === 2 && (
            <Skill />
          )}
          {tabNum === 3 && (
            <article>33333</article>
          )}
        </div>
      </div>
    </section>
  )
}
