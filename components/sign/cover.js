import { useState } from 'react';
import css from "/styles/css/Login.module.css"

export default function Cover({onClick}) {

  const [side, setSide] = useState(false);
  const switchSide = () => {
    if (onClick()) setSide(!side);
  }

  return (
    <>
      {side ? <div onClick={switchSide} className={`${css.cover} ${css.left}`}/> : null}
      {side ? null : <div onClick={switchSide} className={`${css.cover} ${css.right} ${css.reverse}`}/>}
    </>
    
  )
}
