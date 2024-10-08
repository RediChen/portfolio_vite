import PropTypes from "prop-types";
import s from './index.module.scss'
import { IoCaretUpOutline } from "react-icons/io5";

const Panel = ({ setOpenPortfolio = () => { } }) => {
  const List = [
    [
      '古法卜卦器',
      'https://codepen.io/dbyyjxyl/pen/NWmYEPV'
    ],
    [
      '井字棋',
      'https://redichen.github.io/tictactoe_basic/'
    ],
    [
      'TS 與路由練習',
      'https://redichen.github.io/web_remake_2Ustyle/'
    ],
    [
      '原生 JS 綜合練習',
      'https://redichen.github.io/multipleJsExercises/'
    ],
    [
      '網頁切版練習',
      'https://redichen.github.io/ninjaMailSlicing/'
    ],
    [
      '網站切版練習',
      'https://redichen.github.io/WebPrac_SSClinic_redesign/'
    ],
  ];

  return (
    <section className="h-100">
      <div className="row h-100">
        <main className={['col-12 col-md-10 col-lg-11'].join(' ')}>
          <div className="row h-100">
            {List.map((data) => (
              <div key={data[0]} className={['col-12 col-md-6 col-lg-4 h-50', s.tile].join(' ')}>
                <a href={data[1]} target="_blank" rel="noopener noreferrer">
                  <div className={s.card}>
                    <h3>{data[0]}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </main>
        <aside className={['col-12 col-md-2 col-lg-1', s.aside].join(' ')}>
          <button onClick={() => setOpenPortfolio(false)}>
            <i><IoCaretUpOutline /></i>
            返回
          </button>
          <h2>作品集</h2>
          <div></div>
        </aside>
      </div>
    </section>
  )
}

Panel.propTypes = {
  setOpenPortfolio: PropTypes.func
}

export default Panel;