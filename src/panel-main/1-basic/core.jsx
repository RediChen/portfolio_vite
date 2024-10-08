import s from './core.module.scss';
import { FaSortDown } from "react-icons/fa6";

export default function Core() {
  return (
    <article className={['h-100', s.container].join(' ')}>
      <figure className={s.figure}>
        <div className='img-wrap-w100'>
          <img
            src="../../../public/avatar.jpg"
            alt="personal avatar" />
        </div>
        <caption className={s.caption}>
          <h1><span>陳</span><span>致</span></h1>
        </caption>
      </figure>
      <button>GitHub Link</button>
      <div className={s.portfolioBtnBox}>
        <h3>作品集</h3>
        <button><FaSortDown /></button>
      </div>
    </article>
  )
}
