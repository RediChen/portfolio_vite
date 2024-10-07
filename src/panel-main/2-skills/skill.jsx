import { TbCodeCircleFilled } from "react-icons/tb";
import s from './skill.module.scss';

const Skill = () => {
  const list = [
    [
      '前端基礎',
      'HTML5',
      'CSS3',
      'SCSS',
      'RWD',
      'Bootstraps 5 (含客製化)'
    ],
    [
      'JavaScript',
      'ES6+',
      '操作原生 Date 物件',
      <>非同步函數設計<br />Promise, async, await</>,
      'Axios 串接 API',
      'jQuery'
    ],
    [
      'React',
      'Vite, Next.js',
      'hooks',
      <>依 design guideline<br />設計系統式的元件</>
    ],
    [
      '後端基礎',
      'Node.js, Express.js',
      'RESTful API 的設計與串接',
      'Bearer token, jwt',
      '串接第三方 API',
      '串接綠界金流'
    ],
    [
      '資料庫',
      'MySQL / MariaDB',
      <>關聯資料庫設計<br />（RDBMS、正規化）</>
    ],
    [
      '開發工具',
      'Git, GitHub',
      'ESLint, Prettier',
      'JSDoc',
      'Postman'
    ]
  ];

  return (
    <article className={['h-100', s.container].join(' ')}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mw-100 h-100 m-0">
        {list.map((arr, i) => (
          <div key={i} className={["col", s.tile].join(' ')}>
            <div className={s.membrane}>
              <h2 className={s.h2}>{arr[0]}</h2>
              <ul className={s.list}>
                {arr.slice(1).map((item, j) => (
                  <li key={j} className={s.listItem}>
                    <i className={s.icon}><TbCodeCircleFilled /></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Skill;