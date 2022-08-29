import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Casa da Graça - Pelotas/RS</span> &copy; 2022 - Rua Prudente de Moraes, 259 - Fragata
          
      </p>
    </footer>
  )
}

export default Footer
