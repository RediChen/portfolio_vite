import PropTypes from "prop-types";
import s from './core.module.scss';
import { IoCaretDownOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Core = ({ setOpenPortfolio = () => { } }) => {
  return (
    <article className={s.container}>
      <figure className={s.figure}>
        <div className='img-wrap-w100'>
          <img
            src="/portfolio_vite/avatar.jpg"
            alt="personal avatar"
          />
        </div>
        <caption className={s.caption}>
          <h1><span>陳</span><span>致</span></h1>
        </caption>
        <a href="https://github.com/RediChen" target="_blank"
          className={s.ghBtn}
          title="個人的 GitHub"
        >
          <FaGithub />
        </a>
      </figure>
      <article className={s.intro}>
        <h3>簡介</h3>
        <p>從數學老師轉職網頁工程師。注重技術的理解與活用，有足以自學的搜尋與語言能力。熟悉 React 與 Next 框架。</p>
      </article>

      {/* abs pos below */}
      <button className={s.portfolioBtn} onClick={() => setOpenPortfolio(true)}>
        <h3>作品集</h3>
        <i><IoCaretDownOutline /></i>
      </button>
    </article>
  )
}

Core.propTypes = {
  setOpenPortfolio: PropTypes.func
}

export default Core;
