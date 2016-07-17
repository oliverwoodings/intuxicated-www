import React from 'react'
import Panel from '../../components/Panel'
import styles from './Header.css'

export default function Header () {
  return (
    <Panel className={styles.root} noOverflow image='/images/backgrounds/1.jpg'>
      <img src='/images/logo.png' className={styles.logo} />
      <div className={styles.strapline}>
        Affordable live music for any occasion
      </div>
    </Panel>
  )
}
