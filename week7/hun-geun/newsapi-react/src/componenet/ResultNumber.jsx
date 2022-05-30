import React from 'react'
import style from './ResultNumber.module.css'

export default function ResultNumber({ num }) {
  return (
    <div className={style.resultNumber}>About {num} results</div>
  )
}
