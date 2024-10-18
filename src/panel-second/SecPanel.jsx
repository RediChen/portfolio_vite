import PropTypes from "prop-types";
import s from './index.module.scss'
import { IoCaretUpOutline } from "react-icons/io5";

const Panel = ({ setOpenPortfolio = () => { } }) => {
  const PATH = '/portfolio_vite';
  const List = [
    [
      ['古法卜卦器', 'Bootstrap, JavaScript'],
      'https://codepen.io/dbyyjxyl/full/NWmYEPV',
      `${PATH}/web_bugua.png`
    ],
    [
      ['井字棋', 'React'],
      'https://redichen.github.io/tictactoe_basic/',
      `${PATH}/web_ooxx.png`
    ],
    [
      ['TS 與路由練習', 'Typescript, React Router'],
      'https://redichen.github.io/web_remake_2Ustyle/',
      `${PATH}/web_ts.png`
    ],
    [
      ['原生 JS 綜合練習', 'Bootstrap, JavaScript'],
      'https://redichen.github.io/multipleJsExercises/',
      `${PATH}/web_multi.png`
    ],
    [
      ['網頁切版練習', 'Bootstrap, SCSS'],
      'https://redichen.github.io/ninjaMailSlicing/',
      `${PATH}/web_ninja.png`
    ],
    [
      ['網站切版重新設計', 'HTML, SCSS, JavaScript'],
      'https://redichen.github.io/WebPrac_SSClinic_redesign/',
      `${PATH}/web_clinic.png`
    ],
  ];

  return (
    <section className="h-100">
      <div className="row h-100">
        <main className={['col-12 col-md-10 col-lg-11'].join(' ')}>
          <div className="row h-100">
            {List.map((data) => (
              <div key={data[0]}
                className={['col-12 col-md-6 col-lg-4 h-50 p-0', s.tile].join(' ')}
                style={{ backgroundImage: 'url(' + data[2] + ')' }}
              >
                <a
                  href={data[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.card}
                >
                  <h3>{data[0][0]}</h3>
                  <h6>{data[0][1]}</h6>
                </a>
              </div>
            ))}
          </div>
        </main>
        <aside className={['col-12 col-md-2 col-lg-1', s.aside].join(' ')}>
          <button onClick={() => setOpenPortfolio(false)}>
            <i className={s.backIcon}><IoCaretUpOutline /></i>
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