import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import Charity from './Charity'
import Band from './Band'
import Contact from './Contact'
import styles from './App.css'

export default function App () {
  return (
    <div className={styles.root}>
      <Header />
      <Introduction />
      <Charity />
      <Band />
      <Contact />
    </div>
  )
}
