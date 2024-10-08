import PropTypes from "prop-types";
import s from './core.module.scss';
import { IoCaretDownOutline } from "react-icons/io5";

const Core = ({ setOpenPortfolio = () => { } }) => {
  return (
    <article className={['h-100', s.container].join(' ')}>
      <figure className={s.figure}>
        <div className='img-wrap-w100'>
          <img
            src="/avatar.jpg"
            alt="personal avatar"
          />
        </div>
        <caption className={s.caption}>
          <h1><span>陳</span><span>致</span></h1>
        </caption>
      </figure>
      <button>GitHub Link</button>
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
