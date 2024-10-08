import PropTypes from "prop-types";
import { useState } from 'react'
import s from './index.module.scss'
import Skill from './2-skills/skill';
import Core from './1-basic/core';

const Panel = ({ setOpenPortfolio = () => { } }) => {
  const [tabNum, setTabNum] = useState(1);
  const [hoverNum, setHoverNum] = useState(0);

  return (
    <section className="h-100">
      <div className="h-100 d-flex flex-row">
        <div className={s.bookmarkWrap}>
          <button
            className={[s.bookmark, tabNum === 1 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(1)}
            onMouseEnter={() => setHoverNum(1)}
            onMouseLeave={() => setHoverNum(0)}
          >
            基本
          </button>
          <button
            className={[s.bookmark, tabNum === 2 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(2)}
            onMouseEnter={() => setHoverNum(2)}
            onMouseLeave={() => setHoverNum(0)}
          >
            技術棧
          </button>
          <button
            className={[s.bookmark, tabNum === 3 ? s.active : ''].join(' ')}
            onClick={() => setTabNum(3)}
            onMouseEnter={() => setHoverNum(3)}
            onMouseLeave={() => setHoverNum(0)}
          >
            學經歷
          </button>
        </div>
        <div className={[s.main, hoverNum === tabNum ? s.active : ''].join(' ')}>
          {tabNum === 1 && (
            <Core setOpenPortfolio={(v) => setOpenPortfolio(v)} />
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

Panel.propTypes = {
  setOpenPortfolio: PropTypes.func
}

export default Panel;