import React from 'react'
import Panel from '../../components/Panel'
import styles from './Charity.css'

export default function Charity () {
  return (
    <Panel className={styles.root} noOverflow image='/images/backgrounds/5.jpg'>
      Since forming in 2015 we have raised over £3000 for the Anthony Nolan charity, performing at a diverse range of events from weddings to local pub gigs.
      <img src='/images/anthony-nolan.png' className={styles.logo}/>
    </Panel>
  )
}
