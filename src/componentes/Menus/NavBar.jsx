import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import styles from './NavBar.module.css'
import logo from '../../assets/imagens/logo_azul_minusc.png'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Outlet />
      <Link to="/">
        <img src={logo} alt="Casa da Graça" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">SOBRE NÓS</Link>
        </li>
        <li className={styles.item}>
          <Link to="/midia">MULTIMÍDIA</Link>
        </li>
        <li className={styles.item}>
          <Link to="/sirva">SIRVA</Link>
        </li>
        <li className={styles.item}>
          <Link to="/agenda">AGENDA</Link>
        </li>
        <li className={styles.item}>
          <Link to="/doe">DOE</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
