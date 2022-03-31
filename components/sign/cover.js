import { useState } from 'react';
import css from "/styles/css/Login.module.css"

export default function Cover({onClick}) {

  const [side, setSide] = useState(false);
  const switchSide = () => {
    if (onClick()) setSide(!side);
  }

  return (
    <div style={{height: "100%"}}>
      {side ? <div id="1" onClick={switchSide} className={`${css.cover} ${css.left}`}/> : null}
      {side ? null : <div id="2" onClick={switchSide} className={`${css.cover} ${css.right} ${css.reverse}`}/>}
    </div>
    
  )
}
