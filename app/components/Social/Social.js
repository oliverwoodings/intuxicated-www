import React from 'react'
import classnames from 'classnames'
import facebookSvg from '../../icons/facebook.svg'
import emailSvg from '../../icons/mail.svg'
import instagramSvg from '../../icons/instagram.svg'
import Icon from '../Icon'
import styles from './Social.css'

const CHANNELS = [
  { svg: facebookSvg, text: 'facebook.com/intuxicatedband', href: 'https://facebook.com/intuxicatedband' },
  { svg: instagramSvg, text: 'intuxigram', href: 'https://instagram.com/intuxigram' },
  { svg: emailSvg, text: 'hello@intuxicated.co.uk', href: 'emailto:hello@intuxicated.co.uk' }
]

export default function Social ({ inline, className }) {
  return (
    <div className={classnames(styles.root, className, { [styles.inline]: inline })}>
      {CHANNELS.map((channel) => <SocialItem key={channel.text} {...channel} />)}
    </div>
  )
}

function SocialItem ({ svg, text, href }) {
  return (
    <a className={styles.item} href={href}>
      <Icon svg={svg} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </a>
  )
}
