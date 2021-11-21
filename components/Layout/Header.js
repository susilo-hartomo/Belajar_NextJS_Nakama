import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/layout/header.module.css'

// images
import Logo from '../../assets/image/global/logo.png'

export default function Header() {
  return (
    <header className={styles.header} >
      <nav className="container">
        <div className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={Logo} alt="logo" />
              <span>Hounter</span>
            </a>
          </Link>

          <ul className={styles.listWrapper}>
            <li className={styles.navItem}>
              <Link href="/about-us">
                <a >About Us</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/article">
                <a >Article</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/property">
                <a >
                  Property
                  <i className=""></i>
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/auth/sign-up">
                <a >Sign Up!</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  )
}

