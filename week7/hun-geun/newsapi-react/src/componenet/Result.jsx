import React from 'react'
import style from './Result.module.css';

export default function Result({ news }) {
    const newsLi = news.map( data => (
        <li>
          <a href={data.url}>
              <img style={{maxHeight: 80, width: 80, objectFit: "contain"}} 
                src={data.urlToImage}
                alt='newsimg'
              />
          </a>
          <div className={style.info}>
              <span className={style.title}>
                  <a href={data.url}>
                    {data.title}
                  </a>
              </span>
              <span className="author">
                {data.author}
              </span>
              <span className="publishedAt">
                {data.publishedAt}
              </span>
          </div>
        </li>
    ))
  return (
    <div className={style.result}>
        <ul className={style.news}>
          {newsLi}
        </ul>
    </div>
  )
}
