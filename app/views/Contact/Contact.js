import React from 'react'
import Panel from '../../components/Panel'
import Icon from '../../components/Icon'
import facebookSvg from '../../icons/facebook.svg'
import emailSvg from '../../icons/mail.svg'
import styles from './Contact.css'

export default function Contact () {
  return (
    <Panel className={styles.root} noOverflow image='/images/backgrounds/6.jpg'>
      <div className={styles.title}>Let's chat</div>
      <ContactItem svg={facebookSvg} text='facebook.com/intuxicatedband' />
      <ContactItem svg={emailSvg} text='hello@intuxicated.co.uk' />
    </Panel>
  )
}

function ContactItem ({ svg, text }) {
  return (
    <div className={styles.item}>
      <Icon svg={svg} className={styles.icon} />
      {text}
    </div>
  )
}
