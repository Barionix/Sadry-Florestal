import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Container.module.css';

function Container(props) {
  return (
    <div className={`${styles.cont} ${styles[props.customClass]}`}>
      <Outlet />
    </div>
  )


}
export default Container
