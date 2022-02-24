import Container from '@mui/material/Container';
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';

export default function Cover(props) {

  return (
    <div onClick={() => {props.onClick()}} className={props.className}>
    </div>  
  )
}
