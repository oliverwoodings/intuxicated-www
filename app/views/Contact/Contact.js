import React from 'react'
import Panel from '../../components/Panel'
import Social from '../../components/Social'
import styles from './Contact.css'

export default function Contact () {
  return (
    <Panel className={styles.root} noOverflow image='/images/backgrounds/6.jpg'>
      <div className={styles.title}>Let's chat</div>
      <Social />
    </Panel>
  )
}
