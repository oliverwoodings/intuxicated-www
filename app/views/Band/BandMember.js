import React, { Component } from 'react'
import Icon from '../../components/Icon'
import personSvg from '../../icons/person.svg'
import styles from './BandMember.css'

export default class BandMember extends Component {
  render () {
    const { image, name, instrument } = this.props

    const style = {
      backgroundImage: `url('${image}')`
    }

    return (
      <div className={styles.root}>
        <div className={styles.background} style={style} />
        <div className={styles.content}>
          <div className={styles.detail}>{name}</div>
          <div className={styles.detail}>{instrument}</div>
        </div>
      </div>
    )
  }
}
