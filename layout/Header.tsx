import React from "react";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import { HEADER_HEIGHT } from "./constants";
import styles from './Header.module.css';

console.log(styles)

const navLinks = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/words',
    title: 'All words'
  }
]

export const Header = () => {
  return (
    <AppBar sx={{ height: HEADER_HEIGHT }}>
      <nav>
        <ul className={styles.list}>
          {navLinks.map(({ href, title }) => (
            <li key={href} className={styles.item}>
              <Link href={href} className={styles.link}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </AppBar>
  )
}